---
title: Function
slug: Web/JavaScript/Reference/Global_Objects/Function
tags:
  - Класс
  - Function
  - JavaScript
browser-compat: javascript.builtins.Function
---
{{JSRef}}

На самом деле каждая JavaScript-функция является объектом `Function`. Это легко проверить, выполнив проверку `(function(){}).constructor === Function`, которая вернёт true.

## Конструктор

- {{jsxref("Function/Function", "Function()")}}
  - : Создаёт новый объект `Function`. Вызов конструктора напрямую позволяет создавать функции программным путём. Такой способ представляет угрозу для безопасности, а также несёт разные (хотя не такие значительные) проблемы с производительностью при использовании с {{jsxref("Global_Objects/eval")}}. Однако в отличие от eval, конструктор `Function` создаёт функции, выполняемые только в глобальной области видимости.

## Свойства экземпляра

- {{jsxref("Function.prototype.arguments")}}
  - : Массив с переданными функции аргументами.
    Это устаревшее свойство объекта {{jsxref("Function")}}. Вместо него используйте объект {{jsxref("Functions/arguments", "arguments")}} (доступный внутри функции).
- {{jsxref("Function.prototype.caller")}}
  - : Содержит функцию, которая вызвала текущую выполняющуюся функцию.
    Это устаревшее свойство, которое работает только в функциях без включённого строгого режима.
- {{jsxref("Function.prototype.displayName")}}
  - : Отображаемое имя функции.
- {{jsxref("Function.prototype.length")}}
  - : Содержит количество аргументов в функции.
- {{jsxref("Function.prototype.name")}}
  - : Имя функции.

## Методы экземпляра

- {{jsxref("Function.prototype.apply()", "Function.prototype.apply(<var>thisArg</var> [, <var>argsArray</var>])")}}
  - : Вызывает функцию и устанавливает её `this` на переданный `thisArg`. Аргументы могут быть переданы в виде объекта {{jsxref("Array")}}.
- {{jsxref("Function.prototype.bind()", "Function.prototype.bind(<var>thisArg</var>[, <var>arg1</var>[, <var>arg2</var>[, ...<var>argN</var>]]])")}}
  - : Создает новую функцию, при вызове которой её `this` будет установлен на `thisArg`. Можно также указать ряд аргументов, которые будут добавлены к аргументам при вызове новой привязанной функции.
- {{jsxref("Function.prototype.call()", "Function.prototype.call(<var>thisArg</var>[, <var>arg1</var>, <var>arg2</var>, ...<var>argN</var>])")}}
  - : Вызывает функцию и устанавливает её `this` на переданное значение. Аргументы могут быть переданы как есть.
- {{jsxref("Function.prototype.toString()", "Function.prototype.toString()")}}
  - : Возвращает строку с исходным кодом функции.
    Переопределяет метод {{jsxref("Object.prototype.toString")}}.

## Примеры

### Сравнение конструктора Function и объявления функции

Функции, созданные через конструктор `Function`, не имеют доступа к собственному контексту исполнения, т.е. они всегда создаются в глобальной области видимости. При выполнении таких функций, они смогут обращаться только к своим локальным и глобальным переменным, но не к переменным в той области видимости, в которой вызывался конструктор `Function`. В этом они отличаются от использования {{jsxref("Global_Objects/eval")}} с функциями-выражениями.

```js
var x = 10;

function createFunction1() {
    var x = 20;
    return new Function('return x;'); // здесь |x| ссылается на глобальный |x|
}

function createFunction2() {
    var x = 20;
    function f() {
        return x; // здесь |x| ссылается на локальный |x| выше
    }
    return f;
}

var f1 = createFunction1();
console.log(f1());          // 10
var f2 = createFunction2();
console.log(f2());          // 20
```

Хотя этот код работает в браузерах, в окружении Node.js вызов `f1()` приведёт к ошибке `ReferenceError`, потому что `x` не будет найден. Это происходит из-за того, что область видимости верхнего уровня в Node не является глобальной областью видимости, поэтому `x` ссылается на локальную переменную в пределах текущего модуля.

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
