/**
 * Created by jeremyrobles on 3/17/16.
 */
'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    q = require('q');

function getAllUsers(){
    return User.find().exec();
}


module.exportsn = {
    getAllUsers
};