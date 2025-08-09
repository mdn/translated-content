---
title: pageAction.setIcon()
slug: Mozilla/Add-ons/WebExtensions/API/pageAction/setIcon
l10n:
  sourceCommit: 53c832f09b5f55b2cbe040907bff8abfb7b57f72
---

设置页面操作的图标。

你可以指定图片文件的路径或 {{WebExtAPIRef('sidebarAction.ImageDataType')}} 对象作为单个图标。

你也可以通过提供一个包含多个路径或 `ImageData` 对象的字典来指定多个不同尺寸的图标，这样图标就不必为具有不同像素密度的设备进行缩放。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let settingIcon = browser.pageAction.setIcon(
  details         // 对象
)
```

### 参数

- `details`
  - : `object`。包含 `imageData`、`path` 其中一个属性和 `tabId` 属性的对象。
    - `imageData` {{optional_inline}}
      - : {{WebExtAPIRef('sidebarAction.ImageDataType')}} 或 `object`。这要么是一个单一的 `ImageData` 对象，要么是一个字典对象。

        使用字典对象来指定多个不同尺寸的 `ImageData` 对象，这样图标就不必为具有不同像素密度的设备进行缩放。如果 `imageData` 是一个字典，那么每个属性的值是一个 `ImageData` 对象，其名称是其大小，例如：

        ```js
        let settingIcon = browser.pageAction.setIcon({
          imageData: {
            16: image16,
            32: image32,
          },
        });
        ```

        浏览器将根据屏幕的像素密度选择要使用的图像。有关更多信息，请参阅[选择图标大小](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#选择图标大小)。

    - `path` {{optional_inline}}
      - : `string` 或 `object`。这要么是指向图标文件的相对路径，要么是一个字典对象。

        使用字典对象来指定多个不同尺寸的图标文件，这样图标就不必为具有不同像素密度的设备进行缩放。如果 `path` 是一个字典，那么每个属性的值是一个相对路径，其名称是其大小，例如：

        ```js
        let settingIcon = browser.pageAction.setIcon({
          path: {
            16: "path/to/image16.jpg",
            32: "path/to/image32.jpg",
          },
        });
        ```

        浏览器将根据屏幕的像素密度选择要使用的图像。有关更多信息，请参阅[选择图标大小](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action#选择图标大小)。

        如果 `path` 为 `null`，则会重置页面操作的图标为在 [`page_action`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) 清单键中指定的图标。

        如果 `path` 为 `""`，则会将图标重置为浏览器的全局默认图标（即如果在 [`page_action`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) 清单键中未指定图标时使用的图标）。

        如果 `path` 指向的图标无效，则不会显示图标。

    - `tabId`
      - : `integer`。要设置图标的标签页的 ID。

### 返回值

[`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，当图标被设置时将不带参数地兑现。

## 浏览器兼容性

{{Compat}}

## 示例

当用户点击页面操作时设置其图标：

```js
browser.pageAction.onClicked.addListener((tab) => {
  browser.pageAction.setIcon({
    tabId: tab.id,
    path: "icons/icon-48.png",
  });
});
```

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.pageAction`](https://developer.chrome.google.cn/docs/extensions/mv2/reference/pageAction#method-setIcon) API。该文档衍生自 Chromium 代码中的 [`page_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/page_action.json)。

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
