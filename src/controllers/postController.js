import { Post } from '../models/Post.js';
import { AppError } from '../utils/appError.js';
import { catchAsync } from '../utils/catchAsync.js';

export const createPost = catchAsync(async (req, res) => {
  const post = await Post.create({
    content: req.body.content,
    image: req.body.image,
    author: req.user._id,
  });

  await post.populate('author', 'username avatar');

  res.status(201).json({
    status: 'success',
    data: { post },
  });
});

export const getPosts = catchAsync(async (req, res) => {
  const posts = await Post.find()
    .populate('author', 'username avatar')
    .populate('comments.author', 'username avatar')
    .sort('-createdAt');

  res.status(200).json({
    status: 'success',
    results: posts.length,
    data: { posts },
  });
});

export const updatePost = catchAsync(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    throw new AppError('No post found with that ID', 404);
  }

  if (post.author.toString() !== req.user._id.toString()) {
    throw new AppError('You can only update your own posts', 403);
  }

  post.content = req.body.content;
  if (req.body.image) post.image = req.body.image;
  await post.save();

  res.status(200).json({
    status: 'success',
    data: { post },
  });
});

export const deletePost = catchAsync(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    throw new AppError('No post found with that ID', 404);
  }

  if (post.author.toString() !== req.user._id.toString()) {
    throw new AppError('You can only delete your own posts', 403);
  }

  await post.deleteOne();

  res.status(204).json({
    status: 'success',
    data: null,
  });
});

export const likePost = catchAsync(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    throw new AppError('No post found with that ID', 404);
  }

  const liked = post.likes.includes(req.user._id);

  if (liked) {
    post.likes = post.likes.filter(id => id.toString() !== req.user._id.toString());
  } else {
    post.likes.push(req.user._id);
  }

  await post.save();

  res.status(200).json({
    status: 'success',
    data: { post },
  });
});

export const addComment = catchAsync(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    throw new AppError('No post found with that ID', 404);
  }

  post.comments.push({
    content: req.body.content,
    author: req.user._id,
  });

  await post.save();
  await post.populate('comments.author', 'username avatar');

  res.status(201).json({
    status: 'success',
    data: { post },
  });
});