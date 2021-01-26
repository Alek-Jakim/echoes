import axios from 'axios'

const url = 'http://localhost:5000/posts';

const fetchPosts = async () => await axios.get(url);
