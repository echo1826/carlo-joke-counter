require('dotenv').config();
const Discord = require('discord.js');

const botToken = process.env.BOT_TOKEN;

const client = new Discord.Client({
    intents: [
        'GUILDS',
        'GUILD_MESSAGES',
        'GUILD_MEMBERS'
    ]
});

client.on('ready', () => {
    // Username for the bot
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
    if(message.content === 'hi') {
        message.reply("Hello World");
    }
});

const welcomeChannel = '930295798665723934';

client.on('guildMemberAdd', (member) => {
    console.log(member);
    member.guild.channels.cache.get(welcomeChannel).send(`Welcome ${member.user.username}`);
})

client.login(botToken);