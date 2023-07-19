const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const crypto = require('crypto');
//const Web3 = require('web3');
const bitcoin = require('bitcoinjs-lib');

const app = express();
//const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/fb43b5a5ec81406c90cbbeb12cda191a'));


//https://www.ugmarket.shop
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://ug-mkt-live.glitch.me');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());


const generateRandomSecret = () => {
  return crypto.randomBytes(64).toString('hex');
};
const secretKey = generateRandomSecret();
app.use(express.json());
app.use(session({
    secret: "4e0a889fed14777bf9c365b64e7f8fc7047d18ef4d1614487b1e3fb2e952b3db",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: true, // Enable this if your site uses HTTPS
      httpOnly: true, // Prevent client-side JavaScript access to the session cookie
      maxAge: 7200000 // Set the cookie expiration time in milliseconds (e.g., 2 hour)
    }
}));











/*

app.get('/eth/balance/:walletAddress', async (req, res) => {
    const walletAddress = req.params.walletAddress;
    try {
      const balance = await web3.eth.getBalance(walletAddress);
      res.json({ balance: balance });
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve Ethereum balance.' });
    }
});

app.get('/crypto/balance/:currency/:walletAddress', async (req, res) => {
    const currency = req.params.currency.toLowerCase();
    const walletAddress = req.params.walletAddress;
    try {
      let network;
      if (currency === 'btc') {
        network = bitcoin.networks.bitcoin;
      } else if (currency === 'ltc') {
        network = bitcoin.networks.litecoin;
      } else {
        return res.status(400).json({ error: 'Invalid currency specified.' });
      }
  
      const client = new bitcoin.Client({ network: network });
      const balance = await client.getBalance(walletAddress);
      res.json({ balance: balance });
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve wallet balance.' });
    }
});*/

app.get('/crypto/balance/:currency/:walletAddress', async (req, res) => {
    const currency = req.params.currency.toLowerCase();
    const walletAddress = req.params.walletAddress;
    try {
      let network;
      if (currency === 'btc') {
        network = bitcoin.networks.bitcoin;
      } else if (currency === 'ltc') {
        network = bitcoin.networks.litecoin;
      } else {
        return res.status(400).json({ error: 'Invalid currency specified.' });
      }
  
      const publicKey = bitcoin.address.toOutputScript(walletAddress, network);
      const { data } = await bitcoin.blockchain.chain.getChainTips();
      const chain = data[0].hash;
      const response = await bitcoin.blockchain.chain.getUtxo(publicKey, chain);
      const balance = response.reduce((acc, utxo) => acc + utxo.value, 0);
      res.json({ balance: balance });
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve wallet balance.' });
    }
});







let balance = 233.90;



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

function getUserByUsername(username) {
  if (username === "admin"){
    const user = {
        username: 'admin',
        password: 'password'
    }
    return user;
  } else{
    return error;
  }
};

async function sendWebhookMessage(message) {
    const { default: fetch } = await import('node-fetch');
    const webhookUrl = "https://discord.com/api/webhooks/1128580834698477669/3fhD8kuEH0xVJz9flUCIn5tWnOmnDWJRt9M-JybgrhEh857gBk7-C4XE0attUxkPUEgr";
  
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

async function sendWebhookMessage2(message) {
    const { default: fetch } = await import('node-fetch');
    const webhookUrl = "https://discord.com/api/webhooks/1128579610523730000/7lQyRrBImJ9qNHhvq-JL3n2_xkY-WMJHIVNSWHYtZ1q6IlYH50Ist3w8Ij7hcsCneMyE";
  
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
});

app.all('/activate', async (req, res) => {
    console.log("REQUEST DETECTED : OPEN ACTIVATION");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/1128583298562658445/1128583446952935424/ug-mkt.png",
        content: "ACTIVATION PAGE OPENED"
    };
    await sendWebhookMessage2(message);
    res.send('200');
});

app.all('/activate_bal', async (req, res) => {
    console.log("REQUEST DETECTED : OPEN  REFRESH ACTIVATION");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/1128583298562658445/1128583446952935424/ug-mkt.png",
        content: "ACTIVATION BALANCE REFRESHED"
    };
    await sendWebhookMessage2(message);
    res.send('200');
});

app.all('/dumps', async (req, res) => {
    console.log("REQUEST DETECTED : DUMPS PURCHASE");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/1128583298562658445/1128583378577391616/invert-ug.png",
        content: "@everyone DUMPS PURCHASE"
    };
    await sendWebhookMessage(message);
    res.send('200');
});

app.all('/rdp', async (req, res) => {
    console.log("REQUEST DETECTED : RDP PURCHASE");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/1128583298562658445/1128583378577391616/invert-ug.png",
        content: "@everyone RDP PURCHASE"
    };
    await sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/proxy', async (req, res) => {
    console.log("REQUEST DETECTED : PROXY PURCHASE");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/1128583298562658445/1128583378577391616/invert-ug.png",
        content: "@everyone PROXY PURCHASE"
    };
    await sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/software', async (req, res) => {
    console.log("REQUEST DETECTED : SOFTWARE PURCHASE");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/1128583298562658445/1128583378577391616/invert-ug.png",
        content: "@everyone SOFTWARE PURCHASE"
    };
    await sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/app', async (req, res) => {
    console.log("REQUEST DETECTED : APP PURCHASE");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/1128583298562658445/1128583378577391616/invert-ug.png",
        content: "@everyone APP PURCHASE"
    };
    await sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});





app.all('/option1', async (req, res) => {
    console.log("REQUEST DETECTED : SELECTED OPTION 1");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/1128583298562658445/1128583378577391616/invert-ug.png",
        content: "@everyone SELECTED OPTION 1"
    };
    await sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/option2', async (req, res) => {
    console.log("REQUEST DETECTED : SELECTED OPTION 2");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/1128583298562658445/1128583378577391616/invert-ug.png",
        content: "@everyone 2"
    };
    await sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/option3', async (req, res) => {
    console.log("REQUEST DETECTED : SELECTED OPTION 3");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/1128583298562658445/1128583378577391616/invert-ug.png",
        content: "@everyone SELECTED OPTION 3"
    };
    await sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/option4', async (req, res) => {
    console.log("REQUEST DETECTED : SELECTED OPTION 4");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/1128583298562658445/1128583378577391616/invert-ug.png",
        content: "@everyone SELECTED OPTION 4"
    };
    await sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/option5', async (req, res) => {
    console.log("REQUEST DETECTED : SELECTED OPTION 5");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/1128583298562658445/1128583378577391616/invert-ug.png",
        content: "@everyone SELECTED OPTION 5"
    };
    await sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/option6', async (req, res) => {
    console.log("REQUEST DETECTED : SELECTED OPTION 6");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/1128583298562658445/1128583378577391616/invert-ug.png",
        content: "@everyone SELECTED OPTION 6"
    };
    await sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/option7', async (req, res) => {
    console.log("REQUEST DETECTED : SELECTED OPTION 7");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/1128583298562658445/1128583378577391616/invert-ug.png",
        content: "@everyone SELECTED OPTION 7"
    };
    await sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/option8', async (req, res) => {
    console.log("REQUEST DETECTED : SELECTED OPTION 8");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/1128583298562658445/1128583378577391616/invert-ug.png",
        content: "@everyone SELECTED OPTION 8"
    };
    await sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/option9', async (req, res) => {
    console.log("REQUEST DETECTED : SELECTED OPTION 9");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/1128583298562658445/1128583378577391616/invert-ug.png",
        content: "@everyone SELECTED OPTION 9"
    };
    await sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/option10', async (req, res) => {
    console.log("REQUEST DETECTED : SELECTED OPTION 10");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/1128583298562658445/1128583378577391616/invert-ug.png",
        content: "@everyone SELECTED OPTION 10"
    };
    await sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/option11', async (req, res) => {
    console.log("REQUEST DETECTED : SELECTED OPTION 11");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/1128583298562658445/1128583378577391616/invert-ug.png",
        content: "@everyone SELECTED OPTION 11"
    };
    await sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/25', async (req, res) => {
    console.log("REQUEST DETECTED : AMOUNT 25");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/1128583298562658445/1128583378577391616/invert-ug.png",
        content: "@everyone SELECTED AMOUNT 25"
    };
    await sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/50', async (req, res) => {
    console.log("REQUEST DETECTED : AMOUNT 50");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/1128583298562658445/1128583378577391616/invert-ug.png",
        content: "@everyone SELECTED AMOUNT 50"
    };
    await sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/75', async (req, res) => {
    console.log("REQUEST DETECTED : AMOUNT 75");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/1128583298562658445/1128583378577391616/invert-ug.png",
        content: "@everyone SELECTED AMOUNT 75"
    };
    await sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/100', async (req, res) => {
    console.log("REQUEST DETECTED : AMOUNT 100");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/1128583298562658445/1128583378577391616/invert-ug.png",
        content: "@everyone SELECTED AMOUNT 100"
    };
    await sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});

app.all('/150', async (req, res) => {
    console.log("REQUEST DETECTED : AMOUNT 150");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/1128583298562658445/1128583378577391616/invert-ug.png",
        content: "@everyone SELECTED AMOUNT 150"
    };
    await sendWebhookMessage(message);
    res.send('API : SUCCESS REQUEST');
});




app.get('/balance', async (req, res) => {
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/1128583298562658445/1128583378577391616/invert-ug.png",
        content: "BALANCE REQUEST MADE"
    };
    await sendWebhookMessage(message);
    res.json({ balance });
});

app.get('/balance_info', async (req, res) => {
    console.log("REQUEST DETECTED : BALANCE REQUEST FROM /bypass/wallet");
    const message = {
        username: "UGMARKET",
        avatar_url: "https://cdn.discordapp.com/attachments/1128583298562658445/1128583378577391616/invert-ug.png",
        content: "BALANCE REQUEST MADE"
    };
    await sendWebhookMessage(message);


    let btc = 0;
    let eth = 0;
    let ltc = 999999;
    res.json({ balance, btc, eth, ltc });
});


app.post('/balance_edit', (req, res) => {
    const action = req.body.action;
    const amount = req.body.amount;
    console.log(action);
    console.log(amount);
    if (action === 'add') {
      balance += amount;
      res.json({ balance });
    } else if (action === 'subtract') {
      balance -= amount;
      res.json({ balance });
    }
   
});

app.post('/login', (req, res) => {
    /*const username = req.body.username;
    const password = req.body.password;
  
    // Check if the credentials match
    if (username === 'admin' && password === 'password') {
      res.sendStatus(200); // Successful login
    } else {
      res.sendStatus(401); // Unauthorized
    } 
----
    const { username, password } = req.body;

    // Assuming you have a user database or storage mechanism
    const user = getUserByUsername(username);

    if (!user || user.password !== password) {
      // Invalid credentials
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Create a session for the user
    req.session.userId = user.id;

    generateRandomSecret();
    // Return a success response
    res.json({ token: secretKey });*/
  const { username, password } = req.body;

  const user = getUserByUsername(username);

  if (!user || user.password !== password) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }

  req.session.userId = user.id;

  secretKey = generateRandomSecret(); // Update the secret key

  res.json({ token: secretKey });
});

// Mock user credentials (replace with your own authentication mechanism)
const validCredentials = {
  username: 'admin',
  password: 'password',
  username2: 'j',
  password2: 'l'
};

// Login endpoint
app.post('/login2', (req, res) => {
  const { username, password } = req.body;

  // Check if the provided credentials match the valid credentials
  if (username === validCredentials.username || username === validCredentials.username2 && password === validCredentials.password || password === validCredentials.password2) {
    // Generate a session cookie (replace with your own session management mechanism)
    //const sessionCookie = '4e0a889fed14777bf9c365b64e7f8fc7047d18ef4d1614487b1e3fb2e952b3db';
    const sessionCookie = req.session;
    // Set the session cookie in the response
    res.cookie('session', sessionCookie, { httpOnly: true });

    // Respond with a success message
    res.json({ message: 'Login successful', 'session': sessionCookie});
  } else {
    // If credentials are incorrect, respond with an error message
    res.status(401).json({ error: 'Invalid credentials' });
  }
});







app.listen(process.env.PORT || 3000)