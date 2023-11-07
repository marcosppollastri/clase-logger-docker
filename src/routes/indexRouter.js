import express from 'express';
import { getMain, postMain } from '../controllers/mainController.js';

const router = express.Router();

router.get('/main', getMain);
router.post('/main', postMain);

export default router