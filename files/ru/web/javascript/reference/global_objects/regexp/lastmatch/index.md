---
title: RegExp.lastMatch ($&)
slug: Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch
---

{{JSRef}} {{non-standard_header}}

Нестандартное свойство **lastMatch** является доступным только для чтения статическим свойством регулярных выражений. Оно содержит последние совпавшие символы. Значение свойства также можно получить как `RegExp.$&`.

## Синтаксис

```
RegExp.lastMatch
RegExp['$&']
```

## Описание

Поскольку свойство `lastMatch` статическое, к нему можно обратиться только как `RegExp.lastMatch` или `RegExp['$&'].`

Значение свойства `lastMatch` доступно только для чтение и изменяется при успешном совпадении с регулярным выражением.

Поскольку использование символа "&" приведёт к выбрасыванию ошибки {{jsxref("SyntaxError")}}, обратиться к данному свойству с помощью точечной нотации(`RegExp.$&`) нельзя. Вместо этого стоит использовать [скобочную нотацию](/ru/docs/Web/JavaScript/Reference/Operators/Property_Accessors) (`RegExp['$&']`).

## Примеры

### Использование `lastMatch` и `$&`

```js
var re = /hi/g;
re.test("hi there!");
RegExp.lastMatch; // "hi"
RegExp["$&"]; // "hi"
```

## Спецификация

Не стандартизированной. Не является частью какой-либо спецификации.

## Поддержка в браузерах

{{Compat}}

## Смотрите также

- {{non-standard_inline}} {{jsxref("RegExp.input", "RegExp.input ($_)")}}
- {{non-standard_inline}} {{jsxref("RegExp.lastParen", "RegExp.lastParen ($+)")}}
- {{non-standard_inline}} {{jsxref("RegExp.leftContext", "RegExp.leftContext ($`)")}}
- {{non-standard_inline}} {{jsxref("RegExp.rightContext", "RegExp.rightContext ($')")}}
- {{non-standard_inline}} {{jsxref("RegExp.n", "RegExp.$1-$9")}}
