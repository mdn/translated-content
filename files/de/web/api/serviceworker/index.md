---
title: ServiceWorker
slug: Web/API/ServiceWorker
translation_of: Web/API/ServiceWorker
---
{{APIRef("Service Workers API")}}

Die **`ServiceWorker-Schnittstelle` **der [Service Worker-API](/de/docs/Web/API/Service_Worker_API) stellt einen Verweis auf einen Serviceworker bereit. Mehrere "Glossary"-Glossar-("Browsing-Kontexte", "Browsing-Kontexte") (z. B. .pages, Arbeitskräfte usw.) können demselben Service-Worker zugeordnet werden, jeder durch ein eindeutiges Objekt.`ServiceWorker`

Ein Objekt ist in der Eigenschaft ""ServiceWorkerRegistration.active"" und in der Eigenschaft ""ServiceWorkerContainer.controller"" verfügbar – dies ist ein Service-Worker, der aktiviert wurde und die Seite steuert (der Service-Worker wurde erfolgreich registriert, und die gesteuerte Seite wurde neu geladen).)`ServiceWorker`

Die Schnittstelle wird eine Reihe von Lebenszyklusereignissen – und – und funktionalen Ereignissen einschließlich ausgelöst. Einem Objekt ist ein Objekt zugeordnet, dem der Lebenszyklus von "ServiceWorker.state") zugeordnet ist.` ServiceWorker``install``activate``fetch``ServiceWorker `

## Properties

_The `ServiceWorker` interface inherits properties from its parent, {{domxref("Worker")}}._

- {{domxref("ServiceWorker.scriptURL")}} {{readonlyinline}}
  - : Returns the serialized script URL defined as part of {{domxref("ServiceWorkerRegistration")}}. The URL must be on the same origin as the document that registers the .` ServiceWorker``ServiceWorker `
- {{domxref("ServiceWorker.state")}} {{readonlyinline}}
  - : Returns the state of the service worker. It returns one of the following values: , , , or .` installing``installed,``activating``activated``redundant `

### Event handlers

- {{domxref("ServiceWorker.onstatechange")}} {{readonlyinline}}
  - : An {{domxref("EventListener")}} property called whenever an event of type is fired; it is basically fired anytime the {{domxref("ServiceWorker.state")}} changes.`statechange`

## Methods

_The `ServiceWorker` interface inherits methods from its parent, {{domxref("Worker")}}, with the exception of {{domxref("Worker.terminate")}} — this should not be accessible from service workers._

## Examples

This code snippet is from the [service worker registration-events sample](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/registration-events/index.html) ([live demo](https://googlechrome.github.io/samples/service-worker/registration-events/)). The code listens for any change in the {{domxref("ServiceWorker.state")}} and returns its value.

```js
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js', {
        scope: './'
    }).then(function (registration) {
        var serviceWorker;
        if (registration.installing) {
            serviceWorker = registration.installing;
            document.querySelector('#kind').textContent = 'installing';
        } else if (registration.waiting) {
            serviceWorker = registration.waiting;
            document.querySelector('#kind').textContent = 'waiting';
        } else if (registration.active) {
            serviceWorker = registration.active;
            document.querySelector('#kind').textContent = 'active';
        }
        if (serviceWorker) {
            // logState(serviceWorker.state);
            serviceWorker.addEventListener('statechange', function (e) {
                // logState(e.target.state);
            });
        }
    }).catch (function (error) {
        // Something went wrong during registration. The service-worker.js file
        // might be unavailable or contain a syntax error.
    });
} else {
    // The current browser doesn't support service workers.
}
```

## Specifications

| Specification                                                                            | Status                               | Comment             |
| ---------------------------------------------------------------------------------------- | ------------------------------------ | ------------------- |
| {{SpecName('Service Workers', '#serviceworker', 'ServiceWorker')}} | {{Spec2('Service Workers')}} | Initial definition. |

## Browser compatibility

{{Compat("api.ServiceWorker")}}

## See also

- [ServiceWorker Cookbook](https://serviceworke.rs)
- [Using Service Workers](/de/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [Service worker basic code example](https://github.com/mdn/sw-test)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [Using web workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
