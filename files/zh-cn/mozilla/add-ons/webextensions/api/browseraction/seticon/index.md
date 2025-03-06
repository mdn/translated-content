---
title: browserAction.setIcon()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/setIcon
l10n:
  sourceCommit: 53c832f09b5f55b2cbe040907bff8abfb7b57f72
---

{{AddonSidebar}}

这是一个设置浏览器操作图标的函数。

你可以指定单个图标，可以是图像文件的路径，也可以是一个 {{WebExtAPIRef('browserAction.ImageDataType')}} 对象。

如果要指定多个不同尺寸的图标，可以提供一个包含多个路径或 `ImageData` 对象的字典。这意味着图标不需要为具有不同像素密度的设备进行缩放。

如果没有指定特定图标的标签，将会继承全局图标，其默认为清单中指定的 [`default_icon`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action)。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let settingIcon = browser.browserAction.setIcon(
  details         // object
)
```

### 参数

- `details`

  - : `object`。一个包含 `imageData` 或 `path` 属性的对象，可选地包含一个 `tabId` 属性。

    - `imageData` {{optional_inline}}

      - : `{{WebExtAPIRef('browserAction.ImageDataType')}}` 或 `object`。这可以是单个 `ImageData` 对象或一个字典对象。

        使用字典对象来指定不同尺寸的多个 `ImageData` 对象，这样图标就不需要根据设备的不同像素密度进行缩放。如果 `ImageData` 是一个字典，则每个属性的值是一个 `ImageData` 对象，属性名是其尺寸，如下所示：

        ```js
        let settingIcon = browser.browserAction.setIcon({
          imageData: {
            16: image16,
            32: image32,
          },
        });
        ```

        浏览器将根据屏幕的像素密度选择要使用的图像。有关更多信息，请参阅[选择图标大小](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#选择图标大小)。

    - `path` {{optional_inline}}

      - : `string` 或 `object`。这可以是到图标文件的相对路径，也可以是一个字典对象。

        使用字典对象来指定不同尺寸的多个图标文件，这样图标就不需要根据设备的不同像素密度进行缩放。如果 `path` 是一个字典，则每个属性的值是一个相对路径，属性名是其尺寸，如下所示：

        ```js
        let settingIcon = browser.browserAction.setIcon({
          path: {
            16: "path/to/image16.jpg",
            32: "path/to/image32.jpg",
          },
        });
        ```

        浏览器将根据屏幕的像素密度选择要使用的图像。有关更多信息，请参阅[选择图标大小](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#选择图标大小)。

    - `tabId` {{optional_inline}}

      - : `integer`。仅为给定的标签设置图标。用户将该标签导航到新页面时，图标将被重置。

    - `windowId` {{optional_inline}}

      - : `integer`。为给定的窗口设置图标。

<!---->

- 如果同时提供了 `windowId` 和 `tabId`，函数将失败，并且图标不会设置。
- 如果同时省略了 `windowId` 和 `tabId`，则设置全局图标。

如果 `imageData` 和 `path` 中的每一个都是 `undefined`、`null` 或空对象中的一种：

- 如果指定了 `tabId`，并且标签设置了其特定标签图标，则该标签将从其所属的窗口继承图标。
- 如果指定了 `windowId`，并且窗口设置了其特定的窗口图标，则该窗口将继承全局图标。
- 否则，全局图标将重置为清单中的图标。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，一旦图标设置完成，其会兑现且不带任何参数。

## 浏览器兼容性

{{Compat}}

## 示例

以下示例代码使用浏览器操作来切换对 {{WebExtAPIRef("webRequest.onHeadersReceived")}} 的监听器，并使用 `setIcon()` 来指示监听器是开启还是关闭：

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
  browser.browserAction.setIcon({ path: "icons/listening-on.svg" });
}

function stopListening() {
  browser.webRequest.onHeadersReceived.removeListener(logResponseHeaders);
  browser.browserAction.setIcon({ path: "icons/listening-off.svg" });
}

function toggleListener() {
  if (browser.webRequest.onHeadersReceived.hasListener(logResponseHeaders)) {
    stopListening();
  } else {
    startListening();
  }
}

browser.browserAction.onClicked.addListener(toggleListener);
```

以下代码使用 [`ImageData`](/zh-CN/docs/Web/API/ImageData) 对象设置图标：

```js
function getImageData() {
  let canvas = document.createElement("canvas");
  let ctx = canvas.getContext("2d");

  ctx.fillStyle = "green";
  ctx.fillRect(10, 10, 100, 100);

  return ctx.getImageData(50, 50, 100, 100);
}

browser.browserAction.onClicked.addListener(() => {
  browser.browserAction.setIcon({ imageData: getImageData() });
});
```

以下代码段在用户点击图标时更新图标，但仅适用于活动选项卡：

```js
browser.browserAction.onClicked.addListener((tab) => {
  browser.browserAction.setIcon({
    tabId: tab.id,
    path: "icons/updated-48.png",
  });
});
```

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.browserAction`](https://developer.chrome.google.cn/docs/extensions/mv2/reference/browserAction#method-setIcon) API。该文档衍生自 Chromium 代码中的 [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json)。

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
