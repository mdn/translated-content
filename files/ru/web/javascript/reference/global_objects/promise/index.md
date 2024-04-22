---
title: Promise
slug: Web/JavaScript/Reference/Global_Objects/Promise
---

{{JSRef}}

## Сводка

Объект **`Promise`** используется для отложенных и асинхронных вычислений.

{{EmbedInteractiveExample("pages/js/promise-constructor.html")}}

## Синтаксис

```js
new Promise(executor);
new Promise(function(resolve, reject) { ... });
```

### Параметры

- executor
  - : Объект функции с двумя аргументами `resolve` и `reject`. Функция `executor` получает оба аргумента и выполняется сразу, ещё до того как конструктор вернёт созданный объект. Первый аргумент (`resolve`) вызывает успешное исполнение промиса, второй (`reject`) отклоняет его.
    Обычно функция `executor` описывает выполнение какой-то асинхронной работы, по завершении которой необходимо вызвать функцию `resolve` или `reject`. Обратите внимание, что возвращаемое значение функции `executor` игнорируется.

## Описание

Интерфейс **`Promise`** (промис) представляет собой обёртку для значения, неизвестного на момент создания промиса. Он позволяет обрабатывать результаты асинхронных операций так, как если бы они были синхронными: вместо конечного результата асинхронного метода возвращается своего рода _обещание_ (дословный перевод слова "промис") получить результат в некоторый момент в будущем.

`Promise` может находиться в трёх состояниях:

- _ожидание (pending)_: начальное состояние, не исполнен и не отклонён.
- _исполнено (fulfilled)_: операция завершена успешно.
- _отклонено (rejected)_: операция завершена с ошибкой.

При создании промис находится в _ожидании (pending)_, а затем может стать _исполненным_ (_fulfilled)_, вернув полученный результат (значение), или _отклонённым_ (_rejected),_ вернув причину отказа. В любом из этих случаев вызывается обработчик, прикреплённый к промису методом `then`. (Если в момент назначения обработчика промис уже исполнен или отклонён, обработчик всё равно будет вызван, т.е. асинхронное исполнение промиса и назначение обработчика не будет происходить в «состоянии гонки», как, например, в случае с событиями в DOM.)

Так как методы `{{JSxRef("Promise.then", "Promise.prototype.then()")}}` и `{{JSxRef("Promise.catch", "Promise.prototype.catch()")}}` сами возвращают промис, их можно вызывать цепочкой, создавая _соединения._

![](promises.png)

> **Примечание:** говорят, что промис находится в состоянии _завершён (settled)_ когда он или исполнен или отклонён, т.е. в любом состоянии, кроме ожидания (это лишь форма речи, не являющаяся настоящим состоянием промиса). Также можно встретить термин _исполнен (resolved)_ — это значит что промис _завершён_ или "заблокирован" в ожидании завершения другого промиса. В статье [состояния и fates](https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md) приводится более подробное описание терминологии.

## Свойства

- `Promise.length`
  - : Значение свойства всегда равно 1 (количество аргументов конструктора).
- {{jsxref("Promise.prototype")}}
  - : Представляет прототип для конструктора `Promise`.

## Методы

- {{jsxref("Promise.all", "Promise.all(iterable)")}}

  - : Ожидает исполнения всех промисов или отклонения любого из них.

    Возвращает промис, который исполнится после исполнения всех промисов в `iterable`. В случае, если любой из промисов будет отклонён, `Promise.all` будет также отклонён.

- {{JSxRef("Promise.allSettled", "Promise.allSettled(iterable)")}}

  - : Ожидает завершения всех полученных промисов (как исполнения так и отклонения).

    Возвращает промис, который исполняется когда все полученные промисы завершены (исполнены или отклонены), содержащий массив результатов исполнения полученных промисов.

- {{jsxref("Promise.race", "Promise.race(iterable)")}}

  - : Ожидает исполнения или отклонения любого из полученных промисов.

    Возвращает промис, который будет исполнен или отклонён с результатом исполнения первого исполненного или отклонённого промиса из `iterable`.

- {{jsxref("Promise.reject", "Promise.reject(reason)")}}
  - : Возвращает промис, отклонённый из-за `reason`.
- {{jsxref("Promise.resolve", "Promise.resolve(value)")}}
  - : Возвращает промис, исполненный с результатом `value`.

## Создание промиса

Объект `Promise` создаётся при помощи ключевого слова `new` и своего конструктора. Конструктор `Promise` принимает в качестве аргумента функцию, называемую "исполнитель" (_executor function_). Эта функция должна принимать две функции-колбэка в качестве параметров. Первый из них (`resolve`) вызывается, когда асинхронная операция завершилась успешно и вернула результат своего исполнения в виде значения. Второй колбэк (`reject`) вызывается, когда операция не удалась, и возвращает значение, указывающее на причину неудачи, чаще всего объект ошибки.

```js
const myFirstPromise = new Promise((resolve, reject) => {
  // выполняется асинхронная операция, которая в итоге вызовет:
  //
  //   resolve(someValue); // успешное завершение
  // или
  //   reject("failure reason"); // неудача
});
```

Чтобы снабдить функцию функциональностью промисов, нужно просто вернуть в ней объект `Promise`:

```js
function myAsyncFunction(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
}
```

## Примеры

### Простой пример

```html
Создать промис!
```

```js
let myFirstPromise = new Promise((resolve, reject) => {
  // Мы вызываем resolve(...), когда асинхронная операция завершилась успешно, и reject(...), когда она не удалась.
  // В этом примере мы используем setTimeout(...), чтобы симулировать асинхронный код.
  // В реальности вы, скорее всего, будете использовать XHR, HTML5 API или что-то подобное.
  setTimeout(function () {
    resolve("Success!"); // Ура! Всё прошло хорошо!
  }, 250);
});

myFirstPromise.then((successMessage) => {
  // successMessage - это что угодно, что мы передали в функцию resolve(...) выше.
  // Это необязательно строка, но если это всего лишь сообщение об успешном завершении, это наверняка будет она.
  console.log("Ура! " + successMessage);
});
```

### Продвинутый пример

```html
Создать промис!
```

```html
<button id="btn">Создать Promise!</button>
<div id="log"></div>
```

Данный небольшой пример показывает механизм работы с `Promise`. Метод `testPromise()` вызывается при каждом нажатии на {{HTMLElement("button")}}. При этом создаётся промис, который успешно выполняется при помощи `window.setTimeout`, со значением `'result'` в случайном интервале от 1 до 3-х секунд.

исполнение промиса протоколируется при помощи продолжения `p1.then`. Это показывает как синхронная часть метода отвязана от асинхронного завершения промиса.

```js
var promiseCount = 0;
function testPromise() {
  var thisPromiseCount = ++promiseCount;

  var log = document.getElementById('log');
  log.insertAdjacentHTML('beforeend', thisPromiseCount +
      ') Запуск (запуск синхронного кода)
');

  // Создаём промис, возвращающее 'result' (по истечении 3-х секунд)
  var p1 = new Promise(
    // Функция разрешения позволяет завершить успешно или
    // отклонить промис
    function(resolve, reject) {
      log.insertAdjacentHTML('beforeend', thisPromiseCount +
          ') Запуск промиса (запуск асинхронного кода)
');
      // Это всего лишь пример асинхронности
      window.setTimeout(
        function() {
          // Промис исполнен!
          resolve(thisPromiseCount)
        }, Math.random() * 2000 + 1000);
    });

  // Указываем, что сделать с исполненным промисом
  p1.then(
    // Записываем в протокол
    function(val) {
      log.insertAdjacentHTML('beforeend', val +
          ') Промис исполнен (асинхронный код завершён)
');
    });

  log.insertAdjacentHTML('beforeend', thisPromiseCount +
      ') Промис создан (синхронный код завершён)
');
}
```

```js
if ("Promise" in window) {
  btn = document.getElementById("btn");
  btn.addEventListener("click", testPromise);
} else {
  log = document.getElementById("log");
  log.innerHTML =
    "Live example not available as your browser doesn't support the Promise interface.";
}
```

```js
if ("Promise" in window) {
  let btn = document.getElementById("btn");
  btn.addEventListener("click", testPromise);
} else {
  log = document.getElementById("log");
  log.innerHTML =
    "Демонстрация невозможна, поскольку ваш браузер не поддерживает интерфейс <code>Promise<code>.";
}
```

Данный пример запускается при нажатии на кнопку. Для этого вам необходим браузер, поддерживающий `Promise`. При последовательных нажатиях на кнопку с коротким интервалом, вы можете увидеть как различные промиса будут исполнены один за другим.

### Загрузка изображения при помощи XHR

Другой простой пример использования `Promise` и [`XMLHttpRequest`](/ru/docs/Web/API/XMLHttpRequest) для загрузки изображения доступен в репозитории MDN[promise-test](https://github.com/mdn/js-examples/tree/master/promises-test) на GitHub. Вы также можете [посмотреть его в действии](https://mdn.github.io/js-examples/promises-test/). Каждый шаг прокомментирован и вы можете подробно исследовать Promise и XHR.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Спецификация Promises/A+](http://promisesaplus.com/)
- [Jake Archibald: JavaScript Promises: There and Back Again](http://www.html5rocks.com/en/tutorials/es6/promises/)
- [Domenic Denicola: Callbacks, Promises, and Coroutines – Asynchronous Programming Pattern in JavaScript](http://de.slideshare.net/domenicdenicola/callbacks-promises-and-coroutines-oh-my-the-evolution-of-asynchronicity-in-javascript)
- [Matt Greer: JavaScript Promises ... In Wicked Detail](http://www.mattgreer.org/articles/promises-in-wicked-detail/)
- [Forbes Lindesay: promisejs.org](https://www.promisejs.org/)
- [Nolan Lawson: We have a problem with promises — Common mistakes with promises](http://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html)
- [Promise polyfill](https://github.com/jakearchibald/es6-promise/)
- [Udacity: JavaScript Promises](https://www.udacity.com/course/javascript-promises--ud898)
