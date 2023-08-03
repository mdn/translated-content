---
title: NonDocumentTypeChildNode.nextElementSibling
slug: Web/API/Element/nextElementSibling
---

{{APIRef("DOM")}}

**`NonDocumentTypeChildNode.nextElementSibling`** свойство только для чтения, возвращающее последующий элемент перед текущим, или `null`, если элемент является последним в своём родительском узле.

## Синтаксис

```
var nextNode = elementNodeReference.nextElementSibling;
```

## Пример

```html
<div id="div-01">Это div-01</div>
<div id="div-02">Это div-02</div>

<script type="text/javascript">
  var el = document.getElementById("div-01").nextElementSibling;
  console.log("Сосед div-01:");
  while (el) {
    console.log(el.nodeName);
    el = el.nextElementSibling;
  }
</script>
```

Этот пример выведет в консоль следующее:

```
Сосед div-01:
DIV
SCRIPT
```

## Полифил для IE8

Данное свойство не поддерживается до IE9. Используйте следующий полифил, чтобы обойти этот недостаток:

```js
// Источник: https://github.com/Alhadis/Snippets/blob/master/js/polyfills/IE8-child-elements.js
if (!("nextElementSibling" in document.documentElement)) {
  Object.defineProperty(Element.prototype, "nextElementSibling", {
    get: function () {
      var e = this.nextSibling;
      while (e && 1 !== e.nodeType) {
        e = e.nextSibling;
      }
      return e;
    },
  });
}
```

## Полифил для IE9+ и Safari

```js
// Источник: https://github.com/jserz/js_piece/blob/master/DOM/NonDocumentTypeChildNode/nextElementSibling/nextElementSibling.md
(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty("nextElementSibling")) {
      return;
    }
    Object.defineProperty(item, "nextElementSibling", {
      configurable: true,
      enumerable: true,
      get: function () {
        var el = this;
        while ((el = el.nextSibling)) {
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

- Чистый интерфейс {{domxref("ChildNode")}}.
- Типы объектов, реализующих этот чистый интерфейс: {{domxref("CharacterData")}}, {{domxref("Element")}}, и {{domxref("DocumentType")}}.
