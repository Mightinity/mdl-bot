const Discord = require("discord.js")
const {generateImage} = require("./generateImage")
require("dotenv").config()


const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})
/* WELCOME MESSAGE */
const welcomeChannelId = "971849887979307077"

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
        content: `<@${member.id}> Welcome to mdl server!`,
        files: [img]
    })        
})

client.login(process.env.TOKEN)