---
title: "SyntaxError: for-in loop head declarations may not have initializers"
slug: Web/JavaScript/Reference/Errors/Invalid_for-in_initializer
---

{{jsSidebar("Errors")}}

Исключение "for-in loop head declarations may not have initializers" возникает [в строгом режиме](/ru/docs/Web/JavaScript/Reference/Strict_mode), когда в управляющей конструкции цикла [for...in](/ru/docs/Web/JavaScript/Reference/Statements/for...in) присваивается значение переменной-итератору, например `for (var i = 0 in obj)`. В нестрогом режиме также будет возникать исключение, если переменная-итератор объявлена через `const`, например `for (const i = 0 in obj)`.

## Сообщение

```plain
SyntaxError: for-in loop variable declaration may not have an initializer. (V8-based)
SyntaxError: for-in loop head declarations may not have initializers (Firefox)
SyntaxError: a lexical declaration in the head of a for-in loop can't have an initializer (Firefox)
SyntaxError: Cannot assign to the loop variable inside a for-in loop header. (Safari)
```

## Тип ошибки

{{jsxref("SyntaxError")}} только в строгом режиме.

## Что не так?

Управляющая конструкция цикла [for...in](/ru/docs/Web/JavaScript/Reference/Statements/for...in) содержит выражение инициализации. Другими словами, при создании цикла присваивается значение переменной-итератору. В нестрогом режиме эта конструкция игнорируется, а поведение равно `for (var i = 0 in obj)`. В [строгом же режиме](/ru/docs/Web/JavaScript/Reference/Strict_mode), будет ошибка синтаксиса `SyntaxError`. Однако, даже в нестрогом режиме присвоение значения переменной-итератору, объявленной через `const`, вроде `for (const i = 0 in obj)`, приведёт к ошибке синтаксиса `SyntaxError`.

## Примеры

Данный пример приведёт к ошибке синтаксиса:

```js-nolint example-bad
"use strict";

const obj = { a: 1, b: 2, c: 3 };

for (const i = 0 in obj) {
  console.log(obj[i]);
}

// SyntaxError: for-in loop head declarations may not have initializers
```

### Правильный цикл for-in

Нужно удалить присвоение значения (`i = 0`) из инициализации цикла for-in.

```js example-good
"use strict";

const obj = { a: 1, b: 2, c: 3 };

for (const i in obj) {
  console.log(obj[i]);
}
```

### Итерация массива

Цикл for...in не должен использоваться для итерации массива. Вы намеревались использовать цикл for вместо цикла for-in для итерации {{jsxref("Array")}}? Цикл for позволяет также установить инициализатор:

```js example-good
const arr = ["a", "b", "c"];

for (let i = 2; i < arr.length; i++) {
  console.log(arr[i]);
}

// "c"
```

## Смотрите также

- [`for...in`](/ru/docs/Web/JavaScript/Reference/Statements/for...in)
- [`for...of`](/ru/docs/Web/JavaScript/Reference/Statements/for...of)
- [`for`](/ru/docs/Web/JavaScript/Reference/Statements/for)
