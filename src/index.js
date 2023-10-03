import {Client, IntentsBitField} from 'discord.js';
import 'dotenv/config'
import { Champions } from './words/champions.js';
import { Lolwords } from './words/lolwords.js';
import { Cswords } from './words/cswords.js';

const bot = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildPresences
    ]
});

bot.on('ready', (c) =>(
    console.log("Ready")
))

bot.on('messageCreate', (msg) => {

    if (msg.author.bot){
        return;
    }

  
   const userPresence = msg.author.presence;
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

    


    // Counter
    Cswords.forEach(objCs =>{
        if(fixed.includes(objCs.palabra)){
            msg.reply("Maldito counter, odio a los judios")
            const banReason = 'Maldita bola de judios';
            msg.guild.members.ban(member, { reason: banReason}).then(console.log).catch(console.error);
            return
        }
    })


    //LOL
    Lolwords.forEach(objLol=>{
        if(fixed.includes(objLol.palabra)){
            msg.reply("Puto lolero")
            const banReason = 'Por loler@ de mierda 🤣🤣🤣🤣';
            msg.guild.members.ban(member, { reason: banReason }).then(console.log).catch(console.error);
            return
        }
    })


    Champions.forEach(obj => {
        let champ = msg.content.split(" ");
        champ.forEach(champ =>{
            if (champ.toLowerCase() === obj.id ){
                msg.reply("Puto lolero")
                const banReason = 'Por loler@ de mierda 🤣🤣🤣🤣';
                msg.guild.members.ban(member, { reason: banReason }).then(console.log).catch(console.error);
                return
        }})
    })


    

})

//lol status


bot.login(process.env.DISCORD_KEY);