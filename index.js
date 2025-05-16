require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

client.once('ready', () => {
  console.log(`✅ Bot is online als ${client.user.tag}`);
});

client.on('messageCreate', message => {
  if (message.content === '!ping') {
    console.log('Ping ontvangen!');
    message.reply('🏓 Pong!');
  }
});

client.login(process.env.BOT_TOKEN
    );
    // Klein webservertje zodat Railway denkt dat de app actief is
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('🤖 AI Command Center is actief!');
});

app.listen(PORT, () => {
  console.log(`🌐 Webserver draait op http://localhost:${PORT}`);
});
