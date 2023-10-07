---
title: HTMLHyperlinkElementUtils.host
slug: Web/API/HTMLAnchorElement/host
---

{{ApiRef("URL API")}}

Свойство **`HTMLHyperlinkElementUtils.host`** – это {{domxref("USVString")}}, содержащий хост, а именно _имя хоста_ и, если _порт_ не пустой, `':'` и _порт_.

## Синтаксис

```
string = object.host;
object.host = string;
```

## Примеры

```js
var anchor = document.createElement("a");

anchor.href =
  "https://developer.mozilla.org/en-US/HTMLHyperlinkElementUtils.host";
anchor.host == "developer.mozilla.org";

anchor.href =
  "https://developer.mozilla.org:443/en-US/HTMLHyperlinkElementUtils.host";
anchor.host == "developer.mozilla.org";
// Номер порта пропущен, потому что 443 используется по умолчанию

anchor.href =
  "https://developer.mozilla.org:4097/en-US/HTMLHyperlinkElementUtils.host";
anchor.host == "developer.mozilla.org:4097";
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Миксин {{domxref("HTMLHyperlinkElementUtils")}}, к которому принадлежит это свойство.
