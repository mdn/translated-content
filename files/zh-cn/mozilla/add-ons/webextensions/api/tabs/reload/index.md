---
title: tabs.reload()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/reload
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

重新加载一个标签页，可选择是否绕过本地 web 缓存。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let reloading = browser.tabs.reload(
  tabId,            // 可选的整数
  reloadProperties  // 可选的对象
)
```

### 参数

- `tabId` {{optional_inline}}
  - : `integer`。要重新加载的标签页的 ID。默认为当前窗口中选定的标签页。
- `reloadProperties` {{optional_inline}}
  - : 一个包含以下属性的对象：
    - `bypassCache` {{optional_inline}}
      - : `boolean`。是否绕过本地 web 缓存。默认为 `false`。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，当标签页重新加载完成时其会被兑现且不带有参数。如果发生任何错误，promise 会错误信息拒绝。

## 示例

重新加载当前窗口中的活动标签页：

```js
browser.tabs.reload();
```

重新加载当前窗口中的活动标签页，并绕过缓存：

```js
browser.tabs.reload({ bypassCache: true });
```

重新加载 ID 为 2 的标签页，并绕过缓存，完成后调用回调函数：

```js
function onReloaded() {
  console.log(`已重新加载`);
}

function onError(error) {
  console.log(`发生错误：${error}`);
}

let reloading = browser.tabs.reload(2, { bypassCache: true });
reloading.then(onReloaded, onError);
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.tabs`](https://developer.chrome.google.cn/docs/extensions/reference/api/tabs#method-reload) API。该文档衍生自 Chromium 代码中的 [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json)。

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
