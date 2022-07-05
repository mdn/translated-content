---
title: Присваивание логического И (&&=)
slug: Web/JavaScript/Reference/Operators/Logical_AND_assignment
tags:
  - JavaScript
  - Language feature
  - Logical assignment
  - Operator
  - Reference
browser-compat: javascript.operators.logical_and_assignment
---
{{jsSidebar("Operators")}}

Оператор присваивания логического И (`x &&= y`) присваивает значение переменной `x` только в случае, если её текущее значение {{Glossary("truthy", "истинноподобно")}}.

{{EmbedInteractiveExample("pages/js/expressions-logical-and-assignment.html")}}

## Синтаксис

```js
expr1 &&= expr2
```

## Описание

### Сокращённое вычисление

[Логический оператор И](/ru/docs/Web/JavaScript/Reference/Operators/Logical_AND) вычисляется слева направо, делая возможным сокращённое вычисление выражения, согласно следующему правилу:

`(ложноподобное выражение) && следующее выражение` — вычисление останавливается на ложноподобном выражении;

Сокращённое вычисление хорошо тем, что `следующее выражение` не будет **вычислено**, т.е. всё, связанное с ним, будет проигнорировано (например, если
`следующее выражение` представляет собой вызов функции, то он никогда не произойдёт).

Оператор присваивания логического И также поддерживает сокращённое вычисление, поэтому `x &&= y` по сути то же самое, что и выражение ниже:

```js
x && (x = y);
```

В отличие от следующего примера, где операция присваивания произойдёт вне зависимости от результата вычисления:

```js example-bad
x = x && y;
```

## Примеры

### Использование оператора присваивания логического И

```js
let x = 0;
let y = 1;

x &&= 0; // 0
x &&= 1; // 0
y &&= 1; // 1
y &&= 0; // 0
```

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- [Логическое И (&&)](/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND)
- [Оператор нулевого слияния (`??`)](/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)
- [Присваивание побитового И (`&=`)](/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment)
- {{Glossary("Truthy", "Истиноподобное значение")}}
- {{Glossary("Falsy", "Ложноподобное значение")}}
