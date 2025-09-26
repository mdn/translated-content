---
title: "Navigator: свойство doNotTrack"
slug: Web/API/Navigator/doNotTrack
l10n:
  sourceCommit: 44cf523714745d626317192bfbe849b47144f3ab
---

{{APIRef("HTML DOM")}} {{Deprecated_Header}} {{Non-standard_Header}}

Свойство **`Navigator.doNotTrack`** возвращает настройку пользователя «Не отслеживать», которая указывает, просит ли пользователь веб-сайты и рекламодателей не использовать отслеживание.

Значение свойства отражает значение HTTP-заголовка {{HTTPHeader("DNT")}}, то есть `"1"`, `"0"` или `null`.

## Значение

Строка или `null`.

## Пример

```js
console.log(navigator.doNotTrack);
// выведет "1", если DNT включен; "0", если пользователь дал согласие на отслеживание; в противном случае null
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- HTTP-заголовок {{HTTPHeader("DNT")}}
