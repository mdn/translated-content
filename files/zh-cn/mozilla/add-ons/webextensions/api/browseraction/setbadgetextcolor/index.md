---
title: browserAction.setBadgeTextColor()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/setBadgeTextColor
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

设置浏览器操作徽章的文本颜色。没有特定徽章文本颜色的标签页将继承全局徽章文本颜色。

## 语法

```js-nolint
browser.browserAction.setBadgeTextColor(
  details // 对象
)
```

### 参数

- `details`
  - : 一个包含以下属性的对象：
    - `color`
      - : 颜色，可以指定为以下之一：
        - 字符串：任何 CSS [\<color>](/zh-CN/docs/Web/CSS/Reference/Values/color_value) 值，例如 `"red"`、`"#FF0000"` 或 `"rgb(255 0 0)"`。如果字符串不是有效颜色，返回的 Promise 将被拒绝，并且文本颜色不会更改。
        - {{WebExtAPIRef('browserAction.ColorArray')}} 对象。
        - `null`。如果指定了 `tabId`，则移除特定标签页的徽章文本颜色，使该标签页继承全局徽章文本颜色。否则将全局徽章文本颜色恢复为默认值。

    - `tabId` {{optional_inline}}
      - : `integer`。仅为指定的标签页设置徽章文本颜色。当用户将该标签页导航到新页面时，颜色会重置。

    - `windowId` {{optional_inline}}
      - : `integer`。仅为指定的窗口设置徽章文本颜色。

<!---->

- 如果同时提供 `windowId` 和 `tabId`，函数将失败且颜色不会被设置。
- 如果 `windowId` 和 `tabId` 都省略，则设置全局徽章文本颜色。

## 浏览器兼容性

{{Compat}}

## 示例

徽章文本颜色起初为红色，当浏览器操作被点击时变为绿色：

```js
browser.browserAction.setBadgeText({ text: "1234" });
browser.browserAction.setBadgeTextColor({ color: "red" });

browser.browserAction.onClicked.addListener(() => {
  browser.browserAction.setBadgeTextColor({ color: "green" });
});
```

仅为活动标签页设置徽章文本颜色：

```js
browser.browserAction.setBadgeText({ text: "1234" });
browser.browserAction.setBadgeTextColor({ color: "red" });

browser.browserAction.onClicked.addListener((tab) => {
  browser.browserAction.setBadgeTextColor({
    color: "green",
    tabId: tab.id,
  });
});
```

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.browserAction`](https://developer.chrome.google.cn/docs/extensions/mv2/reference/browserAction#method-setBadgeBackgroundColor) API。该文档衍生自 Chromium 代码中的 [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json)。

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
