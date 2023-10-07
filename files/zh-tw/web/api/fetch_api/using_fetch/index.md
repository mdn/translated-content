---
title: Using Fetch
slug: Web/API/Fetch_API/Using_Fetch
---

{{DefaultAPISidebar("Fetch API")}}

[Fetch API](/zh-TW/docs/Web/API/Fetch_API) 提供了一種 JavaScript Interface 來操作 HTTP pipeline，比方 request 和 response。同時它也提供了 global 的 {{domxref("GlobalFetch.fetch","fetch()")}} method，使得在網路上非同步地 fetch resources 這件事變得簡單易懂。

同樣的功能，以前都是使用 {{domxref("XMLHttpRequest")}}，而 Fetch 作為其替代方案，能更方便地整合在如 {{domxref("ServiceWorker_API", "Service Workers")}} 等相關技術上。此外，Fetch 具備額外的 logical palce，能拿來定義其他和 HTTP 有關的東西，像是 CORS 和 HTTP extensions。

`fetch` 和 `jQuery.ajax()` 有三個主要的差異:

- `fetch()` 回傳的 promise **不會 reject HTTP 的 error status**，就算是 HTTP 404 或 500 也一樣。相反地，它會正常地 resolve，並把 `ok` status 設為 false。會讓它發生 reject 的只有網路錯誤或其他會中斷 request 的情況。
- `fetch` **可以接收跨站的 cookies**，你可以用 Fetch 來建立跨站的 session。
- `fetch` **不會傳送 cookies**，除非你有設定 credentials 的 [init option](/zh-TW/docs/Web/API/fetch#Parameters)。 (Since [Aug 25, 2017](https://github.com/whatwg/fetch/pull/585). The spec changed the default credentials policy to `same-origin`. Firefox changed since 61.0b13.)

## 使用 Fetch 發送請求 ( request )

用法簡單，如下:

```js
fetch("http://example.com/movies.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    console.log(myJson);
  });
```

這裡要使用 fetch 透過網路取得 json 然後印出在 console，最簡單的方式只需要一個參數就是資料的 URI，fetch 會回傳一個包含 response 的 promise 。

這個範例使用的 url 只是示意用。

回傳的 response 需要透過 {{domxref("Body.json","json()")}} (在 {{domxref("Body")}} 可以找到定義, Body 是用 {{domxref("Request")}} 和 {{domxref("Response")}} 實作出來的物件.)

> **備註：** 其實 Body 還提供了其他類似的功能可以將內容輸成其他類型格式，詳見[Body](#body)

Fetch 請求的安全性 [Content Security Policy](/zh-TW/docs/Security/CSP/CSP_policy_directives)(內容安全策略) 是由 header 中的 `connect-src` directive 所設定 ，並非其他 directive ( 比如：img-src、default-src 等)。

### Request 可用的設定值

`fetch()` 第二個參數是選用的，可以傳送一個 `init` Object 來設定 request。

更多可以用的設定值詳見 {{domxref("GlobalFetch.fetch","fetch()")}}

```js
// 來發個 POST Request:

postData("http://example.com/answer", { answer: 42 })
  .then((data) => console.log(data)) // JSON from `response.json()` call
  .catch((error) => console.error(error));

function postData(url, data) {
  // Default options are marked with *
  return fetch(url, {
    body: JSON.stringify(data), // must match 'Content-Type' header
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, same-origin, *omit
    headers: {
      "user-agent": "Mozilla/4.0 MDN Example",
      "content-type": "application/json",
    },
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // *client, no-referrer
  }).then((response) => response.json()); // 輸出成 json
}
```

### 包含憑證(Credentials) 的 Request 用法

要讓瀏覽器將 credentials 跟著 request 一起送出, 方式就是在 `init` object 加上 `credentials: 'include'`

```js
fetch("https://example.com", {
  credentials: "include",
});
```

如果只想要把 credentials 發送給同源的 URL ，加上`credentials: 'same-origin'`。

```js
// The calling script is on the origin 'https://example.com'

fetch("https://example.com", {
  credentials: "same-origin",
});
```

或要確保瀏覽器不會帶著 credentials 請求，可以用 `credentials: 'omit'` 。

```js
fetch("https://example.com", {
  credentials: "omit",
});
```

### 上傳 JSON 資料

使用 {{domxref("GlobalFetch.fetch","fetch()")}} 來 POST JSON 格式的資料。

```js
var url = "https://example.com/profile";
var data = { username: "example" };

fetch(url, {
  method: "POST", // or 'PUT'
  body: JSON.stringify(data), // data can be `string` or {object}!
  headers: new Headers({
    "Content-Type": "application/json",
  }),
})
  .then((res) => res.json())
  .catch((error) => console.error("Error:", error))
  .then((response) => console.log("Success:", response));
```

### 上傳檔案

上傳檔案可以透過使用 HTML `<input type="file" />` input element, {{domxref("FormData.FormData","FormData()")}} 與{{domxref("GlobalFetch.fetch","fetch()")}}.

```js
var formData = new FormData();
var fileField = document.querySelector("input[type='file']");

formData.append("username", "abc123");
formData.append("avatar", fileField.files[0]);

fetch("https://example.com/profile/avatar", {
  method: "PUT",
  body: formData,
})
  .then((response) => response.json())
  .catch((error) => console.error("Error:", error))
  .then((response) => console.log("Success:", response));
```

### 如何確認 fetch 是否成功

當{{domxref("GlobalFetch.fetch","fetch()")}}遇到 CORS 或 server 設定錯誤導致 network error 時, promise 會 reject 並附上{{jsxref("TypeError")}}的回應, 但在權限或類似問題導致 404 的常見狀況下, 卻不會導致 network error.

因此, 確認`fetch()`是否成功的正確方式, 應包含檢查 promise resolved, 以及檢查{{domxref("Response.ok")}}的屬性是否為 true. 代碼如下例：

```js
fetch("flowers.jpg")
  .then(function (response) {
    if (response.ok) {
      return response.blob();
    }
    throw new Error("Network response was not ok.");
  })
  .then(function (myBlob) {
    var objectURL = URL.createObjectURL(myBlob);
    myImage.src = objectURL;
  })
  .catch(function (error) {
    console.log(
      "There has been a problem with your fetch operation: ",
      error.message,
    );
  });
```

### Supplying your own request object

Instead of passing a path to the resource you want to request into the `fetch()` call, you can create a request object using the {{domxref("Request.Request","Request()")}} constructor, and pass that in as a `fetch()` method argument:

```js
var myHeaders = new Headers();

var myInit = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
};

var myRequest = new Request("flowers.jpg", myInit);

fetch(myRequest)
  .then(function (response) {
    return response.blob();
  })
  .then(function (myBlob) {
    var objectURL = URL.createObjectURL(myBlob);
    myImage.src = objectURL;
  });
```

`Request()` accepts exactly the same parameters as the `fetch()` method. You can even pass in an existing request object to create a copy of it:

```js
var anotherRequest = new Request(myRequest, myInit);
```

This is pretty useful, as request and response bodies are one use only. Making a copy like this allows you to make use of the request/response again, while varying the `init` options if desired. The copy must be made before the body is read, and reading the body in the copy will also mark it as read in the original request.

> **備註：** There is also a {{domxref("Request.clone","clone()")}} method that creates a copy. Both methods of creating a copy will fail if the body of the original request or response has already been read, but reading the body of a cloned response or request will not cause it to be marked as read in the original.

## Headers

The {{domxref("Headers")}} interface allows you to create your own headers object via the {{domxref("Headers.Headers","Headers()")}} constructor. A headers object is a simple multi-map of names to values:

```js
var content = "Hello World";
var myHeaders = new Headers();
myHeaders.append("Content-Type", "text/plain");
myHeaders.append("Content-Length", content.length.toString());
myHeaders.append("X-Custom-Header", "ProcessThisImmediately");
```

The same can be achieved by passing an array of arrays or an object literal to the constructor:

```js
myHeaders = new Headers({
  "Content-Type": "text/plain",
  "Content-Length": content.length.toString(),
  "X-Custom-Header": "ProcessThisImmediately",
});
```

The contents can be queried and retrieved:

```js
console.log(myHeaders.has("Content-Type")); // true
console.log(myHeaders.has("Set-Cookie")); // false
myHeaders.set("Content-Type", "text/html");
myHeaders.append("X-Custom-Header", "AnotherValue");

console.log(myHeaders.get("Content-Length")); // 11
console.log(myHeaders.get("X-Custom-Header")); // ["ProcessThisImmediately", "AnotherValue"]

myHeaders.delete("X-Custom-Header");
console.log(myHeaders.get("X-Custom-Header")); // [ ]
```

Some of these operations are only useful in {{domxref("ServiceWorker_API","ServiceWorkers")}}, but they provide a much nicer API for manipulating headers.

All of the Headers methods throw a `TypeError` if a header name is used that is not a valid HTTP Header name. The mutation operations will throw a `TypeError` if there is an immutable guard (see below). Otherwise they fail silently. For example:

```js
var myResponse = Response.error();
try {
  myResponse.headers.set("Origin", "http://mybank.com");
} catch (e) {
  console.log("Cannot pretend to be a bank!");
}
```

A good use case for headers is checking whether the content type is correct before you process it further. For example:

```js
fetch(myRequest)
  .then(function (response) {
    var contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return response.json();
    }
    throw new TypeError("Oops, we haven't got JSON!");
  })
  .then(function (json) {
    /* process your JSON further */
  })
  .catch(function (error) {
    console.log(error);
  });
```

### Guard

Since headers can be sent in requests and received in responses, and have various limitations about what information can and should be mutable, headers objects have a guard property. This is not exposed to the Web, but it affects which mutation operations are allowed on the headers object.

Possible guard values are:

- `none`: default.
- `request`: guard for a headers object obtained from a request ({{domxref("Request.headers")}}).
- `request-no-cors`: guard for a headers object obtained from a request created with {{domxref("Request.mode")}} `no-cors`.
- `response`: guard for a Headers obtained from a response ({{domxref("Response.headers")}}).
- `immutable`: Mostly used for ServiceWorkers; renders a headers object read-only.

> **備註：** You may not append or set a `request` guarded Headers' `Content-Length` header. Similarly, inserting `Set-Cookie` into a response header is not allowed: ServiceWorkers are not allowed to set cookies via synthesized responses.

## Response objects

As you have seen above, {{domxref("Response")}} instances are returned when `fetch()` promises are resolved.

The most common response properties you'll use are:

- {{domxref("Response.status")}} — An integer (default value 200) containing the response status code.
- {{domxref("Response.statusText")}} — A string (default value "OK"), which corresponds to the HTTP status code message.
- {{domxref("Response.ok")}} — seen in use above, this is a shorthand for checking that status is in the range 200-299 inclusive. This returns a {{domxref("Boolean")}}.

They can also be created programmatically via JavaScript, but this is only really useful in {{domxref("ServiceWorker_API", "ServiceWorkers")}}, when you are providing a custom response to a received request using a {{domxref("FetchEvent.respondWith","respondWith()")}} method:

```js
var myBody = new Blob();

addEventListener("fetch", function (event) {
  // ServiceWorker intercepting a fetch
  event.respondWith(
    new Response(myBody, {
      headers: { "Content-Type": "text/plain" },
    }),
  );
});
```

The {{domxref("Response.Response","Response()")}} constructor takes two optional arguments — a body for the response, and an init object (similar to the one that {{domxref("Request.Request","Request()")}} accepts.)

> **備註：** The static method {{domxref("Response.error","error()")}} simply returns an error response. Similarly, {{domxref("Response.redirect","redirect()")}} returns a response resulting in a redirect to a specified URL. These are also only relevant to Service Workers.

## Body

Both requests and responses may contain body data. A body is an instance of any of the following types:

- {{domxref("ArrayBuffer")}}
- {{domxref("ArrayBufferView")}} (Uint8Array and friends)
- {{domxref("Blob")}}/File
- string
- {{domxref("URLSearchParams")}}
- {{domxref("FormData")}}

The {{domxref("Body")}} mixin defines the following methods to extract a body (implemented by both {{domxref("Request")}} and {{domxref("Response")}}). These all return a promise that is eventually resolved with the actual content.

- {{domxref("Body.arrayBuffer","arrayBuffer()")}}
- {{domxref("Body.blob","blob()")}}
- {{domxref("Body.json","json()")}}
- {{domxref("Body.text","text()")}}
- {{domxref("Body.formData","formData()")}}

This makes usage of non-textual data much easier than it was with XHR.

Request bodies can be set by passing body parameters:

```js
var form = new FormData(document.getElementById("login-form"));
fetch("/login", {
  method: "POST",
  body: form,
});
```

Both request and response (and by extension the `fetch()` function), will try to intelligently determine the content type. A request will also automatically set a `Content-Type` header if none is set in the dictionary.

## 特性偵測

想確認是否支持 Fetch API，可透過檢查 {{domxref("Headers")}}、{{domxref("Request")}}、{{domxref("Response")}} 或 {{domxref("GlobalFetch.fetch","fetch()")}} 是否存在 {{domxref("Window")}} 或 {{domxref("Worker")}} 域中。例如：

```js
if (self.fetch) {
  // run my fetch request here
} else {
  // do something with XMLHttpRequest?
}
```

## 參見

- [ServiceWorker API](/zh-TW/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/zh-TW/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/zh-TW/docs/Web/HTTP)
- [Fetch polyfill](https://github.com/github/fetch)
- [Fetch examples on Github](https://github.com/mdn/fetch-examples/)
