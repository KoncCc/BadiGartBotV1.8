const Discord = require('discord.js')
exports.run = function(client, message, args) {
if(message.author.id !== message.guild.owner.user.id) return message.reply('**Bu Komutu Sadece `Sunucu Sahibi` Kullanabilir!**')

   function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
let rol = message.mentions.roles.first()
if(!rol) return message.channel.send("Bir rol etiketlemelisin.")
message.guild.members.cache.forEach(async member => {
 if(!member.roles.cache.has(rol.id)){
   member.roles.add(rol.id)
 }
})
message.channel.send(`**İşlem başlatıldı. [Herkese ${rol} Adlı Rol Veriliyor!]**`)
message.channel.send(`**= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =**`)
message.channel.send(`**BadiGart Bot'un Rölünü Rollerin En Üstüne Koymayı Unutma!**`)
}
exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ["herkese-rol-ver"],

  permLevel: 0

};

exports.help = {

  name: 'toplu-rol-ver',

  description: 'description',

  usage: 'usage'

};