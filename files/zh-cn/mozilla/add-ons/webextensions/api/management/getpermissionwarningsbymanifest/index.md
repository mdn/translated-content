---
title: management.getPermissionWarningsByManifest()
slug: Mozilla/Add-ons/WebExtensions/API/management/getPermissionWarningsByManifest
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

当用户安装或升级附加组件时，浏览器可能会警告用户该附加组件请求的任何特别强大的[权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)。并非所有权限都会导致警告，而且此行为在各个浏览器之间并没有统一的标准。

给定 [manifest.json](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json) 文件的文本，该函数会以字符串数组的形式返回生成的关于该附加组件的权限警告。

此 API *不*需要“management”[API 权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)。

这是一个异步函数，返回一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)。

## 语法

```js-nolint
let gettingWarnings = browser.management.getPermissionWarningsByManifest(
  manifestString      // 字符串
)
```

### 参数

- `manifestString`
  - : `string`，包含清单文件的字符串。必须是有效的清单，例如它必须包含所有强制性的清单键。

### 返回值

[`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，将用一个字符串数组兑现，其中各字符串都包含权限警告的文本。

## 浏览器兼容性

{{Compat}}

## 示例

打印给定清单文件的权限警告：

```js
let manifest = {
  manifest_version: 2,
  name: "test",
  version: "1.0",
  permissions: ["management", "<all_urls>"],
};

let manifestString = JSON.stringify(manifest);

function gotWarnings(warnings) {
  console.log(warnings);
}

function gotError(error) {
  console.log(`错误：${error}`);
}

let gettingWarnings =
  browser.management.getPermissionWarningsByManifest(manifestString);
gettingWarnings.then(gotWarnings, gotError);
```

{{WebExtExamples}}

> [!NOTE]
> 该 API 基于 Chromium 的 [`chrome.management`](https://developer.chrome.google.cn/docs/extensions/reference/api/management#method-getPermissionWarningsByManifest) API。本文衍生自 Chromium 代码中的 [`management.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/management.json)。

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
