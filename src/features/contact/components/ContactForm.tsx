import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  type ContactFormValues,
  type ContactFormTranslations,
  contactFormSchema,
  type ContactFormApiResponse,
} from '../type';
import { setGlobalZodErrorMap } from '@/i18n/zodErrorMap';
import type { LanguageCode } from '@/i18n/ui';
import { Loader2, Send } from 'lucide-react';
import { toast } from 'sonner';

interface ContactFormProps {
  lang: LanguageCode;
  formTranslations: ContactFormTranslations;
  onSubmitSuccess?: () => void;
}

export function ContactForm({
  lang,
  formTranslations,
  onSubmitSuccess,
}: ContactFormProps) {
  useEffect(() => {
    setGlobalZodErrorMap(lang);
  }, [lang]);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    },
    mode: 'onBlur',
  });

  async function onSubmit(values: ContactFormValues) {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...values, lang }),
      });

      let result: ContactFormApiResponse;

      try {
        const contentType = response.headers.get('Content-Type');
        if (contentType && contentType.includes('application/json')) {
          result = await response.json();
        } else {
          throw new Error('Respuesta no es JSON');
        }
      } catch (e) {
        console.error('Error al parsear respuesta JSON del servidor:', e);
        toast.error(formTranslations.toastErrorUnexpected);
        return;
      }

      if (!response.ok || result.status === 'error') {
        let errorMessage =
          result.message || formTranslations.toastErrorFailedToSend;
        if (result.errors) {
          const errorMessages = Object.values(result.errors).flat().join('\n');
          errorMessage += `\n\n${formTranslations.toastErrorDetails}\n${errorMessages}`;
        }
        toast.error(errorMessage);
        return;
      }

      toast.success(
        result.message || formTranslations.toastSuccessMessageSent
      );
      form.reset();
      if (onSubmitSuccess) {
        onSubmitSuccess();
      }
    } catch (error) {
      console.error('Error inesperado durante envío del formulario:', error);
      toast.error(formTranslations.toastErrorUnexpected);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{formTranslations.firstNameLabel}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={formTranslations.firstNamePlaceholder}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{formTranslations.lastNameLabel}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={formTranslations.lastNamePlaceholder}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{formTranslations.emailLabel}</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder={formTranslations.emailPlaceholder}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{formTranslations.messageLabel}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={formTranslations.messagePlaceholder}
                  rows={5}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full"
          size="lg"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? (
            <Loader2 className="mr-2 size-4 animate-spin" />
          ) : (
            <>
              <Send className="mr-2 size-4" />
              {formTranslations.sendButtonLabel}
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
