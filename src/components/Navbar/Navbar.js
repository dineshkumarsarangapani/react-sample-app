import {
    Box,
    Button,
    Divider, Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    SwipeableDrawer
} from "@mui/material";
import React from "react";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {navBarItems} from "./NavBar.Items";
import {navbarStyles} from "./styles";
import {useNavigate} from "react-router";


const Navbar = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const navigate = useNavigate();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const list = () => (
        <Box
            role="presentation"
            onClick={handleDrawerToggle}
            // onKeyDown={}
        >
            <List>
                <ListItem  key="home" disablePadding>
                    <ListItemButton onClick={() => navigate('/')}>
                        <ListItemIcon sx={navbarStyles.icons}>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText sx={navbarStyles.text} primary="Home" />
                    </ListItemButton>
                </ListItem>
                {navBarItems.map((item, index) => (
                    <ListItem  key={item.label} disablePadding>
                        <ListItemButton onClick={() => navigate(item.path)}>
                            <ListItemIcon sx={navbarStyles.icons}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText sx={navbarStyles.text} primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );


    return (
       <>
           <Drawer
               sx={navbarStyles.drawer}
               variant="persistent"
               anchor={'left'}
               open={true}
               // onClose={()=>console.log("onClose")}
               // onOpen={true}
           >
                {list('left')}
           </Drawer>
       </>
   )
}

export default Navbar;