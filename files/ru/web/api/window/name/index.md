---
title: Window.name
slug: Web/API/Window/name
---

{{APIRef}}

## Описание

Свойство `name` может использоваться для установки и получения имени текущего окна. Оно становится доступным после его создания.

## Синтаксис

```js
// получение значения
string = window.name;
// установка значения
window.name = string;
```

## Пример

```js
window.name = "lab_view";
```

## Замечания

Имя окна используется, в основном, для задания свойства `target` гиперссылок и форм.

Также оно может использоваться в фреймворках для предоставления кросс-доменного обмена сообщениями (например, [SessionVars](http://www.thomasfrank.se/sessionvars.html) и [dojox.io.windowName](http://www.sitepen.com/blog/2008/07/22/windowname-transport/) из Dojo) как более безопасная альтернатива JSONP.
