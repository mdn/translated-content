---
title: Cache.add()
slug: Web/API/Cache/add
translation_of: Web/API/Cache/add
---
{{APIRef("Service Workers API")}}

Die **`add()`** Methode des {{domxref("Cache")}} Interface nimmt eine URL, ruft sie ab und fügt das resultierende Objekt zum gegebenen Cache. Die `add()` Methode gleicht funktional dem folgenden:

```js
fetch(url).then(function(response) {
  if (!response.ok) {
    throw new TypeError('bad response status');
  }
  return cache.put(url, response);
})
```

Für komplexere Operationen müssen Sie {{domxref("Cache.put","Cache.put()")}} direkt verwenden.

> **Hinweis:** `add()` wird alle zuvor im Cache gespeicherten Schlüssel-Wert-Paare die der Request gleichen überschreiben.

## Syntax

```js
cache.add(request).then(function() {
  // request wurde dem Cache hinzugefügt
});
```

### Parameter

- request
  - : Die Request, die dem Cache hinzugefügt werden soll. Dies kann ein {{domxref("Request")}} Objekt oder eine URL sein.

### Rückgabewert

Eine {{jsxref("Promise")}}, die auf void auflöst.

### Exceptions

| **Exception** | **Tritt auf wenn**                                                                                                                                                                                                                                                                                          |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `TypeError`   | Das URL-Schema nicht `http` oder `https` ist.Der Antwortstatus ist nicht im 200 Bereich (d.h. keine erfolgreiche Antwort) Dies tritt auf, wenn die Request nicht erfolgreich zurückgegeben wird aber auch wenn die Request eine _cross-origin no-cors_ Request ist (In diesem Fall ist der Status immer 0.) |

## Beispiele

Dieser Codeblock wartet darauf, dass ein {{domxref("InstallEvent")}} ausgelöst wird, ruft dann {{domxref("ExtendableEvent.waitUntil","waitUntil()")}} auf, um den Installationsprozess der Applikation einzuleiten. Dies beinhaltet den Aufruf von {{domxref("CacheStorage.open")}} um einen neuen Cache zu erstellen, um dann mittels {{domxref("Cache.add")}} etwas zu diesem hinzuzufügen.

```js
this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.add('/sw-test/index.html');
    })
  );
});
```

## Spezifikationen

| Specification                                                                        | Status                               | Comment         |
| ------------------------------------------------------------------------------------ | ------------------------------------ | --------------- |
| {{SpecName('Service Workers', '#dom-cache-add', 'Cache: add')}} | {{Spec2('Service Workers')}} | Erstdefinition. |

## Browserkompatibilität

{{Compat("api.Cache.add")}}

## Weiterlesen

- [Service-Worker benutzen](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("WorkerGlobalScope.caches")}}
