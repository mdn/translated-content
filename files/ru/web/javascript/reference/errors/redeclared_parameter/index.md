---
title: 'SyntaxError: redeclaration of formal parameter "x"'
slug: Web/JavaScript/Reference/Errors/Redeclared_parameter
---

{{jsSidebar("Errors")}}

## Сообщение

```
SyntaxError: redeclaration of formal parameter "x" (Firefox)
SyntaxError: Identifier "x" has already been declared (Chrome)
```

## Тип ошибки

{{jsxref("SyntaxError")}}

## Что пошло не так?

Одно и то же имя переменной сначала использовано в качестве параметра, а потом объявлено ещё раз в теле функции с помощью оператора присваивания [`let`](/ru/docs/Web/JavaScript/Reference/Statements/let). В JavaScript не допустимо переопределение переменной в рамках области видимости функции или блока при помощи `let`.

## Примеры

В данном случае переменная "arg" переопределяет аргумент:

```js example-bad
function f(arg) {
  let arg = "foo";
}

// SyntaxError: redeclaration of formal parameter "arg"
```

Если вы хотите изменить значение переменной "arg" в теле функции, это можно сделать, но для этого не требуется объявлять эту же переменную ещё раз. Иначе говоря, ключевое слово `let` можно опустить. Если же вы хотите создать новую переменную, необходимо её переименовать, поскольку в противном случае она вступает в конфликт с уже существующим параметром функции.

```js example-good
function f(arg) {
  arg = "foo";
}

function f(arg) {
  let bar = "foo";
}
```

## Примечания о совместимости

- В версиях Firefox до Firefox 49, у данной ошибки был тип {{jsxref("TypeError")}} ({{bug(1275240)}}).

## Смотрите также

- [`let`](/ru/docs/Web/JavaScript/Reference/Statements/let)
- [`const`](/ru/docs/Web/JavaScript/Reference/Statements/const)
- [`var`](/ru/docs/Web/JavaScript/Reference/Statements/var)
- [Объявления переменных](/ru/docs/Web/JavaScript/Guide/Grammar_and_types#Объявления) в [Руководстве по JavaScript](/ru/docs/Web/JavaScript/Guide)
