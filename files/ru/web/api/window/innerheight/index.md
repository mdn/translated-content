---
title: Window.innerHeight
slug: Web/API/Window/innerHeight
---

Высота (в пикселях) области просмотра окна браузера, включая, если отображается, горизонтальную полосу прокрутки.

## Синтаксис

```
var intViewportHeight = window.innerHeight;
```

### Значение

По возвращению, `intViewportHeight` это высота области просмотра окна браузера.

Свойство `window.innerHeight` доступно только для чтения; у него нет значения по умолчанию.

## Примечания

Свойство innerHeight поддерживается в любом объекте окна, например {{domxref ("window")}}, фрейме, наборе фреймов или вторичном окне.

Существует алгоритм для получения высоты области просмотра, включая, если отображается, горизонтальную полосу прокрутки.

## Пример

### Assuming a frameset

```js
var intFrameHeight = window.innerHeight; // or

var intFrameHeight = self.innerHeight;
// вернёт высоту окна просмотра кадра в наборе кадров

var intFramesetHeight = parent.innerHeight;
// will return the height of the viewport of the closest frameset

var intOuterFramesetHeight = top.innerHeight;
// will return the height of the viewport of the outermost frameset
```

{{todo("link to an interactive demo here")}}

To change the size of a window, see {{domxref("window.resizeBy()")}} and {{domxref("window.resizeTo()")}}.

To get the outer height of a window, i.e. the height of the whole browser window, see {{domxref("window.outerHeight")}}.

### Графический пример

На следующем рисунке показана разница между externalHeight и innerHeight.

![innerHeight vs outerHeight illustration](/@api/deki/files/213/=FirefoxInnerVsOuterHeight2.png)

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("window.innerWidth")}}
- {{domxref("window.outerHeight")}}
- {{domxref("window.outerWidth")}}
