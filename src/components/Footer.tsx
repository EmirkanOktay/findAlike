import { Box, Typography, Link, Stack } from '@mui/material';
import logo from '../images/logoNav.png';
import { menuItems } from './Navbar';
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();
    const menuItemsNavigate = (name: string) => {
        navigate(`/${name.toLocaleLowerCase().replace(/\s+/g, '-')}`);

    }
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#0d0d0d',
                color: '#e0ffe5',
                py: 6,
                px: 2,
                fontFamily: "'Poppins', sans-serif",
            }}
        >
            <Box
                sx={{
                    maxWidth: '1200px',
                    mx: 'auto',
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'space-between',
                    alignItems: { xs: 'center', md: 'flex-start' }, gap: 4,
                    textAlign: { xs: 'center', md: 'left' },
                }}
            >
                <Box sx={{ flex: 1 }}>
                    <Box
                        component="img"
                        src={logo}
                        alt="Logo"
                        sx={{
                            width: 100,
                            height: 'auto',
                            mb: 2,
                            mx: { xs: 'auto', md: '0' },
                        }}
                    />
                    <Typography
                        variant="body2"
                        sx={{ color: '#999', fontSize: '0.85rem' }}
                    >
                        Find your perfect match with FindAlike, the ultimate platform for discovering similar interests and connecting with like-minded individuals.
                    </Typography>
                </Box>

                <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ mb: 2, color: '#1DB954', fontWeight: 600 }}>
                        Navigation
                    </Typography>
                    <Stack spacing={1}>
                        {menuItems.map((item, i) => (
                            <Link
                                onClick={() => { menuItemsNavigate(item.name) }}

                                key={i}
                                underline="none"
                                sx={{
                                    color: '#1DB954',
                                    fontSize: '0.95rem',
                                    transition: '0.3s',
                                    '&:hover': { color: 'white' },
                                    cursor: 'pointer',
                                }}

                            >
                                {item.name}
                            </Link>
                        ))}
                    </Stack>
                </Box>

                <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ mb: 2, color: '#1DB954', fontWeight: 600 }}>
                        Contact
                    </Typography>
                    <Link
                        underline="none"
                        sx={{
                            color: '#1DB954',
                            fontSize: '0.95rem',
                            transition: '0.3s',
                            '&:hover': { color: 'white' },
                        }}
                    >
                        contact@example.com
                    </Link>
                </Box>

                <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ mb: 2, color: '#1DB954', fontWeight: 600 }}>
                        More
                    </Typography>
                    <Stack spacing={1}>
                        {['Terms of Service', 'Privacy Policy', 'DMCA'].map((text, i) => (
                            <Link
                                onClick={() => { menuItemsNavigate(text) }}

                                key={i}
                                underline="none"
                                sx={{
                                    color: '#1DB954',
                                    fontSize: '0.95rem',
                                    transition: '0.3s',
                                    cursor: 'pointer',
                                    '&:hover': { color: 'white' },

                                }}
                            >
                                {text}
                            </Link>
                        ))}
                    </Stack>
                </Box>
            </Box>

            <Box sx={{ textAlign: 'center', mt: 6 }}>
                <Typography variant="body2" sx={{ fontSize: '0.85rem', color: '#1DB954' }}>
                    © {new Date().getFullYear()} FindAlike All rights reserved.
                </Typography>
            </Box>
        </Box>
    );
}

export default Footer;
