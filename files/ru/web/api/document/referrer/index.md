---
title: Document.referrer
slug: Web/API/Document/referrer
---

{{APIRef("DOM")}}

Возвращает [URI](http://www.w3.org/Addressing/#background) страницы, с которой был совершён переход на текущую.

## Синтаксис

```
var referrer = document.referrer;
```

### Значение

Вернёт пустую строку, если пользователь попал на страницу напрямую (не через ссылку, а, например, через закладку). Т.к. свойство возвращает строку, это не даёт вам доступ к DOM ссылающейся страницы.

Внутри элемента {{HTMLElement("iframe")}}, `Document.referrer` первоначально будет установлен в тоже значение, что и {{domxref("HTMLHyperlinkElementUtils/href", "href")}} объекта {{domxref("Window/location", "Window.location")}} родительского окна.

## Спецификация

- [DOM Level 2: referrer](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-95229140)

## Браузерная поддержка

{{Compat}}
