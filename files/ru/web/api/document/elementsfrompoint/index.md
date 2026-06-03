---
title: "Document: метод elementsFromPoint()"
slug: Web/API/Document/elementsFromPoint
l10n:
  sourceCommit: b21df53ffbb066cfb9347d7f0e5aebb792ed73e5
---

{{APIRef("DOM")}}

Метод **`elementsFromPoint()`** интерфейса {{domxref("Document")}} возвращает массив всех элементов, находящихся по указанным координатам (относительно области просмотра).
Элементы упорядочены от самого верхнего к самому нижнему блоку в области просмотра.

Он работает аналогично методу {{domxref("Document.elementFromPoint", "elementFromPoint()")}}.

## Синтаксис

```js-nolint
elementsFromPoint(x, y);
```

### Параметры

- `x`
  - : Горизонтальная координата точки.
- `y`
  - : Вертикальная координата точки.

### Возвращаемое значение

Массив объектов {{domxref("Element")}}, упорядоченных от самого верхнего до самого нижнего блока в области просмотра.

## Примеры

### HTML

```html
<div>
  <p>Какой-то текст</p>
</div>
<p>Элементы в точке 30, 20:</p>
<div id="output"></div>
```

### JavaScript

```js
let output = document.getElementById("output");
if (document.elementsFromPoint) {
  let elements = document.elementsFromPoint(30, 20);
  elements.forEach((elt, i) => {
    output.textContent += elt.localName;
    if (i < elements.length - 1) {
      output.textContent += " < ";
    }
  });
} else {
  output.innerHTML = `<span style="color: red">
  Браузер не поддерживает
  <code>document.elementsFromPoint()</code>
</span>
`;
}
```

{{EmbedLiveSample("Примеры", 420, 160)}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("Document.elementFromPoint()")}}
