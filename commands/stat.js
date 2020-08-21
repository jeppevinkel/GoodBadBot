exports.run = (client, message, args, level) => {
  if (!message.mentions.members.size) {
    let score = client.stats.get(message.member.id);

    message.channel.send("You have a score of: " + score, {code: "asciidoc", split: { char: "\u200b" }});
  } else {
    let score = client.stats.get(message.mentions.members.first().id);

    message.channel.send("You have a score of: " + score, {code: "asciidoc", split: { char: "\u200b" }});
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
