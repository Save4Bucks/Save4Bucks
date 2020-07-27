'use strict';

const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')(mongoose);

const shopping = mongoose.Schema({
  item: { type:String, required:true },
  aisle: {type: String},
  store: { type:String, required:true },
  purchased: {type:Boolean, required:true, default:false},
});

module.exports = mongoose.model('shopping', shopping);
