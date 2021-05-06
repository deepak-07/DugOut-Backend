const mongoose = require("mongoose")
const mySecret = process.env['db Uri']
// TODO: move to .env/sec
// TODO: use async await instead of then/catch
function initializeDBConnection() {
  // Connecting to DB
  mongoose.connect(
    mySecret
, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
    .then(() => console.log("successfully connected"))
    .catch(error => console.error("mongoose connection failed...", error))
}

module.exports = { initializeDBConnection }

