---
title: runtime.sendMessage()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage
l10n:
  sourceCommit: d6856a051d0ba078ec1d24b80908b1ca174917db
---

向你的扩展或其他扩展中的事件监听器发送一条消息。

如果想发给你自己的扩展，则省略 `extensionId` 参数。扩展中除调用 `runtime.sendMessage` 的页面以外的所有页面都会触发 {{WebExtAPIRef('runtime.onMessage')}} 事件。

如果要发送给其他扩展，则将参数 `extensionId` 设置为其他扩展的 ID。其他扩展的 {{WebExtAPIRef('runtime.onMessageExternal')}} 将会被触发。默认情况下，你的扩展可以与其自身以及其他任何扩展（通过 `extensionId` 定义）传递消息。但是，可以使用 [`externally_connectable`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/externally_connectable) 来限制与特定扩展的通信。

扩展不能使用此方法给内容脚本发送消息。要给内容脚本发送消息，请使用 {{WebExtAPIRef('tabs.sendMessage')}}。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

> [!NOTE]
> 你还可以使用[基于连接的方法来传递消息](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#基于连接的消息传递)。

## 语法

```js-nolint
let sending = browser.runtime.sendMessage(
  extensionId,             // 可选字符串
  message,                 // 任何值
  options,                 // 可选对象
)
```

### 参数

- `extensionId` {{optional_inline}}
  - : `string`。要将消息发送到的扩展的 ID。包含该参数可将消息发送到其他扩展。如果接收方使用 manifest.json 中的 [browser_specific_settings](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) 键显式设置了 ID，则 `extensionId` 应该设为该值。否则，它应该是为接收方生成的 ID。

    如果省略了 `extensionId`，则消息会被发送到你自己的扩展。

- `message`
  - : `any`。可以使用结构化克隆算法序列化的对象。（参见[数据克隆算法](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#数据克隆算法)）。
- `options` {{optional_inline}}
  - : `object`。
    - `includeTlsChannelId` {{optional_inline}}
      - : `boolean`。是否将 TLS 通道 ID 传递给正在监听连接事件的进程的 {{WebExtAPIRef('runtime.onMessageExternal')}}。

        只有基于 Chromium 的浏览器支持此选项。

根据给出的参数不同，API 有时并不明确。此时会使用以下规则：

- **只有 1 个参数**：为要发送的消息，且该消息会在内部传递。
- **有 2 个参数**：
  - 若第二个参数符合下面的规则，则参数将会被解释为 `(message, options)`，且消息会在内部传递：
    1. 一个有效的 `options` 对象（也就是说，它是一个仅包含浏览器支持的 `options` 属性的对象）
    2. null
    3. undefined

  - 否则，参数将会被解释为 `(extensionId, message)`。消息将会发送给由 `extensionId` 标识的扩展。

- **有 3 个参数**：将会被解释为 `(extensionId, message, options)`。消息将会给发送给由 `extensionId` 标识的扩展。

注意，在 Firefox 55 之前，2 个参数的情况下的规则是不同的。在旧规则下，如果第一个参数是字符串，则将其视为 `extensionId`，第二个参数作为消息。这意味着如果你使用 `("my-message", {})` 这样的参数调用 `sendMessage()`，那么它将向标识为“my-message”的扩展发送空消息。根据新规则，使用这样的参数，将会是在带有一个空的 options 对象的情况下，在内部发送消息“my-message”。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)。若接收方发送了响应，Promise 将会兑现为该响应。否则，它将不带任何参数兑现。如果连接到扩展时发生了错误，则 Promise 将以一个错误消息拒绝。

## 浏览器兼容性

{{Compat}}

## 示例

这是一个内容脚本，当用户点击内容窗口时，会向后台脚本发送一条消息。消息载荷是 `{greeting: "来自内容脚本的问候"}`，发送者还期望得到一个响应，该响应在 `handleResponse` 函数中处理：

```js
// content-script.js

function handleResponse(message) {
  console.log(`来自后台脚本的消息：${message.response}`);
}

function handleError(error) {
  console.log(`错误：${error}`);
}

function notifyBackgroundPage(e) {
  const sending = browser.runtime.sendMessage({
    greeting: "来自内容脚本的问候",
  });
  sending.then(handleResponse, handleError);
}

window.addEventListener("click", notifyBackgroundPage);
```

对应的后台脚本如下所示：

```js
// background-script.js
function handleMessage(request, sender, sendResponse) {
  console.log(`内容脚本发送了一条消息：${request.greeting}`);
  sendResponse({ response: "来自后台脚本的响应" });
}

browser.runtime.onMessage.addListener(handleMessage);
```

> [!NOTE]
> 对于 Firefox 附加组件，建议使用返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的方法，而不是使用 `sendResponse()`。使用 Promise 的示例可在 {{WebExtAPIRef('runtime.onMessage')}} 监听器的[“示例”小节](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#示例)中找到。

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.runtime`](https://developer.chrome.google.cn/docs/extensions/reference/api/runtime#method-sendMessage) API。该文档衍生自 Chromium 代码中的 [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json)。

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
