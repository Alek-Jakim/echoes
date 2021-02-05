import React from 'react'
import useStyles from '../styling/postsStyles'
import Post from './Post';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';



const Posts = ({ setCurrentId }) => {
    const classes = useStyles();
    const posts = useSelector((state) => state.posts);

    const circularProgress = {
        color: '#fff'
    }

    return (
        !posts.length ? <CircularProgress color="secondary" /> :
            <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
                {
                    posts.map((post) => (
                        <Grid key={post._id} item xs={12} sm={6}>
                            <Post post={post} setCurrentId={setCurrentId} />
                        </Grid>
                    ))
                }
            </Grid>
    )
}

export default Posts
