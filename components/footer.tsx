import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-white mt-12 py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="/about" className="text-gray-400 hover:text-white">
            Sobre Nosotros
          </Link>
          <Link href="/contact" className="text-gray-400 hover:text-white">
            Contacto
          </Link>
          <Link href="/privacy" className="text-gray-400 hover:text-white">
            Politicias de Privacidad
          </Link>
        </div>
        <p className="text-gray-500">
          &copy; {new Date().getFullYear()} TrainRadar. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
