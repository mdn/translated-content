---
title: Hilo principal
slug: Glossary/Main_thread
---

{{GlossarySidebar}}

El hilo principal es donde un navegador procesa eventos y pinturas del usuario. De manera predeterminada, el navegador usa un solo hilo para ejecutar todo el JavaScript en su página, así como para realizar el diseño, los reflujos y la recolección de basura. Esto significa que las funciones de JavaScript de larga duración pueden bloquear el hilo, lo que lleva a una página que no responde y a una mala experiencia del usuario.

A menos que use intencionalmente un trabajador web, como un trabajador de servicio, JavaScript se ejecuta en el hilo principal, por lo que es fácil que un script provoque retrasos en el procesamiento o la pintura de eventos. Cuanto menos trabajo se requiera del hilo principal, más puede responder ese hilo a los eventos del usuario, pintar y, en general, responder al usuario.

## Véase también

- [Asynchronous JavaScript](/es/docs/Learn/JavaScript/Asynchronous)
- [Web worker API](/es/docs/Web/API/Web_Workers_API)
- [Service worker API](/es/docs/Web/API/Service_Worker_API)
- [Glosario de MDN Web Docs](/es/docs/Glossary)
  - {{Glossary("Thread")}}
