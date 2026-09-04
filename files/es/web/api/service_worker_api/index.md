---
title: Service Worker API
slug: Web/API/Service_Worker_API
l10n:
  sourceCommit: 73ca80b86a348f88f51fdb8f9441c114b76e94f1
---

{{DefaultAPISidebar("Service Workers API")}}{{AvailableInWorkers}}

Los service workers actúan esencialmente como servidores proxy que se sitúan entre las aplicaciones web, el navegador y la red (cuando está disponible). Están destinados, entre otras cosas, a permitir la creación de experiencias offline efectivas, interceptar peticiones de red y realizar la acción apropiada según si la red está disponible y si hay contenidos actualizados en el servidor. También permiten el acceso a notificaciones push y APIs de sincronización en segundo plano.

> [!NOTE]
> Los service workers son un tipo de web worker. Consulte [Web workers](/es/docs/Web/API/Web_Workers_API) para información general sobre los tipos de workers y casos de uso.

## Conceptos y uso de service workers

Un service worker es un [worker](/es/docs/Web/API/Worker) controlado por eventos, registrado para un origen y una ruta. Consiste en un archivo JavaScript que puede controlar la página web o sitio con el que está asociado, interceptando y modificando las peticiones de navegación y recursos, y almacenando en caché los recursos de manera muy granular para ofrecer un control completo sobre cómo se comporta la aplicación en ciertas situaciones (la más obvia es cuando la red no está disponible).

Los service workers se ejecutan en un contexto worker: por lo tanto, no tienen acceso al DOM y se ejecutan en un hilo distinto al JavaScript principal que alimenta la aplicación. Son no bloqueantes y están diseñados para ser completamente asíncronos. Como consecuencia, APIs como [XHR](/es/docs/Web/API/XMLHttpRequest) síncrono y [Web Storage](/es/docs/Web/API/Web_Storage_API) no se pueden usar dentro de un service worker.

Los service workers no pueden importar módulos JavaScript dinámicamente, y [`import()`](/es/docs/Web/JavaScript/Reference/Operators/import) lanzará un error si se invoca en el ámbito global de un service worker. Las importaciones estáticas usando la sentencia [`import`](/es/docs/Web/JavaScript/Reference/Statements/import) sí están permitidas.

Los service workers solo están disponibles en [contextos seguros](/es/docs/Web/Security/Defenses/Secure_Contexts): esto significa que su documento se sirve sobre HTTPS, aunque los navegadores también tratan `http://localhost` como un contexto seguro para facilitar el desarrollo local. Las conexiones HTTP son susceptibles a inyección de código malicioso mediante ataques de {{Glossary("MitM", "intermediario")}}, y tales ataques podrían ser peores si se permitiera acceso a estas potentes APIs.

> [!NOTE]
> En Firefox, para realizar pruebas se pueden ejecutar service workers sobre HTTP (de forma insegura); simplemente marque la opción **Habilitar Service Workers sobre HTTP (cuando la caja de herramientas esté abierta)** en el menú de opciones/engranaje de las herramientas de desarrollo de Firefox.

> [!NOTE]
> A diferencia de intentos anteriores en esta área como [AppCache](https://alistapart.com/article/application-cache-is-a-douchebag/), los service workers no hacen suposiciones sobre lo que se intenta hacer para luego fallar cuando esas suposiciones no son exactamente correctas. En su lugar, los service workers ofrecen un control mucho más granular.

> [!NOTE]
> Los service workers hacen un uso intensivo de las [promesas](/es/docs/Web/JavaScript/Reference/Global_Objects/Promise), ya que generalmente esperarán a que lleguen las respuestas y luego responderán con una acción de éxito o fracaso. La arquitectura de promesas es ideal para esto.

### Registro

Un service worker se registra primero mediante el método {{DOMxRef("ServiceWorkerContainer.register()")}}. Si tiene éxito, el service worker se descargará en el cliente e intentará la instalación/activación (ver más abajo) para las URLs accedidas por el usuario dentro de todo el origen, o un subconjunto especificado.

### Descarga, instalación y activación

En este punto, el service worker seguirá el siguiente ciclo de vida:

1. Descarga
2. Instalación
3. Activación

El service worker se descarga inmediatamente cuando un usuario accede por primera vez a un sitio/página controlados por un service worker.

Después de eso, se actualiza cuando:

- Se produce una navegación a una página dentro del alcance.
- Se dispara un evento en el service worker y no se ha descargado en las últimas 24 horas.

La instalación se intenta cuando el archivo descargado resulta ser nuevo, ya sea diferente a un service worker existente (comparado byte a byte), o el primer service worker encontrado para esta página/sitio.

Si es la primera vez que un service worker está disponible, se intenta la instalación; tras una instalación exitosa, se activa.

Si ya hay un service worker existente disponible, la nueva versión se instala en segundo plano, pero aún no se activa; en ese momento se le llama _worker en espera_. Solo se activa cuando ya no hay páginas cargadas que aún usen el service worker antiguo. En cuanto no quedan más páginas por cargar, el nuevo service worker se activa (convirtiéndose en el _worker activo_). La activación puede ocurrir antes usando {{DOMxRef("ServiceWorkerGlobalScope.skipWaiting()")}} y las páginas existentes pueden ser reclamadas por el worker activo usando {{DOMxRef("Clients.claim()")}}.

Se puede escuchar el evento {{domxref("ServiceWorkerGlobalScope/install_event", "install")}}; una acción estándar es preparar el service worker para su uso cuando se dispara, por ejemplo creando una caché usando la API de almacenamiento incorporada, y colocando dentro los recursos que se necesitarán para ejecutar la aplicación sin conexión.

También existe un evento {{domxref("ServiceWorkerGlobalScope/activate_event", "activate")}}. El momento en que se dispara este evento es generalmente un buen momento para limpiar cachés antiguas y otras cosas asociadas con la versión anterior del service worker.

El service worker puede responder a peticiones usando el evento {{DOMxRef("FetchEvent")}}. Se puede modificar la respuesta a estas peticiones de cualquier manera deseada, usando el método {{DOMxRef("FetchEvent.respondWith()")}}.

> [!NOTE]
> Dado que los eventos `install`/`activate` pueden tardar un tiempo en completarse, la especificación de service workers proporciona un método {{domxref("ExtendableEvent.waitUntil", "waitUntil()")}}. Una vez invocado en eventos `install` o `activate` con una promesa, los eventos funcionales como `fetch` y `push` esperarán hasta que la promesa se resuelva exitosamente.

Para un tutorial completo que muestra cómo construir un primer ejemplo básico, lea [Uso de Service Workers](/es/docs/Web/API/Service_Worker_API/Using_Service_Workers).

### Uso de enrutamiento estático para controlar cómo se obtienen los recursos

Los service workers pueden incurrir en un costo de rendimiento innecesario: cuando una página se carga por primera vez después de un tiempo, el navegador tiene que esperar a que el service worker se inicie y ejecute para saber qué contenido cargar y si debe provenir de una caché o de la red.

Si ya se sabe de antemano de dónde deben obtenerse ciertos contenidos, se puede omitir el service worker por completo y obtener los recursos de forma inmediata. El método {{domxref("InstallEvent.addRoutes()")}} se puede usar para implementar este caso de uso y más.

## Otras ideas de casos de uso

Los service workers también están pensados para usarse en cosas como:

- Sincronización de datos en segundo plano.
- Responder a peticiones de recursos desde otros orígenes.
- Recibir actualizaciones centralizadas de datos costosos de calcular, como geolocalización o giroscopio, de manera que múltiples páginas puedan usar un mismo conjunto de datos.
- Compilación del lado del cliente y gestión de dependencias de CoffeeScript, Less, módulos CJS/AMD, etc., para desarrollo.
- Hooks para servicios en segundo plano.
- Plantillas personalizadas basadas en ciertos patrones de URL.
- Mejoras de rendimiento, por ejemplo, pre-obtención de recursos que el usuario probablemente necesitará pronto, como las siguientes imágenes de un álbum de fotos.
- Simulación de APIs.

En el futuro, los service workers podrán hacer varias cosas útiles para la plataforma web que la acercarán a la viabilidad de aplicaciones nativas. Resulta interesante que otras especificaciones pueden y van a empezar a hacer uso del contexto de service workers, por ejemplo:

- [Sincronización en segundo plano](https://github.com/WICG/background-sync): Iniciar un service worker aunque no haya usuarios en el sitio, para que las cachés se puedan actualizar, etc.
- [Reacción a mensajes push](/es/docs/Web/API/Push_API): Iniciar un service worker para enviar a los usuarios un mensaje indicando que hay nuevo contenido disponible.
- Reacción ante una fecha y hora determinadas.
- Entrada en una geocerca.

## Interfaces

- {{DOMxRef("Cache")}}
  - : Representa el almacenamiento para pares de objetos {{DOMxRef("Request")}} / {{DOMxRef("Response")}} que se almacenan en caché como parte del ciclo de vida del {{DOMxRef("ServiceWorker")}}.
- {{DOMxRef("CacheStorage")}}
  - : Representa el almacenamiento para objetos {{DOMxRef("Cache")}}. Proporciona un directorio maestro de todas las cachés nombradas a las que puede acceder un {{DOMxRef("ServiceWorker")}}, y mantiene una correspondencia de nombres de cadena a los objetos {{DOMxRef("Cache")}} correspondientes.
- {{DOMxRef("Client")}}
  - : Representa el ámbito de un cliente de service worker. Un cliente de service worker es un documento en un contexto de navegador o un {{DOMxRef("SharedWorker")}}, controlado por un worker activo.
- {{DOMxRef("Clients")}}
  - : Representa un contenedor para una lista de objetos {{DOMxRef("Client")}}; la vía principal para acceder a los clientes de service worker activos en el origen actual.
- {{DOMxRef("ExtendableEvent")}}
  - : Extiende el tiempo de vida de los eventos `install` y `activate` despachados en el {{DOMxRef("ServiceWorkerGlobalScope")}}, como parte del ciclo de vida del service worker. Esto asegura que los eventos funcionales (como {{DOMxRef("FetchEvent")}}) no se despachan al {{DOMxRef("ServiceWorker")}} hasta que actualiza los esquemas de base de datos, elimina entradas de caché obsoletas, etc.
- {{DOMxRef("ExtendableMessageEvent")}}
  - : El objeto de evento de un evento {{domxref("ServiceWorkerGlobalScope/message_event", "message")}} disparado en un service worker (cuando se recibe un mensaje de canal en el {{DOMxRef("ServiceWorkerGlobalScope")}} desde otro contexto), extiende el tiempo de vida de tales eventos.
- {{DOMxRef("FetchEvent")}}
  - : El parámetro pasado al controlador {{DOMxRef("ServiceWorkerGlobalScope.fetch_event", "onfetch")}}, `FetchEvent` representa una acción de fetch despachada en el {{DOMxRef("ServiceWorkerGlobalScope")}} de un {{DOMxRef("ServiceWorker")}}. Contiene información sobre la petición y la respuesta resultante, y proporciona el método {{DOMxRef("FetchEvent.respondWith", "FetchEvent.respondWith()")}}, que permite proporcionar una respuesta arbitraria a la página controlada.
- {{DOMxRef("InstallEvent")}}
  - : El parámetro pasado a la función controladora de un evento {{DOMxRef("ServiceWorkerGlobalScope.install_event", "install")}}, la interfaz `InstallEvent` representa una acción de instalación despachada en el {{DOMxRef("ServiceWorkerGlobalScope")}} de un {{DOMxRef("ServiceWorker")}}. Como hijo de {{DOMxRef("ExtendableEvent")}}, asegura que los eventos funcionales como {{DOMxRef("FetchEvent")}} no se despachan durante la instalación.
- {{DOMxRef("NavigationPreloadManager")}}
  - : Proporciona métodos para gestionar la precarga de recursos con un service worker.
- {{DOMxRef("ServiceWorker")}}
  - : Representa un service worker. Múltiples contextos de navegación (por ejemplo, páginas, workers, etc.) pueden estar asociados con el mismo objeto `ServiceWorker`.
- {{DOMxRef("ServiceWorkerContainer")}}
  - : Proporciona un objeto que representa el service worker como una unidad global en el ecosistema de red, incluyendo servicios para registrar, dar de baja y actualizar service workers, y acceder al estado de los service workers y sus registros.
- {{DOMxRef("ServiceWorkerGlobalScope")}}
  - : Representa el contexto de ejecución global de un service worker.
- {{DOMxRef("ServiceWorkerRegistration")}}
  - : Representa un registro de service worker.
- {{DOMxRef("WindowClient")}}
  - : Representa el ámbito de un cliente de service worker que es un documento en un contexto de navegador, controlado por un worker activo. Es un tipo especial de objeto {{DOMxRef("Client")}}, con algunos métodos y propiedades adicionales disponibles.

### Extensiones a otras interfaces

- {{DOMxRef("Window.caches")}} y {{domxref("WorkerGlobalScope.caches")}}
  - : Devuelve el objeto {{domxref("CacheStorage")}} asociado al contexto actual.
- {{DOMxRef("Navigator.serviceWorker")}} y {{DOMxRef("WorkerNavigator.serviceWorker")}}
  - : Devuelve un objeto {{DOMxRef("ServiceWorkerContainer")}}, que proporciona acceso al registro, eliminación, actualización y comunicación con los objetos {{DOMxRef("ServiceWorker")}} para el [documento asociado](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window).

## Especificaciones

{{Specifications}}

## Véase también

- [Uso de Service Workers](/es/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Ciclo de vida de Service Worker](https://web.dev/articles/service-worker-lifecycle)
- [Ejemplo básico de código de service worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- APIs web relacionadas con Service Worker API:
  - {{domxref("Background Fetch API", "", "", "nocode")}}
  - {{domxref("Background Synchronization API", "", "", "nocode")}}
  - {{domxref("Content Index API", "", "", "nocode")}}
  - {{domxref("Cookie Store API", "", "", "nocode")}}
  - {{domxref("Notifications API", "", "", "nocode")}}
  - {{domxref("Web-based Payment Handler API", "", "", "nocode")}}
  - {{domxref("Push API", "", "", "nocode")}}
  - {{domxref("Web Periodic Background Synchronization API", "", "", "nocode")}}
