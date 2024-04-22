---
title: HTMLMediaElement.duration
slug: Web/API/HTMLMediaElement/duration
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.duration`** свойство возвращает длину медиа в секундах или ноль, если данные по медиа недоступны.

## Синтаксис

```js
var myDuration = audioOrVideo.duration;
```

### Значения

`Double`. Если медиа данные доступны, но длина неизвестна, то duration будет `NaN`. Если медиа загружается в фоновом режиме и не имеет заранее определённой длины, значение равно `Inf`.

## Пример

```js
var obj = document.createElement("video");
console.log(obj.duration); // NaN
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- The interface defining it, {{domxref("HTMLMediaElement")}}.
