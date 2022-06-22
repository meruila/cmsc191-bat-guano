const express = require("express");

const getData = express.Router();
const db = require('./connection');
const ObjectId = require("mongodb").ObjectId;


//GET ALL DATASETS
getData.route("/get").get(function(req, res) {

    let db_connect = db.getDb("bat_guano");

    db_connect
        .collection('taxonomic_analysis')
        .find({})
        .toArray(function (err,result){
            if (err) throw err;
            res.json(result)
    });
});

getData.route("/level").get(function(req, res) {

    let db_connect = db.getDb("bat_guano");

    db_connect
        .collection('level_distribution')
        .find({})
        .toArray(function (err,result){
            if (err) throw err;
            res.json(result)
    });
});


//GET C1 DATASET
getData.route("/getc1").get(function(req, res) {

    let db_connect = db.getDb("bat_guano");

    db_connect
        .collection('taxonomic_analysis')
        .find({Chamber: "C1"})
        .toArray(function (err,result){
            if (err) throw err;
            res.json(result)
    });
});

//GET C2 DATASET
getData.route("/getc2").get(function(req, res) {

    let db_connect = db.getDb("bat_guano");
    db_connect
        .collection('taxonomic_analysis')
        .find({Chamber: "C2"})
        .toArray(function (err,result){
            if (err) throw err;
            res.json(result)
    });
});

module.exports = getData;