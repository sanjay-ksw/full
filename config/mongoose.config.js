const mongoose = require("mongoose");

mongoose.connect(Process.env.URI)
.then(()=>{
    console.log("Connected")
})
.catch((err)=>{
    console.log(err)
})

module.exports = mongoose.connection;
