---
title: in operator
slug: Web/JavaScript/Reference/Operators/in
---

{{jsSidebar("Operators")}}

**Оператор `in`** возвращает `true`, если свойство содержится в указанном объекте или в его цепочке прототипов.

## Синтаксис

```
prop in object
```

### Параметры

- `prop`
  - : Строка или symbol, представляющий название свойства или индекс массива (non-symbols будут конвертированы в строки).

<!---->

- `object`
  - : Объект, в котором нужно проверить содержание свойства с заданным именем.

## Описание

В примере ниже показаны некоторые способы использования оператора `in`.

```js
// Массивы
var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
0 in trees; // true
3 in trees; // true
6 in trees; // false
"bay" in trees; // false (вы должны указать индекс элемента в массиве, а не значение в этом индексе)
"length" in trees; // true (length является свойством Array)

// Уже существующие объекты
"PI" in Math; // true

// Пользовательские объекты
var mycar = { make: "Honda", model: "Accord", year: 1998 };
"make" in mycar; // true
"model" in mycar; // true
```

Вы должны указать объект справа от оператора `in`. Например, вы можете указать строку, созданную через конструктор объекта `String`, но вы не можете указать строковый литерал.

```js
var color1 = new String("green");
"length" in color1; // returns true

var color2 = "coral";
// сгенерирует ошибку (color2 is not a String object)
"length" in color2;
```

### Использование оператора `in` с неопределёнными или с уже удалёнными свойствами

Если вы удалили свойство при помощи оператора [`delete`](/ru/docs/Web/JavaScript/Reference/Operators/delete), то оператор `in` возвратит `false` для этого свойства.

```js
var mycar = { make: "Honda", model: "Accord", year: 1998 };
delete mycar.make;
"make" in mycar; // false

var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
delete trees[3];
3 in trees; // false
```

Если вы зададите свойству значение {{jsxref("Global_Objects/undefined", "undefined")}}, но не удалите его, то для этого свойства оператор `in` вернёт значение `true`.

```js
var mycar = { make: "Honda", model: "Accord", year: 1998 };
mycar.make = undefined;
"make" in mycar; // true
```

```js
var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
trees[3] = undefined;
3 in trees; // returns true
```

### Наследуемые свойства

Оператор `in` возвратит `true` для свойств, которые унаследованы по цепочке прототипов. (Если вы хотите проверить только не наследованные свойства, используйте {{jsxref("Object.prototype.hasOwnProperty()")}}.)

```js
"toString" in {}; // true
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [`delete`](/ru/docs/Web/JavaScript/Reference/Operators/delete)
- {{jsxref("Object.prototype.hasOwnProperty()")}}
- {{jsxref("Reflect.has()")}}
- [Enumerability and ownership of properties](/ru/docs/Enumerability_and_ownership_of_properties)
