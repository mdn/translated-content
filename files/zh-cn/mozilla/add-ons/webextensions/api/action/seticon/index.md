---
title: action.setIcon()
slug: Mozilla/Add-ons/WebExtensions/API/action/setIcon
l10n:
  sourceCommit: ad9a263686a44b9149ff50381994fed63562be55
---

{{AddonSidebar}}

设置浏览器操作的图标。

> [!NOTE]
> 该 API 在 Manifest V3 或更高版本中可用。

你可以指定图片文件的路径或 {{WebExtAPIRef('action.ImageDataType')}} 对象作为单个图标。

你可以通过提供包含多个路径或 `ImageData` 对象的字典来指定不同尺寸的多个图标。这意味着图标不需要为具有不同像素密度的设备进行缩放。

没有特定图标的标签页将继承全局图标，其默认为清单中指定的 [`default_icon`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action)。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let settingIcon = browser.action.setIcon(
  details         // object
)
```

### 参数

- `details`

  - : `object`，包含 `imageData`、`path` 属性其一的对象，并且可选的包含 `tabId`、`windowId` 属性。

    - `imageData` {{optional_inline}}

      - : `{{WebExtAPIRef('action.ImageDataType')}}` 或 `object`，这要么是 `ImageData` 对象，要么是一个字典对象。

        使用一个字典对象来指定不同尺寸的多个 `ImageData` 对象，这样图标就不需要为具有不同像素密度的设备进行缩放。如果 `imageData` 是一个字典，那么每个属性的名称是其尺寸，值是 `ImageData` 对象，如下所示：

        ```js
        let settingIcon = browser.action.setIcon({
          imageData: {
            16: image16,
            32: image32,
          },
        });
        ```

        浏览器会根据屏幕的像素密度选择要使用的图像。有关更多信息，请参见[选择图标尺寸](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#选择图标大小)。

    - `path` {{optional_inline}}

      - : `string` 或 `object`，这要么是一个图标文件的相对路径，要么是一个字典对象。

        使用一个字典对象来指定不同尺寸的多个图标文件，这样图标就不需要为具有不同像素密度的设备进行缩放。如果 `path` 是一个字典，那么每个属性的名称是其尺寸，值是相对路径，如下所示：

        ```js
        let settingIcon = browser.action.setIcon({
          path: {
            16: "path/to/image16.jpg",
            32: "path/to/image32.jpg",
          },
        });
        ```

        浏览器会根据屏幕的像素密度选择要使用的图像。有关更多信息，请参见[选择图标尺寸](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#选择图标大小)。

    - `tabId` {{optional_inline}}
      - : `integer`，指定要设置图标的标签页。当用户导航到新页面时，图标会被重置。
    - `windowId` {{optional_inline}}
      - : `integer`，指定要设置图标的窗口。

<!---->

- 若同时指定了 `windowId` 和 `tabId`，则函数出错且不会设置图标。
- 若同时未指定 `windowId` 和 `tabId`，则将设置全局图标。

若 `imageData` 和 `path` 都是 `undefined`、`null` 或空对象其一，则：

- 若指定了 `tabId`，且标签页设置了一个指定的图标，则标签页会继承它对应的窗口的图标。
- 若指定了 `windowId`，且窗口设置了一个指定的图标，则窗口会继承全局图标。
- 否则，全局图标会被重置为清单中的图标。

### 返回值

当图标被设置时，返回不兑现任何参数的 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)。

## 示例

这段代码使用浏览器操作来切换监听器的状态，监听器使用 {{WebExtAPIRef("webRequest.onHeadersReceived")}}，并使用 `setIcon()` 来指示监听器是开启还是关闭的：

```js
function logResponseHeaders(requestDetails) {
  console.log(requestDetails);
}

function startListening() {
  browser.webRequest.onHeadersReceived.addListener(
    logResponseHeaders,
    { urls: ["<all_urls>"] },
    ["responseHeaders"],
  );
  browser.action.setIcon({ path: "icons/listening-on.svg" });
}

function stopListening() {
  browser.webRequest.onHeadersReceived.removeListener(logResponseHeaders);
  browser.action.setIcon({ path: "icons/listening-off.svg" });
}

function toggleListener() {
  if (browser.webRequest.onHeadersReceived.hasListener(logResponseHeaders)) {
    stopListening();
  } else {
    startListening();
  }
}

browser.action.onClicked.addListener(toggleListener);
```

下面的代码通过使用 [`ImageData`](/zh-CN/docs/Web/API/ImageData) 对象设置图标：

```js
function getImageData() {
  let canvas = document.createElement("canvas");
  let ctx = canvas.getContext("2d");

  ctx.fillStyle = "green";
  ctx.fillRect(10, 10, 100, 100);

  return ctx.getImageData(50, 50, 100, 100);
}

browser.action.onClicked.addListener(() => {
  browser.action.setIcon({ imageData: getImageData() });
});
```

下面的代码在用户点击图标时更新图标，但仅对活动标签页生效：

```js
browser.action.onClicked.addListener((tab) => {
  browser.action.setIcon({
    tabId: tab.id,
    path: "icons/updated-48.png",
  });
});
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 该 API 基于 Chromium 的 [`chrome.action`](https://developer.chrome.google.cn/docs/extensions/reference/api/action#method-setIcon) API。本文衍生自 Chromium 代码中的 [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json)。

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
