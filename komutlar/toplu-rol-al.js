const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
  if(message.author.id !== message.guild.owner.user.id) return message.reply('**Bu Komutu Sadece `Sunucu Sahibi` Kullanabilir!**')
  let rol = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(rol => rol.name === args[0]);
  if (!rol) return message.channel.send('Herkesten rol alabilmem için bir rol etiketle!')

message.channel.send(`**İşlem başlatıldı. [Herkesten ${rol} Adlı Rol Alınıyor!]**`)
message.channel.send(`**= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =**`)
message.channel.send(`**BadiGart Bot'un Rölünü Rollerin En Üstüne Koymayı Unutma!**`)

   message.guild.members.cache.forEach(u => {
u.roles.remove(rol)
   })
  message.channel.send
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['toplu-rol-al',"hrolal"],
    permLevel: 0
}

exports.help = {
    name: 'herkesten-rol-al',
  kategori: "admin",
    description: 'Herkesten rol alır.',
    usage: 'herkesten-rol-al @rol / rol-ismi'
}