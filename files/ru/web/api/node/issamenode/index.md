---
title: Node.isSameNode()
slug: Web/API/Node/isSameNode
---

{{APIRef("DOM")}}

The **`Node.isSameNode()`** проверяет ссылаются ли два узла на один и тот же объект.

> **Предупреждение:** Данный метод больше не реализуется в последних браузерах.
>
> ```js
> // Instead of using
> node1.isSameNode(node2);
>
> // use
> node1 === node2; // or
> node1 == node2;
> ```

## Синтаксис

```
var isSameNode = node.isSameNode(other);
```

- `other` узел для проверки.

## Спецификации

{{Specifications}}

## Совместимость в браузерах

{{Compat}}

## Смотрите также

- {{domxref("Node.isEqualNode()")}}
