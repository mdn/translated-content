---
title: Window.parent
slug: Web/API/Window/parent
---

{{APIRef}}

Ссылка на родительский объект window или родительский iframe.

Если у объекта window нет родителя, то свойство parent данного объекта будет ссылаться на сам объект.

Если window загружен внутри {{htmlelement("iframe")}}, {{htmlelement("object")}}, или {{htmlelement("frame")}}, то его parent - это объект window с элементом содержащим данный window.

## Синтаксис

```
parentWindow = window.parent;
```

## Пример

```js
if (window.parent != window.top) {
  // мы находимся глубже чем один уровень
}
```

## Спецификация

- [HTML5](http://www.whatwg.org/specs/web-apps/current-work/multipage/browsers.html#dom-parent)

## Смотрите также

- {{domxref("window.frameElement")}} возвращает элемент (например `<iframe>`), который содержит объект window.
- {{domxref("window.top")}} возвращает ссылку на объект window самого верхнего уровня.
