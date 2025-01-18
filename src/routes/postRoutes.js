import express from 'express';
import {
  createPost,
  getPosts,
  updatePost,
  deletePost,
  likePost,
  addComment,
} from '../controllers/postController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.use(protect);

router
  .route('/')
  .get(getPosts)
  .post(createPost);

router
  .route('/:id')
  .patch(updatePost)
  .delete(deletePost);

router.post('/:id/like', likePost);
router.post('/:id/comments', addComment);

export default router;