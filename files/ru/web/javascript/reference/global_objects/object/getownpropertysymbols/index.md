---
title: Object.getOwnPropertySymbols()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols
---

{{JSRef}}

Метод **`Object.getOwnPropertySymbols()`** возвращает массив всех символьных свойств, найденных непосредственно на переданном объекте.

{{InteractiveExample("JavaScript Demo: Object.getOwnPropertySymbols()")}}

```js interactive-example
const object1 = {};
const a = Symbol("a");
const b = Symbol.for("b");

object1[a] = "localSymbol";
object1[b] = "globalSymbol";

const objectSymbols = Object.getOwnPropertySymbols(object1);

console.log(objectSymbols.length);
// Expected output: 2
```

## Синтаксис

```js
Object.getOwnPropertySymbols(obj);
```

### Параметры

- `obj`
  - : Объект, чьи символьные будут возвращены.

### Возвращаемое значение

Массив всех свойств символа, найденных прямо на данном объекте.

## Описание

Подобно методу {{jsxref("Object.getOwnPropertyNames()")}}, вы можете получить все символьные свойства указанного объекта в качестве массива символов. Обратите внимание, что метод {{jsxref("Object.getOwnPropertyNames()")}} сам не возвращает символьные свойства объекта, он возвращает только строковые свойства.

Поскольку изначально никакой объект не содержит собственных символьных свойств, метод `Object.getOwnPropertySymbols()` будет возвращать пустой массив, пока вы не установите символьные свойства на вашем объекте.

## Примеры

```js
var obj = {};
var a = Symbol("a");
var b = Symbol.for("b");

obj[a] = "localSymbol";
obj[b] = "globalSymbol";

var objectSymbols = Object.getOwnPropertySymbols(obj);

console.log(objectSymbols.length); // 2
console.log(objectSymbols); // [Symbol(a), Symbol(b)]
console.log(objectSymbols[0]); // Symbol(a)
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Symbol")}}
