---
title: CacheStorage.match()
slug: Web/API/CacheStorage/match
---

{{APIRef("Service Workers API")}}{{SeeCompatTable}}

Метод **`match()`** интерфейса {{domxref("CacheStorage")}} (доступный через глобальное свойство `caches`) проверяет является ли данный {{domxref("Request")}} или строка url ключом для какого-либо хранимого {{domxref("Response")}}. Метод возвращает {{jsxref("Promise")}} если {{domxref("Response")}} найден, или `undefined` если нет ни одного совпадения.

Объекты Cache проверяются в порядке создания.

> **Примечание:** {{domxref("CacheStorage.match()", "caches.match()")}} это метод для удобства в работе. Такая функциональность достигается вызовом {{domxref("cache.match()")}} для каждого объекта cache (в порядке полученном запросом {{domxref("CacheStorage.keys()", "caches.keys()")}}) пока {{domxref("Response")}} не будет найден.

## Синтаксис

```
caches.match(request, options).then(function(response) {
  // Какие-либо действия с response
});
```

### Параметры

- request
  - : {{domxref("Request")}} для поиска. Может быть объектом {{domxref("Request")}} или строкой URL.
- options {{optional_inline}}

  - : Объект, свойства которого определяют, как проверяется совпадение в операции сопоставления. Доступны следующие варианты:

    - `ignoreSearch`: {{domxref("Boolean")}} свойство. Определяет, следует ли игнорировать параметры запроса в строке url или нет. Например, если установлено `true`, параметры `?value=bar` запроса `http://foo.com/?value=bar` будут проигнорированы во время сопоставления. Значением по умолчанию является `false`.
    - `ignoreMethod`: {{domxref("Boolean")}} свойство. Когда установлено `true`, предотвращает проверку `http` метода запроса {{domxref("Request")}} (обычно разрешены только `GET` и `HEAD`.) По умолчанию установлено `false`.
    - `ignoreVary`: {{domxref("Boolean")}} свойство, определяющее, следует ли выполнять проверку заголовка `VARY.` Если установлено `true`, совпадения будут найдены, независимо от того, имеет ли {{domxref("Response")}} заголовок `VARY` или нет. По умолчанию установлено `false`.
    - `cacheName`: Строка {{domxref("DOMString")}} - имя кеша для поиска.

### Возвращаемое значение

Метод возвращает {{jsxref("Promise")}} который разрешается совпавшим {{domxref("Response")}}. Если ни одного совпадений не было найдено, promise разрешается с `undefined`.

## Примеры

Это пример из MDN [sw-test example](https://github.com/mdn/sw-test/) (см. [sw-test running live](https://mdn.github.io/sw-test/)). В данном примере, мы обрабатываем событие {{domxref("FetchEvent")}}. Мы строим проверку ответа следующим образом:

1. Проверяем, совпадения для запроса в {{domxref("CacheStorage")}} используя {{domxref("CacheStorage.match","CacheStorage.match()")}}. Если совпадение найдено, возвращаем response.
2. Если нет, открываем `v1` объект кеша, используя метод `open()`, добавляем изначальный запрос в кеш используя {{domxref("Cache.put","Cache.put()")}} и возвращаем клонированный объект запроса, используя `return response.clone()`. Это необходимо, потому что метод `put()` сохраняет в кеш тело запроса, изменяя, таким образом, изначальный запрос.
3. Если произошла какая-либо ошибка (например, из-за проблем с сетью), возвращаем резервный ответ.

```js
caches
  .match(event.request)
  .then(function (response) {
    return (
      response ||
      fetch(event.request).then(function (r) {
        caches.open("v1").then(function (cache) {
          cache.put(event.request, r);
        });
        return r.clone();
      })
    );
  })
  .catch(function () {
    return caches.match("/sw-test/gallery/myLittleVader.jpg");
  });
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Использование Service Workers](/ru/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("WorkerGlobalScope.caches", "self.caches")}}
