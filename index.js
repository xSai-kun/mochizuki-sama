const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = "/";
var randnum = 0;

client.login(process.env.TOKEN);

client.on("ready", () => {
    console.log("Je suis prêt !")
    client.user.setGame("rêver de Paris.")
});

client.on('message', message => {

    if(message.content === prefix + "Aide"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#0099FF")
        .setTitle("Voici mes commandes d'aide")
        .setDescription("Je suis Mochizuki-Sama, votre Bot !")
        .addField("/Aide", "Affiche mes commandes")
        .addField("/Gâteau", "J'annonce votre venue en grande pompe !")
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
        .addField("/Câlin [Nom d'OC]", "Je vous réponds !")
        .addField("/Famille", "Je vous réponds !")
        .addField("/Han", "Je vous réponds !")
        .addField("Mochizuki-sama, que savez-vous sur les OCs ?", "Je vous réponds !")
        .addField("Mochizuki-sama, que savez-vous sur les Chains ?", "Je vous réponds !")
        .setFooter ("Menu d'aide -  Mochizuki-Sama")
        message.channel.sendMessage(help_embed);
        console.log("Un utilisateur a affiché les commandes du bot")
    }

    if (message.content === "/Bonjour"){
        message.reply("Bonjour !");
    console.log('Le bot dit bonjour');
  }
    
    if (message.content === "/Hey !"){
        message.reply("arrive dans un magnifique spectacle son et lumières qui se finit sur un énorme feu d'artifice !!");
    console.log('Le bot dit bonjour');
  }
      
  if (message.content === "/Chat"){
        message.reply("**lance un chat sur Gilbert** :cat: :cat: :cat:");
    console.log('Le bot lance un chat');
  }

  if (message.content === "/Dossier"){
        message.reply("Oups, Andrew a encore oublié un dossier important :facepalm:");
    console.log('Le bot perd un dossier');
  }
  
  if (message.content === "/Câlin Athanase"){
        message.reply("Athanase te demande ce que tu fous. Il n'a pas l'air d'apprécier ton câlin...");
    console.log('Le bot fait un câlin.');
  }
    
  if (message.content === "/Câlin Emile"){
        message.reply("Emile se fige. Cours. Vite.");
    console.log('Le bot fait un câlin.');
  }
  
  if (message.content === "/Câlin Malice"){
        message.reply("Malice ricane de joie.");
    console.log('Le bot fait un câlin.');
  }
    
  if (message.content === "/Câlin Puppets"){
        message.reply("Puppets se paralyse.");
    console.log('Le bot fait un câlin.');
  }
  
  if (message.content === "/Câlin Verity"){
        message.reply("Verity essaye de se dégager de ton étreinte ! @A@");
    console.log('Le bot fait un câlin.');
  }
    
   if (message.content === "/Câlin Lookie"){
        message.reply("Lookie te demande un cookie en échange.");
    console.log('Le bot fait un câlin.');
  }
    
  if (message.content === "/Câlin James"){
        message.reply("James semble ravi ! :D");
    console.log('Le bot fait un câlin.');
  }
  
  if (message.content === "/Câlin Reika"){
        message.reply("Reika meurt de gêne x///x");
    console.log('Le bot fait un câlin.');
  }
    
  if (message.content === "/Câlin Dementia"){
        message.reply("Dementia reste figée avant de reculer un peu.");
    console.log('Le bot fait un câlin.');
  }
  
  if (message.content === "/Câlin Absentia"){
        message.reply("Absentia reste pétrifiée. Elle a l'air de se demander ce qui lui arrive.");
    console.log('Le bot fait un câlin.');
  }
    
   if (message.content === "/Câlin Andrew"){
        message.reply("Andrew bugue avant de te rendre ton câlin ! \o/");
    console.log('Le bot fait un câlin.');
  }
  
  if (message.content === "/Câlin Léonor"){
        message.reply("Léonor est étonné mais semble bien le prendre ! :D");
    console.log('Le bot fait un câlin.');
  }
    
  if (message.content === "/Câlin Rhys"){
        message.reply("Rhys te rend le câlin gêné. Il n'a pas l'air de savoir te dire non.");
    console.log('Le bot fait un câlin.');
  }
  
  if (message.content === "/Câlin Lou"){
        message.reply("Lou te repousse en rougissant ;///;");
    console.log('Le bot fait un câlin.');
  }
    
  if (message.content === "Mochizuki-sama, que savez-vous sur les OCs ?"){
   random();
   
    if (randnum == 1){
       message.reply("Léonor fait craquer les filles mais se prend beaucoup de râteaux.. :eyes:");
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

    if (randnum == 4){
        message.reply("Lou vénère Rufus Barma.");
        console.log(randnum);
    }

}

if (message.content === "Mochizuki-sama, que savez-vous sur les Chains ?"){
   random();
   
    if (randnum == 1){
       message.reply("Inconsciemment, Malice cherche La Fille.");
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

    if (randnum == 4){
        message.reply("Verity est folle de cookies.");
        console.log(randnum);
    }

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
        console.log('Le bot lâche la fratrie de Léonor');
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
        console.log('Le bot vénère Sai');
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

});

function random(min, max) {
    min = Math.ceil(0);
    max = Math.floor(4);
    randnum = Math.floor(Math.random() * (max - min +1) + min);
}

client.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "général").send(`Un nouvel arrivant est sorti des Abyss ! Prends une tasse de thé  ${member.user.username} et quelques biscuits !`)
})

client.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "général").send(`${member.user.username} a fini son contract illégal et est reparti dans les Abyss !`)
})
