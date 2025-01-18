import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';
import { AppError } from '../utils/appError.js';
import { catchAsync } from '../utils/catchAsync.js';

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

export const signup = catchAsync(async (req, res) => {
  const { username, email, password } = req.body;

  const user = await User.create({
    username,
    email,
    password,
  });

  // Remove password from output
  user.password = undefined;

  const token = signToken(user._id);

  res.status(201).json({
    status: 'success',
    token,
    data: { user },
  });
});

export const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new AppError('Please provide email and password', 400);
  }

  const user = await User.findOne({ email }).select('+password');

  if (!user || !(await user.comparePassword(password))) {
    throw new AppError('Incorrect email or password', 401);
  }

  const token = signToken(user._id);

  // Remove password from output
  user.password = undefined;

  res.status(200).json({
    status: 'success',
    token,
    data: { user },
  });
});