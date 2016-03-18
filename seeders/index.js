/**
 * Created by jeremyrobles on 3/17/16.
 */

'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    bcrypt = require('bcrypt');

let u = {
    username: 'sammyboy45467',
    firstName: 'jer',
    lastName: 'robles',
    email: 'email@email.com',
    password: bcrypt('1234'),
    created_at: Date.now

};


function seedUsers(u) {

    let user = new User(u);
    return user.save();

}

seedUsers(u);