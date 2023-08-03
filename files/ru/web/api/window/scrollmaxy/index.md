---
title: Window.scrollMaxY
slug: Web/API/Window/scrollMaxY
---

{{APIRef}} {{Non-standard_header}}

Свойство **`Window.scrollMaxY`** возвращает максимальное число пикселей по вертикали, доступных для прокрутки в документе. Только для чтения.

## Синтаксис

```
yMax = window.scrollMaxY
```

- `yMax` - число пикселей.

## Пример

```js
// Пролистать в самый низ
var maxY = window.scrollMaxY;

window.scrollTo(0, maxY);
```

## Примечания

Не используйте это свойство для получения общей высоты документа, так как оно не равнозначно {{domxref("window.innerHeight")}} + window\.scrollMaxY, потому что {{domxref("window.innerHeight")}} включает ещё ширину любой видимой горизонтальной полосы прокрутке. Вместо этого применяйте {{domxref("element.scrollHeight","document.body.scrollHeight")}}. Смотрите также {{domxref("window.scrollMaxX")}} и {{domxref("window.scrollTo")}}.

## Спецификация

Не является частью какой-либо спецификации.

## Совместимость с браузерами

{{Compat}}
