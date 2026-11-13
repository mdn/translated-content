---
title: tabs.duplicate()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/duplicate
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

根据标签页的 ID 复制一个标签页。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let duplicating = browser.tabs.duplicate(
  tabId,              // 整数
  duplicateProperties // 可选对象
)
```

### 参数

- `tabId`
  - : `integer`。要复制的标签页的 ID。
- `duplicateProperties` {{optional_inline}}
  - : `object`。一个描述如何复制标签页的对象。它包含以下属性：
    - `index` {{optional_inline}}
      - : `integer`。新标签页在窗口中的位置。该值的范围限制为零到窗口中标签页的数量。
    - `active` {{optional_inline}}
      - : `boolean`。标签页是否成为窗口中的活动标签页。不影响窗口是否被聚焦。默认为 `true`。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，其会在复制标签页后兑现一个 {{WebExtAPIRef('tabs.Tab')}} 对象，描述复制的标签页的详细信息。如果扩展具有 [`"tabs"` 权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)或匹配的[主机权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#主机权限)，`Tab` 对象只包含 `url`、`title` 和 `favIconUrl`。如果发生任何错误，则该 promise 将以错误消息拒绝。

> [!NOTE]
> 从 Firefox 68 开始，browser.tabs.duplicate() 返回的 promise 在标签页被复制后立即兑现。以前，promise 只有在标签页完全加载后才会兑现。

## 示例

复制第一个标签页，然后记录新创建的标签页的 ID：

```js
function onDuplicated(tabInfo) {
  console.log(tabInfo.id);
}

function onError(error) {
  console.log(`发生错误：${error}`);
}

// 复制数组中的第一个标签页
function duplicateFirstTab(tabs) {
  console.log(tabs);
  if (tabs.length > 0) {
    let duplicating = browser.tabs.duplicate(tabs[0].id);
    duplicating.then(onDuplicated, onError);
  }
}

// 查询所有打开的标签页
let querying = browser.tabs.query({});
querying.then(duplicateFirstTab, onError);
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.tabs`](https://developer.chrome.google.cn/docs/extensions/reference/api/tabs#method-duplicate) API。该文档衍生自 Chromium 代码中的 [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json)。

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
