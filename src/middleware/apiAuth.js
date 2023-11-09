const logger = require('../config/logger');

const authenticateKey = (req, res, next) => {
    const apiKey = req.header('api-key');
    if (process.env.API_KEY && apiKey === process.env.API_KEY) {
        logger.info('API Called');
        next();
    } else {
        res.status(401).send({
            error: { code: 401, message: 'Not authorized.' },
        });
    }
};

module.exports = authenticateKey;
