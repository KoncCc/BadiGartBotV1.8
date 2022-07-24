const Discord = require("discord.js");


exports.run = (client, message, args) => {


let member = args[0]
let guild = message.guild;
let kanal = 'Log KanalİD'//Log Kanal id Yazın
       

if(!member) return message.channel.send("``Bir ID Girmelisin.``")


    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(":no_entry: Bu komutu kullanabilmek için `Üyeleri Yasakla` yetkisine sahip olmanız gerek.");

guild.members.unban(member)

const ban = new Discord.MessageEmbed()
.setThumbnail(message.author.avatarURL())
.setColor('RANDOM')
.addField(`Banı Kaldırlan Kullanıcı`,`<@${member}>`)
.addField(`Yetkili`,message.author)
.setTimestamp()
.setFooter(`${message.author.username} Tarafından Kullanıldı`)
client.channels.cache.get(kanal).send(ban)


};
exports.conf = {
  aliases: ['yasakla', "yasağı-kaldır", "yasak-kaldır"],
  permLevel: 0,
  kategori: 'Moderasyon'
};
exports.help = {
  name: 'unban', //komutun ismidir. / prefix + paralarım şeklinde çalışır.
  description: 'Kullanıcıya Ban Atar', //komutun açıklamasıdır çok önemi yok!
  usage: '!ban @user <sebep>' //komutun kullanım şeklidir çok önemi yok!
};