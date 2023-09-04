---
title: arguments.length
slug: Web/JavaScript/Reference/Functions/arguments/length
---

{{jsSidebar("Functions")}}

**`arguments.length`** свойство, содержащее число аргументов переданных в функцию.

## Синтаксис

```
arguments.length
```

## Описание

arguments.length свойство содержащее число аргументов переданных в функцию. Оно может быть больше или меньше опряденного параметра count (см. {{jsxref("Function.length")}}).

## Примеры

### `Использование arguments.length`

В этом примере мы определяем функцию, которая может сложить 2 или более чисел вместе.

```js
function adder(base /*, n2, ... */) {
  base = Number(base);
  for (var i = 1; i < arguments.length; i++) {
    base += Number(arguments[i]);
  }
  return base;
}
```

## Спецификации

| Specification                                                                    | Status             | Comment                                           |
| -------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------- |
| ECMAScript 1st Edition.                                                          | Standard           | Initial definition. Implemented in JavaScript 1.1 |
| {{SpecName('ES5.1', '#sec-10.6', 'Arguments Object')}}                           | {{Spec2('ES5.1')}} |                                                   |
| {{SpecName('ES6', '#sec-arguments-exotic-objects', 'Arguments Exotic Objects')}} | {{Spec2('ES6')}}   |                                                   |

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Function")}}
- {{jsxref("Function.length")}}
