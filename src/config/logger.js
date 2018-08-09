import winston from 'winston';

const level = process.env.LOG_LEVEL || 'debug';

const logger = new winston.Logger({
    transports: [
        new winston.transports.Console({
            level,
            colorize: true,
            timestamp: () => (new Date()).toISOString(),
        }),
    ],
});

export default logger;
