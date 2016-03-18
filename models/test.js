/**
 *
 * Created by jeremyrobles on 3/17/16.
 */
'use strict';
var mongoose = require('mongoose');

let TestSchema = new mongoose.Schema({
    body: String,
    created_at: {type: Date, default: Date.now}
});

mongoose.model('Test', TestSchema);