---
title: "SyntaxError: a declaration in the head of a for-of loop can't have an initializer"
slug: Web/JavaScript/Reference/Errors/Invalid_for-of_initializer
---

{{jsSidebar("Errors")}}

## Сообщение

```
SyntaxError: a declaration in the head of a for-of loop can't have an initializer (Firefox)

SyntaxError: for-of loop variable declaration may not have an initializer. (Chrome)
```

## Тип ошибки

{{jsxref("SyntaxError")}}

## Что случилось?

В заголовке цикла [for...of](/ru/docs/Web/JavaScript/Reference/Statements/for...of) инициализируется переменная. Иными словами, переменная объявляется и получает значение|`for (var i = 0 of iterable)`|. В подобных циклах это не допускается. Инициализировать переменные можно в циклах [`for`](/ru/docs/Web/JavaScript/Reference/Statements/for).

## Примеры

### Неправильный цикл `for-of`

```js example-bad
let iterable = [10, 20, 30];

for (let value = 50 of iterable) {
  console.log(value);
}

// SyntaxError: a declaration in the head of a for-of loop can't
// have an initializer
```

### Правильный цикл `for-of`

Надо убрать инициализацию (`value = 50`) в заголовке цикла `for-of`. Если требуется использовать смещение 50, это можно сделать в теле цикла.

```js example-good
let iterable = [10, 20, 30];

for (let value of iterable) {
  value += 50;
  console.log(value);
}
// 60
// 70
// 80
```

## Смотрите также

- [`for...of`](/ru/docs/Web/JavaScript/Reference/Statements/for...of)
- [`for...in`](/ru/docs/Web/JavaScript/Reference/Statements/for...in) – В строгом режиме инициализация тоже не разрешается ([SyntaxError: for-in loop head declarations may not have initializers](/ru/docs/Web/JavaScript/Reference/Errors/Invalid_for-in_initializer))
- [`for`](/ru/docs/Web/JavaScript/Reference/Statements/for) – Инициализация во время итерации разрешена.
