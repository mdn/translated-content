---
title: action.getTitle()
slug: Mozilla/Add-ons/WebExtensions/API/action/getTitle
l10n:
  sourceCommit: b30a10c08b986ebabd44733fb62f67667350403e
---

{{AddonSidebar}}

获取浏览器操作的标题。

> [!NOTE]
> 该 API 在 Manifest V3 或更高版本中可用。

就像你可以使用 {{WebExtAPIRef("action.setTitle()")}} 在每个标签页上设置标题一样，你也可以通过将标签页的 ID 传递给此函数来检索特定于标签页的标题。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let gettingTitle = browser.action.getTitle(
  details               // 对象
)
```

### 参数

- `details`

  - : 一个含有下列属性的对象：

    - `tabId` {{optional_inline}}
      - : `integer`，指定要获取标题的标签页。
    - `windowId` {{optional_inline}}
      - : `integer`，指定要获取标题的窗口。

<!---->

- 若同时指定了 `windowId` 和 `tabId`，则函数出错且其返回的 promise 会被拒绝。
- 若同时未指定 `windowId` 和 `tabId`，则返回全局标题。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，会兑现包含浏览器操作的标题的字符串。

## 示例

在用户点击浏览器操作时，此代码在“this”和“that”之间切换标题：

```js
function toggleTitle(title) {
  if (title === "this") {
    browser.action.setTitle({ title: "that" });
  } else {
    browser.action.setTitle({ title: "this" });
  }
}

browser.action.onClicked.addListener(() => {
  let gettingTitle = browser.action.getTitle({});
  gettingTitle.then(toggleTitle);
});
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 该 API 基于 Chromium 的 [`chrome.action`](https://developer.chrome.google.cn/docs/extensions/reference/api/action#method-getTitle) API。该文档衍生自 Chromium 代码中的 [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json)。

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
