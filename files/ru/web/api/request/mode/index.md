---
title: Request.mode
slug: Web/API/Request/mode
---

{{APIRef("Fetch")}}

Read-only свойство **`mode`** интерфейса {{domxref("Request")}} описывает режим запроса (например, `cors`, `no-cors`, `same-origin` или `navigate`.) Используется для проверки, вызывает ли кросс-доменный запрос корректный ответ, и какие свойства ответа доступны для чтения.

## Синтаксис

```
var myMode = request.mode;
```

### Значения

- Значения `RequestMode`.

  - : Соответствующие доступные значения:

    - `same-origin` — Если запрос сделан к другому origin в этом режиме, то это вызовет ошибку. Можно использовать этот режим, чтобы проверить, что запрос всегда будет обращён к тому же origin, что и текущий.
    - `no-cors` — Разрешает использование только `HEAD`, `GET` или `POST` методов и [простых заголовков](https://fetch.spec.whatwg.org/#simple-header) (т.е. разрешены только простые запросы). Если какой-либо ServiceWorkers перехватит запрос, то он не сможет добавить или изменить заголовки, кроме [простых](https://fetch.spec.whatwg.org/#simple-header). Также, для JavaScript может быть ограничен доступ к любому свойству объекта ответа {{domxref("Response")}}. Это позволяет наверняка знать, что ServiceWorkers не изменили семантику и предотвратить проблемы безопасности и конфиденциальности, возникающие при утечке данных между доменами.
    - `cors` — Разрешает кросс-доменные запросы. Например, чтобы получить доступ к некому API, предоставляемое третей стороной. Ожидается, что запрос в этом режиме будет придерживаться [CORS протокола](/ru/docs/Web/HTTP/Access_control_CORS). В объекте ответа {{domxref("Response")}} доступен [ограниченный набор](https://fetch.spec.whatwg.org/#concept-filtered-response-cors) заголовков, но тело доступно для чтения.
    - `navigate` — Режим, поддерживающий навигацию. Значение `navigate` предназначено только для использования в HTML навигации. Запрос в этом режиме создаётся только во время навигации между страницами.

#### Default mode

Запрос может быть создан разными способами и режим запроса зависит от конкретных средств, с помощью которых он был инициирован.

Например, когда объект `Request` создаётся с помощью конструктора {{domxref("Request.Request")}}, свойство `mode` этого `Request` будет иметь значение `cors`.

Однако, запросы созданные не конструктором {{domxref("Request.Request")}}, будут использовать режим `no-cors`. Например, для встроенных ресурсов, где запрос инициируется из разметки, если отсутствует атрибут [`crossorigin`](/ru/docs/Web/HTML/CORS_settings_attributes), то запрос в большинстве случаев будет выполнен в режиме `no-cors` — то есть для элементов {{HTMLElement("link")}} или {{HTMLElement("script")}} (кроме использования с модулями), или {{HTMLElement("img")}}, {{HTMLElement("audio")}}, {{HTMLElement("video")}}, {{HTMLElement("object")}}, {{HTMLElement("embed")}}, или {{HTMLElement("iframe")}}.

## Пример

В этой части кода создаётся новый запрос (для взятия файла картинки) через конструктор {{domxref("Request.Request()")}}, затем полученный режим сохраняется в переменной:

```js
var myRequest = new Request("flowers.jpg");
var myMode = myRequest.mode; // вернёт "cors" по умолчанию
```

## Спецификации

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/ru/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/ru/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/ru/docs/Web/HTTP)
