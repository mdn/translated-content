---
title: BackgroundFetchRegistration
slug: Web/API/BackgroundFetchRegistration
l10n:
  sourceCommit: 418f9cf461de0c7845665c0c677ad0667740f52a
---

{{APIRef("Background Fetch API")}}

Интерфейс **`BackgroundFetchRegistration`** из {{domxref('Background Fetch API','','',' ')}} представляет собой отдельный фоновый запрос.

Экземпляр `BackgroundFetchRegistration` возвращает метод {{domxref("BackgroundFetchManager.fetch()")}} или метод {{domxref("BackgroundFetchManager.get()")}} и, следовательно, не имеет конструктора.

{{InheritanceDiagram}}

## Свойства

Для удобства использования, следующие свойства, скопированные из экземпляра `BackgroundFetchRegistration`, доступны синхронно:

- {{domxref("BackgroundFetchRegistration.id")}}{{ReadOnlyInline}}
  - : Строка, содержащая идентификатор фонового запроса.
- {{domxref("BackgroundFetchRegistration.uploadTotal")}}{{ReadOnlyInline}}
  - : {{jsxref("number")}} содержащий общее количество байт для загрузки.
- {{domxref("BackgroundFetchRegistration.uploaded")}}{{ReadOnlyInline}}
  - : {{jsxref("number")}} содержащий количество успешно отправленных байт, изначально `0`.
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
  - : Прерывает фоновый запрос. Возвращает {{jsxref("Promise")}}, результатом обработки которого является `true`, если запрос был успешно прерван.
- {{domxref("BackgroundFetchRegistration.match","BackgroundFetchRegistration.match()")}}
  - : Возвращает один объект {{domxref("BackgroundFetchRecord")}}, который является первым совпадением по аргументам.
- {{domxref("BackgroundFetchRegistration.matchAll","BackgroundFetchRegistration.matchAll()")}}
  - : Возвращает {{jsxref("Promise")}}, результатом обработки которого является массив объектов {{domxref("BackgroundFetchRecord")}}, содержащих запросы и ответы.

## События

Слушайте эти события используя [`addEventListener()`](/ru/docs/Web/API/EventTarget/addEventListener) или назначая слушатель события свойству `oneventname`.

- [`progress`](/ru/docs/Web/API/BackgroundFetchRegistration/progress_event)
  - : Срабатывает при изменении любого из следующих свойств:
    {{domxref("BackgroundFetchRegistration.uploaded", "uploaded")}},
    {{domxref("BackgroundFetchRegistration.downloaded", "downloaded")}},
    {{domxref("BackgroundFetchRegistration.result", "result")}} or
    {{domxref("BackgroundFetchRegistration.failureReason", "failureReason")}}.

## Примеры

Следующий пример создаёт `BackGroundFetchRegistration` с идентификатором `"my-fetch"` и присваивает его переменной `bgFetch`.

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
    },
  );
});
```

Вывод {{domxref("BackgroundFetchRegistration.id","id")}} в консоль возвращает `"my-fetch"`.

```js
console.log(bgFetch.id); // "my-fetch"
```

Метод {{domxref("BackgroundFetchRegistration.match","match()")}} можно использовать для поиска конкретного {{domxref("BackgroundFetchRecord")}} из тех, что были зарегистрированы.

```js
bgFetch.match("/ep-5.mp3").then(async (record) => {
  if (!record) {
    console.log("No record found");
    return;
  }

  console.log(`Запрос`, record.request);
  const response = await record.responseReady;
  console.log(`И ответ`, response);
});
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
