---
title: sidebarAction.setTitle()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/setTitle
l10n:
  sourceCommit: 665b94c45d49c71009c3e6c9a9e0f601b6af0d82
---

设置侧边栏的标题。标题会在浏览器列出可用侧边栏的地方显示。例如，Firefox 会在“查看 > 侧栏”菜单中显示这一标题。当侧边栏打开时，该标题还会显示在侧边栏的顶部。

## 标题类型

你的扩展应该在 [sidebar_action](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) 清单键中指定侧边栏的标题（这被称为“_清单标题_”）。如果你没有指定清单标题，则将默认使用扩展名作为标题。

如果你使用 `setTitle()` 设置新标题，并包含了 `tabId` 选项，那么标题仅为给定的标签页设置。这个标题称为“_标签页特定标题_”。

如果你使用 `setTitle()` 设置新标题，并包含了 `windowId` 选项，那么标题仅为给定的窗口设置。这个标题称为“_窗口特定标题_”，并将出现在该窗口的所有没有设置标签页特定标题的标签页中。

如果你使用 `setTitle()` 设置新标题，并省略了 `tabId` 和 `windowId` 选项，那么这将设置“_全局标题_”。全局标题将出现在所有没有设置标签页特定标题的标签中，且其窗口没有设置窗口特定标题的标签页中。

## 语法

```js-nolint
browser.sidebarAction.setTitle(
  details // 对象
)
```

### 参数

- `details`
  - : `object`，包含下述属性的对象：
    - `title`
      - : `string` 或 `null`，侧边栏的新标题。

        如果 `title` 是空字符串，则使用扩展名作为标题，但 {{WebExtAPIRef("sidebarAction.getTitle")}} 仍会提供空字符串。

        如果 `title` 为 `null`，那么之前设置的标题将会被移除，并且：
        - 如果指定了 `tabId`，并且该标签页设置了标签页特定的标题，则该标签页将继承其所属窗口的标题。
        - 如果指定了 `windowId`，并且该窗口设置了特定的窗口标题，则该窗口将继承全局标题。
        - 否则，全局标题将被重置为清单标题。

    - `tabId` {{optional_inline}}
      - : `integer`。仅为指定的标签页设置标题。
    - `windowId` {{optional_inline}}
      - : `integer`。仅为指定的窗口设置标题。

<!---->

- 如果同时提供了 `windowId` 和 `tabId`，函数将失败且标题不会被设置。
- 如果同时省略 `windowId` 和 `tabId`，则设置全局标题。

## 浏览器兼容性

{{Compat}}

## 示例

下面代码在用户点击浏览器操作时更改侧边栏的标题（但仅对当前标签页更改）：

```js
let title = "一个不同的标题";

function setTitleForTab(tab) {
  browser.sidebarAction.setTitle({ title, tabId: tab.id });
}

browser.browserAction.onClicked.addListener(setTitleForTab);
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
