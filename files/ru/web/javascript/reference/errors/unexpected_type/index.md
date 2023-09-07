---
title: 'TypeError: "x" is (not) "y"'
slug: Web/JavaScript/Reference/Errors/Unexpected_type
---

{{jsSidebar("Errors")}}

## Сообщение

```
TypeError: "x" is (not) "y"

Examples:
TypeError: "x" is undefined
TypeError: "x" is null
TypeError: "undefined" is not an object
TypeError: "x" is not an object or null
TypeError: "x" is not a symbol
```

## Тип ошибки

{{jsxref("TypeError")}}.

## Что случилось?

Встречен неожиданный тип. Это часто случается со значениями {{jsxref("null")}} или {{jsxref("undefined")}}.

Так же, некоторые методы, такие как {{jsxref("Object.create()")}} или {{jsxref("Symbol.keyFor()")}}, требуют определённый тип, который должен быть предоставлен.

## Примеры

### Недопустимые случаи

```js example-bad
// Случаи undefined и null, при которых метод substring не будет работать
var foo = undefined;
foo.substring(1); // TypeError: foo is undefined

var foo = null;
foo.substring(1); // TypeError: foo is null

// Некоторые методы могут требовать определённый тип
var foo = {};
Symbol.keyFor(foo); // TypeError: foo is not a symbol

var foo = "bar";
Object.create(foo); // TypeError: "foo" is not an object or null
```

### Решение проблемы

Что бы исправить ошибку пустого указателя вы можете использовать оператор [typeof.](/ru/docs/Web/JavaScript/Reference/Operators/typeof)

```js
if (typeof foo !== "undefined") {
  // Теперь мы знаем, что foo определено.
}
```

## Смотрите также

- {{jsxref("undefined")}}
- {{jsxref("null")}}
