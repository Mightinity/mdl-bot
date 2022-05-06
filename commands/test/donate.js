const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js")


module.exports = {
    name: "donate",
    category: "test",
    devOnly: false,
    run: async ({client, message, args}) => {
        message.reply({
            embeds: [
                new MessageEmbed()
                    .setTitle("RANK LIST")
                    .setDescription("Klik salah satu button dibawah untuk melihat details \n permission dari rank yang ingin kamu beli")
                    .setColor("YELLOW")
                    .setAuthor({ name: "Santos Craft", iconURL: "https://i.imgur.com/Cet9dI0.png" })
                    .addFields(
                        { name: '\u200B', value: '\u200B' },
                        { name: 'Contact Owner:', value: 'Mohon jangan spam' },
                        { name: 'Whatsapp', value: '`+62 813 7243 1572`', inline: true },
                        { name: 'Discord Tag', value: '`Lopi#0130`', inline: true },
                        { name: '\u200B', value: '\u200B' },
                    )
                    .setFooter({text: "© Copyright Santos Craft 2022"})
            ],
            components: [
                new MessageActionRow()
                    .addComponents([
                        new MessageButton()
                            .setCustomId("ultra")
                            .setStyle("PRIMARY")
                            .setLabel("ULTRA RANK"),
                        new MessageButton()
                            .setCustomId("titan")
                            .setStyle("SUCCESS")
                            .setLabel("TITAN RANK"),
                        new MessageButton()
                            .setCustomId("god")
                            .setStyle("DANGER")
                            .setLabel("GOD RANK")
                ])
            ]
        })
    }
    
}

