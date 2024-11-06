---
title: "ReferenceError: can't access lexical declaration 'X' before initialization"
slug: Web/JavaScript/Reference/Errors/Cant_access_lexical_declaration_before_init
---

{{jsSidebar("Errors")}}

## Сообщение

```
ReferenceError: can't access lexical declaration `X' before initialization (Firefox)
ReferenceError: 'x' is not defined (Chrome)
```

## Тип ошибки

{{jsxref("ReferenceError")}}

## Что случилось?

Попытка доступа к лексической переменной до её инициализации. Это может произойти в любом блоке, если попытаться обратиться к переменной, объявленной с помощью ключевых слов [`let`](/ru/docs/Web/JavaScript/Reference/Statements/let) или [`const`](/ru/docs/Web/JavaScript/Reference/Statements/const) до того, как им было присвоено значение.

## Примеры

### Неправильно

Здесь переменная "foo" заново объявляется внутри блока с помощью ключевого слова `let`.

```js example-bad
function test() {
  let foo = 33;
  if (true) {
    let foo = foo + 55;
    // ReferenceError: can't access lexical
    // declaration `foo' before initialization
  }
}
test();
```

### Правильно

Чтобы изменить "foo" в теле выражения if, надо убрать ключевое слово `let` и таким образом избавиться от повторного объявления.

```js example-good
function test() {
  let foo = 33;
  if (true) {
    foo = foo + 55;
  }
}
test();
```

## Смотрите также

- [Temporal Dead Zone and errors with let](/ru/docs/Web/JavaScript/Reference/Statements/let#Temporal_Dead_Zone_and_errors_with_let)
