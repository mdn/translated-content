---
title: topSites.get()
slug: Mozilla/Add-ons/WebExtensions/API/topSites/get
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

获取包含用户最近经常访问的页面信息的数组。

浏览器会保留用最近经常访问的页面的列表。它们使用此列表来帮助用户轻松返回这些地方。例如，Firefox 默认提供了在“新标签”页中显示的最常访问页面的列表。

要确定哪些页面出现在列表中，以及它们出现的顺序，浏览器会结合“频率”（用户访问页面的频率）和“最近性”（用户最近访问页面的时间）。

然后，浏览器可能会在将此列表呈现给用户之前对其进行进一步过滤。例如，在 Firefox 中，“新标签”页仅列出每个域名中的一个页面，用户也可以阻止某些页面出现在列表中。

`topSites.get()` API 允许扩展访问此列表。如果不使用任何选项地调用，它将提供过滤后的页面列表——即出现在“新标签”页中的列表。但是，扩展也可以通过提供各种选项获取未经过滤的页面列表。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

要使用 topSites API，你必须预先取得“topSites”[API 权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_权限)。

## 语法

```js-nolint
let gettingTopSites = browser.topSites.get(
    options  // 对象
)
```

### 参数

- `options`
  - : `object`。用于修改返回页面列表的选项。可以包含如下属性：
    - `includeBlocked` {{optional_inline}}
      - : `Boolean`。包含用户已从“新标签”页面中移除的页面。默认为 `false`。
    - `includeFavicon` {{optional_inline}}
      - : `Boolean`。在结果中包含 favicon（对于有可用 favicon 的页面）。默认为 `false`。
    - `includePinned` {{optional_inline}}
      - : `Boolean`。包含用户已固定到 Firefox 新标签页的站点。默认为 `false`。
    - `includeSearchShortcuts` {{optional_inline}}
      - : `Boolean`。包含在 Firefox 新标签页上显示的搜索快捷方式。默认为 `false`。
    - `limit` {{optional_inline}}
      - : `Integer`。要返回的页面数。这必须是介于 1 和 100 之间的数字（包括 1 和 100）。默认为 12。
    - `newtab` {{optional_inline}}
      - : `Boolean`。如果包含，该方法将返回用户打开新标签页时返回的页面列表。如果包含并设置为 `true`，该方法将忽略除 `limit` 和 `includeFavicon` 之外的所有其他参数。默认为 `false`。
    - `onePerDomain` {{optional_inline}}
      - : `Boolean`。仅为每个域名包含一个页面。默认为 `true`。

### 返回值

[`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)。这将被兑现为包含若干个 {{WebExtAPIRef("topSites.MostVisitedURL", "MostVisitedURL")}} 对象的数组，且各对象代表浏览器的“新标签”页中列出的一个页面。如果发生错误，promise 将以错误消息拒绝。

## 浏览器兼容性

{{Compat}}

## 示例

下面的代码记录“新标签”页中所有页面的标题和 URL：

```js
function logTopSites(topSitesArray) {
  for (const topSite of topSitesArray) {
    console.log(`标题：${topSite.title}，URL：${topSite.url}`);
  }
}

function onError(error) {
  console.error(error);
}

browser.topSites.get().then(logTopSites, onError);
```

下面的代码则记录所有最常访问页面的标题和 URL，包括用户已阻止的页面，可能包括同一域名的多个页面：

```js
function logTopSites(topSitesArray) {
  for (const topSite of topSitesArray) {
    console.log(`标题：${topSite.title}，URL：${topSite.url}`);
  }
}

function onError(error) {
  console.error(error);
}

browser.topSites
  .get({
    includeBlocked: true,
    onePerDomain: false,
  })
  .then(logTopSites, onError);
```

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.topSites`](https://developer.chrome.google.cn/docs/extensions/reference/api/topSites) API。

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
