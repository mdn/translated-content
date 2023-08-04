---
title: Node.childElementCount
slug: Web/API/Element/childElementCount
---

{{ APIRef("DOM") }}

Свойство **`Node.childElementCount`** предназначено только для чтения и возвращает число дочерних **элементов** узла.

## Синтаксис

```
var elCount = Node.childElementCount;
```

- **`elCount`** - целое число, количество дочерних элементов узла **Node.**
- **`Node`** - объект, представляющий собой `Document`, `DocumentFragment` или `Element`.

> **Предупреждение:** А наш добрый друг **Internet Explorer** в **6, 7** и **8** версиях ошибочно считает элементами комментарии в HTML-коде ({{domxref("Comment")}}).

## Пример

```js
var foo = document.getElementById("foo");
if (foo.childElementCount > 0) {
  // здесь нужный код..
}
```

## Спецификация

{{Specifications}}

## Поддержка браузерами

{{Compat}}
