---
title: History.length
slug: Web/API/History/length
---

{{ APIRef("HTML DOM") }}

**`History.length`** — это свойство объекта History, доступное только для чтения, которое возвращает число (Integer), обозначающее количество элементов в истории сессии, в том числе для загруженной страницы. Например, если открыть страницу в новой вкладке это свойство вернёт 1.

## Синтаксис

```
length = history.length;
```

## Примеры

```js
var result = window.history.length; // Вернёт размер истории текущей сессии
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("History")}}
