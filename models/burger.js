// Dependencies
var orm = require('../config/orm');

// Define burger object
var burger = {
    // select all burgers from the table
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    // insert a burger into table
    insertOne: function(value, cb) {
        orm.insertOne("burgers", value, function(res) {
            cb(res);
        });
    },
    // update burger's devoured status in table
    updateOne: function(id, cb) {
        orm.updateOne("burgers", id, function(res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller
module.exports = burger;
