---
title: get Array[@@species]
slug: Web/JavaScript/Reference/Global_Objects/Array/@@species
---

{{JSRef}}

Метод **`Array[@@species]`** возвращает конструктор `Array` .

## Синтаксис

```
Array[Symbol.species]
```

### Возвращаемое значение

Конструктор {{jsxref("Array")}}.

## Описание

Метод `species` возвращает стандартный конструктор объектов `Array` . Дочерние элементы могут переопределить метод для смены назначения конструктора.

## Примеры

Метод `species` возвращает стандартное значение функции конструктора, то есть
`Array` конструктор для `Array` объектов:

```js
Array[Symbol.species]; // функция Array()
```

В полученном объекте (на примере обычного массива `MyArray`), `MyArray` является конструктором `MyArray`. В случае, если вы захотите вернуть родительские объекты `Array` в полученных классовых методах, вы можете переопределить метод:

```js
class MyArray extends Array {
  //  Переписывает тип MyArray в родительский конструктор Array
  static get [Symbol.species]() {
    return Array;
  }
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Array")}}
- {{jsxref("Symbol.species")}}
