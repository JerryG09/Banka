import express from 'express';
import User from '../dommycontroller/user-controller.js';
import Account from '../dommycontroller/account-controler'

const router = express.Router();

const { createUser, loginUser } = User;
const { createAccount } = Account;

router.post('/auth/signup', createUser);
router.post('/auth/signin', loginUser);
router.post('/account', createAccount);


export default router;