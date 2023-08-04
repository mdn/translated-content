---
title: runtime.sendMessage()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage
---

{{AddonSidebar()}}向你的扩展或其他扩展发送单条消息。如果想发给你自己的扩展，则省略 `extensionId` 参数。扩展中所有页面的{{WebExtAPIRef('runtime.onMessage')}}将会被触发，除了调用`runtime.sendMessage` 的页面。

如果发送给其他扩展，则将参数 `extensionId` 设置为其他扩展的 ID。其他扩展的 {{WebExtAPIRef('runtime.onMessageExternal')}} 将会被触发。

此接口不能给 content script 发消息，如果要给 content script 发消息，请使用 {{WebExtAPIRef('tabs.sendMessage')}}。

这是个异步方法，将返回一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)。

Syntax

```js
var sending = browser.runtime.sendMessage(
  extensionId, // optional string
  message, // any
  options, // optional object
);
```

### 参数

- `extensionId`{{optional_inline}}
  - : `string`. 若你想要发给不同的扩展，这里传入接收方的扩展 ID。The ID of the extension to send the message to. Include this to send the message to a different extension. If the intended recipient has set an ID explicitly using the [applications](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/applications) key in manifest.json, then `extensionId` should have this value. Otherwise it should be have the ID that was generated for the intended recipient. 若此省略此参数，则发送给自己的扩展。
- `message`
  - : `any`. 任何可以序列化成 JSON 的东西。
- `options`{{optional_inline}}
  - : `object`.
    - `includeTlsChannelId`{{optional_inline}}
      - : `boolean`. Whether the TLS channel ID will be passed into {{WebExtAPIRef('runtime.onMessageExternal')}} for processes that are listening for the connection event.
    - `toProxyScript` {{optional_inline}}
      - : `boolean`. Must be True if the message is intended for a PAC file loaded using the {{WebExtAPIRef("proxy")}} API.

根据给出的参数不同，API 遵循如下规则：

- **只有 1 个参数**：将会被当做 message 发送给自己的扩展。
- **有 2 个参数**：

  - 若第二个参数符合下面的规则，将会被当做 `(message, options)`，将消息发送给自己的扩展：

    1. 一个合法的配置对象（也就是说这个对象只包含 options 参数支持的属性）
    2. null
    3. undefined

  - 否则，将会被当做 `(extensionId, message)`。消息将会给发送给 `extensionId` 指定 ID 的扩展

- **有 3 个参数**：将会被当做 `(extensionId, message, options)`. 消息将会给发送给 `extensionId` 指定 ID 的扩展

> **备注：** 在 Firefox 55 之前，只给出 2 个参数时，规则会有所不同：
> Under the old rules, if the first argument was a string, it was treated as the `extensionId`, with the message as the second argument. This meant that if you called `sendMessage()` with arguments like `("my-message", {})`, then it would send an empty message to the extension identified by "my-message". Under the new rules, with these arguments you would send the message "my-message" internally, with an empty options object.

### Return value

返回一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)。若接收方响应，Promise 将会变为 fulfilled 并且返回接收方响应的 JSON 对象（数字、字符串、数组、true/false 都是合法的 JSON 对象）。否则，Promise 会变为 fulfilled 但是不返回任何参数。如果发生了连接错误，Promise 将会变为 rejected 并返回一个错误消息。

## Browser compatibility

{{Compat}}

## Examples

Here's a content script that sends a message to the background script when the user clicks the content window. The message payload is `{greeting: "Greeting from the content script"}`, and the sender also expects to get a response, which is handled in the `handleResponse` function:

```js
// content-script.js

function handleResponse(message) {
  console.log(`Message from the background script:  ${message.response}`);
}

function handleError(error) {
  console.log(`Error: ${error}`);
}

function notifyBackgroundPage(e) {
  var sending = browser.runtime.sendMessage({
    greeting: "Greeting from the content script",
  });
  sending.then(handleResponse, handleError);
}

window.addEventListener("click", notifyBackgroundPage);
```

The corresponding background script looks like this:

```js
// background-script.js

function handleMessage(request, sender, sendResponse) {
  console.log("Message from the content script: " + request.greeting);
  sendResponse({ response: "Response from background script" });
}

browser.runtime.onMessage.addListener(handleMessage);
```

{{WebExtExamples}}

> **备注：** This API is based on Chromium's [`chrome.runtime`](https://developer.chrome.com/extensions/runtime#method-sendMessage) API. This documentation is derived from [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) in the Chromium code.
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
