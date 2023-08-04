---
title: cookies.OnChangedCause
slug: Mozilla/Add-ons/WebExtensions/API/cookies/OnChangedCause
---

{{AddonSidebar()}}

{{WebExtAPIRef("cookies")}} API 的 `OnChangedCause` 型別，代表觸發 cookie 資料變動的原因。

## 型別

此型別的所有值都是字串（string）。可用值包括：

- `evicted`
  - : 由於垃圾回收（garbage collection）而被刪除的 cookie。
- `expired`
  - : 由於過期而被刪除的 cookie。
- `explicit`
  - : 透過顯式呼叫（explicit call）{{WebExtAPIRef("cookies.remove()")}} 而被插入或刪除的 cookie。
- `expired_overwrite`
  - : 被已過期（already-expired expiration date）cookie 所覆寫的 cookie。
- `overwrite`
  - : A call to {{WebExtAPIRef("cookies.set()")}} overwrote this cookie with a different one.

## 瀏覽器相容性

{{Compat}}

## 示例

你可以在 cookie 變更的時候監聽被通知的 {{WebExtAPIRef("cookies.onChanged")}} 事件。此監聽器 passed 含有 `cause` 屬性，值為 `OnChangeCaused` 字串的 `changeInfo` 物件：

```js
browser.cookies.onChanged.addListener(function (changeInfo) {
  console.log(
    "Cookie changed: " +
      "\n * Cookie: " +
      JSON.stringify(changeInfo.cookie) +
      "\n * Cause: " +
      changeInfo.cause +
      "\n * Removed: " +
      changeInfo.removed,
  );
});
```

{{WebExtExamples}}

> **備註：** 此 API 基於 Chromium 的 [`chrome.cookies`](https://developer.chrome.com/extensions/cookies) API 而來，文件改作自 Chromium 程式碼裡的 [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json)。
>
> Microsoft Edge 的相容資訊來自微軟公司，原文以創用 CC 姓名標示 3.0 美國版條款授權大眾使用。

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
