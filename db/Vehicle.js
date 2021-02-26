const mongoose = require('mongoose');


const car = new mongoose.Schema({
    description: {
        type: String
    },
    make: {
        type: String
    },
    model: {
        type: String
    },
    km: {
        type: Number
    },
    estimatedate: {
        type: String
    },
    id: {
        type: Number
    },
    image: {
        type: String
    },
    inMaintainance: {
        type: Boolean
    },
    maintainanceInfo: {
        type: Array
    }
});

module.exports = Vehicle = mongoose.model('car', car);