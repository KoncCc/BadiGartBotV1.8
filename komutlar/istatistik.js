const Discord = require("discord.js");


exports.run = async (client, message, args) => {

  
const istatistikler = new Discord.MessageEmbed()
  .addField(`:scroll: »  Pingim` ,`${client.ws.ping}ms`,true)
  .addField(`:incoming_envelope: » Yapımcım` ,`Spar Başkan#9059`,true)
  .addField(`:label: » Node.js`, `${process.version}`, true)
.addField(`:bar_chart: » Kanal Sayısı`, `${client.channels.cache.size  }`, true)
.addField(`:postbox: » Kullanıcı Sayısı`, `${client.users.cache.size}`, true)
.addField(`:envelope: » Sunucu Sayısı`, `${client.guilds.cache.size}`, true)
.addField(`» Linkler`, `[Destek Sunucusu](https://discord.gg/Pn83GMyQvH) | [Youtube](https://www.youtube.com/channel/UCorJLFHzchlmjy_iWQ3cSNg`, true)
  message.channel.send(istatistikler)
  
  
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['istatistik'],
  permLevel: 0
};

exports.help = {
  name: 'istatistik',
  description: 'Otorol sistemini ayarlamaya yarar.',
  usage: '-otorol-ayarla @rol #kanal'
}; 