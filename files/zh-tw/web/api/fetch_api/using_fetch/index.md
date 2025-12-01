---
title: 使用 Fetch API
slug: Web/API/Fetch_API/Using_Fetch
---

{{DefaultAPISidebar("Fetch API")}}

[Fetch API](/zh-TW/docs/Web/API/Fetch_API) 提供一個 JavaScript 介面，用來發送 HTTP 請求與處理回應。

Fetch 是 {{domxref("XMLHttpRequest")}} 的現代替代方案，相較於 {{domxref("XMLHttpRequest")}} 使用的 {{glossary("callback_function", "回呼函式")}}，它基於 [Promise](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Promise)。而且能更方便地整合在如 {{domxref("ServiceWorker_API", "Service Workers")}} 與 [跨來源資源共享（CORS）](/zh-TW/docs/Web/HTTP/Guides/CORS)等相關技術上。

使用 Fetch API，呼叫 {{domxref("Window/fetch", "fetch()")}} 就可以建立請求，它在 {{domxref("Window", "window")}} 和 {{domxref("WorkerGlobalScope", "worker")}} 的上下文中都能作為全域函式使用。你可以傳入一個 {{domxref("Request")}} 物件，或是一個 URL 字串，以及額外的參數設定來使用 fetch。

`fetch()` 函式回傳一個 {{jsxref("Promise")}}，當伺服器回應時會被 fulfill 一個代表伺服器回應的 {{domxref("Response")}} 物件。接著你可以藉由呼叫物件上合適的方法，來檢查回應狀態，並且以各種格式擷取回應內容，包括文字檔與 JSON。

以下是一個使用 `fetch()` 來從伺服器獲取一些 JSON 資料的簡單範例：

```js
async function getData() {
  const url = "https://example.org/products.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`回應狀態: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}
```

我們宣告一個 URL 字串，並且將其作為參數傳入 `fetch()`，並且不帶額外選項。

當發生一些錯誤，`fetch()` 函式會 reject 這個 promise，不過如果是伺服器回應錯誤狀態，例如 {{httpstatus("404")}}，這並不會讓 promise 被 reject，因此我們應該主動檢查回應的狀態，例如在這裡如果它不 OK，我們可以主動拋出錯誤。

如果沒有發生以上情況，我們可以藉由呼叫 `Response` 的 {{domxref("Response.json()", "json()")}} 方法來以 {{glossary("JSON")}} 獲取回應的主體，並且將他輸出。要注意就像 `fetch()` 函式一樣，`json()` 也是非同步的，而且所有其他用來獲取回應主體的方法也都一樣。

在本頁接下來的部分，我們將更詳細的探討這個過程的各階段。

## 建立請求

你可以呼叫 `fetch()` 來建立請求，傳入：

1. 欲請求的資源定義，這可以是：
   - 一個 URL 字串
   - 一個物件，例如 {{domxref("URL")}} 的實例，總之只要是其 {{glossary("stringifier")}} 會回傳 URL 字串都可以
   - 一個 {{domxref("Request")}} 實例
2. 可選的物件，包含可以用來設定請求的選項

在這個章節我們我會看看一些最常用的選項。如果你想要查看所有可用的選項，你可以查看 [`fetch()`](/zh-TW/docs/Web/API/Window/fetch)。

### 設定 HTTP 請求方法

預設下，`fetch` 會做 {{httpmethod("GET")}} 請求，但你可以使用 `method` 這個選項來使用不同的 [HTTP 請求方法](/zh-TW/docs/Web/HTTP/Reference/Methods)

```js
const response = await fetch("https://example.org/post", {
  method: "POST",
  // …
});
```

如果 `mode` 設為 `no-cors`，則 `method` 一定要是 `GET`、`POST`、`HEAD`其中一個。

### 設定主體（Body）

請求主體是請求的負載，它是客戶端寄送給伺服器的內容，你不能在 `GET` 請求中包含主體，它是用來在 {{httpmethod("POST")}} 或 {{httpmethod("PUT")}} 上使用。舉例來說，如果你想要上傳一個檔案到伺服器，你可能會建立一個 `POST` 請求然後將檔案放在請求主體。

要設定一個請求的主體，在 `body` 這個選項傳遞它：

```js
const response = await fetch("https://example.org/post", {
  method: "POST",
  body: JSON.stringify({ username: "example" }),
  // …
});
```

以下都是可傳遞的物件種類：

- 字串
- {{jsxref("ArrayBuffer")}}
- {{jsxref("TypedArray")}}
- {{jsxref("DataView")}}
- {{domxref("Blob")}}
- {{domxref("File")}}
- {{domxref("URLSearchParams")}}
- {{domxref("FormData")}}
- {{domxref("ReadableStream")}}

其他物件會使用 `toString()` 方法來轉換，舉例來說你可以使用 {{domxref("URLSearchParams")}} 物件來編碼資料（更多資訊請查看 [設定Headers](#設定-headers)）：

```js
const response = await fetch("https://example.org/post", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  // 會自動轉換成 "username=example&password=password"
  body: new URLSearchParams({ username: "example", password: "password" }),
  // …
});
```

注意就像回應主體，請求主體也是 streams，然後請求時會讀取它，因此如果一個請求包含主體，你不能發送兩次：

```js example-bad
const request = new Request("https://example.org/post", {
  method: "POST",
  body: JSON.stringify({ username: "example" }),
});

const response1 = await fetch(request);
console.log(response1.status);

// 拋出錯誤： "Body has already been consumed."
const response2 = await fetch(request);
console.log(response2.status);
```

你需要在發送前先 {{domxref("Request.clone()", "複製請求", "", "nocode")}}：

```js
const request1 = new Request("https://example.org/post", {
  method: "POST",
  body: JSON.stringify({ username: "example" }),
});

const request2 = request1.clone();

const response1 = await fetch(request1);
console.log(response1.status);

const response2 = await fetch(request2);
console.log(response2.status);
```

更多資訊請查看 [Locked and disturbed streams](#locked_and_disturbed_streams)

### 設定 Headers

Headers 會提供伺服器有關請求的相關資訊，舉例來說，在 `POST` 請求中，{{httpheader("Content-Type")}} 這個 header 會告訴伺服器請求主體的格式。

你可以在 `header` 傳入物件實字，包含 `header-名稱：header-值` 的屬性：

```js
const response = await fetch("https://example.org/post", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ username: "example" }),
  // …
});
```

另外，你也可以建立一個 {{domxref("Headers")}} 物件，使用 {{domxref("Headers.append()")}} 就可以新增 header，然後將其放入 `header` 這個選項傳遞：

```js
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const response = await fetch("https://example.org/post", {
  method: "POST",
  headers: myHeaders,
  body: JSON.stringify({ username: "example" }),
  // …
});
```

相較於一般的物件實字，`Headers` 這個物件提供了一些額外的輸入淨化（input sanitization）。舉例來說，header 的名稱會變成小寫，值前後的多餘空白會被去除，也避免一些特定 header 的設定。有一些 headers 是自動被瀏覽器設定的，使用者被禁止設定，如 {{glossary("Forbidden request header", "Forbidden request headers")}}。如果 {{domxref("Request.mode", "mode")}} 選項被設定為 `no-cors`，禁止的 headers 又會更多。

### 在 GET 請求中發送資料

`GET` 請求並沒有主體，但你仍然藉由以查詢字串的方式修改網址，來傳送一些資料，這是相當常用的方法。你可以使用 {{domxref("URLSearchParams")}} 來編碼這個資料，然後將其加在網址後面：

```js
const params = new URLSearchParams();
params.append("username", "example");

// GET 請求會送到 https://example.org/login?username=example
const response = await fetch(`https://example.org/login?${params}`);
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

> [!NOTE]
> There is also a {{domxref("Request.clone","clone()")}} method that creates a copy. Both methods of creating a copy will fail if the body of the original request or response has already been read, but reading the body of a cloned response or request will not cause it to be marked as read in the original.

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

> [!NOTE]
> You may not append or set a `request` guarded Headers' `Content-Length` header. Similarly, inserting `Set-Cookie` into a response header is not allowed: ServiceWorkers are not allowed to set cookies via synthesized responses.

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

> [!NOTE]
> The static method {{domxref("Response.error","error()")}} simply returns an error response. Similarly, {{domxref("Response.redirect","redirect()")}} returns a response resulting in a redirect to a specified URL. These are also only relevant to Service Workers.

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

- [ServiceWorker API](/zh-TW/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/zh-TW/docs/Web/HTTP/Guides/CORS)
- [HTTP](/zh-TW/docs/Web/HTTP)
- [Fetch polyfill](https://github.com/JakeChampion/fetch)
- [Fetch examples on Github](https://github.com/mdn/fetch-examples/)
