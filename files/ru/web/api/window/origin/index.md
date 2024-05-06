---
title: Document.origin
slug: Web/API/Window/origin
l10n:
  sourceCommit: 3fd9ed857a7d87a5ecc539a9835dbd107178bb6c
---

{{APIRef("DOM")}}

Доступное только для чтения свойство **`origin`** интерфейса {{domxref("Window")}} возвращает источник глобальной области видимости, сериализованный в виде строки.

## Значение

Строка.

## Примеры

Следующий фрагмент, выполняемый из области видимости окна, выводит источник глобальной области видимости документа в консоль.

Executed from inside window scope, the following snippet will log the document's global scope's origin to the console.

```js
console.log(window.origin);
```

Если источник не является связкой из схемы, домена и порта (например, при локальном запуске через `file://`), то `origin` будет возвращать строку `"null"`

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
