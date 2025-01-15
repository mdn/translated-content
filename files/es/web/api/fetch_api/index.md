---
title: Fetch API
slug: Web/API/Fetch_API
---

{{DefaultAPISidebar("Fetch API")}}
La API Fetch proporciona una interfaz para recuperar recursos (incluso a través de la red). Resultará familiar a cualquiera que haya usado {{domxref("XMLHttpRequest")}}, pero la nueva API ofrece un conjunto de características más potente y flexible.

## Conceptos y uso

Fetch ofrece una definición genérica de los objetos {{domxref("Request")}} y {{domxref("Response")}} (y otras cosas relacionadas con las solicitudes de red). Esto permitirá su uso donde sea necesario en un futuro, ya sea para operadores de servicios, API caché y otras cosas similares que manipulen o modifiquen las solicitudes y respuestas, o cualquier otro tipo de caso de uso que pudiera requerirle la generación de sus propias respuestas mediante programación.

También proporciona una definición para conceptos relacionados, como CORS y la semántica de encabezado HTTP origen, suplantando sus definiciones separadas en otros lugares.

Para hacer una solicitud y recuperar un recurso, utilice el método {{domxref("GlobalFetch.fetch")}}. Se implementa en múltiples interfaces, específicamente {{domxref("Window")}} y {{domxref("WorkerGlobalScope")}}. Esto hace que esté disponible en casi cualquier contexto donde quiera buscar recursos.

El método `fetch()` toma un argumento obligatorio, la ruta de acceso al recurso que desea recuperar. Devuelve una {{domxref("Promise")}} que resuelve en {{domxref("Response")}} a esa petición, sea o no correcta. También puede pasar opcionalmente un objeto de opciones init como segundo argumento (ver {{domxref("Request")}}).

Una vez que {{domxref("Response")}} es recuperada, hay varios métodos disponibles para definir cuál es el contenido del cuerpo y como se debe manejar (ver {{domxref("Body")}}).

Puede crear una solicitud y respuesta directamente a con los constructores {{domxref("Request.Request","Request()")}} y {{domxref("Response.Response","Response()")}}, pero no es recomendable hacerlo directamente. En su lugar, es preferible que sean creados como resultado de otras acciones de la API (por ejemplo, {{domxref("FetchEvent.respondWith")}} desde los operadores de servicios).

> [!NOTE]
> Puede encontrar mas información sobre las características de la API Fetch en [Usando Fetch](/es/docs/Web/API/Fetch_API/Using_Fetch), y aprender los conceptos en [Fetch: conceptos básicos](/es/docs/conflicting/Web/API/Fetch_API/Using_Fetch).

### Abortar una petición

Los navegadores han empezado a añadir soporte experimental para las interfaces {{domxref("AbortController")}} y {{domxref("AbortSignal")}} (Conocidas también como La API Abort), las cuales permiten que operaciones como Fetch y XHR puedan ser abortadas si no han terminado todavía. Visita las páginas de las interfaces para más detalles.

## Fetch Interfaces o Métodos

- {{domxref("GlobalFetch")}}
  - : Contiene el método `fetch()` utilizado para obtener o inicializar un recurso.
- {{domxref("Headers")}}
  - : Representa los encabezados de la respuesta/solicitud, lo que le permite consultar y tomar diferentes acciones en función de los resultados.
- {{domxref("Request")}}
  - : Representa una solicitud de recursos.
- {{domxref("Response")}}
  - : Representa la respuesta a una solicitud.

## Fetch mixin

- {{domxref("Body")}}
  - : Proporciona métodos relacionados con el contenido de la respuesta/solicitud, lo que le permite declarar cuál es su tipo y cómo debe manejarse.

## Especificaciones

{{Specifications}}

## Compatibilidad de navegadores

{{Compat}}

## Ver también

- [ServiceWorker API](/es/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/es/docs/Web/HTTP/CORS)
- [HTTP](/es/docs/Web/HTTP)
- [Fetch polyfill](https://github.com/github/fetch)
- [Fetch basic concepts](/es/docs/conflicting/Web/API/Fetch_API/Using_Fetch)
- [Fetch API Examples](https://davidwalsh.name/fetch)
