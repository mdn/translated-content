---
title: action.setBadgeBackgroundColor()
slug: Mozilla/Add-ons/WebExtensions/API/action/setBadgeBackgroundColor
l10n:
  sourceCommit: f6ff6e14c5af7cb9ed701d7f4506f770014c704f
---

{{AddonSidebar}}

设置徽章的背景颜色。没有指定徽章背景颜色的标签页将继承全局徽章背景颜色（在 Firefox 中默认为 `[217, 0, 0, 255]`）。

> [!NOTE]
> 该 API 在 Manifest V3 或更高版本中可用。

在 Firefox 中，除非使用 {{WebExtAPIRef("action.setBadgeTextColor()")}} 明确设置徽章文本颜色，否则徽章文本颜色会自动设置为黑色或白色，以最大程度与指定的徽章背景颜色形成对比。例如，如果将徽章背景颜色设置为白色，则默认的徽章文本颜色将设置为黑色，反之亦然。

在其他浏览器中，徽章文本颜色始终为白色，因此设置深色的背景颜色更合适：这样能确保文本的可读性。

## 语法

```js-nolint
browser.action.setBadgeBackgroundColor(
  details // 对象
)
```

### 参数

- `details`

  - : 一个含有下列属性的对象：

    - `color`

      - : 颜色，指定为以下之一：

        - 字符串：任意 CSS [\<color>](/zh-CN/docs/Web/CSS/color_value) 值，例如 `"red"`、`"#FF0000"` 或 `"rgb(255 0 0)"`。若字符串不是一个正确的颜色，则 Promise 会被拒绝且背景颜色不会被更改。
        - `{{WebExtAPIRef('action.ColorArray')}}` 对象。
        - `null`，若指定了 `tabId`，则会移除该标签页的徽章背景颜色，让标签页继承全局徽章背景颜色；反之，会撤销对全局徽章背景颜色的修改使之变回默认取值。

    - `tabId` {{optional_inline}}
      - : `integer`，指定要设置徽章背景颜色的标签页。当用户导航到新页面的时候，背景颜色将被重置。
    - `windowId` {{optional_inline}}
      - : `integer`，指定要设置徽章背景颜色的窗口。

<!---->

- 若同时指定了 `windowId` 和 `tabId`，则函数出错且并不会设置颜色。
- 若同时未指定 `windowId` 和 `tabId`，则将设置全局徽章背景颜色。

## 示例

背景颜色最初设置为红色，并且当浏览器操作被单击时变为绿色：

```js
browser.action.setBadgeText({ text: "1234" });
browser.action.setBadgeBackgroundColor({ color: "red" });

browser.action.onClicked.addListener(() => {
  browser.action.setBadgeBackgroundColor({ color: "green" });
});
```

仅为活动标签页设置背景颜色：

```js
browser.action.setBadgeText({ text: "1234" });
browser.action.setBadgeBackgroundColor({ color: "red" });

browser.action.onClicked.addListener((tab) => {
  browser.action.setBadgeBackgroundColor({
    color: "green",
    tabId: tab.id,
  });
});
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}

Firefox 的默认颜色是 `[217, 0, 0, 255]`。

> [!NOTE]
> 该 API 基于 Chromium 的 [`chrome.action`](https://developer.chrome.google.cn/docs/extensions/reference/api/action#method-setBadgeBackgroundColor) API。本文衍生自 Chromium 代码中的 [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json)。

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
