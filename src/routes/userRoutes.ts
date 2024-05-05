import express from 'express';
import {
  getAllUsers,
  addNewUser,
  getUser,
  updateUser,
  deleteUser,
} from '../controllers/userControllers';

const userRouter = express.Router();

userRouter.route('/').get(getAllUsers).post(addNewUser);
userRouter.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

export { userRouter };
