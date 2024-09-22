const express = require('express');
const router = express.Router();
const { getBlogs, createBlog, updateBlog, deleteBlog } = require('../controllers/blogController');

// Get all blogs
router.get('/', getBlogs);

// Create new blog
router.post('/', createBlog);

// Update blog by ID
router.put('/:id', updateBlog);

// Delete blog by ID
router.delete('/:id', deleteBlog);

module.exports = router;
