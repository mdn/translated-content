---
title: Worker.terminate()
slug: Web/API/Worker/terminate
---

{{APIRef("Web Workers API")}}

Метод **`terminate()`** интерфейса {{domxref("Worker")}} немедленно завершает работу `worker`. Работнику не даётся возможность завершить свою работу, он останавливается сразу.

## Синтаксис

```js
myWorker.terminate();
```

### Параметры

Нет.

### Возвращаемое значение

Void.

## Пример

В следующем фрагменте кода показано создание потока {{domxref("Worker")}} с помощью конструктора {{domxref("Worker.Worker", "Worker()")}}, который немедленно завершается.

```js
var myWorker = new Worker("worker.js");

myWorker.terminate();
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

Интерфейс {{domxref("Worker")}}.
