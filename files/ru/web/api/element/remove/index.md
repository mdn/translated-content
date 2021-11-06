---
title: Element.remove()
slug: Web/API/Element/remove
tags:
  - API
  - Element
  - DOM
  - Method
browser-compat: api.Element.remove
---
{{APIRef("DOM")}}

Метод **`Element.remove()`** удаляет элемент из DOM-дерева, в котором он находится.

## Синтаксис

```js
remove()
```

## Примеры

### Использование `remove()`

```html
<div id="div-01">Это div-01</div>
<div id="div-02">Это div-02</div>
<div id="div-03">Это div-03</div>
```

```js
var el = document.getElementById('div-02');
el.remove(); // Удалит элемент div с идентификатором 'div-02'
```

### Область видимости `Element.remove()` нерасширяема

Метод `remove()` не работает с оператором `with`.
Подробнее читайте в справке по {{jsxref("Symbol.unscopables")}}.


```js
with(node) {
  remove();
}
// ReferenceError: remove is not defined
```

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- [Polyfill](https://github.com/chenzhenxi/element-remove)
