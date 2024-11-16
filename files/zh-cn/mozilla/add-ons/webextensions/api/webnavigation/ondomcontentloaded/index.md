---
title: webNavigation.onDOMContentLoaded
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/onDOMContentLoaded
l10n:
  sourceCommit: 5ff95690a38837afa6a80d00c31adc3ea0217a6e
---

{{AddonSidebar}}

在页面中触发 [DOMContentLoaded](/zh-CN/docs/Web/API/Document/DOMContentLoaded_event) 事件时触发。此时，文档被加载和解析，并且 DOM 被完全构造，但链接的资源（例如图像、样式表和子框架）可能尚未被加载。

## 语法

```js-nolint
browser.webNavigation.onDOMContentLoaded.addListener(
  listener,                   // 函数
  filter                      // 可选对象
)
browser.webNavigation.onDOMContentLoaded.removeListener(listener)
browser.webNavigation.onDOMContentLoaded.hasListener(listener)
```

事件有三个方法：

- `addListener(callback)`
  - : 为此事件添加监听方法。
- `removeListener(listener)`
  - : 停止监听此事件。`listener` 参数为需要移除的监听器。
- `hasListener(listener)`
  - : 检测是否有 `listener` 被注册在事件上。如有则返回 `true`，否则返回`false`。

## addListener 语法

### 参数

- `callback`

  - : 为当此事件发生时需要被调用的函数。该函数将传递以下参数：

    - `details`
      - : `object`。有关导航事件的详细信息。参见 [details](#details_2) 小节以获取更多信息。

- `filter`{{optional_inline}}
  - : `object`。包含单个属性 `url` 的对象，这是一个 {{WebExtAPIRef("events.UrlFilter")}} {{jsxref("Array")}} 对象。如果包含此参数，则该事件将仅触发转换为与数组中至少一个 `UrlFilter` 匹配的 URL。如果省略此参数，则该事件将触发所有转换。

## 额外对象

### details

- `tabId`
  - : `integer`。发生导航事件的标签页 ID。
- `url`
  - : `string`。指定框架导航到的 URL。
- `processId`
  - : `integer`。渲染此选项卡的进程的 ID。
- `frameId`
  - : `integer`。发生导航的框架。0 表示导航发生在标签页的顶级浏览上下文中，而不是嵌套的 [iframe](/zh-CN/docs/Web/HTML/Element/iframe) 中。正值表示导航发生在嵌套的 iframe 中。对于给定的标签页和进程，框架 ID 是唯一的。
- `timeStamp`
  - : `number`。启动 `DOMContentLoaded` 的时间，单位为[自纪元起的毫秒数](https://zh.wikipedia.org/wiki/UNIX时间)。

## 浏览器兼容性

{{Compat}}

## 示例

如果目标 URL 的主机名包含“example.com”或以“developer”开头，则记录“onDOMContentLoaded”的目标 URL。

```js
const filter = {
  url: [{ hostContains: "example.com" }, { hostPrefix: "developer" }],
};

function logOnDOMContentLoaded(details) {
  console.log(`onDOMContentLoaded: ${details.url}`);
}

browser.webNavigation.onDOMContentLoaded.addListener(
  logOnDOMContentLoaded,
  filter,
);
```

{{WebExtExamples}}

> [!NOTE]
> 本 API 基于 Chromium 的 [`chrome.webNavigation`](https://developer.chrome.google.cn/docs/extensions/reference/api/webNavigation#event-onBeforeNavigate) API。本文档源自 Chromium 代码中的 [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json)。

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
