const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = "/";
var randnum = 0;

client.login(process.env.TOKEN);

client.on("ready", () => {
    console.log("Je suis prêt !")
    client.user.setGame("brouter")
});

client.on('message', message => {

    if(message.content === prefix + "Aide"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#0099FF")
        .setTitle("Voici mes commandes d'aide")
        .setDescription("Je suis Fawn ! Le cousin de Bambi et votre bot !")
        .addField("/Aide", "Affiche mes commandes")
        .addField("Salut Fawn", "Je vous réponds !")
        .addField("Apprends moi quelque chose Fawn", "Je vous réponds !")
        .addField("Raconte moi une anecdote Fawn", "Je vous réponds !")
        .addField("Un cookie Fawn !", "Je vous réponds !")
        .addField("C'est pas mauvais du steack de Fawn", "Je vous réponds !")
        .addField("Je me sens inutile Fawn", "Je vous remonte le moral ♥")
        .addField("Fawn, musique !", "Je balance le son 🎵")
        .addField("Fawn, tu connais Osomatsu-san ?", "Je vous réponds !")
        .setFooter ("Menu d'aide -  Fawn")
        message.channel.sendMessage(help_embed);
        console.log("Un utilisateur a affiché les commandes du bot")
    }

    if (message.content === "Salut Fawn"){
        message.reply("Je suis le cousin de Bambi ! :D");
    console.log('Le bot dit bonjour');
  }
      
  if (message.content === "Un cookie Fawn !"){
        message.reply("Voilà pour toi :cookie: :cookie: :cookie:");
    console.log('Le bot donne un cookie');
  }

  if (message.content === "Apprends moi quelque chose Fawn"){
   random();
   
    if (randnum == 1){
       message.reply("Les bois des rennes mâles tombent en hiver, mais pas ceux des femelles. Rudolphe est une femme.");
       console.log(randnum);
    }

    if (randnum == 2){
        message.reply("Les autruches ne sont pas des oiseaux mais des reptiles.");
        console.log(randnum);
    }

    if (randnum == 3){
        message.reply("En Israël, il est interdit d'emmener un ours à la plage.");
        console.log(randnum);
    }

    if (randnum == 4){
        message.reply("Les femelles hyènes ont un « pénis » et accouchent par là.");
        console.log(randnum);
    }

    if (randnum == 5){
        message.reply("En Alaska, murmurer dans l'oreille de quelqu'un qui chasse l'élan est _illégal_.");
        console.log(randnum);
    }

    if (randnum == 6){
        message.reply("Les chiens sont aussi intelligents qu'un enfant de 3 ans.");
        console.log(randnum);
    }

}

if (message.content === "Raconte moi une anecdote Fawn"){
   random();
   
    if (randnum == 1){
       message.reply("Les concombres de mer respirent par l'anus.");
       console.log(randnum);
    }

    if (randnum == 2){
        message.reply("Une autruche (mâle) peut rugir comme un lion.");
        console.log(randnum);
    }

    if (randnum == 3){
        message.reply("Les chauves-souris sont les seuls mammifères capable de voler.");
        console.log(randnum);
    }

    if (randnum == 4){
        message.reply("Une dent d'éléphant peut peser à elle toute seule 4kg.");
        console.log(randnum);
    }

    if (randnum == 5){
        message.reply("En 1924, à South Bend (Indiana, USA) à été condamné pour le crime de fumer une cigarette et à reçu une amende de 25 dollars.");
        console.log(randnum);
    }

    if (randnum == 6){
        message.reply("Parmis les survivants du Titanic, on trouve deux chiens.");
        console.log(randnum);
    }

}
    

if (message.content === "C'est pas mauvais du steack de Fawn"){
    message.reply("Mangez la maman de Bambi elle est plus dodue que moi !");
console.log('Le bot essaye de sauver sa peau');
}

if (message.content === "Je me sens inutile Fawn"){
    random();
   
    if (randnum == 1){
       message.reply("Souviens toi que l'armée de Caligula s'est battue _contre la mer_.");
       console.log(randnum);
    }

    if (randnum == 2){
        message.reply("Même le crayon blanc est d'une grande importance.");
        console.log(randnum);
    }

    if (randnum == 3){
        message.reply("Et Verlaine a tiré sur Rimbaud par possessivité.");
        console.log(randnum);
    }

    if (randnum == 4){
        message.reply("Souviens toi que Van Gogh s'est coupé une oreille et buvait de la peinture.");
        console.log(randnum);
    }

    if (randnum == 5){
        message.reply("Anatoniquement parlant, un bourdon est incapable de voler. Pourtant, ça l'empêche pas de très bien y arriver.");
        console.log(randnum);

    }
    if (randnum == 6){
        message.reply("N'empêche, c'est toi le spermatozoïde qu'à gagné la course.");
        console.log(randnum);
    }

}

if (message.content === "Fawn, musique !"){
    
    random();
   
    if (randnum == 1){
       message.reply("https://www.youtube.com/watch?v=qm_BZ0LlacA");
       console.log(randnum);
    }

    if (randnum == 2){
        message.reply("https://www.youtube.com/watch?v=0BEVidIfBYg");
        console.log(randnum);
    }

    if (randnum == 3){
        message.reply("https://www.youtube.com/watch?v=KMTRqAgLw04");
        console.log(randnum);
    }

    if (randnum == 4){
        message.reply("https://www.youtube.com/watch?v=lHKuPOlq9c8");
        console.log(randnum);
    }

    if (randnum == 5){
        message.reply("https://www.youtube.com/watch?v=xsw3ldAjHlQ");
        console.log(randnum);
    }

    if (randnum == 6){
        message.reply("https://www.youtube.com/watch?v=DBXaKjMsTbI");
        console.log(randnum);
    }

}

if (message.content === "Fawn, tu connais Osomatsu-san ?"){
    
    random();
   
    if (randnum == 1){
       message.reply("https://media.giphy.com/media/HcCb4FwzQvxxm/giphy.gif");
       console.log(randnum);
    }

    if (randnum == 2){
        message.reply("https://media.giphy.com/media/zJ9yNd6jDbj8c/giphy.gif");
        console.log(randnum);
    }

    if (randnum == 3){
        message.reply("https://media.giphy.com/media/RR13ZhCGd8lm8/giphy.gif");
        console.log(randnum);
    }

    if (randnum == 4){
        message.reply("https://media.giphy.com/media/IKZtzUwaf57dS/giphy.gif");
        console.log(randnum);
    }

    if (randnum == 5){
        message.reply("https://media.giphy.com/media/dYG3u7RgPcHMA/giphy.gif");
        console.log(randnum);
    }

    if (randnum == 6){
        message.reply("https://media.giphy.com/media/z66qw5voTbWrS/giphy.gif");
        console.log(randnum);
    }

}

});

function random(min, max) {
    min = Math.ceil(0);
    max = Math.floor(6);
    randnum = Math.floor(Math.random() * (max - min +1) + min);
}

client.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "flood").send(`:sunflower: ${member.user.username} vient de débarquer dans la forêt ! La bienvenue à toi, en espérant que tu te plaise ici ! :sunflower:`)
})

client.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "flood").send(`:sunflower: ${member.user.username} a quitté la forêt ! Snifou snifou T^T :sunflower:`)
})
