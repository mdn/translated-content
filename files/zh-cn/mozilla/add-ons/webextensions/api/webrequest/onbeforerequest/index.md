---
标题: webRequest.onBeforeRequest
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeRequest
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

此事件在请求即将发出且尚未提供标头时触发。如果您想取消或重定向请求，这是一个很好的监听位置。

要取消或重定向请求，首先在传递给 `addListener()` 的 `extraInfoSpec` 数组参数中包含 `"blocking"`。然后，在监听器函数中返回一个 {{WebExtAPIRef("webRequest.BlockingResponse", "BlockingResponse")}} 对象，并设置适当的属性：

- 要取消请求，请包含一个值为 `true` 的 `cancel` 属性。
- 要重定向请求，请包含一个值为要重定向的 URL 的 `redirectUrl` 属性。

如果扩展程序想将公共（例如 HTTPS）URL 重定向到[扩展页面](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages)，扩展程序的 manifest.json 文件必须包含一个 [web_accessible_resources](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) 键，该键列出了扩展页面的 URL。

当多个阻塞处理程序修改请求时，仅一个修改集会生效。重定向和取消具有相同的优先级。因此，如果您取消了一个请求，您可能会看到另一个具有相同 `requestId` 的请求再次出现，如果另一个阻塞处理程序重定向了该请求。

从 Firefox 52 开始，监听器可以返回一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 而不是返回 `BlockingResponse`。此 Promise 会解析为一个 `BlockingResponse`，从而使监听器能够异步处理请求。

如果您使用 `"blocking"`，则必须在 manifest.json 中具有 ["webRequestBlocking" API 权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_权限)。

## 语法

```js-nolint
browser.webRequest.onBeforeRequest.addListener(
  listener,             // function
  filter,               //  object
  extraInfoSpec         //  optional array of strings
)
browser.webRequest.onBeforeRequest.removeListener(listener)
browser.webRequest.onBeforeRequest.hasListener(listener)
```

事件有三个函数：

- `addListener(listener, filter, extraInfoSpec)`
  - : 为此事件添加一个监听器。
- `removeListener(listener)`
  - : 停止监听此事件。`listener` 参数是要移除的监听器。
- `hasListener(listener)`
  - : 检查 `listener` 是否已注册到此事件。如果正在监听，则返回 `true`，否则返回 `false`。

## addListener 语法

### 参数

- `listener`

  - : 事件触发时调用的函数。该函数接收以下参数：

    - `details`
      - : `object`。有关请求的详细信息。有关更多信息，请参阅 [details](#details_2) 部分。

    返回值：{{WebExtAPIRef('webRequest.BlockingResponse')}}。如果在 `extraInfoSpec` 参数中指定了 `"blocking"`，事件监听器应返回一个 `BlockingResponse` 对象，并可以设置其 `cancel` 或 `redirectUrl` 属性。从 Firefox 52 开始，监听器可以返回一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，该 Promise 会解析为一个 `BlockingResponse`，从而使监听器能够异步处理请求。

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}。限制发送到此监听器的事件的过滤器。
- `extraInfoSpec` {{optional_inline}}

  - : `array` of `string`。事件的额外选项。您可以传递以下任意值：

    - `"blocking"`：使请求同步，以便您可以取消或重定向请求
    - `"requestBody"`：在传递给监听器的 `details` 对象中包含 `requestBody`

## 附加对象

### details

- `cookieStoreId`
  - : `string`。如果请求来自在上下文标识中打开的标签页，则为上下文标识的 Cookie 存储 ID。有关更多信息，请参阅 [使用上下文标识](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities)。
- `documentUrl`
  - : `string`。将加载资源的文档的 URL。例如，如果 "https\://example.com" 的网页包含一个图像或 iframe，则该图像或 iframe 的 `documentUrl` 将为 "https\://example.com"。对于顶级文档，`documentUrl` 未定义。
- `frameAncestors`

  - : `array`。包含从框架层次结构中的每个文档到顶级文档的信息。数组中的第一个元素包含有关正在请求的文档的直接父级的信息，最后一个元素包含有关顶级文档的信息。如果加载实际上是针对顶级文档的，则此数组为空。

    - `url`
      - : `string`。文档加载的 URL。
    - `frameId`
      - : `integer`。文档的 `frameId`。`details.frameAncestors[0].frameId` 与 `details.parentFrameId` 相同。

- `frameId`
  - : `integer`。如果请求发生在主框架中，则为零；如果请求发生在子框架中，则为子框架的 ID。如果加载的是（子）框架的文档（`type` 是 `main_frame` 或 `sub_frame`），`frameId` 表示此框架的 ID，而不是外部框架的 ID。框架 ID 在标签页内是唯一的。
- `incognito`
  - : `boolean`。请求是否来自隐私浏览窗口。
- `method`
  - : `string`。标准 HTTP 方法，例如 "GET" 或 "POST"。
- `originUrl`

  - : `string`。触发请求的资源的 URL。例如，如果 "https\://example.com" 包含一个链接，用户点击该链接，则生成的请求的 `originUrl` 为 "https\://example.com"。

    `originUrl` 通常但不总是与 `documentUrl` 相同。例如，如果页面包含一个 iframe，iframe 中包含一个链接，该链接加载一个新文档到 iframe 中，则生成的请求的 `documentUrl` 将是 iframe 的父文档，但 `originUrl` 将是包含该链接的 iframe 中的文档的 URL。

- `parentFrameId`
  - : `integer`。包含发送请求的框架的框架的 ID。如果没有父框架，则设置为 -1。
- `proxyInfo`

  - : `object`。此属性仅在请求通过代理时存在。它包含以下属性：

    - `host`
      - : `string`。代理服务器的主机名。
    - `port`
      - : `integer`。代理服务器的端口号。
    - `type`

      - : `string`。代理服务器的类型。可能的值包括：

        - "http"：HTTP 代理（或 HTTPS 的 SSL CONNECT）
        - "https"：通过 TLS 连接到代理的 HTTP 代理
        - "socks"：SOCKS v5 代理
        - "socks4"：SOCKS v4 代理
        - "direct"：无代理
        - "unknown"：未知代理

    - `username`
      - : `string`。代理服务的用户名。
    - `proxyDNS`
      - : `boolean`。如果代理将根据提供的主机名执行域名解析，则为 true，这意味着客户端不应执行自己的 DNS 查找。
    - `failoverTimeout`
      - : `integer`。故障切换超时时间（以秒为单位）。如果代理连接失败，在此期间不会再次使用该代理。

- `requestBody` {{optional_inline}}

  - : `object`。包含 HTTP 请求体数据。仅当 `extraInfoSpec` 包含 "requestBody" 时提供。

    - `error` {{optional_inline}}
      - : `string`。如果在获取请求体数据时遇到任何错误，则设置此值。
    - `formData` {{optional_inline}}

      - : `object`。如果请求方法是 POST，并且请求体是以 UTF-8 编码的键值对序列（"multipart/form-data" 或 "application/x-www-form-urlencoded"），则此对象存在。

        它是一个字典，其中每个键包含该键的所有值的列表。例如：`{'key': ['value1', 'value2']}`。如果数据是其他媒体类型，或者格式错误，则此对象不存在。

    - `raw` {{optional_inline}}
      - : `array` of `{{WebExtAPIRef('webRequest.UploadData')}}`。如果请求方法是 PUT 或 POST，并且请求体未在 `formData` 中解析，则此数组包含未解析的请求体元素。

- `requestId`
  - : `string`。请求的 ID。请求 ID 在浏览器会话中是唯一的，因此您可以使用它来关联与同一请求相关的不同事件。
- `tabId`
  - : `integer`。请求发生的标签页的 ID。如果请求与标签页无关，则设置为 -1。
- `thirdParty`
  - : `boolean`。指示请求及其内容窗口层次结构是否为第三方。
- `timeStamp`
  - : `number`。此事件触发的时间，以[自纪元以来的毫秒数](https://en.wikipedia.org/wiki/Unix_time)表示。
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}。请求的资源类型，例如 "image"、"script"、"stylesheet"。
- `url`
  - : `string`。请求的目标。
- `urlClassification`

  - : `object`。如果请求被 [Firefox 跟踪保护](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop)分类，则与请求相关的跟踪类型。这是一个包含以下属性的对象：

    - `firstParty`
      - : `array` of `strings`。请求的第一方的分类标志。
    - `thirdParty`
      - : `array` of `strings`。请求或其窗口层次结构的第三方的分类标志。

    分类标志包括：

    - `fingerprinting` 和 `fingerprinting_content`：指示请求涉及指纹识别（"发现的指纹识别来源"）。
      - `fingerprinting` 表示域名属于指纹识别和跟踪类别。此类域名的示例包括希望将配置文件与访问用户关联的广告商。
      - `fingerprinting_content` 表示域名属于指纹识别类别但不属于跟踪类别。此类域名的示例包括使用指纹识别技术识别访问用户以防止欺诈的支付提供商。
    - `cryptomining` 和 `cryptomining_content`：类似于指纹识别类别，但用于加密挖矿资源。
    - `tracking`，`tracking_ad`，`tracking_analytics`，`tracking_social` 和 `tracking_content`：指示请求涉及跟踪。`tracking` 是任何通用跟踪请求，`ad`、`analytics`、`social` 和 `content` 后缀标识跟踪器的类型。
    - `emailtracking` 和 `emailtracking_content`：指示请求涉及电子邮件跟踪。
    - `any_basic_tracking`：一个元标志，结合了跟踪和指纹识别标志，不包括 `tracking_content` 和 `fingerprinting_content`。
    - `any_strict_tracking`：一个元标志，结合了所有跟踪和指纹识别标志。
    - `any_social_tracking`：一个元标志，结合了所有社交跟踪标志。

    您可以在 [disconnect.me](https://disconnect.me/trackerprotection#categories_of_trackers) 网站上找到有关跟踪器类型的更多信息。`content` 后缀表示跟踪和提供内容的跟踪器。阻止它们可以保护用户，但可能导致网站中断或某些元素未显示。

## 浏览器兼容性

{{Compat}}

### 使用 BlockingResponse 时的 DNS 解析顺序

关于使用 BlockingResponse 和 OnBeforeRequest 时的 DNS 解析顺序：在 HTTP 通道中，带有阻塞响应的 onBeforeRequest 确实发生在 DNS 解析之前，也发生在推测连接之前。对于其他通道，推测连接可能会导致 DNS 请求在 onBeforeRequest 之前发生。此顺序不是扩展开发者应该依赖的，因为它可能因浏览器、浏览器版本以及请求通道的不同而有所变化。请参阅 [Mozilla 开发者在 BugZilla 上提供的关于 DNS 解析顺序的澄清](https://bugzil.la/1466099)。

## 示例

此代码记录与 [<all_urls>](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Match_patterns#all_urls) 模式匹配的每个资源请求的 URL：

```js
function logURL(requestDetails) {
  console.log(`加载中: ${requestDetails.url}`);
}

browser.webRequest.onBeforeRequest.addListener(logURL, {
  urls: ["<all_urls>"],
});
```

此代码取消对 "https://developer.mozilla.org/" 下的 URL 的图像请求（要查看效果，请访问包含图像的 MDN 页面，例如 [webRequest](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/webRequest)）：

```js
// 匹配要重定向的 URL 的模式
let pattern = "https://developer.mozilla.org/*";

// cancel 函数返回一个对象
// 该对象包含一个 `cancel` 属性，其值为 `true`
function cancel(requestDetails) {
  console.log(`取消: ${requestDetails.url}`);
  return { cancel: true };
}

// 添加监听器，
// 传递过滤器参数和 "blocking"
browser.webRequest.onBeforeRequest.addListener(
  cancel,
  { urls: [pattern], types: ["image"] },
  ["blocking"],
);
```

此代码通过重定向替换对 "https://developer.mozilla.org/" 下的 URL 的所有网络图像请求（要查看效果，请访问包含图像的 MDN 页面，例如 [webRequest](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/webRequest)）：

```js
// 匹配要重定向的 URL 的模式
let pattern = "https://developer.mozilla.org/*";

// redirect 函数
// 返回一个包含 `redirectURL` 属性的对象
// 该属性设置为新的 URL
function redirect(requestDetails) {
  console.log(`重定向: ${requestDetails.url}`);
  return {
    redirectUrl:
      "https://38.media.tumblr.com/tumblr_ldbj01lZiP1qe0eclo1_500.gif",
  };
}

// 添加监听器，
// 传递过滤器参数和 "blocking"
browser.webRequest.onBeforeRequest.addListener(
  redirect,
  { urls: [pattern], types: ["image"] },
  ["blocking"],
);
```

此代码与前一个示例完全相同，只是监听器异步处理请求。它返回一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，设置一个计时器，并在计时器到期时解析为重定向 URL：

```js
// 匹配要重定向的 URL 的模式
let pattern = "https://developer.mozilla.org/*";

// 我们将重定向到的 URL
let redirectUrl =
  "https://38.media.tumblr.com/tumblr_ldbj01lZiP1qe0eclo1_500.gif";

// redirect 函数返回一个 Promise
// 该 Promise 在计时器到期时解析为重定向 URL
function redirectAsync(requestDetails) {
  console.log(`异步重定向: ${requestDetails.url}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ redirectUrl });
    }, 2000);
  });
}

// 添加监听器，
// 传递过滤器参数和 "blocking"
browser.webRequest.onBeforeRequest.addListener(
  redirectAsync,
  { urls: [pattern], types: ["image"] },
  ["blocking"],
);
```

另一个示例，将所有图像重定向到一个数据 URL：

```js
let pattern = "https://developer.mozilla.org/*";

let image = `
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <rect style="stroke-width: 10; stroke: #666;" width="100%" height="100%" fill="#d4d0c8" />
    <text transform="translate(0, 9)" x="50%" y="50%" width="100%" fill="#666" height="100%" style="text-anchor: middle; font: bold 10pt 'Segoe UI', Arial, Helvetica, Sans-serif;">已阻止</text>
  </svg>
`;

function listener(details) {
  const redirectUrl = `data:image/svg+xml,${encodeURIComponent(image)}`;
  return { redirectUrl };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: [pattern], types: ["image"] },
  ["blocking"],
);
```

这是另一个版本：

```js
function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const pattern = "https://developer.mozilla.org/*";

let image = `
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <rect width="100%" height="100%" fill="${randomColor()}"/>
  </svg>
`;

function listener(details) {
  const redirectUrl = `data:image/svg+xml,${encodeURIComponent(image)}`;
  return { redirectUrl };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: [pattern], types: ["image"] },
  ["blocking"],
);
```

{{WebExtExamples}}
