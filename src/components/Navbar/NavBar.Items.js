import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactsIcon from '@mui/icons-material/Contacts';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import App from "../../App";
import Products from "../../pages/Products/products";
import Solutions from "../../pages/Solutions/Solutions";
import About from "../../pages/About";
import Contacts from "../../pages/Contacts";



export const navBarItems = [

     {
        label: 'Products',
        path: '/products',
        icon: <AppShortcutIcon/>,
        component: <Products/>
    },
     {
        label: 'Solutions',
        path: '/solutions',
        icon: <EmojiObjectsIcon/>,
        component: <Solutions/>
    },

    {
        label: 'Contact',
        path: '/contact',
        icon: <ContactsIcon/>,
        component: <Contacts/>
    },
    {
        label: 'About',
        path: '/about',
        icon: <InfoIcon/>,
        component: <About/>
    },
];