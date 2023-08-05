const express = require('express')
const route = require('./routes/route')
const mongoose  = require('mongoose')
const app = express();
const multer=require('multer')


mongoose.connect("mongodb+srv://khushi123456789:khushi123456789@cluster0.xcf6vy2.mongodb.net/group24Database?retryWrites=true&w=majority", {
    
})    
                         

.then(() => console.log('MongoDb is connected'))
.catch(err => console.log(err))
app.use(multer().any())
app.use('/', route);

app.listen(3000,()=> {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
