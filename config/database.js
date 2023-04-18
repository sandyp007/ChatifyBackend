const mongoose = require('mongoose');

const databaseConnect = () => {
     mongoose.connect(process.env.DATABASE_URI,{
          useNewUrlParser : true,
          useUnifiedTopology : true
     }).then(()=>{
          console.log('Mongodb Database Connected')
     }).catch(error=>{
          console.log(error)
     })
}
module.exports = databaseConnect;