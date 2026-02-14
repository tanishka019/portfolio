import { useEffect, useRef, useState } from "react";
import "./AnimatedBackground.css";

function AnimatedBackground() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const canvasRef = useRef(null);
    const particlesRef = useRef([]);
    const animationFrameRef = useRef(null);

    // Track mouse position
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Initialize and animate particles
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Create particles
        const createParticles = () => {
            const particles = [];
            const particleCount = 80;

            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 3 + 1,
                    speedX: (Math.random() - 0.5) * 0.5,
                    speedY: (Math.random() - 0.5) * 0.5,
                    opacity: Math.random() * 0.5 + 0.2,
                });
            }
            return particles;
        };

        particlesRef.current = createParticles();

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw connections and particles
            particlesRef.current.forEach((particle, i) => {
                // Update position
                particle.x += particle.speedX;
                particle.y += particle.speedY;

                // Bounce off edges
                if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

                // Mouse interaction - particles move away from cursor
                const dx = mousePosition.x - particle.x;
                const dy = mousePosition.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 150) {
                    const force = (150 - distance) / 150;
                    particle.x -= (dx / distance) * force * 2;
                    particle.y -= (dy / distance) * force * 2;
                }

                // Draw connections to nearby particles
                particlesRef.current.slice(i + 1).forEach((otherParticle) => {
                    const dx = particle.x - otherParticle.x;
                    const dy = particle.y - otherParticle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 120) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(255, 79, 163, ${0.15 * (1 - distance / 120)})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(otherParticle.x, otherParticle.y);
                        ctx.stroke();
                    }
                });

                // Draw particle
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 139, 209, ${particle.opacity})`;
                ctx.fill();
            });

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animate();

        // Handle resize
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            particlesRef.current = createParticles();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [mousePosition]);

    return (
        <div className="animated-background">
            {/* Gradient Orbs */}
            <div className="gradient-orb orb-1"></div>
            <div className="gradient-orb orb-2"></div>
            <div className="gradient-orb orb-3"></div>

            {/* Animated Grid */}
            <div className="grid-background"></div>

            {/* Interactive Canvas */}
            <canvas ref={canvasRef} className="particle-canvas"></canvas>

            {/* Mouse Follower Glow */}
            <div
                className="cursor-glow"
                style={{
                    left: `${mousePosition.x}px`,
                    top: `${mousePosition.y}px`,
                }}
            ></div>

            {/* Floating Shapes */}
            <div className="floating-shapes">
                <div className="shape shape-1">💗</div>
                <div className="shape shape-2">✨</div>
                <div className="shape shape-3">🧠</div>
                <div className="shape shape-4">🎨</div>
                <div className="shape shape-5">⚡</div>
                <div className="shape shape-6">🚀</div>
            </div>

            {/* Gradient Mesh */}
            <div className="gradient-mesh"></div>
        </div>
    );
}

export default AnimatedBackground;
