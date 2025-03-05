---
title: bookmarks.onMoved
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/onMoved
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

当书签或文件夹被移动到不同的父文件夹或在文件夹内的位置时触发。

> [!NOTE]
> 如果你正在移动多个书签，由于此 API 是异步的，移动调用可能会以任何顺序处理。因此，每个书签的索引值可能会改变或在所有移动调用完成之前是未知的。如果书签的索引对你的扩展程序很重要，那么在移动多个书签时，扩展程序应等待每个 `bookmarks.move` 调用完成后再移动下一个书签。等待可以确保每个书签关联的索引不受正在执行的移动调用影响。

## 语法

```js
browser.bookmarks.onMoved.addListener(listener);
browser.bookmarks.onMoved.removeListener(listener);
browser.bookmarks.onMoved.hasListener(listener);
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

  - : 事件触发时调用的函数。该函数接收以下参数：

    - `id`
      - : `string`。被移动项目的 ID。
    - `moveInfo`
      - : `object`。包含有关移动更多详细信息的对象。详见 [moveInfo](#moveinfo_2) 部分。

## 附加对象

### moveInfo

- `parentId`
  - : `string`。新的父文件夹。
- `index`
  - : `integer`。此项目在其父项中的新索引。
- `oldParentId`
  - : `string`。旧的父文件夹。
- `oldIndex`
  - : `integer`。此项目在其父项中的旧索引。

## 浏览器兼容性

{{Compat}}

## 示例

```js
function handleMoved(id, moveInfo) {
  console.log(`项目：${id} 已移动`);
  console.log(`旧索引：${moveInfo.oldIndex}`);
  console.log(`新索引：${moveInfo.index}`);
  console.log(`旧文件夹：${moveInfo.oldParentId}`);
  console.log(`新文件夹：${moveInfo.parentId}`);
}

function handleClick() {
  browser.bookmarks.onMoved.addListener(handleMoved);
}

browser.browserAction.onClicked.addListener(handleClick);
```

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.bookmarks`](https://developer.chrome.google.cn/docs/extensions/reference/api/bookmarks#event-onMoved) API。该文档衍生自 Chromium 代码中的 [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json)。

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
