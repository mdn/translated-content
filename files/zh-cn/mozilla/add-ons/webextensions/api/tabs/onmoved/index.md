---
title: tabs.onMoved
slug: Mozilla/Add-ons/WebExtensions/API/tabs/onMoved
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

当标签页在窗口内移动时触发。

仅会触发一次移动事件，用以代表用户直接移动了的标签页。不会为其他响应移动的标签页触发移动事件。此事件不会在标签页在窗口之间移动时触发。对于这种情况，请参阅 {{WebExtAPIRef('tabs.onDetached')}}。

## 语法

```js-nolint
browser.tabs.onMoved.addListener(listener)
browser.tabs.onMoved.removeListener(listener)
browser.tabs.onMoved.hasListener(listener)
```

事件具有三个函数：

- `addListener(listener)`
  - : 向此事件添加一个监听器。
- `removeListener(listener)`
  - : 停止监听此事件。`listener` 参数是要移除的监听器。
- `hasListener(listener)`
  - : 检查 `listener` 是否已注册此事件。如果正在监听，则返回 `true`，否则返回 `false`。

## addListener 语法

### 参数

- `listener`
  - : 此事件发生时调用的函数。该函数接收以下参数：
    - `tabId`
      - : `integer`。用户移动的标签页的 ID。
    - `moveInfo`
      - : `object`。有关移动的信息。详见 [moveInfo](#moveinfo_2) 部分。

## 附加对象

### moveInfo

- `windowId`
  - : `integer`。此标签页所属窗口的 ID。
- `fromIndex`
  - : `integer`。此标签页在窗口中的初始索引。
- `toIndex`
  - : `integer`。此标签页在窗口中的最终索引。

## 示例

监听并记录移动事件：

```js
function handleMoved(tabId, moveInfo) {
  console.log(
    `标签页 ${tabId} 从 ${moveInfo.fromIndex} 移动至 ${moveInfo.toIndex}`,
  );
}

browser.tabs.onMoved.addListener(handleMoved);
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.tabs`](https://developer.chrome.google.cn/docs/extensions/reference/api/tabs#event-onMoved) API。该文档衍生自 Chromium 代码中的 [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json)。

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
