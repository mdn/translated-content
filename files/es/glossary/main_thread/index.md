---
title: Hilo principal
slug: Glossary/Main_thread
tags:
  - Actualización Web
  - Glosario
  - Referencia
  - Web de rendimiento
translation_of: Glossary/Main_thread
original_slug: Glossary/Hilo_principal
---
El hilo principal es donde un navegador procesa eventos y pinturas del usuario. De manera predeterminada, el navegador usa un solo hilo para ejecutar todo el JavaScript en su página, así como para realizar el diseño, los reflujos y la recolección de basura. Esto significa que las funciones de JavaScript de larga duración pueden bloquear el hilo, lo que lleva a una página que no responde y a una mala experiencia del usuario.

A menos que use intencionalmente un trabajador web, como un trabajador de servicio, JavaScript se ejecuta en el hilo principal, por lo que es fácil que un script provoque retrasos en el procesamiento o la pintura de eventos. Cuanto menos trabajo se requiera del hilo principal, más puede responder ese hilo a los eventos del usuario, pintar y, en general, responder al usuario.

1.  See also

    1.  [Asynchronous JavaScript](/es/docs/Learn/JavaScript/Asynchronous)
    2.  [Web worker API](/es/docs/Web/API/Web_Workers_API)
    3.  [Service worker API](/es/docs/Web/API/Service_Worker_API)

2.  [Glossary](/es/docs/Glossary)

    1.  {{Glossary("Thread")}}
