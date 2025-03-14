---
title: cookies.onChanged
slug: Mozilla/Add-ons/WebExtensions/API/cookies/onChanged
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

{{WebExtAPIRef("cookies")}} API 的 `onChanged` 事件在设置或删除扩展程序可以访问的 Cookie 时触发。

> [!NOTE]
> 当[存储分区](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/cookies#存储分区)处于活动状态时，`cookies.Cookie.partitionKey` 包含 Cookie 的存储分区的描述。在修改 Cookie 时，将此值传递给 {{WebExtAPIRef("cookies.set()")}} 或 {{WebExtAPIRef("cookies.remove()")}} 很重要，以确保扩展程序使用正确的 Cookie。

请注意，更新 Cookie 属性实际上是一个两步过程：

1. 首先，要更新的 Cookie 首先被完全删除，生成一个具有 `overwrite` 的 {{WebExtAPIRef("cookies.OnChangedCause")}} 的通知。
2. 接下来，使用更新后的值写入一个新的 Cookie，生成第二个具有 `explicit` 的 {{WebExtAPIRef("cookies.OnChangedCause")}} 的通知。

## 语法

```js-nolint
browser.cookies.onChanged.addListener(listener)
browser.cookies.onChanged.removeListener(listener)
browser.cookies.onChanged.hasListener(listener)
```

此 API 也可作为 `browser.cookies.onChanged.*` 使用。

事件有三个函数：

- `addListener(listener)`
  - : 向此事件添加监听器。
- `removeListener(listener)`
  - : 停止监听此事件。`listener` 参数是要移除的监听器。
- `hasListener(listener)`
  - : 检查是否为此事件注册了 `listener`。如果正在监听，则返回 `true`，否则返回 `false`。

## addListener 语法

### 参数

- `listener`

  - : 当此事件发生时调用的函数。该函数被传递以下参数：

    - `changeInfo`

      - : 包含发生变化的细节的 `object`。其属性如下：

        - `removed`
          - : 一个布尔值，如果删除了一个 `Cookie`，则设置为 `true`，否则为 `false`。
        - `cookie`
          - : 一个 {{WebExtAPIRef('cookies.Cookie')}} 对象，包含有关设置或删除的 Cookie 的信息。
        - `cause`
          - : 表示 Cookie 变化背后的基础原因的 {{WebExtAPIRef('cookies.OnChangedCause')}} 值。

## 浏览器兼容性

{{Compat}}

## 示例

此示例监听 `onChanged` 事件并记录来自 `changeInfo` 参数的详细信息：

```js
browser.cookies.onChanged.addListener((changeInfo) => {
  console.log(
    `Cookie 已变化：\n` +
      ` * Cookie：${JSON.stringify(changeInfo.cookie)}\n` +
      ` * 原因：${changeInfo.cause}\n` +
      ` * 是否删除：${changeInfo.removed}`,
  );
});
```

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.cookies`](https://developer.chrome.google.cn/docs/extensions/reference/api/cookies#event-onChanged) API。本文档源自 Chromium 代码中的 [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json)。

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
