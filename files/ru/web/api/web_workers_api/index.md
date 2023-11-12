---
title: Web Workers API
slug: Web/API/Web_Workers_API
---

{{DefaultAPISidebar("Web Workers API")}}

**Web Workers** это механизм, который позволяет скрипту выполняться в фоновом потоке, который отделен от основного потока веб-приложения. Преимущество заключается в том, что ресурсоёмкие вычисления могут выполняться в отдельном потоке, позволяя запустить основной (обычно пользовательский) поток без блокировки и замедления.

## Концепции и использование Web воркеров

Worker (работник, воркер) - это объект созданный при помощи конструктора (например, {{domxref("Worker.Worker", "Worker()")}}), который запускает именованный файл JavaScript - этот файл содержит код, который будет запускаться в потоке воркера; воркеры запускаются в другом глобальном контексте отличном от текущего контекста {{domxref("window")}}. Этот контекст представлен объектом {{domxref("DedicatedWorkerGlobalScope")}} в случае специализированных воркеров (стандартные воркеры, которые используются одним скриптом, общие воркеры используют {{domxref("SharedWorkerGlobalScope")}}).

Вы можете запустить любой код, который вам нравится внутри потока воркера, за некоторыми исключениями. Например, вы не можете напрямую манипулировать DOM внутри воркера или использовать некоторые методы и свойства по умолчанию объекта {{domxref("window")}}. Но вы можете использовать большое количество свойств и методов, доступных в `window`, включая [WebSockets](/ru/docs/WebSockets), и механизм хранения данных такой, как [IndexedDB](/ru/docs/Web/API/IndexedDB_API) или [Data Store API,](/ru/docs/Web/API/Data_Store_API) который доступен только в ОС Firefox. За дополнительной информацией смотрите [Функции и классы доступные воркерам.](/ru/docs/Web/API/Worker/Functions_and_classes_available_to_workers)

Данные отправляются между потоком воркера и основным потоком через систему сообщений - обе стороны отправляют свои сообщения с помощью метода `postMessage ()` и отвечают на сообщения через обработчик события `onmessage` (сообщение содержится в атрибуте данных события {{event("Message")}}. Данные копируются, а не используются совместно.

Воркеры могут, в свою очередь, создавать новых воркеров, в этом случае они должны иметь одно и то же происхождение - родительскую страницу. Кроме того, воркеры могут использовать [`XMLHttpRequest`](/ru/docs/Web/API/XMLHttpRequest) для сетевого ввода-вывода, за исключением того, что атрибуты `responseXML` и `channel` на XMLHttpRequest всегда возвращают значение `null`.

В дополнение к специализированным существуют и другие виды воркеров:

- Совместные воркеры - это воркеры, которые могут использоваться несколькими скриптами совместно, работающими в разных окнах, IFrames и т.д. в пределах одного домена, что и воркер. Они немного сложнее, чем специализированные воркеры - скрипты должны связываться через активный порт. Подробнее см. {{domxref("SharedWorker")}}.
- [ServiceWorkers](/ru/docs/Web/API/ServiceWorker_API) по сути действуют как прокси-серверы, которые находятся между веб-приложениями, а также браузером и сетью (если доступны). Помимо прочего они предназначены для создания эффективного автономного взаимодействия, перехвата сетевых запросов и принятия соответствующих мер на основе доступности сети и обновления данных на сервере. Они также позволят доступ к push-уведомлениям и API-интерфейсам фоновой синхронизации.
- Воркеры в Chrome - это воркеры специального типа Firefox, которые вы можете использовать, если вы разрабатываете надстройки и хотите использовать воркеры в расширениях и иметь доступ к js-ctypes в вашем воркере. Смотрите также {{domxref("ChromeWorker")}}.
- [Audio Workers](/ru/docs/Web/API/Web_Audio_API#Audio_Workers)(аудио воркеры) обеспечивают возможность прямой обработки аудиозаписей в рамках веб-контекста воркера.

> **Примечание:** В соответствии с [Web workers Spec](https://html.spec.whatwg.org/multipage/workers.html#runtime-script-errors-2), события ошибок воркеров не должны "всплывать" (смотрите {{bug(1188141)}}. Такое поведение было реализовано в Firefox 42.

## Интерфейсы Web воркера

- {{domxref("AbstractWorker")}}
  - : Абстрактные свойства и методы общие для всех типов воркеров (т.е. {{domxref("Worker")}} или {{domxref("SharedWorker")}}).
- {{domxref("Worker")}}
  - : Представляет поток исполнения воркера, позволяющий передавать сообщения текущему коду воркера.
- {{domxref("SharedWorker")}}
  - : Представляет конкретный вид воркера, к которому можно получить доступ из нескольких контекстов, будь то несколько окон, iframe или даже воркеров.
- {{domxref("WorkerGlobalScope")}}
  - : Represents the generic scope of any worker (doing the same job as {{domxref("Window")}} does for normal web content). Different types of worker have scope objects that inherit from this interface and add more specific features.
- {{domxref("DedicatedWorkerGlobalScope")}}
  - : Represents the scope of a dedicated worker, inheriting from {{domxref("WorkerGlobalScope")}} and adding some dedicated features.
- {{domxref("SharedWorkerGlobalScope")}}
  - : Represents the scope of a shared worker, inheriting from {{domxref("WorkerGlobalScope")}} and adding some dedicated features.
- {{domxref("WorkerNavigator")}}
  - : Представляет идентификатор и состояние пользовательского агента (клиента).

## Примеры

Мы создали пару простых демонстрационных программ чтобы показать основы использования:

- [Базовый пример отдельного воркера](https://github.com/mdn/simple-web-worker) ([запускает отдельного воркера](http://mdn.github.io/simple-web-worker/)).
- [Базовый пример разделяемого воркера](https://github.com/mdn/simple-shared-worker) ([запускает разделяемого воркера](http://mdn.github.io/simple-shared-worker/)).

Больше информации о том, как работают эти демонстрационные программы, вы можете найти в статье [Использование Web воркеров](/ru/docs/Web/API/Web_Workers_API/Using_web_workers).

## Спецификации

| Specification                                                                                 |
| --------------------------------------------------------------------------------------------- |
| [HTML Living Standard # workers](https://html.spec.whatwg.org/multipage/workers.html#workers) |

## Смотрите также

- [Использование Web воркеров](/ru/docs/Web/API/Web_Workers_API/basic_usage)
- [Worker Interface](/ru/docs/Web/API/Worker)
- [Интерфейс SharedWorker](/ru/docs/Web/API/SharedWorker)
- [ServiceWorker API](/ru/docs/Web/API/ServiceWorker_API)
- [Функции и классы доступные воркерам](/ru/docs/Web/API/Worker/Functions_and_classes_available_to_workers)
- [Продвинутые концепции и примеры](/ru/docs/Web/API/Web_Workers_API/Advanced_concepts_and_examples)
- [ChromeWorker](/ru/docs/Web/API/ChromeWorker): для использования воркеров в привелегированном/chrome коде
