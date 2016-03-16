var mongoose = require('mongoose');
var User = require('../User.js');


// manipulate your data here
User.find().exec(
    {
      name: String,
      created_at: Date,
      updated_at: Date
    }
)
.then(results => {
  console.log(results);
  mongoose.connection.close();
});