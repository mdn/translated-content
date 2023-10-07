---
title: Streams API
slug: Web/API/Streams_API
---

{{SeeCompatTable}}{{APIRef("Streams")}}

Streams API (API обработки потоков) позволяет программно получить доступ с помощью JavaScript к полученным по сети потокам данных и обработать их по желанию разработчика.

## Концепция и использование

Потоковая передача данных предполагает разбивку ресурса, который вы хотите получить через сеть, на мелкие кусочки и затем их обработку часть за частью. Это то, что браузеры делают в любом случае получения ассетов, чтобы показать их на страницах — видео буфер и другие ресурсы доступные для воспроизведения, и иногда это заметно на изображениях, загружающихся частями.

Но методы работы с этим и данные никогда прежде не были доступны для JavaScript. Раньше, если мы хотели обработать часть ресурса, нам всё равно пришлось бы загрузить весь файл (будь то видео, текстовый файл и т.п.), мы были бы обязаны скачать файл целиком, дождаться пока он будет приведён к необходимому формату и только потом работать с файлом после его полной загрузки.

С помощью потоков доступных в JavaScript меняется все — вы можете начать обрабатывать данные бит за битом как только данные появляются на стороне клиента, без необходимости генерировать буфер, строку или какой либо объект из потока.

![](concept.png)

Но это не все преимущества — вы можете отловить процессы старта и завершения потока, связывать потоки в цепочки, обрабатывать ошибки или прерывать их если это необходимо, реагировать на скорость с которой поток считывается.

Основное использование потоков крутиться вокруг создания ответов доступными в виде потоков. Например, тело ответа {{domxref("Body")}} возвращённого успешным [fetch запросом](/ru/docs/Web/API/WindowOrWorkerGlobalScope/fetch) может быть представлено как {{domxref("ReadableStream")}}, и вы можете прочитать его используя ридер полученный методом {{domxref("ReadableStream.getReader()")}}, отменить его с помощью {{domxref("ReadableStream.cancel()")}}, и тп.

Более сложные примеры задействуют создание ваших собственных потоков с помощью конструктора {{domxref("ReadableStream.ReadableStream", "ReadableStream()")}}, например чтобы обработать данные внутри [service worker](/ru/docs/Web/API/Service_Worker_API).

Вы также можете записывать данные в потоки используя {{domxref("WritableStream")}}.

> **Примечание:** вы можете найти больше информации о теории и практике использования потоков в следующих статьях — [Концепты API потоков](/ru/docs/Web/API/Streams_API/Concepts) , [Использование потоков на чтение](/ru/docs/Web/API/Streams_API/Using_readable_streams), и [Использование потоков на запись](/ru/docs/Web/API/Streams_API/Using_writable_streams).

## Интерфейсы

### Потоки чтения данных

- {{domxref("ReadableStream")}}
  - : Представляет собой считываемый поток данных. Он может быть использован чтобы обработать потоки ответов от [Fetch API](/ru/docs/Web/API/Fetch_API), или созданный разработчиком поток (например произвольный {{domxref("ReadableStream.ReadableStream", "ReadableStream()")}}).
- {{domxref("ReadableStreamDefaultReader")}}
  - : Представляет собой считывателя, который может быть использован чтобы считать данные поставляемые из сети (например fetch запрос).
- {{domxref("ReadableStreamDefaultController")}}
  - : Представляет собой контроллер позволяющий контролировать состояние {{domxref("ReadableStream")}} и очереди внутри него. Является контроллером по умолчанию для не байтовых потоков.

### Writable streams

- {{domxref("WritableStream")}}
  - : Предоставляет стандартную абстракцию, известную как раковина, для записи потоков по месту назначения. Этот объект идёт вместе со встроенными методами контроля обратного потока и созданием очередей.
- {{domxref("WritableStreamDefaultWriter")}}
  - : Представляет запись потока по умолчанию, которая может использоваться для записи фрагментов данных в записываемый поток.
- {{domxref("WritableStreamDefaultController")}}
  - : Представляет собой контроллер состояния {{domxref("WritableStream")}}. При создании `WritableStream`, создаётся также соответствующий экземпляр `WritableStreamDefaultController`.

### Дополнительные API и операции по работе с потоками

- {{domxref("ByteLengthQueuingStrategy")}}
  - : Предоставляет встроенную стратегию длины байт-очереди, которая может быть использована при построении потоков.
- {{domxref("CountQueuingStrategy")}}
  - : Предоставляет встроенную стратегию организации очередей подсчёта чанков, которая может использоваться при построении потоков.

### Дополнения к другим API

- {{domxref("Request")}}
  - : При создании нового объекта типа `Request`, вы можете добавить {{domxref("ReadableStream")}} в свойство `body` его словаря `RequestInit`. Этот объект типа `Request` может быть отправлен в {{domxref("WindowOrWorkerGlobalScope.fetch()")}}, чтобы начать загрузку потока.
- {{domxref("Body")}}
  - : Ответ {{domxref("Body")}} возвращённый успешному [fetch запросу](/ru/docs/Web/API/WindowOrWorkerGlobalScope/fetch) вывешивается по умолчанию как {{domxref("ReadableStream")}}, и может иметь получателя прикреплённого к нему и тп.

### Интерфейсы в дополнение к ByteStream

> **Предупреждение:** **Важно**: данные интерфейсы пока не реализованы, и были подняты вопросы о том, находятся ли детали спецификации в достаточно законченном состоянии для их реализации. Со временем это может измениться

- {{domxref("ReadableStreamBYOBReader")}}
  - : Represents a BYOB ("bring your own buffer") reader that can be used to read stream data supplied by the developer (e.g. a custom {{domxref("ReadableStream.ReadableStream", "ReadableStream()")}} constructor).
- {{domxref("ReadableByteStreamController")}}
  - : Контроллер позволяющий обрабатывать состояние {{domxref("ReadableStream")}} и внутреннюю очередь. Байтовые контроллеры для байтовых потоков.
- {{domxref("ReadableStreamBYOBRequest")}}
  - : Represents a pull into request in a {{domxref("ReadableByteStreamController")}}.

## Примеры

Мы создали папку с примерами, которые идут вместе с документацией к API потоков — смотрите [mdn/dom-examples/streams](https://github.com/mdn/dom-examples/tree/master/streams). Можно найти такие примеры как:

- [Simple stream pump](http://mdn.github.io/dom-examples/streams/simple-pump/): Этот пример показывает как использовать поток чтения данных и передавать его данные в другой поток.
- [Сделать черно-белый PNG](http://mdn.github.io/dom-examples/streams/grayscale-png/): Пример показывает конвертацию потока данных PNG изображения в черно-белый формат.
- [Простой произвольный поток](http://mdn.github.io/dom-examples/streams/simple-random-stream/): В этом примере показано, как использовать пользовательский поток для создания случайных строк, помещать их в очередь как блоки, а затем считывать их обратно.
- [Simple tee example](http://mdn.github.io/dom-examples/streams/simple-tee-example/): Этот пример расширяет первый пример, показывая как поток может быть связан, и оба результирующих потока будут прочитаны независимо.
- [Simple writer](http://mdn.github.io/dom-examples/streams/simple-writer/): This example shows how to to write to a writable stream, then decode the stream and write the contents to the UI.
- [Unpack chunks of a PNG](http://mdn.github.io/dom-examples/streams/png-transform-stream/): This example shows how [`pipeThrough()`](/ru/docs/Web/API/ReadableStream/pipeThrough) can be used to transform a ReadableStream into a stream of other data types by transforming a data of a PNG file into a stream of PNG chunks.

Примеры от других разработчиков:

- [Progress Indicators with Streams, Service Workers, & Fetch](https://fetch-progress.anthum.com/).

## Спецификации

| Specification                                               |
| ----------------------------------------------------------- |
| [Streams Living Standard](https://streams.spec.whatwg.org/) |

## Совместимость с браузерами

### Поток записи данных

{{Compat("api.ReadableStream")}}

## Смотрите также

- [Streams API концепт](/ru/docs/Web/API/Streams_API/Concepts)
- [Использование потоков чтения](/ru/docs/Web/API/Streams_API/Using_readable_streams)
- [Использование потоков записи](/ru/docs/Web/API/Streams_API/Using_writable_streams)
