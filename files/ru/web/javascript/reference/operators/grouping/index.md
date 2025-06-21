---
title: Оператор группировки
slug: Web/JavaScript/Reference/Operators/Grouping
---

{{jsSidebar("Operators")}}

Оператор группировки `( )` контролирует порядок выполнения в выражениях.

{{InteractiveExample("JavaScript Demo: Expressions - Grouping operator")}}

```js interactive-example
console.log(1 + 2 * 3); // 1 + 6
// Expected output: 7

console.log(1 + 2 * 3); // 1 + 6
// Expected output: 7

console.log((1 + 2) * 3); // 3 * 3
// Expected output: 9

console.log(1 * 3 + 2 * 3); // 3 + 6
// Expected output: 9
```

## Синтаксис

```
 ( )
```

## Описание

Оператор группировки из пары круглых скобок вокруг выражения или подвыражения, переопределяющего нормальный [приоритет операторов](/ru/docs/Web/JavaScript/Reference/Operators/Operator_precedence), так что выражения с меньшим приоритетом выполняются раньше выражений с большим.

## Примеры

Переопределяем порядок, когда сначала выполняется умножение и деление, а потом сложение и вычитание, чтобы сначала выполнить сложение.

```js-nolint
let a = 1;
let b = 2;
let c = 3;

// обычный порядок
a + b * c; // 7
// выполнится так
a + (b * c); // 7

// теперь переопределим порядок
// сложение будет до умножения
(a + b) * c; // 9

// что эквивалентно следующему
a * c + b * c; // 9
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Приоритет операторов](/ru/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Operators/typeof", "typeof")}}
