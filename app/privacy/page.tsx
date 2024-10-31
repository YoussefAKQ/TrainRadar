export default function Privacy() {
  return (
    <main className="flex flex-col text-black items-center justify-center px-4 bg-white rounded-b-[2rem]">
        <div className="max-w-[900px] w-full text-black">
            <h1 className="mt-40 text-3xl text-black font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Políticas de Privacidad
            </h1>
            <p className="mt-5 text-xs text-left">24 de julio de 2024 por Bamp.</p>
        </div>

        <div className="max-w-[900px] w-full">
            <p className="mt-5 text-xm">
                <span className="font-bold">Introducción:</span> Bienvenido a Bamp, una aplicación web diseñada para ofrecer servicios de informes en instituciones educativas para informar sobre casos de acoso y otros conflictos. Al usar nuestra aplicación, usted acepta completamente estos Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, no debe usar Bamp.
            </p>

            <p className="mt-5 text-xm">
                <span className="font-bold">Descripción del Servicio:</span> Bamp proporciona una plataforma para que los usuarios informen sobre casos de acoso y conflictos en instituciones educativas. Los informes se envían directamente a la institución educativa correspondiente para su procesamiento y resolución.
            </p>

            <div className="mt-5 text-xm">
                <span className="font-bold">Uso de Datos:</span> 
                <ul className="list-disc list-inside">
                    <li><span className="font-bold">Privacidad de los Datos del Usuario:</span> No utilizamos anuncios, vendemos datos de usuarios ni recolectamos más datos de los necesarios para el funcionamiento de la aplicación.</li>
                    <li><span className="font-bold">Datos Recopilados en Informes:</span> Los estudiantes que envían informes deben proporcionar su institución educativa, nombre, apellido, clase y detalles del caso. Esta información es necesaria para que la institución educativa procese y gestione el informe adecuadamente.</li>
                    <li><span className="font-bold">Confidencialidad:</span> El personal educativo no expondrá al denunciante a su abusador para evitar represalias. La confidencialidad del denunciante será protegida en todo momento.</li>
                    <li><span className="font-bold">Eliminación de Datos:</span> Los datos de los informes se eliminarán por defecto después de un año, a menos que exista una razón legal o administrativa para retenerlos por más tiempo.</li>
                </ul>
            </div>

            <p className="mt-5 text-xm">
                <span className="font-bold">Seguridad y Confidencialidad:</span> Estamos comprometidos a proteger la confidencialidad y seguridad de los datos recopilados. Implementamos medidas técnicas y organizativas adecuadas para proteger los datos contra el acceso no autorizado, alteración, divulgación o destrucción.
            </p>

            <p className="mt-5 text-xm">
                <span className="font-bold">Informes Fraudulentos:</span> Si una institución educativa detecta un informe falso, nos reservamos el derecho de acceder a la dirección IP del denunciante para investigar la situación. Esto solo se hará para asegurar la integridad del sistema y prevenir abusos.
            </p>

            <div className="mt-5 text-xm">
                <span className="font-bold">Derechos y Obligaciones:</span> 
                <ul className="list-disc list-inside">
                    <li><span className="font-bold">Derecho de Cancelación:</span> Nos reservamos el derecho de cancelar la suscripción de cualquier institución educativa y deshabilitar sus cuentas si se detecta un uso indebido de la aplicación o cualquier violación de estos términos.</li>
                    <li><span className="font-bold">Obligaciones del Usuario:</span> Los usuarios deben usar la aplicación de manera responsable y conforme a la ley. Está prohibido usar Bamp para enviar informes falsos o malintencionados, o para cualquier propósito que no sea informar sobre conflictos genuinos dentro del entorno educativo.</li>
                </ul>
            </div>

            <p className="mt-5 text-xm">
                <span className="font-bold">Modificaciones a los Términos:</span> Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Cualquier cambio se publicará en nuestro sitio web y, si es necesario, se notificará a los usuarios a través de la aplicación. El uso continuado de la aplicación después de la publicación de cualquier cambio constituye la aceptación de los nuevos términos.
            </p>

            <p className="mt-5 text-xm">
                <span className="font-bold">Contacto:</span> Si tiene alguna pregunta sobre estos Términos y Condiciones, puede contactarnos en [email/contacto].
            </p>

            <p className="mt-5 mb-20 text-xm">
                Al usar Bamp, usted reconoce que ha leído, entendido y aceptado estos Términos y Condiciones en su totalidad. Gracias por usar nuestra aplicación para contribuir a un entorno educativo más seguro y saludable.
            </p>
        </div>
    </main>
  );
}
