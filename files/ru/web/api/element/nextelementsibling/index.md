---
title: NonDocumentTypeChildNode.nextElementSibling
slug: Web/API/Element/nextElementSibling
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("DOM")}}

Доступное только для чтения свойство **`Element.nextElementSibling`** возвращает элемент, следующий непосредственно за указанным элементом в списке {{domxref("Element.children", "дочерних")}} элементов его родительского узла, либо `null`, если указанный элемент является последним в этом списке.

## Значение

Объект {{domxref("Element")}} или `null`.

## Примеры

```html
<div id="div-01">Это div-01</div>
<div id="div-02">Это div-02</div>
```

```js
let el = document.getElementById("div-01").nextElementSibling;
console.log("Соседи div-01:");
while (el) {
  console.log(el.nodeName);
  el = el.nextElementSibling;
}
```

После загрузки этот пример выведет в консоль следующее:

```plain
Соседи div-01:
DIV
SCRIPT
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("Element.previousElementSibling")}}
