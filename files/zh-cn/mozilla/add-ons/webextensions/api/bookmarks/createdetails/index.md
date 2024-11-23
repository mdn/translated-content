---
title: bookmarks.CreateDetails
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/CreateDetails
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

`CreateDetails` 类型用于在调用 {{WebExtAPIRef("bookmarks.create()")}} 方法时描述新书签、书签文件夹或分隔符的属性。

## 类型

一个{{jsxref("object", "对象", "", 1)}}，包含以下一些或全部字段：

- `index` {{optional_inline}}
  - : 一个整数 {{jsxref("Number")}}，指定新书签在其父级下的位置。值为 0 将把它放在列表顶部。
- `parentId` {{optional_inline}}
  - : 一个{{jsxref("string", "字符串", "", 1)}}，表示要将新书签或书签文件夹放入的父文件夹的 ID。在 Chrome 和 Firefox 上，默认值为书签菜单上的“其他书签”文件夹。
- `title` {{optional_inline}}
  - : 一个{{jsxref("string", "字符串", "", 1)}}，指定书签的标题或要创建的文件夹的名称。如果未指定，则标题为 `""`。
- `type` {{optional_inline}}
  - : 一个 {{WebExtAPIRef("bookmarks.BookmarkTreeNodeType")}} 对象，指示这是一个书签、文件夹还是分隔符。默认为 `"bookmark"`，除非省略 `url`，否则，默认为 `"folder"`。
- `url` {{optional_inline}}
  - : 一个{{jsxref("string", "字符串", "", 1)}}，指定要创建书签的页面的 URL。如果省略或为 `null`，则创建一个文件夹而不是书签。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.bookmarks`](https://developer.chrome.google.cn/docs/extensions/reference/api/bookmarks#type-CreateDetails) API。该文档衍生自 Chromium 代码中的 [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json)。

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
