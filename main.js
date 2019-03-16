const Discord = require("discord.js")
const bot = new Discord.Client()

var prefix = ("/")

//FR

// JEUX EN COURS (NE PAS TOUCHER !)
bot.on('ready', () => {
    bot.user.setStatus('available')
    bot.user.setPresence({
        game: {
            name: '/aide ou /helpen',
            type: "STREAMING",
            url: "https://www.twitch.tv/bastienv5252"
        }
    });
});

// FIN JEUX EN COURS (NE PAS TOUCHER !)
// PING

bot.on('message' , message =>{
    if (message.content === '/ping'){
        message.channel.send('Pong !')
    }
})

// FIN PING
// AIDE / HELP

bot.on('message' , message =>{
    if (message.content === '/aide'){
        message.channel.send('\n (Merci daller sur le support ci il y a un probléme dinvitation avec le /support) \n \n Bot traduit en deux langue : \n Francais : :flag_fr: \n Anglais : :flag_us: \n \n :white_check_mark: Réglement de bug : ``Questions au bot.`` :white_check_mark: \n \n :computer: Commands du bot :computer: : \n  :keyboard: Le préfix du bot :keyboard: : ``/`` \n  Faite ``/aide ou /help`` pour savoir toute les commands ! \n \n :star: Voici les nouvelle commands :star: : ``ipo , afk , best , support , blague`` \n**▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬** \n :tada: Commands discord :tada: : \n ``ping, afk`` \n **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬** \n :pencil: Commands de Opsylon :pencil: : \n ``serveur , ipo , blague`` \n **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬** \n :video_game: Commands secrétes :video_game: : \n ``best , adm``\n **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬** \n :tickets: Commands Administrative :tickets: \n ``support , staff`` \n **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬** \n :interrobang: Questions :interrobang: (sans /) : \n ``Salut OpsyBot , ca va OpsyBot ? , oui ca va non OpsyBot, non ca va pas OpsyBot``')
    }
}) 

bot.on('message' , message =>{
    if (message.content === '/help'){
        message.channel.send('\n (Merci daller sur le support ci il y a un probléme dinvitation avec le /support) \n \n Bot traduit en deux langue : \n Francais : :flag_fr: \n Anglais : :flag_us: \n \n :white_check_mark: Réglement de bug : ``Questions au bot.`` :white_check_mark: \n \n :computer: Commands du bot :computer: : \n  :keyboard: Le préfix du bot :keyboard: : ``/`` \n  Faite ``/aide ou /help`` pour savoir toute les commands ! \n \n :star: Voici les nouvelle commands :star: : ``ipo , afk , best , support , blague`` \n**▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬** \n :tada: Commands discord :tada: : \n ``ping, afk`` \n **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬** \n :pencil: Commands de Opsylon :pencil: : \n ``serveur , ipo , blague`` \n **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬** \n :video_game: Commands secrétes :video_game: : \n ``best , adm``\n **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬** \n :tickets: Commands Administrative :tickets: \n ``support , staff`` \n **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬** \n :interrobang: Questions :interrobang: (sans /) : \n ``Salut OpsyBot , ca va OpsyBot ? , oui ca va non OpsyBot, non ca va pas OpsyBot``')
    }
})

// FIN AIDE / HELP
// IP SERVEUR

bot.on('message' , message =>{
    if (message.content === '/ipo'){
        message.channel.send('IP du serveur non disponible !')
    }
})

// FIN IP SERVEUR
// SUPPORT

bot.on('message' , message =>{
    if (message.content === '/support'){
        message.channel.send('Le discord support est : ')
    }
})

 // FIN SUPPORT
 // AFK

bot.on('message', function (message) {
    if (message.content === '/afk on') {
        message.reply('est maintenant AFK !')
    }
})

bot.on('message', function (message) {
    if (message.content === '/afk off') {
        message.reply('est plus AFK !')
    }
})

bot.on('message' , message =>{
    if (message.content === '/afk'){
        message.channel.send('Merci de faire ``/afk on`` ou ``/afk off``.')
    }
})

 // FIN AFK
 // ADM

 bot.on('message' , message =>{
    if (message.content === '/adm'){
        message.channel.send('Vous avez demander de fermer le serveur')
    }
})

bot.on('message' , message =>{
    if (message.content === '/adm'){
        message.channel.send('Fermeture du serveur...')
    }
})

bot.on('message' , message =>{
    if (message.content === '/adm'){
        message.channel.send('Serveur fermer')
    }
})

 // FIN ADM
 // DISCUSSION

 bot.on('message' , message =>{
    if (message.content === 'non ca va pas OpsyBot'){
        message.channel.send('Ah... désoler je ne peux pas vous aider')
    }
})

bot.on('message' , message =>{
    if (message.content === 'Oui ca va OpsyBot'){
        message.channel.send('Daccord comme moi !')
    }
})

bot.on('message' , message =>{
    if (message.content === 'Ca va OpsyBot ?'){
        message.channel.send('Oui et vous ?')
    }
})

bot.on('message' , message =>{
    if (message.content === 'Salut OpsyBot'){
        message.channel.send('Bonjour !')
    }
})

// FIN DISCUSSION
// ANTI-INSULTES

// FIN ANTI-INSULTES
// BLAGUE

bot.on('message' , message =>{
    if (message.content === '/blague'){
        message.channel.send("Pourquoi les croco von toujour en prison ?")
    }
}) 

// FIN BLAGUE
// STAFF

bot.on('message' , message =>{
    if (message.content === '/staff'){
        message.channel.send("\n Voici le staff de OpsyBot : \n \n Equipe Administrative : \n \n - ``Bastien`` (Développeur - Createur) \n - ``Matthieu`` (Développeur) \n \n Equipe de Support : \n \n - ``Noah`` (Support) \n - ``Nolan`` (Support)")
    }
}) 

// FIN STAFF
// BEST

bot.on('message' , message =>{
    if (message.content === '/best'){
        message.channel.send("Vous êtes tous les meilleurs ")
    }
}) 

// FIN BEST
// PREFIX

bot.on('message' , message =>{
    if (message.content === '/prefix'){
        message.channel.send("Changement de préfix indisponible pour le moment !")
    }
}) 

// FIN PREFIX
// Msg Bienvenue

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
      return channel.send('Bienvenue sur Opsylon' + member.displayName)
    }).catch(console.error)
    // On pourrait catch l'erreur autrement ici (l'utilisateur a peut être désactivé les MP)
  })

// FIN MSG BIENVENUE
// COMMANDS TEST

// FIN COMMANDS TEST
// LOGIN BOT (NE PAS TOUCHER !)

bot.login('NTQ1NzAyMzMxMzQyMzg5MjU4.D0lTUQ.6AYs7QS8rNKxO5xJlRDzXimtY_o')


// ENGLISH
// AIDE / HELP

bot.on('message' , message =>{
    if (message.content === '/aideen'){
        message.channel.send('\n (Thank you to go on the support there is a problem of invitation with the / support) \n \n Bot translated into two languages : \n French : :flag_fr: \n English : :flag_us: \n \n :white_check_mark: Rules of bug:  `` Questions with the bot.`` :white_check_mark: \n \n :computer: Commands of the bot: :computer: : \n  :keyboard: The prefix of the bot::keyboard: : ``/`` \n  Done ``/helpen ou /aideen``  to know all the commands ! \n \n :star: Here are the new commands: :star: : ``ipen , afken , besten , supporten , joke`` \n**▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬** \n :tada: Commands discord :tada: : \n ``ping, afken`` \n **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬** \n :pencil: Commands de Opsylon :pencil: : \n ``ipen , joke`` \n **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬** \n :video_game: Secret Commands :video_game: : \n ``besten , admen``\n **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬** \n :tickets: Administrative Commands ::tickets: \n ``supporten , staffen`` \n **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬** \n :interrobang: Questions :interrobang: (without /) : \n ``hi OpsyBot , its going OpsyBot ? , yes it goes OpsyBot, no its not going OpsyBot``')
    }
})

bot.on('message' , message =>{
    if (message.content === '/helpen'){
        message.channel.send('\n (Thank you to go on the support there is a problem of invitation with the / support) \n \n Bot translated into two languages : \n French : :flag_fr: \n English : :flag_us: \n \n :white_check_mark: Rules of bug:  `` Questions with the bot.`` :white_check_mark: \n \n :computer: Commands of the bot: :computer: : \n  :keyboard: The prefix of the bot::keyboard: : ``/`` \n  Done ``/helpen ou /aideen``  to know all the commands ! \n \n :star: Here are the new commands: :star: : ``ipen , afken , besten , supporten , joke`` \n**▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬** \n :tada: Commands discord :tada: : \n ``ping, afken`` \n **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬** \n :pencil: Commands de Opsylon :pencil: : \n ``ipen , joke`` \n **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬** \n :video_game: Secret Commands :video_game: : \n ``besten , admen``\n **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬** \n :tickets: Administrative Commands ::tickets: \n ``supporten , staffen`` \n **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬** \n :interrobang: Questions :interrobang: (without /) : \n ``hi OpsyBot , its going OpsyBot ? , yes it goes OpsyBot, no its not going OpsyBot``')
    }
})

// FIN AIDE / HELP
// IP SERVEUR

bot.on('message' , message =>{
    if (message.content === '/ipen'){
        message.channel.send('The server ip is unavailable!')
    }
})

// FIN IP SERVEUR
// SUPPORT

bot.on('message' , message =>{
    if (message.content === '/supporten'){
        message.channel.send('The discord support is this : https://discord.gg/BmM4ew4')
    }
})

 // FIN SUPPORT
 // AFK

bot.on('message', function (message) {
    if (message.content === '/afken on') {
        message.reply('is now AFK!')
    }
})

bot.on('message', function (message) {
    if (message.content === '/afken off') {
        message.reply('is more AFK!')
    }
})

bot.on('message' , message =>{
    if (message.content === '/afken'){
        message.channel.send('Thanks for doing``/afken on`` ou ``/afken off``.')
    }
})

 // FIN AFK
 // ADM

 bot.on('message' , message =>{
    if (message.content === '/admen'){
        message.channel.send('Minecraft server closes in 1 second')
    }
})

bot.on('message' , message =>{
    if (message.content === '/admen'){
        message.channel.send('Minecraft servers ferocity')
    }
})

bot.on('message' , message =>{
    if (message.content === '/admen'){
        message.channel.send('Server close with Success !')
    }
})

 // FIN ADM
 // DISCUSSION

 bot.on('message', function (message) {
    if (message.content === 'no its not going OpsyBot') {
        message.reply('Ah ... Sorry I can not do anything Im just a bot')
    }
})

bot.on('message', function (message) {
    if (message.content === 'yes it goes OpsyBot') {
        message.reply('Okais')
    }
})

bot.on('message', function (message) {
    if (message.content === 'its going OpsyBot ?') {
        message.reply('Yes and you ?')
    }
})

bot.on('message', function (message) {
    if (message.content === 'hi OpsyBot') {
        message.reply('Hello !')
    }
})

// FIN DISCUSSION
// BLAGUE

bot.on('message' , message =>{
    if (message.content === '/joke'){
        message.channel.send('Why are the crocodiles still in prison?')
    }
})

// FIN BLAGUE
// STAFF

bot.on('message' , message =>{
    if (message.content === '/staffen'){
        message.channel.send('\nHere is the staff of OpsyBot : \n \n Administrative Team : \n \n - ``Bastien`` (Développeur - Createur) \n - ``Matthieu`` (Développeur) \n \n Support Team : \n \n \n - ``Noah`` (Support) \n - ``Nolan`` (Support)')
    }
})

// FIN STAFF
// BEST

bot.on('message' , message =>{
    if (message.content === '/besten'){
        message.channel.send('You are the best !')
    }
})

// FIN BEST
// PREFIX

bot.on('message' , message =>{
    if (message.content === '/prefixen'){
        message.channel.send('Prefix change unavailable at the moment !')
    }
}) 

// FIN PREFIX