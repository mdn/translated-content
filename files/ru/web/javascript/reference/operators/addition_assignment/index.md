---
title: Сложение с присваиванием (+=)
slug: Web/JavaScript/Reference/Operators/Addition_assignment
---

{{jsSidebar("Operators")}}

Оператор сложения с присваиванием (`+=`) добавляет значение правого операнда к переменной и присваивает переменной результат. Типы двух операндов определяют поведение оператора сложения с присваиванием. Добавление или конкатенация возможны.

{{InteractiveExample("JavaScript Demo: Expressions - Addition assignment operator")}}

```js interactive-example
let a = 2;
let b = "hello";

console.log((a += 3)); // Addition
// Expected output: 5

console.log((b += " world")); // Concatenation
// Expected output: "hello world"
```

## Синтаксис

```
Оператор: x += y
Значение: x  = x + y
```

## Примеры

### Использование сложения с присваиванием

```js
// Assuming the following variables
//  foo = 'foo'
//  bar = 5
//  baz = true

// Number + Number -> addition
bar += 2; // 7

// Boolean + Number -> addition
baz += 1; // 2

// Boolean + Boolean -> addition
baz += false; // 1

// Number + String -> concatenation
bar += "foo"; // "5foo"

// String + Boolean -> concatenation
foo += false; // "foofalse"

// String + String -> concatenation
foo += "bar"; // "foobar"
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Assignment operators in the JS guide](/ru/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment)
- [Оператор сложения](/ru/docs/Web/JavaScript/Reference/Operators/Addition)
