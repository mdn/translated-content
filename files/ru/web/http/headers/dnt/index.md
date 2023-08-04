---
title: DNT
slug: Web/HTTP/Headers/DNT
---

{{HTTPSidebar}}

The **`DNT`** (**D**o **N**ot **T**rack - Не отслеживать) заголовок указывает разрешает ли пользователь отслеживать себя. Он позволяет пользователю указать предпочитают они приватность персонифицированному контенту, подготавливаемому с использованием отслеживания.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>yes</td>
    </tr>
  </tbody>
</table>

## Синтаксис

```
DNT: 0
DNT: 1
```

## Директивы

- 0
  - : Пользователь разрешает отслеживание на целевом сайте.
- 1
  - : Пользователь предпочитает не отслеживаться на целевом сайте.

## Примеры

### Чтение статуса Do Not Track из JavaScript

DNT предпочтение пользователя может быть считано из JavaScript используя свойство {{domxref("Navigator.doNotTrack")}} :

```js
navigator.doNotTrack; // "0" or "1"
```

## Спецификация

{{Specifications}}

## Совместимость браузеров

{{Compat}}

## Смотрите также

- {{domxref("Navigator.doNotTrack")}}
- {{HTTPHeader("Tk")}} header
- [Do Not Track on Wikipedia](https://en.wikipedia.org/wiki/Do_Not_Track)
- [What Does the "Track" in "Do Not Track" Mean? – EFF](https://www.eff.org/deeplinks/2011/02/what-does-track-do-not-track-mean)
- [donottrack.us](http://donottrack.us/)
- DNT browser settings help:

  - [Firefox](https://www.mozilla.org/en-US/firefox/dnt/)
  - [Chrome](https://support.google.com/chrome/answer/2790761)
