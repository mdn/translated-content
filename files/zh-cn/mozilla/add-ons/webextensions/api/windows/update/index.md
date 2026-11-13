---
title: windows.update()
slug: Mozilla/Add-ons/WebExtensions/API/windows/update
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

更新窗口的属性。使用此方法可以移动、调整大小、聚焦/取消聚焦窗口等。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let updating = browser.windows.update(
  windowId,              // 整型
  updateInfo             // 对象
)
```

### 参数

- `windowId`
  - : `integer`。要更新的窗口的 ID。
- `updateInfo`
  - : `object`。包含要更新的属性值。
    - `drawAttention` {{optional_inline}}
      - : `boolean`。若为 `true`，则以一种吸引用户的注意力而不改变当前聚焦的窗口的方式显示这一窗口。效果持续到用户将焦点切换到窗口为止。如果窗口是被聚焦的窗口则此选项无效。设置为 `false` 可以取消之前的 `drawAttention` 请求。
    - `focused` {{optional_inline}}
      - : `boolean`。若为 `true`，将窗口置于前端。如果为 `false`，将 z 轴顺序中的下一个窗口置于前端。
    - `height` {{optional_inline}}
      - : `integer`。要调整窗口大小的高度（以像素为单位）。对于面板，此值将被忽略。
    - `left` {{optional_inline}}
      - : `integer`。要将窗口移动到的屏幕左边缘的偏移量（以像素为单位）。对于面板，此值将被忽略。
    - `state` {{optional_inline}}
      - : {{WebExtAPIRef('windows.WindowState')}} 值。窗口的新状态。`minimized`、`maximized` 和 `fullscreen` 状态不能与 `left`、`top`、`width` 或 `height` 结合使用。
    - `titlePreface` {{optional_inline}}
      - : `string`。使用此选项将字符串添加到浏览器窗口的标题开头。根据底层操作系统的不同，这可能无法在没有标题的浏览器窗口上工作（例如 Firefox 中的 about:blank）。
    - `top` {{optional_inline}}
      - : `integer`。要将窗口移动到的屏幕顶部边缘的偏移量（以像素为单位）。对于面板，此值将被忽略。
    - `width` {{optional_inline}}
      - : `integer`。要调整窗口大小的宽度（以像素为单位）。对于面板，此值将被忽略。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，其会兑现为包含更新窗口详细信息的 {{WebExtAPIRef('windows.Window')}} 对象。如果发生任何错误则该 promise 将以错误消息拒绝。

## 浏览器兼容性

{{Compat}}

## 示例

当用户点击浏览器操作的图标时，将窗口移动到左上角：

```js
function onUpdated(windowInfo) {
  console.log(`更新窗口：${windowInfo.id}`);
}

function onError(error) {
  console.log(`发生错误：${error}`);
}

browser.browserAction.onClicked.addListener((tab) => {
  let updating = browser.windows.update(tab.windowId, {
    left: 0,
    top: 0,
  });
  updating.then(onUpdated, onError);
});
```

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.windows`](https://developer.chrome.google.cn/docs/extensions/reference/api/windows#method-update) API。该文档衍生自 Chromium 代码中的 [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json)。

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
