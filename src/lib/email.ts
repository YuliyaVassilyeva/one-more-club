import { Resend } from "resend";

let cached: Resend | null = null;

function resend(): Resend {
  if (cached) return cached;
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("Missing RESEND_API_KEY env var.");
  cached = new Resend(key);
  return cached;
}

export type SendVerificationArgs = {
  to: string;
  token: string;
  appUrl: string;
};

export async function sendVerificationEmail({
  to,
  token,
  appUrl,
}: SendVerificationArgs) {
  const from = process.env.RESEND_FROM ?? "One More Club <hello@onemoreclub.xyz>";
  const confirmUrl = `${appUrl.replace(/\/$/, "")}/api/waitlist/verify?token=${encodeURIComponent(token)}`;

  return resend().emails.send({
    from,
    to,
    subject: "Confirm your spot on the One More Club waitlist",
    html: renderHtml(confirmUrl),
    text: renderText(confirmUrl),
    headers: {
      "List-Unsubscribe": `<mailto:hello@onemoreclub.xyz?subject=unsubscribe>`,
    },
  });
}

function renderText(confirmUrl: string): string {
  return [
    "Welcome to One More Club.",
    "",
    "Tap the link below to confirm your email and lock in your spot on the waitlist:",
    confirmUrl,
    "",
    "If you didn't sign up, you can safely ignore this email.",
    "",
    "— One More Club",
    "onemoreclub.xyz",
  ].join("\n");
}

function renderHtml(confirmUrl: string): string {
  // Bulletproof email: table-based, inline styles, 600px max width, system
  // font stack, and a VML fallback inside the CTA for Outlook.
  const preheader =
    "One tap to confirm your email and lock in your spot on the waitlist.";

  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="x-apple-disable-message-reformatting" />
  <meta name="color-scheme" content="light" />
  <meta name="supported-color-schemes" content="light" />
  <title>Confirm your email</title>
  <!--[if mso]>
  <style type="text/css">
    body, table, td, a { font-family: Arial, Helvetica, sans-serif !important; }
  </style>
  <![endif]-->
  <style>
    @media (max-width: 620px) {
      .container { width: 100% !important; }
      .px { padding-left: 24px !important; padding-right: 24px !important; }
      .py-hero { padding-top: 40px !important; padding-bottom: 40px !important; }
      .h1 { font-size: 26px !important; line-height: 32px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background:#fef3c7; color:#1f2937;">
  <div style="display:none; font-size:1px; line-height:1px; max-height:0; max-width:0; opacity:0; overflow:hidden; mso-hide:all;">
    ${preheader}
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#fef3c7;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px; max-width:600px; background:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 1px 3px rgba(0,0,0,0.06);">
          <tr>
            <td class="py-hero px" align="center" style="background:linear-gradient(135deg,#65a30d 0%,#115e59 100%); background-color:#115e59; padding:56px 40px; color:#ffffff;">
              <div style="font-size:44px; line-height:1; margin-bottom:16px;">🔐</div>
              <h1 class="h1" style="margin:0 0 8px 0; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif; font-size:30px; line-height:36px; font-weight:800; color:#ffffff; letter-spacing:-0.01em;">
                Welcome to One More Club
              </h1>
              <p style="margin:0; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif; font-size:15px; line-height:22px; color:#d1fae5;">
                Your data, your proof.
              </p>
            </td>
          </tr>

          <tr>
            <td class="px" style="padding:40px 48px 16px 48px; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif; font-size:16px; line-height:26px; color:#1f2937;">
              <p style="margin:0 0 16px 0;">Hey there,</p>
              <p style="margin:0 0 16px 0;">
                Thanks for joining the waitlist. One tap to confirm your email, and you&rsquo;re in.
              </p>
            </td>
          </tr>

          <tr>
            <td class="px" align="center" style="padding:16px 48px 8px 48px;">
              <!--[if mso]>
              <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${confirmUrl}" style="height:52px;v-text-anchor:middle;width:280px;" arcsize="14%" strokecolor="#115e59" fillcolor="#115e59">
                <w:anchorlock/>
                <center style="color:#ffffff;font-family:Arial,sans-serif;font-size:16px;font-weight:bold;">Confirm my email</center>
              </v:roundrect>
              <![endif]-->
              <!--[if !mso]><!-- -->
              <a href="${confirmUrl}"
                 style="display:inline-block; background:#115e59; color:#ffffff; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif; font-size:16px; font-weight:700; line-height:52px; text-decoration:none; text-align:center; padding:0 36px; border-radius:9999px; min-width:200px;">
                Confirm my email
              </a>
              <!--<![endif]-->
            </td>
          </tr>

          <tr>
            <td class="px" style="padding:24px 48px 8px 48px; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif; font-size:13px; line-height:20px; color:#6b7280;">
              <p style="margin:0 0 8px 0;">
                Button not working? Paste this into your browser:
              </p>
              <p style="margin:0 0 24px 0; word-break:break-all;">
                <a href="${confirmUrl}" style="color:#0f766e; text-decoration:underline;">${confirmUrl}</a>
              </p>
            </td>
          </tr>

          <tr>
            <td class="px" style="padding:0 48px 40px 48px;">
              <hr style="border:none; border-top:1px solid #f3f4f6; margin:0 0 20px 0;" />
              <p style="margin:0; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif; font-size:12px; line-height:18px; color:#9ca3af;">
                You&rsquo;re getting this because someone entered this address at
                <a href="https://onemoreclub.xyz" style="color:#9ca3af; text-decoration:underline;">onemoreclub.xyz</a>.
                If that wasn&rsquo;t you, just ignore this email &mdash; nothing happens without the confirm tap above.
              </p>
            </td>
          </tr>
        </table>

        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px; max-width:600px;">
          <tr>
            <td align="center" style="padding:16px 16px 0 16px; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif; font-size:12px; line-height:18px; color:#92400e;">
              One More Club &middot; hello@onemoreclub.xyz
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
