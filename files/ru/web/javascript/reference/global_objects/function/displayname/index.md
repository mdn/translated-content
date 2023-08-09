---
title: Function.displayName
slug: Web/JavaScript/Reference/Global_Objects/Function/displayName
---

{{JSRef("Global_Objects", "Function")}} {{Non-standard_header}}

## Сводка

Свойство **`function.displayName`** возвращает отображаемое имя функции.

## Описание

Если оно определено, свойство `displayName` возвращает отображаемое имя функции:

```js
function doSomething() {}

alert(doSomething.displayName); // "undefined"

var popup = function (content) {
  alert(content);
};

popup.displayName = "Показать всплывающее окно";

alert(popup.displayName); // "Показать всплывающее окно"
```

Вы можете определить функцию с отображаемым именем в {{jsxref("Functions_and_function_scope", "выражении функции", "", 1)}}:

```js
var object = {
  someMethod: function () {},
};

object.someMethod.displayName = "someMethod";

alert(object.someMethod.displayName); // выведет "someMethod"

try {
  someMethod;
} catch (e) {
  alert(e);
}
// ReferenceError: someMethod is not defined
```

Вы можете динамически изменять свойство `displayName` функции:

```js
var object = {
  // анонимная функция
  someMethod: function (value) {
    this.displayName = "someMethod (" + value + ")";
  },
};

alert(object.someMethod.displayName); // "undefined"

object.someMethod("123");
alert(object.someMethod.displayName); // "someMethod (123)"
```

## Примеры

Обычно оно используется консолью и профилировщиком, как обёртка над {{jsxref("Function.name", "func.name")}} для отображения имени функции.

Введя следующий пример в консоль, вы должны увидеть что-то вроде "`function Моя функция()`":

```js
var a = function () {};
a.displayName = "Моя функция";

a;
```

## Спецификации

Не является частью какой-либо спецификации.

## Совместимость с браузерами

{{Compat}}
