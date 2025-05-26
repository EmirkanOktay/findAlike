import { Button } from '@mui/material';
import { useEffect, useState, useRef } from 'react';

type Point = { x: number; y: number };

export default function Section() {
    const [isVisible, setIsVisible] = useState(false);
    const [time, setTime] = useState(0);
    const requestRef = useRef<number | null>(null);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const animate = (t: number) => {
        setTime(t / 1000);
        requestRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => {
            if (requestRef.current !== null) {
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, []);

    const wavePoints = 60;
    const amplitudeBase = 30;
    const wavelength = 20;

    const points: Point[] = Array.from({ length: wavePoints }, (_, i) => {
        const x = (i / (wavePoints - 1)) * 600;
        const variation = Math.sin((i / wavelength) * Math.PI * 2 + time * 5) * amplitudeBase;
        const randomMod = Math.sin(time * 3 + i) * 5;
        const y = 80 - (variation + randomMod);
        return { x, y };
    });

    const buildPath = (pts: Point[]) => {
        let pathD = `M ${pts[0].x} ${pts[0].y}`;
        for (let i = 1; i < pts.length - 2; i++) {
            const xc = (pts[i].x + pts[i + 1].x) / 2;
            const yc = (pts[i].y + pts[i + 1].y) / 2;
            pathD += ` Q ${pts[i].x} ${pts[i].y} ${xc} ${yc}`;
        }
        pathD += ` T ${pts[pts.length - 1].x} ${pts[pts.length - 1].y}`;
        return pathD;
    };

    const pathD = buildPath(points);

    return (
        <div
            style={{
                backgroundColor: '#1DB954',
                color: 'white',
                minHeight: '71vh',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '5vw',
                fontFamily: "'Poppins', sans-serif",
                overflow: 'hidden',
            }}
        >
            <div>
                <div
                    style={{
                        fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                        fontWeight: 600,
                        maxWidth: '600px',
                        lineHeight: 1.3,
                        textAlign: 'left',
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateX(0)' : 'translateX(-40px)',
                        transition: 'all 0.8s ease-in-out',
                    }}
                >
                    Discover Music That Matches Your Taste
                </div>

                <div
                    style={{
                        marginTop: '2rem',
                        display: 'flex',
                        justifyContent: 'flex-start',
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                        transition: 'all 0.8s ease-in-out 0.3s',
                    }}
                >
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#ffffff',
                            color: '#1DB954',
                            fontWeight: 'bold',
                            paddingX: 4,
                            paddingY: 1.5,
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
                        Find New Tastes!
                    </Button>
                </div>
            </div>

            <svg
                width="600"
                height="160"
                viewBox="0 0 600 160"
                style={{ overflow: 'visible' }}
                aria-label="Audio visualizer wave"
            >
                <defs>
                    <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="white" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#1DB954" stopOpacity="0.4" />
                    </linearGradient>
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#1DB954" floodOpacity="0.7" />
                    </filter>
                </defs>

                <path
                    d={pathD}
                    stroke="url(#waveGradient)"
                    strokeWidth="8"
                    fill="none"
                    filter="url(#glow)"
                    strokeLinecap="round"
                />
            </svg>
        </div>
    );
}
