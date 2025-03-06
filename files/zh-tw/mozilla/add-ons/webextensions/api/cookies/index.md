---
title: cookies
slug: Mozilla/Add-ons/WebExtensions/API/cookies
---

{{AddonSidebar}}讓擴充套件可以取得、設定 cookies 資訊，並監控其變動。

使用此 API 前，必須先在 [manifest.json](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/manifest.json) 檔案中加入「cookies」這項 [API 權限宣告](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions)，也必須以 [host 權限宣告](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions)將要存取 Cookies 的網站列入。參見 [Cookie 權限](#權限)一節。

## 型別

- {{WebExtAPIRef("cookies.Cookie")}}
  - : 代表一個 HTTP cookie 的相關資訊。
- {{WebExtAPIRef("cookies.CookieStore")}}
  - : 代表瀏覽器中的 cookie 存放空間。
- {{WebExtAPIRef("cookies.OnChangedCause")}}
  - : 代表觸發 cookie 資料變動的原因。

## 方法

- {{WebExtAPIRef("cookies.get()")}}
  - : 取回單一 cookie 的相關資訊。
- {{WebExtAPIRef("cookies.getAll()")}}
  - : 取回符合設定條件的所有 cookies 資訊。
- {{WebExtAPIRef("cookies.set()")}}
  - : 為 cookie 設定資料。如果目前已有相同的 cookies，則會覆寫原本的 cookie 資料。
- {{WebExtAPIRef("cookies.remove()")}}
  - : 刪除某特定名稱的 cookie。
- {{WebExtAPIRef("cookies.getAllCookieStores()")}}
  - : 列出目前所有的 cookie 存放空間。

## 事件處理程序

- {{WebExtAPIRef("cookies.onChanged")}}
  - : 當 cookie 設定或刪除時觸發。

## 權限

使用此 API 前，擴充套件應於 manifest.json 設定檔中指明需要「cookies」[API 權限](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions)，亦須以 [host 權限宣告](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions)指明需要存取 cookies 的網站清單。此後，符合 host 權限宣告的 URL 所能讀寫的任何 cookies，該擴充套件即可讀取。比方說：

- `http://*.example.com/`

  - : 若套件有這樣的 host 權限宣告，即可：

    - 讀取 `www.example.com` 任何路徑下的非安全 cookie。
    - 寫入 `www.example.com` 任何路徑下的安全或非安全 cookie。

    但*不能*：

    - 讀取 `www.example.com` 下的安全 cookie。

- `http://www.example.com/`

  - : 若套件有這樣的 host 權限宣告，即可：

    - 讀取 `www.example.com` 任何路徑下的非安全 cookie。
    - 讀取 `.example.com` 任何路徑下的非安全 cookie。
    - 寫入 `www.example.com` 任何路徑下的安全或非安全 cookie。
    - 寫入 `.example.com` 任何路徑下的安全或非安全 cookie。

    但*不能*：

    - 寫入 `foo.example.com` 的 cookie。
    - 寫入 `foo.www.example.com` 的 cookie。

- `*://*.example.com/`

  - : 若套件有這樣的 host 權限宣告，即可：

    - 讀、寫 `www.example.com` 任何路徑下的安全或非安全 cookie。

## 瀏覽器相容性

{{Compat}}

### Edge 不相容資訊

Edge 不支援 promises，請使用回呼（callback）函式處理。

{{WebExtExamples("h2")}}

> [!NOTE]
> 此 API 基於 Chromium 的 [`chrome.cookies`](https://developer.chrome.com/docs/extensions/reference/api/cookies) API 而來，文件改作自 Chromium 程式碼裡的 [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json)。
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
