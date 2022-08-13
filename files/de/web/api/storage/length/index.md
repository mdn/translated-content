---
title: Storage.length
slug: Web/API/Storage/length
tags:
  - API Eigenschaft Storage
translation_of: Web/API/Storage/length
---
{{APIRef("Web Storage API")}}

Die `length`-Eigenschaft der {{domxref("Storage")}}-Schnittstelle enthält die Anzahl der im `Storage`-Objekt gespeicherten Datensätze.

## Syntax

    var aLength = Storage.length;

### Rückgabewert

Ein Integer.

## Beispiel

Die folgende Funktion fügt drei Datensätze hinzu und liest abschließend die Anzahl der vorhandenen Datensätze:

```js
function populateStorage() {
  localStorage.setItem('bgcolor', 'yellow');
  localStorage.setItem('font', 'Helvetica');
  localStorage.setItem('image', 'cats.png');

  localStorage.length; // sollte 3 zurückgeben
}
```

> **Note:** **Hinweis**: Weitere Beispiele sind im [Web-Storage-Demo](https://mdn.github.io/dom-examples/web-storage/) zu finden.

## Spezifikation

| Spezifikation                                                                                                    | Status                           | Kommentar |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------- |
| {{SpecName('HTML WHATWG', 'webstorage.html#dom-storage-length', 'Storage.length')}} | {{Spec2('HTML WHATWG')}} |           |

## Browserkompatibilität

{{Compat("api.Storage.length")}}

## Siehe auch

- [Using the Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
