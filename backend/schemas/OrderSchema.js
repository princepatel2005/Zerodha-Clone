const {Schema} = require("mongoose");

const OrderSchema = new Schema({
    name: String,
    qty: Number,
    Price: Number,
    mode: String,
});

module.exports = { OrderSchema };