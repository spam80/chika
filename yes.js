const Discord = require('discord.js'),
    client = new Discord.Client({sisableEveryone: true})
    console.log("دوز دوز,");
client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("524243423209848842");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`_**# WeLCoMe To , Magic ' Server :rose: **_`), 4000)        
}
});
client.login(process.env.TOKEN);