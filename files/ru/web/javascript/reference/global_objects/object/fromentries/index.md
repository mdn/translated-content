---
title: Object.fromEntries()
slug: Web/JavaScript/Reference/Global_Objects/Object/fromEntries
---

{{JSRef}}

Метод **`Object.fromEntries()`** преобразует список пар ключ-значение в объект.

{{EmbedInteractiveExample("pages/js/object-fromentries.html")}}

## Синтаксис

```
Object.fromEntries(iterable);
```

### Параметры

- `iterable`
  - : Итерируемый объект, такой как {{jsxref("Array")}} или {{jsxref("Map")}} или другие объекты, реализующие [iterable протокол](/ru/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol).

### Возвращаемое значение

Новый объект, свойства которого задаются записями iterable.

## Описание

Метод `Object.fromEntries()` принимает список пар ключ-значение и возвращает новый объект, свойства которого задаются этими записями. Ожидается, что аргумент _iterable_ будет объектом, который реализует метод `@@iterator`, который возвращает объект итератора, который создаёт двухэлементный массивоподобный объект, первый элемент которого является значением, которое будет использоваться в качестве ключа свойства, а второй элемент — значением связанного с этим ключом свойства.

`Object.fromEntries()` выполняет процедуру, обратную {{jsxref("Object.entries()")}}.

## Примеры

### Преобразование `Map` в `Object`

С `Object.fromEntries` вы можете преобразовать {{jsxref("Map")}} в {{jsxref("Object")}}:

```js
const map = new Map([
  ["foo", "bar"],
  ["baz", 42],
]);
const obj = Object.fromEntries(map);
console.log(obj); // { foo: "bar", baz: 42 }
```

### Преобразование `Array` в `Object`

С `Object.fromEntries` вы можете преобразовать {{jsxref("Array")}} в {{jsxref("Object")}}:

```js
const arr = [
  ["0", "a"],
  ["1", "b"],
  ["2", "c"],
];
const obj = Object.fromEntries(arr);
console.log(obj); // { 0: "a", 1: "b", 2: "c" }
```

### Трансформации объектов

С `Object.fromEntries`, обратным ему методом {{jsxref("Object.entries()")}} и [методами манипулирования массивами](/ru/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods_2) вы можете преобразовывать объекты следующим образом:

```js
const object1 = { a: 1, b: 2, c: 3 };

const object2 = Object.fromEntries(
  Object.entries(object1).map(([key, val]) => [key, val * 2]),
);

console.log(object2);
// { a: 2, b: 4, c: 6 }
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Object.entries()")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.values()")}}
- {{jsxref("Map.prototype.entries()")}}
- {{jsxref("Map.prototype.keys()")}}
- {{jsxref("Map.prototype.values()")}}
