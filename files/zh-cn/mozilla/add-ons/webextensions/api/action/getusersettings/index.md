---
title: action.getUserSettings()
slug: Mozilla/Add-ons/WebExtensions/API/action/getUserSettings
l10n:
  sourceCommit: b30a10c08b986ebabd44733fb62f67667350403e
---

获取浏览器操作的用户设置。

> [!NOTE]
> 该 API 在 Manifest V3 或更高版本中可用。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let userSettings = await browser.action.getUserSettings();
```

### 参数

无参数。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，会兑现包含下列属性的对象：

- `userSettings`
  - : 包含由用户指定的浏览器操作设置的对象，具有下列属性：
    - `isOnToolbar` {{optional_inline}}
      - : `boolean`，用户是否将该操作的图标固定到浏览器 UI。这一设置并不能指示操作图标是否可见。可见性取决于浏览器窗口的尺寸以及浏览器 UI 布局。

## 示例

以下代码输出指示操作是否被固定的信息：

```js
function gotSettings(userSettings) {
  if (userSettings.isOnToolbar) {
    console.log("操作被固定到工具栏");
  } else {
    console.log("操作未被固定到工具栏。");
  }
}

let gettingUserSettings = browser.action.getUserSettings();
gettingUserSettings.then(gotSettings);
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.action`](https://developer.chrome.google.cn/docs/extensions/reference/api/action#method-getUserSettings) API。

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
