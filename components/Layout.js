import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Nav from "./Nav";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0),
    // display: "flex",
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <main>
        <Nav />
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
