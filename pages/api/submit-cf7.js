export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  const formData = new URLSearchParams();
  formData.append("your-name", name);
  formData.append("your-email", email);
  formData.append("your-message", message);

  try {
    const response = await fetch("https://wholesale.lintex.in/wp-json/contact-form-7/v1/contact-forms/28363/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });

    const data = await response.json();
    return res.status(response.status).json(data);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Something went wrong" });
  }
}