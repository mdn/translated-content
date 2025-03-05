---
title: cookies.OnChangedCause
slug: Mozilla/Add-ons/WebExtensions/API/cookies/OnChangedCause
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

{{WebExtAPIRef("cookies")}} API 的 `OnChangedCause` 类型表示 cookie 更改的原因。

## 类型

此类型的值是字符串。可能的值有：

- `evicted`
  - : 由于垃圾回收，cookie 被自动移除。
- `expired`
  - : 由于过期，cookie 被自动移除。
- `explicit`
  - : 插入了一个 cookie，或者通过显式调用 {{WebExtAPIRef("cookies.remove()")}} 将一个 cookie 移除。
- `expired_overwrite`
  - : 一个 cookie 被另一个已过期的 cookie 覆盖。
- `overwrite`
  - : 调用 {{WebExtAPIRef("cookies.set()")}} 用另一个 Cookie 覆盖了这个 Cookie。

## 浏览器兼容性

{{Compat}}

## 示例

你可以监听 {{WebExtAPIRef("cookies.onChanged")}} 事件，以便在 cookie 更改时收到通知。监听器接收一个包含 `cause` 属性（其值为 `OnChangedCause` 字符串）的 `changeInfo` 对象：

```js
browser.cookies.onChanged.addListener((changeInfo) => {
  console.log(
    `cookie 发生了变化：\n` +
      ` * cookie：${JSON.stringify(changeInfo.cookie)}\n` +
      ` * 变化原因：${changeInfo.cause}\n` +
      ` * 是否移除：${changeInfo.removed}`,
  );
});
```

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.cookies`](https://developer.chrome.google.cn/docs/extensions/reference/api/cookies#type-OnChangedCause) API。本文档源自 Chromium 代码中的 [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json)。

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
