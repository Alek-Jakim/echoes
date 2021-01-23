import { create } from 'domain';
import express from 'express';
import { getPosts, createPost } from '../controllers/postController.js'

const router = express.Router();

//Posts routes
router.get('/', getPosts);
router.post('/', createPost);

export default router;