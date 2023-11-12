---
title: async function
slug: Web/JavaScript/Reference/Statements/async_function
---

{{jsSidebar("Statements")}}

Объявление **`async function`** определяет _асинхронную функцию_, которая возвращает объект {{jsxref("Global_Objects/AsyncFunction","AsyncFunction")}}.

Вы также можете определить async-функции, используя {{jsxref("Operators/async_function", "выражение async function")}}.

## Синтаксис

```
async function name([param[, param[, ... param]]]) {
   statements
}
```

- `name`
  - : Имя функции.

<!---->

- `param`
  - : Имя аргумента, который будет передан в функцию.

<!---->

- `statements`
  - : Выражение, содержащее тело функции.

## Описание

После вызова функция `async` возвращает {{jsxref("Promise")}}. Когда результат был получен, `Promise` завершается, возвращая полученное значение. Когда функция `async` выбрасывает исключение, `Promise` ответит отказом с выброшенным (`throws`) значением.

Функция async может содержать выражение {{jsxref("Operators/await", "await")}}, которое приостанавливает выполнение функции async и ожидает ответа от переданного `Promise`, затем возобновляя выполнение функции `async` и возвращая полученное значение.

Ключевое слово `await` допустимо только в асинхронных функциях. В другом контексте вы получите ошибку `SyntaxError`.

> **Примечание:** Цель функций async/await упростить использование promises синхронно и воспроизвести некоторое действие над группой `Promises`. Точно так же как `Promises` подобны структурированным колбэкам, async/await подобна комбинации генераторов и promises.

## Примеры

### Простой пример

```js
function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function add1(x) {
  const a = await resolveAfter2Seconds(20);
  const b = await resolveAfter2Seconds(30);
  return x + a + b;
}

add1(10).then((v) => {
  console.log(v); // prints 60 after 4 seconds.
});

async function add2(x) {
  const a = resolveAfter2Seconds(20);
  const b = resolveAfter2Seconds(30);
  return x + (await a) + (await b);
}

add2(10).then((v) => {
  console.log(v); // prints 60 after 2 seconds.
});
```

> **Предупреждение:** #### Не путайте await и Promise.allФункция `add1` приостанавливается на 2 секунды для первого `await` и ещё на 2 для второго. Второй таймер создаётся только после срабатывания первого. В функции `add2` создаются оба и оба же переходят в состояние `await`. В результате функция `add2` завершится скорее через две, чем через четыре секунды, поскольку таймеры работают одновременно. Однако запускаются они всё же не параллельно, а друг за другом - такая конструкция не означает автоматического использования `Promise.all`. Если два или более Promise должны разрешаться параллельно, следует использовать `Promise.all`.

### Когда функция `async` выбрасывает исключение

```js
async function throwsValue() {
  throw new Error("oops");
}
throwsValue().then(
  (resolve) => {
    console.log("resolve:" + resolve);
  },
  (reject) => {
    console.log("reject:" + reject);
  },
);
//prints "reject:Error: oops"
//or
throwsValue()
  .then((resolve) => {
    console.log("resolve:" + resolve);
  })
  .catch((reject) => {
    console.log("reject:" + reject);
  });
//prints "reject:Error: oops"
```

### Перепись цепочки promise с использованием функции `async`

API, которое возвращает {{jsxref("Promise")}}, будет возвращать значение в цепочке, тем самым разбивая функцию на много частей. Рассматривая следующий код:

```js
function getProcessedData(url) {
  return downloadData(url) // returns a promise
    .catch((e) => {
      return downloadFallbackData(url); // returns a promise
    })
    .then((v) => {
      return processDataInWorker(v); // returns a promise
    });
}
```

он может быть переписан с одним использованием функции `async`:

```js
async function getProcessedData(url) {
  let v;
  try {
    v = await downloadData(url);
  } catch (e) {
    v = await downloadFallbackData(url);
  }
  return processDataInWorker(v);
}
```

Заметьте, что пример выше не содержит `await` на `return`, потому что возвращаемое значение функции `async` неявно обёрнуто в {{jsxref("Promise.resolve")}}.

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Operators/async_function", "async function expression")}}
- {{jsxref("AsyncFunction")}} object
- {{jsxref("Operators/await", "await")}}
