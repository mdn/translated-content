---
title: Конструктор Function()
slug: Web/JavaScript/Reference/Global_Objects/Function/Function
tags:
  - Конструктор
  - Function
  - JavaScript
  - Справочник
browser-compat: javascript.builtins.Function.Function
---
{{JSRef}}

**Конструктор `Function`** создаёт новый **объект** `Function`. Вызов конструктора напрямую позволяет создавать функции программным путём, однако такой способ представляет угрозу для безопасности, а также несёт разные (хотя не такие значительные) проблемы с производительностью при использовании с {{jsxref("Global_Objects/eval")}}. Однако в отличие от eval, конструктор `Function` создаёт функции, выполняемые только в глобальной области видимости.

{{EmbedInteractiveExample("pages/js/function-constructor.html","shorter")}}

## Синтаксис

```js
new Function(arg1, functionBody)
new Function(arg1, arg2, functionBody)
new Function(arg1, ... , argN, functionBody)
```

### Параметры

- `arg1, arg2, ... argN`

  - : Имена, используемые функцией в качестве имён формальных аргументов. Каждое имя должно быть строкой с правильным JavaScript-значением (либо [идентификатором](/ru/docs/Glossary/Identifier), [оставшимся параметром](/ru/docs/Web/JavaScript/Reference/Functions/Rest_parameters), или [деструктурирующим присваиванием](/ru/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment), либо списком таких строк, разделённых запятой.

    Поскольку параметры разбираются так же, как и объявления функций, допускается использование пробелов и комментариев. Например: `"x", "theValue = 42", "[a, b] /* numbers */"` — или `"x, theValue = 42, [a, b] /* numbers */"`. (`"x, theValue = 42", "[a, b]"` также будет правильным, хотя трудно читаемым).

- `functionBody`
  - : Строка, содержащая инструкции JavaScript, составляющие определение функции.

## Описание

Объекты `Function`, созданные конструктором `Function`, разбираются при создании функции. Определение функции при помощи {{jsxref("Operators/function", "выражения function", "", 1)}} или {{jsxref("Statements/function", "инструкции function", "", 1)}} и вызова её внутри вашего кода более эффективно, поскольку такие функции разбираются вместе с остальным кодом.

Все аргументы, переданные в функцию, трактуются как имена идентификаторов параметров создаваемой функции, и имеют тот же порядок следования, что и при их передаче в конструктор функции. Если опустить аргумент, то значение этого параметра будет `undefined`.

Вызов конструктора `Function` как функции (без использования оператора `new`) имеет тот же самый эффект, что и вызов его как конструктора.

## Примеры

### Пример: указание аргументов в конструкторе Function

Следующий код создаёт объект `Function, который принимает два аргумента.

```js
// Пример может быть запущен непосредственно в вашей консоли JavaScript

// Создаём функцию, принимающую два аргумента, и возвращающую их сумму
const adder = new Function('a', 'b', 'return a + b');

// Вызываем функцию
adder(2, 6);
// 8
```

Аргументы "`a`" и "`b`" являются именами формальных аргументов, которые используются в теле функции, "`return a + b`".

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Functions", "Функции и их область видимости", "", 1)}}
- Инструкция {{jsxref("Statements/function", "function")}}
- Выражение {{jsxref("Operators/function", "function")}}
- Инструкция {{jsxref("Statements/function*", "function*")}}
- Выражение {{jsxref("Operators/function*", "function*")}}
- {{jsxref("AsyncFunction")}}
- {{jsxref("GeneratorFunction")}}
