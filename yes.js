const Discord = require('discord.js'),
    client = new Discord.Client({sisableEveryone: true})
    console.log("دوز دوز,");
client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("533615836993159168");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**.#Bienvenue Sur Vast :violin: **`), 4000)        
}
});
client.login(process.env.TOKEN);
