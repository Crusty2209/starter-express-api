const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = process.env.PORT || 3000;

async function sendWebhookMessage(message) {
  // Replace <WEBHOOK_URL> with the actual URL of your webhook
  const webhookUrl = "https://discord.com/api/webhooks/1123331049166995628/V73549NwP-nIeJROXA2ADaZTe36h2xkxbdmP7N4OB8tSyLL34rHaP0ggI44s-vs9oBA-";

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(message)
    });

    if (response.ok) {
      console.log('Message sent to the webhook successfully.');
    } else {
      console.error('Error sending message to the webhook:', response.status);
    }
  } catch (error) {
    console.error('Error sending message to the webhook:', error);
  }
}

app.all('/', (req, res) => {
  console.log("REQUEST DETECTED");
  res.send('API: SUCCESS REQUEST');
});

app.all('/dumps', (req, res) => {
  console.log("REQUEST DETECTED: DUMPS PURCHASE");
  const message = {
    text: 'PURCHASED DUMPS'
  };
  sendWebhookMessage(message);
  res.send('API: SUCCESS REQUEST');
});

app.all('/rdp', (req, res) => {
  console.log("REQUEST DETECTED: RDP PURCHASE");
  const message = {
    text: 'PURCHASED RDP'
  };
  sendWebhookMessage(message);
  res.send('API: SUCCESS REQUEST');
});

app.all('/proxy', (req, res) => {
  console.log("REQUEST DETECTED: PROXY PURCHASE");
  const message = {
    text: 'PURCHASED PROXY'
  };
  sendWebhookMessage(message);
  res.send('API: SUCCESS REQUEST');
});

app.all('/software', (req, res) => {
  console.log("REQUEST DETECTED: SOFTWARE PURCHASE");
  const message = {
    text: 'PURCHASED RDP SOFTWARE'
  };
  sendWebhookMessage(message);
  res.send('API: SUCCESS REQUEST');
});

app.all('/app', (req, res) => {
  console.log("REQUEST DETECTED: APP PURCHASE");
  const message = {
    text: 'PURCHASED APP'
  };
  sendWebhookMessage(message);
  res.send('API: SUCCESS REQUEST');
});

app.all('/option1', (req, res) => {
  console.log("REQUEST DETECTED: OPTION 1 SELECTED");
  const message = {
    text: 'SELECTED OPTION 1'
  };
  sendWebhookMessage(message);
  res.send('API: SUCCESS REQUEST');
});

app.all('/option2', (req, res) => {
  console.log("REQUEST DETECTED: OPTION 2 SELECTED");
  const message = {
    text: 'SELECTED OPTION 2'
  };
  sendWebhookMessage(message);
  res.send('API: SUCCESS REQUEST');
});

// Repeat the above pattern for option3, option4, ..., option11

app.all('/balance', (req, res) => {
  console.log("REQUEST DETECTED: BALANCE REQUEST");
  const message = {
    text: 'Requested balance'
  };
  sendWebhookMessage(message);
  res.send('API: SUCCESS REQUEST');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
