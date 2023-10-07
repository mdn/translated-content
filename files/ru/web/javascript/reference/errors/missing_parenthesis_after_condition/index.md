---
title: "SyntaxError: missing ) after condition"
slug: Web/JavaScript/Reference/Errors/Missing_parenthesis_after_condition
---

{{jsSidebar("Errors")}}

## Сообщение

```
SyntaxError: missing ) after condition
```

## Тип ошибки

{{jsxref("SyntaxError")}}

## Что пошло не так?

Произошла ошибка в написании условия if. В любом языке программирования код принимает решение выполнять действия в зависимости от входных параметров. Оператор if выполняет действия, если условие истинно. В JavaScript это условие должно заключаться в скобки после ключевого слова if, например:

```js
if (condition) {
  // сделать что-то если условие истинно
}
```

## Примеры

Это может быть просто недосмотр, внимательно проверьте все скобки в коде.

```js example-bad
if (3 > Math.PI {
  console.log("Что?");
}

// SyntaxError: missing ) after condition
```

Чтобы исправить ошибку вы должны поставить закрывающую скобку после условия.

```js example-good
if (3 > Math.PI) {
  console.log("Что?");
}
```

Если вы пришли из других языков программирования, то можете случайно использовать ключевые слова, которые в JavaScript обозначают что-то другое или вообще не имеют смысла.

```js example-bad
if (done is true) {
 console.log("мы сделали!");
}

// SyntaxError: missing ) after condition
```

Вместо этого используйте нужный [оператор сравнения](/ru/docs/Web/JavaScript/Reference/Operators/Операторы_сравнения). Для примера:

```js example-good
if (done === true) {
  console.log("мы сделали!");
}
```

## Смотрите также

- [`if...else`](/ru/docs/Web/JavaScript/Reference/Statements/if...else)
- [Операторы сравнения](/ru/docs/Web/JavaScript/Reference/Operators/Операторы_сравнения)
- [Making decisions in your code — conditionals](/ru/docs/Learn/JavaScript/Building_blocks/conditionals)
