import { useEffect, useState } from 'react';
import { Button, Box, useMediaQuery, useTheme } from '@mui/material';

export default function Section4() {
    const [visible, setVisible] = useState(false);
    const theme = useTheme();
    const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Box
            sx={{
                minHeight: '70vh',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '5vw',
                fontFamily: "'Poppins', sans-serif",
                background: 'linear-gradient(to right, #000 85%, #1DB954 100%)',
                color: '#fff',
                overflow: 'hidden',
                gap: { xs: 6, md: 0 },
                textAlign: { xs: 'center', md: 'left' },
            }}
        >
            {!isMobileOrTablet && (
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateX(0)' : 'translateX(-50px)',
                        transition: 'all 0.8s ease',
                    }}
                >
                    <Box className="floatingIcon">
                        <svg
                            width="180"
                            height="180"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#1DB954"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M9 18V5l12-2v13" />
                            <circle cx="6" cy="18" r="3" />
                        </svg>
                    </Box>
                </Box>
            )}

            <Box
                sx={{
                    flex: 1.2,
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateX(0)' : 'translateX(40px)',
                    transition: 'all 0.8s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: { xs: 'center', md: 'flex-start' },
                    justifyContent: 'center',
                }}
            >
                <Box
                    component="h2"
                    sx={{
                        fontSize: { xs: '2rem', sm: '3vw', md: 'clamp(2rem, 4vw, 3.5rem)' },
                        fontWeight: 600,
                        mb: 4,
                    }}
                >
                    Download Songs You Love
                </Box>

                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#ffffff',
                        color: '#1DB954',
                        fontWeight: 'bold',
                        px: 4,
                        py: 1.5,
                        borderRadius: '999px',
                        fontSize: '1rem',
                        textTransform: 'none',
                        boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                        transition: 'all 0.3s ease-in-out',
                        '&:hover': {
                            backgroundColor: '#e6e6e6',
                            boxShadow: '0 10px 24px rgba(0,0,0,0.3)',
                            transform: 'scale(1.05)',
                        },
                    }}
                >
                    Download Now
                </Button>
            </Box>

            <style>
                {`
                    @keyframes float {
                        0% { transform: translateY(0px); }
                        50% { transform: translateY(-15px); }
                        100% { transform: translateY(0px); }
                    }

                    .floatingIcon {
                        animation: float 3s ease-in-out infinite;
                    }
                `}
            </style>
        </Box>
    );
}
