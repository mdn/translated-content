---
title: for await...of
slug: Web/JavaScript/Reference/Statements/for-await...of
---

{{jsSidebar("Statements")}}

Выражение **`for await...of`** создаёт цикл, проходящий через асинхронные итерируемые объекты, а также синхронные итерируемые сущности, включающие: встроенные {{jsxref("String")}}, {{jsxref("Array")}}, `Array`-подобные объекты (например., {{jsxref("Functions/arguments", "arguments")}} или {{domxref("NodeList")}}), {{jsxref("TypedArray")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, а также определяемые пользователем асинхронные/синхронные сущности. Он вызывает пользовательский итерационный хук с инструкциями, которые должны быть выполнены для значения каждого отдельного свойства объекта.

## Синтаксис

```
for await (variable of iterable) {
  statement
}
```

- `variable`
  - : На каждой итерации значение другого свойства присваивается _variable_. _variable_ может быть объявлена с помощью ключевых слов `const`, `let`, or `var`.
- `iterable`
  - : Объект, чьи итерируемые свойства будут повторяться.

### Итерирование по асинхронным переменным

Вы также можете перебрать объект, который явно реализует асинхронный итерируемый протокол.

```js
var asyncIterable = {
  [Symbol.asyncIterator]() {
    return {
      i: 0,
      next() {
        if (this.i < 3) {
          return Promise.resolve({ value: this.i++, done: false });
        }

        return Promise.resolve({ done: true });
      },
    };
  },
};

(async function () {
  for await (let num of asyncIterable) {
    console.log(num);
  }
})();

// 0
// 1
// 2
```

### Итерирование по асинхронным генераторам

Поскольку асинхронные генераторы реализуют асинхронный протокол Iterator, по ним можно пройти циклом с помощью `for await... of`

```js
async function* asyncGenerator() {
  var i = 0;
  while (i < 3) {
    yield i++;
  }
}

(async function () {
  for await (let num of asyncGenerator()) {
    console.log(num);
  }
})();
// 0
// 1
// 2
```

Для более конкретного примера перебора асинхронного генератора с помощью `for await... of`, рассмотрим перебор данных из API. В этом примере сначала создаётся асинхронный итератор для потока данных, а затем он используется для определения размера ответа от API.

```js
async function* streamAsyncIterator(stream) {
  const reader = stream.getReader();
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        return;
      }
      yield value;
    }
  } finally {
    reader.releaseLock();
  }
}
// Fetches data from url and calculates response size using the async generator.
async function getResponseSize(url) {
  const response = await fetch(url);
  // Will hold the size of the response, in bytes.
  let responseSize = 0;
  // The for-await-of loop. Async iterates over each portion of the response.
  for await (const chunk of streamAsyncIterator(response.body)) {
    // Incrementing the total response length.
    responseSize += chunk.length;
  }

  console.log(`Response Size: ${responseSize} bytes`);
  // expected output: "Response Size: 1071472"
  return responseSize;
}
getResponseSize("https://jsonplaceholder.typicode.com/photos");
```

## Спецификации

{{Specifications}}

## Браузерная совместимость

{{Compat}}

## Смотрите также

- {{jsxref("Statements/for...of")}}
