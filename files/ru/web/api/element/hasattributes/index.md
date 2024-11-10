---
title: "Element: метод hasAttributes()"
slug: Web/API/Element/hasAttributes
l10n:
  sourceCommit: 990ab6637bb4d44f059597262cbf3c51abae79eb
---

{{APIRef("DOM")}}

Метод **`hasAttributes()`** интерфейса {{domxref("Element")}} возвращает логическое значение, указывающее, есть ли у текущего элемента атрибуты или нет.

## Синтаксис

```js-nolint
hasAttributes()
```

### Параметры

Нет.

### Возвращаемое значение

Логическое значение.

## Пример

```js
let foo = document.getElementById("foo");
if (foo.hasAttributes()) {
  // можно производить действия с 'foo.attributes'
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("Element.attributes")}}
- {{domxref("Element.hasAttribute()")}}
- {{domxref("Element.getAttribute()")}}
- {{domxref("Element.setAttribute()")}}
- {{domxref("Element.removeAttribute()")}}
- {{domxref("Element.toggleAttribute()")}}
