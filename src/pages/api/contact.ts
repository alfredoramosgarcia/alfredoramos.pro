import type { APIRoute } from 'astro';
import { contactFormSchema as ContactFormSchema } from '@/features/contact/type';
import { ui, type LanguageCode } from '@/i18n/ui';
import type {
  ContactFormTranslations,
  ContactFormApiResponse,
} from '@/features/contact/type';
import { sendEmail } from '@/lib/email';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  let lang: LanguageCode = 'en';
  let currentTranslations: ContactFormTranslations = ui[lang].contactPage;

  let formDataForValidation;
  try {
    const requestBody = await request.json();
    const requestLang = requestBody.lang as LanguageCode | undefined;
    if (requestLang && ui[requestLang]) {
      lang = requestLang;
      currentTranslations = ui[lang].contactPage;
    }

    const { lang: _lang, ...restOfBody } = requestBody;
    formDataForValidation = restOfBody;
  } catch (error) {
    return new Response(
      JSON.stringify({
        status: 'error',
        message: currentTranslations.toastErrorUnexpected,
        error: 'Invalid JSON input',
      }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const validationResult = ContactFormSchema.safeParse(formDataForValidation);

  if (!validationResult.success) {
    return new Response(
      JSON.stringify({
        status: 'error',
        message: currentTranslations.toastErrorValidationFailed,
        errors: validationResult.error.flatten().fieldErrors,
      }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const { firstName, lastName, email, message } = validationResult.data;

  // ✅ Enviar email real con Resend
  const sendResult = await sendEmail({
    to: import.meta.env.EMAIL_RECEIVER,
    from: import.meta.env.EMAIL_SENDER,
    subject: `Nuevo mensaje de ${firstName} ${lastName}`,
    html: `
      <p><strong>Nombre:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${message}</p>
    `,
  });

  if (!sendResult.success) {
    return new Response(
      JSON.stringify({
        status: 'error',
        message: currentTranslations.toastErrorFailedToSend,
        error: sendResult.error,
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  return new Response(
    JSON.stringify({
      status: 'success',
      message: currentTranslations.toastSuccessMessageSent,
    }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
};
