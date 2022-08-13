---
title: Storage.getItem()
slug: Web/API/Storage/getItem
tags:
  - API Methode Storage
translation_of: Web/API/Storage/getItem
---
{{APIRef("Web Storage API")}}

Die Methode `getItem()` der {{domxref("Storage")}}-Schnittstelle gibt bei Nennung des Schlüssels im Parameter keyName den Wert des zugehörigen Datensatzes zurück.

## Syntax

    var aValue = storage.getItem(keyName);

### Parameter

- _`keyName`_
  - : Ein {{domxref("DOMString")}}, der den Namen des Schlüssels, dessen Wert ausgelesen werden soll, enthält.

### Rückgabewert

Ein {{domxref("DOMString")}}, der den Wert des Schlüssels enthält. Falls der Schlüssel nicht existiert, wird `null` zurückgegeben.

## Beispiel

Die folgende Funktion liest drei Datenwerte aus dem lokalen Speicher und verwendet sie, um einen benutzerdefinierten Style auf einer Seite zu setzen.

```js
function setStyles() {
  var currentColor = localStorage.getItem('bgcolor');
  var currentFont = localStorage.getItem('font');
  var currentImage = localStorage.getItem('image');

  document.getElementById('bgcolor').value = currentColor;
  document.getElementById('font').value = currentFont;
  document.getElementById('image').value = currentImage;

  htmlElem.style.backgroundColor = '#' + currentColor;
  pElem.style.fontFamily = currentFont;
  imgElem.setAttribute('src', currentImage);
}
```

> **Note:** **Hinweis:** Weitere Beispiele sind im [Web-Storage-Demo](https://mdn.github.io/dom-examples/web-storage/) zu finden.

## Spezifikationen

| Spezifikation                                                                                                    | Status                           | Kommentar |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------- |
| {{SpecName('HTML WHATWG', 'webstorage.html#dom-storage-getitem', 'Storage.getItem')}} | {{Spec2('HTML WHATWG')}} |           |

## Browserkompatibilität

{{Compat("api.Storage.getItem")}}

## Siehe auch

- [Storage.setItem()](/de/docs/Web/API/Storage/setItem)
- [Using the Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
