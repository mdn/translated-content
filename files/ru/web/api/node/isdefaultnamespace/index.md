---
title: Node.isDefaultNamespace()
slug: Web/API/Node/isDefaultNamespace
---

{{APIRef("DOM")}}

Метод **`Node.isDefaultNamespace()`** принимает URI пространства имён в качестве аргумента и возвращает {{jsxref("Boolean")}} со значением `true` если пространство имён является пространством имён данного узла по умолчанию или `false` если нет.

## Синтаксис

```
result = node.isDefaultNamespace(namespaceURI)
```

- `result` содержит в себе возвращаемое значение `true` или `false`.
- `namespaceURI` это строка представляющая собой пространство имён, на которое элемент будет проверен.

## Пример

```js
var XULNS = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
var el = document.getElementsByTagNameNS(XULNS, "textbox")[0];

alert(el.isDefaultNamespace(XULNS)); // true
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
