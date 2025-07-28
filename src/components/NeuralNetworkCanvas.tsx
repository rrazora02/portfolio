import React, { useRef, useEffect } from "react";

const NODE_COUNT_BASE = 36;
const CONNECTION_DISTANCE = 150;
const NODE_RADIUS = 4.5;
const BASE_GLOW_COLOR = "#64c8ff";
const LINE_COLOR = "rgba(100,200,255,0.18)";
const COLORS = ["#64c8ff", "#a084ee", "#fca311", "#ff4d6d", "#00f5d4"];

function getNodeCount(width: number, height: number) {
  return Math.min(
    NODE_COUNT_BASE + Math.floor((width * height) / 20000),
    90
  );
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

const NeuralNetworkCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = parentRef.current;
    if (!canvas || !parent) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = parent.offsetWidth;
    let height = parent.offsetHeight;
    let dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);

    let nodeCount = getNodeCount(width, height);
    let nodes = Array.from({ length: nodeCount }, (_, i) => {
      const angle = Math.random() * Math.PI * 2;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        baseX: Math.random() * width,
        baseY: Math.random() * height,
        seed: Math.random() * 1000,
        color: COLORS[i % COLORS.length],
      };
    });

    function resize() {
      width = parent.offsetWidth;
      height = parent.offsetHeight;
      dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      nodeCount = getNodeCount(width, height);
      while (nodes.length < nodeCount) {
        const i = nodes.length;
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.7,
          vy: (Math.random() - 0.5) * 0.7,
          baseX: Math.random() * width,
          baseY: Math.random() * height,
          seed: Math.random() * 1000,
          color: COLORS[i % COLORS.length],
        });
      }
      while (nodes.length > nodeCount) nodes.pop();
    }

    window.addEventListener("resize", resize);

    function handleMouse(e: MouseEvent) {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = (e.clientX - rect.left) * (width / rect.width);
      mouse.current.y = (e.clientY - rect.top) * (height / rect.height);
    }
    function handleMouseOut() {
      mouse.current.x = -1000;
      mouse.current.y = -1000;
    }
    canvas.addEventListener("mousemove", handleMouse);
    canvas.addEventListener("mouseleave", handleMouseOut);

    let animationFrameId: number;
    function draw() {
      ctx.clearRect(0, 0, width, height);
      const time = Date.now() * 0.001;
      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DISTANCE) {
            ctx.save();
            // Animated line glow and pulse
            ctx.globalAlpha = lerp(0.18, 0.45, 1 - dist / CONNECTION_DISTANCE) * (0.7 + 0.3 * Math.sin(time * 2 + i + j));
            ctx.shadowColor = nodes[i].color;
            ctx.shadowBlur = 12 + 8 * Math.abs(Math.sin(time + i + j));
            ctx.strokeStyle = nodes[i].color;
            ctx.lineWidth = 1.2 + 0.8 * Math.abs(Math.sin(time + i + j));
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }
      // Draw nodes
      nodes.forEach((node, idx) => {
        ctx.save();
        // Animated gradient for node
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, NODE_RADIUS * 2.2);
        gradient.addColorStop(0, "#fff");
        gradient.addColorStop(0.5, node.color);
        gradient.addColorStop(1, "#222a");
        ctx.shadowColor = node.color;
        ctx.shadowBlur = 18 + 8 * Math.abs(Math.sin(time + node.seed));
        ctx.beginPath();
        ctx.arc(node.x, node.y, NODE_RADIUS + 1.5 * Math.abs(Math.sin(time + node.seed)), 0, 2 * Math.PI);
        // Interactive: highlight if near mouse
        const dx = node.x - mouse.current.x;
        const dy = node.y - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 40) {
          ctx.fillStyle = "#fff";
          ctx.shadowBlur = 32;
        } else {
          ctx.fillStyle = gradient;
        }
        ctx.fill();
        ctx.restore();
      });
      // Move nodes (organic movement)
      nodes.forEach((node) => {
        // Organic movement using sine/cosine
        const t = time + node.seed;
        node.x = lerp(node.x, node.baseX + Math.sin(t * 0.7) * 32 + Math.cos(t * 0.3) * 18, 0.04);
        node.y = lerp(node.y, node.baseY + Math.cos(t * 0.6) * 32 + Math.sin(t * 0.4) * 18, 0.04);
        // Mouse interaction: repel nodes from mouse
        const dx = node.x - mouse.current.x;
        const dy = node.y - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 60) {
          const angle = Math.atan2(dy, dx);
          node.x += Math.cos(angle) * (60 - dist) * 0.09;
          node.y += Math.sin(angle) * (60 - dist) * 0.09;
        }
        // Keep base position drifting slowly
        node.baseX += node.vx * 0.2;
        node.baseY += node.vy * 0.2;
        // Bounce base position off edges
        if (node.baseX < NODE_RADIUS || node.baseX > width - NODE_RADIUS) node.vx *= -1;
        if (node.baseY < NODE_RADIUS || node.baseY > height - NODE_RADIUS) node.vy *= -1;
        node.baseX = Math.max(NODE_RADIUS, Math.min(width - NODE_RADIUS, node.baseX));
        node.baseY = Math.max(NODE_RADIUS, Math.min(height - NODE_RADIUS, node.baseY));
      });
      animationFrameId = requestAnimationFrame(draw);
    }
    draw();
    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouse);
      canvas.removeEventListener("mouseleave", handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div ref={parentRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none" }}>
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%", display: "block" }} />
    </div>
  );
};

export default NeuralNetworkCanvas; 