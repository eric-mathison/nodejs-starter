require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const authenticateKey = require('./middleware/apiAuth');

const logger = require('./config/logger');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.urlencoded({ limit: '5mb', extended: true }));
app.use(express.json({ limit: '5mb', extended: true }));

app.use(
    morgan('common', {
        skip: (req, res) =>
            res.statusCode < 400 || process.env.MUTE_MORGAN === 'on',
        stream: process.stderr,
    })
);

app.use(
    morgan('common', {
        skip: (req, res) =>
            res.statusCode >= 400 || process.env.MUTE_MORGAN === 'on',
        stream: process.stdout,
    })
);

app.get('/', authenticateKey, (req, res) => {
    res.send({ code: 200, message: 'Successful' });
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
    logger.error(err.stack);
    res.status(500).send('Server Error');
});

// eslint-disable-next-line no-unused-vars
app.use((req, res, next) => {
    logger.error('400 page requested');
    res.status(404).send('Page not found');
});

app.listen(PORT, () => logger.info(`Listening on port ${PORT}`));

module.exports = app;
