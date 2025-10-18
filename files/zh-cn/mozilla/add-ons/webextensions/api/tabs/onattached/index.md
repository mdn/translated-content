---
title: tabs.onAttached
slug: Mozilla/Add-ons/WebExtensions/API/tabs/onAttached
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

当标签页附加到窗口时触发，例如因为它在窗口之间移动。

## 语法

```js-nolint
browser.tabs.onAttached.addListener(listener)
browser.tabs.onAttached.removeListener(listener)
browser.tabs.onAttached.hasListener(listener)
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
      - : `integer`。附加到新窗口的标签页的 ID。
    - `attachInfo`
      - : `object`。新窗口的 ID 以及标签页在其中的位置。详见 [attachInfo](#attachinfo_2) 部分。

## 附加对象

### attachInfo

- `newWindowId`
  - : `integer`。新窗口的 ID。
- `newPosition`
  - : `integer`。标签页在新窗口中的索引位置。

## 示例

监听 attach 事件并记录信息：

```js
function handleAttached(tabId, attachInfo) {
  console.log(`标签页：${tabId} 已附加`);
  console.log(`新窗口：${attachInfo.newWindowId}`);
  console.log(`新索引：${attachInfo.newPosition}`);
}

browser.tabs.onAttached.addListener(handleAttached);
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.tabs`](https://developer.chrome.google.cn/docs/extensions/reference/api/tabs#event-onAttached) API。该文档衍生自 Chromium 代码中的 [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json)。

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
