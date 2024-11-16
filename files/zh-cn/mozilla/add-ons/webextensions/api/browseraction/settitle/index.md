---
title: browserAction.setTitle()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/setTitle
l10n:
  sourceCommit: eec174a08a5003da32f53e694c45eda3377b4d18
---

{{AddonSidebar}}

设置浏览器操作的标题。标题会显示在浏览器操作图标的工具提示中。你可以传入一个 `tabId` 或 `windowId` 作为可选参数——如果这样做，则标题仅为指定的标签页或窗口更改。没有特定标题的标签页或窗口将继承全局标题文本，该文本默认为清单（manifest）中指定的 [`default_title`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) 或 [`name`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name)。

## 语法

```js-nolint
browser.browserAction.setTitle(
  details // 对象
)
```

### 参数

- `details`

  - : `object`。新标题和可选的目标标签页或窗口 ID。

    - `title`

      - : `string` 或 `null`。鼠标悬停时浏览器操作应显示的字符串。

        如果 `title` 是空字符串，则使用扩展名作为标题，但 {{WebExtAPIRef("browserAction.getTitle")}} 仍会提供空字符串。

        如果 `title` 为 `null`：

        - 如果指定了 `tabId`，并且该标签页设置了特定的标签页标题，则该标签页将继承其所属窗口的标题。
        - 如果指定了 `windowId`，并且该窗口设置了特定的窗口标题，则该窗口将继承全局标题。
        - 否则，全局标题将重置为清单中的标题。

    - `tabId` {{optional_inline}}

      - : `integer`。仅为指定的标签页设置标题。

    - `windowId` {{optional_inline}}

      - : `integer`。仅为指定的窗口设置标题。

<!---->

- 如果同时提供了 `windowId` 和 `tabId`，函数将失败且标题不会设置。
- 如果同时省略 `windowId` 和 `tabId`，则设置全局标题。

## 浏览器兼容性

{{Compat}}

## 示例

此代码在每次用户点击浏览器操作时，在“this”和“that”之间切换标题：

```js
function toggleTitle(title) {
  if (title === "this") {
    browser.browserAction.setTitle({ title: "that" });
  } else {
    browser.browserAction.setTitle({ title: "this" });
  }
}

browser.browserAction.onClicked.addListener(() => {
  let gettingTitle = browser.browserAction.getTitle({});
  gettingTitle.then(toggleTitle);
});
```

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.browserAction`](https://developer.chrome.google.cn/docs/extensions/mv2/reference/browserAction#method-setTitle) API。该文档衍生自 Chromium 代码中的 [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json)。

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
