---
title: Storage.clear()
slug: Web/API/Storage/clear
tags:
  - API Methode Storage
translation_of: Web/API/Storage/clear
---
{{APIRef("Web Storage API")}}

Die Methode `clear()` der {{domxref("Storage")}}-Schnittstelle löscht sämtliche Datensätze des Objekts.

## Syntax

```js
storage.clear();
```

### Rückgabewert

{{jsxref("undefined")}}.

## Beispiele

Die folgende Funktion speichert drei Datensätze und löscht sie abschließend mit `clear()`.

```js
function populateStorage() {
  localStorage.setItem('bgcolor', 'red');
  localStorage.setItem('font', 'Helvetica');
  localStorage.setItem('image', 'miGato.png');

  localStorage.clear();
}
```

> **Note:** **Hinweis**: Weitere Beispiele sind im [Web-Storage-Demo](https://mdn.github.io/dom-examples/web-storage/) zu finden.

## Spezifikationen

| Spezifikation                                                                                                | Status                           | Kommentar |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | --------- |
| {{SpecName('HTML WHATWG', 'webstorage.html#dom-storage-clear', 'Storage.clear')}} | {{Spec2('HTML WHATWG')}} |           |

## Browserkompatibilität

{{Compat("api.Storage.clear")}}

## Siehe auch

[Using the Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
