const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "koshila",
    alias: ["menu"],
    desc: "Check bot online or no.",
    category: "main",
    react: "🐄",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let des = `*BOT TEST.NOW ALIVE*

*╭─「 NADEENP-MD 」*
*│◈ 𝙱𝙾𝚃 𝙽𝙰𝙼𝙴* : ​🇳​​🇦​​🇩​​🇪​​🇪​​🇳​-​🇲​​🇩​ ​🇲​​🇴​​🇻​​🇮​​🇪​-​🇩​​🇱​-​🇽​
*│◈ 𝙾𝚆𝙽𝙴𝚁 𝙽𝙰𝙼𝙴* : ɴᴀᴅᴇᴇɴ ᴘᴏᴏʀɴᴀ
*│◈ 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 :* 0711451319 
*╰──────────●●►*
KOSHILA WESA HUTHTHI....
DAMEESHA BADU WESII....

> *©ɴᴀᴅᴇᴇɴ-ᴍᴅ ᴍᴀᴅᴇ ʙʏ ɴᴀᴅᴇᴇɴ ᴘᴏᴏʀɴᴀ*
`
return await conn.sendMessage(from,{image: {url: "https://files.catbox.moe/2elpxs.png"},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
