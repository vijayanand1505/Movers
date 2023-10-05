import React, { useState } from "react";
import "./Sidebar.css";
import { Collapse } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MinimizeIcon from "@mui/icons-material/Minimize";
import sidebarlogo from "../../assets/images/sidebar-image.png";
import sidebarImg from "../../assets/images/side-bar.png";
import AppRoutes from "../Routes/AppRoutes";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PhotoSizeSelectActualOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActualOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import InventorySharpIcon from "@mui/icons-material/InventorySharp";

const drawerWidth = 240;

const useStyles = styled((theme) => ({
  listItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  submenu: {
    paddingLeft: theme.spacing(2),
  },
}));

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const navigate = useNavigate();
  const classes = useStyles();

  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { label: "Profile", link: "/profile" },
    { label: "Logout", link: "/logout" },
  ];

  const [subMenuOpen, setSubMenuOpen] = useState({});
  const handleSubMenuToggle = (label) => {
    setSubMenuOpen((prevState) => {
      const updatedState = { ...prevState };
      // Close all other submenus except the one being toggled
      Object.keys(updatedState).forEach((key) => {
        if (key !== label) {
          updatedState[key] = false;
        }
      });
      // Toggle the submenu state for the given label
      updatedState[label] = !prevState[label];
      return updatedState;
    });
  };

  const sidebarItems = [
    {
      label: "Home",
      icon: <HomeOutlinedIcon style={{ color: "black" }} />,
      link: "/home",
    },
    {
      label: "Orders",
      icon: <InventorySharpIcon style={{ color: "black" }} />,
      link: "/orders",
    },
    {
      label: "Dashboard",
      icon: <HomeOutlinedIcon style={{ color: "black" }} />,
      link: "/",
    },
    {
      label: "Banner",
      icon: <PhotoSizeSelectActualOutlinedIcon style={{ color: "black" }} />,
      subItems: [
        { label: "Add Banner", link: "/addbanner" },
        { label: "List Banner", link: "/listbanner" },
      ],
    },
    {
      label: "Province",
      icon: <LocationOnOutlinedIcon style={{ color: "black" }} />,
      subItems: [
        { label: "Add Province", link: "/addprovinces" },
        { label: "List Province", link: "/listprovinces" },
      ],
    },
    {
      label: "Vechile",
      icon: <LocalShippingOutlinedIcon style={{ color: "black" }} />,
      subItems: [
        { label: "Add Vehicle", link: "/addvehicle" },
        { label: "List Vehicle", link: "/listvehicle" },
      ],
    },
    {
      label: "CountryCode",
      icon: <LanguageOutlinedIcon style={{ color: "black" }} />,
      subItems: [
        { label: "Add CountryCode", link: "/addcountrycode" },
        { label: "List CountryCode", link: "/listcountrycode" },
      ],
    },
    {
      label: "Page",
      icon: <DescriptionOutlinedIcon style={{ color: "black" }} />,
      subItems: [
        { label: "Add Page", link: "/addpage" },
        { label: "List Page", link: "/listpage" },
      ],
    },
    {
      label: "FAQ",
      icon: <ChatOutlinedIcon style={{ color: "black" }} />,
      subItems: [
        { label: "Add FAQ", link: "/addFAQ" },
        { label: "List FAQ", link: "/listFAQ" },
      ],
    },
    {
      label: "Load Order",
      icon: <ViewInArOutlinedIcon style={{ color: "black" }} />,
      subItems: [
        { label: "Pending Order", link: "/pendingorder" },
        { label: "Accepted Order", link: "/acceptedorder" },
        { label: "Pickup Order", link: "/pickuporder" },
        { label: "Completed Order", link: "/completedorder" },
        { label: "Cancelled Order", link: "/cancelledorder" },
      ],
    },
    {
      label: "Payment Method",
      icon: <PaymentOutlinedIcon style={{ color: "black" }} />,
      link: "/paymentmethod",
    },
    {
      label: "Transporter List",
      icon: <PermIdentityOutlinedIcon style={{ color: "black" }} />,
      link: "/transporterlist",
    },
    {
      label: "Lorry Owner List",
      icon: <GroupOutlinedIcon style={{ color: "black" }} />,
      link: "/lorryownerlist",
    },
    {
      label: "Lorry List",
      icon: <PieChartOutlinedIcon style={{ color: "black" }} />,
      link: "/lorrylist",
    },
    {
      label: "Settings",
      icon: <TuneOutlinedIcon style={{ color: "black" }} />,
      link: "/settings",
    },
  ];

  const generateSidebarItems = () => {
    return sidebarItems.map((item, index) => (
      <div key={index}>
        <ListItem
          disablePadding
          onClick={() => navigate(item.link)}
          className={classes.listItem}
        >
          <ListItemButton onClick={() => handleSubMenuToggle(item.label)}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>
              <span className="text-bold">{item.label}</span>
            </ListItemText>
          </ListItemButton>
          {item.subItems && (
            <ListItemIcon
              style={{ cursor: "pointer" }}
              onClick={() => handleSubMenuToggle(item.label)}
            >
              {subMenuOpen[item.label] ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}
            </ListItemIcon>
          )}
        </ListItem>
        {item.subItems && (
          <Collapse in={subMenuOpen[item.label]}>
            <List className={classes.submenu}>
              {item.subItems.map((subItem, subIndex) => (
                <ListItemButton
                  key={subIndex}
                  component={Link}
                  to={subItem.link}
                >
                  <ListItemIcon>
                    <MinimizeIcon />
                  </ListItemIcon>
                  <ListItemText primary={subItem.label} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        )}
      </div>
    ));
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <MuiAppBar position="fixed" sx={{ backgroundColor: "white" }}>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="position-relative">
            <IconButton
              color="primary"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div"></Typography>
          </div>
          <div className="position-relative">
            <IconButton color="black" edge="end" onClick={handleMenuClick}>
              <AccountCircleIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {menuItems.map((item, index) => (
                <MenuItem
                  key={index}
                  onClick={() => {
                    handleClose();
                    navigate(item.link);
                  }}
                >
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </Toolbar>
      </MuiAppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <img
            src={sidebarlogo}
            alt="Sidebar Logo"
            style={{
              width: "45%",
              height: "auto",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <div style={{ overflowY: "auto", height: "50vh" }}>
          <List>{generateSidebarItems()}</List>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={sidebarImg}
            alt="Sidebar Boy-Girl"
            style={{
              width: "45%",
              height: "auto",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "40px",
            }}
          />
          <h5 className="fw-bold" style={{ color: "rgb(75, 75, 225)" }}>
            Need Help?
          </h5>
          <button className="btn btn-warning">Contact Now</button>
        </div>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <AppRoutes />
      </Main>
    </Box>
  );
}
