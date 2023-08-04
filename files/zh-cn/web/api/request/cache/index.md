---
title: Request.cache
slug: Web/API/Request/cache
---

{{APIRef("Fetch")}}

**`cache`** 作为{{domxref("Request")}} 接口只读属性包含着请求的缓存模式。它控制着请求以何种方式与浏览器的 [HTTP](/zh-CN/docs/Web/HTTP/Caching) 缓存进行交互。

## Syntax

```js
var currentCacheMode = request.cache;
```

### Value

A `RequestCache` value. The available values are:

- `default` — 浏览器从 HTTP 缓存中寻找匹配的请求。

  - 如果缓存匹配上并且有效（ [fresh](/zh-CN/docs/Web/HTTP/Caching#Freshness)）, 它将直接从缓存中返回资源。
  - 如果缓存匹配上但已经过期，浏览器将会使用传统（ [conditional request](/zh-CN/docs/Web/HTTP/Conditional_requests) ）的请求方式去访问远程服务器。如果服务器端显示资源没有改动，它将从缓存中返回资源。否则，如果服务器显示资源变动，那么重新从服务器下载资源更新缓存。
  - 如果缓存没有匹配，浏览器将会以普通方式请求，并且更新已经下载的资源缓存。

- `no-store` — 浏览器直接从远程服务器获取资源，不查看缓存，并且不会使用下载的资源更新缓存。
- `reload` — 浏览器直接从远程服务器获取资源，不查看缓存，然后使用下载的资源更新缓存。
- `no-cache` — 浏览器在其 HTTP 缓存中寻找匹配的请求。

  - 如果有匹配，无论是新的还是陈旧的，浏览器都会向远程服务器发出条件请求。如果服务器指示资源没有更改，则将从缓存中返回该资源。否则，将从服务器下载资源并更新缓存。
  - 如果没有匹配，浏览器将发出正常请求，并使用下载的资源更新缓存。

  `force-cache` — 浏览器在其 HTTP 缓存中寻找匹配的请求。

  - 如果有匹配项，不管是新匹配项还是旧匹配项，都将从缓存中返回。
  - 如果没有匹配，浏览器将发出正常请求，并使用下载的资源更新缓存。

- `only-if-cached` — 浏览器在其 HTTP 缓存中寻找匹配的请求。

  - 如果有匹配项 (新的或旧的)，则从缓存中返回。
  - 如果没有匹配，浏览器将返回一个错误。

  The `"only-if-cached"` mode can only be used if the request's [`mode`](/zh-CN/docs/Web/API/Request/mode) is `"same-origin"`. Cached redirects will be followed if the request's `redirect` property is `"follow"` and the redirects do not violate the `"same-origin"` mode.

## Example

```js
// Download a resource with cache busting, to bypass the cache
// completely.
fetch("some.json", { cache: "no-store" }).then(function (response) {
  /* consume the response */
});

// Download a resource with cache busting, but update the HTTP
// cache with the downloaded resource.
fetch("some.json", { cache: "reload" }).then(function (response) {
  /* consume the response */
});

// Download a resource with cache busting when dealing with a
// properly configured server that will send the correct ETag
// and Date headers and properly handle If-Modified-Since and
// If-None-Match request headers, therefore we can rely on the
// validation to guarantee a fresh response.
fetch("some.json", { cache: "no-cache" }).then(function (response) {
  /* consume the response */
});

// Download a resource with economics in mind!  Prefer a cached
// albeit stale response to conserve as much bandwidth as possible.
fetch("some.json", { cache: "force-cache" }).then(function (response) {
  /* consume the response */
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/zh-CN/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/zh-CN/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
