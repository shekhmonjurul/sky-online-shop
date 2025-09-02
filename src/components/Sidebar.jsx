import React, { useState } from 'react';
import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Collapse,
    Box,
    Divider,
    Typography,
    Toolbar,
    Avatar,
} from '@mui/material';

import GridViewIcon from '@mui/icons-material/GridView';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import DvrIcon from '@mui/icons-material/Dvr';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import PaymentRoundedIcon from '@mui/icons-material/PaymentRounded';
import LogoutIcon from '@mui/icons-material/Logout';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const collapsedWidth = 60;
const expandedWidth = 240;

const Sidebar = ({setWidth}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState(null); // single submenu open

    const handleSubMenuHover = (key) => {
        setOpenSubMenu(key);
    };

   
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: isHovered ? expandedWidth : collapsedWidth,
                flexShrink: 0,
                whiteSpace: "nowrap",
                transition: "width 0.3s",
                '& .MuiDrawer-paper': {
                    width: isHovered ? expandedWidth : collapsedWidth,
                    transition: "width 0.3s",
                    overflow: "hidden",
                    boxSizing: 'border-box',
                    backgroundColor: '#0b4af8ff',
                    borderRight: '1px solid #e7e8f1ff',
                    color: "#fff",
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    cursor: "pointer"
                },
            }}
            onMouseEnter={() => {
                setIsHovered(true)
                setWidth(240)
            } }
            onMouseLeave={() => {
                setIsHovered(false);
                setOpenSubMenu(null); // close all submenus
                setWidth(60)
            }}
        >
            {/* Logo Section */}
            <Box></Box>
           
            {/* Menu Section */}
            <Box sx={{ mt: 0, position: "absolute",  }}>
                 <Toolbar/>

                <List>

                    {/* Dashboard */}
                    <ListItem button>
                        <ListItemIcon sx={{ color: "#fff", minWidth: 0, mr: isHovered ? 2 : "auto", justifyContent: "center" }}>
                            <GridViewIcon />
                        </ListItemIcon>
                        {isHovered && <ListItemText primary="Dashboard" />}
                    </ListItem>

                    {/* Student */}
                    <ListItem
                        button
                        onMouseEnter={() => handleSubMenuHover('student')}
                    >
                        <ListItemIcon sx={{ color: "#fff", minWidth: 0, mr: isHovered ? 2 : "auto", justifyContent: "center" }}>
                            <PeopleAltIcon />
                        </ListItemIcon>
                        {isHovered && (
                            <>
                                <ListItemText primary="Student" />
                                {openSubMenu === 'student' ? <ExpandLess /> : <ExpandMore />}
                            </>
                        )}
                    </ListItem>
                    <Collapse in={openSubMenu === 'student' && isHovered} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding sx={{ pl: 4 }}>
                            <ListItem button>
                                <ListItemIcon sx={{ color: "#fff", minWidth: 0, mr: 2 }}>
                                    <PersonIcon />
                                </ListItemIcon>
                                <ListItemText primary="All Students" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon sx={{ color: "#fff", minWidth: 0, mr: 2 }}>
                                    <PersonAddAltRoundedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Add Student" />
                            </ListItem>
                        </List>
                    </Collapse>

                    {/* Teacher */}
                    <ListItem
                        button
                        onMouseEnter={() => handleSubMenuHover('teacher')}
                    >
                        <ListItemIcon sx={{ color: "#fff", minWidth: 0, mr: isHovered ? 2 : "auto", justifyContent: "center" }}>
                            <AccountBoxIcon />
                        </ListItemIcon>
                        {isHovered && (
                            <>
                                <ListItemText primary="Teachers" />
                                {openSubMenu === 'teacher' ? <ExpandLess /> : <ExpandMore />}
                            </>
                        )}
                    </ListItem>
                    <Collapse in={openSubMenu === 'teacher' && isHovered} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding sx={{ pl: 4 }}>
                            <ListItem button>
                                <ListItemIcon sx={{ color: "#fff", minWidth: 0, mr: 2 }}>
                                    <PersonIcon />
                                </ListItemIcon>
                                <ListItemText primary="All Teachers" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon sx={{ color: "#fff", minWidth: 0, mr: 2 }}>
                                    <PersonSearchIcon />
                                </ListItemIcon>
                                <ListItemText primary="Hire Teacher" />
                            </ListItem>
                        </List>
                    </Collapse>

                    {/* Attendance */}
                    <ListItem
                        button
                        onMouseEnter={() => handleSubMenuHover('attendance')}
                    >
                        <ListItemIcon sx={{ color: "#fff", minWidth: 0, mr: isHovered ? 2 : "auto", justifyContent: "center" }}>
                            <PersonAddAltRoundedIcon />
                        </ListItemIcon>
                        {isHovered && (
                            <>
                                <ListItemText primary="Attendance" />
                                {openSubMenu === 'attendance' ? <ExpandLess /> : <ExpandMore />}
                            </>
                        )}
                    </ListItem>
                    <Collapse in={openSubMenu === 'attendance' && isHovered} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding sx={{ pl: 4 }}>
                            <ListItem button>
                                <ListItemIcon sx={{ color: "#fff", minWidth: 0, mr: 2 }}>
                                    <CheckBoxIcon />
                                </ListItemIcon>
                                <ListItemText primary="Daily Report" />
                            </ListItem>
                        </List>
                    </Collapse>

                    {/* Payment */}
                    <ListItem button>
                        <ListItemIcon sx={{ color: "#fff", minWidth: 0, mr: isHovered ? 2 : "auto", justifyContent: "center" }}>
                            <PaymentRoundedIcon />
                        </ListItemIcon>
                        {isHovered && <ListItemText primary="Payment" />}
                    </ListItem>
                </List>
            </Box>

            {/* Footer */}
            <Box sx={{ pb: 2 }}>
                <Divider sx={{ backgroundColor: 'rgba(255,255,255,0.2)', mb: 1 }} />
                <List>
                    {/* Logout */}
                    <ListItem button sx={{ px: 2 }}>
                        <ListItemIcon
                            sx={{
                                color: '#fff',
                                minWidth: 0,
                                mr: isHovered ? 2 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <LogoutIcon />
                        </ListItemIcon>
                        {isHovered && <ListItemText primary="Logout" />}
                    </ListItem>

                    {/* Settings below Logout */}
                    <ListItem button sx={{ px: 2 }}>
                        <ListItemIcon
                            sx={{
                                color: '#fff',
                                minWidth: 0,
                                mr: isHovered ? 2 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <SettingsIcon />
                        </ListItemIcon>
                        {isHovered && <ListItemText primary="Settings" />}
                    </ListItem>
                </List>
            </Box>

        </Drawer>
    );
};

export default Sidebar;




// // components/Sidebar.jsx
// import React, { useState } from 'react';
// import {
//     Drawer,
//     List,
//     ListItem,
//     ListItemIcon,
//     ListItemText,
//     Toolbar,
//     Box,
//     Typography,
//     Avatar,
//     Grid,
//     Divider
// } from '@mui/material';
// import GridViewIcon from '@mui/icons-material/GridView';
// import SettingsIcon from '@mui/icons-material/Settings';
// import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
// import DvrIcon from '@mui/icons-material/Dvr';
// import AccountBoxIcon from '@mui/icons-material/AccountBox';
// import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
// import PaymentRoundedIcon from '@mui/icons-material/PaymentRounded';
// import LogoutIcon from '@mui/icons-material/Logout';
// import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';

// const collapsedWidth = 60;
// const expandedWidth = 200;
// const drawerWidth = 200;

// const menuItems = [
//     { text: 'Dashboard', icon: <GridViewIcon /> },
//     { text: 'Student', icon: <PeopleAltIcon /> },
//     { text: 'Courses', icon: <DvrIcon /> },
//     { text: 'Teachers', icon: <AccountBoxIcon /> },
//     { text: 'Attandance', icon: <PersonAddAltRoundedIcon /> },
//     { text: 'Payment', icon: <PaymentRoundedIcon /> },
//     { text: 'Settings', icon: <SettingsIcon /> },
// ];

// const Sidebar = () => {

//     const [isHovered, setIsHovered] = useState(false)

//     return (
//         <Drawer
//             variant="permanent"
//             sx={{
//                 width: isHovered ? expandedWidth : collapsedWidth,
//                 flexShrink: 0,
//                 whiteSpace: "nowrap",
//                 transition: "width 0.3s",
//                 '& .MuiDrawer-paper': {
//                     width: isHovered ? expandedWidth : collapsedWidth,
//                     transition: "width 0.3s",
//                     overflow: "hidden",
//                     boxSizing: 'border-box',
//                     backgroundColor: '#0b4af8ff',
//                     borderRight: '1px solid #e7e8f1ff',
//                     color: "#fff",
//                     display: 'flex',
//                     flexDirection: 'column',
//                     justifyContent: 'space-between',

//                 },
//             }}
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//         >
//             {/* 🔷 Logo area */}
//             <Box>
//                 <List>
//                     <ListItem button sx={{ px: 2 }}>
//                         <ListItemIcon
//                             sx={{
//                                 color: '#fff',
//                                 minWidth: 0,
//                                 mr: isHovered ? 2 : 'auto',
//                                 justifyContent: 'center',
//                             }}
//                         >

//                             <SchoolOutlinedIcon sx={{ fontSize: 30 }} />
//                         </ListItemIcon>
//                         {isHovered && <ListItemText primary="My School" />}
//                     </ListItem>
//                 </List>
//             </Box>

//             {/* Menu Iteam */}
//             <Box sx={{ mt: 0, position: "absolute", top: 80 }}>
//                 <List>
//                     {menuItems.map((item, index) => (
//                         <ListItem button key={item.text}>
//                             <ListItemIcon sx={{ color: "#fff", minWidth: 0, mr: isHovered ? 2 : "auto", justifyContent: "center", }}>{item.icon}</ListItemIcon>
//                             {isHovered && <ListItemText primary={item.text} />}
//                         </ListItem>
//                     ))}
//                 </List>
//             </Box>


//             {/* --------- Footer Section --------- */}
//             <Box sx={{ pb: 2 }}>
//                 <Divider sx={{ backgroundColor: 'rgba(255,255,255,0.2)', mb: 1 }} />
//                 <List>
//                     <ListItem button sx={{ px: 2 }}>
//                         <ListItemIcon
//                             sx={{
//                                 color: '#fff',
//                                 minWidth: 0,
//                                 mr: isHovered ? 2 : 'auto',
//                                 justifyContent: 'center',
//                             }}
//                         >
//                             <LogoutIcon />

//                         </ListItemIcon>
//                         {isHovered && <ListItemText primary="Logout" />}
//                     </ListItem>
//                 </List>
//             </Box>


//         </Drawer>
//     );
// };

// export default Sidebar;




// // src/components/Sidebar.jsx
// import React, { useState } from 'react';
// import {
//     Drawer,
//     List,
//     ListItem,
//     ListItemIcon,
//     ListItemText,
//     Collapse,
//     Box,
//     Divider,
// } from '@mui/material';

// import GridViewIcon from '@mui/icons-material/GridView';
// import SettingsIcon from '@mui/icons-material/Settings';
// import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
// import DvrIcon from '@mui/icons-material/Dvr';
// import AccountBoxIcon from '@mui/icons-material/AccountBox';
// import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
// import PaymentRoundedIcon from '@mui/icons-material/PaymentRounded';
// import LogoutIcon from '@mui/icons-material/Logout';
// import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';
// import PersonIcon from '@mui/icons-material/Person';
// import PersonSearchIcon from '@mui/icons-material/PersonSearch';
// import CheckBoxIcon from '@mui/icons-material/CheckBox';

// const collapsedWidth = 60;
// const expandedWidth = 200;

// const Sidebar = () => {
//     const [isHovered, setIsHovered] = useState(false);
//     const [openSubMenus, setOpenSubMenus] = useState({
//         student: false,
//         teacher: false,
//         attendance: false,
//     });

//     const toggleSubmenu = (key) => {
//         setOpenSubMenus((prev) => ({
//             ...prev,
//             [key]: !prev[key],
//         }));
//     };

//     return (
//         <Drawer
//             variant="permanent"
//             sx={{
//                 width: isHovered ? expandedWidth : collapsedWidth,
//                 flexShrink: 0,
//                 whiteSpace: "nowrap",
//                 transition: "width 0.3s",
//                 '& .MuiDrawer-paper': {
//                     width: isHovered ? expandedWidth : collapsedWidth,
//                     transition: "width 0.3s",
//                     overflow: "hidden",
//                     boxSizing: 'border-box',
//                     backgroundColor: '#0b4af8ff',
//                     borderRight: '1px solid #e7e8f1ff',
//                     color: "#fff",
//                     display: 'flex',
//                     flexDirection: 'column',
//                     justifyContent: 'space-between',
//                 },
//             }}
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => {
//                 setIsHovered(false);
//                 setOpenSubMenus({ student: false, teacher: false, attendance: false }); // auto collapse
//             }}
//         >
//             {/* Logo */}
//             <Box>
//                 <List>
//                     <ListItem button sx={{ px: 2 }}>
//                         <ListItemIcon
//                             sx={{
//                                 color: '#fff',
//                                 minWidth: 0,
//                                 mr: isHovered ? 2 : 'auto',
//                                 justifyContent: 'center',
//                             }}
//                         >
//                             <SchoolOutlinedIcon sx={{ fontSize: 30 }} />
//                         </ListItemIcon>
//                         {isHovered && <ListItemText primary="My School" />}
//                     </ListItem>
//                 </List>
//             </Box>

//             {/* Menu Items */}
//             <Box sx={{ mt: 0, position: "absolute", top: 80 }}>
//                 <List>

//                     {/* Dashboard */}
//                     <ListItem button>
//                         <ListItemIcon sx={{ color: "#fff", minWidth: 0, mr: isHovered ? 2 : "auto", justifyContent: "center" }}>
//                             <GridViewIcon />
//                         </ListItemIcon>
//                         {isHovered && <ListItemText primary="Dashboard" />}
//                     </ListItem>

//                     {/* Student with Submenu */}
//                     <ListItem button onClick={() => toggleSubmenu('student')}>
//                         <ListItemIcon sx={{ color: "#fff", minWidth: 0, mr: isHovered ? 2 : "auto", justifyContent: "center" }}>
//                             <PeopleAltIcon />
//                         </ListItemIcon>
//                         {isHovered && (
//                             <>
//                                 <ListItemText primary="Student" />
//                                 {openSubMenus.student ? <ExpandLess /> : <ExpandMore />}
//                             </>
//                         )}
//                     </ListItem>
//                     <Collapse in={openSubMenus.student && isHovered} timeout="auto" unmountOnExit>
//                         <List component="div" disablePadding sx={{ pl: 4 }}>
//                             <ListItem button>
//                                 <ListItemIcon sx={{ color: "#fff", minWidth: 0, mr: 2 }}>
//                                     <PersonIcon />
//                                 </ListItemIcon>
//                                 <ListItemText primary="All Students" />
//                             </ListItem>
//                             <ListItem button>
//                                 <ListItemIcon sx={{ color: "#fff", minWidth: 0, mr: 2 }}>
//                                     <PersonAddAltRoundedIcon />
//                                 </ListItemIcon>
//                                 <ListItemText primary="Add Student" />
//                             </ListItem>
//                         </List>
//                     </Collapse>

//                     {/* Teacher with Submenu */}
//                     <ListItem button onClick={() => toggleSubmenu('teacher')}>
//                         <ListItemIcon sx={{ color: "#fff", minWidth: 0, mr: isHovered ? 2 : "auto", justifyContent: "center" }}>
//                             <AccountBoxIcon />
//                         </ListItemIcon>
//                         {isHovered && (
//                             <>
//                                 <ListItemText primary="Teachers" />
//                                 {openSubMenus.teacher ? <ExpandLess /> : <ExpandMore />}
//                             </>
//                         )}
//                     </ListItem>
//                     <Collapse in={openSubMenus.teacher && isHovered} timeout="auto" unmountOnExit>
//                         <List component="div" disablePadding sx={{ pl: 4 }}>
//                             <ListItem button>
//                                 <ListItemIcon sx={{ color: "#fff", minWidth: 0, mr: 2 }}>
//                                     <PersonIcon />
//                                 </ListItemIcon>
//                                 <ListItemText primary="All Teachers" />
//                             </ListItem>
//                             <ListItem button>
//                                 <ListItemIcon sx={{ color: "#fff", minWidth: 0, mr: 2 }}>
//                                     <PersonSearchIcon />
//                                 </ListItemIcon>
//                                 <ListItemText primary="Hire Teacher" />
//                             </ListItem>
//                         </List>
//                     </Collapse>

//                     {/* Attendance with Submenu */}
//                     <ListItem button onClick={() => toggleSubmenu('attendance')}>
//                         <ListItemIcon sx={{ color: "#fff", minWidth: 0, mr: isHovered ? 2 : "auto", justifyContent: "center" }}>
//                             <PersonAddAltRoundedIcon />
//                         </ListItemIcon>
//                         {isHovered && (
//                             <>
//                                 <ListItemText primary="Attendance" />
//                                 {openSubMenus.attendance ? <ExpandLess /> : <ExpandMore />}
//                             </>
//                         )}
//                     </ListItem>
//                     <Collapse in={openSubMenus.attendance && isHovered} timeout="auto" unmountOnExit>
//                         <List component="div" disablePadding sx={{ pl: 4 }}>
//                             <ListItem button>
//                                 <ListItemIcon sx={{ color: "#fff", minWidth: 0, mr: 2 }}>
//                                     <CheckBoxIcon />
//                                 </ListItemIcon>
//                                 <ListItemText primary="Daily Report" />
//                             </ListItem>
//                         </List>
//                     </Collapse>

//                     {/* Payment */}
//                     <ListItem button>
//                         <ListItemIcon sx={{ color: "#fff", minWidth: 0, mr: isHovered ? 2 : "auto", justifyContent: "center" }}>
//                             <PaymentRoundedIcon />
//                         </ListItemIcon>
//                         {isHovered && <ListItemText primary="Payment" />}
//                     </ListItem>

//                     {/* Settings */}
//                     <ListItem button>
//                         <ListItemIcon sx={{ color: "#fff", minWidth: 0, mr: isHovered ? 2 : "auto", justifyContent: "center" }}>
//                             <SettingsIcon />
//                         </ListItemIcon>
//                         {isHovered && <ListItemText primary="Settings" />}
//                     </ListItem>
//                 </List>
//             </Box>

//             {/* Footer */}
//             <Box sx={{ pb: 2 }}>
//                 <Divider sx={{ backgroundColor: 'rgba(255,255,255,0.2)', mb: 1 }} />
//                 <List>
//                     <ListItem button sx={{ px: 2 }}>
//                         <ListItemIcon
//                             sx={{
//                                 color: '#fff',
//                                 minWidth: 0,
//                                 mr: isHovered ? 2 : 'auto',
//                                 justifyContent: 'center',
//                             }}
//                         >
//                             <LogoutIcon />
//                         </ListItemIcon>
//                         {isHovered && <ListItemText primary="Logout" />}
//                     </ListItem>
//                 </List>
//             </Box>
//         </Drawer>
//     );
// };

// export default Sidebar;