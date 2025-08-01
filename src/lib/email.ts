// src/lib/email.ts
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export async function sendEmail({
	to,
	from,
	subject,
	html,
}: {
	to: string;
	from: string;
	subject: string;
	html: string;
}) {
	try {
		const result = await resend.emails.send({
			to,
			from,
			subject,
			html,
		});
		return { success: true, result };
	} catch (error) {
		console.error('Email sending failed:', error);
		return { success: false, error };
	}
}
