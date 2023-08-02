---
title: 拦截 HTTP 请求
slug: Mozilla/Add-ons/WebExtensions/Intercept_HTTP_requests
---

{{AddonSidebar}}

使用 {{WebExtAPIRef("webRequest")}} API 可以拦截 HTTP 请求。该 API 允许开发者植入一个侦听器用以侦听各个阶段的 HTTP 请求。在侦听器中，你能：

- 获取请求及其返回的 header 和 body
- 取消或重定向请求
- 修改请求及其返回的 header

本文将探究`webRequest`模型的三种用法：

- 登陆请求的构造
- 重定向请求
- 修改请求的 header

## 记录请求的 URL

新建一个名为 `requests` 的目录，在其中新建一个名为 `manifest.json` 的文件，文件包含如下 内容：

```json
{
  "description": "Demonstrating webRequests",
  "manifest_version": 2,
  "name": "webRequest-demo",
  "version": "1.0",

  "permissions": ["webRequest", "<all_urls>"],

  "background": {
    "scripts": ["background.js"]
  }
}
```

接着新加一个名为 `background.js` 的文件，包含如下内容：

```js
function logURL(requestDetails) {
  console.log(`Loading: ${requestDetails.url}`);
}

browser.webRequest.onBeforeRequest.addListener(logURL, {
  urls: ["<all_urls>"],
});
```

这里我们在请求开始之前用 {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}} 调用 `logURL()`函数。`logURL()` 函数 抓取从事件对象发出的请求中的 URL，然后将其打印到浏览器的控制台窗口中。[参数](/zh-CN/Add-ons/WebExtensions/Match_patterns) `{urls: ["<all_urls>"]}` 表示拦截发往所有 URL 的 HTTP 请求。

测试方法是：[安装该扩展](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)，[打开浏览器的控制台](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/)，然后开启某个网页即可。在浏览器控制台中就能见到浏览器请求所有资源的 URL：

![Browser console menu : URLs from extension](browser_console_url_from_extension.png)

## 重定向请求

现在让我们用 `webRequest` 来重定向 HTTP 请求。首先将 manifest.json 文件内容替换如下：

```json
{
  "description": "Demonstrating webRequests",
  "manifest_version": 2,
  "name": "webRequest-demo",
  "version": "1.0",

  "permissions": [
    "webRequest",
    "webRequestBlocking",
    "https://developer.mozilla.org/"
  ],

  "background": {
    "scripts": ["background.js"]
  }
}
```

这里唯一的变化是[`权限`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)里新增了 `webRequestBlocking` 项。新增这个权限是为了随时都能修改请求。

下一步替换 `"background.js"` 文件内容如下：

```js
let pattern = "https://developer.mozilla.org/*";
const targetUrl =
  "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension/frog.jpg";

function redirect(requestDetails) {
  console.log(`Redirecting: ${requestDetails.url}`);
  if (requestDetails.url === targetUrl) {
    return;
  }
  return {
    redirectUrl: targetUrl,
  };
}

browser.webRequest.onBeforeRequest.addListener(
  redirect,
  { urls: [pattern], types: ["image"] },
  ["blocking"],
);
```

此外在请求构造出来之前我们用{{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}}事件侦听器来实现 URL 替换。侦听器将会用`redirectUrl`指定的内容替换原有的 URL。

这次我们不拦截所有的请求：`{urls:[pattern], types:["image"]}` 选项告诉浏览器必须同时满足如下两点的请求才会被拦截：（1）在 `https://developer.mozilla.org/` 之下的 URL；（2）图片资源。该功能的更多说明参见{{WebExtAPIRef("webRequest.RequestFilter")}}。

刚才我们忽略了 `blocking` 选项。要修改请求 就要用到 `blocking` 选项，该选项让侦听器函数阻塞住发往网络请求，浏览器将会等待侦听器返回才会继续处理。阅读{{WebExtAPIRef("webRequest.onBeforeRequest")}}以了解更多有关 `blocking` 的细节。

测试时打开 MDN 上的一个包含诸多图片的页面（如[这个列出了用户接口组件的页面](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/user_interface)），重新加载[这个扩展](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/#reloading_a_temporary_add-on)，然后重新加载这个页面。你会看到类似这样的内容：

![Images on a page replaced with a frog image](beastify_by_redirect.png)

## 修改请求报头

最后我们将使用 `webRequest` 修改请求报头。在这个例子中我们将修改 `User-Agent` 报头，使得在浏览 `http://useragentstring.com/` 网站下的网页时可以识别浏览器 Opera 12.16。

"manifest.json" 可以与上一个例子相同。

修改"background.js" 如下：

```js
let targetPage = "http://useragentstring.com/*";

let ua =
  "Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16";

function rewriteUserAgentHeader(e) {
  e.requestHeaders.forEach((header) => {
    if (header.name.toLowerCase() === "user-agent") {
      header.value = ua;
    }
  });
  return { requestHeaders: e.requestHeaders };
}

browser.webRequest.onBeforeSendHeaders.addListener(
  rewriteUserAgentHeader,
  { urls: [targetPage] },
  ["blocking", "requestHeaders"],
);
```

在请求报头被发送前，我们使用 {{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}} 事件监听器来运行一个函数。

只有在向匹配的 URL 格式的网页发送请求时，这个监听函数才会运行。还需注意的是，我们再次使用了`"blocking"`选项。我们还使用了`"requestHeaders"`选项，使监听器可以传递我们希望的请求报头数组。了解更多{{WebExtAPIRef("webRequest.onBeforeSendHeaders")}}的信息。

侦听函数在请求报头数组中寻找 "User-Agent" 报头，用`ua`变量替换它的值，然后返回修改后的报头数组。现在这个修改后的数组会被发送到服务器。

要测试它，先打开 [useragentstring.com](http://useragentstring.com/) 网址，检查标识浏览器是否为火狐浏览器。然后加载这个扩展，刷新网址，再次检查标识浏览器，你会发现火狐浏览器被定义为 Opera 了：

![useragentstring.com showing details of the modified user agent string](modified_request_header.png)

## 了解更多

学习你能使用的所有`webRequest` API，查看 [reference documentation](/zh-CN/Add-ons/WebExtensions/API/WebRequest)。
