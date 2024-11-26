---
title: bookmarks
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks
l10n:
  sourceCommit: eec174a08a5003da32f53e694c45eda3377b4d18
---

{{AddonSidebar}}

[WebExtensions](/zh-CN/docs/Mozilla/Add-ons/WebExtensions) {{WebExtAPIRef("bookmarks")}} API 允许扩展与浏览器的书签系统交互并对其进行操作。你可以用它给页面加书签、获取已有的书签，以及编辑、移除和管理书签。

欲使用此 API，扩展必须在它的 [`manifest.json`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json) 文件当中请求“bookmarks”[权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)。

扩展无法在书签树的根节点中创建、修改或删除书签。这样做会导致错误，错误消息为：“_The bookmark root cannot be modified_”。

## 类型

- {{WebExtAPIRef("bookmarks.BookmarkTreeNode")}}
  - : 表示在书签树中的一个书签或者文件夹。
- {{WebExtAPIRef("bookmarks.BookmarkTreeNodeType")}}
  - : 一个描述树中的某个节点是否是书签、文件夹或是分割符的{{jsxref("String", "字符串", "", 1)}}枚举类型。
- {{WebExtAPIRef("bookmarks.BookmarkTreeNodeUnmodifiable")}}
  - : 一个说明了为什么一个书签或者文件夹是不可修改的{{jsxref("String", "字符串", "", 1)}}枚举类型。
- {{WebExtAPIRef("bookmarks.CreateDetails")}}
  - : 当创建一个新书签时，包含被传递给 {{WebExtAPIRef("bookmarks.create()")}} 函数的信息。

## 方法

- {{WebExtAPIRef("bookmarks.create()")}}
  - : 创建一个书签或文件夹。
- {{WebExtAPIRef("bookmarks.get()")}}
  - : 给定一个书签的编号或者一个书签编号的数组，获取对应的一个或者多个 {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}}。
- {{WebExtAPIRef("bookmarks.getChildren()")}}
  - : 获取指定 {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}} 节点的子节点。
- {{WebExtAPIRef("bookmarks.getRecent()")}}
  - : 获取最近添加的几个书签。
- {{WebExtAPIRef("bookmarks.getSubTree()")}}
  - : 获取从指定节点开始的部分书签树。
- {{WebExtAPIRef("bookmarks.getTree()")}}
  - : 以 {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}} 对象数组的形式获取整个书签树。
- {{WebExtAPIRef("bookmarks.move()")}}
  - : 将指定的 {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}} 移到书签树中的新位置。
- {{WebExtAPIRef("bookmarks.remove()")}}
  - : 给定节点 ID，删除对应的书签或者空书签文件夹。
- {{WebExtAPIRef("bookmarks.removeTree()")}}
  - : 递归删除书签文件夹，即给定文件夹节点的 ID，删除该节点及其所有子节点。
- {{WebExtAPIRef("bookmarks.search()")}}
  - : 搜索匹配一组指定条件的 {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}}。
- {{WebExtAPIRef("bookmarks.update()")}}
  - : 给定书签 ID，更新对应的书签的标题和 URL，或书签文件夹的名称。

## 事件

- {{WebExtAPIRef("bookmarks.onCreated")}}
  - : 当书签或文件夹被创建时触发。
- {{WebExtAPIRef("bookmarks.onRemoved")}}
  - : 当书签或文件夹被删除时触发。当递归删除文件夹时，只会为文件夹触发一次通知，其内容不会触发通知。
- {{WebExtAPIRef("bookmarks.onChanged")}}
  - : 当书签或文件夹发生更改时触发。目前，只有 `title` 和 `url` 的更改会触发此事件。
- {{WebExtAPIRef("bookmarks.onMoved")}}
  - : 当书签或文件夹被移动到不同的父文件夹或在其文件夹中发生偏移时触发。
- {{WebExtAPIRef("bookmarks.onChildrenReordered")}}
  - : 当用户在浏览器的 UI 中对文件夹的子项进行排序时触发。这不是由 {{WebExtAPIRef("bookmarks.move", "move()")}} 调用的结果。
- {{WebExtAPIRef("bookmarks.onImportBegan")}}
  - : 当开始书签导入会话时触发。消耗性的观察者应该忽略 {{WebExtAPIRef("bookmarks.onCreated")}} 更新，直到 {{WebExtAPIRef("bookmarks.onImportEnded")}} 被触发。观察者仍应立即处理其他通知。
- {{WebExtAPIRef("bookmarks.onImportEnded")}}
  - : 当书签导入会话结束时触发。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.bookmarks`](https://developer.chrome.google.cn/docs/extensions/reference/api/bookmarks) API。该文档衍生自 Chromium 代码中的 [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json)。

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
