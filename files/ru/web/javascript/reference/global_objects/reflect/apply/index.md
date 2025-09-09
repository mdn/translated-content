---
title: Reflect.apply()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/apply
---

{{JSRef}}

Статический метод **`Reflect.apply()`** вызывает переданную ему функцию с указанными аргументами.

{{InteractiveExample("JavaScript Demo: Reflect.apply()")}}

```js interactive-example
console.log(Reflect.apply(Math.floor, undefined, [1.75]));
// Expected output: 1

console.log(
  Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111]),
);
// Expected output: "hello"

console.log(
  Reflect.apply(RegExp.prototype.exec, /ab/, ["confabulation"]).index,
);
// Expected output: 4

console.log(Reflect.apply("".charAt, "ponies", [3]));
// Expected output: "i"
```

## Синтаксис

```
Reflect.apply(target, thisArgument, argumentsList)
```

### Параметры

- target
  - : Функция, которую необходимо вызвать.
- thisArgument
  - : Значение переменной `this` во время вызова функции _`target`_.
- argumentsList
  - : Объект, подобный массиву, содержащий аргументы, с которыми должна быть вызвана функция _`target`_.

### Возвращаемое значение

Возвращается значение, которое вернёт функция _`target`_ с указанным значением переменной **`this`** и аргументами.

### Исключения

{{jsxref("TypeError")}}, если функция `target` не может быть вызвана.

## Описание

В ES5, обычно используется метод {{jsxref("Function.prototype.apply()")}}, чтобы вызвать функцию с указанным значением переменной `this` и `arguments`, переданными как массив (или [массивоподобный объект](/ru/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects)).

```js
Function.prototype.apply.call(Math.floor, undefined, [1.75]);
```

С использованием `Reflect.apply` это действие становится более понятным и занимает меньше места в коде.

## Примеры

### Использование `Reflect.apply()`

```js
Reflect.apply(Math.floor, undefined, [1.75]);
// 1;

Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111]);
// "hello"

Reflect.apply(RegExp.prototype.exec, /вы/, [
  "превысокомногорассмотрительствующий",
]).index;
// 4

Reflect.apply("".charAt, "пони", [3]);
// "и"
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Reflect")}}
- {{jsxref("Function.prototype.apply()")}}
