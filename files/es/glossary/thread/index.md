---
title: Hilo
slug: Glossary/Thread
---

{{GlossarySidebar}}

Un hilo (thread), en informática, es la ejecución de varias tareas o programas al mismo tiempo. Cada unidad capaz de ejecutar código se denomina **hilo**.

El **{{Glossary("main thread", "hilo principal")}}** es el que usa el navegador para gestionar los eventos del usuario, renderizar y pintar la pantalla, y ejecutar la mayor parte del código que compone una página web o una aplicación típica. Como todo esto sucede en un único hilo, un script lento de un sitio web o de una aplicación ralentiza el navegador entero; peor aún, si un script entra en un bucle infinito, todo el navegador se quedará bloqueado. El resultado es una experiencia de usuario frustrante y lenta (o peor).

El {{Glossary("JavaScript")}} moderno ofrece formas de crear hilos adicionales, cada uno de los cuales se ejecuta de forma independiente y puede comunicarse con los demás. Esto se consigue con tecnologías como los [web workers](/en-US/docs/Web/API/Web_Workers_API), que permiten lanzar un subprograma que se ejecuta de forma concurrente con el hilo principal en un hilo propio. Así, las tareas lentas, complejas o de larga duración pueden ejecutarse al margen del hilo principal, preservando el rendimiento general del sitio o de la aplicación, así como el del navegador en su conjunto.
La ejecución multihilo también permite a las aplicaciones web aprovechar los procesadores multinúcleo modernos, lo que posibilita un rendimiento incluso superior al de aplicaciones multihilo que se ejecutan en un solo núcleo.

Se puede crear un tipo especial de worker, llamado **[service worker](/en-US/docs/Web/API/Service_Worker_API)**, que un sitio puede dejar instalado —con el permiso del usuario— para que se ejecute incluso cuando el usuario no esté usando ese sitio en ese momento. Esto se emplea para crear sitios capaces de notificar al usuario cuando sucede algo mientras no esté interactuando activamente con ellos; por ejemplo, avisarle de que ha recibido un correo nuevo aunque no haya iniciado sesión en su servicio de correo en ese momento.

En conjunto, puede verse que estos hilos en el sistema operativo resultan sumamente útiles: ayudan a minimizar el tiempo de cambio de contexto, permiten una comunicación más eficiente y posibilitan un mayor aprovechamiento de la arquitectura multiprocesador.

## Saber más

- [JavaScript asíncrono](/en-US/docs/Learn_web_development/Extensions/Async_JS)
- [Web worker API](/en-US/docs/Web/API/Web_Workers_API)
- [Service worker API](/en-US/docs/Web/API/Service_Worker_API)
- Términos de glosario relacionados:
  - {{Glossary("Main thread", "Hilo principal")}}
