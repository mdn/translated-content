---
title: Node.lookupNamespaceURI()
slug: Web/API/Node/lookupNamespaceURI
---

{{APIRef("DOM")}}

Метод **`Node.lookupNamespaceURI()`** берёт префикс и возвращает пространство имён URI связанное с ним в данном узле, если найден (и `null` если нет). Устанавливает `null` для префикса который возвращает пространство имён по умолчанию.

Из-за ошибки [bug 312019](https://bugzilla.mozilla.org/show_bug.cgi?id=312019), этот метод не работает с динамическим назначением пространства имён (т.е., с уставленным тем же [Node.prefix](/en/DOM/Node.prefix)).

## Смотрите также

- [http://www.w3.org/TR/DOM-Level-3-Cor...upNamespaceURI](http://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-lookupNamespaceURI)
