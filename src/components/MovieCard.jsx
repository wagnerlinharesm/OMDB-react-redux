import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const MovieCard = (props) => {
  const classes = useStyles();
  return (      
    <Card style={{ minWidth: '300px', margin: '24px'}} className={classes.root}>
    <CardActionArea>
    <Link to={`/about/${props.movie.imdbID}`}>
      <CardMedia
        style={{maxWidth: '1000px', maxHeight: '300px', minWidth: '300px', minHeight: '300px', backgroundSize : '300px 300px'}}
        className={classes.media}
        image={props.posterUrl}
        title={props.title}
      />
      </Link>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
           Average: {props.average}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  )
}

export default MovieCard;
