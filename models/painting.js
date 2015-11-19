var mongoose = require('mongoose');

var PaintingSchema = new mongoose.Schema({
  title: String,
  img_url: String,
  year_made: Date
});

module.exports = Painting;
