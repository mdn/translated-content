---
title: downloads.download()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/download
---

{{AddonSidebar()}}

{{WebExtAPIRef("downloads")}} API 的 **`download()`** 函数根据给出的 URL 和其他首选项下载一个文件。

- 如果指定的 `url` 使用 HTTP 或者 HTTPS 协议，那么下载请求将会包含当前为该域名所设置的所有 cookie。
- 如果`filename` 和 `saveAs` 都已经指定，那么将会弹出“保存为”对话框，并且默认名称显示为`filename`.

这是一个异步函数，其返回值为 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## 语法

```js
var downloading = browser.downloads.download(
  options, // object
);
```

### 参数

- `options`

  - : 一个 `object` ，用来指定你想要下载的文件和其他想要在下载时设置的首选项。可以包含以下属性：

    - `allowHttpErrors`{{optional_inline}}

      - : 一个 `boolean`，启用后即使遇到 HTTP 错误仍然继续下载。例如，可以使用该标志下载服务错误页面。默认值为`false`. 当设置为以下值时：

        - `false`,遇到 HTTP 错误时下载会被取消。
        - `true`, 即使遇到 HTTP 错误也会继续下载，并且不会弹出 HTTP 服务错误报告。但是，如果下载失败的原因是文件相关，网络相关，用户相关，或者说其他错误，仍然会报错。

    - `body`{{optional_inline}}
      - : 一个 `string`，代表请求的内容。
    - `conflictAction`{{optional_inline}}
      - : 一个字符串，表示如果存在命名冲突时你希望进行的操作，字符串内容所代表的类型由 {{WebExtAPIRef('downloads.FilenameConflictAction')}} 定义 (未指定时默认为 "uniquify" )。
    - `filename`{{optional_inline}}
      - : 一个 `string` ，表示相对默认保存位置的文件路径——这里提供你希望文件保存的位置，和你想要使用的文件名。绝对路径，空路径，以及包含反向引用的路径 (`../`) 会导致错误产生。如果省略，该值将默认为已经提供给下载文件的文件名，并且直接保存到下载文件夹中。
    - `headers`{{optional_inline}}
      - : 如果 URL 使用 HTTP 或者 HTTPS 协议，保存在 `array` 中的一系列 `objects` 表示与请求一起发送的额外 HTTP 请求头。每一个请求头表示为字典对象，包含有关键字 `name` 还有 `value`或`binaryValue`中的一个。无法指定 `XMLHttpRequest`和 `fetch`禁止的请求头，但是 Firefox 70 之后允许使用`Referer`请求头。尝试使用被禁止的请求头会产生一个错误。
    - `incognito`{{optional_inline}}
      - : 一个 `boolean`：如果被设置为 true，那么这次下载会建立一个隐私浏览会话。这意味着它只会出现在当前打开的任意隐私窗口的下载管理器。
    - `method`{{optional_inline}}
      - : 一个 `string`，表示`url`使用 HTTP\[S] 协议时使用的 HTTP 方法。其值可能是 "GET" 或 "POST"。
    - `saveAs`{{optional_inline}}

      - : 一个`boolean` 指定是 (`true`) 否 (`false`) 提供一个文件选择对话框允许用户选择文件名。.

        如果该选项省略，浏览器会根据用户对于该行为的偏好设置决定是否提供一个文件选择对话框 (在火狐这项设置标签在 about:preferences 里为"每次都问您要存到哪" ，或者 about:config 里 `browser.download.useDownloadDir` )。

        > **备注：** 如果 `saveAs` 被设置为 `true`，Firefox for Android 将会引发一个错误。当 `saveAs` 为 `false` 或空时这个参数会被忽略。

    - `url`
      - : 一个 `string`，表示需要下载的链接地址。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise). 如果成功开始下载，promise 会被新创建的{{WebExtAPIRef("downloads.DownloadItem")}} 的 `id` 填充。否则 promise 会被拒绝并产生一条{{WebExtAPIRef("downloads.InterruptReason")}}错误信息。

如果你使用 [URL.createObjectURL()](/zh-CN/docs/Web/API/URL/createObjectURL) 下载由 JavaScript 创建的数据并且之后想要 (使用 [revokeObjectURL](/zh-CN/docs/Web/API/URL/revokeObjectURL)) 撤销对象链接 (并且强烈推荐这么做)，你必须在下载完成后再这么做。监听 [downloads.onChanged](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/downloads/onChanged) 事件来判断是否下载完成。

## 浏览器兼容性

{{Compat}}

## 示例

下面这段代码尝试下载一个 example 文件，同时指定文件名和保存位置，还有 `uniquify` `conflictAction` 选项。

```js
function onStartedDownload(id) {
  console.log(`Started downloading: ${id}`);
}

function onFailed(error) {
  console.log(`Download failed: ${error}`);
}

var downloadUrl = "https://example.org/image.png";

var downloading = browser.downloads.download({
  url: downloadUrl,
  filename: "my-image-again.png",
  conflictAction: "uniquify",
});

downloading.then(onStartedDownload, onFailed);
```

{{WebExtExamples}}

> **备注：** 这个 API 基于 Chromium 的 [`chrome.downloads`](https://developer.chrome.com/extensions/downloads#method-download) API.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->
