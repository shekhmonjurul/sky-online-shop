import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Box,
  IconButton,
  Avatar,
  alpha,
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';

const drawerWidth = 240; // Sidebar width এক জায়গায় সেট

const Topbar = ({width}) => {
  return (
    <AppBar
      position="fixed"
      elevation={1}
      sx={{
        width: { sm: `calc(100% - ${width}px)` },
        ml: { sm: `${width}px` },
        backgroundColor: '#fff',
        color: '#000',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Left: Branding */}
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Dashboard
        </Typography>

        {/* Right: Search + Icons */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* Search box */}
          <Box
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              backgroundColor: alpha(theme.palette.grey[200], 0.6),
              borderRadius: 2,
              px: 2,
              py: 0.5,
            })}
          >
            <SearchIcon sx={{ mr: 1, color: 'gray' }} />
            <InputBase placeholder="Search…" />
          </Box>

          {/* Notification */}
          <IconButton>
            <NotificationsIcon />
          </IconButton>

          {/* Profile Avatar */}
          <IconButton>
            <Avatar alt="Profile" src="/avatar.jpg" />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;












// // components/Topbar.jsx
// import React from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   InputBase,
//   Box,
//   IconButton,
//   Avatar,
//   alpha,
// } from '@mui/material';

// import SearchIcon from '@mui/icons-material/Search';
// import NotificationsIcon from '@mui/icons-material/Notifications';


// const Topbar = () => {
//   return (
//     <AppBar
//       position="fixed"
//       elevation={1}
//       sx={{
//         width: `calc(100% - 240px)`,
//         ml: '240px',
//         backgroundColor: '#fff',
//         color: '#000',
//       }}
//     >
//       <Toolbar sx={{ justifyContent: 'space-between' }}>
//         {/* Left: Branding */}
//         <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
//           Dashboard
//         </Typography>

//         {/* Right: Search + Icons */}
//         <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//           {/* Search box */}
//           <Box
//             sx={(theme) => ({
//               display: 'flex',
//               alignItems: 'center',
//               backgroundColor: alpha(theme.palette.grey[200], 0.6),
//               borderRadius: 2,
//               px: 2,
//               py: 0.5,
//             })}
//           >
//             <SearchIcon sx={{ mr: 1, color: 'gray' }} />
//             <InputBase placeholder="Search…" />
//           </Box>

//           {/* Notification */}
//           <IconButton>
//             <NotificationsIcon />
//           </IconButton>

//           {/* Profile Avatar */}
//           <IconButton>
//             <Avatar alt="Profile" src="/avatar.jpg" />
//           </IconButton>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Topbar;