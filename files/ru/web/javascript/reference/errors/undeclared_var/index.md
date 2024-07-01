---
title: 'ReferenceError: assignment to undeclared variable "x"'
slug: Web/JavaScript/Reference/Errors/Undeclared_var
---

{{jsSidebar("Errors")}}

## Сообщение

```
ReferenceError: assignment to undeclared variable "x" (Firefox)
ReferenceError: "x" is not defined (Chrome)
ReferenceError: Variable undefined in strict mode (Edge)
```

## Тип ошибки

{{jsxref("ReferenceError")}} предупреждение только в [строгом режиме](/ru/docs/Web/JavaScript/Reference/Strict_mode).

## Что пошло не так?

Значению присвоена необъявленная переменная. Другими словами, было задание без ключевого слова var. Существуют некоторые различия между объявленными и необъявленными переменными, что может привести к неожиданным результатам, поэтому JavaScript представляет ошибку в строгом режиме.

Три примечания о объявленных и необъявленных переменных:

- Объявленные переменные ограничены в контексте выполнения, в котором они объявлены. Необъявленные переменные всегда глобальны.
- Объявленные переменные создаются до выполнения любого кода. Необъявленные переменные не существуют до тех пор, пока не будет выполняться присвоение им кода.
- Объявленные переменные - это неконфигурируемое свойство контекста их выполнения (функция или глобальная). Необъявленные переменные настраиваются (например, могут быть удалены).

Более подробную информацию и примеры см. На странице справки [`Переменных`](/ru/docs/Web/JavaScript/Reference/Statements/var)

Errors about undeclared variable assignments occur in [strict mode code](/ru/docs/Web/JavaScript/Reference/Strict_mode) only. In non-strict code, they are silently ignored.

## Примеры

### Неправильно

В этом случае переменная "bar" является необъявленной переменной.

```js example-bad
function foo() {
  "use strict";
  bar = true;
}
foo(); // ReferenceError: assignment to undeclared variable bar
```

### Правильно

Чтобы сделать "bar" объявленной переменной, вы можете добавить перед ней ключевое слово [`var`](/ru/docs/Web/JavaScript/Reference/Statements/var) .

```js example-good
function foo() {
  "use strict";
  var bar = true;
}
foo();
```

## Смотрите также

- [режим Strict](/ru/docs/Web/JavaScript/Reference/Strict_mode)
