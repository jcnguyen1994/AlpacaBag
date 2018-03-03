const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*Schemas */
var alpacaSchema = new Schema({
  Country: String,
  Capital: String,
  Latitude: Number,
  Longitude: Number,
  Continent: String

});

var CountryModel = mongoose.model('Country', alpacaSchema);

module.exports = CountryModel;
