---
title: Storage.getItem()
slug: Web/API/Storage/getItem
---

{{APIRef("Web Storage API")}}

Если в метод `getItem()` интерфейса {{domxref("Storage")}} передать ключ в качестве параметра, то метод вернёт значение, лежащее в хранилище по указанному ключу.

## Синтаксис

```
var aValue = storage.getItem(название Ключа);
```

### Параметры

- _название Ключа_
  - : Является строкой {{domxref("DOMString")}}, содержащей название ключа, по которому получается значение из хранилища.

### Возвращаемые значения

Является строкой {{domxref("DOMString")}}, содержащей значение для соответствующего ключа. Если ключ не существует, то будет возвращено значение `null`.

## Пример

Следующая функция получает 3 значения из локального хранилища, после этого они используются для установки стилей на странице.

```js
function setStyles() {
  var currentColor = localStorage.getItem("bgcolor");
  var currentFont = localStorage.getItem("font");
  var currentImage = localStorage.getItem("image");

  document.getElementById("bgcolor").value = currentColor;
  document.getElementById("font").value = currentFont;
  document.getElementById("image").value = currentImage;

  htmlElem.style.backgroundColor = "#" + currentColor;
  pElem.style.fontFamily = currentFont;
  imgElem.setAttribute("src", currentImage);
}
```

> **Примечание:** Чтобы вживую посмотреть на работу функции, посетите страницу демонстрации [Web Storage](https://mdn.github.io/dom-examples/web-storage/).

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

[Using the Web Storage API](/ru/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
