const express = require("express");
const app = express();

app.listen(() => console.log(" Bird YT start "));
app.use('/ping', (req, res) => {
  res.send(new Date());
});

const { TOKEN, CHANNEL, SERVER, STATUS, LIVE } = require("./config.json");
const discord = require("discord.js");
const client = new discord.Client();
const ytdl = require('ytdl-core');
///////بوت قرأن كريم by elegant
client.on('ready', async () => {
  client.user.setActivity(STATUS + " 😎")
  let channel = client.channels.cache.get(CHANNEL) || await client.channels.fetch(CHANNEL)

  if(!channel) return;
  const connection = await channel.join();
  connection.play(ytdl(LIVE))
})
///////بوت قرأن كريم by elegant
setInterval(async function() {
  if(!client.voice.connections.get(SERVER)) {
    let channel = client.channels.cache.get(CHANNEL) || await client.channels.fetch(CHANNEL)
    if(!channel) return;

    const connection = await channel.join()
    connection.play(ytdl(LIVE))
  }
}, 20000)
///////بوت قرأن كريم by elegant
client.login(TOKEN)
