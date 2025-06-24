---
title: Строгое равенство (===)
slug: Web/JavaScript/Reference/Operators/Strict_equality
l10n:
  sourceCommit: 934ba3b7968030a573a28346dfcb371e796075a3
---

{{jsSidebar("Operators")}}

Оператор **строгого равенства (`===`)** проверяет, являются ли два его операнда равными, возвращая логическое значение. В отличие от оператора [нестрогого равенства](/ru/docs/Web/JavaScript/Reference/Operators/Equality) всегда считает операнды разных типов неравными.

{{InteractiveExample("JavaScript Demo: Expressions - Strict equality operator")}}

```js interactive-example
console.log(1 === 1);
// Expected output: true

console.log("hello" === "hello");
// Expected output: true

console.log("1" === 1);
// Expected output: false

console.log(0 === false);
// Expected output: false
```

## Синтаксис

```js-nolint
x === y
```

## Описание

Операторы строгого равенства (`===` и `!==`) производят проверку [равенства типов и значений](/ru/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness#strict_equality_using).

- Если типы операндов различаются, возвращает `false`.
- Если оба операнда являются объектами, возвращает `true` только если они оба ссылаются на один и тот же объект.
- Если оба операнда являются `null` или оба являются `undefined`, возвращает `true`.
- Если один из операндов является `NaN`, возвращает `false`.
- В остальных случаях:
  - Числа должны иметь идентичные значения. `+0` и `-0` считаются равными между собой.
  - Строки должны содержать одинаковые символы, в одинаковом порядке и регистре.
  - Логические значения должны оба быть `true` или оба `false`.

Основная разница между этим оператором и оператором [нестрогого равенства](/ru/docs/Web/JavaScript/Reference/Operators/Equality) (`==`) в том, что если у операндов разные типы, то оператор `==` попытается привести их к одному типу перед проверкой.

## Примеры

### Сравнение операндов одного типа

```js
"hello" === "hello"; // true
"hello" === "hola"; // false

3 === 3; // true
3 === 4; // false

true === true; // true
true === false; // false

null === null; // true
```

### Сравнение операндов разных типов

```js
"3" === 3; // false
true === 1; // false
null === undefined; // false
3 === new Number(3); // false
```

### Сравнение объектов

```js
const object1 = {
  key: "value",
};

const object2 = {
  key: "value",
};

console.log(object1 === object2); // false
console.log(object1 === object1); // true
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Нестрогое равенство (`==`)](/ru/docs/Web/JavaScript/Reference/Operators/Equality)
- [Нестрогое неравенство (`!=`)](/ru/docs/Web/JavaScript/Reference/Operators/Inequality)
- [Строгое неравенство (`!==`)](/ru/docs/Web/JavaScript/Reference/Operators/Strict_inequality)
