import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    media: {
        height: 0,
        paddingTop: '56.25%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'darken',
    },
    border: {
        border: 'solid',
    },
    fullHeightCard: {
        height: '100%',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '15px',
        height: '100%',
        position: 'relative',
    },
    overlay: {
        position: 'absolute',
        top: '20px',
        left: '20px',
        color: 'white',
    },
    overlay2: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        color: 'white',
    },
    grid: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px',
    },
    title: {
        padding: '0 16px',
        border: '1px solid #f3f3f3',
        margin: '0 10px'
    },
    cardActions: {
        padding: '0 15px 8px 15px',
        display: 'flex',
        justifyContent: 'space-between',
    },
    like: {
        color: '#6C3483',
        fontWeight: 'bold'
    },
    delete: {
        color: '#B03A2E',
        fontWeight: 'bold'
    },
    likeIcon: {
        marginRight: '3px'
    }
});