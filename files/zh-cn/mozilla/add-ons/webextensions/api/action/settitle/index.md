---
title: action.setTitle()
slug: Mozilla/Add-ons/WebExtensions/API/action/setTitle
l10n:
  sourceCommit: b30a10c08b986ebabd44733fb62f67667350403e
---

设置浏览器操作的标题。标题显示在鼠标悬停在浏览器操作图标上时的提示框中。你可以传入 `tabId` 或 `windowId` 作为可选参数——如果这样做，则仅针对指定的标签页或窗口更改标题。没有特定标题的标签页或窗口会继承全局标题文本，其默认为清单中指定的 [`default_title`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) 或 [`name`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name)。

> [!NOTE]
> 该 API 在 Manifest V3 或更高版本中可用。

## 语法

```js-nolint
browser.action.setTitle(
  details // 对象
)
```

### 参数

- `details`
  - : `object`，包含新的标题的对象，可选地包含要设置的标签页或窗口的 id。
    - `title`
      - : `string` 或 `null`，当鼠标移动到浏览器操作上时需要显示的字符串。

        若 `title` 是空字符串，那么使用的标题将是扩展名，但是 {{WebExtAPIRef("action.getTitle")}} 仍然会提供空字符串。

        若 `title` 是 `null`：
        - 若指定了 `tabId`，并且标签页设置了特定的标题，那么标签页将继承其所属窗口的标题。
        - 若指定了 `windowId`，并且窗口设置了特定的标题，那么窗口将继承全局标题。
        - 否则，全局标题将重置为清单标题。

    - `tabId` {{optional_inline}}
      - : `integer`，指定要设置标题的标签页。
    - `windowId` {{optional_inline}}
      - : `integer`，指定要设置标题的窗口。

<!---->

- 若同时指定了 `windowId` 和 `tabId`，则函数出错且不会设置标题。
- 若同时未指定 `windowId` 和 `tabId`，则将设置全局标题。

## 示例

这段代码在用户点击浏览器操作时在“this”和“that”之间切换标题：

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
> 此 API 基于 Chromium 的 [`chrome.action`](https://developer.chrome.google.cn/docs/extensions/reference/api/action#method-setTitle) API。该文档衍生自 Chromium 代码中的 [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json)。

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
