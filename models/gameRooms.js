var mongoose = require('mongoose')
var questionSchema = require('./question.js');

var gameRooms = new mongoose.Schema({
  url: {type: String, unique: true},
  activeUsers: Number,
  category: String,
  firstQuestion: [questionSchema],
  allQuestions: Array
});

var gameRooms = mongoose.model('gameRooms', gameRooms)

module.exports = gameRooms;
