---
title: BackgroundFetchRegistration
slug: Web/API/BackgroundFetchRegistration
page-type: web-api-interface
tags:
  - API
  - Interface
  - Reference
  - BackgroundFetchRegistration
browser-compat: api.BackgroundFetchRegistration
---

{{APIRef("Background Fetch API")}}

Интерфейс **`BackgroundFetchRegistration`** из {{domxref('Background Fetch API','','',' ')}} представляет собой отдельную фоновую выборку.

Экземпляр `BackgroundFetchRegistration` возвращает метод {{domxref("BackgroundFetchManager.fetch()")}} или метод {{domxref("BackgroundFetchManager.get()")}} и, следовательно, не имеет конструктора.

{{InheritanceDiagram}}

## Свойства

Для удобства использования, следующие свойства, скопированные из экземпляра `BackgroundFetchRegistration`, доступны синхронно:

- {{domxref("BackgroundFetchRegistration.id")}}{{ReadOnlyInline}}
  - : Строка, содержащая идентификатор фонового запроса.
- {{domxref("BackgroundFetchRegistration.uploadTotal")}}{{ReadOnlyInline}}
  - : {{jsxref("number")}} содержащий общее количество байтов для загрузки.
- {{domxref("BackgroundFetchRegistration.uploaded")}}{{ReadOnlyInline}}
  - : {{jsxref("number")}} содержащий количество успешно отправленных байтов, изначально `0`.
- {{domxref("BackgroundFetchRegistration.downloadTotal")}}{{ReadOnlyInline}}
  - : {{jsxref("number")}} содержащий общий размер загрузки в байтах. Это значение устанавливается при регистрации запроса, или `0`.
- {{domxref("BackgroundFetchRegistration.downloaded")}}{{ReadOnlyInline}}
  - : {{jsxref("number")}} содержащий количество скачанных байт, изначально `0`.
- {{domxref("BackgroundFetchRegistration.result")}}{{ReadOnlyInline}}
  - : Изначально возвращает пустую строку, а по завершению запросо либо `"success"`, либо `"failure"`.
- {{domxref("BackgroundFetchRegistration.failureReason")}}{{ReadOnlyInline}}

  - : Возвращает одну из следующих строк:

    - `""`
      - : Запрос не завершён, либо завершился успешно.
    - `"aborted"`
      - : Операция была отменена пользователем, либо был вызван {{domxref("BackgroundFetchRegistration.abort()","abort()")}}.
    - `"bad-status"`
      - : Статус ответа не-ok (статус не входящий в диапазон 200-299).
    - `"fetch-error"`
      - : Запрос завершился неудачей по какой-либо другой причине, например CORS, или отсутствие сети.
    - `"quota-exceeded"`
      - : Во время операции была достигнута квота хранилища.
    - `"download-total-exceeded"`
      - : Превышен `downloadTotal`. Его значение устанавливается при регистрации запроса.

- {{domxref("BackgroundFetchRegistration.recordsAvailable")}}{{ReadOnlyInline}}
  - : {{jsxref("boolean")}} указывает, установлен ли флаг `recordsAvailable`.

## Методы

- {{domxref("BackgroundFetchRegistration.abort","BackgroundFetchRegistration.abort()")}}
  - : Прерывает фоновый запрос. Возвращает {{jsxref("Promise")}}, который разрешается с `true` если запрос был успешно прерван.
- {{domxref("BackgroundFetchRegistration.match","BackgroundFetchRegistration.match()")}}
  - : Возвращает один объект {{domxref("BackgroundFetchRecord")}}, который является первым совпадением по аргументам.
- {{domxref("BackgroundFetchRegistration.matchAll","BackgroundFetchRegistration.matchAll()")}}
  - : Возвращает {{jsxref("Promise")}}, который разрешается с массивом объектов {{domxref("BackgroundFetchRecord")}}, содержащих запросы и ответы.

## События

Listen to these events using [`addEventListener()`](/en-US/docs/Web/API/EventTarget/addEventListener) or by assigning an event listener to the `oneventname` property of this interface.

- [`progress`](/en-US/docs/Web/API/BackgroundFetchRegistration/progress_event)

  - : Fired when there is a change to any of the following properties:
    {{domxref("BackgroundFetchRegistration.uploaded", "uploaded")}},
    {{domxref("BackgroundFetchRegistration.downloaded", "downloaded")}},
    {{domxref("BackgroundFetchRegistration.result", "result")}} or
    {{domxref("BackgroundFetchRegistration.failureReason", "failureReason")}}.

## Примеры

The following code creates a `BackGroundFetchRegistration` as `bgFetch`, with an `id` of `"my-fetch"`.

```js
navigator.serviceWorker.ready.then(async (swReg) => {
  const bgFetch = await swReg.backgroundFetch.fetch(
    "my-fetch",
    ["/ep-5.mp3", "ep-5-artwork.jpg"],
    {
      title: "Episode 5: Interesting things.",
      icons: [
        {
          sizes: "300x300",
          src: "/ep-5-icon.png",
          type: "image/png",
        },
      ],
      downloadTotal: 60 * 1024 * 1024,
    }
  );
});
```

Logging the {{domxref("BackgroundFetchRegistration.id","id")}} to the console returns `"my-fetch"`.

```js
console.log(bgFetch.id); // "my-fetch"
```

The {{domxref("BackgroundFetchRegistration.match","match()")}} method can be used to find a particular {{domxref("BackgroundFetchRecord")}} from those that are part of the registration.

```js
bgFetch.match("/ep-5.mp3").then(async (record) => {
  if (!record) {
    console.log("No record found");
    return;
  }

  console.log(`Here's the request`, record.request);
  const response = await record.responseReady;
  console.log(`And here's the response`, response);
});
```

## Спецификации

{{Specifications}}

## Браузерная совместимость

{{Compat}}
