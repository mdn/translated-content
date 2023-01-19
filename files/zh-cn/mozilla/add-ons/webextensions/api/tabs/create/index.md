---
title: tabs.create()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/create
---

{{AddonSidebar()}}

新建一个 tab.

这是一个异步函数，返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## 语法

```js
var creating = browser.tabs.create(
  createProperties   // object
)
```

### 参数

- `createProperties`
  - : `object`. Properties to give the new tab. To learn more about these properties, see the {{WebExtAPIRef("tabs.Tab")}} documentation.

    - `active` {{optional_inline}}
      - : `boolean`. Whether the tab should become the active tab in the window. Does not affect whether the window is focused (see {{WebExtAPIRef('windows.update')}}). Defaults to `true`.
    - `cookieStoreId` {{optional_inline}}
      - : `string`. Use this to create a tab whose cookie store ID is `cookieStoreId`. This option is only available if the extension has the `"cookies"` [permission](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).
    - `index`{{optional_inline}}
      - : `integer`. The position the tab should take in the window. The provided value will be clamped to between zero and the number of tabs in the window.
    - `openerTabId`{{optional_inline}}
      - : `integer`. The ID of the tab that opened this tab. If specified, the opener tab must be in the same window as the newly created tab.
    - `openInReaderMode`{{optional_inline}}
      - : `boolean`. If `true`, open this tab in [Reader Mode](/zh-CN/Add-ons/WebExtensions/API/tabs/toggleReaderMode). Defaults to `false`.
    - `pinned`{{optional_inline}}
      - : `boolean`. Whether the tab should be pinned. Defaults to `false`.
    - `selected`{{optional_inline}}
      - : `boolean`. Whether the tab should become the selected tab in the window. Defaults to `true`.
        > **警告：** This property is deprecated, and is not supported in Firefox. Use `active` instead.
    - `url`{{optional_inline}}
      - : `string`. The URL to navigate the tab to initially. Defaults to the New Tab Page. Fully-qualified URLs must include a scheme (i.e. 'http://www.google.com', not 'www.google.com'). For security reasons, in Firefox, this may not be a privileged URL. So passing any of the following URLs will fail:
        - chrome: URLs
        - javascript: URLs
        - data: URLs
        - file: URLs (i.e., files on the filesystem. However, to use a file packaged inside the extension, see below)
        - privileged about: URLs (for example, `about:config`, `about:addons`, `about:debugging`) . Non-privileged URLs (e.g., `about:blank`) are allowed.
        - The New Tab page (`about:newtab`) can be opened if no value for URL is provided.

        To load a page that's packaged with your extension, specify an absolute URL starting at the extension's manifest.json file. For example: '/path/to/my-page.html'. If you omit the leading '/', the URL is treated as a relative URL, and different browsers may construct different absolute URLs.
    - `windowId`{{optional_inline}}
      - : `integer`. The window to create the new tab in. Defaults to the current window.

### 返回值

A [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with a {{WebExtAPIRef('tabs.Tab')}} object containing details about the created tab. If the tab could not be created (for example, because `url` used a privileged scheme) the promise will be rejected with an error message.

## 浏览器兼容性

{{Compat}}

## 实例

在新标签页打开 "https\://example.org" :

```js
function onCreated(tab) {
  console.log(`Created new tab: ${tab.id}`)
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.browserAction.onClicked.addListener(function() {
  var creating = browser.tabs.create({
    url:"https://example.org"
  });
  creating.then(onCreated, onError);
});
```

{{WebExtExamples}}

> **备注：** This API is based on Chromium's [`chrome.tabs`](https://developer.chrome.com/extensions/tabs#method-create) API. This documentation is derived from [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) in the Chromium code.
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
