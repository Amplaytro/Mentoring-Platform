const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const expertSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

const Expert = mongoose.model('Expert', expertSchema);

module.exports = Expert;