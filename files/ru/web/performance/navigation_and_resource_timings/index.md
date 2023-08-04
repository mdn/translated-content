---
title: Время загрузки страницы и ресурсов
slug: Web/Performance/Navigation_and_resource_timings
---

**Тайминги навигации (Navigation timings)** - это показатели, указывающие временные метки, в которые произошли события навигации. **Тайминги ресурсов (Resource timings)** - это детальные показатели по времени загрузки ресурсов.

В этой статье мы рассмотрим как [Performance Timing API](/ru/docs/Web/API/PerformanceTiming), так и Performance Entry API. И хотя первый API считается устаревшим, он все ещё поддерживается всеми браузерами, он прост и о нем полезно знать. В свою очередь, Performance Entry API является более продвинутым инструментом, который позволяет не только получить более сложные данные, но и позволяет разработчику измерять другие показатели, в дополнение к данным о навигации и загрузке ресурсов.

## **Performance Timing** API

[PerformanceTiming API](/ru/docs/Web/API/PerformanceTiming) - это JavaScript API для измерения времени загрузки страницы. Этот API считается устаревшим, но поддерживается во всех браузерах. На текущий момент рекомендуется использовать [performanceNavigationTiming](/ru/docs/Web/API/PerformanceNavigationTiming) API.

[PerformanceTiming API](/ru/docs/Web/API/PerformanceTiming) предоставляет собой read only данные в виде объекта, где значениями полей являются числа, указывающие на количество миллисекунд, которые прошли к моменту срабатывания того или иного события. Как показано на изображении ниже, процесс навигации можно разбить на следующие этапы: [`navigationStart`](/ru/docs/Web/API/PerformanceTiming/navigationStart), [`unloadEventStart`](/ru/docs/Web/API/PerformanceTiming/unloadEventStart), [`unloadEventEnd`](/ru/docs/Web/API/PerformanceTiming/unloadEventEnd), [`redirectStart`](/ru/docs/Web/API/PerformanceTiming/redirectStart), [`redirectEnd`](/ru/docs/Web/API/PerformanceTiming/redirectEnd), [`fetchStart`](/ru/docs/Web/API/PerformanceTiming/fetchStart), [`domainLookupStart`](/ru/docs/Web/API/PerformanceTiming/domainLookupStart), [`domainLookupEnd`](/ru/docs/Web/API/PerformanceTiming/domainLookupEnd), [`connectStart`](/ru/docs/Web/API/PerformanceTiming/connectStart), [`connectEnd`](/ru/docs/Web/API/PerformanceTiming/connectEnd), [`secureConnectionStart`](/ru/docs/Web/API/PerformanceTiming/secureConnectionStart), [`requestStart`](/ru/docs/Web/API/PerformanceTiming/requestStart), [`responseStart`](/ru/docs/Web/API/PerformanceTiming/responseStart), [`responseEnd`](/ru/docs/Web/API/PerformanceTiming/responseEnd), [`domLoading`](/ru/docs/Web/API/PerformanceTiming/domLoading), [`domInteractive`](/ru/docs/Web/API/PerformanceTiming/domInteractive), [`domContentLoadedEventStart`](/ru/docs/Web/API/PerformanceTiming/domContentLoadedEventStart), [`domContentLoadedEventEnd`](/ru/docs/Web/API/PerformanceTiming/domContentLoadedEventEnd), [`domComplete`](/ru/docs/Web/API/PerformanceTiming/domComplete), [`loadEventStart`](/ru/docs/Web/API/PerformanceTiming/loadEventStart), и [`loadEventEnd`](/ru/docs/Web/API/PerformanceTiming/loadEventEnd).

![Navigation Timing event metrics](screen_shot_2019-05-03_at_1.06.27_pm.png)

Благодаря этим метрикам и небольшим вычислениям мы можем определить важные показатели, например [время до первого байта (time to first byte](/ru/docs/Glossary/time_to_first_byte)), скорость загрузки страницы, поиска записи dns и даже узнать, является ли соединение безопасным.

Чтобы получить доступ к этим данным, обратитесь к следующему объекту:

```
let time = window.performance.timing
```

Мы можем использовать эти данные, чтобы понять, как быстро работает приложение:

![entering window.performance.timing in the console lists all the timings in the PerformanceNavigationTiming interface](navigatortiming.png)

Описание показателей:

| Показатель                                                                               | Пояснение                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{domxref("PerformanceTiming.navigationStart","navigationStart")}}                       | Момент, когда предыдущий документ в том же контексте (табе) запускает событие unload. Если предыдущего документа не было, значение этого показателя будет таким же, как и `PerformanceTiming.fetchStart`.                                                                                                                                                                                                                                                                                    |
| {{domxref("PerformanceTiming.secureConnectionStart","secureConnectionStart")}}           | Началась установка (handshake) безопасного соединения. Если безопасного соединения нет, то значение равно `0`.                                                                                                                                                                                                                                                                                                                                                                               |
| {{domxref("PerformanceTiming.redirectStart","redirectStart")}}                           | Начало первого HTTP редиректа. Если никаких редиректов не было, или один из редиректов перевёл документ на другой origin, то значение равно `0`.                                                                                                                                                                                                                                                                                                                                             |
| {{domxref("PerformanceTiming.redirectEnd","redirectEnd")}}                               | Последний HTTP редирект завершён, то есть последний байт HTTP-ответа был получен. Если никаких редиректов не было, или один из редиректов перевёл документ на другой origin, то значение равно `0`.                                                                                                                                                                                                                                                                                          |
| {{domxref("PerformanceTiming.connectStart","connectStart")}}                             | Запрос на открытие соединения отправлен в сеть. Если транспортный уровень модели OSI сообщает об ошибке и установка соединения запускаются заново, то возвращается время старта последней попытки соединения. Если используется постоянное соединение, то значение показателя будет таким же, как и `PerformanceTiming.fetchStart`.                                                                                                                                                          |
| {{domxref("PerformanceTiming.connectEnd","connectEnd")}}                                 | Момент, когда соединение открыто для передачи данных. Если транспортный уровень модели OSI сообщает об ошибке и установка соединения запускаются заново, то возвращается время завершения последней попытки соединения. Если используется постоянное соединение, то значение показателя будет таким же, как и `PerformanceTiming.fetchStart`. Соединение считается открытым, когда завершены все этапы установление безопасного соединения, например TLS Handshake или SOCKS Authentication. |
| {{domxref("PerformanceTiming.domainLookupEnd","domainLookupEnd")}}                       | Поиск домена завершён. Если используется постоянное соединение, или используются данные, сохранённые в локальном кеше, то значение показателя будет таким же, как и `PerformanceTiming.fetchStart`.                                                                                                                                                                                                                                                                                          |
| {{domxref("PerformanceTiming.domainLookupStart","domainLookupStart")}}                   | Начался поиск домена. Если используется постоянное соединение, или используются данные, сохранённые в локальном кеше, то значение показателя будет таким же, как и `PerformanceTiming.fetchStart`.                                                                                                                                                                                                                                                                                           |
| {{domxref("PerformanceTiming.fetchStart","fetchStart")}}                                 | Браузер готов к загрузке документа с помощью HTTP-запроса. Этот этап всегда **срабатывает до проверки** кеша приложения.                                                                                                                                                                                                                                                                                                                                                                     |
| {{domxref("PerformanceTiming.requestStart","requestStart")}}                             | Браузер посылает запрос на получение документа с сервера или из кеша. Если транспортный уровень сообщает об ошибке отправки запроса, а соединение переоткрывается - этот показатель будет перезаписан данными нового запроса.                                                                                                                                                                                                                                                                |
| {{domxref("PerformanceTiming.responseStart","responseStart")}}                           | Браузер получает первый байт ответа от сервера, кеша или локального ресурса.                                                                                                                                                                                                                                                                                                                                                                                                                 |
| {{domxref("PerformanceTiming.responseEnd","responseEnd")}}                               | Браузер получает последний байт ответа от сервера, кеша или локального ресурса. Если соединение закрывается раньше получения последнего байта - значение параметра указывает на момент закрытия соединения.                                                                                                                                                                                                                                                                                  |
| {{domxref("PerformanceTiming.domLoading","domLoading")}}                                 | Парсер HTML начинает работу. В этот момент {{domxref('Document.readyState')}} изменяется на `'loading'` и срабатывает событие {{DOMxRef("Document.readystatechange_event", "readystatechange")}}.                                                                                                                                                                                                                                                                                            |
| {{domxref("PerformanceTiming.unloadEventStart","unloadEventStart")}}                     | Срабатывает событие {{DOMxRef("Window.unload_event", "unload")}}>, что говорит о времени, когда предыдущий документ начал выгружаться. Если предыдущего документа не было или переход к текущей странице подразумевал изменение origin (в т.ч. из-за редиректов), значение параметра равно `0`.                                                                                                                                                                                              |
| {{domxref("PerformanceTiming.unloadEventEnd","unloadEventEnd")}}                         | Обработчик события [`unload`](/ru/docs/Web/Events/unload) завершил свою работу. Если предыдущего документа не было или переход к текущей странице подразумевал изменение origin (в т.ч. из-за редиректов), значение параметра равно `0`.                                                                                                                                                                                                                                                     |
| {{domxref("PerformanceTiming.domInteractive","domInteractive")}}                         | HTML парсер завершил работу над основным документом. В этот момент [`Document.readyState`](/ru/docs/Web/API/Document/readyState) изменяется на `'interactive'` и срабатывает событие [`readystatechange`](/ru/docs/Web/Events/readystatechange)                                                                                                                                                                                                                                              |
| {{domxref("PerformanceTiming.domContentLoadedEventStart","domContentLoadedEventStart")}} | Момент сразу перед тем, как парсер запускает событие [`DOMContentLoaded`](/ru/docs/Web/Events/DOMContentLoaded). Это событие запускается после того, как все скрипты, которые должны исполниться сразу после парсинга, выполнены.                                                                                                                                                                                                                                                            |
| {{domxref("PerformanceTiming.domContentLoadedEventEnd","domContentLoadedEventEnd")}}     | Момент сразу после исполнения всех скриптов, которые должны были исполниться.                                                                                                                                                                                                                                                                                                                                                                                                                |
| {{domxref("PerformanceTiming.domComplete","domComplete")}}                               | Парсер HTML завершил работу над основным документом. В этот момент [`Document.readyState`](/ru/docs/Web/API/Document/readyState) изменяется на `'complete'` и срабатывает событие [`readystatechange`](/ru/docs/Web/Events/readystatechange).                                                                                                                                                                                                                                                |
| {{domxref("PerformanceTiming.loadEventStart","loadEventStart")}}                         | Событие [`load`](/ru/docs/Web/Events/load) было отправлено текущему документу. Если это событие на момент измерения не было отправлено документу, значение параметра равно `0.`                                                                                                                                                                                                                                                                                                              |
| {{domxref("PerformanceTiming.loadEventEnd","loadEventEnd")}}                             | Обработка события [`load`](/ru/docs/Web/Events/load) завершена, то есть загрузка завершена. Если это событие ещё не произошло или не было послано документу, значение параметра равно `0`.                                                                                                                                                                                                                                                                                                   |

### Вычисление таймингов

Мы можем использовать все эти значения, чтобы вычислить, сколько времени потребовалось на тот или иной этап:

```js
let
    dns  = time.domainLookupEnd - time.domainLookupStart,
    tcp  = time.connectEnd - time.connectStart,
    ssl != time.secureConnectionStart,
```

### Время до первого байта

[Время до первого байта (Time to First Byte)](/ru/docs/Glossary/time_to_first_byte) - это время между `navigationStart` и `responseStart` (момент, когда получен первый байт от сервера / кеша). Доступно в `performanceTiming` API

```js
let ttfb = time.responseStart - time.navigationStart;
```

### Время загрузки страницы

[Время загрузки страницы (Page load time)](/ru/docs/Glossary/Page_load_time) - это время между `navigationStart` и моментом, когда событие `load` отправлено текущему документу. Доступно только в `performanceTiming` API

```js
let pageloadtime = time.loadEventStart - time.navigationStart;
```

### Время поиска записи DNS

Время поиска записи DNS (DNS lookup) - это время между [`domainLookupStart`](/ru/docs/Web/API/PerformanceResourceTiming/domainLookupStart) и [`domainLookupEnd`](/ru/docs/Web/API/PerformanceResourceTiming/domainLookupEnd). Оба эти параметра доступны как в `performanceTiming`, так и в `performanceNavigationTiming`.

```js
let dns = time.domainLookupEnd - time.domainLookupStart;
```

### TCP

Время установки соединения [TCP](/ru/docs/Glossary/TCP) - это время между началом и окончанием попытки соединения:

```js
tcp = time.connectEnd - time.connectStart;
```

### Установка безопасного подключения (SSL negotiation)

[`secureConnectionStart`](/ru/docs/Web/API/PerformanceResourceTiming/secureConnectionStart) будет равен `undefined`, если SSL не доступен, `0` если [https](/ru/docs/Glossary/https) не используется или если временная метка доступна и используется. Другими словами, если безопасное соединение было использовано, то значение `secureConnectionStart` будет правдиво ([truthy](/ru/docs/Glossary/Truthy)), а время между `secureConnectionStart` и `requestStart` будет больше 0.

```js
ssl = time.requestStart - time.secureConnectionStart;
```

## Performance Entry API

Основные показатели производительности, рассмотренные выше, считаются устаревшими, но полностью поддерживаются современными браузерами. Взамен предлагается использовать {{domxref('PerformanceEntry', 'Performance Entry API')}}, который предоставляет инструмент для пометок и измерений времени одновременно с событиями navigation и загрузкой resource. Вы также можете создавать свои маркеры:

```js
performance.getEntriesByType("navigation").forEach((navigation) => {
  console.dir(navigation);
});

performance.getEntriesByType("resource").forEach((resource) => {
  console.dir(resource);
});

performance.getEntriesByType("mark").forEach((mark) => {
  console.dir(mark);
});

performance.getEntriesByType("measure").forEach((measure) => {
  console.dir(measure);
});

performance.getEntriesByType("paint").forEach((paint) => {
  console.dir(paint);
});

performance.getEntriesByType("frame").forEach((frame) => {
  console.dir(frame);
});
```

В некоторых браузерах вы можете использовать `performance.getEntriesByType('paint')`, чтобы запросить измерения для `first-paint` и `first-contentful-paint`. Мы используем `performance.getEntriesByType('navigation')` и `performance.getEntriesByType('resource')` для запроса данных по навигации и загрузки ресурсов, соответственно.

## Navigation

Когда пользователь запрашивает веб-приложение, [браузер должен получить некоторые мета-данные](/ru/docs/Learn/Performance/Populating_the_page:_how_browsers_work), чтобы начать загрузку. Для этого пользовательский агент проходит серию шагов, такие как поиск записи DNS ({{glossary('DNS')}} lookup), TCP рукопожатие {{glossary('TCP handshake')}}, и установку безопасного соединения (SSL negotiation). Как только браузер установил соединение, происходит первый полезный запрос данных на сервера. Как только начинают поступать данные от сервера, браузер начинает парсить полученные данные, строит DOM, CSSOM, создаёт деревья рендера (render trees), чтобы в конце концов отрендерить страницу. В тот момент, когда браузер перестаёт парсить входящие данные, документ переходит в интерактивную стадию. Если в документе существуют отложенные к загрузке ресурсы (deferred scripts), которые должны быть обработаны, браузер парсит их. После этого запускается событие [DOMContentLoaded](/ru/docs/), после которого готовность страницы завершена. Теперь документ может обрабатывать пост-загрузочные задачи. После этого документ маркируется, как полностью загруженный.

```
let navigationTimings = performance.getEntriesByType('navigation');
```

Метод `performance.getEntriesByType('navigation')` возвращает массив [PerformanceEntry](/ru/docs/Web/API/PerformanceEntry), в котором содержатся объекты Navigation Timing.

![The results of when performance.getEntriesByType('navigation'); is entered into the console for this document](perfgentrybytypenavigation.png)

Из этих данных можно многое извлечь. На изображении выше вы видите, что помимо самих таймингов, данные содержат имя документа и некоторую другую полезную информацию.

```
let timing = performance.getEntriesByType('navigation')[0];
```

### Протокол

Мы можем проверить протокол, который используется дл получения ресурсов:

```
let protocol = timing.nextHopProtocol
```

В текущем случае в ответ будет `h2` для `http/2`.

### Сжатие

Чтобы узнать, как эффективно сжимаются данные при передаче, мы можем разделить `transferSize` на `decodedBodySize`, а затем вычесть результат из 100%. Для текущей страницы сжатие составляет до 74%.

```
let compressionSavings = 1 - (timing.transferSize / timing.decodedBodySize)
```

Мы могли бы использовать

```
let compressionSavings = 1 - (timing.encodedBodySize / timing.decodedBodySize)
```

но `transfersize` так же включает в себя байты заголовков.

Для сравнение, мы можем посмотреть на вкладку Network, где увидим, что было передано 22.04KB для файла, который в разархивированном виде занимает 87.24KB.

![View of the bytes transferred and the size via the network tab](bytesdownloaded.png)

Если мы проверим вычисления, то результат получится схожим: `1 - (22.04 / 87.24) = 0.747`. Тайминги навигации позволяют нам получить такие данные программно.

Обратите внимание, что это данные для одного единственно документа, а не для всех ресурсов вместе взятых. В то же время, длительность загрузки, события-обработчики и тайминги построения DOM / CSSOM влияют на продолжительность загрузки всего приложения, не только одного конкретного ресурса. Клиентские приложения, выполняющиеся в браузере, могут выглядеть быстрее, если данные объёмом 300КБ вы передаёте сжатыми до 100КБ, но это все не значит, что JavaScript, CSS или другие медиа-ресурсы не раздувают приложение и не делают его медленнее. Проверка уровня сжатия - это очень важно, но не менее важно проверять длительность парсинга ресурсов и время между тем, как завершён DOMContentLoaded и DOM готов к работе. Может случиться так, что время парсинга скриптов и обработка скриптами результатов в основном потоке (main thread) приведёт к зависанию интерфейса.

### Время запроса

API не предоставляет все измерения, которые разработчик хочет получить. Например, как долго продлилось выполнение запроса? Отдельного поля в объекте данных нет. Однако, мы можем использовать измерения, чтобы вычислить то, что нам нужно.

Чтобы определить время ответа, вычтите время старта запроса из времени старта получения ответа. Запрос стартует ровно в тот момент, когда клиент запрашивает ресурс с сервера (или из кеша). Ответ начинается ровно в тот момент, когда клиент получает первый байт.

```js
request = timing.responseStart - timing.requestStart;
```

### Длительность события загрузки

```js
load = timing.loadEventEnd - timing.loadEventStart;
```

### DOMContentLoaded event

Длительность события DOMContentLoaded определяется разностью моментов, когда клиент запускает событие DOMContentLoaded и когда это событие завершено. Старайтесь держать эту величину меньше 50ms - тогда ваш интерфейс будет отзывчивым.

```js
DOMContentLoaded =
  timing.domContentLoadedEventEnd - timing.domContentLoadedEventStart;
```

### Длительность (Duration)

В объекте данных есть поле Длительность (`Duration`). Длительность - это разница между [PerformanceNavigationTiming.loadEventEnd](/ru/docs/Web/API/PerformanceNavigationTiming/loadEventEnd) и [PerformanceEntry.startTime](/ru/docs/Web/API/PerformanceEntry/startTime) properties.

Интерфейс PerformanceNavigationTiming, кроме того, даёт информацию о том, какой тип навигации вы измеряете, возвращая `navigate`, `reload`, `back_forward` или `prerender`.

## Resource

В то время, как тайминги навигации измеряют производительность загрузки и парсинга основного файла HTML, этот файл служит лишь точкой входа для загрузки других ресурсов. Поэтому нам так же важно знать, как быстро загружаются дополнительные ресурсы. Для измерения этих данных нужно использовать Resource Timing. Большая часть измерений в этом объекте похожи: здесь и поиск домена в DNS, и TCP установка соединения и т.д.

![Graphic of Resource Timing timestamps](resourcetiming-timestamps.jpg)

Для того, чтобы получить эти данные, выполните команду:

```
performance.getEntriesByType("resource")
```

## Смотрите также

- {{domxref("PerformanceNavigationTiming")}}
- {{domxref("PerformanceResourceTiming")}},
- {{domxref("PerformanceMark")}}
- {{domxref("PerformanceMeasure")}}
- {{domxref("PerformancePaintTiming")}}
