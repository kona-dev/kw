"use client";
import { useEffect, useState, useRef } from 'react';

interface RainProps {
  count?: number;         // Number of raindrops
  speed?: number;         // Speed multiplier
  fadeInDuration?: number; // Duration of fade-in effect in ms
  color?: string;         // Color of raindrops
}

const Rain: React.FC<RainProps> = ({
  count = 100,
  speed = 1,
  fadeInDuration = 2000,
  color = 'rgba(255, 255, 255, 0.6)'
}) => {
  const [opacity, setOpacity] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const raindropsRef = useRef<HTMLDivElement[]>([]);

  // Fade in the rain effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(1);
    }, 50);
    
    return () => clearTimeout(timer);
  }, []);

  // Initialize raindrops with random positions and speeds
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Clear existing raindrops
    raindropsRef.current = [];
    
    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    // Add a <style> element for the custom keyframes
    const styleEl = document.createElement('style');
    document.head.appendChild(styleEl);
    
    // Create raindrops with varying properties for more realism
    for (let i = 0; i < count; i++) {
      const drop = document.createElement('div');
      
      // Create different types of raindrops for variety and depth perception
      const dropType = Math.floor(Math.random() * 5); // More varied types (0-4)
      
      // Set position and styles with variety - much smaller overall
      const size = dropType === 0 
        ? Math.random() * 0.8 + 0.3     // Very small drops (foreground)
        : dropType === 1 
          ? Math.random() * 0.6 + 0.5   // Small drops
          : dropType === 2
            ? Math.random() * 0.8 + 0.7  // Medium drops
            : dropType === 3
              ? Math.random() * 1.0 + 0.5 // Medium-large drops
              : Math.random() * 1.2 + 0.8; // Largest drops (background)
      
      // Distribute raindrops across a wider area to account for slanted movement
      const posX = Math.random() * containerWidth * 1.4 - containerWidth * 0.2; // Wider distribution
      const posY = Math.random() * containerHeight;
      
      // Speed varies inversely with drop type - smaller drops move faster for depth perception
      const speedY = (Math.random() * 0.5 + 1.0 + ((4 - dropType) * 0.3)) * speed;
      const delay = Math.random() * 2;
      
      // Vary opacity by drop type for depth perception
      const dropOpacity = Math.min(0.7, 0.3 + ((4 - dropType) * 0.08));
      
      // Add a subtle glow effect based on drop size and type
      const glowIntensity = Math.max(0, 0.5 - (dropType * 0.1)); // Less glow for background drops
      const glow = `0 0 ${size * glowIntensity}px ${color}`;
      
      // Consistent slant for all particles
      const slantAngle = -20; // Reduced from -25 to -20 degrees
      
      drop.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size * (20 + (4 - dropType) * 5)}px;
        background-color: ${color};
        box-shadow: ${glow};
        border-radius: 40%;
        top: ${posY}px;
        left: ${posX}px;
        animation: rainSlanted ${6 / speedY}s linear ${delay}s infinite;
        /* CSS variables to control animation */
        --slant-angle: ${slantAngle}deg;
        --drop-opacity: ${dropOpacity};
        /* Initial opacity set to 0 to avoid flicker before animation starts */
        opacity: 0;
        transform: rotate(var(--slant-angle));
        will-change: transform, opacity;
      `;
      
      container.appendChild(drop);
      raindropsRef.current.push(drop);
    }
    
    return () => {
      raindropsRef.current.forEach(drop => {
        if (drop.parentNode) {
          drop.parentNode.removeChild(drop);
        }
      });
      if (styleEl.parentNode) {
        styleEl.parentNode.removeChild(styleEl);
      }
    };
  }, [count, speed, color]);
  
  return (
    <div 
      ref={containerRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        overflow: 'hidden',
        opacity,
        transition: `opacity ${fadeInDuration}ms ease-in`
      }}
      aria-hidden="true"
    />
  );
};

export default Rain; 