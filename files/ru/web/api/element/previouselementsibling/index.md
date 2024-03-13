---
title: NonDocumentTypeChildNode.previousElementSibling
slug: Web/API/Element/previousElementSibling
---

{{APIRef("DOM")}}

Свойство **`NonDocumentTypeChildNode.previousElementSibling`** только для чтения возвращает {{domxref("Element")}} элемент стоящий перед применяемым, из списка дочерних элементов родителя или возвращает null, если таковых не имеется.

## Синтаксис

```
prevNode = elementNodeReference.previousElementSibling;
```

## Примеры

```html
<div id="div-01">Here is div-01</div>
<div id="div-02">Here is div-02</div>
<li>This is a list item</li>
<li>This is another list item</li>
<div id="div-03">Here is div-03</div>

<script>
  var el = document.getElementById("div-03").previousElementSibling;
  document.write("<p>Siblings of div-03</p><ol>");
  while (el) {
    document.write("<li>" + el.nodeName + "</li>");
    el = el.previousElementSibling;
  }
  document.write("</ol>");
</script>
```

Этот пример выводит следующие элементы на страницу при загрузке:

```
Соседи div-03

   1. LI
   2. LI
   3. DIV
   4. DIV
```

## Полифил для Internet Explorer 8

Это свойство поддерживается начиная с версии IE9, поэтому следующий фрагмент поддерживается, и может использоваться для IE8:

```js
// Ресурс: https://github.com/Alhadis/Snippets/blob/master/js/polyfills/IE8-child-elements.js
if (!("previousElementSibling" in document.documentElement)) {
  Object.defineProperty(Element.prototype, "previousElementSibling", {
    get: function () {
      var e = this.previousSibling;
      while (e && 1 !== e.nodeType) e = e.previousSibling;
      return e;
    },
  });
}
```

## Полифил для Internet Explorer 9+ и Safari

```js
// Ресурс: https://github.com/jserz/js_piece/blob/master/DOM/NonDocumentTypeChildNode/previousElementSibling/previousElementSibling.md
(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty("previousElementSibling")) {
      return;
    }
    Object.defineProperty(item, "previousElementSibling", {
      configurable: true,
      enumerable: true,
      get: function () {
        var el = this;
        while ((el = el.previousSibling)) {
          if (el.nodeType === 1) {
            return el;
          }
        }
        return null;
      },
      set: undefined,
    });
  });
})([Element.prototype, CharacterData.prototype]);
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("NonDocumentTypeChildNode")}} чистый интерфейс.
- Типы объектов реализующие чистый интерфейс: {{domxref("CharacterData")}}, и {{domxref("Element")}}.
