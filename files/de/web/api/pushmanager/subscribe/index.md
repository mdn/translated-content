---
title: PushManager.subscribe()
slug: Web/API/PushManager/subscribe
translation_of: Web/API/PushManager/subscribe
---
{{SeeCompatTable}}{{ApiRef("Push API")}}

Die Methode **`subscribe()`** des {{domxref("PushManager")}} Interfaces meldet die API an einem Push-Service an.

Sie bekommt {{jsxref("Promise")}} als Rückgabewert, welcher sich zu einem {{domxref("PushSubscription")}} Objekt auflösen lässt, und weitere Details der Push-Subscription enthält. Eine neue Push-Subscription wird erstellt falls der aktuelle Service-Worker nicht bereits eine existierende Push-Subscription enthält.

## Syntax

    ​PushManager.subscribe(options).then(function(pushSubscription) { ... } );

### Parameter

- `options {{optional_inline}}`
  - : Ein Objekt das optionale Konfigurationsparameter enthält. Das Objekt kann die folgenden Eigenschaften (properties) haben:\* `userVisibleOnly`: Ein boolscher Wert der anzeigt, dass die zurückgegebene Push-Subscription nur für Nachrichten genutz wird, dessen Effekt den sie (die Push-Subscription) auslöst, auch nur für den Anwender sichtbar sind.

### Returnwert

{{jsxref("Promise")}} welcher ein {{domxref("PushSubscription")}} Objekt auflöst.

## Beispiel

```js
this.onpush = function(event) {
  console.log(event.data);
  /**********************************************
  ++ Die Überstzung des Kommentars, folgt noch ++
  **********************************************/
  // From here we can write the data to IndexedDB, send it to any open
  // windows, display a notification, etc.
}

navigator.serviceWorker.register('serviceworker.js').then(
  function(serviceWorkerRegistration) {
    serviceWorkerRegistration.pushManager.subscribe().then(
      function(pushSubscription) {
        console.log(pushSubscription.endpoint);
        /**********************************************
        ++ Die Überstzung des Kommentars, folgt noch ++
        **********************************************/
        // The push subscription details needed by the application
        // server are now available, and can be sent to it using,
        // for example, an XMLHttpRequest.
      }, function(error) {
        /**********************************************
        ++ Die Überstzung des Kommentars, folgt noch ++
        **********************************************/
        // During development it often helps to log errors to the
        // console. In a production environment it might make sense to
        // also report information about errors back to the
        // application server.
        console.log(error);
      }
    );
  });
```

## Spezifikationen

| Spezifikation                                                                                                                                                                | Status                       | Kommentar           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------- |
| {{SpecName('Push API', '#widl-PushManager-subscribe-Promise-PushSubscription--PushSubscriptionOptions-options', 'subscribe()')}} | {{Spec2('Push API')}} | Initial-Definition. |

## Browser-Kompatibilität

{{Compat}}

## Weitere Informationen

- [Die Push API verwenden](/de/docs/Web/API/Push_API/Using_the_Push_API)
