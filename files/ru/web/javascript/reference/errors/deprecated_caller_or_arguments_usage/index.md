---
title: "Ошибка Ссылки: устаревший вызывающий объект или использование аргументов"
slug: Web/JavaScript/Reference/Errors/Deprecated_caller_or_arguments_usage
---

{{jsSidebar("Errors")}}

## Message(сообщение)

```
TypeError(Ошибка Типа): 'arguments', 'callee' и 'caller' являются ограниченными свойствами функции и не могут быть доступны в этом контексте (EDGE)
Warning: ReferenceError(Ошибка Ссылки): deprecated caller usage (устаревшие использование вызывающего абонента Firefox)
Warning: ReferenceError(Ошибка Ссылки): deprecated arguments usage (использование устаревших аргументов Firefox)
TypeError(Ошибка Типа): 'callee' и 'caller' (не может быть доступен в строгом режиме safari)
```

## Error type (Тип ошибки)

Предупреждение строгого режима, при котором произошла операция {{jsxref("ReferenceError")}} выполнение JavaScript не будет остановлено.

## What went wrong?(Что пошло не так?)

В строгом режиме используются свойства {{jsxref("Function.caller")}} или {{jsxref("Function.arguments")}} которых не должны быть. Они являются устаревшими, потому что они утечка вызывающей функции, являются нестандартными, и их трудно оптимизировать, и это потенциально опасный для производительности компонент.

## Examples(Примеры)

### Устаревшая `function.caller` или `arguments.callee.caller`

{{jsxref("Function.caller")}} и [`arguments.callee.caller`](/ru/docs/Web/JavaScript/Reference/Functions/arguments/callee) являются устаревшими (Дополнительные сведения см. в справочных статьях).

```js example-bad
"use strict";

function myFunc() {
  if (myFunc.caller == null) {
    return "The function was called from the top!";
  } else {
    return "This function's caller was " + myFunc.caller;
  }
}

myFunc();
// Warning: ReferenceError: устаревшее использование вызывающего абонента
// "функция была вызвана сверху!"
```

### `Function.arguments`

{{jsxref("Function.arguments")}} является устаревшим (Дополнительные сведения см. в справочной статье).

```js example-bad
"use strict";

function f(n) {
  g(n - 1);
}

function g(n) {
  console.log("before: " + g.arguments[0]);
  if (n > 0) {
    f(n);
  }
  console.log("after: " + g.arguments[0]);
}

f(2);

console.log("returned: " + g.arguments);
// Warning: ReferenceError: использование устаревших аргументов
```

## Смотрите также

- [Deprecated and obsolete features](/ru/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features) (Устаревшие функции)
- [Strict mode](/ru/docs/Web/JavaScript/Reference/Strict_mode) (строгий режим)
- {{jsxref("Function.arguments")}}
- {{jsxref("Function.caller")}} и [`arguments.callee.caller`](/ru/docs/Web/JavaScript/Reference/Functions/arguments/callee)
