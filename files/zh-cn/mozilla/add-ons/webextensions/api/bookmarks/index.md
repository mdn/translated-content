---
title: bookmarks
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks
l10n:
  sourceCommit: eec174a08a5003da32f53e694c45eda3377b4d18
---

{{AddonSidebar}}

此 [WebExtensions](/zh-CN/docs/Mozilla/Add-ons/WebExtensions) {{WebExtAPIRef("bookmarks")}} API 允许一个附加组件和浏览器的书签系统交互和操作。你可以用它给页面加书签，获取已有的书签，以及编辑，移除和管理书签。

欲使用此 API，一个附件组件必须在它的 [`manifest.json`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json) 文件当中请求“bookmarks”[权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)。

Extensions 无法在书签树的根节点中创建、修改或删除书签。这样做会导致错误，错误消息为：“_无法修改书签根节点_”。

## 类型

- {{WebExtAPIRef("bookmarks.BookmarkTreeNode")}}
  - : 表示在书签树中的一个书签或者文件夹。
- {{WebExtAPIRef("bookmarks.BookmarkTreeNodeType")}}
  - : 一个描述在树中的一个节点是否是一个书签，一个文件夹或是一个分割符的 {{jsxref("String")}} 枚举类型。
- {{WebExtAPIRef("bookmarks.BookmarkTreeNodeUnmodifiable")}}
  - : 一个说明了为什么一个书签或者文件夹是不可修改的 {{jsxref("String")}} 枚举类型。
- {{WebExtAPIRef("bookmarks.CreateDetails")}}
  - : 当创建一个新书签时，包含被传递给这个 {{WebExtAPIRef("bookmarks.create()")}} 函数的信息。

## 方法

- {{WebExtAPIRef("bookmarks.create()")}}
  - : 创建一个书签或文件夹。
- {{WebExtAPIRef("bookmarks.get()")}}
  - : 获得一个或者多个{{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}}，提供一个书签的编号或者一个书签编号的数组。
- {{WebExtAPIRef("bookmarks.getChildren()")}}
  - : 获取指定{{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}}节点的所有子节点。
- {{WebExtAPIRef("bookmarks.getRecent()")}}
  - : 获取最近添加的几个书签。
- {{WebExtAPIRef("bookmarks.getSubTree()")}}
  - : 获取从指定节点开始的部分书签树。
- {{WebExtAPIRef("bookmarks.getTree()")}}
  - : 获取整个书签树。
- {{WebExtAPIRef("bookmarks.move()")}}
  - : 将指定的书签树节点移到指定位置
- {{WebExtAPIRef("bookmarks.remove()")}}
  - : 删除书签或者空文件夹。
- {{WebExtAPIRef("bookmarks.removeTree()")}}
  - : 删除整个书签文件夹。
- {{WebExtAPIRef("bookmarks.search()")}}
  - : 搜索书签树节点，找出匹配的结果。如果以对象方式指定查询，得到的 BookmarkTreeNodes 匹配所有指定的属性。
- {{WebExtAPIRef("bookmarks.update()")}}
  - : 更新书签或文件夹的属性。只需要指定你需要更改的属性，未指定的属性不会更改。注意：目前只支持“title”和“url”属性。

## 事件

- {{WebExtAPIRef("bookmarks.onCreated")}}
  - : 当书签或文件夹创建时产生。
- {{WebExtAPIRef("bookmarks.onRemoved")}}
  - : 当删除书签或文件夹时产生。当删除整个文件夹（包括其中所有内容）时，仅为该文件夹发送通知，不为其中任何内容发送通知。
- {{WebExtAPIRef("bookmarks.onChanged")}}
  - : 一个书签或文件夹更改时发生。注意：目前只有标题和 URL 更改时会触发这一事件。
- {{WebExtAPIRef("bookmarks.onMoved")}}
  - : 当书签或文件夹移动到另一个父文件夹中时产生。
- {{WebExtAPIRef("bookmarks.onChildrenReordered")}}
  - : 文件夹中的子节点在用户界面中调整顺序时产生。调用 move() 不会触发该事件。
- {{WebExtAPIRef("bookmarks.onImportBegan")}}
  - : 开始导入书签时产生。复杂的事件处理函数在这一事件产生后不应该再处理 onCreated 事件，直到 onImportEnded 事件产生，在此过程中其他事件仍然应该立即处理。
- {{WebExtAPIRef("bookmarks.onImportEnded")}}
  - : 书签导入结束时产生。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples("h2")}}

> **备注：** 此 API 基于 Chromium 的 [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/bookmarks/) API。该文档衍生自 Chromium 代码中的 [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json)。

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
