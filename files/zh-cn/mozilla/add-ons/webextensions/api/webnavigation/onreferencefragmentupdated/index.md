---
title: webNavigation.onReferenceFragmentUpdated
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/onReferenceFragmentUpdated
l10n:
  sourceCommit: 5c5ee35d66ac24bc6513c14f120750c74d779d20
---

当页面的[片段标识符](https://zh.wikipedia.org/wiki/URI片段)发生更改时会触发此事件。例如，如果页面使用片段实现目录，则当用户点击目录中的条目时会触发此事件。此框架的所有后续事件都将使用更新后的 URL。

## 语法

```js-nolint
browser.webNavigation.onReferenceFragmentUpdated.addListener(
  listener,                   // 函数
  filter                      // 可选对象
)
browser.webNavigation.onReferenceFragmentUpdated.removeListener(listener)
browser.webNavigation.onReferenceFragmentUpdated.hasListener(listener)
```

事件包含三个函数：

- `addListener(listener)`
  - : 为此事件添加监听器。
- `removeListener(listener)`
  - : 停止监听此事件。`listener` 参数是要移除的监听器。
- `hasListener(listener)`
  - : 检查是否已为此事件注册了 `listener`。如果正在监听，则返回 `true`，否则返回 `false`。

## addListener 语法

### 参数

- `listener`
  - : 事件触发时调用的函数。该函数接收以下参数：
    - `details`
      - : `object`。有关导航事件的详细信息。参见 [details](#details) 部分以了解更多信息。

- `filter` {{optional_inline}}
  - : `object`。包含单个 `url` 属性的对象，且这一属性是 {{WebExtAPIRef("events.UrlFilter")}} 对象的数组（`Array`）。如果包含此参数，则仅当目标 URL 匹配数组中至少一个 `UrlFilter` 时，事件才会触发。如果省略此参数，则事件会为所有导航触发。

## 附加对象

### details

- `tabId`
  - : `integer`。即将发生导航的标签页的 ID。
- `url`
  - : `string`。指定的框架将要导航到的 URL。
- `processId` {{optional_inline}} {{deprecated_inline}}
  - : `integer`。在现代浏览器中未设置该值。当设置时，它表示运行此标签页的渲染器的进程 ID。
- `frameId`
  - : `integer`。即将发生导航的框架。`0` 表示导航发生在标签页的顶级浏览上下文中，而不是嵌套的 {{HTMLElement("iframe")}} 中。正值表示导航发生在嵌套的 iframe 中。框架 ID 对于给定的标签页和进程是唯一的。
- `timeStamp`
  - : `number`。页面的片段标识符更改的时间，以[自纪元以来的毫秒数](https://zh.wikipedia.org/wiki/UNIX时间)表示。
- `transitionType`
  - : {{WebExtAPIRef("webNavigation.transitionType", "transitionType")}}。导航的原因，例如，如果用户点击了链接，则为“link”。
- `transitionQualifiers`
  - : {{WebExtAPIRef("webNavigation.transitionQualifier", "transitionQualifier")}} 的数组（`Array`）。有关导航的额外信息，例如是否存在服务器或客户端重定向。

## 浏览器兼容性

{{Compat}}

## 示例

当目标 URL 的主机名包含“example.com”或以“developer”开头时，记录 `onReferenceFragmentUpdated` 的目标 URL 和额外的过渡信息。

```js
const filter = {
  url: [{ hostContains: "example.com" }, { hostPrefix: "developer" }],
};

function logOnReferenceFragmentUpdated(details) {
  console.log(`onReferenceFragmentUpdated：${details.url}`);
  console.log(`导航类型：${details.transitionType}`);
  console.log(`导航额外信息：${details.transitionQualifiers}`);
}

browser.webNavigation.onReferenceFragmentUpdated.addListener(
  logOnReferenceFragmentUpdated,
  filter,
);
```

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.webNavigation`](https://developer.chrome.google.cn/docs/extensions/reference/api/webNavigation#event-onBeforeNavigate) API。该文档衍生自 Chromium 代码中的 [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json)。

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
