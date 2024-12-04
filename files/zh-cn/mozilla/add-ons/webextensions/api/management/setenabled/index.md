---
title: management.setEnabled()
slug: Mozilla/Add-ons/WebExtensions/API/management/setEnabled
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

启用或禁用给定的拓展。

通常需要在用户操作的上下文中调用此函数，例如按钮的点击处理程序。浏览器可能还会要求用户确认更改。

此 API 需要“management”[API 权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)。

这是一个异步函数，返回一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)。

## 语法

```js-nolint
let settingEnabled = browser.management.setEnabled(
  id,              // 字符串
  enabled         // 布尔值
)
```

### 参数

- `id`
  - : `string`，要启用/禁用的拓展的 ID。
- `enabled`
  - : `boolean`，要启用还是禁用。

### 返回值

[`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，当拓展已被禁用或启用时将不带参数地兑现。

## 浏览器兼容性

{{Compat}}

## 示例

切换 ID 为 "my-add-on" 的拓展的启用/禁用状态：

```js
let id = "my-add-on";

function toggleEnabled(id) {
  let getting = browser.management.get(id);
  getting.then((info) => {
    browser.management.setEnabled(id, !info.enabled);
  });
}

toggleEnabled(id);
```

{{WebExtExamples}}

> [!NOTE]
> 该 API 基于 Chromium 的 [`chrome.management`](https://developer.chrome.google.cn/docs/extensions/reference/api/management#method-setEnabled) API。本文衍生自 Chromium 代码中的 [`management.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/management.json)。

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
