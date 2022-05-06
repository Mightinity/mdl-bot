const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js")
const Discord = require("discord.js")
require("dotenv").config()

// const generateImage = require("./generateImage")

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

let bot = {
    client, 
    prefix: "mdl~",
    owners: ["971852433418485830"]
}

client.commands = new Discord.Collection()
client.events = new Discord.Collection()
client.slashcommands = new Discord.Collection()
client.buttons = new Discord.Collection()

client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)
client.loadCommands = (bot, reload) => require("./handlers/commands")(bot, reload)
client.loadSlashCommands = (bot, reload) => require("./handlers/slashcommands")(bot, reload)
client.loadButtons = (bot, reload) => require("./handlers/buttons")(bot, reload)

client.loadEvents(bot, false)
client.loadCommands(bot, false)
client.loadSlashCommands(bot, false)
client.loadButtons(bot, false)


module.exports = bot

client.on('interactionCreate', interaction => {

    // ULTRA EMBED
    const embedUltra = new MessageEmbed()
        .setTitle("ULTRA RANK")
        .setColor("BLUE")
        .setAuthor({ name: "Santos Craft", iconURL: "https://i.imgur.com/Cet9dI0.png" })
        .addFields(
            { name: 'RedProtect Information \n `•` Blocks Limits: `9000 Blocks` \n `•` Claim Limits: `15x Limits`', value: '\u200b', inline: true },
            { name: 'Homes Information \n `•` Sethome: `7x`', value: '\u200b', },
            { name: 'Permissions \n `•` /hat \n `•` /seen \n `•` /nick \n `•` Balance: `$6500` \n `•` Token `350` \n `•` Access `3` Pet \n `•` Access `3` Pet Storage', value: '\u200b', inline: true},
            { name: ' `•` Access `2` PlayerVaults (/pv) \n `•` Tool Enchanments: `2x` \n `•` Access to Mining World \n `•` Rare Key: `2x` \n `•` Legendary Key: `2x`', value: '\u200b', inline: true},
            
        )
        .setImage('https://i.imgur.com/gw4U0Kt.png')
        .setTimestamp()
        .setFooter({text: "© Copyright Santos Craft 2022"})

    // TITAN EMBED
    const embedTitan = new MessageEmbed()
        .setTitle("TITAN RANK")
        .setColor("YELLOW")
        .setAuthor({ name: "Santos Craft", iconURL: "https://i.imgur.com/Cet9dI0.png" })
        .addFields(
            { name: 'RedProtect Information \n `•` Blocks Limits: `12000 Blocks` \n `•` Claim Limits: `25x Limits`', value: '\u200b', inline: true },
            { name: 'Homes Information \n `•` Sethome: `9x`', value: '\u200b', },
            { name: 'Permissions \n `•` /back \n `•` /disposal \n `•` /ptime & /pweather \n `•` /nick colour \n `•` Balance: `$8500` \n `•` Token `550` \n `•` Access `4` Pet \n `•` Access `4` Pet Storage \n `•` Access FastCraft \n `•` You can fly but limited `30 minutes`', value: '\u200b', inline: true},
            { name: ' `•` Access `3` PlayerVaults (/pv) \n `•` Tool Enchanments: `4x` \n `•` Weapon Enchanments: `4x` \n `•` Access to Dungeon World \n `•` Access Shop Spawner \n `•` Access Using Furniture \n `•` Rare Key: `4x` \n `•` Legendary Key: `4x`', value: '\u200b', inline: true},
            
        )
        .setImage('https://i.imgur.com/nfSGt8D.png')
        .setTimestamp()
        .setFooter({text: "© Copyright Santos Craft 2022"})
    
    // GOD EMBED
    const embedGod = new MessageEmbed()
        .setTitle("GOD RANK")
        .setColor("RED")
        .setAuthor({ name: "Santos Craft", iconURL: "https://i.imgur.com/Cet9dI0.png" })
        .addFields(
            { name: 'RedProtect Information \n `•` Blocks Limits: `18000 Blocks` \n `•` Claim Limits: `35x Limits`', value: '\u200b', inline: true },
            { name: 'Homes Information \n `•` Sethome: `12x`', value: '\u200b', },
            { name: 'Permissions \n `•` /workbench \n `•` /enderchest or /ec \n `•` /invsee \n `•` /msgtoggle \n `•` Balance: `$12500` \n `•` Token `850` \n `•` Access `6` Pet \n `•` Access `6` Pet Storage \n `•` Access to Warp Gacha \n `•` You can fly unlimited`', value: '\u200b', inline: true},
            { name: ' `•` Access `5` PlayerVaults (/pv) \n `•` Access sell stick \n `•` Armor Enchanments: `6x` \n `•` Random Enchanments: `6x` \n `•` Tool Enchanments: `6x` \n `•` Weapon Enchanments: `6x` \n `•` /near \n `•` /tptoggle \n `•` /depth \n `•` Rare Key: `6x` \n `•` Legendary Key: `6x`', value: '\u200b', inline: true},
            
        )
        .setImage('https://i.imgur.com/nfSGt8D.png')
        .setTimestamp()
        .setFooter({text: "© Copyright Santos Craft 2022"})

    const buttonUltraPrice = new MessageActionRow()
        .addComponents([
            new MessageButton()
                .setCustomId("ultraPrice")
                .setStyle("SUCCESS")
                .setLabel("Harga: 50.000 RUPIAH"),
        ])
        const buttonTitanPrice = new MessageActionRow()
        .addComponents([
            new MessageButton()
                .setCustomId("titanPrice")
                .setStyle("SUCCESS")
                .setLabel("Harga: 100.000 RUPIAH"),
        ])

    if (!interaction.isButton()) return;

    if (interaction.customId == "ultra"){
        interaction.reply({
            embeds: [embedUltra],
            ephemeral: true,
            components: [buttonUltraPrice]
            });
    } else if (interaction.customId == "titan"){
        interaction.reply({
            embeds: [embedTitan],
            ephemeral: true,
            components: [buttonTitanPrice]
        })
    }

});
// client.on("ready", () => {
//     console.log(`Logged in as ${client.user.tag}`)
// })

// client.on("messageCreate", (message) => {
//     if (message.content == "hi"){
//         message.reply("Hello World!")
//     }
// })

// const welcomeChannelId = "926530810008453120"

// client.on("guildMemberAdd", async (member) => {
//     const img = await generateImage(member)
//     member.guild.channels.cache.get(welcomeChannelId).send({
//         content: `<@${member.id}> Welcome to the server!`,
//         files: [img]
//     })
// })

client.login(process.env.TOKEN)