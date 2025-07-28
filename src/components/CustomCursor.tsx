import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    const onMouseEnter = () => setHovered(true);
    const onMouseLeave = () => setHovered(false);

    document.addEventListener('mousemove', onMouseMove);
    // Listen for hover on interactive elements
    const interactiveEls = document.querySelectorAll('a, button, [role="button"], input, textarea, select, .cursor-pointer');
    interactiveEls.forEach(el => {
      el.addEventListener('mouseenter', onMouseEnter);
      el.addEventListener('mouseleave', onMouseLeave);
    });
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      interactiveEls.forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        style={{
          position: 'fixed',
          left: position.x,
          top: position.y,
          width: hovered ? 48 : 24,
          height: hovered ? 48 : 24,
          background: hovered ? 'rgba(115,86,241,0.18)' : 'rgba(115,86,241,0.10)',
          border: '2px solid #7356f1',
          borderRadius: '50%',
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.2s, height 0.2s, background 0.2s, border 0.2s',
          zIndex: 9999,
          mixBlendMode: 'exclusion',
          boxShadow: hovered ? '0 0 24px 8px #7356f1' : '0 0 8px 2px #7356f1',
        }}
      />
      <style>{`body { cursor: none !important; }`}</style>
    </>
  );
};

export default CustomCursor; 