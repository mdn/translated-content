---
title: Hilo
slug: Glossary/Thread
---

{{GlossarySidebar}}

En ciencias de la computación, un hilo es la ejecución de múltiples tareas o programas al mismo tiempo. Cada unidad capaz de ejecutar código se denomina **hilo**.

El **{{Glossary("main thread", "hilo principal")}}** es el que usa el navegador para gestionar los eventos del usuario, renderizar y pintar la pantalla, y ejecutar la mayor parte del código que compone una página web o aplicación típica. Como todo esto sucede en un solo hilo, un script lento de un sitio o aplicación ralentiza todo el navegador; peor aún, si un script entra en un bucle infinito, todo el navegador se bloqueará. El resultado es una experiencia de usuario frustrante y lenta (o peor).

El {{Glossary("JavaScript")}} moderno ofrece formas de crear hilos adicionales, cada uno ejecutándose de forma independiente y posiblemente comunicándose entre sí. Esto se hace usando tecnologías como los [web workers](/en-US/docs/Web/API/Web_Workers_API), que se pueden usar para lanzar un subprograma que se ejecuta concurrentemente con el hilo principal en un hilo propio. Esto permite que las tareas lentas, complejas o de larga duración se ejecuten de forma independiente del hilo principal, preservando el rendimiento general del sitio o aplicación, así como el del navegador en su conjunto. El multihilo también permite a las aplicaciones web aprovechar los procesadores multinúcleo modernos, logrando un rendimiento incluso mejor que el de aplicaciones multihilo ejecutándose en un solo núcleo.

Un tipo especial de worker, llamado **[service worker](/en-US/docs/Web/API/Service_Worker_API)**, puede crearse y dejarse residente por un sitio, con el permiso del usuario, para que se ejecute incluso cuando el usuario no esté usando activamente ese sitio. Esto se usa para crear sitios capaces de notificar al usuario cuando suceden cosas mientras no está interactuando con el sitio. Por ejemplo, notificar a un usuario que ha recibido un correo nuevo aunque no haya iniciado sesión en su servicio de correo.

En general, se puede observar que estos hilos dentro de nuestro sistema operativo son extremadamente útiles. Ayudan a minimizar el tiempo de cambio de contexto, permiten una comunicación más eficiente y permiten un mayor aprovechamiento de la arquitectura multiprocesador.

## Saber más

- [JavaScript asíncrono](/en-US/docs/Learn_web_development/Extensions/Async_JS)
- [Web Worker API](/en-US/docs/Web/API/Web_Workers_API)
- [Service Worker API](/en-US/docs/Web/API/Service_Worker_API)
- Términos relacionados del glosario:
  - {{Glossary("Main thread", "Hilo principal")}}
