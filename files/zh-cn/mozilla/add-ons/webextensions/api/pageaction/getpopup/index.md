---
title: pageAction.getPopup()
slug: Mozilla/Add-ons/WebExtensions/API/pageAction/getPopup
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

获取设为该页面操作的弹窗的 HTML 文档的 URL。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let gettingPopup = browser.pageAction.getPopup(
  details               // 对象
)
```

### 参数

- `details`

  - : `object`。

    - `tabId`
      - : `integer`。要获取弹窗的标签页 ID。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，将兑现包含弹窗文档的 URL 的字符串。

## 浏览器兼容性

{{Compat}}

## 示例

添加一个上下文菜单项以记录当前标签页的弹窗 URL。请注意，要创建上下文菜单项，你需要在[清单](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json)中取得 `contextMenus` [权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)。

```js
function gotPopup(popupURL) {
  console.log(popupURL);
}

browser.contextMenus.create({
  id: "get-popup",
  title: "获取弹窗 URL",
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "get-popup") {
    let gettingPopup = browser.pageAction.getPopup({ tabId: tab.id });
    gettingPopup.then(gotPopup);
  }
});
```

{{WebExtExamples}}

> [!NOTE]
> 该 API 基于 Chromium 的 [`chrome.pageAction`](https://developer.chrome.google.cn/docs/extensions/mv2/reference/pageAction#method-getPopup) API。本文衍生自 Chromium 代码中的 [`page_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/page_action.json)。

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
