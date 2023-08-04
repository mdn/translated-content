---
title: Navigation Timing API
slug: Web/API/Performance_API/Navigation_timing
---

{{DefaultAPISidebar("Navigation Timing")}}

**Navigation Timing API** предоставляет данные, которые могут быть использованы для измерения производительности веб-сайта. В отличие от других механизмов на основе JavaScript, которые были использованы с той же целью, этот API может предоставить полную и точную информацию о задержке в получении данных.

Следующий пример демонстрирует как можно измерить время загрузки страницы с точки зрения пользователя:

```
function onLoad() {
  var now = new Date().getTime();
  var page_load_time = now - performance.timing.navigationStart;
  console.log("User-perceived page loading time: " + page_load_time);
}
```

Есть много событий, измеренных в миллисекундах, которые могут быть доступны через {{domxref("PerformanceTiming")}} интерфейс. Список событий в хронологическом порядке:

- navigationStart
- unloadEventStart
- unloadEventEnd
- redirectStart
- redirectEnd
- fetchStart
- domainLookupStart
- domainLookupEnd
- connectStart
- connectEnd
- secureConnectionStart
- requestStart
- responseStart
- responseEnd
- domLoading
- domInteractive
- domContentLoadedEventStart
- domContentLoadedEventEnd
- domComplete
- loadEventStart
- loadEventEnd

Объект `window.performance.navigation` хранит два атрибута, которые могут быть использованы, для определения была ли страница загружена в последствии перенаправления, использования навигации по страницам в браузере или обычной загрузки по ссылке.

window\.performance.navigation.type:

| Флаг                | Значение | Описание                                                                                                                                                                                                       |
| ------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `TYPE_NAVIGATE`     | 0        | Навигация началась после нажатия на ссылку, ввода URL в адресную строку браузера, подтверждения формы или после выполнения действия, отличного от действий описанных в флагах TYPE_RELOAD и TYPE_BACK_FORWARD. |
| `TYPE_RELOAD`       | 1        | Навигация путём перегрузки страницы или выполнения метода location.reload().                                                                                                                                   |
| `TYPE_BACK_FORWARD` | 2        | Навигация по истории переходов по страницам в браузере.                                                                                                                                                        |
| `TYPE_UNDEFINED`    | 255      | Любой другой тип навигации не описанный выше.                                                                                                                                                                  |

`window.performance.navigation.redirectCount` отображает количество переадресаций до последней страницы, если они происходили.

Navigation Timing API может быть использован для сбора данных о производительности на стороне клиента при отправке асинхронных запросов на сервер, а также для получения данных, которые нельзя получить с помощью других средств, таких как время выгрузки предыдущей страницы, время DNS запроса, время полной загрузки страницы.

## Примеры

Вычисление времени полной загрузки страницы:

```
var perfData = window.performance.timing;
var pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
```

Вычисление времени выполнения запроса:

```
var connectTime = perfData.responseEnd - perfData.requestStart;
```

### Ссылки

- <http://www.w3.org/TR/navigation-timing/>

## Совместимость с браузерами

{{Compat}}
