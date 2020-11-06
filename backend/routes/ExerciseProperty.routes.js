const router = require('express').Router();
const ExerciseProperties = require('../controllers/ExerciseProperty.controller');

router.get('/', ExerciseProperties.findAll);
router.post('/', ExerciseProperties.create);

module.exports = router;