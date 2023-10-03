import {Client, IntentsBitField} from 'discord.js';
import 'dotenv/config'
import { Champions } from './words/champions.js';
import { Lolwords } from './words/lolwords.js';
import { Cswords } from './words/cswords.js';

const oofID= 695909007918891049
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


//messages
bot.on('messageCreate', (msg) => {

    if (msg.author.bot){
        return;
    }

  
   const userPresence = msg.author.presence;
   const member = msg.author.id;

   let fixed = msg.content.toLowerCase();

   //Ping pong
    if (msg.content.toLowerCase() === "ping"){
        msg.reply("Pong")
    } else if (msg.content.toLowerCase() === "pong") {
        msg.reply("Ping")
    }

    // mama griz
    if (fixed.includes("mama") && fixed.includes("griz")){
        msg.reply("Verdad que si?")
    } 

    if (member == oofID || member == 811112978471452692){
        msg.reply({ files: [{ attachment: 'https://i.ytimg.com/vi/Gjdo-WV2MIM/maxresdefault.jpg' }] });
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



//precence


bot.login(process.env.DISCORD_KEY);