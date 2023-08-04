---
title: tabs.insertCSS()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS
---

{{AddonSidebar()}}

向一个页面注入 CSS

使用该 API 前你必须拥有目标页面的权限，可以是 [主机权限](/zh-CN/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions), 或者使用 [activeTab 权限](/zh-CN/Add-ons/WebExtensions/manifest.json/permissions#activeTab_permission).

你只能向符合 [match pattern](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) 的网页注入 CSS: 其形式必定是 "http", "https", "file", "ftp" 之一。你不能向任何浏览器内置页面注入 CSS，比如 about:debugging, about:addons, 或者你打开的一个新的空白页。

当再次调用{{WebExtAPIRef("tabs.removeCSS()")}} 时，已经注入的 CSS 可能会被清除。

这是一个返回[`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## Syntax

```js
var inserting = browser.tabs.insertCSS(
  tabId, // optional integer
  details, // extensionTypes.InjectDetails
);
```

### 参数

- `tabId` {{optional_inline}}
  - : `integer`，将要注入 css 的标签 ID。默认为当前窗口的活动标签。
- `details`

  - : {{WebExtAPIRef('extensionTypes.InjectDetails')}}. 对注入的描述，包含以下属性：

    - `allFrames`{{optional_inline}}
      - : `boolean`. 如果为真，该 CSS 会被注入到该页面的所有框架，如果为假，Css 只会注入到最顶层框架，默认为假。
    - `code`{{optional_inline}}
      - : `string`. 将要注入的代码。
    - `file`{{optional_inline}}
      - : `string`. 包含将要注入代码的文件路径，在 Firefox 中，相对 URLs 决定于当前页面的 URL，在 Chrome 中，决定于扩展的基础 URL。为了跨浏览器工作，你应该使用一个从扩展根目录开始的绝对路径，比如 : `"/path/to/stylesheet.css"`.
    - `frameId`{{optional_inline}}
      - : `integer`. CSS 应该被注入的框架。默认为 `0` (顶层框架).
    - `matchAboutBlank`{{optional_inline}}
      - : `boolean`. If `true`, the code will be injected into embedded "about:blank" and "about:srcdoc" frames if your add-on has access to their parent document. The code cannot be inserted in top-level about: frames. Defaults to `false`.
    - `runAt`{{optional_inline}}
      - : {{WebExtAPIRef('extensionTypes.RunAt')}}. The soonest that the code will be injected into the tab. Defaults to "document_idle".

### Return value

[`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 将会在 CSS 成功注入时 被填充，如果有任何错误发生，promise 将会被注入一个错误消息。

## Browser compatibility

{{Compat}}

## 示例

下面例子将通过字符串变量形式向当前活动标签注入一段 CSS 代码

```js
var css = "body { border: 20px dotted pink; }";

browser.browserAction.onClicked.addListener(() => {
  function onError(error) {
    console.log(`Error: ${error}`);
  }

  var insertingCSS = browser.tabs.insertCSS({ code: css });
  insertingCSS.then(null, onError);
});
```

下面例子将以通过加载文件形式向页面注入 CSS。CSS 被注入在 ID 为 2 的 tab 中。

```js
browser.browserAction.onClicked.addListener(() => {
  function onError(error) {
    console.log(`Error: ${error}`);
  }

  var insertingCSS = browser.tabs.insertCSS(2, { file: "content-style.css" });
  insertingCSS.then(null, onError);
});
```

{{WebExtExamples}}

> **备注：** 本页 API 以谷歌 Chromium 的 [`chrome.tabs`](https://developer.chrome.com/extensions/tabs#method-insertCSS) API 为基础。该篇文档由 Chromium 代码 [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json)衍变而来。
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
