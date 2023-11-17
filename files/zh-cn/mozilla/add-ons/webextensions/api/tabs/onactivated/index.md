---
title: tabs.onActivated
slug: Mozilla/Add-ons/WebExtensions/API/tabs/onActivated
---

{{AddonSidebar()}}当窗体的活动标签变化时触发。请注意事件触发时标签的 URL 可能尚未设置，但是你可以通过监听 {{WebExtAPIRef("tabs.onUpdated")}} 事件在 URL 被设置后得到通知。

## 语法

```js
browser.tabs.onActivated.addListener(listener);
browser.tabs.onActivated.removeListener(listener);
browser.tabs.onActivated.hasListener(listener);
```

此事件有三个方法：

- `addListener(callback)`
  - : 向此事件添加一个监听。
- `removeListener(listener)`
  - : 停止监听此事件。 `listener` 参数是将要移除的监听。
- `hasListener(listener)`
  - : 检查 `listener` 是否在此事件中注册。如果正在监听返回 `true` ，否则 `false`。

## addListener 语法

### 参数

- `callback`

  - : 事件发生时被执行的方法。以下参数会被传递至该方法：

    - `activeInfo`
      - : [`object`](#activeInfo). 被激活标签的 ID , 以及它的窗体的 ID。

## 额外的对象

### activeInfo

- `tabId`
  - : `integer`. 被激活的标签的 ID。
- `windowId`
  - : `integer`. 此标签的窗体的 ID。

## 浏览器兼容性

{{Compat}}

## 示例

监听并记录标签激活事件：

```js
function handleActivated(activeInfo) {
  console.log("Tab " + activeInfo.tabId + " was activated");
}

browser.tabs.onActivated.addListener(handleActivated);
```

{{WebExtExamples}}

> **备注：** This API is based on Chromium's [`chrome.tabs`](https://developer.chrome.com/extensions/tabs#event-onActivated) API. This documentation is derived from [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) in the Chromium code.
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
