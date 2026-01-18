import React, { useEffect, useRef } from 'react';

const NetworkBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // --- Configuration ---
    const STAR_COUNT = 2500; // Dense starfield
    const SHOOTING_STAR_FREQ = 0.01; // Chance per frame
    
    // --- State ---
    interface Star {
      x: number;
      y: number;
      z: number;
      size: number;
      color: string;
      brightness: number;
      twinkleSpeed: number;
      twinklePhase: number;
    }
    
    interface ShootingStar {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
    }

    const stars: Star[] = [];
    let shootingStars: ShootingStar[] = [];
    
    // Initialize Stars
    const initStars = () => {
        stars.length = 0;
        for (let i = 0; i < STAR_COUNT; i++) {
            const isAccent = Math.random() > 0.90;
            // Spread x/y much wider than screen to allow for perspective movement
            const spread = 4000;
            stars.push({
                x: (Math.random() - 0.5) * spread,
                y: (Math.random() - 0.5) * spread,
                z: Math.random() * 2000, // Depth
                size: Math.random() * 1.5 + 0.5,
                color: isAccent ? '#4ADE80' : '#E4E4E7', // Accent or Zinc-200
                brightness: Math.random(),
                twinkleSpeed: Math.random() * 0.05,
                twinklePhase: Math.random() * Math.PI * 2
            });
        }
    };
    initStars();

    let time = 0;

    const animate = () => {
      time++;
      
      // 1. Clear & Background Fill
      ctx.fillStyle = '#020202'; // Almost black
      ctx.fillRect(0, 0, width, height);

      // 2. Draw Nebula Clouds (Ambient background blobs)
      // We use large radial gradients that move slowly
      const cx = width / 2;
      const cy = height / 2;

      // Nebula 1: Deep Green/Teal (Left-ish)
      const grad1 = ctx.createRadialGradient(
          cx - width * 0.3 + Math.sin(time * 0.002) * 50, 
          cy - height * 0.2 + Math.cos(time * 0.003) * 50, 
          0, 
          cx - width * 0.3, 
          cy - height * 0.2, 
          width * 0.8
      );
      grad1.addColorStop(0, 'rgba(74, 222, 128, 0.03)');
      grad1.addColorStop(0.5, 'rgba(20, 80, 60, 0.02)');
      grad1.addColorStop(1, 'transparent');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      // Nebula 2: Deep Blue/Purple (Right-ish) - for depth contrast
      const grad2 = ctx.createRadialGradient(
          cx + width * 0.3 + Math.cos(time * 0.002) * 50, 
          cy + height * 0.2 + Math.sin(time * 0.003) * 50, 
          0, 
          cx + width * 0.3, 
          cy + height * 0.2, 
          width * 0.8
      );
      grad2.addColorStop(0, 'rgba(50, 60, 100, 0.04)');
      grad2.addColorStop(0.6, 'rgba(10, 10, 30, 0.02)');
      grad2.addColorStop(1, 'transparent');
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // 3. Draw Stars
      const focalLength = 800;
      const speed = 0.5; // Fly speed

      stars.forEach(star => {
          // Move star closer
          star.z -= speed;
          if (star.z <= 0) {
              star.z = 2000;
              star.x = (Math.random() - 0.5) * 4000;
              star.y = (Math.random() - 0.5) * 4000;
          }

          // Projection
          const scale = focalLength / (focalLength + star.z);
          const x2d = cx + star.x * scale;
          const y2d = cy + star.y * scale;

          if (x2d >= 0 && x2d <= width && y2d >= 0 && y2d <= height) {
              const size = star.size * scale;
              // Twinkle calculation
              const twinkle = Math.sin(time * star.twinkleSpeed + star.twinklePhase) * 0.3 + 0.7;
              
              // Distance fading
              const alpha = Math.min(1, (1 - star.z / 2000) * twinkle);

              ctx.beginPath();
              ctx.fillStyle = star.color;
              ctx.globalAlpha = alpha;
              ctx.arc(x2d, y2d, size, 0, Math.PI * 2);
              ctx.fill();
              
              // Glow for accent stars
              if (star.color === '#4ADE80' && size > 1.5) {
                  ctx.shadowBlur = 15;
                  ctx.shadowColor = '#4ADE80';
                  ctx.fill();
                  ctx.shadowBlur = 0;
              }
              ctx.globalAlpha = 1.0;
          }
      });

      // 4. Shooting Stars
      // Spawn
      if (Math.random() < SHOOTING_STAR_FREQ) {
          shootingStars.push({
              x: Math.random() * width,
              y: Math.random() * height * 0.5, // Start mostly in top half
              vx: (Math.random() - 0.5) * 10 + 5, // Fast sideways
              vy: Math.random() * 5 + 2, // Downwards
              life: 0,
              maxLife: 30 + Math.random() * 20
          });
      }

      // Update & Draw Shooting Stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
          const s = shootingStars[i];
          s.x += s.vx;
          s.y += s.vy;
          s.life++;

          if (s.life >= s.maxLife) {
              shootingStars.splice(i, 1);
              continue;
          }

          // Draw trail
          const tailLength = 50 * (1 - s.life / s.maxLife);
          const gradient = ctx.createLinearGradient(s.x, s.y, s.x - s.vx * (tailLength/10), s.y - s.vy * (tailLength/10));
          gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

          ctx.beginPath();
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 2;
          ctx.moveTo(s.x, s.y);
          ctx.lineTo(s.x - s.vx * (tailLength/10), s.y - s.vy * (tailLength/10));
          ctx.stroke();
      }

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    const handleResize = () => {
       if (canvasRef.current) {
         width = canvasRef.current.width = window.innerWidth;
         height = canvasRef.current.height = window.innerHeight;
         initStars();
       }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ background: '#020202' }} 
    />
  );
};

export default NetworkBackground;