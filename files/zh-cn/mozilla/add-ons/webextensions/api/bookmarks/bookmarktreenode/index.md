---
title: bookmarks.BookmarkTreeNode
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

`bookmarks.BookmarkTreeNode` 类型的对象表示书签树中的一个节点，其中每个节点可以是一个书签、一个书签文件夹或一个分隔符。子节点根据它们在父文件夹中的 `index` 排序。

## 类型

一个具有以下属性的 {{jsxref("object")}}：

- `children` {{optional_inline}}
  - : 一个{{jsxref("array", "数组", "", 1)}}，包含代表节点子节点的 {{WebExtAPIRef('bookmarks.BookmarkTreeNode')}} 对象。列表按照子节点在用户界面中出现的顺序排序。如果节点不是文件夹，则省略此字段。
- `dateAdded` {{optional_inline}}
  - : 一个数字，表示节点创建日期，单位为[自 Unix 纪元以来的毫秒数](https://zh.wikipedia.org/wiki/UNIX时间)。
- `dateGroupModified` {{optional_inline}}
  - : 一个数字，表示该文件夹的内容上次更改的日期和时间，单位为[自 Unix 纪元以来的毫秒数](https://zh.wikipedia.org/wiki/UNIX时间)。
- `id`
  - : 一个{{jsxref("string", "字符串", "", 1)}}，唯一标识节点。每个 ID 在用户的配置文件中是唯一的，在浏览器重新启动时保持不变。
- `index` {{optional_inline}}
  - : 一个数字，表示该节点在其父文件夹中的从零开始的位置，其中零代表第一个条目。
    > [!NOTE]
    > 如果你创建或移动多个书签，由于 {{WebExtAPIRef("bookmarks.create()")}} 和 {{WebExtAPIRef("bookmarks.move()")}} 方法是异步的，请求可能以任何顺序处理。因此，直到所有请求完成之前，每个书签的索引值可能会改变或是未知的。如果与书签相关的索引对你的扩展很重要，那么在创建或移动多个书签时，扩展应等待每个 `bookmarks.create` 或 `bookmarks.move` 调用完成。等待确保与每个书签关联的索引不会受到在原始调用进行时并发执行的创建或移动调用的影响。
- `parentId` {{optional_inline}}
  - : 一个{{jsxref("string", "字符串", "", 1)}}，指定父文件夹的 ID。此属性不存在于根节点。
- `title`
  - : 一个{{jsxref("string", "字符串", "", 1)}}，包含在菜单和书签列表中显示的节点文本。
- `type` {{optional_inline}}
  - : 一个 {{WebExtAPIRef("bookmarks.BookmarkTreeNodeType")}} 对象，指示这是一个书签、文件夹还是分隔符。默认为 `"bookmark"`，除非省略 `url`，否则，默认为 `"folder"`。
- `unmodifiable` {{optional_inline}}
  - : 一个{{jsxref("string", "字符串", "", 1)}}，由 {{WebExtAPIRef('bookmarks.BookmarkTreeNodeUnmodifiable')}} 类型描述。表示节点无法更改的原因。如果节点可以更改，则省略此项。
- `url` {{optional_inline}}
  - : 一个{{jsxref("string", "字符串", "", 1)}}，表示书签的 URL。如果节点表示文件夹，则省略此属性。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.bookmarks`](https://developer.chrome.google.cn/docs/extensions/reference/api/bookmarks#type-BookmarkTreeNode) API。该文档衍生自 Chromium 代码中的 [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json)。

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
