import { useEffect, useState } from 'react';
import { Button, Box, useMediaQuery, useTheme } from '@mui/material';

export default function Section3() {
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
                background: 'linear-gradient(to right, #1DB954 0%, #000 100%)',
                color: '#fff',
                overflow: 'hidden',
                gap: { xs: 6, md: 0 },
                textAlign: { xs: 'center', md: 'left' },
            }}
        >
            <Box
                sx={{
                    flex: 1.2,
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateX(0)' : 'translateX(-40px)',
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
                    Discover Genres You Will Love
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
                    Discover Genres
                </Button>
            </Box>

            {!isMobileOrTablet && (
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateX(0)' : 'translateX(50px)',
                        transition: 'all 0.8s ease',
                    }}
                >
                    <svg
                        width="280"
                        height="200"
                        viewBox="0 0 280 200"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <linearGradient id="waveLine" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0%" stopColor="#1DB954" />
                                <stop offset="100%" stopColor="#0f0" />
                            </linearGradient>

                            <filter id="glow">
                                <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#1DB954" floodOpacity="0.7" />
                            </filter>
                        </defs>

                        <polyline
                            points="0,100 20,90 40,70 60,110 80,60 100,120 120,50 140,140 160,50 180,120 200,60 220,110 240,70 260,90 280,100"
                            fill="none"
                            stroke="url(#waveLine)"
                            strokeWidth="8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            filter="url(#glow)"
                            className="wavePath"
                        />
                    </svg>
                </Box>
            )}

            <style>
                {`
                    @keyframes waveMove {
                        0% { transform: translateX(0); }
                        50% { transform: translateX(15px); }
                        100% { transform: translateX(0); }
                    }
                    .wavePath {
                        animation: waveMove 3.5s ease-in-out infinite;
                    }
                `}
            </style>
        </Box>
    );
}
