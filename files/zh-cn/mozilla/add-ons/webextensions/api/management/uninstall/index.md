---
title: management.uninstall()
slug: Mozilla/Add-ons/WebExtensions/API/management/uninstall
l10n:
  sourceCommit: c9bad2ef8b5655146481292f3bce7de0dd86ba68
---

{{AddonSidebar}}

卸载给定 ID 的附加组件。

该 API 需要“management”[API 权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)。

这是一个异步函数，返回一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)。

## 语法

```js-nolint
let uninstalling = browser.management.uninstall(
  id,                  // 字符串
  options              // 对象
)
```

### 参数

- `id`
  - : `string`，要卸载的附加组件的 ID。
- `options` {{optional_inline}}
  - : `object`，可能包含单一属性 `showConfirmDialog` 的对象。如果 `showConfirmDialog` 为 `true`，浏览器将显示一个对话框询问用户是否确认卸载该附加组件。

<!---->

- 如果 `id` 是调用该方法的附加组件的 ID，`showConfirmDialog` 默认为 `false`。
- 如果 `id` 是其他附加组件的 ID，则 `showConfirmDialog` 选项将被忽略，并且确认对话框总是会显示。

### 返回值

[`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)。如果用户取消卸载，则 Promise 会被拒绝并返回一个错误消息。

## 浏览器兼容性

{{Compat}}

## 示例

卸载 ID 为“addon-id”的附加组件并询问用户确认。在回调中检查用户是否取消了卸载，以及附加组件的卸载是否成功。

```js
let id = "addon-id";

function onCanceled(error) {
  console.log(`取消卸载：${error}`);
}

function onUninstalled() {
  console.log("附加组件已被卸载");
}

let uninstalling = browser.management.uninstall(id);
uninstalling.then(onUninstalled, onCanceled);
```

{{WebExtExamples}}

> [!NOTE]
> 该 API 基于 Chromium 的 [`chrome.management`](https://developer.chrome.google.cn/docs/extensions/reference/api/management#method-uninstall) API。本文衍生自 Chromium 代码中的 [`management.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/management.json)。

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
