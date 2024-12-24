---
title: sidebarAction.setPanel()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/setPanel
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

设置侧边栏的面板：即定义此侧边栏内容的 HTML 文档。

## 面板类型

侧边栏总是有一个“_清单面板_”，即在 [`sidebar_action`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) 清单键中定义的面板。

如果使用 `setPanel()` 设置新面板，并包含 `tabId` 选项，则该面板仅为给定的标签页设置。这个面板称为“_标签页特定面板_”。

如果使用 `setPanel()` 设置新面板，并包含 `windowId` 选项，则该面板仅为给定的窗口设置。这个面板称为“_窗口特定面板_”，并将出现在该窗口的所有没有设置标签页特定面板的标签页中。

如果使用 `setPanel()` 设置新面板，并省略 `tabId` 和 `windowId` 选项，则这将设置“_全局面板_”。全局面板将出现在所有没有设置标签页特定面板，且其窗口没有设置窗口特定面板的标签中。

## 语法

```js-nolint
browser.sidebarAction.setPanel(
  details // 对象
)
```

### 参数

- `details`

  - : `object`。包含如下属性的对象：

    - `panel`

      - : `string` 或 `null`。要加载到侧边栏中的面板，指定为指向 HTML 文档的 URL，或 `null`，或空字符串。

        这可以指向扩展内部打包的文件（例如使用 {{WebExtAPIRef("runtime.getURL")}} 创建的文件）或远程文档（例如 `https://example.org/`）。它必须是有效的 URL。

        如果 `panel` 是 `null` 或 `""`，则将删除先前设置的面板，同时：

        - 如果指定了 `tabId` 并且标签页设置了标签页特定面板，则标签页将从其所属窗口继承面板。
        - 如果指定了 `windowId` 并且窗口设置了窗口特定面板，则窗口将继承全局面板。
        - 否则，全局面板将重置为清单面板。

    - `tabId` {{optional_inline}}
      - : `integer`。仅为指定的标签页设置面板。
    - `windowId` {{optional_inline}}
      - : `integer`。仅为指定的窗口设置面板。

<!---->

- 如果同时提供了 `windowId` 和 `tabId`，函数将失败且面板不会被设置。
- 如果同时省略 `windowId` 和 `tabId`，则设置全局面板。

## 示例

以下代码在用户点击浏览器操作时切换侧边栏文档：

```js
let thisPanel = browser.runtime.getURL("/this.html");
let thatPanel = browser.runtime.getURL("/that.html");

function toggle(panel) {
  if (panel === thisPanel) {
    browser.sidebarAction.setPanel({ panel: thatPanel });
  } else {
    browser.sidebarAction.setPanel({ panel: thisPanel });
  }
}

browser.browserAction.onClicked.addListener(() => {
  browser.sidebarAction.getPanel({}).then(toggle);
});
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}

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
