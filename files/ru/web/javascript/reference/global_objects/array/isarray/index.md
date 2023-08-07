---
title: Array.isArray()
slug: Web/JavaScript/Reference/Global_Objects/Array/isArray
---

{{JSRef("Global_Objects", "Array")}}

## Сводка

Метод **`Array.isArray()`** возвращает `true`, если объект является массивом и `false`, если он массивом не является.

## Синтаксис

```
Array.isArray(obj)
```

### Параметры

- `obj`
  - : Объект для проверки.

### Возвращаемое значение

`true` если объект является {{jsxref("Array")}}; иначе, `false`.

## Описание

За подробностям обращайтесь к статье [«Абсолютно точное определение того, является ли JavaScript-объект массивом или нет»](http://web.mit.edu/jwalden/www/isArray.html).

## Примеры

```js
// Все следующие вызовы вернут true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
// Малоизвестный факт: Array.prototype сам является массивом:
Array.isArray(Array.prototype);

// Все следующие вызовы вернут false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray("Array");
Array.isArray(true);
Array.isArray(false);
Array.isArray({ __proto__: Array.prototype });
```

### `instanceof` vs `isArray`

Когда проверяем экземпляр `Array`, `Array.isArray` предпочтительней, чем `instanceof`, потому что он работает и с `iframes`.

```js
var iframe = document.createElement("iframe");
document.body.appendChild(iframe);
xArray = window.frames[window.frames.length - 1].Array;
var arr = new xArray(1, 2, 3); // [1,2,3]

// Correctly checking for Array
Array.isArray(arr); // true
// Considered harmful, because doesn't work through iframes
arr instanceof Array; // false
```

## Полифил

Выполнение следующего кода перед любым другим кодом создаст метод `Array.isArray()`, если он ещё не реализован в браузере.

```js
if (!Array.isArray) {
  Array.isArray = function (arg) {
    return Object.prototype.toString.call(arg) === "[object Array]";
  };
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Global_Objects/Array", "Array")}}
