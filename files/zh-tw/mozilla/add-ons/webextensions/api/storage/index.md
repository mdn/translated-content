---
title: storage
slug: Mozilla/Add-ons/WebExtensions/API/storage
---

{{AddonSidebar}}

讓套件可以存讀資料以及監聽儲存項目的更動。

儲存系統基於 [Web Storage API](/zh-TW/docs/Web/API/Web_Storage_API)，有一些不同，包括：

- 非同步
- 值的作用域在套件而不是某個特定的網域（後端的所有腳本與內容腳本都可用同樣的鍵值）。
- 儲存的值可以是任何的 JSON-ifiable 值而並非只能是 [`String`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String)。這包括了： [`陣列`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array)、[`物件`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object)。但只有在內容可以被以 JSON 表示的時候，這表示不包含 DOM 節點。你不需要特地把值轉爲 JSON `Strings`來儲存它們，它們在內部就是以 JSON 來表示的。
- 同一個 API 呼叫中可以設置或取得複數鍵值。

要使用這個 API 你必須在 [manifest.json](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/manifest.json) 裡面加入 "storage" 的[權限](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)。

每個套件都有自己的儲存空間，它們可以被切分爲不同種類的儲存。

雖然這個 API 與{{domxref("Window.localStorage")}}很相似，建議你不要在套件裡使用 `Window.localStorage` 儲存套件相關資料。Firefox 在用戶由於隱私問題清除歷史記錄與資料時會清除 localStorage API 儲存的資料，而 [`storage.local`](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/API/storage/local) API 儲存的則會留著。

> [!NOTE]
> 儲存空間不會被加密，所以你不應該把它們用來儲存用戶的機密資料。

## 型別

- {{WebExtAPIRef("storage.StorageArea")}}
  - : 表示儲存空間的物件。
- {{WebExtAPIRef("storage.StorageChange")}}
  - : 表示儲存空間變化的物件。

## 屬性

`storage` 有三個屬性，各自表示不同種類的儲存空間。

- {{WebExtAPIRef("storage.sync")}}
  - : 表示 `sync` 儲存空間。`sync` 儲存空間裡的項目會被瀏覽器同步，所以可以跨裝置在所有已登入瀏覽器實例裡面使用。
- {{WebExtAPIRef("storage.local")}}
  - : 表示 `local` 儲存空間。`local` 儲存空間裡的項目會被侷限在安裝套件的機器上。
- {{WebExtAPIRef("storage.managed")}}
  - : 表示 `managed` 儲存空間。`managed` 儲存空間的項目由網域管理者設置而且對套件唯讀，修改這項會導致錯誤。

## 事件

- {{WebExtAPIRef("storage.onChanged")}}
  - : 當儲存空間裡的一個或更多項目被修改時觸發。

## 瀏覽器兼容性

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> This API is based on Chromium's [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage) API. This documentation is derived from [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) in the Chromium code.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.

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
