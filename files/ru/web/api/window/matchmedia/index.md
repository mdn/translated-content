---
title: Window.matchMedia()
slug: Web/API/Window/matchMedia
---

{{APIRef}}

## Сводка

Возвращает новый объект {{domxref("MediaQueryList")}}, использующийся для определения соответствия документа переданной строке [медиавыражения](/ru/docs/Web/CSS/CSS_media_queries/Using_media_queries).

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

Смотрите [Использование медиавыражений из кода](/ru/docs/Web/CSS/CSS_media_queries/Testing_media_queries) для дополнительных примеров.

## Совместимость с браузерами

{{Compat}}

## Спецификации

- [The CSSOM View Module: The MediaQueryList Interface](https://dev.w3.org/csswg/cssom-view/#the-mediaquerylist-interface)

## Смотрите также

- [Media queries](/ru/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Using media queries from code](/ru/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- {{domxref("MediaQueryList")}}
- {{domxref("MediaQueryListListener")}}
