// Dependencies
var express = require('express');
var router = express.Router();
var burger = require('../models/burger');

// ====== ROUTES ===== //
// route to get information about burgers and render it in index.handlebars
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        res.render("index", { burgers: data });
    });
});

// route to add new entry
router.post("/", function(req, res) {
    if (req.body.burger_name.length > 1) {
        burger.insertOne(req.body.burger_name, function() {
            res.redirect("/");

        });
    } else {
        console.log("Please enter a burger to add.");
        res.redirect("/");
    }
});

// route to update an entry
router.put("/:id", function(req, res) {
    burger.updateOne(req.body.id, function() {
        res.redirect("/");
    });
});

// Export routes for server.js to use.
module.exports = router;
