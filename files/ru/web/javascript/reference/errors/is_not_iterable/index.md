---
title: "TypeError: 'x' is not iterable (Тип ошибки  'x' не является итерационным)"
slug: Web/JavaScript/Reference/Errors/is_not_iterable
---

{{jsSidebar("Errors")}}

## Сообщение

```
TypeError: "x" не является итерационным (Firefox, Chrome)
TypeError: 'x' не является функцией или её возвращаемое значение не является итерационным (Chrome)
```

## Тип ошибки

{{jsxref("TypeError")}}

## Что пошло не так?

Значение, которое даётся как правая сторона for...of или как аргумент функции, такой как {{jsxref("Promise.all")}} или {{jsxref("TypedArray.from")}}, не является итерационным объектом. Повторяемое может быть, встроенный итератор типа, такие как {{jsxref("Array")}}, {{jsxref("String")}} или {{jsxref("Map")}}, генератор результатом, или объект, реализующий итератор протокол.

## Примеры

### Итерация по свойствам объекта

В JavaScript, {{jsxref("object")}} не повторяется, если они реализуют итерационный протокол . Поэтому нельзя использовать for...of для перебора свойств объекта.

```js example-bad
var obj = { France: "Paris", England: "London" };
for (let p of obj) {
  // TypeError: obj не является итерационным
  // …
}
```

Вместо этого вы должны использовать {{jsxref("Object.keys")}} или {{jsxref("Object.entries")}}, для итерации по свойствам или записям объекта.

```js example-good
var obj = { France: "Paris", England: "London" };
// Iterate over the property names:
for (let country of Object.keys(obj)) {
  var capital = obj[country];
  console.log(country, capital);
}

for (const [country, capital] of Object.entries(obj))
  console.log(country, capital);
```

Другим вариантом для этого варианта использования может быть использование {{jsxref("Map")}}:

```js example-good
var map = new Map();
map.set("France", "Paris");
map.set("England", "London");
// Iterate over the property names:
for (let country of map.keys()) {
  let capital = map[country];
  console.log(country, capital);
}

for (let capital of map.values()) console.log(capital);

for (const [country, capital] of map.entries()) console.log(country, capital);
```

### Итерация по генератору

Генераторы - это функции, вызываемые для создания итерационного объекта.

```js example-bad
function* generate(a, b) {
  yield a;
  yield b;
}

for (let x of generate) // TypeError: генерация не является итерационной
  console.log(x);
```

Если они не вызываются, то объект {{jsxref("Function")}}, соответствующий генератору, можно вызвать, но нельзя выполнить итерацию. Вызов генератора создаёт итерационный объект, который будет выполнять итерацию по значениям, полученным во время выполнения генератора.

```js example-good
function* generate(a, b) {
  yield a;
  yield b;
}

for (let x of generate(1, 2)) console.log(x);
```

## Смотрите также

- [iterable protocol](/ru/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol)
- {{jsxref("Object.keys")}}
- {{jsxref("Object.entries")}}
- {{jsxref("Map")}}
- [generators](/ru/docs/Web/JavaScript/Guide/Iterators_and_Generators#Generators)
- [for…of](/ru/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement)
