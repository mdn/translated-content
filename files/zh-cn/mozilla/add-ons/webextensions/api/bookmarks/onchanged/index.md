---
title: bookmarks.onChanged
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/onChanged
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

触发条件：

- 书签的标题或 URL 发生更改时
- 文件夹的名称发生更改时

## 语法

```js-nolint
browser.bookmarks.onChanged.addListener(listener)
browser.bookmarks.onChanged.removeListener(listener)
browser.bookmarks.onChanged.hasListener(listener)
```

事件包含以下三个函数：

- `addListener(listener)`
  - : 添加一个监听器到该事件。
- `removeListener(listener)`
  - : 停止监听该事件。`listener` 参数是要移除的监听器。
- `hasListener(listener)`
  - : 检查 `listener` 是否已注册到该事件。如果正在监听，返回 `true`，否则返回 `false`。

## addListener 语法

### 参数

- `listener`

  - : 事件发生时调用的函数。该函数接收以下参数：

    - `id`
      - : `string`。发生更改的项目的 ID。
    - `hangeInfo`
      - : [`object`](#changeinfo)。包含两个属性的对象：包含项目标题的字符串 `title` 和包含项目 URL 的字符串 `url`。如果项目是文件夹，则省略 `url`。

> [!NOTE]
> 当书签更改时，可能会发生多个事件，且 changeInfo 对象可能只包含已更改的数据，而不是书签的所有数据。换句话说，如果书签的 `url` 发生变化，则 changeInfo 可能只包含新的 `url` 信息。

## 示例

```js
function handleChanged(id, changeInfo) {
  console.log(`项目：${id} 已更改`);
  console.log(`标题：${changeInfo.title}`);
  console.log(`URL: ${changeInfo.url}`);
}

function handleClick() {
  browser.bookmarks.onChanged.addListener(handleChanged);
}

browser.browserAction.onClicked.addListener(handleClick);
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.bookmarks`](https://developer.chrome.google.cn/docs/extensions/reference/api/bookmarks#event-onChanged) API。该文档衍生自 Chromium 代码中的 [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json)。

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
