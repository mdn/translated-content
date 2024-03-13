---
title: yield
slug: Web/JavaScript/Reference/Operators/yield
---

{{jsSidebar("Operators")}}

Ключевое слово `yield` используется для остановки и возобновления функций-генераторов ({{jsxref("Statements/function*", "function*")}} или [legacy generator function](/ru/docs/Web/JavaScript/Reference/Statements/Legacy_generator_function)).

{{EmbedInteractiveExample("pages/js/expressions-yield.html")}}

## Синтаксис

```
 [rv] = yield [[выражение]];
```

- `выражение`
  - : Возвращаемое выражение. Если не указано, то возвращается значение `undefined`.
- `rv`
  - : Возвращает необязательное значение, которое передаётся в `next()` генератора, чтобы возобновить его выполнение.

## Описание

Ключевое слово `yield` вызывает остановку функции-генератора и возвращает текущее значение выражения, указанного после ключевого слова `yield`. Его можно рассматривать как аналог ключевого слова `return` в функции-генераторе.

На самом деле ключевое слово `yield` возвращает объект с двумя параметрами, `value` и `done`. При этом, `value` является результатом вычисления выражения после `yield`, а `done` указывает, была ли завершена функция-генератор.

Во время остановки на операторе `yield`, выполнение кода в функции-генераторе не возобновится, пока не будет вызван метод `next()` возвращаемого функцией [объекта-генератора](/ru/docs/Web/JavaScript/Reference/Global_Objects/Generator). Это предоставляет непосредственный контроль за выполнением генератора и возвратом его значений.

## Примеры

Следующий фрагмент кода содержит определение функции-генератора и вспомогательной функции:

```js
function* foo() {
  var index = 0;
  while (index <= 2)
    // при достижении 2, done в yield станет true, а value undefined;
    yield index++;
}
```

После того как тело функции-генератора определено, оно может использоваться для получения итератора:

```js
var iterator = foo();
console.log(iterator.next()); // { value:0, done:false }
console.log(iterator.next()); // { value:1, done:false }
console.log(iterator.next()); // { value:2, done:false }
console.log(iterator.next()); // { value:undefined, done:true }
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Итераторы](/ru/docs/Web/JavaScript/Guide/The_Iterator_protocol)
- [Генераторы](/ru/docs/Web/JavaScript/Reference/Statements/function*)
