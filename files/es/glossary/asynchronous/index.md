---
title: Asíncrono
slug: Glossary/Asynchronous
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

El término **asíncrono** se refiere a dos o más objetos o eventos que no existen o no ocurren al mismo tiempo; es decir, **no** son {{glossary("synchronous", "síncronos")}}. Cuando varias cosas relacionadas suceden sin que ninguna dependa de que las anteriores hayan terminado, se dice que son asíncronas.

En informática, la palabra "asíncrono" se usa principalmente en dos contextos, que se explican a continuación.

## En redes y comunicaciones

La comunicación asíncrona es un método de intercambio de mensajes en el que el envío, la recepción y el procesamiento de cada mensaje no dependen del envío, la recepción ni el procesamiento de otros mensajes. En la comunicación asíncrona, cada parte recibe y procesa los mensajes cuando le resulta conveniente o posible, en lugar de hacerlo en cuanto los recibe. Además, los mensajes pueden enviarse sin esperar una confirmación, dando por sentado que, si surge algún problema, el destinatario pedirá correcciones o se encargará de la situación de otra manera.

El correo electrónico es un tipo de comunicación humana asíncrona. Una persona envía un correo; el destinatario lo lee y responde (o no) cuando le resulta conveniente, no necesariamente de inmediato. Todas las partes pueden seguir enviando y recibiendo mensajes en cualquier momento. Los correos electrónicos no requieren una secuencia temporal específica.

En el software asíncrono, hacer una solicitud (por ejemplo, a un servidor) no bloquea otros procesos mientras se espera la respuesta. El software puede seguir realizando otras tareas. Por ejemplo, en las [APIs basadas en promesas](/es/docs/Learn_web_development/Extensions/Async_JS/Implementing_a_promise-based_API), se crean objetos {{JSxRef("Promise")}} para las operaciones largas. Una vez completada la operación, la promesa se procesa. Con las promesas, el software no tiene que esperar a que la operación finalice.

## En el diseño de software

El diseño de software asíncrono amplía este concepto construyendo código que permite a un programa pedir que una tarea se realice a la par de la tarea (o tareas) original, sin detenerse a esperar a que esa tarea termine. Cuando la tarea secundaria finaliza, se notifica a la tarea original mediante un mecanismo acordado, de modo que sepa que el trabajo ha terminado y que el resultado, si lo hay, está disponible.

Hay varias técnicas de programación para implementar software asíncrono. Consulta el artículo [JavaScript asíncrono](/es/docs/Learn_web_development/Extensions/Async_JS) para ver una introducción a ellas.

## Véase también

- [Aprender: Hacer solicitudes de red con JavaScript](/es/docs/Learn_web_development/Core/Scripting/Network_requests) (Área de aprendizaje)
- Términos relacionados del glosario:
  - {{glossary("Synchronous", "Síncrono")}}
