---
title: Строгое равенство (===)
slug: Web/JavaScript/Reference/Operators/Strict_equality
---

{{jsSidebar("Operators")}}

Оператор **строгого равенства (`===`)** проверяет являются ли два операнда одинаковыми возвращая результат в виде Boolean значения. В отличие от оператора [нестрогого равенства](/ru/docs/Web/JavaScript/Reference/Operators/Equality),
оператор строгого равенства (`===`) всегда проверяет равенство без приведения типов (считает операнды разных типов разными операндами).

{{EmbedInteractiveExample("pages/js/expressions-strict-equality.html")}}

## Синтаксис

```js-nolint
x === y
```

## Описание

Операторы строгого равенства (`===` и `!==`) представляют собой проверку [равенства типов и значений](/ru/docs/Web/JavaScript/Equality_comparisons_and_sameness#strict_equality_using).

- Если типы операндов различаются, возвращает `false`.
- Если оба операнда являются объектами, возвращает `true` только если они оба ссылаются на один и тот же объект.
- Если оба операнда являются `null` или оба являются `undefined`, возвращает `true`.
- Если один из операндов является `NaN`, возвращает `false`.
- В противном случае, сравнивает значения операндов:

  - Числа сравниваются по значению. `+0` и `-0` считаются равынми между собой.
  - Строки сравниваются посимвольно: по составу, порядку символов и их регистру.
  - Булевы значения должны оба быть `true` или оба `false`.

Основная разница между этим оператором и оператором [нестрогого равенства](/ru/docs/Web/JavaScript/Reference/Operators/Equality) (`==`) в том, что если операнды различаются типами, то оператор `==` попытается сперва привести их к одному типу, а лишь затем сравнить.

## Примеры

### Сравнение операндов одинакового типа

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
