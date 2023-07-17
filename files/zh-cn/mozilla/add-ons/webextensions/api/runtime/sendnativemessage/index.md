---
title: runtime.sendNativeMessage()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/sendNativeMessage
---

{{AddonSidebar()}}

从 WebExtension 发送单条消息到 native application。

它需要两个强制的参数：native application 的名字和要发送给它的 JSON 对象。浏览器将会加载 native application 然后发送这个消息。

这是一个异步函数，返回一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)对象。native application 发送的第一条消息将被当作`sendNativeMessage()` 的回复，并且 promise 将这个消息作为参数.。注意你不能使用 {{WebExtAPIRef("runtime.onMessage")}} 从应用获取回复：你必须使用回调函数来替代。

每次调用 `runtime.sendNativeMessage()`都会生成一个新的实例。浏览器将会在收到回复后结束这个 native application。为了结束这个 native application，浏览器将会关闭 pipe，并给进程几秒的时间优雅的退出，如果它没有关闭就杀死它。

更对信息，参考 [Native messaging](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Native_messaging)。

## 语法

```js
var sending = browser.runtime.sendNativeMessage(
  application, // string
  message, // object
);
```

### 参数

- `application`
  - : `字符串类型。`native application 的名字。它必须和 [native application's manifest file](/zh-CN/Add-ons/WebExtensions/Native_messaging#App_manifest)中的‘name’字段一致。
- `message`
  - : `对象类型。一个将要发送给` native application 的 JSON 对象。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)对象。如果 native application 发送了一个回复，它将会填充回复的 JSON 对象作为参数。否则它不会填充参数。如果在 native application 连接期间发生了错误，promise 将会被一个错误的消息拒绝。

## 浏览器兼容性

{{Compat}}

## 示例

这是一个 background script，当使用者点击浏览器的 browser action 时，它会发送 "ping" 消息到 "ping_pong" 应用并且把回复记录下来：

```js
function onResponse(response) {
  console.log(`Received ${response}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

/*
On a click on the browser action, send the app a message.
*/
browser.browserAction.onClicked.addListener(() => {
  console.log("Sending:  ping");
  var sending = browser.runtime.sendNativeMessage("ping_pong", "ping");
  sending.then(onResponse, onError);
});
```

{{WebExtExamples}}

> **备注：** 这个 API 基于 Chromium 的 [`chrome.runtime`](https://developer.chrome.com/extensions/runtime#method-sendNativeMessage) API。本文来自 Chromium 代码中的 [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) 。
>
> 微软 Edge 的兼容性数据由 Microsoft Corporation 提供，并且包含在这里基于 Creative Commons Attribution 3.0 United States License。

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
