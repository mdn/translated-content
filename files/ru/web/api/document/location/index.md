---
title: "Document: свойство location"
slug: Web/API/Document/location
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

Доступное только для чтения свойство **`Document.location`** возвращает объект {{domxref("Location")}}, который содержит информацию о URL страницы и предоставляет методы для изменения этого URL и загрузки другого URL.

Хотя `Document.location` это _доступный только для чтения_ объект `Location`, вы ему всё же можно присвоить строковое значение. Это означает, что в большинстве случаев с document.location можно работать так, как будто это строка: `document.location = 'http://www.example.com'` фактически то же, что и `document.location.href = 'http://www.example.com'`. Если присвоить другое строковое значение, то браузер будет загружать указанный адрес.

Чтобы получить URL в виде строки также можно использовать доступное только для чтения свойство {{domxref("document.URL")}}.

Если страница находится вне текущего контекста, будет возвращено значение `null`.

## Значение

Объект {{domxref("Location")}}.

## Примеры

```js
console.log(document.location);
// Выведет в консоль объект Location
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Интерфейс возвращаемого значения — {{domxref("Location")}}.
- Похожая информация, но привязанная к {{Glossary("browsing context", "контексту просмотра")}}, {{domxref("Window.location")}}
