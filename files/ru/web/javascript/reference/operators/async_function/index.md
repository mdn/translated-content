---
title: async function expression
slug: Web/JavaScript/Reference/Operators/async_function
---

{{jsSidebar("Operators")}}

Ключевое слово **`async function`** используется для определения асинхронной функции внутри выражений.

Вы также можете определить асинхронные функции при помощи [инструкции async function](/ru/docs/Web/JavaScript/Reference/Statements/async_function).

## Синтаксис

```
async function [name]([param1[, param2[, ..., paramN]]]) {
   statements
}
```

Согласно спецификации [ES2015](/ru/docs/), вы также можете использовать [стрелочные функции](/ru/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

### Параметры

- `name`
  - : Имя функции. Этот параметр может быть опущен, в этом случае говорят об _анонимной функции_. Имя используется только в теле функции.
- `paramN`
  - : Имя аргумента, передаваемого функции.
- `statements`
  - : Инструкции, составляющие тело функции.

## Описание

Выражение `async function` очень похоже, и имеет почти тот же синтаксис, что и {{jsxref('Statements/async_function', 'async function statement')}}. Главное отличие между выражениями async `function` и объявлениями async `function` заключается в _имени функции,_ которое может быть опущено в выражении `async function` для создания _анонимной_ функции. Выражение `async function` можно использовать в виде {{Glossary("IIFE")}} (Immediately Invoked Function Expression), и оно будет запущено сразу после объявления. Смотрите также главу о [функциях](/ru/docs/Web/JavaScript/Reference/Functions).

## Примеры

### Простой пример

```js
function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

(async function (x) {
  // выражение асинхронной функции в виде IIFE
  var a = resolveAfter2Seconds(20);
  var b = resolveAfter2Seconds(30);
  return x + (await a) + (await b);
})(10).then((v) => {
  console.log(v); // выведет 60 после 2 секунд.
});

var add = async function (x) {
  // назначение выражения асинхронной функции переменной
  var a = await resolveAfter2Seconds(20);
  var b = await resolveAfter2Seconds(30);
  return x + a + b;
};

add(10).then((v) => {
  console.log(v); // выведет 60 после 4 секунд.
});
```

## Спецификации

| Specification                                                                | Status               | Comment                       |
| ---------------------------------------------------------------------------- | -------------------- | ----------------------------- |
| {{SpecName('ESDraft', '#sec-async-function-definitions', 'async function')}} | {{Spec2('ESDraft')}} | Initial definition in ES2017. |

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("AsyncFunction")}} object
- {{jsxref("Operators/await", "await")}}
