---
title: action.setPopup()
slug: Mozilla/Add-ons/WebExtensions/API/action/setPopup
l10n:
  sourceCommit: b30a10c08b986ebabd44733fb62f67667350403e
---

{{AddonSidebar}}

指定用户单击浏览器操作图标时以弹窗形式打开的 HTML 文档。没有特定弹窗的标签页将继承全局弹窗，其默认值为清单中指定的 [`default_popup`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action)。

> [!NOTE]
> 该 API 在 Manifest V3 或更高版本中可用。

## 语法

```js-nolint
browser.action.setPopup(
  details // 对象
)
```

### 参数

- `details`

  - : 一个含有下列属性的对象：

    - `tabId` {{optional_inline}}
      - : `integer`，指定要设置弹窗的标签页。当用户导航到新页面时，弹窗会被重置。
    - `windowId` {{optional_inline}}
      - : `integer`，指定要设置弹窗的窗口。
    - `popup`

      - : `string` 或 `null`，指定作为弹窗的 HTML 文件的 URL。

        这可以指向打包在扩展中的文件（例如使用 {{WebExtAPIRef("extension.getURL")}} 创建的文件），或远程文档（例如 `https://example.org/`）。

        若传入空字符串（`""`），则禁用弹窗，扩展将接收 {{WebExtAPIRef("action.onClicked")}} 事件。

        若 `popup` 为 `null`：

        - 若指定了 `tabId`，则移除标签页特定的弹窗，使标签页继承其所属窗口的弹窗。
        - 若指定了 `windowId`，则移除窗口特定的弹窗，使窗口继承全局弹窗。
        - 若 `tabId` 和 `windowId` 都被省略，则将全局弹窗恢复为默认值。

<!---->

- 若同时指定了 `windowId` 和 `tabId`，则函数出错且不会设置弹窗。
- 若同时未指定 `windowId` 和 `tabId`，则将设置全局弹窗。

## 示例

这段代码添加了一对上下文菜单项，用于在两个弹窗之间切换。请注意，你需要在扩展的清单中设置“contextMenus”[权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)来创建上下文菜单项。

```js
function onCreated() {
  if (browser.runtime.lastError) {
    console.log("创建菜单项时出错：", browser.runtime.lastError);
  } else {
    console.log("上下文菜单项已创建");
  }
}

browser.contextMenus.create(
  {
    id: "popup-1",
    type: "radio",
    title: "弹窗 1",
    contexts: ["all"],
    checked: true,
  },
  onCreated,
);

browser.contextMenus.create(
  {
    id: "popup-2",
    type: "radio",
    title: "弹窗 2",
    contexts: ["all"],
    checked: false,
  },
  onCreated,
);

browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "popup-1") {
    browser.action.setPopup({ popup: "/popup/popup1.html" });
  } else if (info.menuItemId === "popup-2") {
    browser.action.setPopup({ popup: "/popup/popup2.html" });
  }
});
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 该 API 基于 Chromium 的 [`chrome.action`](https://developer.chrome.google.cn/docs/extensions/reference/api/action#method-setPopup) API。本文衍生自 Chromium 代码中的 [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json)。

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
