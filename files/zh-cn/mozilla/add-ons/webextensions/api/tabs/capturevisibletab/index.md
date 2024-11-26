---
title: tabs.captureVisibleTab()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/captureVisibleTab
l10n:
  sourceCommit: 7409f4b5405bb4cb4ffa33a31c7900d08960061f
---

{{AddonSidebar}}

创建一个编码了给定标签页区域图像的数据 URL。你必须拥有 `<all_urls>` 或 `activeTab` [权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)。

> [!NOTE]
> 在 Firefox 125 及更早版本中，此方法仅在拥有 `<all_urls>` 权限时可用。

除了扩展通常可以访问的站点之外，这种方法还允许扩展捕获那些通常受限制的敏感站点，包括浏览器用户界面页面和其他扩展的页面。只有通过 `activeTab` 权限才能捕获这些敏感站点。当扩展获得文件访问权限时，Chrome 也允许捕获文件 URL。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

```js-nolint
let capturing = browser.tabs.captureVisibleTab(
  windowId,               // 可选的整数
  options              // 可选的 extensionTypes.ImageDetails
)
```

### 参数

- `windowId` {{optional_inline}}
  - : `integer`。要捕获的窗口。默认为当前窗口。
- `options` {{optional_inline}}
  - : {{WebExtAPIRef('extensionTypes.ImageDetails')}}。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，其会兑现一个编码了捕获图像的数据 URL。可以赋值给 HTML 图片元素的 `'src'` 属性来显示。如果发生任何错误，promise 将以错误消息拒绝。

## 示例

捕获当前窗口中活动标签页的图像，使用默认图像设置：

```js
function onCaptured(imageUri) {
  console.log(imageUri);
}

function onError(error) {
  console.log(`错误：${error}`);
}

browser.browserAction.onClicked.addListener(() => {
  let capturing = browser.tabs.captureVisibleTab();
  capturing.then(onCaptured, onError);
});
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.tabs`](https://developer.chrome.google.cn/docs/extensions/reference/api/tabs#method-captureVisibleTab) API。本文档内容源自 Chromium 代码中的 [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json)。

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
