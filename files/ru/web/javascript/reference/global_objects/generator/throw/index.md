---
title: Generator.prototype.throw()
slug: Web/JavaScript/Reference/Global_Objects/Generator/throw
---

{{JSRef}}

Метод **`throw()`** возобновляет выполнение тела генератора кидая внутри исключение `и возвращает объект со свойствами done и value`.

## Синтаксис

```
gen.throw(exception)
```

### Параметры

- `exception`
  - : Исключение, которое будет брошено. Во время отладки бывает полезно сделать его `instanceof` {{jsxref("Error")}}.

### Возвращаемое значение

Объект с двумя свойствами:

- `done` (boolean)

  - Имеет значение `true` если iterator прошёл конец итерируемой последовательности. В этом случае `value` опционально определяется выражением _return value_ внутри итератора .
  - Имеет значение `false` если iterator имеет возможность вернуть следующее значение последовательности. Это равносильно когда свойство done не указано.

- `value` - любое JavaScript значение, возвращённое итератором. Может быть проигнорировано, когда _`done` === `true`_.

## Примеры

### Использование `throw()`

В этом примере показан простой генератор и исключение, которое выбрасывается используя метод `throw`. Исключение может быть поймано, используя, как обычно, блок [`try...catch`](/ru/docs/Web/JavaScript/Reference/Statements/try...catch).

```js
function* gen() {
  while (true) {
    try {
      yield 42;
    } catch (e) {
      console.log("Error caught!");
    }
  }
}

var g = gen();
g.next();
// { value: 42, done: false }
g.throw(new Error("Something went wrong"));
// "Error caught!"
// { value: 42, done: false }
```

## Спецификации

{{Specifications}}

## Совместимость браузеров

{{Compat}}

## Смотрите также

- [`function*`](/ru/docs/Web/JavaScript/Reference/Statements/function*)
