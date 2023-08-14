---
title: cookies.onChanged
slug: Mozilla/Add-ons/WebExtensions/API/cookies/onChanged
---

{{AddonSidebar()}}

{{WebExtAPIRef("cookies")}} API 的 `onChanged` 事件會在 cookie 設定或刪除時觸發。

請注意，更新 cookie 的屬性要透過以下兩個步驟實做：

1. 首先，要更新的 cookie 會先被刪掉，並產生一個 `overwrite` 的 {{WebExtAPIRef("cookies.OnChangedCause")}} 提醒。
2. 接著，帶著更新數值的新 cookie 會被寫進去，並產生第二個 `explicit` 的 {{WebExtAPIRef("cookies.OnChangedCause")}} 提醒。

## 語法

```js
browser.cookies.onChanged.addListener(listener);
browser.cookies.onChanged.removeListener(listener);
browser.cookies.onChanged.hasListener(listener);
```

此 API 也能以 `browser.cookies.onChanged.*` 運行。

此事件有以下函式：

- `addListener(callback)`
  - : 給此事件添加監聽器（listener）。
- `removeListener(listener)`
  - : 停止監聽此事件。`listener` 參數是要移除的監聽器。
- `hasListener(listener)`
  - : 檢查此事件的 `listener` 是否被監聽了。若有監聽，回傳 `true`，否則回傳 `false`。

## addListener 語法

### 參數

- `callback`

  - : 能被呼叫的 callback 函式會在此事件發生的時候觸發。函式會 passed 以下參數：

    - `changeInfo`

      - : 一個含有觸發事件資訊的 `object`。它有兩個屬性：

        - `removed`
          - : 一個 `boolean`。如果 cookie 被刪除則為 `true`，否則為 `false`。
        - `cookie`
          - : 一個 {{WebExtAPIRef('cookies.Cookie')}} 物件。含有被設定、或被刪除的 cookie 資訊。
        - `cause`
          - : 一個 {{WebExtAPIRef('cookies.OnChangedCause')}} 數值。含有 cookie 被改變的潛在原因。

## 瀏覽器相容性

{{Compat}}

## 示例

本範例監聽 `onChanged` 事件並紀錄由 `changeInfo` 參數傳來的資訊：

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
