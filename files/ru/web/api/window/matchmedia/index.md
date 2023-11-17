---
title: Window.matchMedia()
slug: Web/API/Window/matchMedia
---

{{APIRef}}

## Сводка

Возвращает новый объект {{domxref("MediaQueryList")}}, использующийся для определения соответствия документа переданной строке [медиавыражения](/ru/docs/CSS/Media_queries).

## Синтаксис

```
mql = window.matchMedia(mediaQueryString)
```

где `mediaQueryString` является строкой медиавыражения, для которой будет возвращён новый объект {{domxref("MediaQueryList")}}.

## Пример

```js
if (window.matchMedia("(min-width: 400px)").matches) {
  /* the viewport is at least 400 pixels wide */
} else {
  /* the viewport is less than 400 pixels wide */
}
```

Данный код позволяет обрабатывать поведение по другому, когда размер окна очень узкий.

Смотрите [Использование медиавыражений из кода](/ru/docs/DOM/Using_media_queries_from_code) для дополнительных примеров.

## Поддержка браузерами

{{Compat}}

## Спецификация

- [The CSSOM View Module: The MediaQueryList Interface](http://dev.w3.org/csswg/cssom-view/#the-mediaquerylist-interface)

## Смотрите также

- [Media queries](/ru/docs/CSS/Media_queries)
- [Using media queries from code](/ru/docs/DOM/Using_media_queries_from_code)
- {{domxref("MediaQueryList")}}
- {{domxref("MediaQueryListListener")}}
