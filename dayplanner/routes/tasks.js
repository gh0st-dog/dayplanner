/**
 * Created by buyvich on 28.05.14.
 */

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    req.models.task.find({}, function(err, tasks){
        res.send({error: err, tasks: tasks});
    });
});

router.put('/', function(req, res) {
    req.models.task.create([req.param("task")], function(err, tasks){
        res.send({error: err});
    });
});

module.exports = router;
