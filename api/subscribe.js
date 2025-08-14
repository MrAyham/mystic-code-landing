export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }
  try {
    const { name, email, path } = req.body || {};
    if (!email) return res.status(400).json({ ok: false, error: 'Email required' });

    // Optional: MailerLite v2 API
    const ML_API_KEY = process.env.MAILERLITE_API_KEY;
    const ML_GROUP_ID = process.env.MAILERLITE_GROUP_ID; // optional: add to a group

    if (ML_API_KEY) {
      const payload = {
        email,
        fields: { name, path },
        groups: ML_GROUP_ID ? [ML_GROUP_ID] : []
      };
      const r = await fetch('https://api.mailerlite.com/api/v2/subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-MailerLite-ApiKey': ML_API_KEY
        },
        body: JSON.stringify(payload)
      });
      // Ignore non-2xx but log
      if (!r.ok) {
        const txt = await r.text();
        console.warn('MailerLite error:', txt);
      }
    }

    // You can add other providers here (e.g., ConvertKit)

    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error(e);
    return res.status(200).json({ ok: true, note: 'Soft success (fail-open)' });
  }
}
