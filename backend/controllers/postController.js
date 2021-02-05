import mongoose from 'mongoose';
import PostMessage from '../models/postMessageModel.js'

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();

        res.status(200).json(postMessages);
    }
    catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

export const createPost = async (req, res) => {

    const { title, message, selectedFile, creator, tags } = req.body

    const newPost = new PostMessage({ title, message, selectedFile, creator, tags });

    try {
        await newPost.save();

        //201 is for successful creation
        res.status(201).json(newPost);
    }
    catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('Post doesn\'t exist!');
    }

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true, useFindAndModify: false });

    res.json(updatedPost);
} 