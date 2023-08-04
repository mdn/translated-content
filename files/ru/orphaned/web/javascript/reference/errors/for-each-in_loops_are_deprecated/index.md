---
title: "Предупреждение: циклы JavaScript 1.6 for-each-in устарели"
slug: orphaned/Web/JavaScript/Reference/Errors/For-each-in_loops_are_deprecated
---

{{jsSidebar("Errors")}}

## Сообщение

```
Предупреждение: циклы JavaScript 1.6 for-each-in устарели; вместо них рекомендуется использовать ES6 for-of
```

## Что пошло не так?

JavaScript 1.6's {{jsxref("Statements/for_each...in", "for each (variable in obj)")}} оператор устарел и будет удалён в ближайшем будущем.

## Примеры

### Итерация объекта

{{jsxref("Statements/for_each...in", "for each...in")}} используется для итерации по указанным значениям объектов.

#### Устаревший синтаксис

```js example-bad
var object = { a: 10, b: 20 };

for each (var x in object) {
  console.log(x);        // 10
                         // 20
}
```

#### Альтернативный стандартный синтаксис

Теперь вы можете использовать стандартный {{jsxref("Statements/for...in", "for...in")}} цикл для итерации по указанным ключам объекта и получения каждого значения внутри цикла:

```js example-good
var object = { a: 10, b: 20 };

for (var key in object) {
  var x = object[key];
  console.log(x);        // 10
                         // 20
}
```

Or, using {{jsxref("Statements/for...of", "for...of")}} (ES2015) and {{jsxref("Object.values")}} (ES2017), можно получить массив указанных значений объекта и выполнить итерацию по массиву следующим образом:

```js example-good
var object = { a: 10, b: 20 };

for (var x of Object.values(object)) {
  console.log(x);        // 10
                         // 20
}
```

### Итерация массива

{{jsxref("Statements/for_each...in", "for each...in")}} используется для итерации по заданным элементам массива.

#### Устаревший синтаксис

```js example-bad
var array = [10, 20, 30];

for each (var x in array) {
  console.log(x);        // 10
                         // 20
                         // 30
}
```

#### Альтернативный стандартный синтаксис

Это теперь возможно с {{jsxref("Statements/for...of", "for...of")}} (ES2015) петли также.

```js example-good
var array = [10, 20, 30];

for (var x of array) {
  console.log(x);        // 10
                         // 20
                         // 30
}
```

### Итерация по нулевому массиву

{{jsxref("Statements/for_each...in", "for each...in")}} ничего не делает, если указанное значение `null` или `undefined`, но {{jsxref("Statements/for...of", "for...of")}} выдаст исключение в этих случаях.

#### Неправильный синтаксис

```js example-bad
function func(array) {
  for each (var x in array) {
    console.log(x);
  }
}
func([10, 20]);        // 10
                       // 20
func(null);            // prints nothing
func(undefined);       // prints nothing
```

#### Альтернативный стандартный синтаксис

Переписать {{jsxref("Statements/for_each...in", "for each...in")}} операторы, чтобы значения могли быть `null` или `undefined` с{{jsxref("Statements/for...of", "for...of")}} также необходимо охранять {{jsxref("Statements/for...of", "for...of")}}.

```js example-good
function func(array) {
  if (array) {
    for (var x of array) {
      console.log(x);
    }
  }
}
func([10, 20]);        // 10
                       // 20
func(null);            // prints nothing
func(undefined);       // prints nothing
```

### Итерация по паре ключ-значение объекта

#### Неправильный синтаксис

Существует устаревшая идиома для итерации по парам ключ-значение указанного объекта с помощью {{jsxref("Statements/for_each...in", "for each...in")}} и осуждённый {{jsxref("Iterator")}} объект.

```js example-bad
var object = { a: 10, b: 20 };

for each (var [key, value] in Iterator(object)) {
  console.log(key, value);  // "a", 10
                            // "b", 20
}
```

#### Альтернативный стандартный синтаксис

Теперь можно использовать стандартный цикл {{jsxref("Statements/for...in", "for...in")}} цикл для итерации по указанным ключам объекта и получения каждого значения внутри цикла:

```js example-good
var object = { a: 10, b: 20 };

for (var key in object) {
  var value = object[key];
  console.log(key, value);  // "a", 10
                            // "b", 20
}
```

Или, использовать {{jsxref("Statements/for...of", "for...of")}} (ES2015) и {{jsxref("Object.entries")}} (ES2017), можно получить массив указанных значений объекта и выполнить итерацию по массиву следующим образом:

```js example-good
var object = { a: 10, b: 20 };

for (var [key, value] of Object.entries(object)) {
  console.log(key, value);  // "a", 10
                            // "b", 20
}
```

## Смотрите также

- {{jsxref("Statements/for...of", "for...of")}}
- {{jsxref("Object.values")}}
- {{jsxref("Object.entries")}}
