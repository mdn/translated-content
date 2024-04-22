---
title: Worker
slug: Web/API/Worker
---

{{APIRef("Web Workers API")}}

Интерфейс **`Worker`** из [Web Workers API](/ru/docs/Web/API/Web_Workers_API) является представителем фоновой задачи, которая легко может быть создана и может передавать сообщения обратно создателю. Создание worker - это вызов конструктора `Worker()` и задание скрипта, выполняемого в потоке worker.

Workers могут, в свою очередь, порождать новые workers, если эти workers расположены в одном каталоге с родительской страницей (Примечание: вложенные workers в настоящее время [не поддерживаются в Blink](https://groups.google.com/a/chromium.org/forum/#!topic/blink-dev/5R3B4RN4GHU)). Кроме того, workers могут использовать [`XMLHttpRequest`](/en/DOM/XMLHttpRequest) для network I/O, при условии, что атрибуты `responseXML` и `channel` `XMLHttpRequest` всегда возвращают `null`.

Не [все интерфейсы и функции могут быть использованы](/En/DOM/Worker/Functions_available_to_workers) в скрипте, ассоциированном с `Worker`.

В Firefox, если вы хотите использовать workers в расширениях и хотели бы иметь доступ к [js-ctypes](/en/js-ctypes), вам нужно использовать объект {{ domxref("ChromeWorker") }}.

## Свойства

_Наследует свойства родителя, {{domxref("EventTarget")}}, и поддерживает свойства из {{domxref("AbstractWorker")}}._

### Обработчики событий

- {{domxref("AbstractWorker.onerror")}}
  - : {{ domxref("EventListener") }} вызываемый каждый раз, когда из воркера приходит {{domxref("ErrorEvent")}} с типом `error`. Это событие унаследовано от {{domxref("AbstractWorker")}}.
- {{domxref("Worker.onmessage")}}
  - : {{ domxref("EventListener") }} вызываемый каждый раз, когда из воркера приходит {{domxref("MessageEvent")}} с типом `message` — то есть когда сообщение было отправлено воркером в родительский документ с помощью {{domxref("DedicatedWorkerGlobalScope.postMessage")}}. Сообщение передаётся в свойстве объекта события {{domxref("MessageEvent.data", "data")}}.

## Конструкторы

- {{domxref("Worker.Worker", "Worker()")}}
  - : Создаёт dedicated web worker, выполняющий скрипт, расположенный по указанному URL. Воркеры также могут быть созданы с использованием [Blobs](/ru/docs/Web/API/Blob).

## Методы

_Наследует методы своего родителя, {{domxref("EventTarget")}}, а также реализует методы {{domxref("AbstractWorker")}}._

- {{domxref("Worker.postMessage()")}}
  - : Отправляет сообщение — которое может являться `любым` JavaScript объектом — во внутреннюю область видимости воркера.
- {{domxref("Worker.terminate()")}}
  - : Немедленно завершает выполнение воркера. Не даёт воркеру возможности завершить выполняемые операции; просто сразу останавливается. Экземпляры ServiceWorker не поддерживают этот метод.

## Пример

Представленный фрагмент кода показывает создание объекта {{domxref("Worker")}} с помощью конструктора {{domxref("Worker.Worker", "Worker()")}}, а также его использование:

```js
var myWorker = new Worker("worker.js");

first.onchange = function () {
  myWorker.postMessage([first.value, second.value]);
  console.log("Message posted to worker");
};
```

For a full example, see our[Basic dedicated worker example](https://github.com/mdn/simple-web-worker) ([run dedicated worker](http://mdn.github.io/simple-web-worker/)).

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## See also

- [Using web workers](/En/Using_web_workers)
- [Functions available to workers](/En/DOM/Worker/Functions_available_to_workers)
- Другие типы воркеров: {{ domxref("SharedWorker") }} и [ServiceWorker](/ru/docs/Web/API/ServiceWorker_API).
- Non-standard, Gecko-specific workers: {{ domxref("ChromeWorker") }}, used by extensions.
