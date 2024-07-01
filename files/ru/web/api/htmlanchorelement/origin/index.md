---
title: HTMLHyperlinkElementUtils.origin
slug: Web/API/HTMLAnchorElement/origin
---

{{APIRef("URL API")}}

Свойство только для чтения **`HTMLHyperlinkElementUtils.origin`** – это {{domxref("USVString")}}, содержащий сериализованные в Unicode протокол, хост и порт, а именно:

- для URL, начинающегося с `http` или `https`, – протокол, `'://'`, домен, `':'`, порт (порт по умолчанию, `80` и `443` соответственно, если указаны явно);
- для URL, начинающегося с `file:`, – значение зависит от браузера;
- для URL, начинающегося с `blob:`, – основа URL следующего за `blob:`. Т.е. для `"blob:https://mozilla.org"` будет `"https://mozilla.org".`

{{AvailableInWorkers}}

## Синтаксис

```
string = object.origin;
```

## Примеры

```js
// На этой странице
var result = window.location.origin; // Вернёт: 'https://developer.mozilla.org'
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Миксин {{domxref("HTMLHyperlinkElementUtils")}}, к которому принадлежит это свойство.
