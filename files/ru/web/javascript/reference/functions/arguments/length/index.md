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

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Function")}}
- {{jsxref("Function.length")}}
