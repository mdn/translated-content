---
title: Worker()
slug: Web/API/Worker/Worker
---

{{APIRef("Web Workers API")}}

Конструктор **`Worker()`** создаёт объект {{domxref ("Worker")}}, который выполняет скрипт по указанному URL-адресу. Этот скрипт должен подчиняться политике одного источника ([same-origin policy](/en/Same_origin_policy_for_JavaScript)).

Если URL имеет недопустимый синтаксис или нарушена политика одного источника, то будет вызвано {{domxref("DOMException")}} типа `SECURITY_ERR`.

> **Примечание:** that there is a disagreement among browser manufacturers about whether a data URI is of the same origin or not. Though Gecko 10.0 and later accept data URIs, that's not the case in all other browsers.

## Синтаксис

```js
var myWorker = new Worker(aURL, options);
```

### Параметры

- _aURL_
  - : {{domxref("USVString")}}, представляющая URL-адрес скрипта который будет выполняться `worker`. Он должен подчиняться политике одного источника.
- _options_ {{optional_inline}}

  - : An object containing option properties that can be set when creating the object instance. Available properties are as follows:

    - `type`: A {{domxref("DOMString")}} specifying the type of worker to create. The value can be `classic` or `module`. If not specified, the default used is `classic`.
    - `credentials`: A {{domxref("DOMString")}} specifying the type of credentials to use for the worker. The value can be* `omit`*, `same-origin`, or _`include`. If not specified, or if type is `classic`, the default used is `omit` (no credentials required)._
    - _`name`: A _{{domxref("DOMString")}} specifying an identifying name for the {{domxref("DedicatedWorkerGlobalScope")}} representing the scope of the worker, which is mainly useful for debugging purposes.

### Исключения

- A `SecurityError` is raised if the document is not allowed to start workers.
- A `NetworkError` is raised if the MIME type of one of the script is `text/csv`, `image/*`, `video/*`, or `audio/*`. It should always be `text/javascript.`
- A `SyntaxError` is raised if a _URL_ cannot be parsed.

## Пример

Следующий фрагмент кода показывает создание объекта {{domxref ("Worker")}} с помощью конструктора `Worker()` и его последующее использование:

```js
var myWorker = new Worker("worker.js");

first.onchange = function () {
  myWorker.postMessage([first.value, second.value]);
  console.log("Message posted to worker");
};
```

Больше примеров можно найти здесь: [Basic dedicated worker example](https://github.com/mdn/simple-web-worker) ([run dedicated worker](http://mdn.github.io/simple-web-worker/)).

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

Интерфейс {{domxref("Worker")}}
