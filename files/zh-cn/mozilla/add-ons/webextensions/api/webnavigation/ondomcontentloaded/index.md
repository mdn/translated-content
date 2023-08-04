---
title: webNavigation.onDOMContentLoaded
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/onDOMContentLoaded
---

{{AddonSidebar()}}

在页面中触发[DOMContentLoaded](/zh-CN/docs/Web/Events/DOMContentLoaded) 事件时触发。此时，文档被加载和解析，并且 DOM 被完全构造，但链接的资源（例如图像，样式表和子框架（subframes））可能尚未被加载。

## Syntax

```js
browser.webNavigation.onDOMContentLoaded.addListener(
  listener, // function
  filter, // optional object
);
browser.webNavigation.onDOMContentLoaded.removeListener(listener);
browser.webNavigation.onDOMContentLoaded.hasListener(listener);
```

事件有三个方法：

- `addListener(callback)`
  - : 为此事件添加监听方法。
- `removeListener(listener)`
  - : 停止监听此事件。`listener` 参数为需要移出的监听方法。
- `hasListener(listener)`
  - : 检测是否有 `listener` 被注册在事件上。如果有返回 `true` , 否则返回`false` .

## addListener syntax

### 参数

- `callback`

  - : 为当此事件发生是需要被调用的函数。该函数将传递以下参数：

    - `details`
      - : [`object`](#details). 有关导航（navigation）事件的详细信息。

- `filter`{{optional_inline}}
  - : `object`. 包含单个属性 `url` 的对象，这是一个 {{WebExtAPIRef("events.UrlFilter")}} 数组对象。如果包含此参数，则该事件将仅触发转换为与数组中至少一个`UrlFilter`匹配的 URL。在数组中。如果您省略此参数，则该事件将触发所有转换。

## Additional objects

### details

- `tabId`
  - : `integer`. The ID of the tab in which the navigation has occurred.
- `url`
  - : `string`. The URL to which the given frame has navigated.
- `processId`
  - : `integer`. The ID of the process in which this tab is being rendered.
- `frameId`
  - : `integer`. Frame in which the navigation is occurring. 0 indicates that navigation happens in the tab's top-level browsing context, not in a nested [iframe](/zh-CN/docs/Web/HTML/Element/iframe). A positive value indicates that navigation happens in a nested iframe. Frame IDs are unique for a given tab and process.
- `timeStamp`
  - : `number`. The time at which `DOMContentLoaded` was fired, in [milliseconds since the epoch](https://en.wikipedia.org/wiki/Unix_time).

## Browser compatibility

{{Compat}}

## Examples

Logs the target URLs for `onDOMContentLoaded`, if the target URL's hostname contains "example.com" or starts with "developer".

```js
var filter = {
  url: [{ hostContains: "example.com" }, { hostPrefix: "developer" }],
};

function logOnDOMContentLoaded(details) {
  console.log("onDOMContentLoaded: " + details.url);
}

browser.webNavigation.onDOMContentLoaded.addListener(
  logOnDOMContentLoaded,
  filter,
);
```

{{WebExtExamples}}

> **备注：** This API is based on Chromium's [`chrome.webNavigation`](https://developer.chrome.com/extensions/webNavigation#event-onBeforeNavigate) API. This documentation is derived from [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) in the Chromium code.
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
