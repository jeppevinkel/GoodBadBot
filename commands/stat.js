const Discord = require("discord.js");

exports.run = (client, message, args, level) => {
  if (!message.mentions.members.size) {
    if (!client.stats.get(message.member.id)) {
      client.stats.set(message.member.id, 0);
    }

    let score = client.stats.get(message.member.id);
    let color = '';
    if (score < 0) {
      color = '#FE6B64';
    }
    else if (score > 0) {
      color = '#77DD77';
    }
    else {
      color = '#779ECB';
    }

    let embed = new Discord.MessageEmbed()
      .setColor(color)
      .setAuthor(message.member.displayName, message.member.user.displayAvatarURL())
      .addField('Love', score)
      .setTimestamp();

    message.channel.send(embed);
  } else {
    if (!client.stats.get(message.mentions.members.first().id)) {
      client.stats.set(message.mentions.members.first().id, 0);
    }

    let score = client.stats.get(message.mentions.members.first().id);
    let color = '';
    if (score < 0) {
      color = '#FE6B64';
    }
    else if (score > 0) {
      color = '#77DD77';
    }
    else {
      color = '#779ECB';
    }

    let embed = new Discord.MessageEmbed()
      .setColor(color)
      .setAuthor(message.mentions.members.first().displayName, message.mentions.members.first().user.displayAvatarURL())
      .addField('Love', score)
      .setTimestamp();

    message.channel.send(embed);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["status"],
  permLevel: "User"
};

exports.help = {
  name: "stat",
  category: "Misc",
  description: "Displays current good-bad score.",
  usage: "stat [user]"
};
