const dividersFunction = require('../functions/dividers')

class DividersCalculatorController {
    dividersCalculator(req, res) {
        try {
            const { number } = req.body;

            const dividers = dividersFunction(number);

            const response = {
                "Número de entrada": number,
                "Números divisores": dividers.divedersNumbers,
                "Divisores primos": dividers.primeNumbers,
            };

            res.status(200).send(response);
        } catch (err) {
            console.error(err);
            res.status(400).send(err.message);
        }
    };
}

module.exports = new DividersCalculatorController();
