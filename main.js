const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();


const fs = require('fs');
const { channel } = require('node:diagnostics_channel');
client.command = new Discord.Collection();

let my_ping = process.env.MY_PING_ID;
var my_serv = process.env.ID_SERV;


client.once('ready', () => {
    console.log("Starting");
    
})

client.on('message', (message)=>{
    let msg ="";
    
    if(message.guild.id === my_serv){
        let temp ="";
        for(let i = 0; i < my_ping.length; i++) {
            temp += message.toString()[i];
        }
        var t = false;
        for(let i = my_ping.length; i < message.toString().length; i++) {
            if(!t && message.toString()[i] == " ");
            else {
                t = true;
                msg += message.toString()[i];
            }
        }

        

        if(temp === my_ping){
            console.log(msg+'\nLength : '+msg.length);
            
        }
        
    }

})
    
    






client.login(process.env.TOKEN);