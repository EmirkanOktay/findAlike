import { useEffect, useState } from 'react';
import { Button, Box, useMediaQuery, useTheme } from '@mui/material';

export default function Section2() {
    const [visible, setVisible] = useState(false);
    const theme = useTheme();
    const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Box
            component="section"
            sx={{
                backgroundColor: '#000',
                color: '#fff',
                minHeight: '70vh',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '5vw',
                fontFamily: "'Poppins', sans-serif",
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
                    <svg
                        viewBox="0 0 400 400"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                            width: '100%',
                            maxWidth: '320px',
                            animation: 'blobFloat 8s ease-in-out infinite',
                        }}
                    >
                        <defs>
                            <linearGradient id="blobGradient" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0%" stopColor="#1DB954" />
                                <stop offset="100%" stopColor="#12e870" />
                            </linearGradient>
                            <filter id="blobShadow">
                                <feDropShadow dx="0" dy="0" stdDeviation="10" floodColor="#1DB954" floodOpacity="0.5" />
                            </filter>
                        </defs>
                        <path
                            d="M309.5,278Q301,316,264.5,340Q228,364,188.5,353Q149,342,119.5,316.5Q90,291,76.5,255Q63,219,52,181Q41,143,67.5,108Q94,73,133,63Q172,53,206.5,68.5Q241,84,272.5,106.5Q304,129,311,164.5Q318,200,309.5,278Z"
                            fill="url(#blobGradient)"
                            filter="url(#blobShadow)"
                        />
                    </svg>
                </Box>
            )}

            <Box
                sx={{
                    flex: 1.2,
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateX(0)' : 'translateX(50px)',
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
                    Discover Artists You Will Love
                </Box>

                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#1DB954',
                        color: '#fff',
                        fontWeight: 'bold',
                        px: 4,
                        py: 1.5,
                        borderRadius: '999px',
                        fontSize: '1rem',
                        textTransform: 'none',
                        boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
                        transition: 'all 0.3s ease-in-out',
                        '&:hover': {
                            backgroundColor: '#17a74a',
                            boxShadow: '0 10px 24px rgba(0,0,0,0.4)',
                            transform: 'scale(1.05)',
                        },
                    }}
                >
                    Discover New People
                </Button>
            </Box>

            <style>
                {`
                    @keyframes blobFloat {
                        0%, 100% { transform: scale(1) translateY(0); }
                        50% { transform: scale(1.05) translateY(-10px); }
                    }
                `}
            </style>
        </Box>
    );
}
