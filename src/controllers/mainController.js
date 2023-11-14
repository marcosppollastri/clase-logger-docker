import { logger } from "../utils/logger.js";

export const getMain = (req, res) => {
    logger.info('Holis')
    logger.info(process.pid)
    try {
        for(let i = 0; i < 100000000000; i++) {
            if (i === 100000000 - 1 ){
                logger.info('Por fin!')
                res.status(200).json({})
            }
        }
       // throw new Error('Test error')
    } catch (error) {
        logger.error(`[ERROR][${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}] Ha ocurrido un error: ${error.message}`)
        res.status(500).json({message: 'Internal server error'})
    }
    res.status(200).send('GET request to the main');
};
  
export const postMain = (req, res) => {
    res.status(201).send('POST request to the main');
};
  