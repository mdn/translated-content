---
title: Document.alinkColor
slug: Web/API/Document/alinkColor
---

{{APIRef("DOM")}} {{ Deprecated_header() }}

Возвращает или задаёт цвет активной ссылки в теле документа. Ссылка активна в течение времени между событиями mousedown и mouseup.

## Синтаксис

```
color = document.alinkColor
document.alinkColor = color
```

Color - строка, содержащая имя цвета (например, `blue`, `dark blue` и т.д.) или шестнадцатеричное значение цвета(`#0000FF`)

## Примечание

Значение по умолчанию для этого свойства в Mozilla Firefox является красным (`#ee0000` в шестнадцатеричном формате).

`document.alinkColor` устарел в [DOM Level 2 HTML](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-26809268). Одним из вариантов является CSS-селектор {{ Cssxref(":active") }}.

Другой альтернативой является document.body.aLink, хотя это [устарело в HTML 4.01](http://www.w3.org/TR/html401/struct/global.html#adef-alink) в пользу альтернативы CSS.

[Gecko](en/Gecko) поддерживает оба варианта `alinkColor`/`:active` and {{ Cssxref(":focus") }}. Internet Explorer 6 и 7 поддерживает `alinkColor` / `:active` только для [HTML ссылок с якорем (\<a>)](en/HTML/Element/a) и поведение у них такое же, как `:focus` в Gecko. В IE нет поддержки `:focus`.

## Браузерная поддержка

{{Compat}}
