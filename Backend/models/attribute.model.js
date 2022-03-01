const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const attributeSchema = new Schema({
  username: { type: String, required: true },
  firstname: { type: String, required: true},
  lastname: { type: String, required: true},
  domain: { type: String, required: true },
  company: { type: String, required: true },
  language: { type: String, required: true },
  hometown: { type: String, required: true },
  experience: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Attribute = mongoose.model('Attribute', attributeSchema);

module.exports = Attribute;