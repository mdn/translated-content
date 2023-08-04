---
title: Cache
slug: Web/API/Cache
---

{{APIRef("Service Workers API")}}

Интерфейс **`Cache`** представляет собой механизм хранения пары объектов [`Request`](http://fetch.spec.whatwg.org/#request) / `Response,` которые кешируются, например, как часть жизненного цикла {{domxref("ServiceWorker")}}. Заметьте, что интерфейс Cache доступен как в области видимости окна, так и в области видимости воркеров. Не обязательно использовать его вместе с сервис воркерами, даже если интерфейс определён в их спецификации.

Для вызывающего скрипта может быть множество именованных объектов `Cache`. Разработчик сам определяет реализацию того, как скрипт (например, в {{domxref("ServiceWorker")}}) управляет обновлением `Cache`. Записи в `Cache` не будут обновлены, пока не будет выполнен явный запрос; их время жизни не истечёт до момента удаления. Используйте {{domxref("CacheStorage.open", "CacheStorage.open(cacheName)")}}, чтобы открыть определённый именованный объект `Cache` и затем вызывайте любые методы `Cache` для управления его состоянием.

Вы также ответственны за периодическую очистку записей кеша. Каждый браузер имеет жёсткие ограничения на объем хранилища кеша, доступный для исходного кода. Браузер делает все, чтобы как можно лучше использовать дисковое пространство, но он может удалить хранилище кеша для скрипта. В основном, браузер либо удаляет все данные из кеша для скрипта, либо не удаляет ничего. Устанавливайте версии кеша в имени и используйте кеш только той версии, которая безопасна для использования. Смотрите [Удаление старого кеша](/ru/docs/Web/API/ServiceWorker_API/Using_Service_Workers#Deleting_old_caches).

> **Примечание:** {{domxref("Cache.put")}}, {{domxref("Cache.add")}} и {{domxref("Cache.addAll")}} допускают сохранение в кеш только `GET` запросов.

> **Примечание:** Изначально, реализация Cache (как в Blink, так и в Gecko) возвращала успешное завершение для промисов {{domxref("Cache.add")}}, {{domxref("Cache.addAll")}} и {{domxref("Cache.put")}}, когда тело ответа было полностью помещено в хранилище. Более поздние версии используют новейший язык, утверждая, что браузер может разрешить промис как только запись будет записана в базу данных, даже если тело ответа все ещё загружается в потоке.

> **Примечание:** Начиная с Chrome 46, Cache API будут хранить запросы только от безопасных источников, то есть, доступных через HTTPS.

> **Примечание:** Алгоритм сопоставления ключей зависит от заголовка [VARY](https://www.fastly.com/blog/best-practices-for-using-the-vary-header) хранимого значения. Таким образом, сопоставление нового ключа требует одновременно как проверки самого ключа, так и значений для записей в Cache.

> **Примечание:** Кеширующие API не приветствуют заголовки кеширования HTTP.

## Методы

- {{domxref("Cache.match", "Cache.match(request, options)")}}
  - : Возвращает {{jsxref("Promise")}}, который успешно завершается с нахождением первого совпадения для данного запроса в объекте {{domxref("Cache")}}.
- {{domxref("Cache.matchAll", "Cache.matchAll(request, options)")}}
  - : Возвращает {{jsxref("Promise")}}, который успешно завершается и возвращает массив всех найденных совпадений для данного запроса в объекте {{domxref("Cache")}}.
- {{domxref("Cache.add", "Cache.add(request)")}}
  - : Принимает в качестве параметра URL, получает данные по нему и добавляет полученный объект ответа в заданный кеш. Функциональный эквивалент вызову fetch() с последующим вызовом Cache.put() для добавления результата в кеш.
- {{domxref("Cache.addAll", "Cache.addAll(requests)")}}
  - : Принимает массив URL в качестве параметра, получает данные по ним, добавляет полученные объекты ответов в заданный кеш.
- {{domxref("Cache.put", "Cache.put(request, response)")}}
  - : Принимает запрос и ответ на него и добавляет их в заданный кеш.
- {{domxref("Cache.delete", "Cache.delete(request, options)")}}
  - : Находит запись {{domxref("Cache")}}, чей ключ является запросом, и, в случае нахождения, удаляет запись {{domxref("Cache")}} и возвращает {{jsxref("Promise")}}, успешно завершающийся со значением `true`. Если же запись {{domxref("Cache")}} не найдена, возвращается `false`.
- {{domxref("Cache.keys", "Cache.keys(request, options)")}}
  - : Возвращает {{jsxref("Promise")}}, который отдаёт массив ключей {{domxref("Cache")}}.

## Примеры

Этот пример кода из [примера выборочного кеширования сервис воркера](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/selective-caching/service-worker.js). (смотрите [работа выборочного кеширования](https://googlechrome.github.io/samples/service-worker/selective-caching/)). В коде используется {{domxref("CacheStorage.open", "CacheStorage.open(cacheName)")}} для открытия любых объектов {{domxref("Cache")}} с заголовком Content-Type, начинающимся с `font/`.

Далее используется {{domxref("Cache.match", "Cache.match(request, options)")}} для определения того, находится ли уже совпадающий шрифт в кеше, и, если так, то возвращает его. Если же совпадающего шрифта нет, код получает этот шрифт по сети и использует {{domxref("Cache.put","Cache.put(request, response)")}} для кеширования полученного ресурса.

Код обрабатывает исключения, возможные при операции {{domxref("Globalfetch.fetch","fetch()")}}. Заметьте, что HTTP-ответ с ошибкой (например, 404) не будет вызывать исключения. Будет возвращён нормальный объект ответа с установленным соответствующим кодом ошибки.

Также, пример описывает лучшие практики по заданию версий кеша при работе с сервис воркерами. И хотя в примере лишь один кеш, тот же подход может быть использован для множества кешей. Он сравнивает сокращённый идентификатор кеша с определённым, версионным именем кеша. Код также удаляет весь кеш, для которого не определено имя `CURRENT_CACHES`.

В примере кода "кеш" это атрибут WorkerGlobalScope сервис воркеров. Он содержит объект CacheStorage, через который можно получить доступ к [CacheStorage](/ru/docs/Web/API/CacheStorage) API.

> **Примечание:** В Chrome, откройте chrome://inspect/#service-workers и кликните по ссылке "inspect" под зарегистрированным сервис воркером чтобы увидеть записи журнала по различным действиям выполняемым скриптом [service-worker.js](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/selective-caching/service-worker.js).

```js
var CACHE_VERSION = 1;

// Сокращённый идентификатор привязанный к определённой версии кеша.
var CURRENT_CACHES = {
  font: "font-cache-v" + CACHE_VERSION,
};

self.addEventListener("activate", function (event) {
  var expectedCacheNames = Object.keys(CURRENT_CACHES).map(function (key) {
    return CURRENT_CACHES[key];
  });

  // Активный воркер не будет рассматриваться как активированный, пока promise не разрешится успешно.
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (expectedCacheNames.indexOf(cacheName) == -1) {
            console.log("Deleting out of date cache:", cacheName);

            return caches.delete(cacheName);
          }
        }),
      );
    }),
  );
});

self.addEventListener("fetch", function (event) {
  console.log("Handling fetch event for", event.request.url);

  event.respondWith(
    // Открывает объекты Cache, начинающиеся с 'font'.
    caches.open(CURRENT_CACHES["font"]).then(function (cache) {
      return cache
        .match(event.request)
        .then(function (response) {
          if (response) {
            console.log("Found response in cache:", response);

            return response;
          }
        })
        .catch(function (error) {
          // Обрабатывает исключения от match() или fetch().
          console.error("Error in fetch handler:", error);

          throw error;
        });
    }),
  );
});
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Использование Сервис Воркеров](/ru/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [Базовый пример кода для Сервис воркеров](https://github.com/mdn/sw-test)
- [Готов ли Сервис Воркер?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [Использование web воркеров](/ru/docs/Web/Guide/Performance/Using_web_workers)
