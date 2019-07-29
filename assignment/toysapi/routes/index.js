const express = require('express');
const toyRoutes = express.Router();
const upload = require('./upload');
const mongoose = require('mongoose');

let Toys = require('../models/Toys');

toyRoutes.route('/').get(function (req,res, next) {
    Toys.find({}, ['name', 'description', 'cost', 'path'], {sort:{_id: 1}}, function (err,toys) {
        res.json(toys);
    });
});

toyRoutes.route('/upload').post(function(req,res){
    upload(req, res,(error) => {
      if(error){
         res.send('File not uploaded');
      }else{
        if(req.file == undefined){
          
          res.send('File not found');

        }else{
            var fullPath = "files/"+req.file.filename;


                const document = {
                    name : req.body.name,
                    description: req.body.description,
                    cost: req.body.cost,
                    path: fullPath
                };
                    console.log(document);
                const toy = new Toys(document);
                    toy.save(function (error) {
                        if(error) {
                            throw error;
                        }
                        res.json({"success" : 'Successfully uploaded the toys info to server'});
                    });
            }
        }
    });

});

module.exports =  toyRoutes;