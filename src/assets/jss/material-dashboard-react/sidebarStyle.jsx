// ##############################
// // // Sidebar styles
// #############################

import {
  drawerWidth,
  transition,
  boxShadow,
  defaultFont,
  primaryColor,
  primaryBoxShadow,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
    sidebarColor
} from "../material-dashboard-react.jsx";

const sidebarStyle = theme => ({
  drawerPaper: {
    border: "none",
    position: "fixed",
    top: "0",
    bottom: "0",
    left: "0",
    zIndex: "1",
      backgroundColor: sidebarColor,
    // overflow: 'auto',
    // ...boxShadow,
    borderRight: '1px solid #00000029',
    // width: drawerWidth,
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      position: "fixed",
      height: "100%"
    },
    // [theme.breakpoints.down("sm")]: {
    //   width: drawerWidth,
    //   ...boxShadow,
    //   position: "fixed",
    //   display: "block",
    //   top: "0",
    //   height: "100vh",
    //   right: "0",
    //   left: "auto",
    //   zIndex: "1032",
    //   visibility: "visible",
    //   overflowY: "visible",
    //   borderTop: "none",
    //   textAlign: "left",
    //   paddingRight: "0px",
    //   paddingLeft: "0",
    //   transform: `translate3d(${drawerWidth}px, 0, 0)`,
    //   ...transition
    // }
  },
  logo: {
    position: "relative",
    padding: "15px 25px",
    zIndex: "4",
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: "0",
      height: "1px",
      right: "15px",
      width: "calc(100% - 30px)",
      backgroundColor: "rgba(180, 180, 180, 0.3)"
    }
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
    	easing: theme.transitions.easing.sharp,
    	duration: theme.transitions.duration.enteringScreen,
    }),
    zIndex:1 ,
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
    	easing: theme.transitions.easing.sharp,
    	duration: theme.transitions.duration.leavingScreen,
    }),
    boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(7)} + 1px)`,
    },
  },
  logoLink: {
    ...defaultFont,
    textTransform: "uppercase",
    padding: "5px 0",
    display: "block",
    fontSize: "18px",
    textAlign: "left",
    fontWeight: "400",
    lineHeight: "30px",
    textDecoration: "none",
    backgroundColor: "transparent",
    "&,&:hover": {
      color: "#FFFFFF"
    }
  },
  logoImage: {
    width: "30px",
    display: "inline-block",
    maxHeight: "30px",
    marginLeft: "10px",
    marginRight: "15px",
    textAlign: 'center'
  },
  logoImageSideBar: {
    display: "inline-block",
    maxHeight: "30px",
    marginLeft: "10px",
    marginRight: "15px",
    textAlign: 'center'
  },
  logocollSidebar :{
    display: "inline-block",
    maxHeight: "30px",
    textAlign: 'center'
  },
  collimg: {
    width: "40px",
    height:"40px",
    top: "4px",
    left: "8px",
    position: "absolute",
    verticalAlign: "middle",
    border: "0"
  },
  img: {
    width: "160px",
    top: "8px",
    position: "absolute",
    verticalAlign: "middle",
    border: "0"
  },
    sidebarBackgroundColor: {
    backgroundColor: sidebarColor
    },
  background: {
    position: "absolute",
    zIndex: "1",
    height: "100%",
    width: "100%",
    display: "block",
    top: "0",
    left: "0",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    "&:after": {
      position: "absolute",
      zIndex: "3",
      width: "100%",
      height: "100%",
      content: '""',
      display: "block",
      background: "#000",
      opacity: ".8",
    }
  },
  list: {
    marginTop: "20px",
    paddingLeft: "0",
    paddingTop: "0",
    paddingBottom: "0",
    marginBottom: "0",
    listStyle: "none"
  },
  item: {
    position: "relative",
    display: "block",
    textDecoration: "none",
  },
  itemLink: {
    width: 'auto',
    transition: "all 300ms linear",
    marginTop: theme.spacing(1.4),
    borderRadius: "3px",
    position: "relative",
    display: "flex",
    padding: "5px 15px",
    alignItems: 'center',
    backgroundColor: "transparent",
    ...defaultFont
  },
  sidebarIcon: {
    fontSize: '1.5rem'
  },
  nested: {
    paddingLeft: theme.spacing(3),
  },
  itemIcon: {
    // width: "24px",
    // height: "30px",
    float: "left",
    // marginRight: "15px",
    textAlign: "center",
    verticalAlign: "middle",
    color: theme.palette.text.primary,
  },
  itemText: {
    ...defaultFont,
    margin: "0",
    marginLeft: theme.spacing(2),
    lineHeight: "30px",
    fontSize: "14px",
    color: theme.palette.text.primary,
  },
  whiteFont: {
    color: "#FFFFFF"
  },
  purple: {
    backgroundColor: primaryColor,
    ...primaryBoxShadow,
    "&:hover": {
      backgroundColor: primaryColor,
      ...primaryBoxShadow
    }
  },
  blue: {
    backgroundColor: theme.palette.primary.main,
    // boxShadow:
    //   "0 12px 20px -10px rgba(0,188,212,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(0,188,212,.2)",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      // boxShadow:
      //   "0 12px 20px -10px rgba(0,188,212,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(0,188,212,.2)"
    }
  },
  green: {
    backgroundColor: successColor,
    boxShadow:
      "0 12px 20px -10px rgba(76,175,80,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(76,175,80,.2)",
    "&:hover": {
      backgroundColor: successColor,
      boxShadow:
        "0 12px 20px -10px rgba(76,175,80,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(76,175,80,.2)"
    }
  },
  orange: {
    backgroundColor: warningColor,
    boxShadow:
      "0 12px 20px -10px rgba(255,152,0,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(255,152,0,.2)",
    "&:hover": {
      backgroundColor: warningColor,
      boxShadow:
        "0 12px 20px -10px rgba(255,152,0,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(255,152,0,.2)"
    }
  },
  red: {
    backgroundColor: dangerColor,
    boxShadow:
      "0 12px 20px -10px rgba(244,67,54,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(244,67,54,.2)",
    "&:hover": {
      backgroundColor: dangerColor,
      boxShadow:
        "0 12px 20px -10px rgba(244,67,54,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(244,67,54,.2)"
    }
  },
  sidebarWrapper: {
    position: "relative",
    height: "calc(100vh - 75px)",
    overflow: "auto",
    // width: "239px",
    zIndex: "4",
    overflowScrolling: 'touch'
  }
});

export default sidebarStyle;
