---
title: Response()
slug: Web/API/Response/Response
---

{{APIRef("Fetch")}}

Конструктор **`Response()`** создаёт новый объект {{domxref("Response")}}.

## Синтаксис

```
var myResponse = new Response(body, init);
```

### Параметры

- _body_ {{optional_inline}}

  - : Объект, который определяет тело запроса. Может быть `null` (является значением по умолчанию), или:

    - {{domxref("Blob")}}
    - {{domxref("BufferSource")}}
    - {{domxref("FormData")}}
    - {{domxref("ReadableStream")}}
    - {{domxref("URLSearchParams")}}
    - {{domxref("USVString")}}

- _init_ {{optional_inline}}

  - : An options object containing any custom settings that you want to apply to the response, or an empty object (which is the default value). The possible options are:

    - `status`: The status code for the reponse, e.g., `200`.
    - `statusText`: The status message associated with the status code, e.g., `OK`.
    - `headers`: Any headers you want to add to your response, contained within a {{domxref("Headers")}} object or object literal of {{domxref("ByteString")}} key/value pairs (see [HTTP headers](/ru/docs/Web/HTTP/Headers) for a reference).

## Примеры

In our [Fetch Response example](https://github.com/mdn/fetch-examples/tree/master/fetch-response) (see [Fetch Response live](http://mdn.github.io/fetch-examples/fetch-response/)) we create a new `Response` object using the constructor, passing it a new {{domxref("Blob")}} as a body, and an init object containing a custom `status` and `statusText`:

```js
var myBlob = new Blob();
var init = { status: 200, statusText: "SuperSmashingGreat!" };
var myResponse = new Response(myBlob, init);
```

## Спецификации

{{Specifications}}

## Совместимость в браузерах

{{Compat}}

## Читай также

- [ServiceWorker API](/ru/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/ru/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/ru/docs/Web/HTTP)
