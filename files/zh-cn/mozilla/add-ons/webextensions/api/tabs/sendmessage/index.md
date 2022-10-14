---
title: tabs.sendMessage()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage
---

{{AddonSidebar()}}

从 background scripts 中发送单个消息 (or other privileged scripts, such as popup scripts or options page scripts) 到任何 content scripts that belong to the extension and are running in the specified tab.

这个消息将被 content scripts 中 {{WebExtAPIRef("runtime.onMessage")}} 事件的所有监听者收到，然后它们可以选择通过使用 `sendResponse` 这个方法发送一个 response 到 background scripts。

This is an asynchronous function that returns a [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js
var sending = browser.tabs.sendMessage(
  tabId,                   // integer
  message,                 // any
  options                  // optional object
)
```

### Parameters

- `tabId`
  - : `integer`. ID of the tab whose content scripts we want to send a message to.
- `message`
  - : `any`. An object that can be serialized to JSON.
- `options`{{optional_inline}}
  - : `object`.
    - `frameId`{{optional_inline}}
      - : `integer`. Sends the message to a specific frame identified by `frameId` instead of all frames in the tab. Whether the content script is executed in all frames depends on the `all_frames` setting in the [`content_scripts`](/zh-CN/Add-ons/WebExtensions/manifest.json/content_scripts) section of manifest.json.

### Return value

A [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with the JSON response object sent by the handler of the message in the content script, or with no arguments if the content script did not send a response. If an error occurs while connecting to the specified tab or any other error occurs, the promise will be rejected with an error message. If several frames response to the message, the promise is resolved to one of answers.

## Browser compatibility

{{Compat}}

## Examples

Here's an example of a background script that sends a message to the content scripts running in the active tab when the user clicks the browser action. The background script also expects the content script to send a response:

```js
// background-script.js
"use strict";

function onError(error) {
  console.error(`Error: ${error}`);
}

function sendMessageToTabs(tabs) {
  for (let tab of tabs) {
    browser.tabs.sendMessage(
      tab.id,
      {greeting: "Hi from background script"}
    ).then(response => {
      console.log("Message from the content script:");
      console.log(response.response);
    }).catch(onError);
  }
}

browser.browserAction.onClicked.addListener(() => {
  browser.tabs.query({
    currentWindow: true,
    active: true
  }).then(sendMessageToTabs).catch(onError);
});
```

Here's the corresponding content script:

```js
// content-script.js
"use strict";

browser.runtime.onMessage.addListener(request => {
  console.log("Message from the background script:");
  console.log(request.greeting);
  return Promise.resolve({response: "Hi from content script"});
});
```

{{WebExtExamples}}

> **备注：** This API is based on Chromium's [`chrome.tabs`](https://developer.chrome.com/extensions/tabs#method-sendMessage) API. This documentation is derived from [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) in the Chromium code.
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
