---
title: RegExp.prototype.unicode
slug: Web/JavaScript/Reference/Global_Objects/RegExp/unicode
---

{{JSRef}}

Свойство unicode указывает, используется ли флаг «u» с регулярным выражением. Свойство unicode доступно только для чтения конкретного экземпляра регулярного выражения.

{{InteractiveExample("JavaScript Demo: RegExp.prototype.unicode", "taller")}}

```js interactive-example
const regex1 = new RegExp("\u{61}");
const regex2 = new RegExp("\u{61}", "u");

console.log(regex1.unicode);
// Expected output: false

console.log(regex2.unicode);
// Expected output: true

console.log(regex1.source);
// Expected output: "a"

console.log(regex2.source);
// Expected output: "a"
```

{{js_property_attributes(0, 0, 1)}}

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
