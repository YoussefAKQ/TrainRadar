"use client";

import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  borderWidth?: number; // Grosor de la línea
  duration?: number;    // Duración de la animación
  delay?: number;       // Retraso en la animación
  start: { x: number; y: number }; // Punto A (inicio)
  end: { x: number; y: number };   // Punto B (fin)
}

export const Efecto = ({
  className,
  borderWidth = 2,
  duration = 5,
  delay = 0,
  start,
  end,
}: BorderBeamProps) => {
  // Calcula el ángulo y la longitud de la línea
  const angle = Math.atan2(end.y - start.y, end.x - start.x) * (180 / Math.PI);
  const length = Math.sqrt(
    Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2)
  );

  return (
    <div
      style={{
        position: "absolute",
        top: `${start.y}%`,
        left: `${start.x}%`,
        width: `${length}%`,
        height: `${borderWidth}px`,
        background: "linear-gradient(90deg, black, black 50%, transparent 50%)",
        backgroundSize: "200% 100%",
        animation: `border-move ${duration}s linear infinite`,
        animationDelay: `${delay}s`,
        transform: `rotate(${angle}deg)`,
        transformOrigin: "0 0",
      }}
      className={cn(className)}
    >
      <style jsx>{`
        @keyframes border-move {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
      `}</style>
    </div>
  );
};
