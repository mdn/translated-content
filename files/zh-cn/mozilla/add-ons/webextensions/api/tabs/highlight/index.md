---
title: tabs.highlight()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/highlight
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

突出显示（选择）一个或多个标签页。通过窗口 ID 和一系列标签索引来指定标签页。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js
let highlighting = browser.tabs.highlight(
  highlightInfo, // 对象
);
```

### 参数

- `highlightInfo`

  - : `object`。

    - `windowId` {{optional_inline}}
      - : `integer`。包含要突出显示标签页的窗口的 ID。
    - `populate` {{optional_inline}}

      - : `boolean`。默认为 `true`。如果设置为 `false`，则 {{WebExtAPIRef('windows.Window')}} 对象不会包含 `tabs` 属性，该属性包含表示窗口中打开的标签页的 {{WebExtAPIRef('tabs.Tab')}} 对象列表。

        > [!NOTE]
        > 在标签页很多的情况下，对窗口进行填充（默认行为）可能会消耗大量资源。为了更好的性能，如果不需要标签页详情，建议手动将 `populate` 设置为 `false`。

    - `tabs`
      - : `integer` 数组，指定要突出显示的一个或多个标签页索引。之前突出显示的但未包含在 `tabs` 中的标签页将停止被突出显示。`tabs` 中的第一个标签页将成为活动标签页。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，其会兑现一个包含突出显示的标签页信息的 {{WebExtAPIRef('windows.Window')}} 对象。如果无法找到窗口或发生其他错误，promise 会以错误信息拒绝。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.tabs`](https://developer.chrome.google.cn/docs/extensions/reference/api/tabs#method-highlight) API。此文档源自 Chromium 代码中的 [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json)。

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
