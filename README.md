# 🧪 TheGatoSamurai — Portafolio de Desarrollo

¡Hola! 👋 Bienvenido a mi portafolio de desarrollo. Aquí encontrarás una recopilación de mis proyectos más relevantes como desarrollador frontend, además de prácticas, experimentos y herramientas que he ido aprendiendo en mi camino como estudiante de Ingeniería en Informática.

## 🌐 Sitio Web

👉 [thegatosamurai.dev](https://thegatosamurai.dev)

<img src="https://github.com/TheGatoSamurai/PortfolioDev/blob/main/public/images/Portafolio.png" alt="Vista previa del portafolio" width="600"/>

## 🛠️ Tecnologías que uso

- **Frontend:** React, Astro, TailwindCSS, HTML5, CSS3, JavaScript
- **Backend:** Node.js, Express, MongoDB, APIs REST
- **Herramientas:** Git, GitHub, Netlify, Vite, Figma
- **Otros:** Shopify, diseño de e-commerce, SEO básico, Metodologías Ágiles

## 📁 Proyectos Destacados

| Proyecto                | Descripción                                                                 | Tecnologías                        |
|-------------------------|-----------------------------------------------------------------------------|------------------------------------|
| **Sun y Neko**          | Tienda online de ropa y accesorios de moda asiática. Diseño, desarrollo y redacción de descripciones de productos. | Shopify, SEO, HTML/CSS, Branding   |
| **Ahora es el Tiempo (AET)** | Sitio web informativo para una organización religiosa. Interfaz intuitiva y accesible. | Astro, TailwindCSS, Markdown       |
| **Easy OCR Reader**     | Herramienta simple para aplicar OCR (Reconocimiento Óptico de Caracteres).  | Python, JavaScript                 |
| **BotNeko**             | Bot de Discord para gestionar mi servidor personal.                         | Node.js, JavaScript, Discord.js    |

> Revisa la carpeta `/projects` para ver el código de cada uno.

## ✨ ¿Por qué este portafolio?

Este repositorio me ayuda a organizar y mostrar mis avances como desarrollador. Mi enfoque principal está en crear experiencias web intuitivas, limpias y funcionales, con una atención especial al detalle y la accesibilidad.

## 📫 Contacto

- 🌐 Sitio web: [thegatosamurai.dev](https://thegatosamurai.dev)
- ✉️ Email: thegatosamurai@gmail.com
- 💼 LinkedIn: [linkedin.com/in/thegatosamurai](https://www.linkedin.com/in/thegatosamurai/)
- 🐾 Instagram deTheGatoSamurai [@TheGatoSamurai](https://www.instagram.com/thegatosamurai/)
- 📝 Blog personal de poesia: [Damian Ruaj](https://damiancarmesi.blogspot.com/)



## 🧰 Desarrollo local (instrucciones rápidas)

Sigue estos pasos para levantar el proyecto en tu máquina y probar el formulario de contacto:

1. Instala dependencias:

```powershell
npm install
```

2. Arranca el servidor de desarrollo:

```powershell
npm run dev
```

3. Abre http://localhost:4321 (o el puerto que muestre tu terminal) y navega a la sección "Contáctame".

## ✉️ Configuración de EmailJS (cliente)

Este proyecto usa EmailJS para enviar correos desde el navegador. La integración ya está incluida en `src/components/Formulario.astro` y en `src/components/EmailJs.js`.

Pasos rápidos:

- Ve al dashboard de EmailJS y crea un Service y una Template.
- Copia tu Public Key (Account → Public Key) y reemplázala si es necesario en el código (actualmente usa la public key de desarrollo incluida).
- Asegúrate de que los nombres (`name` attributes) en la plantilla de EmailJS coincidan con los `name` del formulario o adapta `EmailJs.js` para enviar `templateParams`.

Notas importantes:

- El SDK se inicializa en `Formulario.astro` con `emailjs.init({ publicKey: 'tK8UViD9d3Md7C_7T' })`.
- `EmailJs.js` hace `emailjs.sendForm(serviceID, templateID, form)` — si tu plantilla espera claves distintas, cámbialas en la plantilla o en el form.

## 🧪 Cómo probar el formulario (debug rápido)

- Abre DevTools → Console.
- Envía el formulario desde la UI. Deberías ver logs con prefijo `[EmailJs]` indicando inicio y resultado del envío.
- Si no ves llamadas a `api.emailjs.com` en la pestaña Network, revisa que la SDK se haya cargado correctamente y que `emailjs.init` no de errores.

## 🔒 Seguridad y producción

- La Public Key de EmailJS es segura para exponerse en cliente, pero la API Key (server) NUNCA debe estar en el frontend.
- Si quieres ocultar por completo la lógica de envío (recomendada en producción), crea un endpoint server-side que reciba el formulario y haga la llamada a la API REST de EmailJS con la API Key privada. Puedo ayudarte a implementarlo.

## ✅ Estado actual (nota rápida)

- Formulario bilingüe (ES/EN) funcionando con EmailJS.
- Validaciones básicas en cliente.
- No hay endpoints de rate-limit activos en esta rama.

Gracias por visitar mi portafolio ✨  
¡Estoy abierto a colaboraciones, ideas locas o propuestas laborales! 😺

Créditos

Desarrollado por Gerald Antonio Quiñenao Ibarra

Firma
Hecho con ❤️ por [TheGatoSamurai](https://thegatosamurai.dev/)