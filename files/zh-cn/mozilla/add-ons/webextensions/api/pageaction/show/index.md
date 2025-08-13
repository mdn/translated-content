---
title: pageAction.show()
slug: Mozilla/Add-ons/WebExtensions/API/pageAction/show
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

在指定的{{WebExtAPIRef("tabs/Tab", "标签页", "", "nocode")}}中显示{{WebExtAPIRef("pageAction", "页面操作", "", "nocode")}}。只要指定的标签页是活动标签页就会显示页面操作。

`show()` 会覆盖模式匹配，所以即使 [`show_matches`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) 不匹配 URL 或者 [`hide_matches`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) 匹配 URL，页面操作也会在指定的标签页中显示。

请注意，对没有加载内容的标签页调用 `show()` 将不起作用。

## 语法

```js-nolint
browser.pageAction.show(
  tabId // 整型
)
```

### 参数

- `tabId`
  - : `integer`。要显示页面操作的{{WebExtAPIRef("tabs/Tab", "标签页", "", "nocode")}}的 ID。

### 返回值

[Promise](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，将以 `undefined` 兑现。

## 浏览器兼容性

{{Compat}}

## 示例

该示例在用户选择一个上下文菜单项时将在活动标签页中显示{{WebExtAPIRef("pageAction", "页面操作", "", "nocode")}}。

> [!NOTE]
> 你需要在你的[清单](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json)中取得 `contextMenus` [权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)来创建上下文菜单项。

```js
browser.contextMenus.create({
  id: "show",
  title: "显示页面操作",
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "show") {
    browser.pageAction.show(tab.id);
  }
});
```

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.pageAction`](https://developer.chrome.google.cn/docs/extensions/mv2/reference/pageAction#method-show) API。该文档衍生自 Chromium 代码中的 [`page_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/page_action.json)。

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
