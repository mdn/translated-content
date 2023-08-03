---
title: Range.surroundContents()
slug: Web/API/Range/surroundContents
---

{{ApiRef("DOM")}}

Метод **`Range.surroundContents()`** перемещает содержимое {{ domxref("Range") }} в новый элемент, который расположится в начале указанного диапазона.

Этот метод приблизительно эквивалентен коду `newNode.appendChild(range.extractContents()); range.insertNode(newNode)`. После его работы крайние точки диапазона будут включать в себя `newNode`.

Если {{ domxref("Range") }} разделяет любой не [текстовый](/ru/docs/Web/API/Text) элемент хотя бы одной точкой, произойдёт исключение. В отличие от альтернативы выше, если в диапазоне есть частично выделенные элементы, они не будут клонированы, а вместо этого производит ошибка.

## Синтаксис

```
range.surroundContents(newNode);
```

### Параметры

- _newNode_
  - : [Элемент](/ru/docs/Glossary/Node/DOM) который будет содержать в себе выделенный текст.

## Пример

```js
var range = document.createRange();
var newNode = document.createElement("p");

range.selectNode(document.getElementsByTagName("div").item(0));
range.surroundContents(newNode);
```

## Спецификации

{{Specifications}}

## Совместимость

{{Compat}}

## Смотрите также

- [The DOM interfaces index](/ru/docs/DOM/DOM_Reference)
