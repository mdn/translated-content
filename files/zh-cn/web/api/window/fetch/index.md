---
title: Window：fetch() 方法
slug: Web/API/Window/fetch
l10n:
  sourceCommit: 80d3325431bf238f06c986c2dc78944ac5227372
---

{{APIRef("Fetch API")}}

{{domxref("Window")}} 接口的 **`fetch()`** 方法用于发起获取资源的请求，它会返回一个会在请求响应后兑现的 promise。

该 promise 会兑现一个表示请求响应的 {{domxref("Response")}} 对象。

当请求失败（例如，因为请求 URL 的格式错误或网络错误）时，`fetch()` 的 promise 才会被拒绝。`fetch()` 的 promise *不会*因为服务器响应表示错误的 HTTP 状态码（`404`、`504`，等）而被拒绝。因此，`then()` 处理器必须检查 {{domxref("Response.ok")}} 和/或 {{domxref("Response.status")}} 属性。

`fetch()` 方法由[内容安全策略](/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy)的 `connect-src` 指令（而不是它查询的资源的指令）控制。

> **备注：** `fetch()` 方法的参数与 {{domxref("Request.Request","Request()")}} 构造函数是一样的。

## 语法

```js-nolint
fetch(resource)
fetch(resource, options)
```

### 参数

- `resource`

  - : 定义你想要获取的资源。可以是：

    - 一个字符串或任何其他具有{{Glossary("stringifier", "字符串化器")}}的对象（包括 {{domxref("URL")}} 对象），提供你想要获取的资源的 URL。URL 可以是相对于基础 URL 的，基础 URL 是窗口上下文中文档的 {{domxref("Node.baseURI", "baseURI")}} 或者 worker 上下文中的 {{domxref("WorkerGlobalScope.location")}}。
    - 一个 {{domxref("Request")}} 对象。

- `options` {{optional_inline}}
  - : 一个包含你想要应用到请求上的任何自定义设置的 {{domxref("RequestInit")}} 对象。

### 返回值

一个 {{jsxref("Promise")}}，会兑现 {{domxref("Response")}} 对象。

### 异常

- `AbortError` {{domxref("DOMException")}}
  - : 请求被 {{domxref("AbortController")}} 的 {{domxref("AbortController.abort", "abort()")}} 方法调用所终止。
- `NotAllowedError` {{domxref("DOMException")}}
  - : 如果 [Topics API](/zh-CN/docs/Web/API/Topics_API) 的使用被 {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} [权限策略](/zh-CN/docs/Web/HTTP/Permissions_Policy)明确禁止，且 `fetch()` 请求中包含 `browsingTopics: true`，则会抛出此异常。
- {{jsxref("TypeError")}}
  - : 可以由以下原因引起：

<table>
  <thead>
    <tr>
      <th scope="col">原因</th>
      <th scope="col">失败的示例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>被权限策略阻止</td>
      <td><a href="/zh-CN/docs/Web/API/Attribution_Reporting_API">Attribution Reporting API</a> 的使用被 <a href="/zh-CN/docs/Web/HTTP/Headers/Permissions-Policy/attribution-reporting"><code>attribution-reporting</code></a> {{httpheader("Permissions-Policy")}} 所阻止，而 <code>fetch()</code> 请求又指定了 <code>attributionReporting</code>。</td>
    </tr>
    <tr>
      <td>无效的标头名称。</td>
      <td>
        <pre>
// “C ontent-Type”中的空格
const headers = {
  'C ontent-Type': 'text/xml',
  'Breaking-Bad': '<3',
};
fetch('https://example.com/', { headers });
        </pre>
      </td>
    </tr>
    <tr>
      <td>
        无效的标头值。标头对象必须明确包含两个元素。
      </td>
      <td>
        <pre>
const headers = [
  ['Content-Type', 'text/html', 'extra'],
  ['Accept'],
];
fetch('https://example.com/', { headers });
        </pre>
      </td>
    </tr>
    <tr>
      <td>
        无效的 URL 或方案（scheme），或使用 fetch 不支持的方案，或使用不支持特定请求模式的方案。
      </td>
      <td>
        <pre>
fetch('blob://example.com/', { mode: 'cors' });
        </pre>
      </td>
    </tr>
      <td>URL 中包含凭据。</td>
      <td>
        <pre>
fetch('https://user:password@example.com/');
        </pre>
      </td>
    <tr>
      <td>无效的来源（referrer）URL。</td>
      <td>
        <pre>
fetch('https://example.com/', { referrer: './abc\u0000df' });
        </pre>
      </td>
    </tr>
    <tr>
      <td>无效的模式（<code>navigate</code> 和 <code>websocket</code>）。</td>
      <td>
        <pre>
fetch('https://example.com/', { mode: 'navigate' });
        </pre>
      </td>
    </tr>
    <tr>
      <td>
        如果请求的缓存模式是“only-if-cached”，而请求模式不是“same-origin”。
      </td>
      <td>
        <pre>
fetch('https://example.com/', {
  cache: 'only-if-cached',
  mode: 'no-cors',
});
        </pre>
      </td>
    </tr>
    <tr>
      <td>
        如果请求方法是无效的名称标记或被禁止的标头之一（<code>'CONNECT'</code>、<code>'TRACE'</code> 或 <code>'TRACK'</code>）。
      </td>
      <td>
        <pre>
fetch('https://example.com/', { method: 'CONNECT' });
        </pre>
      </td>
    </tr>
    <tr>
      <td>
        如果请求的模式是“no-cors”，而请求方法不是列入 CORS 白名单的方法（<code>'GET'</code>、<code>'HEAD'</code> 或 <code>'POST'</code>）。
      </td>
      <td>
        <pre>
fetch('https://example.com/', {
  method: 'CONNECT',
  mode: 'no-cors',
});
        </pre>
      </td>
    </tr>
    <tr>
      <td>
        如果请求方法是 <code>'GET'</code> 或 <code>'HEAD'</code>，而请求体不是 <code>null</code> 或 <code>undefined</code>。
      </td>
      <td>
        <pre>
fetch('https://example.com/', {
  method: 'GET',
  body: new FormData(),
});
        </pre>
      </td>
    </tr>
    <tr>
      <td>如果 fetch 抛出了网络错误。</td>
      <td></td>
    </tr>
  </tbody>
</table>

## 示例

在 [Fetch 请求示例](https://github.com/mdn/fetch-examples/tree/gh-pages/fetch-request)（查看 [Fetch 请求在线示例](https://mdn.github.io/fetch-examples/fetch-request/)）中，我们使用对应的构造函数创建了一个新的 {{domxref("Request")}} 对象，然后调用 `fetch()` 获取资源。因为我们是在请求一个图片，为了解析正常，我们对响应执行 {{domxref("Body.blob")}} 来设置相应的 MIME 类型。然后创建一个 Object URL，并在 {{htmlelement("img")}} 元素中把它显示出来。

```js
const myImage = document.querySelector("img");

const myRequest = new Request("flowers.jpg");

window
  .fetch(myRequest)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP 错误！状态：${response.status}`);
    }

    return response.blob();
  })
  .then((response) => {
    myImage.src = URL.createObjectURL(response);
  });
```

在[带有初始化的 Fetch 请求示例](https://github.com/mdn/fetch-examples/tree/gh-pages/fetch-with-init-then-request)（查看[带有初始化的 Fetch 请求在线示例](https://mdn.github.io/fetch-examples/fetch-with-init-then-request/)）中，我们做同样的操作，除了在调用 `fetch()` 时传入了 _options_ 对象。在本例中，我们可以设置 {{HTTPHeader("Cache-Control")}} 值来指示我们可以接受什么类型的缓存响应：

```js
const myImage = document.querySelector("img");
const reqHeaders = new Headers();

// 除非缓存的响应超过一周，否则都可以接受
reqHeaders.set("Cache-Control", "max-age=604800");

const options = {
  headers: reqHeaders,
};

// 将带有标头的“options”对象作为 init 来传递。
const req = new Request("flowers.jpg", options);

fetch(req).then((response) => {
  // ...
});
```

你也可以传入同样的 `init` 对象到 `Request` 构造函数，来实现同样的效果：

```js
const req = new Request("flowers.jpg", options);
```

`init` 对象中的 `headers` 也可以是一个对象字面量：

```js
const options = {
  headers: {
    "Cache-Control": "max-age=60480",
  },
};

const req = new Request("flowers.jpg", options);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("WorkerGlobalScope.fetch()")}}
- [Fetch API](/zh-CN/docs/Web/API/Fetch_API)
- [ServiceWorker API](/zh-CN/docs/Web/API/Service_Worker_API)
- [HTTP 访问控制（CORS）](/zh-CN/docs/Web/HTTP/CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
