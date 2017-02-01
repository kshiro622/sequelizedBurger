var db = require("../models");

// Routes
module.exports = function(app) {

    app.get('/api/all', function(request, response) {
        db.burgers.findAll({}).then(function(dbResponse) {
            response.render("index", { burgers: dbResponse });
        });
    });

    // POST route for saving a new post
    app.post("/api/burgers", function(req, res) {
        console.log(req.body.burger_name);
        if (req.body.burger_name.length > 1) {
            db.burgers.create({
                burger_name: req.body.burger_name
            }).then(function(dbPost) {
                res.redirect("/api/all");
            });
        } else {
            console.log("Please enter a burger to add.");
            res.redirect("/api/all");
        }
    });

    // PUT route for updating posts
    // req.body represents object of attributes you're setting
    app.put("/api/:id", function(req, res) {
        db.burgers.update({ devoured: 1 }, {
            where: {
                id: req.body.id
            }
        }).then(function(dbPost) {
            res.redirect("/api/all");
        });
    });
};
