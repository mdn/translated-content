---
title: ServiceWorkerContainer.register()
slug: Web/API/ServiceWorkerContainer/register
translation_of: Web/API/ServiceWorkerContainer/register
---
{{SeeCompatTable}}{{APIRef("Service Workers API")}}

Die **`register()`** Methode der [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer) Schnittstelle erstellt oder aktualisiert eine [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) für die gegebene `scriptURL`.

Nach erfolgreicher Registrierung verwendet die Service Worker Registrierung die übergebene `scriptURL` und ihren Bereich für den Navigationsabgleich. Die Methode gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, welches zu einer [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) aufgelöst wird. Die Funktion kann bedingungslos aufgerufen werden - Es muss vorher nicht kontrolliert werden, ob eine aktive Registrierung vorhanden ist.

Es entstehen häufig Verwirrungen über die Bedeutung und Verwendung des `scope`. Da ein ServiceWorker keinen größeren Bereich abdecken kann als seinen einen Pfad, sollte man den Parameter nur verwenden, wenn man einen kleineren Bereich als den Standardbereich abdecken will.

## Syntax

```js
ServiceWorkerContainer.register(scriptURL, options).then(function(ServiceWorkerRegistration) {
  // Do something with ServiceWorkerRegistration.
});
```

### Parameter

- `scriptURL`
  - : Die Url des Service Workers Scripts.
- `options` `{{optional_inline}}`
  - : Ein Object, welches verschiedene Registrierungsoptionen beinhaltet. Zur Zeit stehen folgende Optionen zur Verfügung:\* `scope`: Ein [`USVString`](/de/docs/Web/API/USVString), welcher eine URL darstellt, die zur Festlegung des Bereiches des Service Workers verwendet wird. Dies ist normalerweise eine relative URL. Der Standardwert ist die URL, die man bekommen würde, wenn man './' mit dem Pfad des Service Worker Scripts verwenden würde.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), welches zu einem [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) Objekt aufgelöst wird.

## Beispiele

```js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js', {scope: './'}).then(function(registration) {
    document.querySelector('#status').textContent = 'succeeded';
  }).catch(function(error) {
    document.querySelector('#status').textContent = error;
  });
} else {
  // Der verwendete Browser unterstützt Service Worker nicht.
  var aElement = document.createElement('a');
  aElement.href = 'http://www.chromium.org/blink/serviceworker/service-worker-faq';
  aElement.textContent = 'unavailable';
  document.querySelector('#status').appendChild(aElement);
}
```

## Spezifikationen

| Spezifikation                                                                                                        | Status                               | Kommentar            |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------------------- |
| {{SpecName('Service Workers', '#service-worker-container', 'ServiceWorkerContainer')}} | {{Spec2('Service Workers')}} | Initiale Definition. |

## Browserkompatiblität

{{Compat}}
