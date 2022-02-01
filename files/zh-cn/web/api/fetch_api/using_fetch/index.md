---
title: 使用 Fetch
slug: Web/API/Fetch_API/Using_Fetch
tags:
  - API
  - BODY
  - Fetch
  - HTTP
  - Promise
  - Response
  - request
  - fetch POST & string body
  - 指南
translation_of: Web/API/Fetch_API/Using_Fetch
---
{{DefaultAPISidebar("Fetch API")}}

[Fetch API](/zh-CN/docs/Web/API/Fetch_API) 提供了一个 JavaScript 接口，用于访问和操纵 HTTP 管道的一些具体部分，例如请求和响应。它还提供了一个全局 {{domxref("fetch()")}} 方法，该方法提供了一种简单，合理的方式来跨网络异步获取资源。

这种功能以前是使用 {{domxref("XMLHttpRequest")}} 实现的。Fetch 提供了一个更理想的替代方案，可以很容易地被其他技术使用，例如  {{domxref("Service_Worker_API", "Service Workers")}}。Fetch 还提供了专门的逻辑空间来定义其他与 HTTP 相关的概念，例如 [CORS](/zh-CN/docs/Web/HTTP/CORS) 和 HTTP 的扩展。

请注意，`fetch` 规范与 `jQuery.ajax()` 主要有以下的不同：

- 当接收到一个代表错误的 HTTP 状态码时，从 `fetch()` 返回的 Promise **不会被标记为 reject**，即使响应的 HTTP 状态码是 404 或 500。相反，它会将 Promise 状态标记为 resolve （如果响应的 HTTP 状态码不在 200 - 299 的范围内，则设置 resolve 返回值的 {{domxref("Response/ok", "ok")}} 属性为 false ），仅当网络故障时或请求被阻止时，才会标记为 reject。
- `fetch` **不会发送跨域 cookies**，除非你使用了 _credentials_ 的[初始化选项](/zh-CN/docs/Web/API/fetch#参数)。（自[2018 年 8 月](https://github.com/whatwg/fetch/pull/585)以后，默认的 credentials 政策变更为 `same-origin`。Firefox 也在 61.0b13 版本中进行了修改）

一个基本的 fetch 请求设置起来很简单。看看下面的代码：

```js
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
```

这里我们通过网络获取一个 JSON 文件并将其打印到控制台。最简单的用法是只提供一个参数用来指明想 `fetch()` 到的资源路径，然后返回一个包含响应结果的 promise（一个 {{domxref("Response")}} 对象）。

当然它只是一个 HTTP 响应，而不是真的 JSON。为了获取JSON的内容，我们需要使用 {{domxref("Response.json()", "json()")}} 方法（该方法返回一个将响应 body 解析成 JSON 的 promise）。

> **备注：** {{anch("Body")}} 还有其他相似的方法，用于获取其他类型的内容。

最好使用符合[内容安全策略 (CSP)](/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy)的链接而不是使用直接指向资源地址的方式来进行 fetch 的请求。

### 支持的请求参数

 `fetch()` 接受第二个可选参数，一个可以控制不同配置的 `init` 对象：

参考 {{domxref("fetch()")}}，查看所有可选的配置和更多描述。

```js
// Example POST method implementation:
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData('https://example.com/answer', { answer: 42 })
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
  });
```

注意：`mode: "no-cors"` 仅允许使用一组有限的 HTTP 请求头：

- `Accept`
- `Accept-Language`
- `Content-Language`
- `Content-Type` 允许使用的值为：`application/x-www-form-urlencoded`、`multipart/form-data` 或 `text/plain`

### 发送带凭据的请求

为了让浏览器发送包含凭据的请求（即使是跨域源），要将 `credentials: 'include'` 添加到传递给 `fetch()` 方法的 `init` 对象。

```js
fetch('https://example.com', {
  credentials: 'include'
});
```

> **备注：** 当请求使用 `credentials: 'include'` 时，响应的 `Access-Control-Allow-Origin` 不能使用通配符 "`*`"。在这种情况下，`Access-Control-Allow-Origin` 必须是当前请求的源，在使用 CORS Unblock 插件的情况下请求仍会失败。

> **备注：** 无论怎么设置，浏览器都不应在 _预检请求_ 中发送凭据。了解更多：[跨域资源共享 > 附带身份凭证的请求](/zh-CN/docs/Web/HTTP/CORS#附带身份凭证的请求)

如果你只想在请求URL与调用脚本位于同一起源处时发送凭据，请添加 `credentials: 'same-origin'`。

```js
// The calling script is on the origin 'https://example.com'

fetch('https://example.com', {
  credentials: 'same-origin'
});
```

要改为确保浏览器不在请求中包含凭据，请使用 `credentials: 'omit'`。

```js
fetch('https://example.com', {
  credentials: 'omit'
})
```

### 上传 JSON 数据

使用 {{domxref("fetch()")}} POST JSON数据

```js
const data = { username: 'example' };

fetch('https://example.com/profile', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
```

### 上传文件

可以通过 HTML `<input type="file" />` 元素，{{domxref("FormData.FormData","FormData()")}} 和 {{domxref("fetch()")}} 上传文件。

```js
const formData = new FormData();
const fileField = document.querySelector('input[type="file"]');

formData.append('username', 'abc123');
formData.append('avatar', fileField.files[0]);

fetch('https://example.com/profile/avatar', {
  method: 'PUT',
  body: formData
})
.then(response => response.json())
.then(result => {
  console.log('Success:', result);
})
.catch(error => {
  console.error('Error:', error);
});
```

### 上传多个文件

可以通过 HTML `<input type="file" multiple />` 元素，{{domxref("FormData.FormData","FormData()")}} 和 {{domxref("fetch()")}} 上传文件。

```js
const formData = new FormData();
const photos = document.querySelector('input[type="file"][multiple]');

formData.append('title', 'My Vegas Vacation');
for (let i = 0; i < photos.files.length; i++) {
  formData.append(`photos_${i}`, photos.files[i]);
}

fetch('https://example.com/posts', {
  method: 'POST',
  body: formData,
})
.then(response => response.json())
.then(result => {
  console.log('Success:', result);
})
.catch(error => {
  console.error('Error:', error);
});
```

### 逐行处理文本文件

从响应中读取的分块不是按行分割的，并且是 `Uint8Array` 数组类型（不是字符串类型）。如果你想通过 `fetch()` 获取一个文本文件并逐行处理它，那需要自行处理这些复杂情况。以下示例展示了一种创建行迭代器来处理的方法（简单起见，假设文本是 UTF-8 编码的，且不处理 `fetch()` 的错误）。

```js
async function* makeTextFileLineIterator(fileURL) {
  const utf8Decoder = new TextDecoder('utf-8');
  const response = await fetch(fileURL);
  const reader = response.body.getReader();
  let { value: chunk, done: readerDone } = await reader.read();
  chunk = chunk ? utf8Decoder.decode(chunk) : '';

  const re = /\n|\r|\r\n/gm;
  let startIndex = 0;
  let result;

  for (;;) {
    let result = re.exec(chunk);
    if (!result) {
      if (readerDone) {
        break;
      }
      let remainder = chunk.substr(startIndex);
      ({ value: chunk, done: readerDone } = await reader.read());
      chunk = remainder + (chunk ? utf8Decoder.decode(chunk) : '');
      startIndex = re.lastIndex = 0;
      continue;
    }
    yield chunk.substring(startIndex, result.index);
    startIndex = re.lastIndex;
  }
  if (startIndex < chunk.length) {
    // last line didn't end in a newline char
    yield chunk.substr(startIndex);
  }
}

async function run() {
  for await (let line of makeTextFileLineIterator(urlOfFile)) {
    processLine(line);
  }
}

run();
```

### 检测请求是否成功

如果遇到网络故障或服务端的 CORS 配置错误时，{{domxref("fetch()")}} promise 将会 reject，带上一个 {{jsxref("TypeError")}} 对象。虽然这个情况经常是遇到了权限问题或类似问题——比如 404 不是一个网络故障。想要精确的判断 `fetch()` 是否成功，需要包含 promise resolved 的情况，此时再判断 {{domxref("Response.ok")}} 是否为 true。类似以下代码：

```js
fetch('flowers.jpg')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not OK');
    }
    return response.blob();
  })
  .then(myBlob => {
    myImage.src = URL.createObjectURL(myBlob);
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
```

### 自定义请求对象

除了传给 `fetch()` 一个资源的地址，你还可以通过使用 {{domxref("Request.Request","Request()")}} 构造函数来创建一个 request 对象，然后再作为参数传给 `fetch()`：

```js
const myHeaders = new Headers();

const myRequest = new Request('flowers.jpg', {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default',
});

fetch(myRequest)
  .then(response => response.blob())
  .then(myBlob => {
    myImage.src = URL.createObjectURL(myBlob);
  });
```

`Request()` 和 `fetch()` 接受同样的参数。你甚至可以传入一个已存在的 request 对象来创造一个拷贝：

```js
const anotherRequest = new Request(myRequest, myInit);
```

这个很有用，因为 request 和 response bodies 只能被使用一次（译者注：这里的意思是因为设计成了 stream 的方式，所以它们只能被读取一次）。创建一个拷贝就可以再次使用 request/response 了，当然也可以使用不同的 `init` 参数。创建拷贝必须在读取 body 之前进行，而且读取拷贝的 body 也会将原始请求的 body 标记为已读。

> **备注：** {{domxref("Request.clone","clone()")}} 方法也可以用于创建一个拷贝。它和上述方法一样，如果 request 或 response 的 body 已经被读取过，那么将执行失败。区别在于， `clone()` 出的 body 被读取不会导致原 body 被标记为已读取。

## Headers

使用 {{domxref("Headers")}} 的接口，你可以通过 {{domxref("Headers.Headers","Headers()")}} 构造函数来创建一个你自己的 headers 对象。一个 headers 对象是一个简单的多键值对：

```js
const content = 'Hello World';
const myHeaders = new Headers();
myHeaders.append('Content-Type', 'text/plain');
myHeaders.append('Content-Length', content.length.toString());
myHeaders.append('X-Custom-Header', 'ProcessThisImmediately');
```

也可以传入一个多维数组或者对象字面量：

```js
const myHeaders = new Headers({
  'Content-Type': 'text/plain',
  'Content-Length': content.length.toString(),
  'X-Custom-Header': 'ProcessThisImmediately'
});
```

它的内容可以被获取：

```js
console.log(myHeaders.has('Content-Type')); // true
console.log(myHeaders.has('Set-Cookie')); // false
myHeaders.set('Content-Type', 'text/html');
myHeaders.append('X-Custom-Header', 'AnotherValue');

console.log(myHeaders.get('Content-Length')); // 11
console.log(myHeaders.get('X-Custom-Header')); // ['ProcessThisImmediately', 'AnotherValue']

myHeaders.delete('X-Custom-Header');
console.log(myHeaders.get('X-Custom-Header')); // null
```

虽然一些操作只能在 {{domxref("Service_Worker_API","ServiceWorkers")}} 中使用，但是它提供了更方便的操作 Headers 的 API。

如果使用了一个不合法的 HTTP Header 属性名，那么 Headers 的方法通常都抛出 TypeError 异常。如果不小心写入了一个不可写的属性（{{anch("Guard", "见下方")}}），也会抛出一个 TypeError 异常。除此以外的情况，失败了并不抛出异常。例如：

```js
const myResponse = Response.error();
try {
  myResponse.headers.set('Origin', 'http://mybank.com');
} catch (e) {
  console.log('Cannot pretend to be a bank!');
}
```

最好在在使用之前检查内容类型 `content-type` 是否正确，比如：

```js
fetch(myRequest)
  .then(response => {
     const contentType = response.headers.get('content-type');
     if (!contentType || !contentType.includes('application/json')) {
       throw new TypeError("Oops, we haven't got JSON!");
     }
     return response.json();
  })
  .then(data => {
      /* process your data further */
  })
  .catch(error => console.error(error));
```

### Guard

由于 Headers 可以在 request 中被发送或者在 response 中被接收，并且规定了哪些参数是可写的，Headers 对象有一个特殊的 guard 属性。这个属性没有暴露给 Web，但是它影响到哪些内容可以在 Headers 对象中被操作。

可能的值如下：

- `none`：默认的。
- `request`：从 request 中获得的 headers（{{domxref("Request.headers")}}）只读。
- `request-no-cors`：从不同域（{{domxref("Request.mode")}} `no-cors`）的 request 中获得的 headers 只读。
- `response`：从 response 中获得的 headers（{{domxref("Response.headers")}}）只读。
- `immutable`：在 ServiceWorkers 中最常用的，所有的 headers 都只读。

> **备注：** 你不可以添加或者修改一个 guard 属性是 `request` 的 Request Header 的 `Content-Length` 属性。同样地，插入 `Set-Cookie` 属性到一个 response header 是不允许的，因此，Service Worker 中，不能给合成的 Response 设置 cookie。

## Response 对象

如上所述，{{domxref("Response")}} 实例是在 `fetch()` 处理完 promise 之后返回的。

你会用到的最常见的 response 属性有：

- {{domxref("Response.status")}} — 整数（默认值为 200）为response的状态码。
- {{domxref("Response.statusText")}} — 字符串（默认值为 ""），该值与 HTTP 状态码消息对应。 注意：HTTP/2 [不支持](https://fetch.spec.whatwg.org/#concept-response-status-message)状态消息
- {{domxref("Response.ok")}} — 如上所示，该属性是来检查 response 的状态是否在 200 - 299（包括200 和 299）这个范围内。该属性返回一个布尔值。


它的实例也可用通过 JavaScript 来创建，但只有在 {{domxref("Service_Worker_API", "ServiceWorkers")}} 中使用 {{domxref("FetchEvent.respondWith","respondWith()")}} 方法并提供了一个自定义的 response 来接受 request 时才真正有用：


```js
const myBody = new Blob();

addEventListener('fetch', event => {
  // ServiceWorker intercepting a fetch
  event.respondWith(
    new Response(myBody, {
      headers: { 'Content-Type': 'text/plain' }
    })
  );
});
```

{{domxref("Response.Response","Response()")}} 构造方法接受两个可选参数—— response 的 body 和一个初始化对象（与{{domxref("Request.Request","Request()")}} 所接受的 init 参数类似）。

> **备注：** 静态方法 {{domxref("Response.error","error()")}} 只是返回了错误的 response。与此类似地，{{domxref("Response.redirect","redirect()")}} 只是返回了一个可以重定向至某 URL 的 response。这些也只与 Service Worker 有关。

## Body

不管是请求还是响应都能够包含 body 对象。body 也可以是以下任意类型的实例。

- {{jsxref("ArrayBuffer")}}
- {{domxref("ArrayBufferView")}} (Uint8Array等)
- {{domxref("Blob")}}/File
- string
- {{domxref("URLSearchParams")}}
- {{domxref("FormData")}}

Body 类定义了以下方法（这些方法都被 {{domxref("Request")}} 和 {{domxref("Response")}}所实现）以获取 body 内容。这些方法都会返回一个被解析后的 Promise 对象和数据。

- {{domxref("Request.arrayBuffer()")}} / {{domxref("Response.arrayBuffer()")}}
- {{domxref("Request.blob()")}} / {{domxref("Response.blob()")}}
- {{domxref("Request.formData()")}} / {{domxref("Response.formData()")}}
- {{domxref("Request.json()")}} / {{domxref("Response.json()")}}
- {{domxref("Request.text()")}} / {{domxref("Response.text()")}}

相比于XHR，这些方法让非文本化数据的使用更加简单。

请求体可以由传入 body 参数来进行设置：

```js
const form = new FormData(document.getElementById('login-form'));
fetch('/login', {
  method: 'POST',
  body: form
});
```

request 和 response（包括 `fetch()` 方法）都会试着自动设置 `Content-Type`。如果没有设置 `Content-Type` 值，发送的请求也会自动设值。

## 特性检测

Fetch API 的支持情况，可以通过检测 {{domxref("Headers")}}, {{domxref("Request")}}, {{domxref("Response")}} 或 {{domxref("fetch()")}} 是否在 {{domxref("Window")}} 或 {{domxref("Worker")}} 域中来判断。例如：

```js
if (window.fetch) {
  // run my fetch request here
} else {
  // do something with XMLHttpRequest?
}
```

## Polyfill

如果要在不支持的浏览器中使用 Fetch，可以使用 [Fetch Polyfill](https://github.com/github/fetch)。

## 规范

| 详细说明                      | 状态                     | 注释               |
| ---------------------------- | ------------------------ | ------------------ |
| {{SpecName('Fetch')}} | {{Spec2('Fetch')}} | Initial definition |

## 浏览器兼容性

{{Compat("api.fetch")}}

## 参见

- {{domxref("Service_Worker_API", "ServiceWorker API")}}
- [HTTP access control (CORS)](/zh-CN/docs/Web/HTTP/CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
- [Fetch polyfill](https://github.com/github/fetch)
- [Fetch examples on Github](https://github.com/mdn/fetch-examples/)
