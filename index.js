
const express = require("express");
const app = express();
const cron = require('node-cron');
//const dotenv = require("dotenv");

app.listen(3000, () => {
  console.log("Project is running!");
})

app.get("/", (req, res) =>{
  res.send("Hello World!");
})

const Discord = require("discord.js");
const client  = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

// proob  
client.on("ready", () => {
  var testChannel =  client.channels.cache.find(channel => channel.id === "974312830708891663");


  cron.schedule('0 0 5 * *', () => {
  testChannel.send('This message is send every day at 9am');
  
});
  
})

console.log(new Date())


//tesst



client.on("message", message => {
          if(message.content === "Hello World"){
            message.channel.send("Hi guys")
          }
})

client.login("OTk1NjcxOTY4NjI2MDA0MDc4.Gx2d1h.aNyMWJXX6_KgmVpeLsqSDG1YvtGWjiaZ8QLTO8");