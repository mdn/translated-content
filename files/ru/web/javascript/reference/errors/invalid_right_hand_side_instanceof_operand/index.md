---
title: "TypeError: invalid 'instanceof' operand 'x'(Тип ошибки:  неверный 'экземпляром' операнд 'х')"
slug: Web/JavaScript/Reference/Errors/invalid_right_hand_side_instanceof_operand
---

{{jsSidebar("Errors")}}

## Сообщение

```
TypeError: недопустимый операнд "instanceof" "x" (Firefox)
TypeError: "x" не является функцией (Firefox)
TypeError: правая часть "instanceof" не является объектом (Chrome)
TypeError: правая часть "instanceof" не вызывается (Chrome)
```

## Тип ошибки

{{jsxref("TypeError")}}

## Что не так?

The [`instanceof` operator](/ru/docs/Web/JavaScript/Reference/Operators/instanceof) ожидает, что операнды правой стороны будут объектом конструктора, т. е. объектом, который имеет свойство прототипа и является вызываемым.

## Примеры

```js example-bad
"test" instanceof ""; // TypeError: invalid 'instanceof' operand ""
42 instanceof 0; // TypeError: invalid 'instanceof' operand 0

function Foo() {}
var f = Foo(); // Foo() is called and returns undefined
var x = new Foo();

x instanceof f; // TypeError: invalid 'instanceof' operand f
x instanceof x; // TypeError: x is not a function
```

Чтобы исправить эти ошибки, необходимо либо заменить оператор `instanceof` оператором `typeof`, либо убедиться, что вместо результата его вычисления используется имя функции.

```js example-good
typeof "test" == "string"; // true
typeof 42 == "number"; // true

function Foo() {}
var f = Foo; // Do not call Foo.
var x = new Foo();

x instanceof f; // true
x instanceof Foo; // true
```

## Смотрите также

- [`instanceof` operator](/ru/docs/Web/JavaScript/Reference/Operators/instanceof)
- [`typeof` operator](/ru/docs/Web/JavaScript/Reference/Operators/typeof)
