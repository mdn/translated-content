---
title: storage.managed
slug: Mozilla/Add-ons/WebExtensions/API/storage/managed
l10n:
  sourceCommit: 65692fd4d256d5647749b7c7005dcf53d425a533
---

{{WebExtAPIRef("storage.StorageArea")}} オブジェクトであり、`managed` ストレージ領域を表します。`managed` ストレージ内のアイテムは、ドメイン管理者またはユーザーのコンピューターにインストールされた他のネイティブアプリケーションによって設定され、拡張機能からは読み取り専用です。このストレージ領域を変更しようとすると、エラーが発生します。

## managed ストレージの設定

managed ストレージを設定する手順はブラウザーによって異なります。Chrome での手順は、["Manifest for storage areas"](https://developer.chrome.com/docs/extensions/reference/manifest/storage)<sup>(英語)</sup> の記事を参照してください。

Firefox では、特定の形式と場所に [JSON マニフェスト（ネイティブマニフェスト）ファイル](/ja/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#managed_storage_manifests)を作成するか、[`3rdparty` エンタープライズポリシー](https://mozilla.github.io/policy-templates/#3rdparty)を使用する必要があります。

ネイティブマニフェストの例を示します。

<!-- cSpell:ignore colour -->

```json
{
  "name": "favourite-colour-examples@mozilla.org",
  "description": "ignored",
  "type": "storage",
  "data": {
    "colour": "management thinks it should be blue!"
  }
}
```

このマニフェストを使うと、[favourite-colour](https://github.com/mdn/webextensions-examples/tree/main/favourite-colour) 拡張機能は次のようなコードでデータにアクセスできます。

```js
let storageItem = browser.storage.managed.get("colour");
storageItem.then((res) => {
  console.log(`Managed colour is: ${res.colour}`);
});
```

> [!NOTE]
> Firefox では、JSON マニフェストまたはポリシーの変更を managed ストレージに読み込むために、ブラウザーの再起動が必要です。他のブラウザーでは、変更は動的に読み込まれます。

## メソッド

`managed` オブジェクトは、{{WebExtAPIRef("storage.StorageArea")}} 型で定義されているメソッドを実装しています。

- {{WebExtAPIRef("storage.StorageArea.get()", "storage.managed.get()")}}
  - : ストレージ領域から 1 つ以上のアイテムを取得します。
- {{WebExtAPIRef("storage.StorageArea.getBytesInUse()", "storage.managed.getBytesInUse()")}}
  - : ストレージ領域内の 1 つ以上のアイテムが使用しているストレージ容量をバイト単位で取得します。
- {{WebExtAPIRef("storage.StorageArea.getKeys()", "storage.managed.getKeys()")}}
  - : ストレージ領域内のすべてのアイテムのキーを取得します。

## イベント

`managed` オブジェクトは、{{WebExtAPIRef("storage.StorageArea")}} 型で定義されているイベントを実装しています。

- {{WebExtAPIRef("storage.StorageArea.onChanged", "storage.managed.onChanged")}}
  - : ストレージ領域内の 1 つ以上のアイテムが変更されたときに発生します。

{{WebExtExamples}}

## ブラウザーの互換性

{{Compat}}

> [!NOTE]
> この API は Chromium の [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage#property-managed) API に基づいています。このドキュメントは、Chromium のコードにある [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) から派生したものです。

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
