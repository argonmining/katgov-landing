export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const response = await fetch('https://hooks.zapier.com/hooks/catch/3848885/2rz601z/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req.body),
      });

      if (response.ok) {
        res.status(200).json({ message: 'Success' });
      } else {
        res.status(response.status).json({ message: 'Failed to submit form' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
} 