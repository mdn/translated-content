---
title: Node.nodeValue
slug: Web/API/Node/nodeValue
---

{{APIRef("DOM")}}

Свойство **`Node.nodeValue`** возвращает или устанавливает значение текущего узла.

## Синтаксис

```
value = node.nodeValue;
```

`value` это строка содержащая значение текущего узла, если таковой имеется.

## Примечания

Для самого документа, `nodeValue` возвращает `null`. Для текста, комментария и CDATA узлов, `nodeValue` возвращает содержимое узла. Для узла атрибута, вернётся значение атрибута.

Следующая таблица, показывает возвращаемые значения различных элементов:

| Attr                  | Значение атрибута            |
| --------------------- | ---------------------------- |
| CDATASection          | Содержимое секции CDATA      |
| Comment               | Содержимое комментария       |
| Document              | null                         |
| DocumentFragment      | null                         |
| DocumentType          | null                         |
| Element               | null                         |
| NamedNodeMap          | null                         |
| EntityReference       | null                         |
| Notation              | null                         |
| ProcessingInstruction | Все содержимое исключая цель |
| Text                  | Содержимое текстового узла   |

Когда `nodeValue` равно `null`, установки не имеют эффекта.

## Спецификация

- [DOM Level 2 Core: Node.nodeValue](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-F68D080)
