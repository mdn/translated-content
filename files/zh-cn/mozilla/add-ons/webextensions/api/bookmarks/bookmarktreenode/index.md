---
title: bookmarks.BookmarkTreeNode
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode
---

{{AddonSidebar()}}

代表书签树中的一个节点（书签或文件夹），子节点在它们的父文件夹中按顺序排列。

## 类型

这种类型的值都是对象。它们包含以下属性：

- `id`
  - : `string`. 节点的唯一标识符。唯一标识符在当前用户配置文件中保证唯一，并且在浏览器重新启动后仍然有效。
- `parentId`{{optional_inline}}
  - : `string`. 父节点的标识符（id）。根节点没有此属性。
- `index`{{optional_inline}}
  - : `integer`. 该节点在父文件夹中的位置（从 0 开始）。
- `url`{{optional_inline}}
  - : `string`. 当用户单击书签时打开的 URL。文件夹没有此属性。
- `title`
  - : `string`. 该节点显示的文字。
- `dateAdded`{{optional_inline}}
  - : `number`. 该节点创建的时间，表示为自 1970 年 1 月 1 日午夜至今所经过的毫秒数（new Date(dateAdded)）。
- `dateGroupModified`{{optional_inline}}
  - : `number`. 该文件夹内容的上一次修改时间，表示为自 1970 年 1 月 1 日午夜至今所经过的毫秒数。
- `unmodifiable`{{optional_inline}}
  - : {{WebExtAPIRef('bookmarks.BookmarkTreeNodeUnmodifiable')}}. 表示该节点不可修改的原因，"_managed_"表示该节点由系统管理员配置。如果该节点可以由用户和扩展程序修改（默认）则省略。
- `children`{{optional_inline}}
  - : `array` of `{{WebExtAPIRef('bookmarks.BookmarkTreeNode')}}`. 该节点的所有子节点（已排序）。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples}}

> **备注：** This API is based on Chromium's [`chrome.bookmarks`](https://developer.chrome.com/extensions/bookmarks#type-BookmarkTreeNode) API. This documentation is derived from [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) in the Chromium code.
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
