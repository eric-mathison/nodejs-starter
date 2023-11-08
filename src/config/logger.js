const { createLogger, format, transports } = require('winston');

const level = process.env.LOG_LEVEL || 'info';

const logger = createLogger({
    format: format.combine(
        format.timestamp(),
        format.colorize(),
        format.simple()
    ),
    transports: [
        new transports.Console({
            level,
        }),
    ],
});

module.exports = logger;
