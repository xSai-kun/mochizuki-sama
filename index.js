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
        .addField("/Lacie", "Je vous réponds !")
        .addField("/Caramel", "Je vous réponds !")
        .addField("/Indécent", "Je vous réponds !")
        .addField("/Break", "Je vous réponds !")
        .addField("/Cochon", "Je vous réponds !")
        .addField("/Athanase", "Je vous réponds !")
        .addField("/Plante", "Je vous réponds !")
        .addField("/Chute", "Je vous réponds !")
        .addField("/Gâteau", "Je vous réponds !")
        .addField("/Sheryl", "Je vous réponds !")
        .addField("/Cookies", "Je vous réponds !")
        .addField("/Famille", "Je vous réponds !")
        .addField("/Han", "Je vous réponds !")
        .addField("Mochizuki-Sama, que sais-tu des OCs ?", "Je vous réponds !")
        .addField("Mochizuki-Sama, que sais-tu des Chains ?", "Je vous réponds !")
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
    
if (message.content === "/Athanase"){
    message.reply("Emile est encore tout cassé et Verity fait encore sa gamine. COURAGE ATHANASE !");
console.log('Le bot encourage Athanase');
}

if (message.content === "/Peluche"){
    message.reply("**déchire une peluche**");
        console.log('Le bot déchire une peluche');
}
    
if (message.content === "/Famille"){
    message.reply("**La fratrie de Léonor vous écrase subitement !**");
        console.log('Le bot déchire une peluche');
}
    
if (message.content === "/Lacie"){
    message.reply("Un peu de musique ? https://www.youtube.com/watch?v=PBiqMzyGJJk");
        console.log('Le bot envoie la chanson de Lacie');
}

if (message.content === "/Han"){
    message.reply("https://pm1.narvii.com/6174/95beca04c73ceb8f13ca855db56e70a75c436621_hq.jpg");
        console.log('Le bot traumatise tout le monde');
}
    
if (message.content === "/Caramel"){
    
    message.reply("**Léonor prend la fuite !!!**");
console.log('Le bot prend la fuite');
}
    
if (message.content === "/Indécent"){
    
    message.reply("**Emile tombe dans les pommes**");
console.log('Le bot tombe dans les pommes');
}
    
if (message.content === "/Break"){
    
    message.reply("**Verity fait sa tsundere !**");
console.log('Le bot fait sa tsundere');
}

if (message.content === "/Cochon"){
   message.reply(":pig: N'est-il pas trop mignon ? :pig:");
        console.log('Le bot aime les cochons');
}

if (message.content === "/Plante"){
   message.reply(":seedling: Vénérez le Dieu Plante Verte ! :seedling:");
        console.log('Le bot aime les cochons');
}
    
if (message.content === "/Chute"){
   message.reply("Lou a encore dévalé les escaliers...");
        console.log('Le bot tombe dans les escaliers');
}

if (message.content === "/Gâteau"){
   message.reply("**Break a chipé les gâteaux de Lou et les cookies de Lookie !**");
        console.log('Le bot vole les gâteaux');
}
    
if (message.content === "/Cookies"){
   message.reply("**Verity et Lookie volent les cookies avant de disparaitre comme des ninjas ! :cookie: :cookie: :cookie:**");
        console.log('Le bot vole les gâteaux');
}
    
if (message.content === "/Sheryl"){
   message.reply("**Rufus fait une énième demande en mariage :rose: :ring: :rose:**");
        console.log('Le bot fait une demande en mariage');
}
    
if (message.content === "/Thé"){
   message.reply("It's Tea Time ! ");
        console.log('Le bot sert le thé');
}

if (message.content === "Mochizuki-Sama, que sais-tu des OCs ?"){ random();

if (randnum == 1){
message.reply("Léonor fait craquer les filles mais se prend *beaucoup* de râteaux.. :eyes:");
console.log(randnum);
}

if (randnum == 2){
message.reply("Emile est toujours à la recherche du prince charmant :rose: :rose:");
console.log(randnum);
}

if (randnum == 3){
message.reply("Andrew était le Dieu d'un culte.");
console.log(randnum);
}

if (randnum == 4{
message.reply("Lou vénère Rufus Barma.");
console.log(randnum);
}

}

if (message.content === "Mochizuki-Sama, que sais-tu des Chains ?"){ random();

if (randnum == 1){
message.reply("Inconsciemment, Malice cherche *La Fille*.");
console.log(randnum);
}

if (randnum == 2){
message.reply("Si tu ne respectes pas Arietes, il te donnera un grand coup de bois.");
console.log(randnum);
}

if (randnum == 3){
message.reply("Malice a emmerdé Puppets par le passé et maintenant, Puppets veut le tuer.");
console.log(randnum);
}

if (randnum == 4{
message.reply("Verity est folle de cookies.");
console.log(randnum);
}

}

});
