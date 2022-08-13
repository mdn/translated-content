---
title: Storage.removeItem()
slug: Web/API/Storage/removeItem
tags:
  - API Methode Storage Speicher
translation_of: Web/API/Storage/removeItem
---
{{APIRef("Web Storage API")}}

Die Methode `removeItem()` der {{domxref("Storage")}}-Schnittstelle löscht den im Parameter keyName benannten Datensatz aus dem Speicher. Ist kein Datensatz unter diesem Schlüssel vorhanden, tut diese Funktion nichts.

## Syntax

    storage.removeItem(keyName);

### Parameter

- _keyName_
  - : Ein {{domxref("DOMString")}}, der den Schlüssel des zu löschenden Datensatzes enthält.

### Rückgabewert

Keiner.

## Beispiel

Die nachfolgende Funktion speichert drei Datensätze und löscht abschließend den Datensatz mit dem Schlüssel `image`.

```js
function populateStorage() {
  localStorage.setItem('bgcolor', 'red');
  localStorage.setItem('font', 'Helvetica');
  localStorage.setItem('image', 'myCat.png');

  localStorage.removeItem('image');
}
```

> **Hinweis:** Weitere Beispiele sind im [Web-Storage-Demo](https://mdn.github.io/dom-examples/web-storage/) zu finden.

## Spezifikationen

| Spezifikation                                                                                                            | Status                           | Kommentar |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | --------- |
| {{SpecName('HTML WHATWG', 'webstorage.html#dom-storage-removeitem', 'Storage.removeItem')}} | {{Spec2('HTML WHATWG')}} |           |

## Browserkompatibilität

{{Compat("api.Storage.removeItem")}}

## Siehe auch

[Using the Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
