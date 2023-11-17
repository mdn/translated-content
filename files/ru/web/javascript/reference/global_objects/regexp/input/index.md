---
title: RegExp.input ($_)
slug: Web/JavaScript/Reference/Global_Objects/RegExp/input
---

{{JSRef}} {{non-standard_header}}

Нестандартное свойство **`input`** является статическим свойством регулярных выражений. Оно содержит строку, для которой произошло совпадение по регулярному выражению. Значение свойства также можно получить как `RegExp.$_`.

## Синтаксис

```
RegExp.input
RegExp.$_
```

## Описание

Поскольку свойство `input` статическое, к нему можно обратиться только как `RegExp.input` или `RegExp.$_`.

Значение данного свойства изменяется каждый раз при возникновении совпадений с регулярным выражением для новой строки.

## Примеры

### Использование `input` и `$_`

```js
var re = /hi/g;
re.test("hi there!");
RegExp.input; // "hi there!"
re.test("foo"); // новая проверка, совпадений нет
RegExp.$_; // "hi there!"
re.test("hi world!"); // новая проверка, совпадение есть
RegExp.$_; // "hi world!"
```

## Спецификация

Не стандартизированной. Не является частью какой-либо спецификации.

## Поддержка в браузерах

{{Compat}}

## Смотрите также

- {{non-standard_inline}} {{jsxref("RegExp.lastMatch", "RegExp.lastMatch ($&amp;)")}}
- {{non-standard_inline}} {{jsxref("RegExp.lastParen", "RegExp.lastParen ($+)")}}
- {{non-standard_inline}} {{jsxref("RegExp.leftContext", "RegExp.leftContext ($`)")}}
- {{non-standard_inline}} {{jsxref("RegExp.rightContext", "RegExp.rightContext ($')")}}
- {{non-standard_inline}} {{jsxref("RegExp.n", "RegExp.$1-$9")}}
