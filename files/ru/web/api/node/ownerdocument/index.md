---
title: Node.ownerDocument
slug: Web/API/Node/ownerDocument
---

{{APIRef("DOM")}}

Свойство **`Node.ownerDocument`** только для чтения, возвращающее объект документа верхнего уровня для этого узла.

## Синтаксис

```
document = element.ownerDocument
```

- `document` это объект [`document`](/ru/docs/DOM/document) родитель текущего элемента.

## Пример

```js
// given a node "p", get the top-level HTML child
// of the document object

var d = p.ownerDocument;
var html = d.documentElement;
```

## Примечание

Объект `document`, возвращаемый этим свойством, это основной объект с которым все дочерние узлы в настоящем HTML документе созданы. Если это свойство используется для узла самого документа, результат будет `null`.

## Совместимость с браузерами

{{Compat}}

## Спецификация

- [DOM Level 2 Core: Node.ownerDocument](http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#node-ownerDoc)
