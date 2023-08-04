---
title: Service Worker API
slug: Web/API/Service_Worker_API
---

{{DefaultAPISidebar}}

Los Service workers actúan esencialmente como proxy servers asentados entre las aplicaciones web, el navegador y la red (cuando está accesible). Están destinados, entre otras cosas, a permitir la creación de experiencias offline efectivas, interceptando peticiones de red y realizando la acción apropiada si la conexión de red está disponible y hay disponibles contenidos actualizados en el servidor. También permitirán el acceso a notificaciones tipo push y APIs de sincronización en segundo plano.

## Conceptos y uso de Service worker

Un service worker es un [worker](/es/docs/Web/API/Worker) manejado por eventos registrado para una fuente y una ruta. Consiste en un fichero JavaScript que controla la página web (o el sitio) con el que está asociado, interceptando y modificando la navegación y las peticiones de recursos, y cacheando los recursos de manera muy granular para ofrecer un control completo sobre cómo la aplicación debe comportarse en ciertas situaciones (la mas obvia es cuando la red no está disponible).

Un service worker se ejecuta en un contexto worker: por lo tanto no tiene acceso al DOM, y se ejecuta en un hilo distinto al JavaScript principal de la aplicación, de manera que no es bloqueante. Está diseñado para ser completamente asíncrono, por lo que APIs como el [XHR](/es/docs/Web/API/XMLHttpRequest) asíncrono y [localStorage](/es/docs/Web/Guide/API/DOM/Storage) no se pueden usar dentro de un service worker.

Los service workers solo funcionan sobre HTTPS, por razones de seguridad. Modificar las peticiones de red en abierto permitiría ataques man in the middle realmente peligrosos. En Firefox, las APIs de service worker se ocultan y no pueden ser empleadas cuando el usuario está en [modo de navegación en privado](https://support.mozilla.org/en-US/kb/private-browsing-use-firefox-without-history).

> **Nota:** Los Service Workers mejoran los intentos anteriores en este área tal como [AppCache](http://alistapart.com/article/application-cache-is-a-douchebag) puesto que no hacen suposiciones sobre qué se está intentando hacer para luego tener que cortar cuando las suposiciones no son correctas; hay control granular sobre todos los aspectos.

> **Nota:** Los Service workers hace un uso intensivo de las [promesas](/es/docs/Web/JavaScript/Reference/Global_Objects/Promise), por lo que generalmente esperarán a que lleguen las respuestasas correspondientes, tras lo cual responderán con una acción de éxito o de fracaso. La arquitectura de promesas es ideal en este caso.

### Registro

Un service worker se registra primero mediante el método {{domxref("ServiceWorkerContainer.register()")}}. Si ha habido éxito, el service worker se descargará al cliente e intentará la instalación/activación (ver más abajo) de las URLs accedidas por el usuario dentro de todo su origen de datos, o dentro de algún subconjunto especificado por el autor.

### Descarga, instalación y activación

En este punto, su service worker observará el siguiente ciclo de vida:

1. Descarga
2. Instalación
3. Activación

El service worker se descaga inmediatamente cuando un usuario accede por primera vez a un sitio controlado por el mismo.

Después de esto se descarga cada 24 horas aproximadamente. Se puede descargar con más frecuencia, pero **debe** ser descargado cada 24 horas para prevenir que una mala programación sea molesta durante mucho tiempo.

La instalación se realiza cuando el fichero descargado es nuevo, es decir, diferente a otro service worker existente (comparado byte a byte), o si es el primero descargado para esta página/sitio.

Si es la primera vez que el service worker está disponible se intenta la instalación, y tras una instalación satisfactoria se activa.

Si ya existe un service worker disponible la nueva versión se instala en segundo plano, pero no se activa -en ese momento se llama _worker in waiting._ Sólo se activa cuando ya no hay más páginas cargadas que utilicen el antiguo service worker. En cuanto no hay más páginas de este estilo cargadas, el nuevo service worker se activa (pasando a ser el _active worker)._ La activación se puede realizar antes mediante {{domxref("ServiceWorkerGlobalScope.skipWaiting()")}} y las páginas existentes se pueden llamar por el active worker usando {{domxref("Clients.claim()")}}.

Presta atención a {{domxref("InstallEvent")}}; es habitual preparar tu service worker para usarlo cuando se dispara, por ejemplo creando una caché que utilice la API incorporada de almacenamiento, y colocando los contenidos dentro de ella para poder usarlos con la aplicación offline.

También hay un evento `activate`. El momento en el que este evento se activa es, en general, un bueno momento para limpiar viejas cachés y demás cosas asociadas con la versión previa de tu service worker.

Tu service worker puede responder a las peticiones usando el evento {{domxref("FetchEvent")}}. Puedes modificar la respuesta a estas peticiones de la manera que quieras, usando el método {{domxref("FetchEvent.respondWith") }}.

> **Nota:** Dado que `oninstall`/`onactivate` puede tardar un poco en completarse, la especificación de service worker spec provee un método `waitUntil` que, cuando es llamado `oninstall` o `onactivate`, pasa una promesa. Los eventos funcionales no se envían al service worker hasta que la promesa se resuelve con éxito.

Para un tutorial completo que muestra cómo construir tu primer ejemplo básico, lee [Using Service Workers](/es/docs/Web/API/ServiceWorker_API/Using_Service_Workers).

## Otras posibilidades

Los service workers también pueden usarse para cosas como:

- Sincronización de datos en background
- Responder a peticiones de recursos desde otros orígenes
- Recibir actualizaciones centralizadas de datos costosos de calcular tales como geolocalización o giroscopio, de manera que muchas páginas puedan hacer uso de un mismo conjunto de datos
- Compilación Client-side y gestión de dependencias de CoffeeScript, less, CJS/AMD modules, etc. para desarrollo
- Enlace para servicios en background
- Plantillas personalizadas basadas en ciertos patrones URL
- Mejoras de rendimiento, por ejemplo pre-fetching de recursos que es probable que el usuario requiera en un futuro próximo, como las próximas imágenes de un album de fotos.

En el futuro, los service workers podrán hacer una cantidad de cosas útiles para la plataforma web que estarán muy próximos a las aplicaciones nativas. Interesantement, otras especificacions pueden comenzar y lo harán a hacer uso del contexto de service worker, por ejemplo:

- [Sincronización en background](https://github.com/slightlyoff/BackgroundSync): Pone en marcha un service worker aunque el usuario no esté en el sitio de manera que las cachés se puedan actualizar, etc.
- [Reacción a mensajes tipo push](/es/docs/Web/API/Push_API): Pone en marcha un service worker para enviar a los usuarios un mensaje para notificarles de que hay disponible nuevos contenidos.
- Reacción ante una fecha y hora determinados.
- Creación de geo-fronteras

## Interfaces

- {{domxref("Cache") }}
  - : Representa el almacenamiento para un par de objetos {{domxref("Request")}} / {{domxref("Response")}} que son cacheados como parte del ciclo de vida de {{domxref("ServiceWorker")}}.
- {{domxref("CacheStorage") }}
  - : Representa el almacenamiento de objetos {{domxref("Cache")}}. Proporciona un directorio maestro de todos los nombres de caché a los que puede acceder un {{domxref("ServiceWorker")}} y mantiene un mapa de nombres (strings) correspondientes a objetos {{domxref("Cache")}}.
- {{domxref("Client") }}
  - : Representa el ámbito de un cliente service worker. Un cliente service worker es bien un documento en un contexto de navador, bien un {{domxref("SharedWorker")}}, que está controlado por un worker activo.
- {{domxref("Clients") }}
  - : Representa un contenedor para una lista de objetos {{domxref("Client")}}; principal vía de acceso de los clientes service worker al origen actual.
- {{domxref("ExtendableEvent") }}
  - : Extiende el tiempo de vida de los eventos `install` y `activate` lanzados en {{domxref("ServiceWorkerGlobalScope")}} como parte del ciclo de vida del service worker. Esto asegura que cualquier evento funcional (como {{domxref("FetchEvent")}}) no se despachan al {{domxref("ServiceWorker")}} hasta que actualiza los esquemas de base de datos, borra entradas de caché antiguas, etc.
- {{domxref("ExtendableMessageEvent") }}
  - : Es el objeto evento de un [`message`](</es/docs/Web/Reference/Events/message_(ServiceWorker)>) lanzado en un service worker (cuando se recibe un mensaje en el {{domxref("ServiceWorkerGlobalScope")}} desde otro contexto) — extiende el tiempo de vida de tales eventos.
- {{domxref("FetchEvent") }}
  - : Parametro pasado en el controlador {{domxref("ServiceWorkerGlobalScope.onfetch")}}, `FetchEvent` representa una acción de consulta (fetch) despachada en el {{domxref("ServiceWorkerGlobalScope")}} de un {{domxref("ServiceWorker")}}. Contiene información sobre la petición y respuesta resultante, y proporciona el método {{domxref("FetchEvent.respondWith", "FetchEvent.respondWith()")}}, que nos permite proporcionar una respuesta arbitraria a la página controlada.
- {{domxref("InstallEvent") }}
  - : Parámetro pasado en el controlador {{domxref("ServiceWorkerGlobalScope.oninstall", "oninstall")}}, el interfaz `InstallEvent` representa una acctión de instalación realizada en el {{domxref("ServiceWorkerGlobalScope")}} de un {{domxref("ServiceWorker")}}. Como hijo de {{domxref("ExtendableEvent")}}, asegura que los eventos funcionales como {{domxref("FetchEvent")}} no se llevan a cabo durante la instalación.
- {{domxref("Navigator.serviceWorker") }}
  - : Devuelve un objeto {{domxref("ServiceWorkerContainer")}}, que proporciona acceso al registro, eliminación, actualización y comunicación con los objetos {{domxref("ServiceWorker")}} para el [documento asociado](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window).
- {{domxref("NotificationEvent") }}
  - : Parámetro pasado en el controlador {{domxref("ServiceWorkerGlobalScope.onnotificationclick", "onnotificationclick")}}, el interfaz `NotificationEvent` representa una notificación del evento click ejecutado en {{domxref("ServiceWorkerGlobalScope")}} de un {{domxref("ServiceWorker")}}.
- {{domxref("ServiceWorker") }}
  - : Representa un service worker. Multiples contextos de navegación (e.g. pages, workers, etc.) se pueden asociar con el mismo objeto `ServiceWorker`.
- {{domxref("ServiceWorkerContainer") }}
  - : Proporciona un objeto que representa el service worker como una unidad en el ecosistema de red, incluyendo servicios para registrar, eliminar y actualizar los service workers, y acceder al estado de los service workers y sus registros.
- {{domxref("ServiceWorkerGlobalScope") }}
  - : Representa el contexto global de ejecución de un service worker.
- {{domxref("ServiceWorkerMessageEvent")}} {{deprecated_inline}}
  - : Representa un mensaje envaido a un{{domxref("ServiceWorkerGlobalScope")}}. Observese que este interfaz está considerado obsoleto en navegadores modernos. Los mensajes de service worker no podrán utilizar el interfaz {{domxref("MessageEvent")}}, por consistencia con otras características de mensajería web.
- {{domxref("ServiceWorkerRegistration") }}
  - : Representa un registro service worker.
- {{domxref("SyncEvent")}} {{non-standard_inline}}
  - : El interfaz SyncEvent representa una acción sync ejecutada en el {{domxref("ServiceWorkerGlobalScope")}} de un ServiceWorker.
- {{domxref("SyncManager")}} {{non-standard_inline}}
  - : Proporciona un interfaz para registrar y listar registros sync.
- {{domxref("WindowClient") }}
  - : Representa el ámbito de un cliente service worker que es un documento en un contexto de navegador, controlado por un worker activo. Es un tipo especial de objeto {{domxref("Client")}}, con algunos métodos y propiedades adicionales disponibles.

## Especificaciones

{{Specifications}}

## Ver también

- [ServiceWorker Cookbook](https://github.com/mdn/serviceworker-cookbook)
- [Using Service Workers](/es/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/sw-test)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- [Promises](/es/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Using web workers](/es/docs/Web/Guide/Performance/Using_web_workers)
- [Best Practices for using the VARY header](https://www.fastly.com/blog/best-practices-for-using-the-vary-header)
