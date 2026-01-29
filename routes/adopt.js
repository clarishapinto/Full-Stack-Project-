const express = require('express');
const router = express.Router();
const { getAllAnimals, adoptAnimal } = require('../controllers/animalController');

// GET /animals
router.get('/', getAllAnimals);

// PUT /animals/adopt/:id
router.put('/adopt/:id', adoptAnimal);

module.exports = router;
