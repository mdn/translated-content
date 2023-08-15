---
title: Оператор группировки
slug: Web/JavaScript/Reference/Operators/Grouping
---

{{jsSidebar("Operators")}}

Оператор группировки `( )` контролирует порядок выполнения в выражениях.

{{EmbedInteractiveExample("pages/js/expressions-groupingoperator.html")}}

## Синтаксис

```
 ( )
```

## Описание

Оператор группировки из пары круглых скобок вокруг выражения или подвыражения, переопределяющего нормальный [приоритет операторов](/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence), так что выражения с меньшим приоритетом выполняются раньше выражений с большим.

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

## Поддержка браузерами

{{Compat}}

## Смотрите также

- [Приоритет операторов](/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Operators/typeof", "typeof")}}
