import { useState, useEffect, useRef } from "react";
import "./InteractiveBackground.css";

function InteractiveBackground() {
    const [stars, setStars] = useState([]); // Stars
    const [sparkles, setSparkles] = useState([]); // Mouse Sparkles
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 }); // Mouse Position for Parallax
    const sparkleIdRef = useRef(0);

    // Initial Generation (Stars Only)
    useEffect(() => {
        // 1. Generate Stars (150 - Increased for better effect)
        const newStars = Array.from({ length: 150 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2 + 1,
            delay: Math.random() * 5,
            moveDuration: 15 + Math.random() * 30, // 15-45s duration
        }));
        setStars(newStars);

    }, []);

    // Mouse Move - Generate Sparkles & Track Position
    useEffect(() => {
        const handleMouseMove = (e) => {
            // 1. Update Parallax Position
            // Normalize to -1 to 1 range relative to center -> Scale up to 120px movement
            const x = (e.clientX / window.innerWidth - 0.5) * 120;
            const y = (e.clientY / window.innerHeight - 0.5) * 120;
            setMousePos({ x, y });

            // 2. Add a new sparkle
            const newSparkle = {
                id: sparkleIdRef.current++,
                x: e.clientX,
                y: e.clientY,
                size: Math.random() * 8 + 4, // 4-12px
                angle: Math.random() * 360,
                speed: Math.random() * 2 + 1,
            };

            setSparkles(prev => [...prev, newSparkle]);

            // Cleanup old sparkles (keep last 20 for performance)
            if (sparkleIdRef.current % 5 === 0) { // Cleanup every 5th sparkle
                setSparkles(prev => prev.slice(-20)); // Limit active sparkles
            }

            // Auto remove after animation (simplified via slice above + CSS)
            setTimeout(() => {
                setSparkles(prev => prev.filter(s => s.id !== newSparkle.id));
            }, 800);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="interactive-background">
            <div className="bg-container">
                {/* 1. Stars with Parallax */}
                <div
                    className="stars-layer"
                    style={{
                        transform: `translate(${-mousePos.x}px, ${-mousePos.y}px)`,
                        transition: 'transform 0.1s ease-out',
                        width: '100%',
                        height: '100%',
                        position: 'absolute'
                    }}
                >
                    {stars.map(star => (
                        <div
                            key={star.id}
                            className="star"
                            style={{
                                left: `${star.x}%`,
                                top: `${star.y}%`,
                                width: `${star.size}px`,
                                height: `${star.size}px`,
                                animationDuration: `4s, ${star.moveDuration}s`, // twinkle duration, move duration
                                animationDelay: `${star.delay}s, 0s`,
                            }}
                        />
                    ))}
                </div>

                {/* 2. Lanterns (Removed) */}

                {/* 3. Magic Sparkles (Cursor) */}
                {sparkles.map(sparkle => (
                    <div
                        key={sparkle.id}
                        className="sparkle"
                        style={{
                            left: `${sparkle.x}px`,
                            top: `${sparkle.y}px`,
                            width: `${sparkle.size}px`,
                            height: `${sparkle.size}px`,
                            // Random spread
                            transform: `translate(${Math.cos(sparkle.angle) * 20}px, ${Math.sin(sparkle.angle) * 20}px)`,
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

export default InteractiveBackground;
