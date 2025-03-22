---
title: windows.getLastFocused()
slug: Mozilla/Add-ons/WebExtensions/API/windows/getLastFocused
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

获取最近获得焦点的窗口——通常是“最上层”的窗口。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let gettingWindow = browser.windows.getLastFocused(
  getInfo               // 可选对象
)
```

### 参数

- `getInfo` {{optional_inline}}

  - : `object`.

    - `populate` {{optional_inline}}
      - : `boolean`。若为 `true`，则 {{WebExtAPIRef('windows.Window')}} 对象将包含 `tabs` 属性，其中包含表示窗口中打开的标签页的 {{WebExtAPIRef('tabs.Tab')}} 对象列表。如果扩展的清单文件包含 `"tabs"` 权限或匹配的[主机权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#主机权限)，则 `Tab` 对象仅包含 `url`、`title` 和 `favIconUrl` 属性。
    - `windowTypes` {{optional_inline}}
      - : {{WebExtAPIRef('windows.WindowType')}} 对象的数组（`array`）。如果设置了该参数，则将基于该参数对窗口类型进行筛选返回的 {{WebExtAPIRef('windows.Window')}} 对象。如果未设置，则默认筛选器将被设为 `['normal', 'panel', 'popup']` 且 `'panel'` 窗口类型将局限于扩展自己的窗口。

> [!NOTE]
> 如果提供，`getInfo` 中的 `windowTypes` 属性将被忽略。自 Firefox 62 起，已弃用 `windowTypes` 的使用。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，其会兑现为一个包含最近获得焦点窗口详细信息的 {{WebExtAPIRef('windows.Window')}} 对象。如果发生任何错误则该 promise 将以错误消息拒绝。

## 浏览器兼容性

{{Compat}}

## 示例

获取最近获得焦点的窗口，并记录其包含的标签页。请注意，你需要 `"tabs"` [权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)或匹配的[主机权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#主机权限)才能访问标签页的 URL。

```js
function logTabs(windowInfo) {
  for (const tabInfo of windowInfo.tabs) {
    console.log(tabInfo.url);
  }
}

function onError(error) {
  console.error(`发生错误：${error}`);
}

browser.browserAction.onClicked.addListener((tab) => {
  browser.windows.getLastFocused({ populate: true }).then(logTabs, onError);
});
```

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.windows`](https://developer.chrome.google.cn/docs/extensions/reference/api/windows#method-getLastFocused) API。该文档衍生自 Chromium 代码中的 [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json)。

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
