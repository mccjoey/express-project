const path = require("path");

function getMessages(req, res) {
  //res.sendFile(path.join(__dirname, "..", "public", 'images', "skimountain.jpg"));
  // res.send("<ul><li>Hello Albert!</li></ul>");

  res.render('messages', {
    title: 'Messages to my friends!',
    friend:'Elon Musk'
  })
}

function postMessage(req, res) {
  console.log("Updating messages...");
}

module.exports = {
  getMessages,
  postMessage,
};
