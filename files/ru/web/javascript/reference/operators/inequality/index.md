---
title: Нестрогое неравенство (!=)
slug: Web/JavaScript/Reference/Operators/Inequality
l10n:
  sourceCommit: f616cb604af851f77f8cd59368e94ee3e43a8838
---

{{jsSidebar("Operators")}}

Оператор **нестрогого неравенства (`!=`)** проверяет, являются ли два его операнда неравными, возвращая логическое значение.
В отличие от оператора [строгого неравенства](/ru/docs/Web/JavaScript/Reference/Operators/Strict_inequality) пытается привести и сравнить операнды разных типов.

{{EmbedInteractiveExample("pages/js/expressions-inequality.html")}}

## Синтаксис

```js-nolint
x != y
```

## Описание

Оператор нестрогого неравенства проверяет, являются ли его операнды неравными, что является отрицанием оператора [нестрого равенства](/ru/docs/Web/JavaScript/Reference/Operators/Equality). Поэтому следующие две строки всегда дадут одинаковый результат:

```js
x != y;

!(x == y);
```

Подробное описание алгоритма сравнения есть на странице оператора [нестрого равенства](/ru/docs/Web/JavaScript/Reference/Operators/Equality).

Так же как и оператор нестрогого равенства, оператор нестрогого неравенства пытается привести и сравнить операнды разных типов:

```js
3 != "3"; // false
```

Чтобы предотвратить такое поведение при необходимости считать операнды разных типов неравными, используйте оператор [строгого неравенства](/ru/docs/Web/JavaScript/Reference/Operators/Strict_inequality):

```js
3 !== "3"; // true
```

## Примеры

### Сравнение без приведения типов

```js
1 != 2; // true
"hello" != "hola"; // true

1 != 1; // false
"hello" != "hello"; // false
```

### Сравнение с приведением типов

```js
"1" != 1; // false
1 != "1"; // false
0 != false; // false
0 != null; // true
0 != undefined; // true
0 != !!null; // false, обратите внимание на двойное логическое отрицание
0 != !!undefined; // false, обратите внимание на двойное логическое отрицание
null != undefined; // false

const number1 = new Number(3);
const number2 = new Number(3);
number1 != 3; // false
number1 != number2; // true
```

### Сравнение объектов

```js
const object1 = {
  key: "value",
};

const object2 = {
  key: "value",
};

console.log(object1 != object2); // true
console.log(object1 != object1); // false
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Нестрогое равенство (`==`)](/ru/docs/Web/JavaScript/Reference/Operators/Equality)
- [Строгое равенство (`===`)](/ru/docs/Web/JavaScript/Reference/Operators/Strict_equality)
- [Строгое неравенство (`!==`)](/ru/docs/Web/JavaScript/Reference/Operators/Strict_inequality)
