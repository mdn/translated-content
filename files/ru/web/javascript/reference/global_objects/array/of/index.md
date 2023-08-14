---
title: Array.of()
slug: Web/JavaScript/Reference/Global_Objects/Array/of
---

{{JSRef}}

Метод **`Array.of()`** создаёт новый экземпляр массива `Array` из произвольного числа аргументов, вне зависимости от числа или типа аргумента.

Разница между **`Array.of()`** и конструктором **`Array`** заключается в обработке целочисленных аргументов: **`Array.of(7)`** создаёт массив с одним элементом `7`, а **`Array(7)`** создаёт пустой массив со значением свойства `length` равным 7 (**Замечание:** подразумевается 7 пустых слотов, а не слоты со значением `undefined`).

```js
Array.of(7); // [7]
Array.of(1, 2, 3); // [1, 2, 3]

Array(7); // массив с 7 пустыми слотами
Array(1, 2, 3); // [1, 2, 3]
```

## Синтаксис

```
Array.of(element0[, element1[, ...[, elementN]]])
```

### Параметры

- `elementN`
  - : Элементы, из которых создаётся массив.

### Возвращаемое значение

Новый массив {{jsxref("Array")}}.

## Описание

Эта функция является частью стандарта ECMAScript 6. Для дополнительной информации смотрите [предложение по Array.of и Array.from](https://gist.github.com/rwaldron/1074126) и [полифил для Array.of](https://gist.github.com/rwaldron/3186576).

## Примеры

```js
Array.of(1); // [1]
Array.of(1, 2, 3); // [1, 2, 3]
Array.of(undefined); // [undefined]
```

## Полифил

Выполнение следующего кода перед любым другим кодом создаст метод `Array.of()`, если он ещё не реализован в браузере.

```js
if (!Array.of) {
  Array.of = function() {
    return Array.prototype.slice.call(arguments);
    // Or
    let vals = []
    for(let prop in arguments){
        vals.push(arguments[prop])
    }
    return vals.slice()
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Array")}}
- {{jsxref("Array.from()")}}
- {{jsxref("TypedArray.of()")}}
