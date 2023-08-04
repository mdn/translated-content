---
title: Asíncrono
slug: Glossary/Asynchronous
---

El término **asíncrono** se refiere al concepto de que más de una cosa ocurre al mismo tiempo, o múltiples cosas relacionadas ocurren sin esperar a que la previa se haya completado. En informática, la palabra "asíncrono" se usa en los siguientes contextos:

- Redes y comunicaciones

  - : La comunicación asíncrona es un método de intercambio de mensajes entre dos o más partes, en la que cada parte recibe y procesa el mensaje cuando sea conveniente o posible de realizar, en vez de hacerlo inmediatamente al recibirlo. Adicionalmente, los mensajes pueden ser enviados sin esperar el acuse de recibo de los mismos, bajo el entendimiento de que si ocurre algún problema, quien los recibe solicitará las correcciones o manejara la situación.

    Para los humanos, el correo electrónico es un método de comunicación asíncrono: el emisor envía el correo y el receptor lo leerá y responderá cuando le sea conveniente en vez de hacerlo de una vez. Ambos lados pueden continuar enviando y recibiendo mensajes cuando quiera que ellos deseen, en lugar de tener que programarse uno alrededor del otro.

    Cuando el software se comunica de manera asíncrona, un programa puede realizar una solicitud de información a otra pieza de software (un servidor, por ejemplo), y continuar haciendo otras tareas mientras espera por la respuesta. Por ejemplo,la técnica de programación {{Glossary("AJAX")}} (Asynchronus JavaScript and {{Glossary("XML")}}) - usualmente llamada simplemente "Ajax", incluso a pesar de que usualmente en las aplicaciones modernas se utilice {{Glossary("JSON")}} en vez de XML - es un mecanismo por el que se solicitan tamaños relativamente pequeños de datos al servidor usando {{Glossary("HTTP")}} , siendo los resultados devueltos cuando estén disponibles más que de inmediato.

- Diseño de Software

  - : El diseño de software asíncrono amplía el concepto al construir código que permita a un programa solicitar que una tarea se realice al mismo tiempo que la tarea (o tareas) original, sin detenerse a esperar a que la primera se haya completado. Cuando la tarea secundaria se completa, la original es notificada usando un mecanismo acordado, de tal forma que sepa que el trabajo se ha completado y que el resultado, si es que existe, está disponible.

    Existen diversas técnicas de programación para implementar software asíncrono. Vea el artículo [JavaScript Asíncrono](/es/docs/Learn/JavaScript/Asynchronous) para terner una introducción a ellos.

## Saber más

### Referencia técnica

- [Obteniendo datos del servidor](/es/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data) (Área de aprendizaje)
- {{glossary("Synchronous","Sincrónico")}}
