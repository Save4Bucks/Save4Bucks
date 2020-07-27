'use strict';

const Model = require('../mongo.js');
const schema = require('./shopping-schema.js');

/**
 * Class representing a To Do Item.
 * @extends Model
 */
class ShoppingList extends Model {
  constructor() { super(schema); }
}

module.exports = ShoppingList;

