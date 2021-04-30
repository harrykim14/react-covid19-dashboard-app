import React from "react";
import { Button, makeStyles, Typography, Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles({
  btnStyle: {
    background: "green",
    padding: "3px 50px",
  },
  paperStyle: {
    background: "orange",
    height: "50px",
  },
});

const MaterialUI: React.FC = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography color="primary" variant="h3">
        Hello Material-UI Hello Material-UI Hello Material-UI Hello Material-UI
      </Typography>

      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper className={classes.paperStyle}>xs=12</Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paperStyle}>xs=6</Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paperStyle}>xs=6</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paperStyle}>xs=6</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paperStyle}>xs=6</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paperStyle}>xs=6</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paperStyle}>xs=6</Paper>
        </Grid>
      </Grid>

      <Button className={classes.btnStyle} variant="contained" color="primary">
        Test Button
      </Button>

      <Grid
        container
        spacing={1}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={1}>
          <Paper className={classes.paperStyle}>xs=3</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paperStyle}>xs=3</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paperStyle}>xs=3</Paper>
        </Grid>
      </Grid>

      <Grid container spacing={3} direction="column">
        <Grid item xs={12} container>
          <Grid item xs={2}>
            <Paper className={classes.paperStyle}>Demo 2</Paper>
          </Grid>
          <Grid item xs={8}>
          <Paper className={classes.paperStyle}>Text 8</Paper>
          </Grid>
          <Grid item xs={2}>
          <Paper className={classes.paperStyle}>Test 2</Paper>
          </Grid>
        </Grid>
        <Grid item xs={12} spacing={3} container justify="space-around">
          <Grid item xs={3}>
          <Paper className={classes.paperStyle}> Resources JSONPlaceholder comes with a set of 6 common resources:
            /posts 100 posts /comments 500 comments /albums 100 albums /photos
            5000 photos /todos 200 todos /users 10 users Note: resources have
            relations. For example: posts have many comments, albums have many
            photos, ... see guide for the full list.</Paper>
          </Grid>
          <Grid item xs={3}>
          <Paper className={classes.paperStyle}>Resources JSONPlaceholder comes with a set of 6 common resources:
            /posts 100 posts /comments 500 comments /albums 100 albums /photos
            5000 photos /todos 200 todos /users 10 users Note: resources have
            relations. For example: posts have many comments, albums have many
            photos, ... see guide for the full list.</Paper>
          </Grid>
          <Grid item xs={3}>
          <Paper className={classes.paperStyle}>Resources JSONPlaceholder comes with a set of 6 common resources:
            /posts 100 posts /comments 500 comments /albums 100 albums /photos
            5000 photos /todos 200 todos /users 10 users Note: resources have
            relations. For example: posts have many comments, albums have many
            photos, ... see guide for the full list.</Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default MaterialUI;
