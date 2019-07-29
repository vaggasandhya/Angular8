const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// declare collection and types

const toysSchema = new Schema({
    name: {
        type : String
    },
    description: {
        type : String
    },
    cost : {
        type: Number
    },
    path: {
        type : String
    }
}, {
    collection : 'toys'
});

module.exports = mongoose.model('toys', toysSchema);
