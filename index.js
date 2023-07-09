const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

let balance = 999999;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://www.ugmarket.shop');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

function sanitizeInput(inputValue) {
    // Basic input sanitization to prevent SQL injection
    const sanitizedValue = inputValue.replace(/'/g, '').replace(/"/g, '');
    return sanitizedValue;
}

app.post('/md5', (req, res) => {
    const { value } = req.body;
    if (!value) {
      return res.status(400).send("Error: 'value' parameter is missing in the request");
    }
  
    const sanitizedValue = sanitizeInput(value);
  
    // Calculate MD5 hash
    const md5Hash = crypto.createHash('md5').update(sanitizedValue).digest('hex');
  
    res.send(md5Hash);
});

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
    res.send('200');
});

app.all('/rdp', async (req, res) => {
    console.log("REQUEST DETECTED : RDP PURCHASE");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/960424584694337587/960424958125822002/IMG_0680.png",
        content: "@everyone RDP PURCHASE"
    };
    await sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/proxy', async (req, res) => {
    console.log("REQUEST DETECTED : PROXY PURCHASE");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/960424584694337587/960424958125822002/IMG_0680.png",
        content: "@everyone PROXY PURCHASE"
    };
    await sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/software', async (req, res) => {
    console.log("REQUEST DETECTED : SOFTWARE PURCHASE");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/960424584694337587/960424958125822002/IMG_0680.png",
        content: "@everyone SOFTWARE PURCHASE"
    };
    await sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/app', async (req, res) => {
    console.log("REQUEST DETECTED : APP PURCHASE");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/960424584694337587/960424958125822002/IMG_0680.png",
        content: "@everyone APP PURCHASE"
    };
    await sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});





app.all('/option1', async (req, res) => {
    console.log("REQUEST DETECTED : SELECTED OPTION 1");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/960424584694337587/960424958125822002/IMG_0680.png",
        content: "@everyone SELECTED OPTION 1"
    };
    await sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/option2', async (req, res) => {
    console.log("REQUEST DETECTED : SELECTED OPTION 2");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/960424584694337587/960424958125822002/IMG_0680.png",
        content: "@everyone 2"
    };
    await sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/option3', async (req, res) => {
    console.log("REQUEST DETECTED : SELECTED OPTION 3");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/960424584694337587/960424958125822002/IMG_0680.png",
        content: "@everyone SELECTED OPTION 3"
    };
    await sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/option4', async (req, res) => {
    console.log("REQUEST DETECTED : SELECTED OPTION 4");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/960424584694337587/960424958125822002/IMG_0680.png",
        content: "@everyone SELECTED OPTION 4"
    };
    await sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/option5', async (req, res) => {
    console.log("REQUEST DETECTED : SELECTED OPTION 5");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/960424584694337587/960424958125822002/IMG_0680.png",
        content: "@everyone SELECTED OPTION 5"
    };
    await sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/option6', async (req, res) => {
    console.log("REQUEST DETECTED : SELECTED OPTION 6");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/960424584694337587/960424958125822002/IMG_0680.png",
        content: "@everyone SELECTED OPTION 6"
    };
    await sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/option7', async (req, res) => {
    console.log("REQUEST DETECTED : SELECTED OPTION 7");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/960424584694337587/960424958125822002/IMG_0680.png",
        content: "@everyone SELECTED OPTION 7"
    };
    await sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/option8', async (req, res) => {
    console.log("REQUEST DETECTED : SELECTED OPTION 8");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/960424584694337587/960424958125822002/IMG_0680.png",
        content: "@everyone SELECTED OPTION 8"
    };
    await sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/option9', async (req, res) => {
    console.log("REQUEST DETECTED : SELECTED OPTION 9");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/960424584694337587/960424958125822002/IMG_0680.png",
        content: "@everyone SELECTED OPTION 9"
    };
    await sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/option10', async (req, res) => {
    console.log("REQUEST DETECTED : SELECTED OPTION 10");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/960424584694337587/960424958125822002/IMG_0680.png",
        content: "@everyone SELECTED OPTION 10"
    };
    await sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/option11', async (req, res) => {
    console.log("REQUEST DETECTED : SELECTED OPTION 11");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/960424584694337587/960424958125822002/IMG_0680.png",
        content: "@everyone SELECTED OPTION 11"
    };
    await sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/25', async (req, res) => {
    console.log("REQUEST DETECTED : AMOUNT 25");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/960424584694337587/960424958125822002/IMG_0680.png",
        content: "@everyone SELECTED AMOUNT 25"
    };
    await sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/50', async (req, res) => {
    console.log("REQUEST DETECTED : AMOUNT 50");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/960424584694337587/960424958125822002/IMG_0680.png",
        content: "@everyone SELECTED AMOUNT 50"
    };
    await sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/75', async (req, res) => {
    console.log("REQUEST DETECTED : AMOUNT 75");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/960424584694337587/960424958125822002/IMG_0680.png",
        content: "@everyone SELECTED AMOUNT 75"
    };
    await sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/100', async (req, res) => {
    console.log("REQUEST DETECTED : AMOUNT 100");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/960424584694337587/960424958125822002/IMG_0680.png",
        content: "@everyone SELECTED AMOUNT 100"
    };
    await sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/150', async (req, res) => {
    console.log("REQUEST DETECTED : AMOUNT 150");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/960424584694337587/960424958125822002/IMG_0680.png",
        content: "@everyone SELECTED AMOUNT 150"
    };
    await sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});




app.get('/balance', async (req, res) => {
    console.log("REQUEST DETECTED : BALANCE REQUEST");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/960424584694337587/960424958125822002/IMG_0680.png",
        content: "BALANCE REQUEST MADE"
    };
    await sendWebhookMessage(message);
    res.json({ balance });
});

app.post('/balance_edit', (req, res) => {
    const action = req.body.action;
    const amount = req.body.amount;
  
    if (action === 'add') {
      balance += amount;
      res.send("added amount");
      res.json({ balance });
    } else if (action === 'subtract') {
      balance -= amount;
      res.send("subtracted amount");
      res.json({ balance });
    }
});

  

app.all('/login', async (req, res) => {
    console.log("REQUEST DETECTED : BALANCE REQUEST");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/960424584694337587/960424958125822002/IMG_0680.png",
        content: "BALANCE REQUEST MADE"
    };
    await sendWebhookMessage(message);
    res.send('API : SUCCESSFUL REQUEST');
});

app.listen(process.env.PORT || 3000)