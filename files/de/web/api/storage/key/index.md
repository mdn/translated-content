---
title: Storage.key()
slug: Web/API/Storage/key
tags:
  - API Methode Storage
translation_of: Web/API/Storage/key
---
{{APIRef("Web Storage API")}}

Die Methode `key()` der {{domxref("Storage")}}-Schnittstelle gibt durch Übergabe des Parameters n den Schlüssel des n-ten Datensatzes zurück.
Die Reihenfolge der Schlüssel folgt keiner Vorgabe und hängt alleine vom Browser ab.

## Syntax

    var aKeyName = storage.key(index);

### Parameter

- _index_
  - : Ein Integer, der die Position des gewünschten Schlüssels bestimmt. Die Nummerierung beginnt bei 0.

### Rückgabewert

Ein {{domxref("DOMString")}} mit dem Namen des Schlüssels.

## Beispiele

Die folgende Funktion liest in einer Schleife für jeden Datensatz den Schlüssel und übergibt diesen an die Funktion callback():

```js
function forEachKey(callback) {
  for (var i = 0; i < localStorage.length; i++) {
    callback(localStorage.key(i));
  }
}
```

Nachfolgend wird in einer Schleife zu jedem Datensatz erst der Schlüssel, dann mit dem Schlüssel der Wert gelesen und dieser in der Konsole ausgegeben.

```js
for (var i = 0; i < localStorage.length; i++) {
   var key = localStorage.key(i);
   var value = localStorage.getItem(key);
   console.log(value);
}
```

> **Hinweis:** Weitere Beispiele sind in der [Web-Storage-Demo](https://mdn.github.io/dom-examples/web-storage/) zu finden.

## Spezifikationen

| Spezifikation                                                                                            | Status                           | Comment |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ------- |
| {{SpecName('HTML WHATWG', 'webstorage.html#dom-storage-key', 'Storage.key')}} | {{Spec2('HTML WHATWG')}} |         |

## Browserkompatibilität

{{Compat("api.Storage.key")}}

## Siehe auch

[Using the Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
