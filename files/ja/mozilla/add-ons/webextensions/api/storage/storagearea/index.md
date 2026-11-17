---
title: storage.StorageArea
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea
l10n:
  sourceCommit: 2857820893ce291eb2cf5e370551136065bc080c
---

StorageArea はストレージ領域を表すオブジェクトです。このドキュメントでは、次の具体的な実装に共通するインターフェイスについて説明します。

- {{WebExtAPIRef("storage.local")}}
- {{WebExtAPIRef("storage.managed")}}
- {{WebExtAPIRef("storage.session")}}
- {{WebExtAPIRef("storage.sync")}}

`storage.StorageArea` は API オブジェクトではなく、具体的な API を記述するための仕組みです。

## 型

この型の値はオブジェクトです。

## メソッド

- {{WebExtAPIRef("storage.StorageArea.get()")}}
  - : ストレージ領域から 1 つ以上のアイテムを取得します。
- {{WebExtAPIRef("storage.StorageArea.getBytesInUse()")}}
  - : ストレージ領域に格納されている 1 つ以上のアイテムが使用している容量をバイト単位で取得します。
- {{WebExtAPIRef("storage.StorageArea.getKeys()")}}
  - : ストレージ領域内のすべてのアイテムのキーを取得します。
- {{WebExtAPIRef("storage.StorageArea.set()")}}
  - : 1 つ以上のアイテムをストレージ領域に保存します。アイテムがすでに存在する場合、その値が更新されます。
- {{WebExtAPIRef("storage.StorageArea.setAccessLevel()")}}
  - : ストレージ領域のアクセスレベルを設定します。
- {{WebExtAPIRef("storage.StorageArea.remove()")}}
  - : 1 つ以上のアイテムをストレージ領域から削除します。
- {{WebExtAPIRef("storage.StorageArea.clear()")}}
  - : すべてのアイテムをストレージ領域から削除します。

## イベント

- {{WebExtAPIRef("storage.StorageArea.onChanged")}}
  - : ストレージ領域内の 1 つ以上のアイテムが変更されたときに発生します。

{{WebExtExamples}}

## ブラウザーの互換性

{{Compat}}

> [!NOTE]
> この API は Chromium の [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage#type-StorageArea)<sup>(英語)</sup> API に基づいています。このドキュメントは Chromium のコードにある [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) から派生したものです。

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
