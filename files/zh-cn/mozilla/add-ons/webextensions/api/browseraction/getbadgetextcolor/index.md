---
title: browserAction.getBadgeTextColor()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/getBadgeTextColor
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

获取浏览器操作徽章的文本颜色。

从 Firefox 63 版本开始，除非使用 {{WebExtAPIRef("browserAction.setBadgeTextColor()")}} 显式设置了徽章文本颜色，否则徽章文本颜色将自动设置为黑色或白色，以使其与指定的徽章背景颜色形成最大对比度。例如，如果你将徽章背景颜色设置为白色，则默认的徽章文本颜色将设置为黑色，反之亦然。

其他浏览器始终使用白色文本颜色。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
browser.browserAction.getBadgeTextColor(
  details // 对象
)
```

### 参数

- details
  - : `object`。
    - `tabId` {{optional_inline}}
      - : `integer`。指定从中获取徽章文本颜色的标签页。
    - `windowId` {{optional_inline}}
      - : `integer`。指定从中获取徽章文本颜色的窗口。

<!---->

- 如果同时提供了 `windowId` 和 `tabId`，则函数失败。
- 如果 `windowId` 和 `tabId` 都省略，则返回全局徽章文本颜色。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，其会兑现包含检索到的颜色的 {{WebExtAPIRef('browserAction.ColorArray')}}。

## 浏览器兼容性

{{Compat}}

## 示例

记录徽章的文本颜色：

```js
function onGot(color) {
  console.log(color);
}

function onFailure(error) {
  console.log(error);
}

browser.browserAction.getBadgeTextColor({}).then(onGot, onFailure);
```

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.browserAction`](https://developer.chrome.google.cn/docs/extensions/mv2/reference/browserAction#method-getBadgeBackgroundColor) API。该文档衍生自 Chromium 代码中的 [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json)。

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
