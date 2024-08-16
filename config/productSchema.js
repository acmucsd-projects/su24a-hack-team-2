const mongoose = require('mongoose');
 
const productSchema = new Schema({
  id: {
    type: mongoose.ObjectId,
  },
  name: {
    type: String,
    required: true, // Throws error if name is missing
    unique: true // Error is thrown for duplicate names
  },

  createdAt: {
    type: Date,
    default: Date.now // Sets default value as current date
  }
});
 
const Product = mongoose.model('Product', productSchema);