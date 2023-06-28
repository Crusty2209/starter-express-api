const express = require('express');
const app = express();

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


app.all('/', (req, res) => {
    console.log("REQUEST DETECTED")
    res.send('API : SUCCESS REQUEST')
})

app.all('/dumps', (req, res) => {
    console.log("REQUEST DETECTED : DUMPS PURCHASE");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/960424584694337587/960424958125822002/IMG_0680.png",
        content: "<@everyone> Some message you want to send"
    };
    sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/rdp', (req, res) => {
    console.log("REQUEST DETECTED : RDP PURCHASE");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/960424584694337587/960424958125822002/IMG_0680.png",
        content: "<@everyone> Some message you want to send"
    };
    sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/proxy', (req, res) => {
    console.log("REQUEST DETECTED : PROXY PURCHASE");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/960424584694337587/960424958125822002/IMG_0680.png",
        content: "<@everyone> Some message you want to send"
    };
    sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/software', (req, res) => {
    console.log("REQUEST DETECTED : SOFTWARE PURCHASE");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/960424584694337587/960424958125822002/IMG_0680.png",
        content: "<@everyone> Some message you want to send"
    };
    sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/app', (req, res) => {
    console.log("REQUEST DETECTED : APP PURCHASE");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/960424584694337587/960424958125822002/IMG_0680.png",
        content: "<@everyone> Some message you want to send"
    };
    sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});





app.all('/option1', (req, res) => {
    console.log("REQUEST DETECTED : RDP PURCHASE");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/960424584694337587/960424958125822002/IMG_0680.png",
        content: "<@everyone> Some message you want to send"
    };
    sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/option2', (req, res) => {
    console.log("REQUEST DETECTED : RDP PURCHASE");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/960424584694337587/960424958125822002/IMG_0680.png",
        content: "<@everyone> Some message you want to send"
    };
    sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/option3', (req, res) => {
    console.log("REQUEST DETECTED : RDP PURCHASE");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/960424584694337587/960424958125822002/IMG_0680.png",
        content: "<@everyone> Some message you want to send"
    };
    sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/option4', (req, res) => {
    console.log("REQUEST DETECTED : RDP PURCHASE");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/960424584694337587/960424958125822002/IMG_0680.png",
        content: "<@everyone> Some message you want to send"
    };
    sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/option5', (req, res) => {
    console.log("REQUEST DETECTED : RDP PURCHASE");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/960424584694337587/960424958125822002/IMG_0680.png",
        content: "<@everyone> Some message you want to send"
    };
    sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/option6', (req, res) => {
    console.log("REQUEST DETECTED : RDP PURCHASE");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/960424584694337587/960424958125822002/IMG_0680.png",
        content: "<@everyone> Some message you want to send"
    };
    sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/option7', (req, res) => {
    console.log("REQUEST DETECTED : RDP PURCHASE");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/960424584694337587/960424958125822002/IMG_0680.png",
        content: "<@everyone> Some message you want to send"
    };
    sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/option8', (req, res) => {
    console.log("REQUEST DETECTED : RDP PURCHASE");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/960424584694337587/960424958125822002/IMG_0680.png",
        content: "<@everyone> Some message you want to send"
    };
    sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/option9', (req, res) => {
    console.log("REQUEST DETECTED : RDP PURCHASE");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/960424584694337587/960424958125822002/IMG_0680.png",
        content: "<@everyone> Some message you want to send"
    };
    sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/option10', (req, res) => {
    console.log("REQUEST DETECTED : RDP PURCHASE");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/960424584694337587/960424958125822002/IMG_0680.png",
        content: "<@everyone> Some message you want to send"
    };
    sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/option11', (req, res) => {
    console.log("REQUEST DETECTED : RDP PURCHASE");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/960424584694337587/960424958125822002/IMG_0680.png",
        content: "<@everyone> Some message you want to send"
    };
    sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});




app.all('/balance', (req, res) => {
    console.log("REQUEST DETECTED : BALANCE REQUEST");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/960424584694337587/960424958125822002/IMG_0680.png",
        content: "<@everyone> Some message you want to send"
    };
    sendWebhookMessage(message);
    res.send('API : SUCCESSFUL REQUEST');
});

app.listen(process.env.PORT || 3000)