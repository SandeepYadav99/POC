import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import cx from "classnames";
import clsx from "clsx";
import { useTheme, withStyles } from "@mui/styles";
import {
  Drawer,
  Hidden,
  List,
  ListItemIcon,
  ListItemText,
  Collapse,
  ListItemButton,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import logoImageData from "../../assets/CRMAssets/ezupp_login_logo.png";
import sideBarLogo from "../../assets/img/sidebarImage.png";

import sidebarStyle from "../../assets/jss/material-dashboard-react/sidebarStyle.jsx";
import { styled } from "@mui/material/styles";

class CustomListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick() {
    this.setState({
      open: !this.state.open,
    });
  }

  _renderLinks() {}

  _renderNavLink(prop, nested) {
    const { classes, color, key, activeRoute, isOpened } = this.props;
    const listItemClasses = cx({
      [" " + classes[color]]: activeRoute(prop.path, prop),
      [" " + classes["nested"]]: nested,
    });
    const whiteFontClasses = cx({
      [" " + classes.whiteFont]: activeRoute(prop.path, prop),
    });
    return (
      <NavLink
        to={prop.path}
        className={classes.item}
        activeClassName="active"
        // key={key}
      >
        <ListItemButton className={classes.itemLink + listItemClasses}>
          <ListItemIcon className={classes.itemIcon + whiteFontClasses}>
            <prop.icon className={classes.sidebarIcon} />
          </ListItemIcon>

          {isOpened && (
            <ListItemText
              primary={prop.sidebarName}
              className={classes.itemText + whiteFontClasses}
              disableTypography={true}
            />
          )}
        </ListItemButton>
      </NavLink>
    );
  }

  _renderNestedLinks(slug, nested = false) {
    const { routes } = this.props;
    const links = [];
    routes.forEach((val, index) => {
      if (val.parent == slug && val.is_sidebar) {
        links.push(this._renderNavLink(val, nested));
      }
    });

    return links;
  }

  _activeSelectedRoutes(slug) {
    const { routes, activeRoute } = this.props;
    return routes.some(
      (val) => val.parent === slug.slug && activeRoute(val.path, val)
    );
  }

  render() {
    const { prop, classes, color, key, activeRoute, isOpened, routes, theme } =
      this.props;

    if (!prop.is_sidebar) return null;
    if (prop.redirect) return null;

    if (!prop.parent && !prop.is_parent) {
      return <>{this._renderNavLink(prop)}</>;
    } else if (prop.is_parent) {
      const listItemClasses = cx({
        [" " + classes[color]]: activeRoute(prop.path, prop),
      });
      const whiteFontClasses = cx({
        [" " + classes.whiteFont]: activeRoute(prop.path, prop),
      });

      const isSelected = this._activeSelectedRoutes(prop);

      return (
        <>
          <ListItemButton
            selected={isSelected}
            sx={{
              "&.Mui-selected": {
                backgroundColor: theme.palette.isActiveTab,
              },
            }}
            className={classes.itemLink + listItemClasses}
            onClick={this._handleClick}
          >
            <ListItemIcon className={classes.itemIcon + whiteFontClasses}>
              <prop.icon className={classes.sidebarIcon} />
            </ListItemIcon>
            {isOpened && (
              <>
                <ListItemText
                  primary={prop.sidebarName}
                  className={classes.itemText + whiteFontClasses}
                  disableTypography={true}
                />
                {this.state.open ? <ExpandLess /> : <ExpandMore />}
              </>
            )}
          </ListItemButton>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {this._renderNestedLinks(prop.slug, true)}
            </List>
          </Collapse>
        </>
      );
    }
    return null;
  }
}

const CustomLink = ({ routes, classes, color, activeRoute, isOpened }) => {
  const theme = useTheme();
  const renderLinks = useMemo(() => {
    const links = [];
    routes.forEach((prop, key) => {
      links.push(
        <CustomListItem
          routes={routes}
          key={key}
          prop={prop}
          classes={classes}
          activeRoute={activeRoute}
          color={color}
          isOpened={isOpened}
          theme={theme}
        />
      );
    });
    return links;
  }, [routes, classes, activeRoute, isOpened]);

  return <List className={classes.list}>{renderLinks}</List>;
};

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Sidebar = ({ ...props }) => {
  const { classes, color, logo, image, logoText, routes } = props;
  // verifies if routeName is the one active (in browser input)

  const subRoutes = useMemo(() => {
    return routes?.length > 0
      ? routes.filter(
          (item) =>
            item?.parentRoute &&
            props.location.pathname?.includes(item?.path?.replace(/:id/g, ""))
        )
      : [];
  }, [routes, props.location.pathname]);

  function activeRoute(routeName, otherData) {
    if (subRoutes?.length > 0) {
      return subRoutes[0]?.parentRoute === routeName;
    }
    if (!otherData.should_regex) {
      return routeName == props.location.pathname;
    }
    return routeName == props.location.pathname ||
      props.location.pathname.indexOf(routeName) > -1
      ? true
      : false;
    // return props.location.pathname.indexOf(routeName) > -1 ? true : false;
  }
  // const {classes, color, logo, image, logoText, routes} = props;
  var brand = (
    <div className={classes.logo}>
      <div
        className={
          props?.open ? classes.logoImageSideBar : classes.logocollSidebar
        }
      >
        {props?.open ? (
          <img src={logoImageData} alt="logo" className={classes.img} />
        ) : (
          <img src={sideBarLogo} alt="logo" className={classes.collimg} />
        )}
      </div>
    </div>
  );
  return (
    <div>
      {/* for Mobile */}
      <Hidden mdUp>
        <Drawer
          variant="permanent"
          // anchor="right"
          open={props.open}
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: props.open,
            [classes.drawerClose]: !props.open,
          })}
          classes={{
            // paper: classes.drawerPaper
            paper: clsx({
              [classes.drawerOpen]: props.open,
              [classes.drawerClose]: !props.open,
            }),
          }}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>
            {/*<HeaderLinks />*/}
            <CustomLink
              routes={routes}
              isOpened={props.open}
              classes={classes}
              color={color}
              activeRoute={activeRoute}
            />
          </div>
        </Drawer>
      </Hidden>
      {/* for Desktop */}
      <Hidden smDown>
        <Drawer
          // anchor="left"
          variant="permanent"
          open={props.open}
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: props.open,
            [classes.drawerClose]: !props.open,
          })}
          classes={{
            // paper: classes.drawerPaper
            paper: clsx({
              [classes.drawerOpen]: props.open,
              [classes.drawerClose]: !props.open,
            }),
          }}
        >
          {brand}
          <div
            className={classes.sidebarWrapper}
            onMouseEnter={() => props?.handleOpenSideBar()}
            onMouseLeave={() => props?.handleCloseSideBar()}
          >
            <CustomLink
              routes={routes}
              isOpened={props.open}
              classes={classes}
              color={color}
              activeRoute={activeRoute}
            />
          </div>
        </Drawer>
      </Hidden>
    </div>
  );
};

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(sidebarStyle)(Sidebar);
