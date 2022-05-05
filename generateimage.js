const Canvas = require("canvas")
const Discord = require("discord.js")
const background = "https://imgur.com/JaYZqzM"

const dim = {
    height: 1440,
    width: 2560,
    margin: 50
}

const avatar = {
    size: 256,
    x: 960,
    y: 340
}

const generateImage = async (member) => {
    let username = member.user.username
    let discrim = member.user.discrim
    let avatarURL = member.user.displayAvatarURL({format: "png", dynamic: "false", size: avatar.size})


    const canvas = Canvas.createCanvas(dim.width, dim.height)
    const ctx = canvas.getContext("2d")

    // draw in background
    const backimg = await Canvas.loadImage(background)
    ctx.drawImage(backimg, 0, 0)

    // draw black on image
    ctx.fillStyle = "rgba(0,0,0,0.8)"
    ctx.fillRect(dim.margin, dim.margin, dim,width - 2 * dim.margin, dim.height - 2 * dim.margin)

    const avatarimg = await Canvas.loadImage(avatarURL)
    ctx.save()

    ctx.beginPath()
    ctx.arc(avatar.x + avatar.size / 2, avatar.y + avatar.size / 2, avatar.size / 2, 0, Math.PI * 2, true)
    ctx.closePath()
    ctx.clip()

    ctx.drawImage(avatarimg, avatar.x, avatar.y)
    ctx.restore()

    const attach = new Discord.MessageAttachment(canvas.toBuffer(), "welcome.png")
    return attach
}

module.exports = generateImage