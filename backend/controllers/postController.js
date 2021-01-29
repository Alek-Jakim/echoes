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