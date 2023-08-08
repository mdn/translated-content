---
title: "SyntaxError: for-in loop head declarations may not have initializers(SyntaxError: объявления for-in loop head могут не иметь инициализаторов)"
slug: Web/JavaScript/Reference/Errors/Invalid_for-in_initializer
---

{{jsSidebar("Errors")}}

## Message

```
SyntaxError: объявления for-in loop head не могут иметь инициализатора (Edge)
SyntaxError: объявления for-in loop head могут не иметь инициализаторов (Firefox)
SyntaxError: объявление переменной цикла for-in может не иметь инициализатора. (Chrome)
```

## Тип ошибки

{{jsxref("SyntaxError")}} только в строгом режиме.

## Что пошло не так?

Глава цикла [for...in](/ru/docs/Web/JavaScript/Reference/Statements/for...in) содержит выражение инициализатора. То есть переменная объявляется и присваивается значение `|for (var i = 0 in obj)|`. В нестрогом режиме это объявление head игнорируется и ведёт себя как `|for (var i in obj)|`. Однако в строгом режиме создаётся синтаксическая ошибка.

## Примеры

Данный пример даёт SyntaxError:

```js example-bad
"use strict";

var obj = {a: 1, b: 2, c: 3 };

for (var i = 0 in obj) {
  console.log(obj[i]);
}

 SyntaxError: объявления for-in loop head могут не иметь инициализаторов
```

### Правильный for-in loop

Можно удалить инициализатор (i = 0) в начале цикла for-in.

```js example-good
"use strict";

var obj = { a: 1, b: 2, c: 3 };

for (var i in obj) {
  console.log(obj[i]);
}
```

### Итерация массива

Цикл for...in не должен использоваться для итерации массива. Вы намеревались использовать цикл for вместо цикла for-in для итерации {{jsxref("Array")}}? Цикл for позволяет также установить инициализатор:

```js example-good
var arr = ["a", "b", "c"];

for (var i = 2; i < arr.length; i++) {
  console.log(arr[i]);
}

// "c"
```

## Смотрите также

- [`for...in`](/ru/docs/Web/JavaScript/Reference/Statements/for...in)
- [`for...of`](/ru/docs/Web/JavaScript/Reference/Statements/for...of) – также запрещает инициализатор как в строгом, так и в нестрогом режиме.
- [`for`](/ru/docs/Web/JavaScript/Reference/Statements/for) – предпочтительно для итерации массива, позволяет определить инициализатор.
