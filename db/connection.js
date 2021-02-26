const mongoose = require('mongoose')

//const URI = `mongodb+srv://dbUser:dbUser@cluster0.oaxkz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const URI = 'mongodb+srv://dbUser:dbUser@cluster0.oaxkz.mongodb.net/maintainanceCars?retryWrites=true&w=majority'

const connectionParams={
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}

const connectDB = async () => {
    await mongoose.connect(URI, connectionParams)
      .then(() => {
        console.log('[MONGO DB] Database connected')
      })
      .catch(err => {
        console.error(`Error during the edatabase connection. \n${err}`)
      })
}

module.exports = connectDB;
