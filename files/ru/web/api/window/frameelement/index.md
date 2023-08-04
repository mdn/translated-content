---
title: Window.frameElement
slug: Web/API/Window/frameElement
---

{{ ApiRef() }}

## Сводка

Возвращает элемент (например `<iframe>` или `<object>`), в который встроено окно, или `null`, если это окно верхнего уровня.

## Синтаксис

```
frameEl = window.frameElement;
```

- `frameEl` это элемент, в который встроено окно, или `null`, если это окно верхнего уровня

## Пример

```js
var frameEl = window.frameElement;
// Если мы внутри фрейма, то изменить его URL на 'http://mozilla.org/'
if (frameEl) {
  frameEl.src = "http://mozilla.org/";
}
```

## Примечания

Заметьте, что несмотря на своё имя, свойство также работает для документов внутри `<object>` и других встраиваемых элементов.

## Спецификация

[WHATWG](http://www.whatwg.org/specs/web-apps/current-work/#dom-frameelement)

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("window.frames")}} возвращает массивоподобный объект, включающий список прямых суб-фреймов данного окна.
- {{domxref("window.parent")}} возвращает родительское окно, которое является окном, содержащим frameElement дочернего окна.
