import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  date_added: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('Server', schema)