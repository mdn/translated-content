---
title: Node.lookupPrefix()
slug: Web/API/Node/lookupPrefix
---

{{APIRef("DOM")}}

Метод **`Node.lookupPrefix()`** возвращает {{domxref("DOMString")}} содержащий префикс для данного пространства имён URI, если он присутствует, и `null` если нет. Когда возможно присутствие нескольких префиксов, результат зависит от реализации.

Из-за ошибки [bug 312019](https://bugzilla.mozilla.org/show_bug.cgi?id=312019), этот метод не работает с динамическим назначением пространства имён, которое установлено с тем же свойством {{domxref("Node.prefix")}}.

## Смотрите также

- [http://www.w3.org/TR/DOM-Level-3-Cor...amespacePrefix](http://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-lookupNamespacePrefix)
