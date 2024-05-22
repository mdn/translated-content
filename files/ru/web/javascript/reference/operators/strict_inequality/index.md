---
title: Строгое неравенство (!==)
slug: Web/JavaScript/Reference/Operators/Strict_inequality
l10n:
  sourceCommit: f616cb604af851f77f8cd59368e94ee3e43a8838
---

{{jsSidebar("Operators")}}

Оператор **строгого неравенства (`!==`)** проверяет, являются ли два операнда неравными, возвращая логическое значение. В отличие от оператора [нестрогого неравенства](/ru/docs/Web/JavaScript/Reference/Operators/Inequality) всегда считает операнды разных типов неравными.

{{EmbedInteractiveExample("pages/js/expressions-strict-inequality.html")}}

## Синтаксис

```js-nolint
x !== y
```

## Описание

Оператор строгого неравенства проверяет, являются ли два операнда неравными, что является отрицанием оператора [строгого равенства](/ru/docs/Web/JavaScript/Reference/Operators/Strict_equality). Поэтому две строки ниже всегда дадут одинаковый результат:

```js
x !== y;

!(x === y);
```

Подробное описание алгоритма сравнения есть на странице оператора [строгого равенства](/ru/docs/Web/JavaScript/Reference/Operators/Strict_equality).

Так же как и оператор строгого равенства, оператор строгого неравенства всегда считает операнды разных типов неравными.

```js
3 !== "3"; // true
```

## Примеры

### Сравнение операндов одного типа

```js
"hello" !== "hello"; // false
"hello" !== "hola"; // true

3 !== 3; // false
3 !== 4; // true

true !== true; // false
true !== false; // true

null !== null; // false
```

### Сравнение операндов разных типов

```js
"3" !== 3; // true
true !== 1; // true
null !== undefined; // true
```

### Сравнение объектов

```js
const object1 = {
  key: "value",
};

const object2 = {
  key: "value",
};

console.log(object1 !== object2); // true
console.log(object1 !== object1); // false
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Нестрогое равенство (`==`)](/ru/docs/Web/JavaScript/Reference/Operators/Equality)
- [Нестрогое неравенство (`!=`)](/ru/docs/Web/JavaScript/Reference/Operators/Inequality)
- [Строгое равенство (`===`)](/ru/docs/Web/JavaScript/Reference/Operators/Strict_equality)
