---
title: Symbol.isConcatSpreadable
slug: Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable
---

{{JSRef}}

**`Symbol.isConcatSpreadable`** - это известный символ, который используется для определения, должен ли объект редуцироваться к сумме своих элементов при использовании метода {{jsxref("Array.prototype.concat()")}}.

{{js_property_attributes(0,0,0)}}

## Описание

`@@isConcatSpreadable-символ` (`Symbol.isConcatSpreadable`) можно определить как собственное или унаследованное свойство с булевым значением. Оно контролирует поведение массивов и массивоподобных объектов:

- Для массивов поведением по умолчанию будет редуцирование к сумме своих элементов. `Symbol.isConcatSpreadable` поможет избежать редукции в подобных случаях.
- Для массивоподобных объектов поведением по умолчанию будет `сохранение своей структуры.isConcatSpreadable` может вызвать редуцирование в подобных случаях.

## Примеры

### Массивы

По умолчанию, {{jsxref("Array.prototype.concat()")}} возвращает массив, объединяющий элементы исходных массивов:

```js
var alpha = ["a", "b", "c"],
  numeric = [1, 2, 3];

var alphaNumeric = alpha.concat(numeric);

console.log(alphaNumeric); // Result: ['a', 'b', 'c', 1, 2, 3]
```

Если значение `Symbol.isConcatSpreadable` = `false`, то можно отменить поведение по умолчанию:

```js
var alpha = ["a", "b", "c"],
  numeric = [1, 2, 3];

numeric[Symbol.isConcatSpreadable] = false;
var alphaNumeric = alpha.concat(numeric);

console.log(alphaNumeric); // Result: ['a', 'b', 'c', [1, 2, 3] ]
```

### Массивоподобные объекты

Для массивоподобных объектов поведением по умолчанию будет сохранение своей структуры. Чтобы вызвать его разложение до суммы элементов в итоговом массиве, нужно задать значение `true` для `Symbol.isConcatSpreadable`:

```js
var x = [1, 2, 3];

var fakeArray = {
  [Symbol.isConcatSpreadable]: true,
  length: 2,
  0: "hello",
  1: "world",
};

x.concat(fakeArray); // [1, 2, 3, "hello", "world"]
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Array.prototype.concat()")}}
