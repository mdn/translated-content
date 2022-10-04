---
title: API de Service Worker
slug: Web/API/Service_Worker_API
page-type: web-api-overview
tags:
  - API
  - Landing
  - Aterrizaje
  - Offline
  - Desconectado
  - Fuera de línea
  - Overview
  - Descripción
  - Referencia
  - Reference
  - Service Workers
  - Workers
spec-urls: https://w3c.github.io/ServiceWorker/
---

{{ServiceWorkerSidebar}}

Los *service workers* esencialmente actúan como servidores proxy que se ubican entre las aplicaciones web, el navegador y la red (cuando está disponible). Están destinados, entre otras cosas, a permitir la creación de experiencias fuera de línea —*offline*— efectivas, interceptando peticiones de red y realizando la acción apropiada si la conexión de red está disponible y hay disponible contenido actualizado en el servidor. También permitirán el acceso a notificaciones tipo push y APIs de  sincronización en segundo plano.

## Conceptos y uso de Service worker

Un *service worker* es un [*worker*](/es/docs/Web/API/Worker) manejado por eventos registrado para una fuente y una ruta. Consiste en un archivo JavaScript que controla la página web (o el sitio) con el que está asociado, interceptando y modificando la navegación y las peticiones de recursos, y cacheando los recursos de manera muy granular para ofrecer un control completo sobre cómo la aplicación se debe comportar en ciertas situaciones (la mas obvia es cuando la red no está disponible).

Un *service worker* se ejecuta en un contexto *worker*: por lo tanto no tiene acceso al DOM, y se ejecuta en un hilo distinto al de JavaScript principal de la aplicación, de manera que no es bloqueante. Está diseñado para ser completamente asíncrono, por lo que APIs como [XHR](/es/docs/Web/API/XMLHttpRequest) asíncrono y [Almacenamiento web](/es/docs/Web/API/Web_Storage_API) no se pueden usar dentro de un *service worker*.

Los *service workers* solo funcionan sobre HTTPS, por razones de seguridad. Aún más importante, las conexiones HTTP son susceptibles a la inyección de código malicioso por medio de {{Glossary("MitM", "ataques man in the middle")}}, y dichos ataques podrían ser peores si se permite el acceso a estas potentes APIs. En Firefox, las APIs de *service worker* también están ocultas y no se pueden usar cuando el usuario está en [modo de navegación privada](https://support.mozilla.org/es/kb/navegacion-privada-Firefox-no-guardar-historial-navegacion).

> **Nota:** En Firefox, para realizar pruebas, puedes ejecutar *service workers* a través de HTTP (sin seguridad); simplemente marca la opción **Habilitar Service Workers a través de HTTP (cuando la caja de herramientas está abierta)** en el menú de opciones/engrane de Firefox Devtools.

> **Nota:** A diferencia de los intentos anteriores en esta área, como [AppCache](https://alistapart.com/article/application-cache-is-a-douchebag/), los *service workers* no hacen suposiciones sobre qué estás tratando de hacer, pero luego se rompe cuando esas suposiciones no son exactamente correctas. En cambio, los *service workers* te brindan un control mucho más granular.

> **Nota:** Los *service workers* hacen un uso intensivo de [promesas](/es/docs/Web/JavaScript/Reference/Global_Objects/Promise), ya que generalmente esperarán a que lleguen las respuestas, después de lo cual responden con una acción de éxito o fracaso. La arquitectura de las promesas es ideal para esto.

### Registro

Un *service worker* se registra primero mediante el método {{DOMxRef("ServiceWorkerContainer.register()")}}. Si tiene éxito, tu *service worker* se descargará al cliente e intentará la instalación/activación (ve más abajo) para las URLs a las que accedió el usuario dentro del origen completo o dentro de un subconjunto especificado por el autor.

### Descarga, instalación y activación

En este punto, tu *service worker* observará el siguiente ciclo de vida:

1. Descarga
2. Instalación
3. Activación

El *service worker* se descarga inmediatamente cuando un usuario accede por primera vez a un sitio/página controlada por el *service worker*.

Después de esto, se actualiza cuando:

- Se produce una navegación a una página dentro del alcance.
- Se activa un evento en el *service worker* y no se ha descargado en las últimas 24 horas.

Se intenta la instalación cuando se descubre que el archivo descargado es nuevo, ya sea diferente a un *service worker* existente (comparado por bytes) o es el primer *service worker* encontrado para esta página/sitio.

Si esta es la primera vez que un *service worker* está disponible, se intenta la instalación y, luego de una instalación exitosa, se activa.

Si hay disponible un *service worker* existente, la nueva versión se instala en segundo plano, pero aún no está activada; en este punto, se llama _worker en espera_. Solo se activa cuando ya no hay páginas cargadas que todavía estén usando el antiguo *service worker*. Tan pronto como no haya más páginas para cargar, el nuevo *service worker* se activa (convirtiéndose en el _active worker_). La activación se puede realizar antes mediante {{DOMxRef("ServiceWorkerGlobalScope.skipWaiting()")}} y las páginas existentes se pueden llamar por el *active worker* usando {{DOMxRef("Clients.claim()")}}.

Puedes detectar el evento {{DOMxRef("ServiceWorkerGlobalScope/install_event", "install")}}; una acción estándar es preparar a tu *service worker* para usarlo cuando esto se active, por ejemplo, creando una caché utilizando la API integrada de `storage` y colocando los activos dentro de ella, que querrás para ejecutar tu aplicación sin conexión.

También hay un evento {{DOMxRef("ServiceWorkerGlobalScope/activate_event", "activate")}}. El punto en el que se activa este evento suele ser un buen momento para limpiar cachés antiguas y otras cosas asociadas con la versión anterior de tu *service worker*.

Tu *service worker* puede responder a las solicitudes mediante el evento {{DOMxRef("FetchEvent")}}. Puedes modificar la respuesta a estas solicitudes de la forma que desees, utilizando el método {{DOMxRef("FetchEvent.respondWith()")}}.

> **Nota:** Debido a que los eventos `install`/`activate` pueden tardar un poco en completarse, la especificación del *service worker* proporciona un método {{DOMxRef("ExtendableEvent.waitUntil", "waitUntil()")}}. Una vez que se invoca en los eventos `install` o `activate` con una promesa, los eventos funcionales como `fetch` y `push` esperarán hasta que la promesa se resuelva con éxito.

Para ver un tutorial completo que muestra cómo crear tu primer ejemplo básico, lee [Usar *Service Workers*](/es/docs/Web/API/Service_Worker_API/Using_Service_Workers).

## Otras ideas de casos de uso

Los *service workers* también están destinados a ser utilizados para cosas como:

- Sincronización de datos en segundo plano.
- Responder a solicitudes de recursos de otros orígenes.
- Recibir actualizaciones centralizadas de datos costosos de calcular, como la geolocalización o el giroscopio, para que varias páginas puedan utilizar un conjunto de datos.
- Compilación de lado del cliente y gestión de dependencias de CoffeeScript, less, módulos CJS/AMD, etc. para fines de desarrollo.
- Ganchos para servicios en segundo plano.
- Plantillas personalizadas basadas en ciertos patrones de URL.
- Mejoras en el rendimiento, por ejemplo, obtención previa de recursos que es probable que el usuario necesite en un futuro próximo, como las próximas imágenes de un álbum de fotos.

En el futuro, los *service workers* podrán hacer otras cosas útiles para la plataforma web que los acercarán a la viabilidad de la aplicación nativa. Curiosamente, otras especificaciones pueden y comenzarán a hacer uso del contexto del *service worker*, por ejemplo:

- [Sincronización en segundo plano](https://github.com/WICG/background-sync): inicia un *service worker* incluso cuando no haya usuarios en el sitio, para que las cachés se puedan actualizar, etc.
- [Reacción a mensajes push](/en-US/docs/Web/API/Push_API): Inicia un *service worker* para enviar a los usuarios un mensaje para informarles que hay nuevo contenido disponible.
- Reaccionar a una hora y fecha en particular.
- Entrar en un perímetro virtual —*geo-fence*.

## Interfaces

- {{DOMxRef("Cache")}} {{Experimental_Inline}}
  - : Representa el almacenamiento para pares de objetos {{DOMxRef("Request")}} / {{DOMxRef("Response")}} que se almacenan en caché como parte del ciclo de vida del {{DOMxRef("ServiceWorker")}}.
- {{DOMxRef("CacheStorage")}} {{Experimental_Inline}}
  - : Representa el almacenamiento de objetos {{DOMxRef("Cache")}}. Proporciona un directorio maestro de todas las cachés con nombre a las que puede acceder un {{DOMxRef("ServiceWorker")}} y mantiene una asignación de nombres de cadena a los objetos {{DOMxRef("Cache")}} correspondientes.
- {{DOMxRef("Client")}} {{Experimental_Inline}}
  - : Representa el alcance de un cliente de *service worker*. Un cliente de *service worker* es un documento en un contexto de navegador o un {{DOMxRef("SharedWorker")}}, que está controlado por un _active worker_.
- {{DOMxRef("Clients")}} {{Experimental_Inline}}
  - : Representa un contenedor para una lista de objetos {{DOMxRef("Client")}}; la principal forma de acceder a los clientes del *service worker* activo en el origen actual.
- {{DOMxRef("ExtendableEvent")}} {{Experimental_Inline}}
  - : Extiende la vida útil de los eventos `install` y `activate` distribuidos en {{DOMxRef("ServiceWorkerGlobalScope")}}, como parte del ciclo de vida del *service worker*. Esto garantiza que los eventos funcionales (como {{DOMxRef("FetchEvent")}}) no se envíen a {{DOMxRef("ServiceWorker")}}, hasta que actualice los esquemas de la base de datos y elimine las entradas de caché obsoletas, etc.
- {{DOMxRef("ExtendableMessageEvent")}} {{Experimental_Inline}}
  - : El objeto `event` de un evento {{DOMxRef("ServiceWorkerGlobalScope/message_event", "message")}} activado en un *service worker* (cuando se recibe un mensaje del canal en {{DOMxRef("ServiceWorkerGlobalScope")}} de otro contexto) — extiende la vida útil de dichos eventos.
- {{DOMxRef("FetchEvent")}} {{Experimental_Inline}}
  - : El parámetro pasado al controlador {{DOMxRef("ServiceWorkerGlobalScope.fetch_event", "onfetch")}}, `FetchEvent` representa una acción de búsqueda que se envía en {{DOMxRef("ServiceWorkerGlobalScope")}} de un {{DOMxRef("ServiceWorker")}}. Contiene información sobre la petición y la respuesta resultante, y proporciona el método {{DOMxRef("FetchEvent.respondWith", "FetchEvent.respondWith()")}}, que nos permite proporcionar una respuesta arbitraria a la página controlada.
- {{DOMxRef("InstallEvent")}} {{Experimental_Inline}}
  - : El parámetro pasado al controlador {{DOMxRef("ServiceWorkerGlobalScope.install_event", "oninstall")}}, la interfaz `InstallEvent` representa una acción de instalación que se envía en {{DOMxRef("ServiceWorkerGlobalScope")}} de un {{DOMxRef("ServiceWorker")}}. Como elemento secundario de {{DOMxRef("ExtendableEvent")}}, garantiza que los eventos funcionales como {{DOMxRef("FetchEvent")}} no se envíen durante la instalación.
- {{DOMxRef("NavigationPreloadManager")}} {{Experimental_Inline}}
  - : Proporciona métodos para administrar la carga previa de recursos con un *service worker*.
- {{DOMxRef("Navigator.serviceWorker")}}
  - : Devuelve un objeto {{DOMxRef("ServiceWorkerContainer")}}, que proporciona acceso al registro, eliminación, actualización y comunicación con los objetos {{DOMxRef("ServiceWorker")}} para el [documento asociado](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window).
- {{DOMxRef("NotificationEvent")}} {{Experimental_Inline}}
  - : El parámetro pasado al controlador {{DOMxRef("ServiceWorkerGlobalScope.notificationclick_event", "onnotificationclick")}}, la interfaz `NotificationEvent` representa un evento de notificación de clic que se envía en {{DOMxRef("ServiceWorkerGlobalScope")}} de un {{DOMxRef("ServiceWorker")}}.
- {{DOMxRef("ServiceWorker")}} {{Experimental_Inline}}
  - : Representa un *service worker*. Se pueden asociar múltiples contextos de navegación (por ejemplo, páginas, *workers*, etc.) con el mismo objeto `ServiceWorker`.
- {{DOMxRef("ServiceWorkerContainer")}} {{Experimental_Inline}}
  - : Proporciona un objeto que representa al *service worker* como una unidad general en el ecosistema de la red, incluidas las funciones para registrar, cancelar el registro y actualizar los *service workers*, y acceder al estado de los *service workers* y sus registros.
- {{DOMxRef("ServiceWorkerGlobalScope")}}
  - : Representa el contexto de ejecución global de un *service worker*.
- {{DOMxRef("MessageEvent")}}
  - : Representa un mensaje enviado a un {{DOMxRef("ServiceWorkerGlobalScope")}}.
- {{DOMxRef("ServiceWorkerRegistration")}} {{Experimental_Inline}}
  - : Representa un registro de *service worker*.
- {{DOMxRef("SyncEvent")}} {{Non-standard_Inline}}
  - : La interfaz `SyncEvent` representa una acción de sincronización que se envía en {{DOMxRef("ServiceWorkerGlobalScope")}} de un *ServiceWorker*.
- {{DOMxRef("SyncManager")}} {{Non-standard_Inline}}
  - : Proporciona una interfaz para registrar y enumerar los registros de sincronización.
- {{DOMxRef("WindowClient")}} {{Experimental_Inline}}
  - : Representa el alcance de un cliente del *service worker* que es un documento en un contexto de navegador, controlado por un _active worker_. Este es un tipo especial de objeto {{DOMxRef("Client")}}, con algunos métodos y propiedades adicionales disponibles.

## Especificaciones

{{Specifications}}

## Ve también

- [Manual de *ServiceWorker*](https://github.com/mdn/serviceworker-cookbook)
- [Usar *Service Workers*](/es/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Código básico de ejemplo para *Service workers*](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [¿Está listo el *ServiceWorker*?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
