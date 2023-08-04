---
title: Document.bgColor
slug: Web/API/Document/bgColor
---

{{APIRef("DOM")}} {{ Deprecated_header() }}

Устаревшее свойство `bgColor` возвращает или устанавливает цвет фона текущего документа.

## Синтаксис

```
color = document.bgColor
document.bgColor =color
```

### Параметры

- `color` это строка представляющая цвет или в виде слова (например `red`) или шестнадцатеричного значения (т.е. "`#ff0000`").

## Пример

```
document.bgColor = "darkblue";
```

## Примечание

В Firefox это поле по умолчанию содержит белый цвет (`#ffffff` в шестнадцатеричном виде).

`Поле document.bgColor` признано устаревшим в [DOM Level 2 HTML](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-26809268). В качестве альтернативы рекомендуется использовать CSS стиль {{Cssxref("background-color")}} который доступен через DOM как `document.body.style.backgroundColor`. Другой альтернативой доступа является `document.body.bgColor`, хотя этот вариант также признан устаревшим в HTML 4.01 и также рекомендуется использовать CSS.

## Браузерная поддержка

{{Compat}}
