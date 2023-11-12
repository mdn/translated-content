---
title: HTMLImageElement.decoding
slug: Web/API/HTMLImageElement/decoding
---

{{APIRef}}

Свойство **`decoding`** интерфейса {{domxref("HTMLImageElement")}} предназначено для указания браузеру, как он должен декодировать изображение.

## Синтаксис

```
refStr = imgElem.decoding;
imgElem.decoding = refStr;
```

### Значения

{{domxref("DOMString")}} предоставляет указания по декодированию. Возможные значения:

- **`sync`**: Декодировать изображение синхронно для отображения одновременно с другим содержимым.
- **`async`**: Декодировать содержимое асинхронно для уменьшения задержки в отображении другого содержимого.
- **`auto`**: Режим по умолчанию, который не отдаёт предпочтения ни одному режиму декодирования, предоставляя браузеру решать, какой режим для пользователя оптимальное.

## Примеры

```js
var img = new Image();
img.decoding = "sync";
img.src = "img/logo.png";
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [\<img>: The Image Embed element](/ru/docs/Web/HTML/Element/img)
