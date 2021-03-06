const router = require("express").Router();
const db = require("../models");

router.get("/api/workouts", (req, res) => {

    db.Workout.find({})
        .then((results) => {
            console.log(results);
            res.json(results);
        })
        .catch((err) => {
            res.json(err);
        });
});


router.put("/api/workouts/:id", (req, res) => {

    db.Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } }, { new: true })
        .then((results) => {
            console.log(results);
            res.json(results);
        })
        .catch((err) => {
            console.log(err);

            res.json(err);
        });
});


router.post("/api/workouts", (req, res) => {

    db.Workout.create(req.body)
        .then((results) => {
            res.json(results);
        })
        .catch((err) => {
            res.json(err);
        });
});



router.get("/api/workouts/range", (req, res) => {

    db.Workout.find({})
        .then((results) => {
            console.log(results);
            res.json(results);
        })
        .catch((err) => {
            res.json(err);
        });
});
module.exports = router;