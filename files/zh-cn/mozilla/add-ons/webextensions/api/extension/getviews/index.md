---
title: extension.getViews()
slug: Mozilla/Add-ons/WebExtensions/API/extension/getViews
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

返回当前扩展内运行的每个页面的 [Window](/zh-CN/docs/Web/API/Window) 对象数组。例如，这包括：

- 后台页面（若定义了）
- 任何弹出页面（若定义并已加载）
- 任何选项页面（若定义并已加载）
- 任何托管了扩展打包内容的浏览器标签页

在 Firefox 中，如果从隐私浏览窗口的页面调用此方法，例如从隐私窗口中的侧边栏或从隐私窗口打开的弹出窗口，则其返回值将不包括扩展的后台页面。

## 语法

```js-nolint
let windows = browser.extension.getViews(
  fetchProperties // 可选的对象
)
```

### 参数

- `fetchProperties` {{optional_inline}}
  - : 包含如下属性的对象：
    - `type` {{optional_inline}}
      - : `string`，指示要获取的视图类型的 {{WebExtAPIRef('extension.ViewType')}}。如果省略，此函数将返回所有视图。
    - `windowId` {{optional_inline}}
      - : `integer`，要限制搜索范围的窗口。如果省略，此函数将返回所有视图。在 Firefox 版本 92 及更早版本中，侧边栏视图并不匹配，因此将不会被返回。

### 返回值

`object` 数组（`array`）：[Window](/zh-CN/docs/Web/API/Window) 对象数组。

## 浏览器兼容性

{{Compat}}

## 示例

获取属于此扩展的所有窗口，并记录它们的 URL：

```js
const windows = browser.extension.getViews();

for (const extensionWindow of windows) {
  console.log(extensionWindow.location.href);
}
```

仅获取托管了扩展打包内容的浏览器标签页中的窗口：

```js
const windows = browser.extension.getViews({ type: "tab" });
```

仅获取弹出页面中的窗口：

```js
const windows = browser.extension.getViews({ type: "popup" });
```

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.extension`](https://developer.chrome.google.cn/docs/extensions/reference/api/extension/#method-getViews) API。该文档衍生自 Chromium 代码中的 [`extension.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/extension.json)。

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
