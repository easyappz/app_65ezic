const mongoose = require('mongoose');
const { mongoDb } = require('../db');

const photoSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  imageUrl: { type: String, required: true },
  gender: { type: String, enum: ['male', 'female', 'other'], required: true },
  age: { type: Number, required: true },
  status: { type: String, enum: ['in_review', 'reviewed'], default: 'in_review' },
  createdAt: { type: Date, default: Date.now },
});

const Photo = mongoDb.model('Photo', photoSchema);

module.exports = Photo;