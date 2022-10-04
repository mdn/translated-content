---
title: tabs.discard()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/discard
---

{{AddonSidebar()}}

丢弃一个或多个标签页。

一些浏览器会自动“丢弃”它们认为近期不再被用户所需要的标签页。这些标签页会在标签栏中保持可见，浏览器会记住它们的状态，所以，如果用户选中了被丢弃的标签页，它会立即还原到被丢弃之前的状态。

对于不同的浏览器，被丢弃内容的详细内容是有所不同的，但是从大体上来说，丢弃一个标签页允许浏览器释放一些该标签页所占用的内存。

The {{WebExtAPIRef("tabs.discard()")}} API enables an extension to discard one or more tabs. It's not possible to discard the currently active tab, or a tab whose document contains a [`beforeunload`](/zh-CN/docs/Web/Events/beforeunload) listener that would display a prompt.

This is an asynchronous function that returns a [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## 语法

```js
var discarding = browser.tabs.discard(
  tabIds          // integer or integer array
)
```

### Parameters

- `tabIds`
  - : `integer` or `array` of `integer`. The IDs of the tab or tabs to discard.

### Return value

A [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with no arguments when all the specified tabs have been discarded. If any error occurs (for example, invalid tab IDs), the promise will be rejected with an error message.

If the ID of the active tab is passed in, it will not be discarded, but the promise will be fulfilled and any other tabs passed in will be discarded.

## 浏览器兼容性

{{Compat}}

## 示例

丢弃一个标签页：

```js
function onDiscarded() {
  console.log(`Discarded`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var discarding = browser.tabs.discard(2);
discarding.then(onDiscarded, onError);
```

丢弃多个标签页：

```js
function onDiscarded() {
  console.log(`Discarded`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var discarding = browser.tabs.discard([15, 14, 1]);
discarding.then(onDiscarded, onError);
```

{{WebExtExamples}}

> **备注：** This API is based on Chromium's [`chrome.tabs`](https://developer.chrome.com/extensions/tabs#method-discard) API.

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
