---
title: Node.parentElement
slug: Web/API/Node/parentElement
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

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("Node.parentNode")}}
