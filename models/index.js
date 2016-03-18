/**
 *
 * Created by jeremyrobles on 3/17/16.
 */
'use strict';

let mongoose = require('mongoose'),
    fs = require('fs'),
    q = require('q'),
    _ = require('lodash');

const models = () => _.without(fs.readdirSync('./models'), _.last(__filename.split('/')));

module.exports = {
    init: () => {
        mongoose.connect(process.env.MONGO_URI);

        let db = mongoose.connection,
            m = models();

        db.on('error', console.error.bind(console, 'Error connecting to mongodb: '));
        db.once('open', console.log.bind(console, 'Database connected.'));

        m.forEach(model => {
            require(`./${model}`);
        });

        mongoose.Promise = q.Promise;
    }
};