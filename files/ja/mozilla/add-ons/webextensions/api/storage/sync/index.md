---
title: storage.sync
slug: Mozilla/Add-ons/WebExtensions/API/storage/sync
---

{{AddonSidebar}}

`sync` ストレージ領域を指します。 `sync` ストレージ内のアイテムはブラウザーによって同期され、ログイン(Firefox sync や Google アカウントなど)しているブラウザー・デバイスの全てのインスタンスで利用できます。

Firefox の場合、ユーザーは `"about:preferences"` の "Sync 設定" オプションの下にある "アドオン" ボックスにチェックを入れる必要があります。

`storage.sync` の実装はアドオン ID に依存していることに注意してください。もし `storage.sync` を使うのであれば、 [`browser_specific_settings`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) manifest.json キーを使用して拡張機能に ID を設定する必要があります。

この API の主な利用例は拡張機能の設定を格納し、異なるプロファイル間で同期させることです。この API は最大 100 KB までデータを格納できます。それ以上格納しようとするとエラーメッセージを返して失敗します。 この API は稼働時間やパフォーマンスを保証しません。

## 関数

`sync` オブジェクトは {{WebExtAPIRef("storage.StorageArea")}} 型で定義された関数を実装しています。

- {{WebExtAPIRef("storage.StorageArea.get()", "storage.<var>StorageArea</var>.get()")}}
  - : ストレージ領域から 1 つ以上のアイテムを取得します。
- {{WebExtAPIRef("storage.StorageArea.getBytesInUse()", "storage.<var>StorageArea</var>.getBytesInUse()")}}
  - : 1 つ以上のストレージ領域内に格納されたアイテムが占めるストレージ空間をバイト単位で取得します。
- {{WebExtAPIRef("storage.StorageArea.set()", "storage.<var>StorageArea</var>.set()")}}
  - : 1 つ以上のアイテムをストレージ領域に格納します。既にアイテムが存在していれば値は上書きされます。
- {{WebExtAPIRef("storage.StorageArea.remove()", "storage.<var>StorageArea</var>.remove()")}}
  - : ストレージ領域内の 1 つ以上のアイテムを削除します。
- {{WebExtAPIRef("storage.StorageArea.clear()", "storage.<var>StorageArea</var>.clear()")}}
  - : ストレージ領域内の全てのアイテムを削除します。

## ブラウザーの互換性

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> この API は Chromium の [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage#property-sync) API に基づいています。また、このドキュメントは [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) における Chromium のコードに基づいています。

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
