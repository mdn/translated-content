---
title: action.setBadgeText()
slug: Mozilla/Add-ons/WebExtensions/API/action/setBadgeText
l10n:
  sourceCommit: b30a10c08b986ebabd44733fb62f67667350403e
---

{{AddonSidebar}}

设置浏览器操作的徽章文本（徽章将显示在图标上方）。

> [!NOTE]
> 该 API 在 Manifest V3 或更高版本中可用。

未指定特定徽章文本的标签页将继承全局徽章文本（默认为 `""`）。

## 语法

```js-nolint
browser.action.setBadgeText(
  details // 对象
)
```

该 API 同样以 `chrome.action.setBadgeText()` 的形式可用。

### 参数

- `details`

  - : 一个含有下列属性的对象：

    - `text`

      - : `string` 或 `null`，可以传入任意长度的字符串，但空间只能容纳大约四个字符。

        若你不希望显示徽章，可以使用空字符串 `""`。

        若指定了 `tabId`，`null` 将移除指定标签页的徽章文本使之继承全局徽章文本；否则，会将全局徽标文本撤销为 `""`。

        若指定了 `windowId`，`null` 将移除指定窗口的徽章文本使之继承全局徽章文本；否则，会将全局徽章文本撤销为 `""`。

    - `tabId` {{optional_inline}}
      - : `integer`，为给定标签页设置徽章文本。当用户将标签页导航到新页面的时候，文本将被重置。
    - `windowId` {{optional_inline}}
      - : `integer`，为给定窗口设置徽章文本。

<!---->

- 若同时指定了 `windowId` 和 `tabId`，则函数出错。
- 若同时未指定 `windowId` 和 `tabId`，则将设置全局徽章文本。

## 示例

添加一个显示用户点击按钮次数的徽标：

```js
let clicks = 0;

function increment() {
  browser.action.setBadgeText({ text: (++clicks).toString() });
}

browser.action.onClicked.addListener(increment);
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 该 API 基于 Chromium 的 [`chrome.action`](https://developer.chrome.google.cn/docs/extensions/reference/api/action#method-setBadgeText) API。本文衍生自 Chromium 代码中的 [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json)。

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
