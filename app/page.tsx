import Image from "next/image";
import {Safari} from "@/components/safari";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-black bg-white text-center space-y-10">
      <div className="mt-40">
        <Image
          src="/renfe.jpg" // Reemplaza con la ruta de la imagen del logo en tu proyecto
          alt="Logo"
          width={80}
          height={80}
          className="rounded-xl"
        />
      </div>
      <h1 className="text-7xl font-bold tracking-tighter">
        Sigue tu tren en <br /> tiempo real.
      </h1>
      <p className="text-gray-500 text-lg max-w-md">
        Rastreamos toda la línea de Cercanías de Madrid en tiempo real — No pierdas tu tren.
      </p>
      <div className="flex space-x-6 mt-6">
        <button className="py-3 px-6 bg-black text-white font-semibold rounded-full">
          Mapa en tiempo real
        </button>
        <button className="py-3 px-6 bg-white text-black font-semibold border border-gray-300 rounded-full">
          About
        </button>
      </div>
      <div className="flex flex-col items-center mt-12">
        <p className="text-gray-400">Desarrollado por:</p>
        <Image src="/bl.png" alt="Bamp Labs" width={80} height={80} className=""/>
      </div>
      <Safari url="bamplabs.io" className="size-xl"         
        src="https://via.placeholder.com/1200x750" />
    </div>
  );
}
