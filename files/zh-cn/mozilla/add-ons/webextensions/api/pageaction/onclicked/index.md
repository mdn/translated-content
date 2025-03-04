---
title: pageAction.onClicked
slug: Mozilla/Add-ons/WebExtensions/API/pageAction/onClicked
l10n:
  sourceCommit: acc6ec7d08ede0727a68cbc696e983c572940f62
---

{{AddonSidebar}}

当页面操作图标被点击时触发。如果页面操作有弹窗，则该事件将不会被触发。

要定义右键单击操作，请使用{{WebExtAPIRef('contextMenus', "上下文菜单", "", "nocode")}} API（使用 `page_action` {{WebExtAPIRef('contextMenus/ContextType', '上下文类型', '', 'nocode')}}）。

## 语法

```js-nolint
browser.pageAction.onClicked.addListener(listener)
browser.pageAction.onClicked.removeListener(listener)
browser.pageAction.onClicked.hasListener(listener)
```

事件有三个函数：

- `addListener(listener)`
  - : 为该事件添加监听器。
- `removeListener(listener)`
  - : 停止监听此事件。`listener` 参数是要移除的监听器。
- `hasListener(listener)`
  - : 检查是否已为此事件注册了 `listener`。如果正在监听，则返回 `true`，否则返回 `false`。

## addListener 语法

### 参数

- `listener`

  - : 当该事件发生时要调用的函数。该函数接收如下参数：

    - `tab`
      - : 一个表示被点击的页面操作的标签页的 {{WebExtAPIRef('tabs.Tab')}} 对象。
    - `OnClickData`

      - : 包含有关点击的信息的对象。

        - `modifiers`
          - : `array`。点击页面操作按钮时使用的键盘修饰符，可以是 `Shift`、`Alt`、`Command`、`Ctrl` 或 `MacCtrl` 中的一个或多个。
        - `button`
          - : `integer`。指示用于点击页面操作图标的按钮：`0` 表示左键单击或不与鼠标相关的点击（例如键盘点击），`1` 表示中键或滚轮点击。请注意，并不支持右键单击，因为 Firefox 在触发此事件之前会消耗右键单击以显示上下文菜单。

## 浏览器兼容性

{{Compat}}

## 示例

以下示例演示了如何在用户单击页面操作时隐藏该页面操作，并将活动标签页导航到“<https://giphy.com/explore/cat>”：

```js
let catGifs = "https://giphy.com/explore/cat";

browser.pageAction.onClicked.addListener((tab) => {
  browser.pageAction.hide(tab.id);
  browser.tabs.update({ url: catGifs });
});

browser.pageAction.onClicked.addListener(() => {});
```

{{WebExtExamples}}

> [!NOTE]
> 该 API 基于 Chromium 的 [`chrome.pageAction`](https://developer.chrome.google.cn/docs/extensions/mv2/reference/pageAction#event-onClicked) API。本文衍生自 Chromium 代码中的 [`page_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/page_action.json)。

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
