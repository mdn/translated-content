---
title: Декремент (--)
slug: Web/JavaScript/Reference/Operators/Decrement
---

{{jsSidebar("Operators")}}

Оператор декремента (`--`) уменьшает (вычитает единицу) свой операнд и возвращает значение.

{{InteractiveExample("JavaScript Demo: Expressions - Decrement operator")}}

```js interactive-example
let x = 3;
const y = x--;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:2, y:3"

let a = 3;
const b = --a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:2, b:2"
```

## Синтаксис

```
Operator: x-- or --x
```

## Описание

Если используется постфикс, с оператором после операнда (например, x--), оператор декремента уменьшает и возвращает значение перед уменьшением.

Если используется префикс, с оператором перед операндом (например, --x), оператор декремента уменьшает и возвращает значение после уменьшения.

## Примеры

### Постфиксный декремент

```js
let x = 3;
y = x--;

// y = 3
// x = 2
```

### Префиксный декремент

```js
let a = 2;
b = --a;

// a = 1
// b = 1
```

## Характеристики

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Addition operator](/ru/docs/Web/JavaScript/Reference/Operators/Addition)
- [Subtraction operator](/ru/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [Division operator](/ru/docs/Web/JavaScript/Reference/Operators/Division)
- [Multiplication operator](/ru/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [Remainder operator](/ru/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Exponentiation operator](/ru/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Increment operator](/ru/docs/Web/JavaScript/Reference/Operators/Increment)
- [Unary negation operator](/ru/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unary plus operator](/ru/docs/Web/JavaScript/Reference/Operators/Unary_plus)
