---
title: browserAction.setPopup()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/setPopup
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

设置在用户点击浏览器操作图标时，将会以弹出窗口的形式打开的 HTML 文档。没有指定特定弹出窗口的标签页将继承全局弹出窗口，该弹出窗口默认为清单（manifest）文件中指定的 [`default_popup`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action)。

## 语法

```js-nolint
browser.browserAction.setPopup(
  details // 对象
)
```

### 参数

- `details`

  - : 一个包含以下属性的对象：

    - `tabId` {{optional_inline}}

      - : `integer`。仅为特定标签页设置弹出窗口。当用户将此标签页导航到新页面时，弹出窗口会重置。

    - `windowId` {{optional_inline}}

      - : `integer`。仅为指定窗口设置弹出窗口。

    - `popup`

      - : `string` 或 `null`。指定为 URL 的 HTML 文件。

        这可以指向扩展程序内打包的文件（例如，使用 {{WebExtAPIRef("extension.getURL")}} 创建的文件），或者是一个远程文档（例如 `https://example.org/`）。

        如果这里传递了一个空字符串（`""`），弹出窗口将被禁用，扩展程序将接收到 {{WebExtAPIRef("browserAction.onClicked")}} 事件。

        如果 `popup` 为 `null`：

        - 如果指定了 `tabId`，则移除特定标签页的弹出窗口，使该标签页继承全局弹出窗口。
        - 如果指定了 `windowId`，则移除特定窗口的弹出窗口，使该窗口继承全局弹出窗口。
        - 如果 `tabId` 和 `windowId` 都省略，则将全局弹出窗口恢复为默认值。

<!---->

- 如果同时提供了 `windowId` 和 `tabId`，函数将失败且弹出窗口不会设置。
- 如果同时省略 `windowId` 和 `tabId`，则设置全局弹出窗口。

## 浏览器兼容性

{{Compat}}

## 示例

以下代码添加了一对上下文菜单项，用于在两个弹出窗口之间切换。请注意，你需要在扩展的清单中设置“contextMenus”[权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)才能创建上下文菜单项。

```js
function onCreated() {
  if (browser.runtime.lastError) {
    console.log("创建项目时出错：", browser.runtime.lastError);
  } else {
    console.log("项目创建成功");
  }
}

browser.contextMenus.create(
  {
    id: "popup-1",
    type: "radio",
    title: "弹出窗口 1",
    contexts: ["all"],
    checked: true,
  },
  onCreated,
);

browser.contextMenus.create(
  {
    id: "popup-2",
    type: "radio",
    title: "弹出窗口 2",
    contexts: ["all"],
    checked: false,
  },
  onCreated,
);

browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "popup-1") {
    browser.browserAction.setPopup({ popup: "/popup/popup1.html" });
  } else if (info.menuItemId === "popup-2") {
    browser.browserAction.setPopup({ popup: "/popup/popup2.html" });
  }
});
```

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.browserAction`](https://developer.chrome.google.cn/docs/extensions/mv2/reference/browserAction#method-setPopup) API。该文档衍生自 Chromium 代码中的 [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json)。

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
