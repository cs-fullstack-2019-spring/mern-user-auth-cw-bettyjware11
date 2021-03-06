var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserEmail = new Schema(
    {
        username: {type: String, required: true, max: 100},
        password: {type: String, required: true, max: 100},
        email: {type: String},
    }
);

//Export model
module.exports = mongoose.model('user', UserEmail);