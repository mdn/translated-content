---
title: tabs.setZoomSettings()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/setZoomSettings
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

设定指定标签页的缩放设置。这些设置在标签页进行导航后被重置为默认设置。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let settingZoomSettings = browser.tabs.setZoomSettings(
  tabId, // 可选的整型
  zoomSettings, // ZoomSettings
);
```

### 参数

- `tabId` {{optional_inline}}
  - : `integer`。要更改缩放设置的标签页的 ID。默认为当前窗口中的活动标签页。
- `zoomSettings`
  - : {{WebExtAPIRef('tabs.ZoomSettings')}}。定义如何处理缩放更改及其作用范围。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，在更改缩放设置后其会被兑现且不带有参数。如果找不到标签页或发生其他错误，promise 会以错误消息拒绝。

## 示例

禁用当前标签页的缩放：

```js
function onSet() {
  console.log(`已设置缩放因子`);
}

function onError(error) {
  console.log(`发生错误：${error}`);
}

let setting = browser.tabs.setZoomSettings({ mode: "disabled" });
setting.then(onSet, onError);
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.tabs`](https://developer.chrome.google.cn/docs/extensions/reference/api/tabs#method-setZoomSettings) API。该文档衍生自 Chromium 代码中的 [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json)。

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
