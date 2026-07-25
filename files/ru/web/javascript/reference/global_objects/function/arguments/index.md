---
title: Function.arguments
slug: Web/JavaScript/Reference/Global_Objects/Function/arguments
---

{{JSRef}} {{deprecated_header}}

## Сводка

Свойство **`function.arguments`** ссылалось на массивоподобный объект, соответствующий аргументам, переданным в функцию. Используйте вместо него простую переменную {{jsxref("Functions/arguments", "arguments")}}.

## Описание

Синтаксис `function.arguments` устарел. Рекомендуемым способом доступа к объекту {{jsxref("Functions/arguments", "arguments")}}, доступному внутри функций, является простая ссылка на переменную {{jsxref("Functions/arguments", "arguments")}}.

В случае рекурсии, то есть, если функция `f` несколько раз появляется в стеке вызовов, значение `f.arguments` представляет аргументы, соответствующие самому последнему вызову функции.

## Примеры

```js
function f(n) {
  g(n - 1);
}

function g(n) {
  console.log("до: " + g.arguments[0]);
  if (n > 0) {
    f(n);
  }
  console.log("после: " + g.arguments[0]);
}

f(2);

// Вывод

// до: 1
// до: 0
// после: 0
// после: 1
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- объект {{jsxref("Functions/arguments", "arguments")}}
- {{jsxref("Functions", "Функции и их область видимости", "", 1)}}
