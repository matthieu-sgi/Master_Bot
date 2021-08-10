const Discord = require('discord.js');
require('dotenv').config();

const client = new Discord.Client();

const days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const fs = require('fs');
//const { channel } = require('node:diagnostics_channel');
client.command = new Discord.Collection();

let my_ping = process.env.MY_PING_ID;
var my_serv = process.env.ID_SERV;

timestamp = function(){
    var timestamp = "";
    const d = new Date();
    timestamp = d.getDate().toString() + "-"+months[d.getMonth().toString()];
    timestamp += "-" + d.getFullYear().toString() + " " + d.getHours().toString() + ":" + d.getMinutes().toString() + ":"+ d.getSeconds().toString();
    timestamp += " -> ";
    return timestamp;
}
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
            var string_to_save=msg;
            
            fs.readFile("msg.log", (err, data) => {
                if(err) {return console.log(err);}
                else{
                    const content = data;
                    
                    console.log("Extract from file : " + content);
                    string_to_save = data + "\n"+timestamp()+ " "+msg;
                    fs.writeFile("msg.log", string_to_save, function(err) {         
                        if(err){         
                            return console.log(err);         }
                        else{console.log("The file was saved! : " + string_to_save);     }});  
                }
                
            })
            
               
                    
            
        }
        
    }

})
    
    






client.login(process.env.TOKEN);
