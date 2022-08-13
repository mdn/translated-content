---
title: Cache.addAll()
slug: Web/API/Cache/addAll
tags:
  - Cache
  - Experimentell
  - Methoden
  - Referenz
  - Service Worker
translation_of: Web/API/Cache/addAll
---
{{APIRef("Service Workers API")}}{{SeeCompatTable}}

## Zusammenfassung

Die **addAll()** Methode der {{domxref("Cache")}} Schnittstelle nimmt ein Array von URLS, ruft diese ab und fügt die daraus resultierenden Antwortobjekte zum jeweiligen Cache hinzu. Die Antwortobjekte, welche während des Abrufens erzeugt werden, werden zu Schlüsselwerten für die gespeicherten Antwortoperationen.

> **Hinweis:** `addAll()` überschreibt jegliche Schlüsselwertpaare im Cache, die der Anfrage entsprechen wird aber scheitern, wenn eine resultierende put() Operation einen früheren Cache-Eintrag, der durch die gleiche addAll() Methode erzeugt wurde, überschreiben würde.

> **Hinweis:** Ursprüngliche Cache Implementationen (sowohl in Blink als auch in Gecko) lösen {{domxref("Cache.add")}}, {{domxref("Cache.addAll")}}, und {{domxref("Cache.put")}} Promises auf, wenn die jeweilige Antwort vollständig in den Speicher geschrieben wurde. Neuere Spezifikationsversionen haben aktualisierte Informationen, welche aussagen, dass der Browser den Promise bereits auflösen kann, wenn der Eintrag in die Datenbank erfolgt, auch wenn die Antwort zu diesem Zeitpunkt noch nicht vollständig geschrieben wurde (sprich der Datenstrom in den Speicher ist noch nicht beendet).

> **Hinweis:** Zum Stand von Chrome 46 wird die Cache API nur Anfragen von sicheren Quellen speichern, also solche die via HTTPS angeboten werden.

## Syntax

```js
cache.addAll(requests[]).then(function() {
  //Anfragen wurden zum Cache hinzugefügt
});
```

### Argumente

- requests
  - : Ein Array von {{domxref("Request")}} Objekten, die Sie zum Cache hinzufügen möchten.

### Rückgabewert

Ein {{jsxref("Promise")}} der mit void auflöst.

### Ausnahmen

| **Ausnahme** | **Passiert bei**                                                                                                                                                                                                                                                                                               |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `TypeError`  | Das URL Schama ist nicht http oder https.Der Antwortstatus ist nicht im 200er Bereich ( nicht erfolgreiche Antwort ). Dies entsteht, wenn die Anfrage nicht erfolreich zurückgibt, aber auch, wenn die Anfrage eine cross-origin no-cors Anfrage ist (in diesem Fall wird immer 0 als Berichtsstatus gegeben). |

## Beispiele

Dieser Programmblock wartet auf ein abgesetztes {{domxref("InstallEvent")}} , woraufhin ein {{domxref("ExtendableEvent.waitUntil","waitUntil")}} läuft, das den Installationsprozess für die Applikation handhabt. Das beinhaltet das Aufrufen von {{domxref("CacheStorage.open")}} um einen neuen Cache zu erstellen. Anschließend wird addAll() benutzt um diesem eine Reihe von Ressourcen (in diesem Fall html, css und Bild-Ressourcen) hinzuzufügen.

```js
this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/sw-test/',
        '/sw-test/index.html',
        '/sw-test/style.css',
        '/sw-test/app.js',
        '/sw-test/image-list.js',
        '/sw-test/star-wars-logo.jpg',
        '/sw-test/gallery/',
        '/sw-test/gallery/bountyHunters.jpg',
        '/sw-test/gallery/myLittleVader.jpg',
        '/sw-test/gallery/snowTroopers.jpg'
      ]);
    })
  );
});
```

### Spezifikationen

| Spezifikation                                                        | Status                               | Kommentar         |
| -------------------------------------------------------------------- | ------------------------------------ | ----------------- |
| {{SpecName('Service Workers', '#cache', 'Cache')}} | {{Spec2('Service Workers')}} | Erste Definition. |

## Browserunterstützung

{{Compat}}

\[1] Service workers (und [Push](/de/docs/Web/API/Push_API)) wurden in [Firefox 45 Extended Support Release](https://www.mozilla.org/en-US/firefox/organizations/) (ESR.) abgeschaltet.

## Siehe auch

- [Using Service Workers](/de/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("WorkerGlobalScope.caches")}}
