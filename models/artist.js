var mongoose = require('mongoose'),

var ArtistSchema = new mongoose.Schema({
  name: String,
  img_url: String,
  nationality: String,
  birthYear: Date,
  description: String,
  paintings: [{
    id: mongoose.Schema.Painting.ObjectId,
    ref: 'Painting'
  }]
});

var Artist = mongoose.model('Artist', ArtistSchema);

module.exports = Artist;
