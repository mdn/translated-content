---
title: Document.height
slug: conflicting/Web/API/Element/clientHeight
original_slug: Web/API/Document/height
---

{{APIRef("DOM")}}

> **Примечание:** Начиная с Gecko 6.0,` document.height `больше не поддерживается. Используйте `document.body.clientHeight`. Также смотрите: {{domxref("element.clientHeight")}}.

Возвращает высоту {{domxref("document")}} объекта. В большинстве случаев, она соответствует {{HTMLElement("body")}} элементу документа.

## Синтаксис

```
height_value = document.height
```

## Пример

```js
// вывести высоту документа
alert(document.height);
```

## Альтернативы

```
document.body.clientHeight
document.documentElement.clientHeight
document.documentElement.scrollHeight
```

## Спецификации

HTML5

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{domxref("document.width")}}
- {{domxref("Element.clientHeight")}}
- {{domxref("Element.scrollHeight")}}
