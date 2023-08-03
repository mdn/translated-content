---
title: Worker.onmessage
slug: Web/API/Worker/message_event
---

{{APIRef("Web Workers API")}}

Свойство **`onmessage`** интерфейса {{domxref("Worker")}} представляет собой обработчик {{event("Event_handlers", "event handler")}}, который будет вызван когда произойдёт событие {{event("message")}}. Тип этого события {{domxref("MessageEvent")}} и оно будет вызвано когда worker-объект получит сообщение из выполняемого им кода (т.е из метода {{domxref("DedicatedWorkerGlobalScope.postMessage")}} .

> **Примечание:** Данные события доступны в свойстве data события {{event("message")}}.

## Синтаксис

```js
myWorker.onmessage = function(e) { ... }
```

## Пример

Следующий пример кода показывает создание объекта {{domxref("Worker")}} используя конструктор {{domxref("Worker.Worker", "Worker()")}}. События попадают в объект, когда значение внутри поля ввода формы `first` изменяется. Обработчик onmessage указан для обработки сообщений, которые приходят назад из кода объекта в текущий контекст выполнения.

```js
var myWorker = new Worker("worker.js");

first.onchange = function () {
  myWorker.postMessage([first.value, second.value]);
  console.log("Сообщение, отправленное в worker-объект");
};

myWorker.onmessage = function (e) {
  result.textContent = e.data;
  console.log("Сообщение полученное из worker-объекта");
};
```

В скрипте `worker.js`, обработчик `onmessage` используется для обработки событий, полученных из главного скрипта:

```js
onmessage = function (e) {
  console.log("Сообщение полученное из главного скрипта");
  var workerResult = "Результат: " + e.data[0] * e.data[1];
  console.log("Отправка сообщения назад в главный скрипт");
  postMessage(workerResult);
};
```

Посмотрите как в скрипте `worker.js` вызывается обработчик `onmessage`. В нем присутствует только глобальное свойство `onmessage`, потому что worker-объект фактически является областью видимости ({{domxref("DedicatedWorkerGlobalScope")}}).

Для полного примера смотрите наш [Basic dedicated worker example](https://github.com/mdn/simple-web-worker) ([run dedicated worker](http://mdn.github.io/simple-web-worker/)).

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

Интерфейс {{domxref("Worker")}}, которому принадлежит этот обработчик.
