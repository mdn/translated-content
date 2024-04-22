---
title: Node.nodeType
slug: Web/API/Node/nodeType
---

{{APIRef("DOM")}}

Доступное только для чтения свойство `Node.nodeType` возвращает беззнаковое короткое целочисленное значение, представляющее тип узла.

## Синтаксис

```
var type = node.nodeType;
```

`type` – беззнаковое короткое целочисленное значение с одним из следующих значений:

| Name                                                                    | Value |
| ----------------------------------------------------------------------- | ----- |
| [`ELEMENT_NODE`](/ru/docs/Web/API/Element)                              | `1`   |
| `ATTRIBUTE_NODE` {{deprecated_inline()}}                                | `2`   |
| [`TEXT_NODE`](/ru/docs/Web/API/Text)                                    | `3`   |
| `CDATA_SECTION_NODE` {{deprecated_inline()}}                            | `4`   |
| `ENTITY_REFERENCE_NODE` {{deprecated_inline()}}                         | `5`   |
| `ENTITY_NODE` {{deprecated_inline()}}                                   | `6`   |
| [`PROCESSING_INSTRUCTION_NODE`](/ru/docs/Web/API/ProcessingInstruction) | `7`   |
| [`COMMENT_NODE`](/ru/docs/Web/API/document.createComment)               | `8`   |
| [`DOCUMENT_NODE`](/ru/docs/Web/HTML/Element/html)                       | `9`   |
| [`DOCUMENT_TYPE_NODE`](/ru/docs/Web/API/document.doctype)               | `10`  |
| [`DOCUMENT_FRAGMENT_NODE`](/ru/docs/Web/API/DocumentFragment)           | `11`  |
| `NOTATION_NODE` {{deprecated_inline()}}                                 | `12`  |

## Пример

В примере проверяется, является ли первый узел внутри `documentElement` узлом комментария, если нет, то выводится сообщение.

```js
var node = document.documentElement.firstChild;
if (node.nodeType != Node.COMMENT_NODE)
  console.log("You should comment your code well!");
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
