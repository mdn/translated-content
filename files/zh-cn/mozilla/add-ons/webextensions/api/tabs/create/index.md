---
title: tabs.create()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/create
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

创建一个新标签页。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let creating = browser.tabs.create(
  createProperties   // 对象
)
```

### 参数

- `createProperties`
  - : `object`。用于设置新标签页的属性。要了解更多这些属性的信息，请参阅 {{WebExtAPIRef("tabs.Tab")}} 文档。
    - `active` {{optional_inline}}
      - : `boolean`。标签页是否应该成为窗口中的活动标签页。如果为 `false`，则不会产生任何效果。这不影响窗口是否获得焦点（参见 {{WebExtAPIRef('windows.update')}}）。默认为 `true`。
    - `cookieStoreId` {{optional_inline}}
      - : `string`。使用此选项创建具有特定 cookie 存储 ID（`cookieStoreId`）的标签页。此选项仅在扩展具有 `"cookies"` [权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)时可用。有关详细信息，请参阅[使用场景身份](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities)。
    - `discarded` {{optional_inline}}
      - : `boolean`。是否创建并在标签栏中可见的状态下不加载任何内容到内存，即处于弃用状态。当激活标签页时，将加载标签页的内容。
    - `index` {{optional_inline}}
      - : `integer`。标签页在窗口中的位置。提供的值将被钳制在零和窗口中的标签数之间。
    - `muted` {{optional_inline}}
      - : `boolean`。标签页是否应静音。默认为 `false`。
    - `openerTabId` {{optional_inline}}
      - : `integer`。打开此标签页的标签页的 ID。如果指定，打开者标签页必须与新创建的标签页在同一个窗口中。
    - `openInReaderMode` {{optional_inline}}
      - : `boolean`。如果为 `true`，在[阅读模式](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode)中打开此标签页。默认为 `false`。
    - `pinned` {{optional_inline}}
      - : `boolean`。标签页是否应固定。默认为 `false`。
    - `selected` {{optional_inline}}
      - : `boolean`。标签页是否应成为窗口中选择的标签页。默认为 `true`。

        > [!WARNING]
        > 此属性已弃用，在 Firefox 中不受支持。请改用 `active`。

    - `title` {{optional_inline}}
      - : `string`。标签页的标题。仅当将标签页创建为 `discarded` 设置为 `true` 时才允许使用。
    - `url` {{optional_inline}}
      - : `string`。要导航到的标签页的 URL。默认为新标签页。

        完整的 URL 必须包含方案（scheme）（例如，`http://www.google.com` 而不是 `www.google.com`）。

        出于安全原因，在 Firefox 中，可能不允许使用特权 URL。因此，传递以下任何 URL 将失败：
        - chrome：URL
        - javascript：URL
        - data：URL
        - file：URL（即文件系统上的文件。但是，要使用打包在扩展内部的文件，请参见下文）
        - 特权 about：URL（例如，`about:config`、`about:addons`、`about:debugging`）。非特权 URL（例如 `about:blank`）是允许的。

        要加载扩展打包的页面，请指定从扩展的 manifest.json 文件开始的绝对 URL。例如：`/path/to/my-page.html`。如果省略了前导 `/`，则 URL 将被视为相对 URL，不同的浏览器可能构造不同的绝对 URL。

    - `windowId` {{optional_inline}}
      - : `integer`。要创建新标签页的窗口。默认为当前窗口。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，其会兑现一个包含有关已创建标签页详细信息的 {{WebExtAPIRef('tabs.Tab')}} 对象。如果无法创建标签页（例如因为 `url` 使用了特权方案），则该 promise 将以错误消息拒绝。

`browser.tabs.create()` 返回的 promise 在标签页创建后立即兑现。标签页可能仍在加载中。要检测标签页何时加载完成，可以监听 {{WebExtAPIRef('tabs.onUpdated')}} 或 {{WebExtAPIRef('webNavigation.onCompleted')}} 事件，然后调用 `tabs.create`。

## 示例

在新标签页中打开 `https://example.org`：

```js
function onCreated(tab) {
  console.log(`创建了新标签页：${tab.id}`);
}

function onError(error) {
  console.log(`发生错误：${error}`);
}

browser.browserAction.onClicked.addListener(() => {
  let creating = browser.tabs.create({
    url: "https://example.org",
  });
  creating.then(onCreated, onError);
});
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.tabs`](https://developer.chrome.google.cn/docs/extensions/reference/api/tabs#method-create) API。该文档衍生自 Chromium 代码中的 [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json)。

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
