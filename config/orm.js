// Import MySQL connection.
var connection = require("../config/connection.js");


// Create orm object (perform actions on database)
var orm = {
    // select all data from database
    selectAll: function(table, cb) {
        connection.query("SELECT * FROM " + table + ";", function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // insert new burger into database
    insertOne: function(table, value, cb) {
        connection.query("INSERT INTO " + table + " (burger_name) VALUES (?)", value, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // update burger's devoured status in database by id
    updateOne: function(table, id, cb) {
        connection.query("UPDATE " + table + " SET devoured = 1 WHERE id = ?", [id], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

// Export the orm object for the model
module.exports = orm;
