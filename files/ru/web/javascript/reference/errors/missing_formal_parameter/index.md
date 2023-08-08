---
title: "SyntaxError: missing formal parameter( отсутствует формальный параметр)"
slug: Web/JavaScript/Reference/Errors/Missing_formal_parameter
---

{{jsSidebar("Errors")}}

## Сообщение

```
SyntaxError: идентификатор начинается сразу после числового литерала
```

## Тип ошибки

{{jsxref("SyntaxError")}}

## Что пошло не так?

"Формальный параметр" - это причудливый способ сказать "параметр функции". В объявлении функции отсутствуют допустимые параметры. В объявлении функции параметры должны быть {{Glossary("Identifier", "identifiers")}}, не любое значение, как числа, строки или объекты. Объявление функций и вызов функций - это два отдельных шага. Объявления требуют идентификатор в качестве параметров, и только при вызове (призыва) функции, вы предоставляете значения, которые функция должна использовать.

В {{glossary("JavaScript")}}, идентификаторы могут содержать только буквенно-цифровые символы (или "$" или "\_") и не могут начинаться с цифры. Идентификатор отличается от строки тем, что строка является данными, а идентификатор - частью кода.

## Примеры

Параметры функции должны быть идентификаторами при настройке функции. Все эти объявления функций, которые обеспечивают значения их параметров:

```js example-bad
function square(3) {
  return number * number;
};
// SyntaxError: отсутствует формальный параметр

function greet("Howdy") {
  return greeting;
};
// SyntaxError: отсутствует формальный параметр

function log({ obj: "value"}) {
  console.log(arg)
};
// SyntaxError: отсутствует формальный параметр
```

В объявлениях функций необходимо использовать идентификаторы:

```js example-good
function square(number) {
  return number * number;
}

function greet(greeting) {
  return greeting;
}

function log(arg) {
  console.log(arg);
}
```

Затем можно вызвать эти функции с аргументами, которые вам нравятся:

```js
square(2); // 4

greet("Howdy"); // "Howdy"

log({ obj: "value" }); // Object { obj: "value" }
```

## Смотрите также

- Другие ошибки, касающиеся формальных параметров:

  - [SyntaxError: Malformed formal parameter](/ru/docs/Web/JavaScript/Reference/Errors/Malformed_formal_parameter)
  - [SyntaxError: redeclaration of formal parameter "x"](/ru/docs/Web/JavaScript/Reference/Errors/Redeclared_parameter)
