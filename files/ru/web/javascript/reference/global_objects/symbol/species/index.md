---
title: Symbol.species
slug: Web/JavaScript/Reference/Global_Objects/Symbol/species
---

{{JSRef}}

**`Symbol.species`** **—** известный символ, позволяющий определить конструктор, использующийся для создания порождённых объектов.

{{js_property_attributes(0,0,0)}}

## Описание

Свойство **`Symbol.species`**, содержащее аксессор (геттер), позволяет подклассам переопределить конструктор, используемый по умолчанию для создания новых объектов.

## Примеры

Вам может понадобиться возвращать объекты типа {{jsxref("Array")}} в методах вашего производного класса `MyArray`. Например, при использовании метода вроде {{jsxref("Array.map", "map()")}}, использующего конструктор по умолчанию, вам может потребоваться возвращать объект родительского типа `Array`, вместо `MyArray`. Символ **`species`** позволит вам это сделать:

```js
class MyArray extends Array {
  // Перегружаем species для использования родительского конструктора Array
  static get [Symbol.species]() {
    return Array;
  }
}
var a = new MyArray(1, 2, 3);
var mapped = a.map((x) => x * x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array); // true
```

## Спецификации

| Спецификация                                                     | Статус               | Комментарий              |
| ---------------------------------------------------------------- | -------------------- | ------------------------ |
| {{SpecName('ES6', '#sec-symbol.species', 'Symbol.species')}}     | {{Spec2('ES6')}}     | Изначальное определение. |
| {{SpecName('ESDraft', '#sec-symbol.species', 'Symbol.species')}} | {{Spec2('ESDraft')}} |                          |

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Map.@@species", "Map[@@species]")}}
- {{jsxref("Set.@@species", "Set[@@species]")}}
