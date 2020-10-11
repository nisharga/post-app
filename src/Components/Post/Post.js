import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './Post.css'
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
   
    const {id, title} = props.val;
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
<Container maxWidth="lg" className="postSingle">
    <Card className={classes.root}>
      <CardContent>  
      <Typography className={classes.title} color="textSecondary" gutterBottom>
          Post No. {id}
        </Typography>
        <Typography variant="body2" component="p">
            <h2>{title}</h2>
        </Typography>
      </CardContent>
      <CardActions> 
          <Link className="readmore" size="small" color="primary" to={`/posts/${id}`}> Read More
          </Link>
      </CardActions>
    </Card>
</Container>
  );
}