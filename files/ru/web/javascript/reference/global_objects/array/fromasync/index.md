---
title: Array.fromAsync()
short-title: fromAsync()
slug: Web/JavaScript/Reference/Global_Objects/Array/fromAsync
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Статический метод **`Array.fromAsync()`** создаёт новый экземпляр `Array` с поверхностной копией элементов [асинхронного итерируемого](/ru/docs/Web/JavaScript/Reference/Iteration_protocols), [итерируемого](/ru/docs/Web/JavaScript/Reference/Iteration_protocols#протокол_итерируемый) или [массивоподобного](/ru/docs/Web/JavaScript/Guide/Indexed_collections#работа_с_массивоподобными_объектами) объекта.

## Синтаксис

```js-nolint
Array.fromAsync(items)
Array.fromAsync(items, mapFn)
Array.fromAsync(items, mapFn, thisArg)
```

### Параметры

- `items`
  - : Асинхронный итерируемый, итерируемый или массивоподобный объект, который нужно преобразовать в массив.
- `mapFn` {{optional_inline}}
  - : Функция, вызываемая для каждого элемента массива. Если она передана, то каждое добавляемое в массив значение сначала пропускается через эту функцию, и в массив вместо него добавляется возвращаемое значение `mapFn` (после ожидания через [await](/ru/docs/Web/JavaScript/Reference/Operators/await)). Функция вызывается со следующими аргументами:
    - `element`
      - : Текущий обрабатываемый элемент массива. Если `items` — синхронный итерируемый или массивоподобный объект, то все элементы сначала [ожидаются через await](/ru/docs/Web/JavaScript/Reference/Operators/await), и `element` никогда не будет [thenable-объектом](/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise). Если `items` — асинхронный итерируемый объект, то каждое полученное значение передаётся как есть.
    - `index`
      - : Индекс текущего обрабатываемого элемента массива.
- `thisArg` {{optional_inline}}
  - : Значение, используемое в качестве `this` при вызове `mapFn`.

### Возвращаемое значение

Новый {{jsxref("Promise")}}, значением успешного выполнения которого будет новый экземпляр {{jsxref("Array")}}.

## Описание

`Array.fromAsync()` позволяет создавать массивы из:

- [асинхронных итерируемых объектов](/ru/docs/Web/JavaScript/Reference/Iteration_protocols) (таких как {{domxref("ReadableStream")}} и {{jsxref("AsyncGenerator")}}); либо, если объект не является асинхронным итерируемым,
- [итерируемых объектов](/ru/docs/Web/JavaScript/Reference/Iteration_protocols#протокол_итерируемый) (таких как {{jsxref("Map")}} и {{jsxref("Set")}}); либо, если объект не является итерируемым,
- массивоподобных объектов (объектов со свойством `length` и элементами по индексам).

`Array.fromAsync()` перебирает асинхронный итерируемый объект почти так же, как {{jsxref("Statements/for-await...of", "for await...of")}}. По поведению `Array.fromAsync(items)` в целом эквивалентен следующему коду, если `items` — асинхронный или синхронный итерируемый объект:

```js
const result = [];
for await (const element of items) {
  result.push(element);
}
```

`Array.fromAsync()` почти эквивалентен {{jsxref("Array.from()")}} по поведению, за исключением следующего:

- `Array.fromAsync()` умеет работать с асинхронными итерируемыми объектами.
- `Array.fromAsync()` возвращает {{jsxref("Promise")}}, который успешно выполняется со значением-массивом.
- Если `Array.fromAsync()` вызывается с объектом, не являющимся асинхронным итерируемым, то каждый добавляемый в массив элемент сначала [ожидается через await](/ru/docs/Web/JavaScript/Reference/Operators/await).
- Если передана функция `mapFn`, то её результат также внутренне ожидается через `await`.

И `Array.fromAsync()`, и {{jsxref("Promise.all()")}} могут превратить итерируемый объект с промисами в промис с массивом. Однако есть два ключевых отличия:

- `Array.fromAsync()` ожидает значения, получаемые из объекта, последовательно. `Promise.all()` ожидает все значения одновременно.
- `Array.fromAsync()` перебирает итерируемый объект лениво и не запрашивает следующее значение, пока не завершится обработка текущего. `Promise.all()` получает все значения заранее и ожидает их все.

## Примеры

### Массив из асинхронного итерируемого объекта

```js
const asyncIterable = (async function* () {
  for (let i = 0; i < 5; i++) {
    await new Promise((resolve) => setTimeout(resolve, 10 * i));
    yield i;
  }
})();

Array.fromAsync(asyncIterable).then((array) => console.log(array));
// [0, 1, 2, 3, 4]
```

Если `items` — асинхронный итерируемый объект, у которого `value` каждого результата тоже является промисом, то такие промисы добавляются в итоговый массив без ожидания через `await`. Это согласуется с поведением `for await...of`.

```js
function createAsyncIter() {
  let i = 0;
  return {
    [Symbol.asyncIterator]() {
      return {
        async next() {
          if (i > 2) return { done: true };
          i++;
          return { value: Promise.resolve(i), done: false };
        },
      };
    },
  };
}

Array.fromAsync(createAsyncIter()).then((array) => console.log(array));
// (3) [Promise, Promise, Promise]
```

> [!NOTE]
> На практике асинхронный итерируемый объект, отдающий промисы, встречается редко: если реализовать его через [асинхронную функцию-генератор](/ru/docs/Web/JavaScript/Reference/Statements/async_function*), то выражение [`yield`](/ru/docs/Web/JavaScript/Reference/Operators/yield) автоматически развернёт промисы.

### Массив из синхронного итерируемого объекта

```js
Array.fromAsync(
  new Map([
    [1, 2],
    [3, 4],
  ]),
).then((array) => console.log(array));
// [[1, 2], [3, 4]]
```

### Массив из синхронного итерируемого объекта, отдающего промисы

```js
Array.fromAsync(
  new Set([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]),
).then((array) => console.log(array));
// [1, 2, 3]
```

### Массив из массивоподобного объекта с промисами

```js
Array.fromAsync({
  length: 3,
  0: Promise.resolve(1),
  1: Promise.resolve(2),
  2: Promise.resolve(3),
}).then((array) => console.log(array));
// [1, 2, 3]
```

### Использование mapFn с синхронным итерируемым объектом

Если `items` — синхронный итерируемый или массивоподобный объект, то и входное значение, и результат `mapFn` внутренне ожидаются `Array.fromAsync()` через `await`.

```js
function delayedValue(v) {
  return new Promise((resolve) => setTimeout(() => resolve(v), 100));
}

Array.fromAsync(
  [delayedValue(1), delayedValue(2), delayedValue(3)],
  (element) => delayedValue(element * 2),
).then((array) => console.log(array));
// [2, 4, 6]
```

### Использование mapFn с асинхронным итерируемым объектом

Если `items` — асинхронный итерируемый объект, то входное значение `mapFn` не ожидается через `await`, а результат — ожидается. С той же функцией `createAsyncIter`, что и выше:

```js
Array.fromAsync(createAsyncIter(), async (element) => (await element) * 2).then(
  (array) => console.log(array),
);
// [2, 4, 6]
```

Любопытно, что из-за этого `Array.fromAsync(createAsyncIter())` не эквивалентен `Array.fromAsync(createAsyncIter(), (element) => element)`: во втором случае каждое полученное значение ожидается через `await`, а в первом — нет.

```js
Array.fromAsync(createAsyncIter(), (element) => element).then((array) =>
  console.log(array),
);
// [1, 2, 3]
```

### Сравнение с Promise.all()

`Array.fromAsync()` ожидает значения, получаемые из объекта, последовательно. `Promise.all()` ожидает все значения одновременно.

```js
function* makeIterableOfPromises() {
  for (let i = 0; i < 5; i++) {
    yield new Promise((resolve) => setTimeout(resolve, 100));
  }
}

(async () => {
  console.time("Array.fromAsync() time");
  await Array.fromAsync(makeIterableOfPromises());
  console.timeEnd("Array.fromAsync() time");
  // Array.fromAsync() time: 503.610ms

  console.time("Promise.all() time");
  await Promise.all(makeIterableOfPromises());
  console.timeEnd("Promise.all() time");
  // Promise.all() time: 101.728ms
})();
```

### Отсутствие обработки ошибок для синхронных итерируемых объектов

Как и в случае с [`for await...of`](/ru/docs/Web/JavaScript/Reference/Statements/for-await...of), если перебираемый объект является синхронным итерируемым и во время перебора выбрасывается ошибка, метод `return()` базового итератора вызван не будет, поэтому итератор не будет закрыт.

```js
function* generatorWithRejectedPromises() {
  try {
    yield 0;
    yield Promise.reject(new Error("error"));
  } finally {
    console.log("called finally");
  }
}

(async () => {
  try {
    await Array.fromAsync(generatorWithRejectedPromises());
  } catch (e) {
    console.log("caught", e);
  }
})();
// caught Error: error
// Сообщения "called finally" нет
```

Если итератор нужно закрыть, используйте вместо этого цикл {{jsxref("Statements/for...of", "for...of")}} и ожидайте каждое значение через `await` самостоятельно.

```js
(async () => {
  const arr = [];
  try {
    for (const val of generatorWithRejectedPromises()) {
      arr.push(await val);
    }
  } catch (e) {
    console.log("caught", e);
  }
})();
// called finally
// caught 3
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Полифил `Array.fromAsync` в `core-js`](https://github.com/zloirock/core-js#arrayfromasync)
- Руководство [Индексированные коллекции](/ru/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array/Array", "Array()")}}
- {{jsxref("Array.of()")}}
- {{jsxref("Array.from()")}}
- {{jsxref("Statements/for-await...of", "for await...of")}}
