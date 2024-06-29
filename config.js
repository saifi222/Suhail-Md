const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_01_06_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjEyLFxuICAgICAgICA1MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDY0LFxuICAgICAgICA2NixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTEyLFxuICAgICAgICA5NixcbiAgICAgICAgNjEsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTYxLFxuICAgICAgICAxODksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTMsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAzMixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODcsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDUxLFxuICAgICAgICAxODAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjksXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDk2LFxuICAgICAgICA3MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjUwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzksXG4gICAgICAgIDkwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIsXG4gICAgICAgIDM1LFxuICAgICAgICAxMCxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE0LFxuICAgICAgICAzLFxuICAgICAgICA5OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDI2LFxuICAgICAgICA3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDkwLFxuICAgICAgICA1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTc1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTk1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzksXG4gICAgICAgIDksXG4gICAgICAgIDU1LFxuICAgICAgICAxODYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAzNixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAzMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjM4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTksXG4gICAgICAgIDU2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjIyLFxuICAgICAgICA1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0LFxuICAgICAgICA0NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgODQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjIzLFxuICAgICAgICA1NCxcbiAgICAgICAgMixcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTY4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5NixcbiAgICAgICAgMjQ5LFxuICAgICAgICA1MixcbiAgICAgICAgNzMsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzksXG4gICAgICAgIDU0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOSxcbiAgICAgICAgNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJXZlFZdzNpdTNuUTNtejB4VHhFSGNEZ2RSUTFlaGJNdnFYUng2dGVwemZNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzM1NDg2MDE5NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQjI0QkRFRTA5OENEQkEyNzZBMjM3OTA3RTEwMEMwNzhcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5NjY5NzEyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMzU0ODYwMTk2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFREM3Q0Q5NDczMTJGQjkzQjk0OTNBM0RGMjgxNEVGMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTk2Njk3MTNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiN1FadjhQSk1RbHFXbm8tRE14X1NoQVwiLFxuICBcInBob25lSWRcIjogXCIyZmZkMjEyMi1lZjcwLTQ1NmUtYWRiZC00Mzk0YzQzZjA2OTlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzksXG4gICAgICAyNTUsXG4gICAgICA2NixcbiAgICAgIDEzOSxcbiAgICAgIDI4LFxuICAgICAgMTA3LFxuICAgICAgMjM4LFxuICAgICAgMTgxLFxuICAgICAgMjEsXG4gICAgICAxNjEsXG4gICAgICAxLFxuICAgICAgMjUzLFxuICAgICAgMzksXG4gICAgICA1LFxuICAgICAgMTAxLFxuICAgICAgNyxcbiAgICAgIDE0NixcbiAgICAgIDI0MCxcbiAgICAgIDExNyxcbiAgICAgIDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM3LFxuICAgICAgNCxcbiAgICAgIDEyMSxcbiAgICAgIDE4MixcbiAgICAgIDc4LFxuICAgICAgMjEzLFxuICAgICAgMjE3LFxuICAgICAgMjQ4LFxuICAgICAgMTg0LFxuICAgICAgNDcsXG4gICAgICAxNDQsXG4gICAgICA4NSxcbiAgICAgIDIyMyxcbiAgICAgIDY3LFxuICAgICAgMTkxLFxuICAgICAgNjEsXG4gICAgICAxMzEsXG4gICAgICA0LFxuICAgICAgNTgsXG4gICAgICAyMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUUdSQVk4TkJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzM1NDg2MDE5NjoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNTEzOTc4MDcyOTI0NDk6MkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJza3F1cmVzaGkyMTBcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPeVFwK2NGRU11bmdMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk9nQmVPNnd3dDBwNGtoeXFtNFNIOVkxb1gwZW85aFY1YkRpY25pSHA5RFE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUC9wWnJlVVh6R0YvcEM5TGx5Q3VLdXo2N3RTYU9rYktrQ21mQkxpUDBmdXJCOGxjVnQ4K0tPL1M2dE5zdWhrQVkySzlRaUU0Q20yODZyN016VFlDQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZ2szM1RVMDUvVSsrR1JCcHozbnlnMDRWSVVnR1VsZGZLTkgxNWtXZXc5UFZ0YW1mR1JJUlVkTGdIak1qTDlrdzVlbk1BZmZLQTdqYjRZY2FJd1NnaHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzU0ODYwMTk2OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA1MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5NjY5NzExLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTzlVXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPOVUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI5bEFydEF0N3F1Q0xxemNpZXpHVlZlUWE0NmVjaHZlSTA5NWtRY0tTUWRFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1NTg4MjUwNjcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTkyMjMzMjUwNjBcIn0iCn0" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
