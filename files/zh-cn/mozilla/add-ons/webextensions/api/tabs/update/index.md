---
title: tabs.update()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/update
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

导航到一个新的 URL 或修改标签页的其他属性。

要使用此函数，传递要更新的标签页的 ID，以及一个包含要更新的属性的 `updateProperties` 对象。未在 `updateProperties` 中指定的属性不会被修改。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let updating = browser.tabs.update(
  tabId,              // 可选的整数
  updateProperties    // 对象
)
```

### 参数

- `tabId` {{optional_inline}}
  - : `integer`。默认为当前窗口中选定的标签页。
- `updateProperties`
  - : `object`。标签页中要更新的一组属性。要了解更多有关这些属性的信息，请查看 {{WebExtAPIRef("tabs.Tab")}} 的文档。
    - `active` {{optional_inline}}
      - : `boolean`。标签页是否应该变为活动状态。不影响窗口是否被聚焦（参见 {{WebExtAPIRef('windows.update')}}）。如果设置为 `true`，非活动的突出显示的标签页将停止被突出显示。如果设置为 `false`，则不做任何操作。
    - `autoDiscardable` {{optional_inline}}
      - : `boolean`。标签页是否可以被浏览器丢弃。默认值为 `true`。当设置为 `false` 时，浏览器无法自动丢弃该标签页。但是，可以通过 {{WebExtAPIRef("tabs.discard")}} 丢弃该标签页。
    - `highlighted` {{optional_inline}}
      - : `boolean`。将标签页添加到当前的选择中，或从中移除。如果设置为 `true` 并且标签页未被突出显示，则默认情况下它将变为活动状态。

        如果只想突出显示标签页而不激活它，在 Firefox 中可以将 `highlighted` 设置为 `true`，并将 `active` 设置为 `false`。其他浏览器可能即使在这种情况下也会激活标签页。

    - `loadReplace` {{optional_inline}}
      - : `boolean`。新的 URL 是否应该替换标签页导航历史中的旧 URL（可通过“返回”按钮访问）。

        例如，用户使用 Ctrl+T 创建一个新的标签页。默认情况下，在 Firefox 中，这会加载“about:newtab”。然后，如果你的扩展使用 {{WebExtAPIRef("tabs.update")}} 更新此页面且没有使用 `loadReplace`，则“返回”按钮将启用，并且用户可以返回到“about:newtab”。如果扩展设置了 `loadReplace`，则“返回”按钮将被禁用，并且就像扩展提供的 URL 是该标签页访问的第一个页面一样。

        请注意，原始 URL 仍将出现在浏览器的全局历史记录中。

    - `muted` {{optional_inline}}
      - : `boolean`。标签页是否应该静音。
    - `openerTabId` {{optional_inline}}
      - : `integer`。打开该标签页的标签页的 ID。如果指定，则打开者标签页必须与此标签页位于同一窗口。
    - `pinned` {{optional_inline}}
      - : `boolean`。标签页是否应该被固定。
    - `selected` {{deprecated_inline}} {{optional_inline}}
      - : `boolean`。标签页是否应该被选择。此属性已被 `active` 和 `highlighted` 替代。
    - `successorTabId` {{optional_inline}}
      - : `integer`。标签页的后继标签页的 ID。
    - `url` {{optional_inline}}
      - : `string`。要导航标签页到的 URL。

        由于安全原因，在 Firefox 中，这不能是特权 URL。因此，传递以下任何 URL 将失败，并设置 {{WebExtAPIRef("runtime.lastError")}} 为错误消息：
        - chrome: 类型的 URL
        - javascript: 类型的 URL
        - data: 类型的 URL
        - file: 类型的 URL（即文件系统上的文件。但是，要使用打包在扩展中的文件，请参见下文）
        - 特权 about: 类型的 URL（例如 `about:config`、`about:addons`、`about:debugging`、`about:newtab`）。非特权的 URL（例如 `about:blank`）是允许的。

        要加载打包在你的扩展中的页面，请指定从扩展的 `manifest.json` 文件开始的绝对 URL。例如：“/path/to/my-page.html”。如果省略前导的“/”，则 URL 被视为相对 URL，不同的浏览器可能会构造不同的绝对 URL。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，其会兑现一个包含有关更新的标签页的 {{WebExtAPIRef('tabs.Tab')}} 对象。{{WebExtAPIRef('tabs.Tab')}} 对象不包含 `url`、`title` 和 `favIconUrl`，除非匹配的[主机权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#主机权限)或已请求 `"tabs"` 权限。如果找不到标签页或发生其他错误，promise 将以错误消息拒绝。

## 示例

将当前窗口中的活动标签页导航到 `https://developer.mozilla.org`：

```js
function onUpdated(tab) {
  console.log(`更新的标签页：${tab.id}`);
}

function onError(error) {
  console.log(`发生错误：${error}`);
}

let updating = browser.tabs.update({ url: "https://developer.mozilla.org" });
updating.then(onUpdated, onError);
```

激活当前窗口中的第一个标签页，并将其导航到 `https://developer.mozilla.org`：

```js
function onUpdated(tab) {
  console.log(`更新的标签页：${tab.id}`);
}

function onError(error) {
  console.log(`发生错误：${error}`);
}

function updateFirstTab(tabs) {
  let updating = browser.tabs.update(tabs[0].id, {
    active: true,
    url: "https://developer.mozilla.org",
  });
  updating.then(onUpdated, onError);
}

let querying = browser.tabs.query({ currentWindow: true });
querying.then(updateFirstTab, onError);
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.tabs`](https://developer.chrome.google.cn/docs/extensions/reference/api/tabs#method-update) API。该文档源自 Chromium 代码中的 [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json)。

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
