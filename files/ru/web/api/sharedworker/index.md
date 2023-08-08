---
title: SharedWorker
slug: Web/API/SharedWorker
---

{{APIRef("Web Workers API")}}

`Интерфейс SharedWorker (разделяемый воркер)` является особым видом воркеров к которому можно получить доступ из нескольких контекстов браузера, например, из нескольких окон, iframe, или других воркеров. Этот интерфейс реализован иначе, чем dedicated воркеры и имеют иной глобальный контекст, {{domxref("SharedWorkerGlobalScope")}}.

> **Примечание:** Если SharedWorker может быть доступен из нескольких контекстов браузера, все они должны разделять одинаковое расположение (идентичные протокол, хост и порт).

> **Примечание:** В Firefox, разделяемые воркеры не могут взаимодействовать между private (например, просматриваемыми в приватном режиме) и non-private документами (см. {{bug(1177621)}}.)

## Свойства

_Наследует свойства родителя, {{domxref("EventTarget")}}, и реализует свойства {{domxref("AbstractWorker")}}._

- {{domxref("AbstractWorker.onerror")}}
  - : {{domxref("EventListener")}} который вызывается всегда, когда {{domxref("ErrorEvent")}} типа `error` всплывает через воркер.
- {{domxref("SharedWorker.port")}} {{readonlyInline}}
  - : Возвращает объект {{domxref("MessagePort")}}, используемый для коммуникации и контроля разделяемого воркера.

## Constructors

- {{domxref("SharedWorker.SharedWorker", "SharedWorker()")}}
  - : Создаёт разделяемый веб воркер, который выполняет скрипт по указанному URL.

## Методы

_Наследует методы родительского класса, {{domxref("EventTarget")}}, и реализует свойства {{domxref("AbstractWorker")}}._

## Пример

В нашем [Базовом примере разделяемого воркера](https://github.com/mdn/simple-shared-worker) ([запустить](http://mdn.github.io/simple-shared-worker/)), имеются две HTML страницы, каждая из которых использует JavaScript для простых вычислений. Разные скрипты используют один и тот же воркер, чтобы выполнить умножение двух чисел - они оба имеют доступ к нему, даже если их страницы запущены в разных окнах.

Следующий пример кода демонстрирует создание объекта `SharedWorker` с использованием конструктора {{domxref("SharedWorker.SharedWorker", "SharedWorker()")}}. Оба скрипта содержат:

```js
var myWorker = new SharedWorker("worker.js");
```

далее скрипты получают доступ к воркеру через объект {{domxref("MessagePort")}}, находящийся в свойстве {{domxref("SharedWorker.port")}}. Если устанавливается обработчик события onmessage, port самостоятельно начинает работу, вызывая собственный метод `start()`, если же принимать события с помощью обработчика события "message" через addEventListener, необходимо вызвать метод `start()` самостоятельно:

```js
myWorker.port.start();
```

После того, как порт запущен, оба скрипта отправляют сообщения воркеру и принимают их от него, используя `port.postMessage()` и `port.onmessage`, соответственно:

```js
first.onchange = function () {
  myWorker.port.postMessage([first.value, second.value]);
  console.log("Message posted to worker");
};

second.onchange = function () {
  myWorker.port.postMessage([first.value, second.value]);
  console.log("Message posted to worker");
};

myWorker.port.onmessage = function (e) {
  result1.textContent = e.data;
  console.log("Message received from worker");
};
```

Внутри воркера используется хэндлер {{domxref("SharedWorkerGlobalScope.onconnect")}} для соединения к тому же порту, как обсуждалось ранее. Порты, связанные с данным воркером доступны в свойстве ports события {{event("connect")}}. Далее вызывается метод {{domxref("MessagePort")}} `start()` для запуска порта, и устанавливается хэндлер `onmessage` для обработки сообщений, присылаемых от обоих потоков.

```js
onconnect = function (e) {
  var port = e.ports[0];
  // or port = e.source

  port.addEventListener("message", function (e) {
    var workerResult = "Result: " + e.data[0] * e.data[1];
    port.postMessage(workerResult);
  });

  port.start(); // необходимо при добавлении обработчиков с помощью addEventListener. При использовании сеттера port.onmessage, данный метод вызывается автоматически, неявно
};
```

### Пример с несколькими страницами

test.js

```js
let connected = false;
self.addEventListener(
  "connect",
  (e) => {
    e.source.addEventListener(
      "message",
      (ev) => {
        if (ev.data === "start") {
          if (connected === false) {
            e.source.postMessage("worker init");
            connected = true;
          } else {
            e.source.postMessage("worker already inited");
          }
        }
      },
      false,
    );
    e.source.start();
  },
  false,
);
```

На странице 1 получаем сообщение 'worker init' в консоли.

index1.html

```html
<script>
  let worker = new SharedWorker("test.js");
  worker.port.addEventListener(
    "message",
    (e) => {
      console.log(e.data);
    },
    false,
  );
  worker.port.start();
  worker.port.postMessage("start");
</script>
```

На странице 2 в консоль выводится 'worker already inited', так как страница 1 уже запустила наш воркер;

index2.html

```html
<script>
  let worker = new SharedWorker("test.js");
  worker.port.addEventListener(
    "message",
    (e) => {
      console.log(e.data);
    },
    false,
  );
  worker.port.start();
  worker.port.postMessage("start");
</script>
```

## Спецификации

{{Specifications}}

## Совместимость браузеров

{{Compat}}

## See also

- {{domxref("Worker")}}
- [Использование веб воркеров](/ru/docs/Web/Guide/Performance/Using_web_workers)
