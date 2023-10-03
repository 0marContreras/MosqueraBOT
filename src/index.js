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
    } else if (msg.content.toLowerCase() === "pong") {
        msg.reply("Ping")
    }

    // mama griz
    if (fixed.includes("mama") && fixed.includes("griz")){
        msg.reply("Verdad que si?")
    } 

    if (msg.content.toLowerCase() === "lol" || fixed.includes("grieta") || fixed.includes("league of legends") || fixed.includes("lolaso") || fixed.includes("lol") || fixed.includes("liga de las leyendas")){
        console.log("lolero")
        msg.reply("Puto lolero")
        const banReason = 'Por loler@ de mierda 🤣🤣🤣🤣';
        msg.guild.members.ban(member, { reason: banReason }).then(console.log).catch(console.error);
    }

    // Counter

    if (msg.content.toLowerCase() == "csgo" || fixed.includes("sale su conter") || fixed.includes("sale su counter") || fixed.includes("conter") || fixed.includes("counter")){
        console.log("Counter")
        msg.reply("Maldito counter, odio a los judios")
        const banReason = 'Maldita bola de judios';
        msg.guild.members.ban(member, { reason: banReason}).then(console.log).catch(console.error);
    }

    
    for (let i = 0; i < Champions.length; i++){

        let champ = msg.content.split(" ");
        let exists = Champions.some(obj => obj.id === champ[0].toLowerCase());

        if (exists) {
            console.log("lolero")
            msg.reply("Puto lolero")
            const banReason = 'Por loler@ de mierda 🤣🤣🤣🤣';
            msg.guild.members.ban(member, { reason: banReason }).then(console.log).catch(console.error);
            return
            
          } else {
            continue
          }
    }

    

})

bot.login(process.env.DISCORD_KEY);