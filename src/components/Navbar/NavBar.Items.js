import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactsIcon from '@mui/icons-material/Contacts';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';

export const navBarItems = [
    {
        label: 'Home',
        path: '/',
        icon: <HomeIcon/>
    },
     {
        label: 'Products',
        path: '/products',
        icon: <AppShortcutIcon/>
    },
     {
        label: 'Solutions',
        path: '/solutions',
        icon: <EmojiObjectsIcon/>
    },

    {
        label: 'Contact',
        path: '/contact',
        icon: <ContactsIcon/>
    },
    {
        label: 'About',
        path: '/about',
        icon: <InfoIcon/>
    },
];