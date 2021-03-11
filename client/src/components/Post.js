import React, { useEffect } from 'react'
import useStyles from '../styling/postStyles';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import moment from 'moment';
import ThumbUp from '@material-ui/icons/ThumbUpAlt';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import StarsIcon from '@material-ui/icons/Stars';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../redux/actions/postsActions';
import hashtag from '../utils/hashtag'



const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
            <div className={classes.overlay}>
                <Typography variant="h6">{post.name}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{ color: '#5FDC77' }} size="small" onClick={() => setCurrentId(post._id)}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>
            <CardContent>
                <Typography variant="body2" color="textPrimary" component="p" >{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" className={classes.like} onClick={() => dispatch(likePost(post._id))} >

                    <StarsIcon fontSize="large" className={classes.likeIcon} />
                    &nbsp;
                    {post.likes.length === 0 ? '0 stars' : post.likes}
                </Button>
                <Button size="small" className={classes.delete} onClick={() => dispatch(deletePost(post._id))}>

                    <DeleteForeverIcon fontSize="large" />
                    remove
                    &nbsp;
                </Button>
            </CardActions>
        </Card>
    )
}

export default Post
