const app = require('./index');
const mongoose = require('mongoose');

port = process.env.PORT;
mongo_url = process.env.MONGO_URI;

mongoose.connect(mongo_url).then(()=>{console.log("You've successfully connected to the db...!!! :)")});
app.listen(port,()=>{
    console.log(`Your server is running on port ${port}... :)!!!!`)
})
