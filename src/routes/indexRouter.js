import express from 'express';
import { getMain, postMain } from '../controllers/mainController.js';
import { requestLogger } from '../middlewares/requestLogger.js';

const router = express.Router();

router.get('/main', requestLogger, getMain);
router.post('/main', requestLogger, postMain);

export default router