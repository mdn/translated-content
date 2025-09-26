---
title: "Document: свойство hidden"
slug: Web/API/Document/hidden
l10n:
  sourceCommit: 9b89bf6c59aa5f4dfe7e68b7e4fee42507d67cc4
---

{{APIRef("DOM")}}

Доступное только для чтения свойство **`Document.hidden`** возвращает логическое значение, указывающее, считается ли страница скрытой или нет.

Свойство {{domxref("Document.visibilityState")}} предоставляет альтернативный способ определить, скрыта ли страница.

## Значение

Логическое значение, `true` если страница скрыта и `false` в противном случае.

## Пример

```js
document.addEventListener("visibilitychange", () => {
  console.log(document.hidden);
});
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("Document.visibilityState")}}
