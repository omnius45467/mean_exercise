/**
 * Created by jeremyrobles on 3/17/16.
 */

'use strict';

var mongoose = require('mongoose'),
    bcrypt = require('bcrypt');

let UserSchema = new mongoose.Schema({
    username: String,
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date},
    deleted_at: {type: Date}
});

mongoose.model('User', UserSchema);