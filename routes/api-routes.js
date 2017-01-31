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
        console.log(req.body);
        db.burgers.create({
            burger_name: req.body.burger_name
        }).then(function(dbPost) {
            res.json(dbPost);
        });
    });

    // PUT route for updating posts
    // req.body represents object of attributes you're setting
    app.put("/api/burgers", function(req, res) {
        db.burgers.update(req.body, {
            where: {
                id: req.body.id
            }
        }).then(function(dbPost) {
            res.json(dbPost);
        });
    });
};
