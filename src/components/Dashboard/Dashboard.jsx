import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import { useEffect } from "react";
import LogoutIcon from '@mui/icons-material/Logout';
import { Avatar, IconButton } from '@mui/material';
import axios from 'axios';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';

// Import icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import CodeIcon from '@mui/icons-material/Code';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home'; // Import Home icon
import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School';
import ForumIcon from '@mui/icons-material/Forum';
import WorkIcon from '@mui/icons-material/Work';

import { GroupIcon } from 'lucide-react';
import { useSelector } from 'react-redux';

const NAV_ITEMS = [
<<<<<<< HEAD
  { label: 'Discussion Forum', icon: <CodeIcon />, subItems: [
      { label: 'Thread', route: "/dashboard/threads" },
    ],
  },
=======
  { label: 'Home', icon: <HomeIcon />, route: "/dashboard/home" }, // Home item
  { label: 'Discussion', icon: <ForumIcon />, route: "/dashboard/threads" },
>>>>>>> 4c58aec0ac7cbd1787276f5efda8293e31be9e29
  {
    label: 'Schedules',
    icon: <ListAltIcon />,
    route: "/dashboard/schedules",
  },
  {
    label: 'Clubs',
    icon: <GroupsIcon />,
    route: "/dashboard/clubs",
  },
  {
    label: 'Jobs',
    icon: <WorkIcon />,
    route: "/dashboard/jobs",
  },
  {
    label: 'Alumni',
    icon: <SchoolIcon />,
    route: "/dashboard/alumni",
  }
];

function Dashboard() {
  const user = useSelector((state) => state.auth.user);
  const [openSubNav, setOpenSubNav] = React.useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [userData, setUserData] = React.useState({ name: "", email: "", role: "", profilePicture: "" });
  const [isHovered, setIsHovered] = React.useState(false); // Track hover state
  const isMobile = useMediaQuery('(max-width:600px)');
  const navigate = useNavigate();
  const location = useLocation();

  // Fetch user data from backend
  React.useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/user'); // Replace with your API endpoint
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
  }, []);

  const handleItemClick = (label) => {
    setOpenSubNav(openSubNav === label ? null : label);
  };

  const handleSubItemClick = (route) => {
    navigate(route);
    setMobileOpen(false); // Close mobile drawer after navigation
  };

  const handleLogout = () => {
    // Implement logout logic
    console.log('User logged out');
    navigate('/login');
  };

  const drawerContent = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        p: 2,
        transition: "width 0.3s ease",
<<<<<<< HEAD
        width: isHovered ? 240 : 72, // Expand width on hover
=======
        width: isHovered ? 240 : 0, // Expand width on hover
>>>>>>> 4c58aec0ac7cbd1787276f5efda8293e31be9e29
      }}
      onMouseEnter={() => setIsHovered(true)} // Handle hover in
      onMouseLeave={() => setIsHovered(false)} // Handle hover out
    >
      {/* Navigation Items */}
      <List sx={{ p: 0, display: "flex", flexDirection: "column", alignItems: "center", flexGrow: 1 }}>
<<<<<<< HEAD
  {NAV_ITEMS.map((item) => (
    <div key={item.label}>
      <ListItem
        button
        onClick={() => item.subItems ? handleItemClick(item.label) : navigate(item.route)}
        sx={{
          mb: 1,
          cursor: "pointer",
          borderRadius: 2,
          backgroundColor: location.pathname === item.route ? "#87CEEB" : "transparent",
          "&:hover": { backgroundColor: "#87CEEB", opacity: 0.8 },
          transition: "background-color 0.3s ease",
          width: "100%",
          justifyContent: "center",
          px: 2, // Add padding around icons
        }}
      >
        <ListItemIcon 
          sx={{ 
            color: "white", 
            minWidth: "40px", 
            width: "40px", // Fixed width
            height: "40px", // Fixed height
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", // Center the icon vertically and horizontally
          }}
        >
          {item.icon}
        </ListItemIcon>
        <ListItemText
          primary={item.label}
          sx={{
            color: "white",
            opacity: isHovered ? 1 : 0, // Show text only on hover
            transition: "opacity 0.3s ease",
          }}
        />
        {item.subItems && isHovered && ( // Show expand icon only on hover
          openSubNav === item.label ? <ExpandLess sx={{ color: "white" }} /> : <ExpandMore sx={{ color: "white" }} />
        )}
      </ListItem>

      {/* Sub-Menu */}
      {item.subItems && (
        <Collapse in={openSubNav === item.label && isHovered} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {item.subItems.map((subItem) => (
              <ListItem
                button
                key={subItem.label}
                onClick={() => handleSubItemClick(subItem.route)}
                sx={{
                  pl: 4,
                  cursor: "pointer",
                  borderRadius: 2,
                  backgroundColor: location.pathname === subItem.route ? "#87CEEB" : "transparent",
                  "&:hover": { backgroundColor: "#87CEEB", opacity: 0.8 },
                  transition: "background-color 0.3s ease",
                }}
              >
                <ListItemText
                  primary={subItem.label}
                  sx={{
                    color: "white",
                    opacity: isHovered ? 1 : 0, // Show text only on hover
                    transition: "opacity 0.3s ease",
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Collapse>
      )}
    </div>
  ))}
</List>
=======
        {NAV_ITEMS.map((item) => (
          <div key={item.label}>
            <ListItem
              button
              onClick={() => item.subItems ? handleItemClick(item.label) : navigate(item.route)}
              sx={{
                mb: 1,
                cursor: "pointer",
                borderRadius: 2,
                backgroundColor: location.pathname === item.route ? "#87CEEB" : "transparent",
                "&:hover": { backgroundColor: "#87CEEB", opacity: 1.5 },
                transition: "background-color 0.3s ease",
                width: "100%", // Ensures it takes the full width
                display: "flex",
                alignItems: "center", // Proper alignment of icon and text
                justifyContent: isHovered ? "flex-start" : "center", // Center icons when collapsed
                px: 2
              }}
            >
              <ListItemIcon 
                sx={{ 
                  color: "white", 
                  minWidth: "40px", 
                  width: "40px", 
                  height: "40px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                sx={{
                  color: "white",
                  opacity: isHovered ? 1 : 0, // Show text only on hover
                  transition: "opacity 0.3s ease",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  width: isHovered ? "140px" : "0px", // Proper width handling
                  textAlign: "left",
                }}
              />
              {item.subItems && isHovered && ( // Show expand icon only on hover
                openSubNav === item.label ? <ExpandLess sx={{ color: "white" }} /> : <ExpandMore sx={{ color: "white" }} />
              )}
            </ListItem>

            {/* Sub-Menu */}
            {item.subItems && (
              <Collapse in={openSubNav === item.label && isHovered} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.subItems.map((subItem) => (
                    <ListItem
                      button
                      key={subItem.label}
                      onClick={() => handleSubItemClick(subItem.route)}
                      sx={{
                        pl: 4,
                        cursor: "pointer",
                        borderRadius: 2,
                        backgroundColor: location.pathname === subItem.route ? "#87CEEB" : "transparent",
                        "&:hover": { backgroundColor: "#87CEEB", opacity: 1.8 },
                        transition: "background-color 0.3s ease",
                      }}
                    >
                      <ListItemText
                        primary={subItem.label}
                        sx={{
                          color: "white",
                          opacity: isHovered ? 1 : 0, // Show text only on hover
                          transition: "opacity 0.3s ease",
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </div>
        ))}
      </List>
>>>>>>> 4c58aec0ac7cbd1787276f5efda8293e31be9e29

      {/* Profile Section at Bottom */}
      <Box
        sx={{
<<<<<<< HEAD
          textAlign: "center",
          p: 2,
          cursor: "pointer",
          mt: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onClick={() => navigate("/dashboard/profile")}
      >
        <Divider sx={{ backgroundColor: "white", mb: 2, width: "100%" }} />
        <Avatar sx={{ width: 40, height: 40, bgcolor: "white" }} src={userData.profilePicture}>
          <AccountCircleIcon sx={{ fontSize: 30, color: "#87CEEB" }} />
        </Avatar>
        <Box sx={{ textAlign: "center", mt: 1 }}>
          <Typography variant="subtitle1" sx={{ color: "white" }}>
            {user?.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "white" }}>
            {user?.role}
          </Typography>
        </Box>
=======
          width: "100%",
          position: "absolute", // Fix to bottom
          bottom: 0,
          left: 0,
          textAlign: "center",
          p: 2,
          mb: 8,
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: "rgba(255, 255, 255, 0.1)", // Slight background contrast
        }}
        onClick={() => navigate("/dashboard/profile")}
      >
        <Divider sx={{ backgroundColor: "white", mb: 2, width: "90%" }} />
        <Avatar sx={{ width: 40, height: 40, bgcolor: "white" }} src={userData.profilePicture}>
          <AccountCircleIcon sx={{ fontSize: 30, color: "#87CEEB" }} />
        </Avatar>
>>>>>>> 4c58aec0ac7cbd1787276f5efda8293e31be9e29
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar Navigation for Larger Screens */}
      {!isMobile && (
        <Box
          component="nav"
          sx={{
            width: isHovered ? 240 : 72, // Expand width on hover
            height: "100vh",
            position: "fixed",
            top: 64, // Start sidebar below the navbar (assuming navbar height is 64px)
            left: 0,
<<<<<<< HEAD
            background: "linear-gradient(135deg, #87CEEB, #00BFFF)",
=======
            background: `
              linear-gradient(135deg,#1f8adb, #45a8f5),
              url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")
            `, // Gradient + subtle pattern
>>>>>>> 4c58aec0ac7cbd1787276f5efda8293e31be9e29
            p: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            overflowY: "auto",
            transition: "width 0.3s ease", // Smooth transition for width
            zIndex: 1000, // Ensure sidebar is above content
          }}
          onMouseEnter={() => setIsHovered(true)} // Handle hover in
          onMouseLeave={() => setIsHovered(false)} // Handle hover out
        >
          {drawerContent}
        </Box>
      )}

      {/* Mobile Navbar */}
      {isMobile && (
        <Box
          sx={{
            width: "100%",
            position: "fixed",
            top: 0,
            left: 0,
            backgroundColor: "whitesmoke",
            zIndex: 1000,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton onClick={() => setMobileOpen(!mobileOpen)}>
              <MenuIcon />
            </IconButton>
          </Box>
          <IconButton onClick={handleLogout}>
            <LogoutIcon />
          </IconButton>
        </Box>
      )}

      {/* Mobile Drawer with Sliding Animation */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: 240,
            background: `
              linear-gradient(135deg, #87CEEB, #00BFFF),
              url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")
            `, // Gradient + subtle pattern
            transition: 'transform 0.3s ease-in-out', // Sliding animation
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginLeft: isMobile ? 0 : isHovered ? "240px" : "72px", // Adjust margin based on sidebar state
          overflowY: "auto",
          height: "100vh",
          background: "#F8FAFC",
          transition: "margin-left 0.3s ease", // Smooth transition for margin
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default Dashboard;