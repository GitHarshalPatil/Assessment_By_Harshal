const Blog = require('../models/blog');

// Get all blogs
exports.getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create new blog
exports.createBlog = async (req, res) => {
    const { title, content } = req.body;
    const newBlog = new Blog({ title, content });
    try {
        await newBlog.save();
        res.status(201).json(newBlog);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update blog by ID
exports.updateBlog = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedBlog);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete blog by ID
exports.deleteBlog = async (req, res) => {
    const { id } = req.params;
    try {
        await Blog.findByIdAndDelete(id);
        res.status(200).json({ message: 'Blog deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
