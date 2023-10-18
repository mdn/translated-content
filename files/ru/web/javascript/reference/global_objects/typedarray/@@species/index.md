---
title: get TypedArray[@@species]
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/@@species
---

{{JSRef}}

**`TypedArray[@@species]`** - это способ доступа, с помощью которого можно получить конструктор [типизированного массива](/ru/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects).

## Синтаксис

```
TypedArray[Symbol.species]

где TypedArray это один из:

Int8Array
Uint8Array
Uint8ClampedArray
Int16Array
Uint16Array
Int32Array
Uint32Array
Float32Array
Float64Array
```

## Описание

Свойство **`species`** возвращает конструктор "по умолчанию" для объектов [типизированного массива](/ru/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects). Конструкторы подкласса могут его переопределить.

## Примеры

Свойство [**`species`**](/ru/docs/Web/JavaScript/Reference/Global_Objects/Symbol/species) возвращает функцию-конструктор "по умолчанию", которая является одним из конструкторов данного [типизированного массива](/ru/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects):

```js
Int8Array[Symbol.species]; // function Int8Array()
Uint8Array[Symbol.species]; // function Uint8Array()
Float32Array[Symbol.species]; // function Float32Array()
```

В производном объекте-массиве (например, вы разработали свой массив `MyTypedArray`), `MyTypedArray` определяет свой конструктор. Однако, вы можете захотеть его переопределить, например, возвращать родительский объект из вашего производного класса:

```js
class MyTypedArray extends Uint8Array {
  //Переопределение вида MyTypedArray на родительский Uint8Array
  static get [Symbol.species]() {
    return Uint8Array;
  }
}
```

## Спецификации

{{Specifications}}

## Совместимость браузеров

{{Compat}}

## Смотрите также

- {{jsxref("TypedArray")}}
- {{jsxref("Symbol.species")}}
