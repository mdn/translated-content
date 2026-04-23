---
title: storage.StorageArea
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea
---

{{AddonSidebar}}

StorageArea はストレージ領域を表すオブジェクトです。

## 型

StorageArea はオブジェクト型です。

## 関数

- {{WebExtAPIRef("storage.StorageArea.get()")}}
  - : ストレージ領域から 1 つ以上のアイテムを取得します。
- {{WebExtAPIRef("storage.StorageArea.getBytesInUse()")}}
  - : ストレージ領域に格納されている 1 つ以上のアイテムで使用されているストレージサイズ(バイト単位)を取得します。
- {{WebExtAPIRef("storage.StorageArea.set()")}}
  - : 1 つ以上のアイテムをストレージ領域に保存します。既にアイテムが存在する場合は値が上書きされます。
- {{WebExtAPIRef("storage.StorageArea.remove()")}}
  - : 1 つ以上のアイテムをストレージ領域から削除します。
- {{WebExtAPIRef("storage.StorageArea.clear()")}}
  - : 全てのアイテムをストレージ領域から削除します。

## ブラウザーの互換性

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> この API は Chromium [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage#type-StorageArea) API に模度づいています。また、このドキュメントは [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) における Chromium のコードに基づいています。

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
