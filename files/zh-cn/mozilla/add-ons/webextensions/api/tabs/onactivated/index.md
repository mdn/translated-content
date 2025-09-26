---
title: tabs.onActivated
slug: Mozilla/Add-ons/WebExtensions/API/tabs/onActivated
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

当窗口中的活动标签页更改时触发。请注意，此事件触发时，标签页的 URL 可能尚未设置，但你可以监听 {{WebExtAPIRef("tabs.onUpdated")}} 事件，以便在设置 URL 时收到通知。

## 语法

```js-nolint
browser.tabs.onActivated.addListener(listener)
browser.tabs.onActivated.removeListener(listener)
browser.tabs.onActivated.hasListener(listener)
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
    - `activeInfo`
      - : `object`。被激活的标签页的 ID 及其窗口的 ID。详见 [activeInfo](#activeinfo_2) 部分。

## 附加对象

### activeInfo

- `previousTabId`
  - : `integer`。上一个被激活的标签页的 ID（如果该标签页仍然打开）。
- `tabId`
  - : `integer`。已被激活的标签页的 ID。
- `windowId`
  - : `integer`。标签页所属窗口的 ID。

## 示例

监听并记录标签页激活事件：

```js
function handleActivated(activeInfo) {
  console.log(`标签页 ${activeInfo.tabId} 已激活`);
}

browser.tabs.onActivated.addListener(handleActivated);
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.tabs`](https://developer.chrome.google.cn/docs/extensions/reference/api/tabs#event-onActivated) API。该文档衍生自 Chromium 代码中的 [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json)。

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
