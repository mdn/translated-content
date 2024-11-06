---
title: Generator.prototype.next()
slug: Web/JavaScript/Reference/Global_Objects/Generator/next
---

{{JSRef}}

Метод **`next()`** возвращает объект с двумя свойствами `done` и `value`. Также вы можете задать параметр для метода `next`, чтобы отправить значение в генератор.

## Синтаксис

```
gen.next(value)
```

### Параметры

- `value`
  - : Значение, отправляемое в генератор. Значение будет установлено в виде результата выражения yield, т. е. в \[переменная] = yield \[выражение] значение, которое было передано в функцию .next будет присвоено \[переменной].

### Возвращаемое значение

[`Object`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Object) с двумя свойствами:

- `done` (boolean)

  - Имеет значение `true`, если итератор находится за окончанием итерируемой последовательности. В этом случае `value` может указывать _возвращаемое значение_ итератора.
  - Имеет значение `false`, если итератор может создать следующее значение в последовательности. Это эквивалентно вообще не указанному свойству `done`.

- `value` - любое JavaScript значение, возвращаемое итератором. Может быть опущено, когда `done` имеет значение `true`.

## Примеры

### Использование `next()`

Следующий пример показывает простой генератор и объект, который возвращает метод `next`:

```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

var g = gen(); // "Generator { }"
g.next(); // "Object { value: 1, done: false }"
g.next(); // "Object { value: 2, done: false }"
g.next(); // "Object { value: 3, done: false }"
g.next(); // "Object { value: undefined, done: true }"
```

### Отправка значения в генератор

В этом примере `next` вызывается со значением. Отметим, что первый вызов ничего не вывел, потому что генератор изначально ничего не получил.

```js
function* gen() {
  while (true) {
    var value = yield null;
    console.log(value);
  }
}

var g = gen();
g.next(1);
// "{ value: null, done: false }"
g.next(2);
// 2
// "{ value: null, done: false }"
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [`function*`](/ru/docs/Web/JavaScript/Reference/Statements/function*)
- [Итераторы и генераторы](/ru/docs/Web/JavaScript/Guide/Iterators_and_Generators)
