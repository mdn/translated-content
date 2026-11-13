---
title: sidebarAction.getTitle()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/getTitle
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

获取侧边栏的标题。

就像你可以使用 {{WebExtAPIRef("sidebarAction.setTitle()")}} 在每个标签上设置标题一样，你也可以通过将标签页的 ID 传递给此函数来检索特定于标签页的标题。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let gettingTitle = browser.sidebarAction.getTitle(
  details               // 对象
)
```

### 参数

- `details`
  - : `object`。包含以下属性的对象：
    - `tabId` {{optional_inline}}
      - : `integer`。获取特定于给定标签页的侧边栏的标题。
    - `windowId` {{optional_inline}}
      - : `integer`。获取特定于给定窗口的侧边栏的标题。

<!---->

- 如果同时提供了 `windowId` 和 `tabId`，函数将失败且返回的 promise 将被拒绝。
- 如果同时省略 `windowId` 和 `tabId`，则返回全局标题。

### 返回值

[`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，将兑现为包含侧边栏标题的字符串。

## 浏览器兼容性

{{Compat}}

## 示例

在用户点击浏览器操作时在“这”和“那”之间切换标题：

```js
function toggleTitle(title) {
  if (title === "this") {
    browser.sidebarAction.setTitle({ title: "那" });
  } else {
    browser.sidebarAction.setTitle({ title: "这" });
  }
}

browser.browserAction.onClicked.addListener(() => {
  let gettingTitle = browser.sidebarAction.getTitle({});
  gettingTitle.then(toggleTitle);
});
```

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Opera 的 [`chrome.sidebarAction`](https://help.opera.com/en/extensions/sidebar-action-api/) API。

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
