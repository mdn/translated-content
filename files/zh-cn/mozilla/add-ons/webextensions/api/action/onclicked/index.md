---
title: action.onClicked
slug: Mozilla/Add-ons/WebExtensions/API/action/onClicked
l10n:
  sourceCommit: b30a10c08b986ebabd44733fb62f67667350403e
---

{{AddonSidebar}}

当浏览器操作图标被点击时触发。如果浏览器操作有一个弹出窗口，此事件将不会触发。

> [!NOTE]
> 该 API 在 Manifest V3 或更高版本中可用。

要定义右键单击操作，请使用“browser_action”[上下文类型](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/menus/ContextType)的 [`contextMenus`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/menus) API。

## 语法

```js-nolint
browser.action.onClicked.addListener(listener)
browser.action.onClicked.removeListener(listener)
browser.action.onClicked.hasListener(listener)
```

事件包含三个函数：

- `addListener(listener)`
  - : 为该事件添加一个监听器。
- `removeListener(listener)`
  - : 停止监听该事件。`listener` 参数用于指定要移除的监听器。
- `hasListener(listener)`
  - : 检查 `listener` 是否有注册到该事件的上。若正在监听，返回 `true`，否则返回 `false`。

## addListener 语法

### 参数

- `listener`

  - : 该函数将在事件触发时被调用。会为该函数传递以下参数：

    - `tab`
      - : {{WebExtAPIRef('tabs.Tab')}}，当图标被点击时的活动标签页。
    - `OnClickData`

      - : 包含有关点击的信息的对象。

        - `modifiers`
          - : `array`，点击时活动的键盘修饰符，可以是 `Shift`、`Alt`、`Command`、`Ctrl` 或 `MacCtrl` 中的一个或多个。
        - `button`
          - : `integer`，指示用于点击页面操作图标的按钮：`0` 表示左键点击或不是鼠标的点击，例如键盘点击，`1` 表示中键或滚轮点击。请注意，不支持右键点击，因为 Firefox 在触发此事件之前会消耗该点击以显示上下文菜单。

## 示例

当用户点击图标时，禁用当前标签页，并记录标签页的 URL：

```js
browser.action.onClicked.addListener((tab) => {
  // 禁用活动标签页
  browser.action.disable(tab.id);
  // 需要“tabs”或“activeTab”权限，或对该 URL 的“host”权限。
  console.log(tab.url);
});
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 该 API 基于 Chromium 的 [`chrome.action`](https://developer.chrome.google.cn/docs/extensions/reference/api/action#event-onClicked) API。本文衍生自 Chromium 代码中的 [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json)。

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
