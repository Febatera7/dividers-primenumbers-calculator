const { Router } = require('express');
const DividersCalculatorController = require('../controllers/DividersCalculatorController');

const routes = new Router();

routes.post('/divider-calculator', DividersCalculatorController.dividersCalculator);

module.exports = routes;