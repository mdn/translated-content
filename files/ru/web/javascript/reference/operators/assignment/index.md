---
title: Присваивание (=)
slug: Web/JavaScript/Reference/Operators/Assignment
---

{{jsSidebar("Operators")}}

Простой оператор присваивания (`=`) используется для присваивания значения переменной. Операция присваивания вычисляется в присваиваемую величину. Присваивание по цепочке (_chaining_) используется для назначения нескольким переменным одинакового значения.

{{InteractiveExample("JavaScript Demo: Expressions - Assignment")}}

```js interactive-example
let x = 2;
const y = 3;

console.log(x);
// Expected output: 2

console.log((x = y + 1)); // 3 + 1
// Expected output: 4

console.log((x = x * y)); // 4 * 3
// Expected output: 12
```

## Синтаксис

```
Оператор: x = y
```

## Примеры

### Простое и цепное присваивание

```js
// Предположим следующие переменные и их значения
//  x = 5
//  y = 10
//  z = 25

x = y; // x будет присвоено значение 10
x = y = z; // x, y и z будут равны 25
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Assignment operators in the JS guide](/ru/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment)
