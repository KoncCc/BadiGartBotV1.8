const Discord = require("discord.js");
exports.run = (client, message, args) => {
  
    message.channel.send('__**YETKİ KONTROLÜ YAPILIYOR...**__');
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('**Bu Sunucuda Yönetici Olmadığın İçin İşlem İptal Edildi ❌**');
    message.channel.send('**Bu Sunucuda Yönetici Olduğun İçin İşlem Başlatıldı ✅**');
    message.channel.send('**Bu Ticket Kanalı **__30 DAKİKA__** İçinde Silinecektir !**').then(message => {
    setTimeout(function () {
      message.channel.delete();
    },1 * 1800000)
  })
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "sohbet",
  permLevel: 0
};

exports.help = {
  name: "ticket-kapat-30dk",
  description: "Sohbetinizi kapatmaya yarar.",
  usage: "kapat"
};