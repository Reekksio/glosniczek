module.exports = {
  Admins: ["UserID", "UserID"], //Admins of the bot
  ExpressServer: false, //If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || ">", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/sbySMS7m3v", //Support Server Link
  Token: process.env.Token || "MTI3NjU3NzAwODYwNzk1MjkxNw.GoJGv7.WrpXybEuTddtdzUFQj1e6xemrecyear047hGIM", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "1276577008607952917", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "VXI87ybR7RTkFZcrOwy6-iqhBaBUY-Qk", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  ServerDeafen: true, //If you want bot to stay deafened
  DefaultVolume: 100, //Sets the default volume of the bot, You can change this number anywhere from 1 to 100
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is EPIC", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "RANDOM", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
  Permissions: 2205281600, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost:4200", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku
  
  Presence: {
    status: "online", // You can show online, idle, and dnd
    name: "macanie suta twojej mamy", // The message shown
    type: "PLAYING", // PLAYING, WATCHING, LISTENING, STREAMING
  },

  //Lavalink
  Lavalink: {
    id: "bleach",
    host: "v3.lavalink.rocks",
    port: 443, // The port that lavalink is listening to. This must be a number!
    pass: "horizxon.tech",
    secure: true, // Set this to true if the lavalink uses SSL or you're hosting lavalink on repl.it
  },

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "942f25d2a49c4c69894c282304ee712f", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "7be80f860e68476d9396f5954bd9416d", //Spotify Client Secret
  },
};
