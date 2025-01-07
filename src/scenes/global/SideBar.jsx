import React, { useState } from "react";
import { Box, Drawer, List, ListItem, ListItemText, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <ListItem
      button
      component={Link}
      to={to}
      selected={selected === title}
      onClick={() => setSelected(title)}
      sx={{
        color: selected === title ? colors.primary[500] : colors.grey[100],
        '&:hover': { color: "#868dfb" },
      }}
    >
      {icon}
      <ListItemText primary={title} sx={{ marginLeft: 2 }} />
    </ListItem>
  );
};

const SidebarComponent = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const [open, setOpen] = useState(false); // Drawer state for opening and closing

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Button to toggle Drawer */}
      <IconButton color="inherit" onClick={() => setOpen(!open)}>
        <MenuOutlinedIcon />
      </IconButton>

      {/* Sidebar (Drawer) */}
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        variant="temporary"
        sx={{
          "& .MuiDrawer-paper": {
            background: `${colors.primary[400]} !important`,
            width: 240,
            boxSizing: 'border-box',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            paddingTop: 2,
            paddingLeft: 2,
          }}
        >
          {/* LOGO AND MENU ICON */}
          <Box mb={3}>
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h5" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </Box>

          {/* Profile Section (If Not Collapsed) */}
          {!isCollapsed && (
            <Box mb="25px" display="flex" flexDirection="column" alignItems="center">
              <img
                alt="profile-user"
                width="100px"
                height="100px"
                src={`../../assets/user.png`}
                style={{ cursor: "pointer", borderRadius: "50%" }}
              />
              <Typography variant="h6" color={colors.grey[100]} mt={2}>
                Ed Roh
              </Typography>
              <Typography variant="body2" color={colors.greenAccent[500]}>
                VP Fancy Admin
              </Typography>
            </Box>
          )}

          {/* Sidebar Menu */}
          <List sx={{ padding: 0 }}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography variant="h6" color={colors.grey[300]} sx={{ mt: 3, mb: 1, ml: 2 }}>
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography variant="h6" color={colors.grey[300]} sx={{ mt: 3, mb: 1, ml: 2 }}>
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography variant="h6" color={colors.grey[300]} sx={{ mt: 3, mb: 1, ml: 2 }}>
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default SidebarComponent;
