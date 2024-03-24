---
title: "SyntaxError: function statement requires a name(функция оператор требует имя)"
slug: Web/JavaScript/Reference/Errors/Unnamed_function_statement
---

{{jsSidebar("Errors")}}

## Сообщение

```
SyntaxError: ожидаемый идентификатор (Edge)
SyntaxError: оператор функции требует имя [Firefox]
SyntaxError: непредвиденный токен ( [Chrome]
```

## Тип ошибки

{{jsxref("SyntaxError")}}

## Что пошло не так?

В коде есть оператор function, для которого требуется имя. Вам нужно будет проверить, как определены функции и нужно ли предоставить для них имя, или если рассматриваемая функция должна быть выражением функции, {{Glossary("IIFE")}}, или если код функции вообще правильно размещён в этом контексте.

## Примеры

### Операторы vs выражения

Оператор функции (или объявление функции) требует имя, это не будет работать:

```js example-bad
function () {
  return 'Hello world';
}
// SyntaxError: function statement requires a name
```

Вы можете использовать выражение функции (назначат) вместо:

```js example-good
var greet = function () {
  return "Hello world";
};
```

Или, ваша функция возможно, предназначена для IIFE (немедленно вызываемое выражение функции), которое является функцией, которая запускается, как только она определена. В этом случае вам понадобится ещё несколько брекетов:

```js example-good
(function () {})();
```

### Помеченные функции

При использовании меток функций после ключевого слова function всё равно потребуется указать имя функции. Это не работает:

```js example-bad
function Greeter() {
  german: function () {
    return "Moin";
  }
}
// SyntaxError: оператор функции требует имя
```

Это будет работать, например так:

```js example-good
function Greeter() {
  german: function g() {
    return "Moin";
  }
}
```

### Методы объекта

Если вы намеревались создать метод объекта, вам нужно будет создать объект. Тогда допустим следующий синтаксис без имени после ключевого слова function.

```js example-good
var greeter = {
  german: function () {
    return "Moin";
  },
};
```

### Синтаксис вызова

Кроме того, внимательно следите за синтаксисом при использовании колбэков. Очень легко забыть скобку или запятую.

```js example-bad
promise.then(
  function() {
    console.log("success");
  });
  function() {
    console.log("error");
}
// SyntaxError: function statement requires a name
```

как бы было правильно:

```json example-good
promise.then(
  function() {
    console.log("success");
  },
  function() {
    console.log("error");
  }
);
```

## Смотрите также

- [Functions in the JavaScript Guide](/ru/docs/Web/JavaScript/Guide/Functions) (функции в javascript"e гайд)
- [Оператор функции](/ru/docs/Web/JavaScript/Reference/Statements/function)
- [Выражение функции](/ru/docs/Web/JavaScript/Reference/Operators/function)
- [IIFE](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression)
- [label](/ru/docs/Web/JavaScript/Reference/Statements/label)
