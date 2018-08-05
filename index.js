const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = "/";
var randnum = 0;

client.login(process.env.TOKEN);

client.on("ready", () => {
    console.log("Je suis prêt !")
    client.user.setGame("dessiner des mangas")
});

client.on('message', message => {

    if(message.content === prefix + "Aide"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#0099FF")
        .setTitle("Voici mes commandes d'aide")
        .setDescription("Je suis Mochizuki-Sama, votre Bot !")
        .addField("/Aide", "Affiche mes commandes")
        .addField("/Bonjour", "Je vous réponds !")
        .addField("/Chat", "Je vous réponds !")
        .addField("/Amour", "Je vous réponds !")
        .addField("/Poupée", "Je vous réponds !")
        .addField("/Peluche", "Je vous réponds !")
        .addField("/Thé", "Je vous réponds !")
        .setFooter ("Menu d'aide -  Mochizuki-Sama")
        message.channel.sendMessage(help_embed);
        console.log("Un utilisateur a affiché les commandes du bot")
    }

    if (message.content === "/Bonjour"){
        message.reply("Bonjour !");
    console.log('Le bot dit bonjour');
  }

  if (message.content === "/Chat"){
   
     message.reply(" **lance un chat sur Gilbert** :cat: :cat: :cat: ");
        console.log('Le bot lance un chat');
}

if (message.content === "/Amour"){
    
    message.reply("Miss Sharon devient fleur bleue ! :heart: :heart: ");
console.log('Le bot devient fleur bleu');
}

if (message.content === "/Poupée"){
    message.reply(" **clac clac clac** ");
console.log('Le bot fait le bruit de Emily');
}

if (message.content === "/Peluche"){
    message.reply("**déchire une peluche**");
        console.log('Le bot déchire une peluche');
}

if (message.content === "/Thé"){
   message.reply("It's Tea Time ! ");
        console.log('Le bot sert le thé');
}

});
