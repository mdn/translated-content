---
title: "TypeError: cannot use 'in' operator to search for 'x' in 'y'(не удаётся использовать 'in' оператор поиска для 'x' в 'y')"
slug: Web/JavaScript/Reference/Errors/in_operator_no_object
---

{{jsSidebar("Errors")}}

## Сообщения

```
TypeError: недопустимый операнд в "in" (edge)
TypeError: правая часть 'in' должна быть объектом, есть 'x' (Firefox)
TypeError: невозможно использовать оператор 'in' для поиска 'x' в 'y' (Firefox, Chrome)
```

## Тип ошибки

{{jsxref("TypeError")}}

## Что пошло не так?

Оператор in можно использовать только для проверки наличия свойства в объекте. Вы не можете искать в строках, числах или других примитивных типах.

## Примеры

### Поиск в строках

В отличие от других языков программирования (например, Python), поиск в строках с помощью оператора in невозможен.

```js example-bad
"Hello" in "Hello World";
// TypeError: cannot use 'in' operator to search for 'Hello' in 'Hello World'
```

Вместо этого вам нужно будет использовать{{jsxref("String.prototype.indexOf()")}}или примеры

```js example-good
"Hello World".indexOf("Hello") !== -1;
// true
```

### Операнд не может быть `null` или `undefined`

Убедитесь, что объект, который вы осматриваете, на самом деле не {{jsxref("null")}} или {{jsxref("undefined")}}.

```js example-bad
var foo = null;
"bar" in foo;
// TypeError: не удаётся использовать оператор 'in' для поиска 'bar' в 'foo' (Chrome)
// TypeError: правая часть 'in' должна быть объектом, полученным null (Firefox)
```

Оператор in всегда ожидает объект.

```js example-good
var foo = { baz: "bar" };
"bar" in foo; // false

"PI" in Math; // true
"pi" in Math; // false
```

### Поиск в Массивах

Будьте осторожны при использовании оператора для поиска {{jsxref("Array")}} объекты. the `in` оператор проверяет номер индекса, а не его значение.

```js
var trees = ["redwood", "bay", "cedar", "oak", "maple"];
3 in trees; // true
"oak" in trees; // false
```

## See also

- [`in` operator](/ru/docs/Web/JavaScript/Reference/Operators/in)
