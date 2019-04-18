const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Vote = require('../models/Vote');

const Pusher = require('pusher');
var pusher = new Pusher({
    appId: '717298',
    key: '5482885c7f8152230ea1',
    secret: '7dd7e1c37ca422e2c4ef',
    cluster: 'eu',
    encrypted: true
  });



router.get('/', (req, res) => {
    Vote.find().then(votes => res.json({success: true, votes: votes}));
});


router.post('/', (req, res) => {
    const newVote = {
        employe: req.body.employe,
        points: 1,
    }
    new Vote(newVote).save().then(vote => {
        pusher.trigger('employee-poll', 'vote-employe', {
            points:parseInt(vote.points),//au lieu de 1 car on recupere la valeur fourni par le formulaire
            employe:vote.employe
          }); 
           return res.json({success: true, message: 'Merci pour votre vote'});

    });    
})
module.exports = router;
