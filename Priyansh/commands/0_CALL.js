module.exports.config = {
  name: "call",
  version: "7.3.1",
  hasPermssion: 0,
  credits: "John Lester", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
  var { threadID, messageID } = event;
  var name = await Users.getNameUser(event.senderID);
  if (event.body.indexOf("call")>=0 || event.body.indexOf("Call")>=0 || event.body.indexOf("CALL")>=0 || event.body.indexOf("cal")>=0 || event.body.indexOf("CLL")>=0 || event.body.indexOf("CL")>=0 || event.body.indexOf("Call aao")>=0 || event.body.indexOf("Call tapko")>=0 || event.body.indexOf("call tapko")>=0 || event.body.indexOf("Cal")>=0 ) { 
    var msg = {
        body: ` ${name} 𝐘𝐀𝐑 𝐌𝐄 𝐊𝐄𝐒𝐄 𝐂𝐀𝐋𝐋 𝐀𝐔 𝐌𝐄 𝐓𝐎 𝐁𝐎𝐓 𝐇𝐔🌬️।🥺🥺👈`
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("📞", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }