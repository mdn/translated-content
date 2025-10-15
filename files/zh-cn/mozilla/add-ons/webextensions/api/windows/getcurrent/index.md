---
title: windows.getCurrent()
slug: Mozilla/Add-ons/WebExtensions/API/windows/getCurrent
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

获取当前的浏览器窗口并将其详细信息传递到回调函数中。

“当前”窗口不一定与当前聚焦的窗口相同。如果此函数从后台脚本中调用，则它将返回当前聚焦的窗口。但如果它是从与特定浏览器窗口关联的文档的脚本中调用的，则它将返回相应的浏览器窗口。例如，如果浏览器显示侧边栏，则每个浏览器窗口都有自己的侧边栏文档实例。如果运行在侧边栏文档中的脚本调用 `getCurrent()`，则它将返回该侧边栏文档的窗口。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let gettingCurrent = browser.windows.getCurrent(
  getInfo               // 可选对象
)
```

### 参数

- `getInfo` {{optional_inline}}
  - : `object`.
    - `populate` {{optional_inline}}
      - : `boolean`。默认为 `false`。若为 `true`，则 {{WebExtAPIRef('windows.Window')}} 对象将包含 `tabs` 属性，其中包含表示窗口中打开的标签页的 {{WebExtAPIRef('tabs.Tab')}} 对象列表。只有在扩展的清单文件包含 `"tabs"` 权限或匹配的[主机权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#主机权限)时 `Tab` 对象才会包含 `url`、`title` 和 `favIconUrl` 属性。
    - `windowTypes` {{deprecated_inline}} {{optional_inline}}
      - : {{WebExtAPIRef('windows.WindowType')}} 对象的数组（`array`）。如果设置了该参数，则将基于该参数对窗口类型进行筛选返回的 {{WebExtAPIRef('windows.Window')}} 对象。如果未设置，则默认筛选器将被设为 `['normal', 'panel', 'popup']` 且 `'panel'` 窗口类型将局限于扩展自己的窗口。

> [!NOTE]
> 如果提供，`getInfo` 中的 `windowTypes` 属性将被忽略。自 Firefox 62 起，已弃用 `windowTypes` 的使用。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，其会兑现为包含窗口详细信息的 [`windows.Window`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/windows/Window) 对象。如果发生任何错误，则该 promise 将以错误消息拒绝。

## 浏览器兼容性

{{Compat}}

## 示例

此示例将在用户点击浏览器操作的图标时获取当前窗口并记录其包含的标签页的 URL。请注意，你需要 `"tabs"` [权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)或匹配的[主机权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#主机权限)才能访问标签页的 URL。

```js
function logTabs(windowInfo) {
  for (const tabInfo of windowInfo.tabs) {
    console.log(tabInfo.url);
  }
}

function onError(error) {
  console.error(`错误：${error}`);
}

browser.browserAction.onClicked.addListener((tab) => {
  browser.windows.getCurrent({ populate: true }).then(logTabs, onError);
});
```

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.windows`](https://developer.chrome.google.cn/docs/extensions/reference/api/windows#method-getCurrent) API。该文档衍生自 Chromium 代码中的 [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json)。

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
