const express = require('express');
const app = express();


async function sendWebhookMessage(message) {
    const { default: fetch } = await import('node-fetch');
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
  /*
async function sendWebhookMessage(message) {
    const { default: fetch } = await import('node-fetch');
    // Replace <WEBHOOK_URL> with the actual URL of your webhook
    const webhookUrl = "https://discord.com/api/webhooks/1123331049166995628/V73549NwP-nIeJROXA2ADaZTe36h2xkxbdmP7N4OB8tSyLL34rHaP0ggI44s-vs9oBA-";
  
    fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(message)
    })
    .then(response => {
      if (response.ok) {
        console.log('Message sent to the webhook successfully.');
      } else {
        console.error('Error sending message to the webhook:', response.status);
      }
    })
    .catch(error => {
      console.error('Error sending message to the webhook:', error);
    });
}
*/

app.all('/', (req, res) => {
    console.log("REQUEST DETECTED")
    res.send('API : SUCCESS REQUEST')
})

app.all('/dumps', async (req, res) => {
    console.log("REQUEST DETECTED : DUMPS PURCHASE");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/960424584694337587/960424958125822002/IMG_0680.png",
        content: "@everyone DUMPS PURCHASE"
    };
    await sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/rdp', (req, res) => {
    console.log("REQUEST DETECTED : RDP PURCHASE");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/960424584694337587/960424958125822002/IMG_0680.png",
        content: "@everyone RDP PURCHASE"
    };
    sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/proxy', (req, res) => {
    console.log("REQUEST DETECTED : PROXY PURCHASE");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/960424584694337587/960424958125822002/IMG_0680.png",
        content: "@everyone PROXY PURCHASE"
    };
    sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/software', (req, res) => {
    console.log("REQUEST DETECTED : SOFTWARE PURCHASE");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/960424584694337587/960424958125822002/IMG_0680.png",
        content: "@everyone SOFTWARE PURCHASE"
    };
    sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/app', (req, res) => {
    console.log("REQUEST DETECTED : APP PURCHASE");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/960424584694337587/960424958125822002/IMG_0680.png",
        content: "@everyone APP PURCHASE"
    };
    sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});





app.all('/option1', (req, res) => {
    console.log("REQUEST DETECTED : SELECTED OPTION 1");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/960424584694337587/960424958125822002/IMG_0680.png",
        content: "@everyone SELECTED OPTION 1"
    };
    sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/option2', (req, res) => {
    console.log("REQUEST DETECTED : SELECTED OPTION 2");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/960424584694337587/960424958125822002/IMG_0680.png",
        content: "@everyone 2"
    };
    sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/option3', (req, res) => {
    console.log("REQUEST DETECTED : SELECTED OPTION 3");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/960424584694337587/960424958125822002/IMG_0680.png",
        content: "@everyone SELECTED OPTION 3"
    };
    sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/option4', (req, res) => {
    console.log("REQUEST DETECTED : SELECTED OPTION 4");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/960424584694337587/960424958125822002/IMG_0680.png",
        content: "@everyone SELECTED OPTION 4"
    };
    sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/option5', (req, res) => {
    console.log("REQUEST DETECTED : SELECTED OPTION 5");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/960424584694337587/960424958125822002/IMG_0680.png",
        content: "@everyone SELECTED OPTION 5"
    };
    sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/option6', (req, res) => {
    console.log("REQUEST DETECTED : SELECTED OPTION 6");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/960424584694337587/960424958125822002/IMG_0680.png",
        content: "@everyone SELECTED OPTION 6"
    };
    sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/option7', (req, res) => {
    console.log("REQUEST DETECTED : SELECTED OPTION 7");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/960424584694337587/960424958125822002/IMG_0680.png",
        content: "@everyone SELECTED OPTION 7"
    };
    sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/option8', (req, res) => {
    console.log("REQUEST DETECTED : SELECTED OPTION 8");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/960424584694337587/960424958125822002/IMG_0680.png",
        content: "@everyone SELECTED OPTION 8"
    };
    sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/option9', (req, res) => {
    console.log("REQUEST DETECTED : SELECTED OPTION 9");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/960424584694337587/960424958125822002/IMG_0680.png",
        content: "@everyone SELECTED OPTION 9"
    };
    sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/option10', (req, res) => {
    console.log("REQUEST DETECTED : SELECTED OPTION 10");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/960424584694337587/960424958125822002/IMG_0680.png",
        content: "@everyone SELECTED OPTION 10"
    };
    sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/option11', (req, res) => {
    console.log("REQUEST DETECTED : SELECTED OPTION 11");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/960424584694337587/960424958125822002/IMG_0680.png",
        content: "@everyone SELECTED OPTION 11"
    };
    sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});




app.all('/balance', (req, res) => {
    console.log("REQUEST DETECTED : BALANCE REQUEST");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/960424584694337587/960424958125822002/IMG_0680.png",
        content: "BALANCE REQUEST MADE"
    };
    sendWebhookMessage(message);
    res.send('API : SUCCESSFUL REQUEST');
});

app.listen(process.env.PORT || 3000)