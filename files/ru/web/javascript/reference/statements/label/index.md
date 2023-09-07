---
title: Метка
slug: Web/JavaScript/Reference/Statements/label
---

{{jsSidebar("Statements")}}

**Метки** используются вместе с операторами {{jsxref("Statements/break", "break")}} и {{jsxref("Statements/continue", "continue")}}. Они выступают в роли идентификатора выражения, на который можно сослаться.

{{EmbedInteractiveExample("pages/js/statement-label.html")}}

## Синтаксис

```js-nolint
label:
  statement;
```

- `label`
  - : Идентификатор. Любое слово, кроме ключевых и зарезервированных в JavaScript.
- `statement`
  - : Выражение. С `break` можно использоваться любое блочное выражение, а с `continue` только циклы.

## Описание

Вы можете использовать метки для обозначения циклов, чтобы затем при помощи `break` или `continue` выходить из цикла или продолжать его работу с новой итерации соответственно.

Обратите внимание, в JavaScript _отсутствует_ оператор `goto`, вы можете использовать метки только с `break` или `continue`.

В [строгом режиме](/ru/docs/Web/JavaScript/Reference/Strict_mode) использование слова "`let`" в качестве имени метки запрещено — вы получите ошибку {{jsxref("SyntaxError")}} (потому что `let` является ключевым словом в новых стандартах JavaScript).

## Примеры

### Использование метки с оператором continue в цикле

```js
let i, j;

loop1: for (i = 0; i < 3; i++) {
  //Первый цикл, обозначенный меткой "loop1"
  loop2: for (j = 0; j < 3; j++) {
    //Второй цикл, обозначенный меткой "loop2"
    if (i === 1 && j === 1) {
      continue loop1;
    }
    console.log("i = " + i + ", j = " + j);
  }
}

// Вывод:
//   "i = 0, j = 0"
//   "i = 0, j = 1"
//   "i = 0, j = 2"
//   "i = 1, j = 0"
//   "i = 2, j = 0"
//   "i = 2, j = 1"
//   "i = 2, j = 2"
// Обратите внимание на пропуск "i = 1, j = 1" и "i = 1, j = 2"
```

### Другой пример использования метки с continue

В примере по массиву элементов и массиву тест-функций вычисляется количество элементов, которые проходят все тесты.

```js
let itemsPassed = 0;
let i, j;

top: for (i = 0; i < items.length; i++) {
  for (j = 0; j < tests.length; j++) {
    if (!tests[j].pass(items[i])) {
      continue top;
    }
  }

  itemsPassed++;
}
```

### Использование метки с оператором break в цикле

```js
let i, j;

loop1: for (i = 0; i < 3; i++) {
  //Первый цикл, обозначенный меткой "loop1"
  loop2: for (j = 0; j < 3; j++) {
    //Второй цикл, обозначенный меткой "loop2"
    if (i === 1 && j === 1) {
      break loop1;
    }
    console.log("i = " + i + ", j = " + j);
  }
}

// Вывод:
//   "i = 0, j = 0"
//   "i = 0, j = 1"
//   "i = 0, j = 2"
//   "i = 1, j = 0"
// Обратите внимание на разницу результатов в аналогичном примере с continue
```

### Другой пример использования метки с break

В примере по массиву элементов и массиву тест-функций определяется, все ли элементы проходят все тесты.

```js
let allPass = true;
let i, j;

top: for (i = 0; i < items.length; i++) {
  for (j = 0; j < tests.length; j++) {
    if (!tests[j].pass(items[i])) {
      allPass = false;
      break top;
    }
  }
}
```

### Использование метки для блочного выражения с break

Метки можно использовать для обычных блоков кода, но только с оператором `break`.

```js
foo: {
  console.log("привет");
  break foo;
  console.log("эта строка не будет исполнена");
}
console.log("мир");

// Вывод:
//   "привет"
//   "мир"
```

### Объявление функций с меткой

Начиная с ECMAScript 2015, объявление функции с меткой допускается только в обычном режиме [для совместимости с этой нестандартной, но реализованной в некоторых браузерах, возможностью.](https://www.ecma-international.org/ecma-262/6.0/#sec-labelled-function-declarations)

```js
L: function F() {}
```

Однако в [строгом режиме](/ru/docs/Web/JavaScript/Reference/Strict_mode) такой код вызовет ошибку {{jsxref("SyntaxError")}}:

```js
"use strict";
L: function F() {}
// SyntaxError: functions cannot be labelled
```

Объявление [функций-генераторов](/ru/docs/Web/JavaScript/Reference/Statements/function*) с меткой не допускается ни в обычном, ни в строгом режимах:

[](/ru/docs/Web/JavaScript/Reference/Statements/function*)

```js
L: function* F() {}
// SyntaxError: generator functions cannot be labelled
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
