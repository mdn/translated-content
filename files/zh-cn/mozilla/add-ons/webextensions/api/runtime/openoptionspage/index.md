---
title: runtime.openOptionsPage()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/openOptionsPage
---

假如你的页面有[options page](/zh-CN/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Options_pages)（设置页面）的定义，使用此方法打开它。这是一个异步方法，返回一个 `Promise` 对象。

## 语法

```js
var openingPage = browser.runtime.openOptionsPage();
```

### 参数

无

### 返回值

当设置页面成功创建，执行[Promise](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)的无参成功回调方法，否则执行[Promise](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)的失败回调方法，参数为错误信息。

## 浏览器兼容性

{{Compat}}

## 示例

当用户点击浏览器行为图标时，打开一个设置页面。

```js
function onOpened() {
  console.log(`Options page opened`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var opening = browser.runtime.openOptionsPage();
opening.then(onOpened, onError);
```

{{WebExtExamples}}

> **备注：** This API is based on Chromium's [`chrome.runtime`](https://developer.chrome.com/extensions/runtime#method-openOptionsPage) API. This documentation is derived from [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) in the Chromium code.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.

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
