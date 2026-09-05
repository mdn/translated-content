---
title: Promise.withResolvers()
short-title: withResolvers()
slug: Web/JavaScript/Reference/Global_Objects/Promise/withResolvers
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Статический метод **`Promise.withResolvers()`** возвращает объект, содержащий новый объект {{jsxref("Promise")}} и две функции для его успешного выполнения или отклонения, соответствующие двум параметрам, которые передаются в исполнитель конструктора {{jsxref("Promise/Promise", "Promise()")}}.

## Синтаксис

```js-nolint
Promise.withResolvers()
```

### Параметры

Отсутствуют.

### Возвращаемое значение

Обычный объект со следующими свойствами:

- `promise`
  - : Объект {{jsxref("Promise")}}.
- `resolve`
  - : Функция, которая успешно выполняет промис. Её семантика описана в справочнике по конструктору {{jsxref("Promise/Promise", "Promise()")}}.
- `reject`
  - : Функция, которая отклоняет промис. Её семантика описана в справочнике по конструктору {{jsxref("Promise/Promise", "Promise()")}}.

## Описание

`Promise.withResolvers()` полностью эквивалентен следующему коду:

```js
let resolve, reject;
const promise = new Promise((res, rej) => {
  resolve = res;
  reject = rej;
});
```

за исключением того, что он лаконичнее и не требует использования {{jsxref("Statements/let", "let")}}.

Ключевое отличие при использовании `Promise.withResolvers()` в том, что функции успешного выполнения и отклонения теперь находятся в той же области видимости, что и сам промис, а не создаются и однократно используются внутри исполнителя. Это делает возможными некоторые более продвинутые сценарии, например повторное использование этих функций для регулярно повторяющихся событий, особенно при работе с потоками и очередями. Кроме того, так обычно получается меньше вложенности, чем когда большой объём логики обёрнут в исполнитель.

`Promise.withResolvers()` — обобщённый метод, поддерживающий подклассы: его можно вызывать на подклассах `Promise`, и тогда результат будет содержать промис типа подкласса. Для этого конструктор подкласса должен реализовывать ту же сигнатуру, что и конструктор [`Promise()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) — принимать единственную функцию-исполнитель `executor`, которая может быть вызвана с колбэками `resolve` и `reject` в качестве параметров.

## Примеры

### Преобразование потока в асинхронный итерируемый объект

`Promise.withResolvers()` нужен тогда, когда есть промис, который должен быть выполнен или отклонён каким-то обработчиком события, и этот обработчик нельзя обернуть в исполнитель промиса. В следующем примере [поток для чтения](https://nodejs.org/api/stream.html#class-streamreadable) Node.js преобразуется в [асинхронный итерируемый объект](/ru/docs/Web/JavaScript/Reference/Statements/async_function*). Каждый промис здесь представляет одну порцию доступных данных, и каждый раз после чтения текущей порции создаётся новый промис для следующей. Обратите внимание: обработчики событий добавляются только один раз, но при каждом срабатывании фактически вызывают разные версии функций `resolve` и `reject`.

```js
async function* readableToAsyncIterable(stream) {
  let { promise, resolve, reject } = Promise.withResolvers();
  stream.on("error", (error) => reject(error));
  stream.on("end", () => resolve());
  stream.on("readable", () => resolve());

  while (stream.readable) {
    await promise;
    let chunk;
    while ((chunk = stream.read())) {
      yield chunk;
    }
    ({ promise, resolve, reject } = Promise.withResolvers());
  }
}
```

### Вызов withResolvers() на конструкторе, не являющемся промисом

`Promise.withResolvers()` — обобщённый метод. Его можно вызвать на любом конструкторе, реализующем ту же сигнатуру, что и конструктор `Promise()`. Например, можно вызвать его на конструкторе, который передаёт в `executor` функцию `console.log` в качестве `resolve` и `reject`:

```js
class NotPromise {
  constructor(executor) {
    // Функции resolve и reject ведут себя совсем не так, как у нативного
    // промиса, но Promise.withResolvers() просто возвращает их как есть.
    executor(
      (value) => console.log("Resolved", value),
      (reason) => console.log("Rejected", reason),
    );
  }
}

const { promise, resolve, reject } = Promise.withResolvers.call(NotPromise);
resolve("hello");
// Выведет: Resolved hello
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Полифил `Promise.withResolvers` в `core-js`](https://github.com/zloirock/core-js#promisewithresolvers)
- [Полифил `Promise.withResolvers` от es-shims](https://www.npmjs.com/package/promise.withresolvers)
- Руководство [Использование промисов](/ru/docs/Web/JavaScript/Guide/Using_promises)
- {{jsxref("Promise")}}
- [Конструктор `Promise()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)
