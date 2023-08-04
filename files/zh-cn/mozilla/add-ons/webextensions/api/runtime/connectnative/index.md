---
title: 连接本地应用程序方法 - runtime.connectNative()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/connectNative
---

{{AddonSidebar()}}该方法能够把附加组件和用户计算机上的一个本地应用程序相连接。同时我们需要本地应用程序的名称作为参数。当启动本地应用程序的时候会返回一个{{WebExtAPIRef("runtime.Port")}} 对象给调用者。之后可以通过该对象的 Port.onMessage() 和 Port.postMessage() 方法来和本地应用程序进行信息交互。本地应用程序会一直运行直到退出，除非调用了 `Port.disconnect()`方法，亦或创建该 Port 对象的页面被摧毁了。一旦 Port 对象断开连接，浏览器会给该进程几秒的时间以便安全优雅的退出和释放，之后如果发现该进程没退出的话就直接暴力干掉。

更多信息，请查看 [Native messaging](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Native_messaging).

## 语法

```js
var port = browser.runtime.connectNative(
  application, // 这是一个字符串
);
```

### 参数

- `application`
  - : 值类型为 `string`。该参数的值为要连接的本地应用程序的名称。必须要跟 [native application's manifest file](/zh-CN/Add-ons/WebExtensions/Native_messaging#App_manifest) 中的"name"特性的值一致。

### 返回值

是一个 {{WebExtAPIRef('runtime.Port')}} 对象。该对象是用来跟本地应用程序进行消息交互的。

## 浏览器的兼容性

{{Compat}}

## 示例

本示例中连接了本地应用程序"ping_pong"并且启动了监听以便接收消息。当用户单击浏览器上的操作按钮时它会发送一个本地应用程序的消息：

```js
/*
启动时，连接"ping_pong"本地应用程序。
*/
var port = browser.runtime.connectNative("ping_pong");

/*
监听 (接收) 来自"ping_pong"本地应用程序的消息。
*/
port.onMessage.addListener((response) => {
  console.log("Received: " + response);
});

/*
当浏览器上的单击操作被触发时，发送一个消息给本地应用程序。
*/
browser.browserAction.onClicked.addListener(() => {
  console.log("Sending:  ping");
  port.postMessage("ping");
});
```

{{WebExtExamples}}

> **备注：** 该 API 是基于 Chromium 的 [`chrome.runtime`](https://developer.chrome.com/extensions/runtime#method-connectNative) API. 本文档采自 Chromium 代码中的 [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json).
>
> Microsoft Edge 的兼容性数据由微软公司提供，并被列入以下许可证 Creative Commons Attribution 3.0 United States License.

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
