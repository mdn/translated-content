---
title: Node.parentElement
slug: Web/API/Node/parentElement
translation_of: Web/API/Node/parentElement
---

{{APIRef("DOM")}}

Свойство **`Node.parentElement`** только для чтения, возвращает родителя узла DOM {{domxref("Element")}}, или `null` если узел не имеет родителя, или его родитель не DOM {{domxref("Element")}}.

## Синтаксис

```
parentElement = node.parentElement
```

`parentElement` это родительский элемент текущего узла. Это всегда объект DOM {{domxref("Element")}}, или `null`.

## Пример

```js
if (node.parentElement) {
    node.parentElement.style.color = "red";
}
```

## Совместимость с браузерами

В некоторых браузерах, свойство `parentElement` определено только для узлов, которые сами {{domxref("Element")}}. В частности, не определено для текстовых узлов.

{{Compat}}

## Спецификация

- {{spec("http://dvcs.w3.org/hg/domcore/raw-file/tip/Overview.html#parent-element", "DOM Level 4: Node.parentElement", "WD")}}

## Смотрите также

- {{domxref("Node.parentNode")}}
