---
title: browserAction.onClicked
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/onClicked
l10n:
  sourceCommit: 5e1ef83ea9bd743f814258096abb05bdeb9c5ccf
---

在浏览器操作图标被点击时触发的事件。如果浏览器操作有弹出窗口，该事件将不会触发。

要定义右键单击操作，请使用 [`contextMenus`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/menus) API 和“browser_action”[上下文类型](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/menus/ContextType)。

## 语法

```js-nolint
browser.browserAction.onClicked.addListener(listener)
browser.browserAction.onClicked.removeListener(listener)
browser.browserAction.onClicked.hasListener(listener)
```

事件有三个函数：

- `addListener(listener)`
  - : 为此事件添加一个监听器。
- `removeListener(listener)`
  - : 停止监听此事件。listener 参数是要移除的监听器。
- `hasListener(listener)`
  - : 检查此事件是否注册了该 `listener`。如果在监听，则返回 `true`，否则返回 `false`。

## addListener 语法

### 参数

- `listener`
  - : 事件发生时调用的函数。该函数传递以下参数：
    - `tab`
      - : {{WebExtAPIRef('tabs.Tab')}}。图标被点击时活动的标签页。

    - `OnClickData`
      - : 一个包含点击信息的对象。
        - `modifiers`
          - : 一个 `array`。点击时活动的键盘修饰符，可以是 `Shift`、`Alt`、`Command`、`Ctrl` 或 `MacCtrl` 中的一个或多个。
        - `button`
          - : 一个 `integer`。表示用于点击页面操作图标的按钮：`0` 表示左键点击或与鼠标无关的点击（例如来自键盘的点击），`1` 表示中键或滚轮点击。注意，不支持右键点击，因为 Firefox 会在触发此事件前显示上下文菜单。

## 浏览器兼容性

{{Compat}}

## 示例

当用户点击浏览器操作图标时，为当前的活动标签页禁用浏览器操作，并记录标签页的 URL：

```js
browser.browserAction.onClicked.addListener((tab) => {
  // 禁用此标签页的浏览器操作
  browser.browserAction.disable(tab.id);
  // 需要“tabs”或“activeTab”权限，或 URL 的主机权限
  console.log(tab.url);
});
```

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.browserAction`](https://developer.chrome.google.cn/docs/extensions/mv2/reference/browserAction#event-onClicked) API。该文档衍生自 Chromium 代码中的 [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json)。

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
