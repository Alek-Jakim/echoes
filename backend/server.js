import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectToDB from './config/db.js'

//Routes
import postRoutes from './routes/posts.js'

//Basic config
const app = express();
const PORT = process.env.PORT || 5000

//APP.USE
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);

//DB connection
connectToDB();


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})