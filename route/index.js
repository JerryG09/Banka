import express from 'express';
import User from '../dommycontroller/user-controller.js';

const router = express.Router();

const { createUser, getAllUsers } = User;

router.post('/auth/signup', createUser);
router.get('/api/users', getAllUsers);


export default router;