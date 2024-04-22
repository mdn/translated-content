---
title: RegExp.prototype.unicode
slug: Web/JavaScript/Reference/Global_Objects/RegExp/unicode
---

{{JSRef}}

Свойство unicode указывает, используется ли флаг «u» с регулярным выражением. Свойство unicode доступно только для чтения конкретного экземпляра регулярного выражения.

{{EmbedInteractiveExample("pages/js/regexp-prototype-unicode.html", "taller")}}{{js_property_attributes(0, 0, 1)}}

## Описание

Значение unicode является {{jsxref ("Boolean")}}. True, если используется флаг u, или false - противном случае. Флаг «u» позволяет использовать различные функции, связанные с Unicode. С флагом «u» любые escape-последовательности кода Unicode будут интерпретироваться как таковые, например.

Вы не можете напрямую изменить это свойство. Оно доступно только для чтения.

## Примеры

### Использование свойства `unicode`

```js
var regex = new RegExp("\u{61}", "u");

console.log(regex.unicode); // true
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("RegExp.lastIndex")}}
- {{jsxref("RegExp.prototype.global")}}
- {{jsxref("RegExp.prototype.ignoreCase")}}
- {{jsxref("RegExp.prototype.multiline")}}
- {{jsxref("RegExp.prototype.source")}}
- {{jsxref("RegExp.prototype.sticky")}}
