---
title: ServiceWorker
slug: Web/API/ServiceWorker
l10n:
  sourceCommit: 5d29bef0815f8cc4b5b152b9ee1ab53f002ee617
---

{{securecontext_header}}{{APIRef("Service Workers API")}}{{AvailableInWorkers}}

La interfaz **`ServiceWorker`** de la [API de Service Worker](/es/docs/Web/API/Service_Worker_API) proporciona una referencia a un service worker. Múltiples {{glossary("browsing context", "contextos de navegación")}} (por ejemplo, páginas, workers, etc.) pueden estar asociados con el mismo service worker, cada uno a través de un objeto `ServiceWorker` único.

Se puede acceder a un objeto `ServiceWorker` a través de varias propiedades:

- {{domxref("ServiceWorkerRegistration.active")}}
- {{domxref("ServiceWorkerGlobalScope.serviceWorker")}}
- {{domxref("ServiceWorkerContainer.controller")}} — cuando el service worker está en estado `activating` o `activated`
- {{domxref("ServiceWorkerRegistration.installing")}} — cuando el service worker está en estado `installing`
- {{domxref("ServiceWorkerRegistration.waiting")}} — cuando el service worker está en estado `installed`

La propiedad {{domxref("ServiceWorker.state")}} y el evento [`statechange`](/es/docs/Web/API/ServiceWorker/statechange_event) se pueden usar para comprobar y observar los cambios en el estado del ciclo de vida del service worker asociado al objeto.
Los eventos relacionados del ciclo de vida, como [`install`](/es/docs/Web/API/ServiceWorkerGlobalScope/install_event) y [`activate`](/es/docs/Web/API/ServiceWorkerGlobalScope/activate_event), se disparan en el propio service worker.

Los service workers permiten la importación estática de [módulos ECMAScript](/es/docs/Web/JavaScript/Guide/Modules), si son compatibles, usando [`import`](/es/docs/Web/JavaScript/Reference/Statements/import).
La importación dinámica no está permitida por la especificación; llamar a [`import()`](/es/docs/Web/JavaScript/Reference/Operators/import) lanzará una excepción.

Los service workers solo se pueden registrar en el ámbito Window en algunos o todos los navegadores, ya que el objeto `ServiceWorker` no está expuesto en {{domxref("DedicatedWorkerGlobalScope")}} ni en {{domxref("SharedWorkerGlobalScope")}}.
Consulta la [compatibilidad con navegadores](#compatibilidad_con_navegadores) para más información.

{{InheritanceDiagram}}

## Propiedades de instancia

_La interfaz `ServiceWorker` hereda propiedades de su padre, {{domxref("EventTarget")}}._

- {{domxref("ServiceWorker.scriptURL")}} {{ReadOnlyInline}}
  - : Devuelve la URL del script serializado del `ServiceWorker` definido como parte de {{domxref("ServiceWorkerRegistration")}}. La URL debe tener el mismo origen que el documento que registra el `ServiceWorker`.
- {{domxref("ServiceWorker.state")}} {{ReadOnlyInline}}
  - : Devuelve el estado del service worker. Retorna uno de los siguientes valores: `parsed`, `installing`, `installed`, `activating`, `activated`, o `redundant`.

## Métodos de instancia

_La interfaz `ServiceWorker` hereda métodos de su padre, {{domxref("EventTarget")}}._

- {{domxref("ServiceWorker.postMessage()")}}
  - : Envía un mensaje — que consiste en cualquier objeto JavaScript [clonable de forma estructurada](/es/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) — al service worker. El mensaje se transmite al service worker mediante un evento {{domxref("ServiceWorkerGlobalScope.message_event", "message")}} en su ámbito global.

## Eventos

- {{domxref("ServiceWorker.statechange_event", "statechange")}}

  - : Se dispara cuando {{domxref("ServiceWorker.state")}} cambia.

- {{domxref("ServiceWorker.error_event", "error")}}
  - : Se dispara cuando ocurre un error dentro del objeto `ServiceWorker`.

## Ejemplos

Este fragmento de código proviene del [ejemplo de eventos de registro de service worker](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/registration-events/index.html) ([demo en vivo](https://googlechrome.github.io/samples/service-worker/registration-events/)). El código escucha cualquier cambio en {{domxref("ServiceWorker.state")}} y devuelve su valor.

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("service-worker.js", {
      scope: "./",
    })
    .then((registration) => {
      let serviceWorker;
      if (registration.installing) {
        serviceWorker = registration.installing;
        document.querySelector("#kind").textContent = "installing";
      } else if (registration.waiting) {
        serviceWorker = registration.waiting;
        document.querySelector("#kind").textContent = "waiting";
      } else if (registration.active) {
        serviceWorker = registration.active;
        document.querySelector("#kind").textContent = "active";
      }
      if (serviceWorker) {
        // logState(serviceWorker.state);
        serviceWorker.addEventListener("statechange", (e) => {
          // logState(e.target.state);
        });
      }
    })
    .catch((error) => {
      // Algo salió mal durante el registro. El archivo service-worker.js
      // podría no estar disponible o contener un error de sintaxis.
    });
} else {
  // El navegador actual no soporta service workers.
  // Quizás es demasiado antiguo o no estamos en un Contexto Seguro.
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [The Offline Cookbook](https://web.dev/articles/offline-cookbook) (service workers)
- [Uso de Service Workers](/es/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Ejemplo básico de código de service worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Uso de web workers](/es/docs/Web/API/Web_Workers_API/Using_web_workers)
