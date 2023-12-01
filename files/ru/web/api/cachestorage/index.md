---
title: CacheStorage
slug: Web/API/CacheStorage
---

{{APIRef("Service Workers API")}}

Интерфейс **`CacheStorage`** представляет собой хранилище для объектов {{domxref("Cache")}}. Он предоставляет главную директорию всех именованных кешей, к которым могут получить доступ {{domxref("ServiceWorker")}}, другие типы воркеров или {{domxref("window")}} (вы не обязаны использовать их с service workers, даже если существует спецификация, определяющая это) и поддерживает отображение строковых имён соответствующих объектов {{domxref("Cache")}}.

`CacheStorage` также позволяет вызвать {{domxref("CacheStorage.open()")}} и {{domxref("CacheStorage.match()")}}. Используйте {{domxref("CacheStorage.open()")}} для получения экземпляров {{domxref("Cache")}}. Используйте {{domxref("CacheStorage.match()")}} для проверки того, является ли данный {{domxref("Request")}} ключом в любом из объектов {{domxref("Cache")}}, отслеживаемых объектом `CacheStorage`.

Вы можете получить доступ к `CacheStorage` через глобальное свойство {{domxref("WorkerGlobalScope.caches", "caches")}}.

> **Примечание:** CacheStorage всегда возвращает отказ с `SecurityError` для ненадёжных источников (т.e. тех, что не используют HTTPS, хотя это утверждение, вероятно, станет более общим в будущем). При тестировании это можно обойти, установив опцию "Enable Service Workers over HTTP (when toolbox is open)" в меню Firefox Devtools options/gear.

> **Примечание:** {{domxref("CacheStorage.match()")}} удобный метод. Подобная функциональность сопоставления записей кеша может быть реализован путём открытия вашего кеша с помощью {{domxref("CacheStorage.open()")}}, возвращения записей, в ней содержащихся, через {{domxref("CacheStorage.keys()")}} и сравнения необходимой {{domxref("CacheStorage.match()")}}.

## Методы

- {{domxref("CacheStorage.match()")}}
  - : Проверяет, является ли данный {{domxref("Request")}} ключом в любом из объектов {{domxref("Cache")}}, отслеживаемых объектом {{domxref("CacheStorage")}}, и возвращает {{jsxref("Promise")}}, который успешно завершится, когда найдёт совпадение.
- {{domxref("CacheStorage.has()")}}
  - : Возвращает {{jsxref("Promise")}}, который успешно завершится и вернёт `true,` если объект {{domxref("Cache")}} содержит кеш с установленным `cacheName`.
- {{domxref("CacheStorage.open()")}}
  - : Возвращает {{jsxref("Promise")}}, который успешно завершится, когда объект {{domxref("Cache")}} найдёт необходимый объект с `cacheName` (если такого нет, то создаст новый).
- {{domxref("CacheStorage.delete()")}}
  - : Находит объект {{domxref("Cache")}}, соответствующий `cacheName`, и, если такой обнаружен, удаляет объект {{domxref("Cache")}} и возвращает {{jsxref("Promise")}}, завершающийся с `true`. Если объект {{domxref("Cache")}} не найдёт, то возвращается `false`.
- {{domxref("CacheStorage.keys()")}}
  - : Возвращает {{jsxref("Promise")}}, который вернёт массив, содержащий строки, соответствующие всем именованным объектам {{domxref("Cache")}}, отслеживаемым {{domxref("CacheStorage")}}. Используйте этот метод для прохода по списку всех объектов {{domxref("Cache")}}.

## Примеры

Фрагмент кода взят с MDN [sw-test example](https://github.com/mdn/sw-test/) (смотри [sw-test running live](https://mdn.github.io/sw-test/)). Этот service worker ожидает старта события {{domxref("InstallEvent")}}, затем запускает {{domxref("ExtendableEvent.waitUntil","waitUntil")}} для обработки процесса установки приложения. Он состоит из вызова {{domxref("CacheStorage.open")}} для создания нового кеша и затем использует {{domxref("Cache.addAll")}} для добавления к нему списка ресурсов.

Во втором блоке кода мы ждём запуска события {{domxref("FetchEvent")}}. Мы создаём встроенный ответ:

1. Проверяем, был ли необходимый запрос найден в CacheStorage. Если да, выполняем его.
2. Если нет, получаем запрос от сети, затем так же открываем кеш, созданный в первом блоке, и добавляем клон запроса в него, используя {{domxref("Cache.put")}} (`cache.put(event.request, response.clone())`.)
3. Если произошла ошибка (например, из-за отсутствия подключения), возвращаем ответ с отказом.

Наконец, возвращаем ответ, был ли встроенный запрос в итоге равнозначным, используя {{domxref("FetchEvent.respondWith")}}.

```js
this.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open("v1").then(function (cache) {
      return cache.addAll([
        "/sw-test/",
        "/sw-test/index.html",
        "/sw-test/style.css",
        "/sw-test/app.js",
        "/sw-test/image-list.js",
        "/sw-test/star-wars-logo.jpg",
        "/sw-test/gallery/bountyHunters.jpg",
        "/sw-test/gallery/myLittleVader.jpg",
        "/sw-test/gallery/snowTroopers.jpg",
      ]);
    }),
  );
});

this.addEventListener("fetch", function (event) {
  var response;
  event.respondWith(
    caches
      .match(event.request)
      .catch(function () {
        return fetch(event.request);
      })
      .then(function (r) {
        response = r;
        caches.open("v1").then(function (cache) {
          cache.put(event.request, response);
        });
        return response.clone();
      })
      .catch(function () {
        return caches.match("/sw-test/gallery/myLittleVader.jpg");
      }),
  );
});
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Using Service Workers](/ru/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("WorkerGlobalScope.caches")}}
