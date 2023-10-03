import {Client, IntentsBitField} from 'discord.js';
import 'dotenv/config'
import { Champions } from './champions.js';

const bot = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
});

bot.on('ready', (c) =>(
    console.log("Ready")
))

bot.on('messageCreate', (msg) => {

    if (msg.author.bot){
        return;
    }

  

   const member = msg.author.id;

   let fixed = msg.content.toLowerCase();

    if (msg.content.toLowerCase() === "ping"){
        msg.reply("Pong")
    }

    if (msg.content.toLowerCase() === "lol" || fixed.includes("grieta") || fixed.includes("league of legends") || fixed.includes("lolaso") || fixed.includes("lol")){
        console.log("lolero")
        msg.reply("Puto lolero")
        const banReason = 'Por loler@ de mierda 🤣🤣🤣🤣';
        msg.guild.members.ban(member, { reason: banReason }).then(console.log).catch(console.error);
    }

    
    for (let i = 0; i = Champions.length; i++){

        let champ = msg.content.split(" ");
        console.log(champ[i])
        let exists = champ.some(obj => obj.id === champ[0].toLowerCase());

        if (exists) {
            console.log('Value exists in the object array');
            break;
          } else {
            console.log('Value does not exist in the object array');
          }
    }

    

})

bot.login(process.env.DISCORD_KEY);