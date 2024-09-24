---
title: tabs.connect()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/connect
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

调用此函数来建立扩展的后台脚本（或其他特权脚本，如弹出窗口脚本或选项页脚本）与属于该扩展并正在指定标签中运行的任何内容脚本之间的连接。此函数返回一个 {{WebExtAPIRef("runtime.Port")}} 对象。

调用此函数后，将在任何属于此扩展并在指定标签中运行的内容脚本中触发 {{WebExtAPIRef('runtime.onConnect')}} 事件。事件监听器将会收到另一个 {{WebExtAPIRef("runtime.Port")}} 对象。两侧可以使用 `Port` 对象来交换消息。

有关详细信息，请参阅[基于连接的消息传递](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#基于连接的消息传递)。你可以在不创建连接的情况下发送消息。关于如何选择这两种选项，请参阅[选择一次性消息和基于连接的消息传递之间的区别](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#选择一次性消息和基于连接的消息传递之间的区别)。

```js-nolint
browser.tabs.connect(
  tabId,      // 整数
  connectInfo // 可选的对象
)
```

### 参数

- `tabId`
  - : `integer`。要连接到其内容脚本的标签页的 ID。
- `connectInfo` {{optional_inline}}

  - : 包含以下属性的对象：

    - `name` {{optional_inline}}
      - : `string`。将传递给属于此扩展并在指定标签页中运行的内容脚本的 {{WebExtAPIRef("runtime.onConnect")}} 事件监听器。
    - `frameId` {{optional_inline}}
      - : `integer`。打开由 `frameId` 指定的特定框架的端口，而不是标签页中的所有框架。

### 返回值

{{WebExtAPIRef('runtime.Port')}}。一个可以用于与运行在指定标签页中的内容脚本进行通信的端口。

## 示例

在此示例中，后台脚本监听[浏览器操作](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#browser_actions_2)的点击事件，然后连接到当前活动的标签页，并通过从 `connect()` 返回的 `Port` 发送消息：

```js
function connectToTab(tabs) {
  if (tabs.length > 0) {
    let examplePort = browser.tabs.connect(tabs[0].id, {
      name: "tabs-connect-example",
    });
    examplePort.postMessage({ greeting: "来自后台脚本的问候" });
  }
}

function onError(error) {
  console.log(`发生错误：${error}`);
}

browser.browserAction.onClicked.addListener(() => {
  let gettingActive = browser.tabs.query({
    currentWindow: true,
    active: true,
  });
  gettingActive.then(connectToTab, onError);
});
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.tabs`](https://developer.chrome.google.cn/docs/extensions/reference/api/tabs#method-connect) API。本文档内容源自 Chromium 代码中的 [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json)。

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
