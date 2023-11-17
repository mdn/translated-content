---
title: windows.create()
slug: Mozilla/Add-ons/WebExtensions/API/windows/create
---

{{AddonSidebar()}}

创建一个新的窗口。

当你创建一个窗口时，你可以：

- 加载一个或多个新的标签到该窗口中。
- 将一个现有窗口的。标签移动到新的窗口中
- 设置窗口的大小和位置
- 创建一个面板样式的窗口，它没有浏览器的默认样式（地址栏，工具栏等）
- 设置窗口的多种属性，像是获得焦点或是为隐私窗口。

这是一个异步的方法返回一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## 语法

```js
var creating = browser.windows.create(
  createData, // optional object
);
```

### 参数

- `createData`{{optional_inline}}
  - : `object`.
    - `url`{{optional_inline}}
      - : 字符串或字符串数组。一个 URL 或都 URL 数组要在该窗口中打开成标签页的。完整的需要包括 scheme (像。`http://www.google.com`, not `www.google.com`). 相对路径将相对于该拓展中的当前页。默认为打开新标签页。
    - `tabId`{{optional_inline}}
      - : `integer`. 如果设置了该值，将该 tab 从一个现有的窗口中移到新窗口中。
    - `left`{{optional_inline}}
      - : `integer`. 窗口左边到屏幕左边缘的距离。如果没有设定，新窗口将按上一个焦点窗口定位水平位置。对于 panel 样式窗口，该值不起作用。
    - `top`{{optional_inline}}
      - : 窗口顶部到屏幕的顶部距离。如果没有设定，新窗口将按上一个焦点窗口定位垂直位置。对于 panel 样式窗口，该值不起作用。
    - `width`{{optional_inline}}
      - : `integer`. 新窗口的宽度，包含框架。未设定则使用默认宽度。
    - `height`{{optional_inline}}
      - : `integer`. 新窗口的高度，包含框架。未设定则使用默认高度。
    - `focused`{{optional_inline}}
      - : `boolean`.如果 为`true`, 新窗口将获取焦点。否则新窗口当在后台打开并且当前焦点窗口继续保持焦点。默认为 true
    - `incognito`{{optional_inline}}
      - : `boolean`。是否打开为一个隐私窗口。如果设定为隐私窗口并且引入了 `tabId`, 则 tabId 对应的标签必须是一个隐私标签— 即不能把一个不是隐私标签的标签页移动到隐私窗口中。
    - `type`{{optional_inline}}
      - : 一{{WebExtAPIRef('windows.CreateType')}} 值，表示创建窗口的类型。`panel` 或者`popup` 样式将打开一个没有默认浏览器样式的窗口 (地址栏，工具栏等）。
    - `state`{{optional_inline}}
      - : 一个 {{WebExtAPIRef('windows.WindowState')}} 值，窗口的祲状态。最小化、最大化、全屏状态不能与`left`, `top`, `width`, or `height`属性一起使用。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 其中传入一个包含新窗口细节的 {{WebExtAPIRef('windows.Window')}} 对象。这个{{WebExtAPIRef('windows.Window')}} 有自己的 tabs 属性集 ,而不像 {{WebExtAPIRef("windows.get()")}}返回的窗口对象和相似的 API, 如果传递了 populate 项其仅仅包含 tabs. 如果发生了错误 promise will be rejected with an error message.

## 示例

打开一个包含两个标签的窗口

```js
function onCreated(windowInfo) {
  console.log(`Created window: ${windowInfo.id}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.browserAction.onClicked.addListener((tab) => {
  var creating = browser.windows.create({
    url: ["https://developer.mozilla.org", "https://addons.mozilla.org"],
  });
  creating.then(onCreated, onError);
});
```

当用户点击一个 browser action 打开一个窗口，并且将当前活跃的标签移动其中

```js
function onCreated(windowInfo) {
  console.log(`Created window: ${windowInfo.id}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.browserAction.onClicked.addListener((tab) => {
  var creating = browser.windows.create({
    tabId: tab.id,
  });
  creating.then(onCreated, onError);
});
```

打开一个小面板样式的窗口，并且加载一个本地包中的文件到其中

```js
function onCreated(windowInfo) {
  console.log(`Created window: ${windowInfo.id}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
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

## 浏览器兼容性

{{Compat}}

{{WebExtExamples}}

> **备注：** This API is based on Chromium's [`chrome.windows`](https://developer.chrome.com/extensions/windows#method-create) API. This documentation is derived from [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json) in the Chromium code.
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
