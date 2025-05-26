import { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import logo from '../images/logoNav.png';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [screenHeight, setScreenHeight] = useState(120);
    const [scrolled, setScrolled] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
        const getUserScreenHeight = window.screen.height;
        if (getUserScreenHeight > 400) {
            setScreenHeight(100);
        } else {
            setScreenHeight(120);
        }

        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const menuItems = [
        { name: 'Find Similar Songs', href: '#' },
        { name: 'Find Similar Artist', href: '#' },
        { name: 'Find Similar Genre', href: '#' },
        { name: 'Download Music', href: '#' }
    ];

    const toggleDrawer = (open: boolean) => () => setDrawerOpen(open);

    return (
        <>
            <AppBar
                position="fixed"
                elevation={3}
                sx={{
                    background: '#121212',
                    px: { xs: 2, md: 4 },
                    fontFamily: "'Poppins', sans-serif",
                    transition: 'all 0.3s ease'
                }}
            >
                <Toolbar sx={{ justifyContent: 'space-between', minHeight: scrolled ? screenHeight * 0.7 : screenHeight, transition: 'min-height 0.3s ease' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', height: scrolled ? screenHeight * 0.7 : screenHeight, overflow: 'hidden', transition: 'height 0.3s ease' }}>
                        <img
                            src={logo}
                            alt="Logo"
                            style={{
                                height: scrolled ? '14vh' : '20vh',
                                objectFit: 'contain',
                                cursor: 'pointer',
                                transition: 'height 0.3s ease'
                            }}
                        />
                    </Box>

                    {!isMobile && (
                        <Box sx={{ display: 'flex', gap: 3 }}>
                            {menuItems.map((item, i) => (
                                <Button
                                    key={i}
                                    href={item.href}
                                    sx={{
                                        position: 'relative',
                                        color: '#1DB954',
                                        fontWeight: 500,
                                        fontSize: '0.9rem',
                                        textTransform: 'none',
                                        fontFamily: "'Poppins', sans-serif",
                                        transition: '1s',
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            left: 0,
                                            bottom: -4,
                                            height: '2px',
                                            width: '100%',
                                            backgroundColor: '#1DB954',
                                            transform: 'scaleX(0)',
                                            transformOrigin: 'left',
                                            transition: 'transform 0.3s ease, background-color 0.3s ease'
                                        },
                                        '&:hover': {
                                            color: '#ffffff',
                                            '&::after': {
                                                transform: 'scaleX(1)',
                                                backgroundColor: '#ffffff'
                                            }
                                        }
                                    }}
                                >
                                    {item.name}
                                </Button>
                            ))}
                        </Box>
                    )}
                    {isMobile && (
                        <IconButton onClick={toggleDrawer(true)} sx={{ color: '#1DB954' }}>
                            <MenuIcon />
                        </IconButton>
                    )}
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="top"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                PaperProps={{
                    sx: {
                        backgroundColor: '#121212',
                        height: '400px',
                        width: '100%',
                        boxShadow: 'none',
                        borderBottom: '1px solid #1DB954',
                    },
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        fontFamily: "'Poppins', sans-serif",
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 3,
                        paddingY: 3,
                    }}
                    onClick={toggleDrawer(false)}
                >
                    <Box>
                        <img
                            src={logo}
                            alt="Logo"
                            style={{
                                width: 90,
                                height: 90,
                                objectFit: 'contain'
                            }}
                        />
                    </Box>

                    <List sx={{ width: '100%', maxWidth: 300 }}>
                        {menuItems.map((item, i) => (
                            <ListItem key={i} disablePadding>
                                <ListItemButton component="a" href={item.href}>
                                    <ListItemText
                                        primary={item.name}
                                        primaryTypographyProps={{
                                            sx: {
                                                color: '#1DB954',
                                                fontWeight: 500,
                                                fontSize: '1.05rem',
                                                textAlign: 'center',
                                                '&:hover': { color: '#ffffff' },
                                                fontFamily: "'Poppins', sans-serif"
                                            }
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    );
}

export default Navbar;
