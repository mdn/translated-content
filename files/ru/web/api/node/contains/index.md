---
title: Node.contains
slug: Web/API/Node/contains
---

{{APIRef("DOM")}}Метод **`Node.contains()`** возвращает {{jsxref ("Boolean")}} значение, указывающее, является ли узел потомком данного узла, т. е. сам узел, один из его прямых потомков ({{domxref ("Node. childNodes "," childNodes ")}}), один из детей его детей и так далее.

## Синтаксис

```
node.contains( otherNode )
```

- `node` элемент который сравнивается.
- `otherNode` элемент с которым производится сравнение.

## Пример

Эта функция проверяет, находится ли элемент в теле страницы.

```js
function isInPage(node) {
  return node === document.body ? false : document.body.contains(node);
}
```

## Спецификация

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{domxref("Node.compareDocumentPosition")}}
- {{domxref("Node.hasChildNodes")}}
