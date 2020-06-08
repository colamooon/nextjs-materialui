import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(),
  },
}));
const Index = () => {
  const classes = useStyles();

  return <div className={classes.root}>Index</div>;
};

export default Index;
