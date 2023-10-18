---
title: 'SyntaxError: "0"-prefixed octal literals and octal escape seq. are deprecated'
slug: Web/JavaScript/Reference/Errors/Deprecated_octal
---

{{jsSidebar("Errors")}}

## Сообщение

```
SyntaxError: Octal numeric literals and escape characters not allowed in strict mode (Edge)
SyntaxError: "0"-prefixed octal literals and octal escape sequences are deprecated;
for octal literals use the "0o" prefix instead
```

Перевод:

```
Ошибка синтаксиса: Восьмеричные числовые литералы и escape-последовательности, не разрешены в строгом режиме (Edge)
Ошибка синтаксиса: восьмеричные литералы с префиксом "0", и восьмеричные escape-последовательности считаются устаревшими;
для восьмеричных литералов используйте префикс "0o"
```

## Тип ошибки

{{jsxref("SyntaxError")}} только в строгом режиме.

## Что пошло не так?

Восьмеричные литералы и восьмеричные escape-последовательности являются устаревшими и будут выдавать {{jsxref("SyntaxError")}} в строгом режиме. С ECMAScript2015 стандартным синтаксисом является использование ведущего нуля с последующей заглавной или строчной латинской буквой "O" (`0o` или `0O`)

## Примеры

### "0"-prefixed octal literals (восьмеричные литералы с префиксом "0")<br>

```js example-bad
"use strict";

03;

// Ошибка синтаксиса: восьмеричные литералы с префиксом "0" и восьмеричные escape-последовательности считаются устаревшими
```

### Octal escape sequences (Восьмеричные escape-последовательности)

```js example-bad
"use strict";

"\251";

// SyntaxError: восьмеричные литералы с префиксом "0" и восьмеричные escape-последовательности считаются устаревшими
```

### Valid octal numbers (Допустимые восьмеричные числа)

Используйте ноль с последующей латинской буквой "o" или "O".

```js example-good
0o3;
```

Вместо escape-последовательностей можно использовать шестнадцатеричные escape-последовательности:

```js
"\xA9";
```

## Смотрите также

- [Lexical grammar](/ru/docs/Web/JavaScript/Reference/Lexical_grammar#Octal)(Лексическая грамматика)
- [Warning: 08/09 is not a legal ECMA-262 octal constant](/ru/docs/Web/JavaScript/Reference/Errors/Bad_octal)(Предупреждение: 08/09 нет законной восьмиштырьковой константы ECMA-262)
