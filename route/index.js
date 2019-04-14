import express from 'express';
import User from '../dommycontroller/user-controller.js';

const router = express.Router();

const { createUser, loginUser } = User;

router.post('/auth/signup', createUser);
router.get('/auth/sign', loginUser);


export default router;