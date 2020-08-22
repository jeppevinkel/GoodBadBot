const Discord = require("discord.js");

exports.run = (client, message, args, level) => {
  if (!client.stats.array().length) {
    message.reply("No points have been recorded yet.");
    return;
  }

  let sortedArray = client.stats.array().sort(function(a, b){
    return (b.good - b.bad) - (a.good - a.bad);
  });

  let embed = new Discord.MessageEmbed()
  .setColor('#779ECB')
  .setTitle("Leaderboard")
  .setTimestamp();

  let upperLimit = 10;
  for (var i = 0; i < sortedArray.length && i <= 10; i++) {
    embed.addField(`${sortedArray[i].name}`, sortedArray[i].good - sortedArray[i].bad);
  }

  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["lb"],
  permLevel: "User"
};

exports.help = {
  name: "leaderboard",
  category: "Misc",
  description: "Displays the leaderboard of people.",
  usage: "leaderboard"
};
