import winston from "winston";

export const logger = winston.createLogger({
    levels: {
        fatal: 0,
        error: 1,
        warning: 2,
        info: 3,
        debug: 4
    },
    transports: [
        new winston.transports.Console({
            level: 'info',
            format: winston.format.combine(
                winston.format.colorize({
                    fatal: 'red',
                    error: 'orange',
                    warning: 'yellow',
                    info: 'blue',
                    debug: 'white'
                }),
                winston.format.simple()
            )
        }),
        new winston.transports.File({filename: './logs/errors.log',  level: 'warn' })
    ]
})