---
title: management.onInstalled()
slug: Mozilla/Add-ons/WebExtensions/API/management/onInstalled
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

当有附加组件被安装时触发。

此 API 需要“management”[API 权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)。

## 语法

```js-nolint
browser.management.onInstalled.addListener(listener)
browser.management.onInstalled.removeListener(listener)
browser.management.onInstalled.hasListener(listener)
```

事件有三个函数：

- `addListener(listener)`
  - : 向此事件添加监听器。
- `removeListener(listener)`
  - : 停止监听此事件。`listener` 参数是要移除的监听器。
- `hasListener(listener)`
  - : 检查是否已为此事件注册了 `listener`。如果正在监听，则返回 `true`，否则返回 `false`。

## addListener 语法

### 参数

- `listener`

  - : 在此事件发生时调用的函数。此函数接收以下参数：

    - `info`
      - : [`ExtensionInfo`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/management/ExtensionInfo)，关于已安装的附加组件的信息。

## 浏览器兼容性

{{Compat}}

## 示例

打印被安装的附加组件的名称：

```js
browser.management.onInstalled.addListener((info) => {
  console.log(`${info.name} 被安装`);
});
```

{{WebExtExamples}}

> [!NOTE]
> 该 API 基于 Chromium 的 [`chrome.management`](https://developer.chrome.google.cn/docs/extensions/reference/api/management#event-onInstalled) API。本文衍生自 Chromium 代码中的 [`management.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/management.json)。

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
