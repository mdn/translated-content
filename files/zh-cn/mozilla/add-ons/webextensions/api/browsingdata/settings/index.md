---
title: browsingData.settings()
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/settings
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

浏览器内置的“清除历史记录”功能可以让用户清除各种类型的浏览数据。此功能提供一个用户界面，用户可以选择要删除的数据类型（例如历史记录、下载记录等）以及删除数据的时间范围。

此函数返回这些设置的当前值。

请注意，并非所有数据类型都可以通过用户界面删除，某些用户界面选项可能映射到多个数据类型。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let getSettings = browser.browsingData.settings()
```

### 参数

无。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，当成功时其会兑现一个包含设置信息的对象。该对象有三个属性：

- `options`
  - : `{{WebExtAPIRef("browsingData.RemovalOptions")}}`。一个描述当前选择的删除选项的 `RemovalOptions` 对象。
- `dataToRemove`
  - : `{{WebExtAPIRef("browsingData.DataTypeSet")}}`。包含可以在浏览器用户界面中切换的每种数据类型的属性。每个属性的值如果选中删除该类型的数据为 `true`，否则为 `false`。
- `dataRemovalPermitted`
  - : `{{WebExtAPIRef("browsingData.DataTypeSet")}}`。包含可以在浏览器用户界面中切换的每种数据类型的属性。如果设备的管理员允许用户删除该类型的数据，则对应属性的值为 `true`，否则为 `false`。

如果发生任何错误，Promise 将会被拒绝并带有错误消息。

## 浏览器兼容性

{{Compat}}

## 示例

记录当前设置：

```js
function onGotSettings(settings) {
  console.log(settings.options);
  console.log(settings.dataToRemove);
  console.log(settings.dataRemovalPermitted);
}

function onError(error) {
  console.error(error);
}

browser.browsingData.settings().then(onGotSettings, onError);
```

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.browsingData`](https://developer.chrome.google.cn/docs/extensions/reference/api/browsingData) API。

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
