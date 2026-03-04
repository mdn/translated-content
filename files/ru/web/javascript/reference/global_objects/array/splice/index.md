---
title: Array.prototype.splice()
slug: Web/JavaScript/Reference/Global_Objects/Array/splice
---

{{JSRef}}

## Сводка

Метод **`splice()`** изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые.

## Синтаксис

```js-nolint
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2)
splice(start, deleteCount, item1, item2, /* …, */ itemN)
```

### Параметры

- `start`
  - : Индекс, с которого начинается изменение массива (от нуля), преобразованный в целое число.
    - Отрицательный индекс отсчитывается от конца массива: если `-array.length <= start < 0`, то используется `start + array.length`.
    - Если `start < -array.length`, то используется `0`.
    - Если `start >= array.length`, то ни один элемент не будет удален, но метод добавит столько элементов, сколько указано.
    - Если `start` опущен (и `splice()` вызывается без аргументов), то ничего не удаляется. Это отличается от передачи значения `undefined`, которое преобразуется в `0`.

- `deleteCount` {{optional_inline}}
  - : Целое число, указывающее количество элементов в массиве, которые нужно удалить, начиная с позиции `start`.

    Если `deleteCount` не задано или его значение больше или равно количеству элементов после позиции, указанной в `start`, то будут удалены все элементы от `start` до конца массива. Если требуется указать параметр `itemN`, то следует передать `Infinity` в качестве `deleteCount`, чтобы удалить все элементы после `start`, поскольку явное значение `undefined` преобразуется в `0`.

    Если `deleteCount` равно `0` или отрицательное, элементы не удаляются. В этом случае следует указать как минимум один новый элемент (см. ниже).

- `item1`, …, `itemN` {{optional_inline}}
  - : Элементы, которые нужно добавить в массив, начиная со `start`.

    Если не указать никаких элементов, функция `splice()` только удалит элементы из массива.

### Возвращаемое значение

Массив, содержащий удалённые элементы. Если будет удалён только один элемент, вернётся массив из одного элемента. Если никакие элементы не будут удалены, вернётся пустой массив.

## Описание

Если количество указанных вставляемых элементов будет отличным от количества удаляемых элементов, массив изменит длину после вызова.

## Примеры

### Удаляет 0 элементов по индексу 2 и вставляет "drum"

```js
var myFish = ["angel", "clown", "mandarin", "sturgeon"];
var removed = myFish.splice(2, 0, "drum");

// myFish равен ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed равен [], ничего не удалено
```

### Удаляет 1 элемент по индексу 3

```js
var myFish = ["angel", "clown", "drum", "mandarin", "sturgeon"];
var removed = myFish.splice(3, 1);

// removed равен ["mandarin"]
// myFish равен ["angel", "clown", "drum", "sturgeon"]
```

### Удаляет 1 элемент по индексу 2 и вставляет "trumpet"

```js
var myFish = ["angel", "clown", "drum", "sturgeon"];
var removed = myFish.splice(2, 1, "trumpet");

// myFish равен ["angel", "clown", "trumpet", "sturgeon"]
// removed равен ["drum"]
```

### Удаляет 2 элемента начиная с индекса 0 и вставляет "parrot", "anemone" и "blue"

```js
var myFish = ["angel", "clown", "trumpet", "sturgeon"];
var removed = myFish.splice(0, 2, "parrot", "anemone", "blue");

// myFish равен ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
// removed равен ["angel", "clown"]
```

### Удаляет 2 элемента начиная с индекса 2

```js
var myFish = ["parrot", "anemone", "blue", "trumpet", "sturgeon"];
var removed = myFish.splice(myFish.length - 3, 2);

// myFish равен ["parrot", "anemone", "sturgeon"]
// removed равен ["blue", "trumpet"]
```

### Удаляет 1 элемент по индексу -2

```js
var myFish = ["angel", "clown", "mandarin", "sturgeon"];
var removed = myFish.splice(-2, 1);

// myFish равен ["angel", "clown", "sturgeon"]
// removed равен s ["mandarin"]
```

### Удаляет все элементы после индекса 2 (включительно)

```js
var myFish = ["angel", "clown", "mandarin", "sturgeon"];
var removed = myFish.splice(2);

// myFish равен ["angel", "clown"]
// removed равен ["mandarin", "sturgeon"]
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

### Обратная совместимость

В JavaScript 1.2 метод `splice()` возвращал удалённый элемент только если был удалён один элемент (параметр `deleteCount` равен 1); в противном случае метод возвращал массив с удалёнными элементами. Обратите внимание, что последним браузером, использующим JavaScript 1.2, был Netscape Navigator 4, так что вы можете считать, что `splice()` всегда возвращает массив.

## Смотрите также

- {{jsxref("Array.prototype.push()", "push()")}} / {{jsxref("Array.prototype.pop()", "pop()")}} — добавление / удаление элементов с конца массива
- {{jsxref("Array.prototype.unshift()", "unshift()")}} / {{jsxref("Array.prototype.shift()", "shift()")}} — добавление / удаление элементов с начала массива
- {{jsxref("Array.prototype.concat()", "concat()")}} — возвращает новый массив, состоящий из данного массива, соединённого с другими массивами и/или значениями
