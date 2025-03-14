---
title: Generator.prototype.return()
slug: Web/JavaScript/Reference/Global_Objects/Generator/return
---

{{JSRef}}

Метод **`return()`** возвращает полученное значение и останавливает генератор.

## Синтаксис

```
gen.return(value)
```

### Параметры

- `value`
  - : Значение для возврата.

### Возвращаемое значение

Значение, которое было передано в виде аргумента.

## Примеры

### Использование `return()`

Следующий пример показывает простой генератор и метод `return`.

```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

var g = gen();

g.next(); // { value: 1, done: false }
g.return("foo"); // { value: "foo", done: true }
g.next(); // { value: undefined, done: true }
```

Если `return(value)` вызывает генератор, который находится в уже "завершённом" состоянии, генератор останется в "завершённом" состоянии. Если аргумент не был передан, свойство `value` вернёт тот же объект, что и `.next()`. Если аргумент был передан, он будет установлен как значение свойства `value` возвращаемого объекта.

```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

var g = gen();
g.next(); // { value: 1, done: false }
g.next(); // { value: 2, done: false }
g.next(); // { value: 3, done: false }
g.next(); // { value: undefined, done: true }
g.return(); // { value: undefined, done: true }
g.return(1); // { value: 1, done: true }
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [`function*`](/ru/docs/Web/JavaScript/Reference/Statements/function*)
