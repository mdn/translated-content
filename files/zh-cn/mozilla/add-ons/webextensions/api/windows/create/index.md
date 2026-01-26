---
title: windows.create()
slug: Mozilla/Add-ons/WebExtensions/API/windows/create
l10n:
  sourceCommit: 93a294e01930e2cf4616104be17e419719d5ab22
---

创建一个新的窗口。

当你创建一个窗口时，你可以：

- 加载一个或多个新的标签页到该窗口中。
- 将一个现有窗口的标签页移动到新的窗口中
- 设置窗口的大小和位置
- 创建一个“面板”样式（没有任何浏览器 UI（如地址栏、工具栏等））的窗口。
- 设置窗口的多种属性，如获得焦点或设为隐私窗口。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let creating = browser.windows.create(
  createData            // 可选对象
)
```

### 参数

- `createData` {{optional_inline}}
  - : `object`。
    - `allowScriptsToClose` {{optional_inline}}
      - : `boolean`。当窗口打开时，它将包含一个标签页（如果提供了 `url` 参数并且值是包含一个包含多个 URL 的数组，则将包含多个标签页）。默认情况下，运行在这些页面中的脚本不允许使用 [`window.close()`](/zh-CN/docs/Web/API/Window/close) 来关闭它们所在的标签页。如果你包括 `allowScriptsToClose` 并将其设置为 `true`，那么这个默认行为将被更改，此时脚本才可以关闭它们所在的标签页。注意：
        - 这仅适用于在创建窗口时打开的标签页。如果用户在此窗口中打开了更多标签页，则脚本将无法关闭这些新标签页。
        - 如果 `url` 中给出的 URL 指向[扩展页面](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages)（即，它们是包含在此扩展中并使用“moz-extension:”协议加载的页面），则脚本将*被*默认允许关闭这些标签页。

    - `cookieStoreId` {{optional_inline}}
      - : `integer`。如果指定该参数，则将为打开的所有标签页指定 `CookieStoreId`。有关使用 `cookieStoreId` 的更多信息，请参见[使用场景身份](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities)。
    - `focused` {{optional_inline}}
      - : `boolean`。如果为 `true`，新窗口将获得焦点。如果为 `false`，新窗口将在后台打开，当前获得焦点的窗口将保持焦点。默认为 `true`。
    - `height` {{optional_inline}}
      - : `integer`。新窗口的像素高度，包含框架。如果未指定，则默认使用固有高度。
    - `incognito` {{optional_inline}}
      - : `boolean`。设置新窗口是否应为隐私窗口。请注意，如果指定了 `incognito` 和 `tabId`，则指定的标签页 ID 必须指向是隐私标签——你不能将非隐私标签页移动到隐私窗口中。
    - `left` {{optional_inline}}
      - : `integer`。新窗口从屏幕左边缘的像素位置。如果未指定，新窗口将按照上一个获得焦点的窗口自然偏移。（在 Firefox 108 或更早版本中，对于 `panel` 或 `popup` 窗口类型，该值不起作用；作为代替，你可以使用 {{WebExtAPIRef("windows.update()")}} 来定位窗口。）
    - `state` {{optional_inline}}
      - : {{WebExtAPIRef('windows.WindowState')}} 值。窗口的初始状态。`minimized`、`maximized`、`fullscreen` 状态不能与 `left`、`top`、`width`、`height` 属性一起使用。
    - `tabId` {{optional_inline}}
      - : `integer`。如果给定，则将指定 ID 的标签页从现有窗口移动到新窗口中。
    - `titlePreface` {{optional_inline}}
      - : `string`。使用此项将一个字符串添加到浏览器窗口的标题的开头。根据底层操作系统的不同，这可能不适用于没有标题的浏览器窗口（例如 Firefox 中的 about:blank）。
    - `top` {{optional_inline}}
      - : `integer`。新窗口从屏幕上边缘的像素位置。如果未指定，新窗口将按照上一个获得焦点的窗口自然偏移。（在 Firefox 108 或更早版本中，对于 `panel` 或 `popup` 窗口类型，该值不起作用；作为代替，你可以使用 {{WebExtAPIRef("windows.update()")}} 来定位窗口。）
    - `type` {{optional_inline}}
      - : {{WebExtAPIRef('windows.CreateType')}} 值。要创建的浏览器窗口类型。在这里指定 `panel` 或 `popup` 样式将打开一个没有任何默认浏览器 UI（地址栏，工具栏等）的窗口。
    - `url` {{optional_inline}}
      - : `string` 或其数组（`array`）。要在窗口中打开的 URL 或 URL 数组。完全限定 URL 必须包含方案（即 `http://www.google.com`，而不是 `www.google.com`）。相对 URL 将相对于扩展中的当前页面。默认为新标签页。
    - `width` {{optional_inline}}
      - : `integer`。新窗口的宽度，包含框架。如果未指定，则默认使用固有宽度。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，其会兑现包含新窗口细节的 {{WebExtAPIRef('windows.Window')}} 对象。该 `Window` 兑现将总是包含其 `tabs` 属性集，而不像 {{WebExtAPIRef("windows.get()")}} 和类似的 API 返回的窗口对象那样只在传递了 `populate` 选项时才会包含 `tabs`。如果发生了错误则该 promise 将以错误消息拒绝。

## 示例

打开一个包含两个标签的窗口：

```js
function onCreated(windowInfo) {
  console.log(`已创建窗口：${windowInfo.id}`);
}

function onError(error) {
  console.log(`发生错误：${error}`);
}

browser.browserAction.onClicked.addListener((tab) => {
  var creating = browser.windows.create({
    url: ["https://developer.mozilla.org", "https://addons.mozilla.org"],
  });
  creating.then(onCreated, onError);
});
```

当用户点击浏览器操作时将打开一个窗口，并且将当前活跃的标签页移动至新窗口中：

```js
function onCreated(windowInfo) {
  console.log(`已创建窗口：${windowInfo.id}`);
}

function onError(error) {
  console.log(`发生错误：${error}`);
}

browser.browserAction.onClicked.addListener((tab) => {
  var creating = browser.windows.create({
    tabId: tab.id,
  });
  creating.then(onCreated, onError);
});
```

打开一个小的面板样式的窗口，并且加载一个本地包中的文件到其中

```js
function onCreated(windowInfo) {
  console.log(`已创建窗口：${windowInfo.id}`);
}

function onError(error) {
  console.log(`发生错误：${error}`);
}

browser.browserAction.onClicked.addListener((tab) => {
  var popupURL = browser.extension.getURL("popup/popup.html");

  var creating = browser.windows.create({
    url: popupURL,
    type: "popup",
    height: 200,
    width: 200,
  });
  creating.then(onCreated, onError);
});
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.windows`](https://developer.chrome.google.cn/docs/extensions/reference/api/windows#method-create) API。该文档衍生自 Chromium 代码中的 [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json)。

## 参见

- {{domxref("Window.open()","window.open")}}

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
