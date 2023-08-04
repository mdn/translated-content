---
title: Document.hidden
slug: Web/API/Document/hidden
---

{{ ApiRef("DOM") }}

Доступное только для чтения свойство **`Document.hidden`** возвращает булево значение, показывающее является ли страница скрытой или нет.

## Синтаксис

```
var boolean = document.hidden
```

## Примеры

```js
document.addEventListener("visibilitychange", function () {
  console.log(document.hidden);
  // Modify behavior...
});
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
