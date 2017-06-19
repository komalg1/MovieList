(function (homeController) {


    homeController.init = function (app) {
        var data = require("../data");
        app.get("/", function (req, res) {
            data.getNoteCategories(function (err, results) {
                res.render("index", { title: "Express + Vash", error: err, categories: results });
            });

        });

        app.get("/notes/:categoryName", function (req, res) {
            var categoryName = req.params.categoryName;
            res.render("notes", { title: categoryName });
        });

        app.post("/newCategory", function (req, res) {
            var categoryName = req.body.categoryName;
            data.createNewCategory(categoryName, function (err) {
                if (err) {
                    console.log(err);
                    res.redirect("/");
                }
                else {
                    res.redirect("/notes/" + categoryName);   
                }
            })
        });

    };
})(module.exports);