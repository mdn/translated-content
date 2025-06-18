---
title: Сложение (+)
slug: Web/JavaScript/Reference/Operators/Addition
---

{{jsSidebar("Operators")}}

Оператор сложения (+) создаёт сумму числовых операндов или конкатенацию строк.

{{InteractiveExample("JavaScript Demo: Expressions - Addition operator")}}

```js interactive-example
console.log(2 + 2);
// Expected output: 4

console.log(2 + true);
// Expected output: 3

console.log("hello " + "everyone");
// Expected output: "hello everyone"

console.log(2001 + ": A Space Odyssey");
// Expected output: "2001: A Space Odyssey"
```

## Синтаксис

```js
x + y;
```

## Примеры

### Сложение чисел

```js
// Number + Number -> addition
1 + 2; // 3

// Boolean + Number -> addition
true + 1; // 2

// Boolean + Boolean -> addition
false + false; // 0
```

### Сложение строк

```js
// String + String -> concatenation
"foo" + "bar"; // "foobar"

// Number + String -> concatenation
5 + "foo"; // "5foo"

// String + Boolean -> concatenation
"foo" + false; // "foofalse"
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Subtraction operator](/ru/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [Division operator](/ru/docs/Web/JavaScript/Reference/Operators/Division)
- [Multiplication operator](/ru/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [Remainder operator](/ru/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Exponentiation operator](/ru/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Increment operator](/ru/docs/Web/JavaScript/Reference/Operators/Increment)
- [Decrement operator](/ru/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unary negation operator](/ru/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unary plus operator](/ru/docs/Web/JavaScript/Reference/Operators/Unary_plus)
