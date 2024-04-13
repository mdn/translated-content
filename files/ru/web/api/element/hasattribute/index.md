---
title: "Element: метод hasAttribute()"
slug: Web/API/Element/hasAttribute
l10n:
  sourceCommit: 990ab6637bb4d44f059597262cbf3c51abae79eb
---

{{APIRef("DOM")}}

Метод **`Element.hasAttribute()`** возвращает **булево** значение указывающее, имеет ли данный элемент указанный атрибут или нет.

## Синтаксис

```js-nolint
hasAttribute(name)
```

### Параметры

- `name`
  - : строка, представляющая имя атрибута.

### Возвращаемое значение

Логическое значение.

## Примеры

```js
const foo = document.getElementById("foo");
if (foo.hasAttribute("bar")) {
  // у элемента `foo` есть атрибут `bar`
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("Element.hasAttributes()")}}
- {{domxref("Element.getAttribute()")}}
- {{domxref("Element.setAttribute()")}}
- {{domxref("Element.removeAttribute()")}}
- {{domxref("Element.toggleAttribute()")}}
