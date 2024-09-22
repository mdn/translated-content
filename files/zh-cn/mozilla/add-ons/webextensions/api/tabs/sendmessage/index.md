---
title: tabs.sendMessage()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

从扩展的后台脚本（或其他特权脚本，如弹出窗口脚本或选项页脚本）向任何运行在指定标签页中的[内容脚本](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)或在扩展的页面或 iframe 发送一条消息。

该消息将在扩展上下文中由监听 [`runtime.onMessage`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage) 事件的监听器接收。监听器可以选择性地返回一个响应给发送者。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

> [!NOTE]
> 你还可以使用[基于连接的消息传递](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#基于连接的消息传递)。

## 语法

```js
const sending = browser.tabs.sendMessage(
  tabId, // 整型
  message, // 任意
  options, // 可选的对象
);
```

### 参数

- `tabId`
  - : `integer`。要向其发送消息的标签页的 ID。
- `message`
  - : `any`。可序列化的对象（参见[数据克隆算法](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#数据克隆算法)）。
- `options` {{optional_inline}}

  - : `object`。

    - `frameId` {{optional_inline}}
      - : `integer`。将消息发送到指定的框架（frame），而不是标签页中的所有框架。内容脚本是否在所有框架中执行取决于 `manifest.json` 的 [`content_scripts`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) 部分中的 `all_frames` 设置。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，如果内容脚本未发送响应其会被兑现且不带有参数。

如果在连接到指定标签页时或发生任何其他错误时出现错误，promise 将以错误信息拒绝。

如果多个框架响应了消息，promise 会兑现为其中一个响应。

## 示例

以下是一个后台脚本示例，当用户点击浏览器操作按钮时，向当前活动标签页中运行的内容脚本发送消息。后台脚本还期望内容脚本发送一个响应：

```js
// background-script.js
"use strict";

function onError(error) {
  console.error(`发生错误：${error}`);
}

function sendMessageToTabs(tabs) {
  for (const tab of tabs) {
    browser.tabs
      .sendMessage(tab.id, { greeting: "Hi from background script" })
      .then((response) => {
        console.log("Message from the content script:");
        console.log(response.response);
      })
      .catch(onError);
  }
}

browser.browserAction.onClicked.addListener(() => {
  browser.tabs
    .query({
      currentWindow: true,
      active: true,
    })
    .then(sendMessageToTabs)
    .catch(onError);
});
```

以下是相应的内容脚本示例：

```js
// content-script.js
"use strict";

browser.runtime.onMessage.addListener((request) => {
  console.log("Message from the background script:");
  console.log(request.greeting);
  return Promise.resolve({ response: "Hi from content script" });
});
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 这个 API 基于 Chromium 的 [`chrome.tabs`](https://developer.chrome.google.cn/docs/extensions/reference/api/tabs#method-sendMessage) API。本文档内容源自 Chromium 代码中的 [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json)。

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
