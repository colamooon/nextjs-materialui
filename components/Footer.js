import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0),
  },
  footer: {
    margin: theme.spacing(0),
    display: "flex",

    justifyContent: "center",
    justifyItems: "center",
    height: 100,
  },
  chiildDiv: {
    display: "flex",
    justifyContent: "center",
    justifyItems: "center",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  img: {
    maxWidth: 80,
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <div className={classes.chiildDiv}>Powered by</div>
        <div className={classes.chiildDiv}>
          <img
            src="/vercel.svg"
            alt="Vercel Logo"
            className="logo"
            className={classes.img}
          />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
