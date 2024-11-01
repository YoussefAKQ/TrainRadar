import Image from "next/image";
import { Safari } from "@/components/safari";
import {Iphone15Pro} from "@/components/iphone";

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
      <h1 className="text-7xl font-bold tracking-tight">
        Sigue tu línea de <br /> tren en tiempo real. 
      </h1>
      <p className="text-gray-500 text-lg max-w-md">
        Rastreamos todas la lineas de Cercanías de Madrid en tiempo real — Para que no pierdas tu tren.
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
        <Image src="/bl.png" alt="Bamp Labs" width={60} height={60} className=""/>
      </div>
      <div className="bg-gray-900/10 rounded-xl p-24">
        <Safari 
          url="bamplabs.io" 
          className="size-xl"
          src="https://imagedelivery.net/0aWQQ0aPeqvRMfdqaMMJPQ/df84dc2b-b7b8-4649-9532-5d0566d99e00/public" 
        />
      </div>
      <h1 className="text-7xl font-bold tracking-tight">
        Entiende el funcionamiento <br /> antes de empezar. 
      </h1>
      <p className="text-gray-500 text-lg max-w-md">
        Disponible para cualquier dispositivo con acceso a internet — Para que no pierdas tu tren.
      </p>
      <div className="flex justify-center space-x-10 mt-10">
        <div className="bg-gray-900/10 rounded-xl p-10 w-1/2">
          {/* Contenido del cuadro izquierdo */}
          <h2 className="text-2xl font-semibold">Cuadro Derecho</h2>
          <p className="mb-4">Agrega aquí el contenido para el cuadro derecho.</p>
          <Iphone15Pro 
          className="size-[400px]"
          src="" 
        />
        </div>
        <div className="bg-gray-900/10 rounded-xl p-10 w-1/2">
          {/* Contenido del cuadro derecho */}
          <h2 className="text-2xl font-semibold">Cuadro Derecho</h2>
          <p className="mb-4">Agrega aquí el contenido para el cuadro derecho.</p>
          <Iphone15Pro 
          className="size-[400px]"
          src="" 
        />
        </div>
      </div>
    </div>
  );
}
