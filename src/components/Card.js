import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 30,

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

export default function OutlinedCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  var bgColor = 'white';

  if((props.name).charAt(0) == 'C'){
    bgColor = 'orange'
  }

  return (
    <Card style={{backgroundColor: bgColor}} className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
        {props.name}
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        {props.email}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        {props.city}
        </Typography>
        <Typography variant="body2" component="p">
        {props.phone}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
  );
}
