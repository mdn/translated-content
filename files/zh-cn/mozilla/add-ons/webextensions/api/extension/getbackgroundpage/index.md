---
title: extension.getBackgroundPage()
slug: Mozilla/Add-ons/WebExtensions/API/extension/getBackgroundPage
l10n:
  sourceCommit: a16fecbf75f71fc11e03ef6cd0b0c34ad6f3d480
---

{{AddonSidebar}}

若后台脚本在运行中，返回后台页面的 [Window](/zh-CN/docs/Web/API/Window)。若脚本未运行，则返回 null。

这是一个同步函数。

> [!NOTE]
> 该方法不能在隐私浏览模式下使用——它将总是返回 null。请考虑使用 {{WebExtAPIRef("runtime.sendMessage","runtime.sendMessage()")}} 或 {{WebExtAPIRef("runtime.connect","runtime.connect()")}}。更多信息请参见 [Firefox bug 1329304](https://bugzil.la/1329304)。

## 语法

```js-nolint
let page = browser.extension.getBackgroundPage()
```

### 参数

无。

### 返回值

`object`。后台页面的 [Window](/zh-CN/docs/Web/API/Window) 或 null。

## 示例

考虑[后台脚本](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#后台脚本)定义了一个函数 `foo()`：

```js
// background.js

function foo() {
  console.log("我是在 backgroubd.js 中被定义的");
}
```

在[弹窗](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#侧边栏，弹出窗口，选项页面)中运行的脚本可以直接调用这个函数：

```js
// popup.js

let page = browser.extension.getBackgroundPage();
page.foo(); // -> "我是在 backgroubd.js 中被定义的"
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.extension`](https://developer.chrome.com/docs/extensions/reference/extension/#method-getBackgroundPage) API。该文档衍生自 Chromium 代码中的 [`extension.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/extension.json)。

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
