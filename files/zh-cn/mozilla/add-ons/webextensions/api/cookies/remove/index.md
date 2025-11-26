---
title: cookies.remove()
slug: Mozilla/Add-ons/WebExtensions/API/cookies/remove
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{WebExtAPIRef("cookies")}} API 的 **`remove()`** 方法根据 cookie 的名称和 URL 删除一个 cookie。

只有在你的 [manifest.json](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json) 文件中包含“cookies” [API 权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_权限)和给定 URL 的[主机权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#主机权限)时，此调用才能成功。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let removing = browser.cookies.remove(
  details               // 对象
)
```

### 参数

- `details`
  - : 一个 `object`，包含识别要删除的 cookie 的信息。它包含以下属性：
    - `firstPartyDomain` {{optional_inline}}
      - : 一个 `string`，表示与要删除的 cookie 关联的第一方域。如果浏览器启用了第一方隔离，则必须提供此属性。请参见[第一方隔离](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/cookies#第一方隔离)。

    - `name`
      - : 一个 `string`，表示要删除的 cookie 的名称。

    - `partitionKey` {{optional_inline}}
      - : 一个 `object`，表示包含该 cookie 的存储分区。包括此对象以从分区存储中删除 cookie。此对象包含：
        - `topLevelSite` {{optional_inline}}
          - : 一个 `string`，表示包含该 cookie 的顶级站点存储分区的第一方 URL。

    - `storeId` {{optional_inline}}
      - : 一个 `string`，表示查找 cookie 的 cookie 存储的 ID。如果未指定，默认情况下将在当前执行上下文的 cookie 存储中查找 cookie。

    - `url`
      - : 一个 `string`，表示与该 cookie 关联的 URL。如果扩展程序没有此 URL 的[主机权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#主机权限)，则 API 调用将失败。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，其会兑现一个包含有关已删除 cookie 的详细信息的 {{WebExtAPIRef('cookies.Cookie')}} 对象。如果找不到与 `details` 参数匹配的 cookie，则该 Promise 将兑现 `null`。如果由于任何原因导致调用失败，则 Promise 将被拒绝，并带有错误消息。

## 浏览器兼容性

{{Compat}}

## 示例

此示例尝试删除名为“favorite-color”的 cookie，其 URL 与当前活动标签页托管的文档的 URL 匹配：

```js
function onRemoved(cookie) {
  console.log(`已删除：${cookie}`);
}

function onError(error) {
  console.log(`删除 cookie 时出错：${error}`);
}

function removeCookie(tabs) {
  let removing = browser.cookies.remove({
    url: tabs[0].url,
    name: "favorite-color",
  });
  removing.then(onRemoved, onError);
}

let getActive = browser.tabs.query({ active: true, currentWindow: true });
getActive.then(removeCookie);
```

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.cookies`](https://developer.chrome.google.cn/docs/extensions/reference/api/cookies#method-remove) API。该文档衍生自 Chromium 代码中的 [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json)。

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
