import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    // Insertar fecha y hora por separado en campos hidden
    const dateInput = form.current?.elements.namedItem("date") as HTMLInputElement;
    const timeInput = form.current?.elements.namedItem("time") as HTMLInputElement;

    const now = new Date();
    if (dateInput && timeInput) {
      dateInput.value = now.toLocaleDateString("es-CR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
      timeInput.value = now.toLocaleTimeString("es-CR", {
        hour: "2-digit",
        minute: "2-digit",
      });
    }

    if (form.current) {
      emailjs
        .sendForm(
          "service_pfze3f1",
          "template_dseoot7",
          form.current,
          "8d-CarccAJ0fKRuB3"
        )
        .then(() => {
          Swal.fire({
            icon: "success",
            title: "¡Mensaje enviado!",
            text: "Gracias por contactarme. Te responderé pronto.",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Aceptar",
          });
          form.current?.reset();
        })
        .catch((error) => {
          console.error(error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No se pudo enviar el mensaje. Inténtalo más tarde.",
            confirmButtonColor: "#d33",
            confirmButtonText: "Cerrar",
          });
        });
    }
  };

  return (
    <form
  id="form"
  ref={form}
  onSubmit={sendEmail}
  className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded shadow-md"
>
  <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">Contáctame</h2>

  <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Nombre</label>
  <input
    type="text"
    name="name"
    required
    className="w-full mb-4 p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400"
    placeholder="Tu nombre"
  />

  <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Correo electrónico</label>
  <input
    type="email"
    name="user_email"
    required
    className="w-full mb-4 p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400"
    placeholder="tu@email.com"
  />

  <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Mensaje</label>
  <textarea
    name="message"
    rows={4}
    required
    className="w-full mb-4 p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400"
    placeholder="Escribe tu mensaje aquí..."
  />

  {/* Campos ocultos para fecha y hora */}
  <input type="hidden" name="date" />
  <input type="hidden" name="time" />

  <button
    type="submit"
    className="bg-blue-600 text-white w-full py-2 px-4 rounded hover:bg-blue-700 transition"
  >
    Enviar mensaje
  </button>
</form>

  );
};

export default ContactForm;
