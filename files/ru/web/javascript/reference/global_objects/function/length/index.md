---
title: Function.length
slug: Web/JavaScript/Reference/Global_Objects/Function/length
---

{{JSRef}}

## Сводка

Свойство **`length`** определяет количество аргументов, ожидаемых функцией.

{{js_property_attributes(0, 0, 1)}}

## Описание

Свойство `length` является свойством объекта функции и указывает, сколько аргументов ожидает функция, то есть, количество формальных параметров. Это количество не включает {{jsxref("rest_parameters", "остаточные параметры", "", 1)}}. В отличие от него, свойство {{jsxref("Functions_and_function_scope/arguments/length", "arguments.length")}} является локальным для функции и предоставляет количество аргументов, реально переданных в функцию.

### Свойство данных конструктора `Function`

Конструктор {{jsxref("Global_Objects/Function", "Function")}} сам является объектом {{jsxref("Global_Objects/Function", "Function")}}. Его свойство данных `length` имеет значение 1. Атрибуты свойства: записываемое: `false`, перечисляемое: `false`, настраиваемое: `true`.

### Свойство объекта прототипа `Function`

Свойство `length` объекта прототипа {{jsxref("Global_Objects/Function", "Function")}} имеет значение 0.

## Примеры

```js
console.log(Function.length); /* 1 */

console.log(function () {}.length); /* 0 */
console.log(function (a) {}.length); /* 1 */
console.log(function (a, b) {}.length); /* 2 и так далее */
console.log(
  function (...args) {}.length,
); /* 0, остаточные параметры не считаются */
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Global_Objects/Function", "Function")}}
