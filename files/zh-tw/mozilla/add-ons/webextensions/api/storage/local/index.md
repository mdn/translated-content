---
title: storage.local
slug: Mozilla/Add-ons/WebExtensions/API/storage/local
---

{{AddonSidebar}}

代表 `local` 儲存空間。通常 `local` 裡面的東西，會放在套件安裝的地方。

瀏覽器可能會限制套件本地可儲存的資料數量：

- Chrome 限制套件內用到此 API 資料的上限為 5MB，除非有 [unlimitedStorage](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#unlimited_storage) 權限。
- 56 版以後的 Firefox 將能要求 unlimitedStorage 權限。目前 Firefox 還沒有限制套件內的資料上限，但這功能會在未來引入：因此，如果可能會儲存大容量的資料，最好要實做 unlimitedStorage 的請求。

如果套件被移除、相關的儲存資料也會一併移除。

在 Firefox 內，你可以透過 about:config 內設定 keepUuidOnUninstall 與 keepStorageOnUninstall 為 `true` 以避免瀏覽器在移除套件時，一併移除相關的儲存資料。這個功能是為了方便開發者除錯，套件本身無法改變這個設定。

雖然這 API 與 {{domxref("Window.localStorage")}} 相似，但不建議在套件內使用 `Window.localStorage`。在某些情況下，用戶會出於隱私上的理由，要求 Firefox 清理瀏覽紀錄與資料，這其中就包含使用 localStorage API 的資料。另一方面，storage.local API 的資料，在這種情況下會予以保留。

## 方法

`local` 物件實做了定義於 {{WebExtAPIRef("storage.StorageArea")}} 類別的方法：

- {{WebExtAPIRef("storage.StorageArea.get()")}}
  - : 取得一個或多個源自儲存空間的項目。
- {{WebExtAPIRef("storage.StorageArea.getBytesInUse()")}}
  - : 取得儲存空間內，一個或多個已為項目所使用的容量。單位為 byte。
- {{WebExtAPIRef("storage.StorageArea.set()")}}
  - : Stores one or more items in the storage area. If the item already exists, its value will be updated. When you set a value, the {{WebExtAPIRef("storage.onChanged")}} event will fire.
- {{WebExtAPIRef("storage.StorageArea.remove()")}}
  - : 刪除一個或多個儲存空間內的項目。
- {{WebExtAPIRef("storage.StorageArea.clear()")}}
  - : 刪除所有儲存空間內的項目。

## 瀏覽器相容性

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> This API is based on Chromium's [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage#property-local) API. This documentation is derived from [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) in the Chromium code.
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
