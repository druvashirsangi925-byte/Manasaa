import React, { useEffect, useRef } from "react";

const ParticlesBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const isMobile = width < 768;

    // Track resize
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Interactive Stardust Particle Class
    class DustParticle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2.2 + 0.8;
        this.speedX = (Math.random() - 0.5) * 1.5;
        this.speedY = (Math.random() - 0.5) * 1.5 - 0.4;
        this.opacity = 1.0;
        this.fade = Math.random() * 0.015 + 0.012;
        this.color = Math.random() > 0.45 ? "234, 179, 8" : "220, 38, 38";
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity -= this.fade;
      }

      draw() {
        if (this.opacity <= 0) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
        ctx.fill();
      }
    }

    // Shooting Stars
    class ShootingStar {
      constructor() {
        this.reset();
        this.opacity = 0; 
      }

      reset() {
        this.x = Math.random() * (width * 0.8);
        this.y = Math.random() * (height * 0.3);
        this.len = Math.random() * 60 + 40; 
        this.speedX = Math.random() * 6 + 5;
        this.speedY = Math.random() * 3 + 2.5;
        this.opacity = Math.random() * 0.8 + 0.2;
        this.fade = Math.random() * 0.018 + 0.008;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity -= this.fade;

        if (this.opacity <= 0) {
          if (Math.random() < 0.025) {
            this.reset();
          }
        }
      }

      draw() {
        if (this.opacity <= 0) return;
        ctx.save();
        
        const grad = ctx.createLinearGradient(
          this.x, 
          this.y, 
          this.x - this.speedX * 7, 
          this.y - this.speedY * 7
        );
        grad.addColorStop(0, `rgba(255, 236, 179, ${this.opacity})`);
        grad.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x - this.speedX * 5.5, this.y - this.speedY * 5.5);
        ctx.stroke();
        ctx.restore();
      }
    }

    // Regular Stars
    class Star {
      constructor() {
        this.reset();
        this.y = Math.random() * height; 
      }

      reset() {
        this.x = Math.random() * width;
        this.y = 0;
        this.size = Math.random() * 1.5 + 0.4;
        this.speed = Math.random() * 0.05 + 0.01;
        this.opacity = Math.random() * 0.8 + 0.2;
        this.fadeDirection = Math.random() > 0.5 ? 1 : -1;
        this.fadeSpeed = Math.random() * 0.006 + 0.002;
      }

      update() {
        this.y += this.speed;
        if (this.y > height) {
          this.reset();
        }

        // Twinkle
        this.opacity += this.fadeSpeed * this.fadeDirection;
        if (this.opacity >= 1) {
          this.opacity = 1;
          this.fadeDirection = -1;
        } else if (this.opacity <= 0.2) {
          this.opacity = 0.2;
          this.fadeDirection = 1;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
      }
    }

    // Floating hearts
    class FloatingHeart {
      constructor() {
        this.reset();
        this.y = height + Math.random() * 200;
      }

      reset() {
        this.x = Math.random() * width;
        this.y = height + 50;
        this.size = Math.random() * 6 + 3; 
        this.speedY = Math.random() * 0.4 + 0.15;
        this.opacity = Math.random() * 0.25 + 0.05;
        this.angle = Math.random() * Math.PI * 2;
        this.wobbleSpeed = Math.random() * 0.01 + 0.005;
      }

      update() {
        this.y -= this.speedY;
        this.angle += this.wobbleSpeed;
        this.x += Math.sin(this.angle) * 0.15;

        if (this.y < -30) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = "#DC2626";

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-this.size / 2, -this.size / 2, -this.size, 0, 0, this.size * 0.85);
        ctx.bezierCurveTo(this.size, 0, this.size / 2, -this.size / 2, 0, 0);
        ctx.closePath();
        ctx.fill();

        ctx.restore();
      }
    }

    // Adapt limits
    const starsCount = isMobile ? 30 : Math.min(Math.floor((width * height) / 18000), 55); 
    const heartsCount = isMobile ? 3 : 8;
    const shootingStarsCount = isMobile ? 1 : 2;

    const shootingStars = Array.from({ length: shootingStarsCount }, () => new ShootingStar());
    const stars = Array.from({ length: starsCount }, () => new Star());
    const hearts = Array.from({ length: heartsCount }, () => new FloatingHeart());
    
    // Interactive mouse trail stardust array
    let dustParticles = [];
    let mouse = { x: null, y: null };

    // Mouse movement event tracking
    const handleMouseMove = (e) => {
      const clientX = e.clientX || (e.touches && e.touches[0].clientX);
      const clientY = e.clientY || (e.touches && e.touches[0].clientY);
      
      if (clientX && clientY) {
        mouse.x = clientX;
        mouse.y = clientY;
        
        // Add 1-2 particles on mouse move
        if (Math.random() < 0.8) {
          dustParticles.push(new DustParticle(clientX, clientY));
        }
      }
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("touchend", handleMouseLeave);

    // Render loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw Star Connections (Constellations)
      if (!isMobile) {
        ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
        ctx.lineWidth = 0.4;
        for (let i = 0; i < stars.length; i++) {
          for (let j = i + 1; j < stars.length; j++) {
            const dx = stars[i].x - stars[j].x;
            const dy = stars[i].y - stars[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 65) {
              ctx.beginPath();
              ctx.moveTo(stars[i].x, stars[i].y);
              ctx.lineTo(stars[j].x, stars[j].y);
              ctx.stroke();
            }
          }
        }
      }

      // Draw dynamic mouse connection lines
      if (mouse.x !== null && mouse.y !== null) {
        const limitDist = isMobile ? 80 : 130;
        const maxOpacity = isMobile ? 0.08 : 0.15;
        
        stars.forEach((star) => {
          const dx = star.x - mouse.x;
          const dy = star.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < limitDist) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(234, 179, 8, ${(1 - dist / limitDist) * maxOpacity})`;
            ctx.lineWidth = isMobile ? 0.5 : 0.8;
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        });
      }

      stars.forEach((star) => {
        star.update();
        star.draw();
      });

      shootingStars.forEach((star) => {
        star.update();
        star.draw();
      });

      hearts.forEach((heart) => {
        heart.update();
        heart.draw();
      });

      // Update and draw mouse dust trail
      dustParticles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Limit array size to prevent leaks
      dustParticles = dustParticles.filter((p) => p.opacity > 0);
      if (dustParticles.length > 120) {
        dustParticles.shift();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("touchend", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full -z-20 pointer-events-none" />;
};

export default ParticlesBackground;
