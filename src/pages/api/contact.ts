import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const TO_EMAIL = 'info@bepartnerlabs.com';
const FROM_EMAIL = 'Be Partner Labs <onboarding@resend.dev>';

const VALID_INTENTS = ['discovery', 'partnership', 'general'];

const INTENT_LABELS: Record<string, string> = {
  discovery: 'Discovery Sprint',
  partnership: 'Partnership',
  general: 'General',
};

interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  message: string;
  intent: string;
}

function validatePayload(body: unknown): body is ContactPayload {
  if (typeof body !== 'object' || body === null) return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.name === 'string' && b.name.trim().length > 0 &&
    typeof b.email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.email) &&
    typeof b.message === 'string' && b.message.trim().length > 0 &&
    typeof b.intent === 'string'
  );
}

export const POST: APIRoute = async ({ request }) => {
  // Parse JSON body
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return new Response(
      JSON.stringify({ success: false, error: 'Invalid JSON body.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  if (!validatePayload(body)) {
    return new Response(
      JSON.stringify({ success: false, error: 'Missing or invalid required fields.', missing: ['name', 'email', 'message'] }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const { name, email, company, message, intent } = body;
  const intentLabel = INTENT_LABELS[intent] ?? intent;
  const safeIntent = VALID_INTENTS.includes(intent) ? intent : 'general';

  const apiKey = import.meta.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[contact API] RESEND_API_KEY is not set');
    return new Response(
      JSON.stringify({ success: false, error: 'Service temporarily unavailable. Please try again later.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const resend = new Resend(apiKey);

  const emailHtml = `
    <h2>New Contact Request</h2>
    <p><strong>Intent:</strong> ${intentLabel}</p>
    <hr/>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
    <hr/>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, '<br/>')}</p>
  `;

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `[BePartnerLabs] Contact — ${intentLabel} from ${name}`,
      html: emailHtml,
      replyTo: email,
    });

    if (error) {
      console.error('[contact API] Resend error:', error);
      return new Response(
        JSON.stringify({ success: false, error: 'Failed to send message. Please try again later.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    console.error('[contact API] Unexpected error:', err);
    return new Response(
      JSON.stringify({ success: false, error: 'Service temporarily unavailable. Please try again later.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};