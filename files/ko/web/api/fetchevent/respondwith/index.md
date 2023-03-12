---
title: FetchEvent.respondWith()
slug: Web/API/FetchEvent/respondWith
---
{{APIRef("Service Workers API")}}{{SeeCompatTable}}

{{domxref("FetchEvent")}}의 **`respondWith()`** 메소드는 브라우저의 기본 fetch 핸들링을 막고, 당신 스스로 {{domxref("Response")}}에 대한 promise를 제공할 수 있게 허락합니다.

대부분의 상황에서 당신은 수신자가 이해하는 어떠한 응답이라도 제공할 수 있습니다. 예를 들어, {{HTMLElement('img')}} 엘리먼트가 해당 요청을 시작했다면, 응답 객체는 이미지 데이터를 필요로 합니다. 보안적인 이유들로, 여기엔 몇가지 전역 규칙이 존재합니다.

- You can only return {{domxref("Response")}} objects of {{domxref("Response.type", "type")}} "`opaque`" if the {{domxref("fetchEvent.request")}} object's {{domxref("request.mode", "mode")}} is "`no-cors`". This prevents the leaking of private data.
- You can only return {{domxref("Response")}} objects of {{domxref("Response.type", "type")}} "`opaqueredirect`" if the {{domxref("fetchEvent.request")}} object's {{domxref("request.mode", "mode")}} is "`manual`".
- You cannot return {{domxref("Response")}} objects of {{domxref("Response.type", "type")}} "`cors`" if the {{domxref("fetchEvent.request")}} object's {{domxref("request.mode", "mode")}} is "`same-origin`".

### Specifying the final URL of a resource

From Firefox 59 onwards, when a service worker provides a {{domxref("Response")}} to {{domxref("FetchEvent.respondWith()")}}, the {{domxref("Response.url")}} value will be propagated to the intercepted network request as the final resolved URL. If the {{domxref("Response.url")}} value is the empty string, then the {{domxref("Request.url","FetchEvent.request.url")}} is used as the final URL.

In the past the {{domxref("Request.url","FetchEvent.request.url")}} was used as the final URL in all cases. The provided {{domxref("Response.url")}} was effectively ignored.

This means, for example, if a service worker intercepts a stylesheet or worker script, then the provided {{domxref("Response.url")}} will be used to resolve any relative {{cssxref("@import")}} or {{domxref("WorkerGlobalScope.importScripts()","importScripts()")}} subresource loads ([Firefox bug 1222008](https://bugzil.la/1222008)).

For most types of network request this change has no impact because you can't observe the final URL. There are a few, though, where it does matter:

- If a {{domxref("WindowOrWorkerGlobalScope.fetch()", "fetch()")}} is intercepted, then you can observe the final URL on the result's {{domxref("Response.url")}}.
- If a [worker](/ko/docs/Web/API/Web_Workers_API) script is intercepted, then the final URL is used to set [`self.location`](/en-US/docs/Web/API/WorkerGlobalScope/location) and used as the base URL for relative URLs in the worker script.
- If a stylesheet is intercepted, then the final URL is used as the base URL for resolving relative {{cssxref("@import")}} loads.

Note that navigation requests for {{domxref("Window","Windows")}} and {{domxref("HTMLIFrameElement","iframes")}} do NOT use the final URL. The way the HTML specification handles redirects for navigations ends up using the request URL for the resulting {{domxref("Window.location")}}. This means sites can still provide an "alternate" view of a web page when offline without changing the user-visible URL.

## Syntax

```js
fetchEvent.respondWith(
  // Promise that resolves to a Response.
)
```

### Parameters

A {{jsxref("Promise")}} for a {{domxref("Response")}}.

### Return value

Void.

### Exceptions

| Exception      | Notes                                                                                                                                                                                                                              |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `NetworkError` | A network error is triggered on certain combinations of {{domxref("Request.mode","FetchEvent.request.mode")}} and {{domxref("Response.type")}} values, as hinted at in the "global rules" listed above. |

## Examples

This fetch event tries to return a response from the cache API, falling back to the network otherwise.

```js
addEventListener('fetch', event => {
  // Prevent the default, and handle the request ourselves.
  event.respondWith(async function() {
    // Try to get the response from a cache.
    const cachedResponse = await caches.match(event.request);
    // Return it if we found one.
    if (cachedResponse) return cachedResponse;
    // If we didn't find a match in the cache, use the network.
    return fetch(event.request);
  }());
});
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- [Using Service Workers](/ko/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [Fetch API](/ko/docs/Web/API/Fetch_API)
