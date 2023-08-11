---
title: Element.hasAttributes()
slug: Web/API/Element/hasAttributes
---

{{ApiRef("DOM")}}

Метод **`Element.hasAttributes()`** возвращает **Boolean** значение, указывая содержит данный элемент какие-либо атрибуты или нет.

## Синтаксис

```
var result = element.hasAttributes();
```

- `result`
  - : содержит возвращаемое значение `true` или `false`.

## Пример

```js
var foo = document.getElementById("foo");
if (foo.hasAttributes()) {
  // do something with 'foo.attributes'
}
```

## Polyfill

```js
(function (prototype) {
  prototype.hasAttributes =
    prototype.hasAttributes ||
    function () {
      return this.attributes.length > 0;
    };
})(Element.prototype);
```

## Спецификация

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("Element.attributes")}}
- {{domxref("Element.hasAttribute()")}}
