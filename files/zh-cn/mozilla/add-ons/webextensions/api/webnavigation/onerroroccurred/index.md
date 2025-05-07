---
title: webNavigation.onErrorOccurred
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/onErrorOccurred
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

当发生错误并且导航被中止时触发此事件。这可能是由于网络错误或用户中止导航导致的。

## 语法

```js-nolint
browser.webNavigation.onErrorOccurred.addListener(
  listener,                   // 函数
  filter                      // 可选对象
)
browser.webNavigation.onErrorOccurred.removeListener(listener)
browser.webNavigation.onErrorOccurred.hasListener(listener)
```

事件有三个函数：

- `addListener(listener)`

  `addListener(listener, filter)`

  - : 为此事件添加一个监听器。

- `removeListener(listener)`
  - : 停止监听此事件。`listener` 参数是要移除的监听器。
- `hasListener(listener)`
  - : 检查 `listener` 是否已注册为此事件的监听器。如果正在监听，则返回 `true`，否则返回 `false`。

## addListener 语法

### 参数

- `listener`

  - : 此事件发生时调用的函数。

    `listener` 函数会接收以下参数：

    - `details`

      - : [`object`](#details)。有关导航事件的详细信息。**`details`** 包含以下属性：

        - `tabId`
          - : `integer`。发生导航的标签页的 ID。
        - `url`
          - : `string`。给定框架正在导航到的 URL。
        - `processId` {{optional_inline}} {{deprecated_inline}}
          - : `integer`。现代浏览器中不设置此值。它曾用于表示运行此标签页的渲染器的进程 ID。
        - `frameId`

          - : `integer`。发生导航的框架。

            `0` 表示导航发生在标签页的顶级浏览上下文中，而不是嵌套的 {{HTMLElement("iframe")}} 中。

            正值表示导航发生在嵌套的 iframe 中。

            框架 ID 对于给定的标签页和进程是唯一的。

        - `timeStamp`
          - : `number`。错误发生的时间，以 [自纪元以来的毫秒数](https://en.wikipedia.org/wiki/Unix_time) 表示。
        - `error`
          - : `string`。错误代码。这是一个内部错误代码，不保证在不同浏览器之间保持一致或不变。

- `filter` {{optional_inline}}

  - : `object`。包含单个属性 `url` 的对象，该属性是 {{WebExtAPIRef("events.UrlFilter")}} 对象的 `Array`。

    如果包含此参数，则事件仅在过渡到与数组中至少一个 `UrlFilter` 匹配的 URL 时触发。

    如果省略此参数，则事件会为所有过渡触发。

## 浏览器兼容性

{{Compat}}

## 示例

记录 `onErrorOccurred` 的目标 URL，如果目标 URL 的 `hostname` 包含 "example.com" 或以 "developer" 开头。

```js
const filter = {
  url: [{ hostContains: "example.com" }, { hostPrefix: "developer" }],
};

function logOnErrorOccurred(details) {
  console.log(`onErrorOccurred: ${details.url}`);
  console.log(details.error);
}

browser.webNavigation.onErrorOccurred.addListener(logOnErrorOccurred, filter);
```

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.webNavigation`](https://developer.chrome.google.cn/docs/extensions/reference/api/webNavigation#event-onBeforeNavigate) API。该文档衍生自 Chromium 代码中的 [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json)。

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
