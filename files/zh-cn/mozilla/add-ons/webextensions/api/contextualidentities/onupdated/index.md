---
title: contextualIdentities.onUpdated
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/onUpdated
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

当场景身份的属性（例如其名称、图标或颜色）发生变化时触发。场景身份可以由扩展使用 `contextualIdentities` API 更新，也可以由用户直接通过浏览器的用户界面更新。

## 语法

```js-nolint
browser.contextualIdentities.onUpdated.addListener(listener)
browser.contextualIdentities.onUpdated.removeListener(listener)
browser.contextualIdentities.onUpdated.hasListener(listener)
```

事件有三个函数：

- `addListener(listener)`
  - : 向此事件添加一个监听器。
- `removeListener(listener)`
  - : 停止监听此事件。`listener` 参数是要移除的监听器。
- `hasListener(listener)`
  - : 检查 `listener` 是否已注册此事件。如果正在监听，返回 `true`，否则返回 `false`。

## addListener 语法

### 参数

- `listener`
  - : 当此事件发生时调用的函数。该函数传递一个参数：
    - `changeInfo`
      - : `object`。包含单个属性 `contextualIdentity` 的对象（一个 {{WebExtAPIRef("contextualIdentities.ContextualIdentity")}} 对象表示属性被更新的身份）。

## 浏览器兼容性

{{Compat}}

## 示例

```js
function handleUpdated(changeInfo) {
  console.log(`已更新：${changeInfo.contextualIdentity.name}`);
}

browser.contextualIdentities.onUpdated.addListener(handleUpdated);
```

{{WebExtExamples}}

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
