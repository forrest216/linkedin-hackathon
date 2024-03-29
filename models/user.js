const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
   name: {type: String, required: true},
   email: {type: String, required: true},
   college: {type: String, required: true},
   major: {type: String, required: true},
   classYear: {type: Number, required: true},
   classes: [String],
}, {
   timestamps: true
});

module.exports = mongoose.model('User', userSchema);