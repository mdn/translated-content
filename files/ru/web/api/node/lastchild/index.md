---
title: "Node: свойство lastChild"
slug: Web/API/Node/lastChild
l10n:
  sourceCommit: 7de82e7152a2891e9aee5b6f630f1f43849748df
---

{{APIRef("DOM")}}

Доступное только для чтения свойство **`lastChild`** интерфейса {{domxref("Node")}} возвращает последнего потомка узла или `null` если потомков нет.

> [!NOTE]
> Это свойство может вернуть узел любого типа, который является потомком текущего. Это может быть {{domxref("Text")}} или {{domxref("Comment")}}. Если необходимо получить последний {{domxref("Element")}}, который является потомком другого элемента, то следует использовать {{domxref("Element.lastElementChild")}}.

## Значение

{{domxref("Node")}}, являющийся последним потомком узла или `null` если потомков нет.

## Пример

```js
const tr = document.getElementById("row1");
const corner_td = tr.lastChild;
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("Node.firstChild")}}
- {{domxref("Element.lastElementChild")}}
