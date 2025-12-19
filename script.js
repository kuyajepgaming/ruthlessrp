const form = document.getElementById('userForm');
const status = document.getElementById('status');

// Replace with your Discord Webhook URL
const webhookURL = "YOUR_DISCORD_WEBHOOK_URL";

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const payload = {
    content: `**New Form Submission**\n**Name:** ${name}\n**Email:** ${email}\n**Message:** ${message}`
  };

  try {
    const response = await fetch(webhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      status.textContent = "Form submitted successfully!";
      form.reset();
    } else {
      status.textContent = "Failed to submit. Try again.";
    }
  } catch (error) {
    console.error(error);
    status.textContent = "Error sending data.";
  }
});
