const express = require('express');
const Assessment = require('../models/assessment');
const router = express.Router();

router
  .get('/', (req, res) => {
    try {
      const bmi = Assessment.getAllBMI();
      res.send(bmi);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  module.exports = router;