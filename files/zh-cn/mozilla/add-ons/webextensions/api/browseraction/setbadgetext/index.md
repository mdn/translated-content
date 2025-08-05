---
title: browserAction.setBadgeText()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/setBadgeText
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

设置浏览器操作的徽章文本。徽章显示在图标顶部。

没有特定徽章文本的标签页将继承全局徽章文本，默认情况下为 `""`。

## 语法

```js-nolint
browser.browserAction.setBadgeText(
  details // 对象
)
```

此 API 也可通过 `chrome.browserAction.setBadgeText()` 来使用。

### 参数

- `details`
  - : 一个包含以下属性的对象：
    - `text`
      - : `string` 或 `null`。可以传递任意数量的字符，但空间只能容纳大约四个字符。

        如果不需要徽章，请使用空字符串 `""`。

        如果指定了 `tabId`，`null` 将移除特定标签页的徽章文本，使该标签页继承全局徽章文本。否则将全局徽章文本恢复为 `""`。

        如果指定了 `windowId`，`null` 将移除特定窗口的徽章文本，使标签页继承全局徽章文本。否则将全局徽章文本恢复为 `""`。

    - `tabId` {{optional_inline}}
      - : `integer`。仅为指定的标签页设置徽章文本。当用户将该标签页导航到新页面时，文本会重置。

    - `windowId` {{optional_inline}}
      - : `integer`。为指定的窗口设置徽章文本。

<!---->

- 如果同时提供 `windowId` 和 `tabId`，函数将失败。
- 如果 `windowId` 和 `tabId` 都省略，则会设置全局徽章文本。

## 浏览器兼容性

{{Compat}}

## 示例

添加一个徽章，显示用户点击按钮的次数：

```js
let clicks = 0;

function increment() {
  browser.browserAction.setBadgeText({ text: (++clicks).toString() });
}

browser.browserAction.onClicked.addListener(increment);
```

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.browserAction`](https://developer.chrome.google.cn/docs/extensions/mv2/reference/browserAction#method-setBadgeText) API。该文档衍生自 Chromium 代码中的 [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json)。

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
