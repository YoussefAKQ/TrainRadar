"use client";

import { Efecto } from "@/components/efecto";

const LineaC1 = () => {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {/* Tramos de la Línea C1 siguiendo el mapa */}
      
      {/* Segmento horizontal */}
      <Efecto
        className="line-c1-segment-1"
        borderWidth={2}
        duration={5}
        start={{ x: 10, y: 20 }} // Coordenadas iniciales
        end={{ x: 30, y: 20 }}   // Coordenadas finales del tramo
      />
      
      {/* Segmento vertical */}
      <Efecto
        className="line-c1-segment-2"
        borderWidth={2}
        duration={5}
        start={{ x: 30, y: 20 }}
        end={{ x: 30, y: 40 }}
      />
      
      {/* Segmento diagonal */}
      <Efecto
        className="line-c1-segment-3"
        borderWidth={2}
        duration={5}
        start={{ x: 30, y: 40 }}
        end={{ x: 50, y: 60 }}
      />

      {/* Agrega más segmentos para completar la línea según el mapa */}
    </div>
  );
};

export default LineaC1;
