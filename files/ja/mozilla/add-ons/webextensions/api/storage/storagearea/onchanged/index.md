---
title: storage.StorageArea.onChanged
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/onChanged
l10n:
  sourceCommit: 2857820893ce291eb2cf5e370551136065bc080c
---

ストレージ領域内の 1 つ以上のアイテムが変更されたときに発生します。{{WebExtAPIRef("storage.onChanged")}} と比べて、このイベントでは `local`、`managed`、`session`、`sync` のいずれか 1 つのストレージ領域の変更を監視できます。

> [!NOTE]
> Firefox では、{{WebExtAPIRef('storage.StorageArea.set','storageArea.set')}} が実行されたストレージ領域のすべてのキーをリスナーが受け取ります。データが変更されていない場合にも、リスナーが呼び出されることがあります。変更されたアイテムの詳細を確認するには、それぞれのキーの {{WebExtAPIRef('storage.StorageChange')}} オブジェクトを調べてください。[Firefox バグ 1833153](https://bugzil.la/1833153)を参照してください。

> [!NOTE]
> Firefox では、`storage.managed` の変更に対してこのイベントは発生しません。managed ストレージはブラウザーの起動時にのみ読み込まれるためです（[JSON マニフェスト（ネイティブマニフェスト）ファイル](/ja/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#managed_storage_manifests)または [`3rdparty` エンタープライズポリシー](https://mozilla.github.io/policy-templates/#3rdparty)から読み込まれます）。

## 構文

```js-nolint
// local は sync、managed、session にもできます
browser.storage.local.onChanged.addListener(listener)
browser.storage.local.onChanged.removeListener(listener)
browser.storage.local.onChanged.hasListener(listener)
```

イベントには次の 3 つの関数があります。

- `addListener(listener)`
  - : このイベントにリスナーを追加します。
- `removeListener(listener)`
  - : このイベントの監視を停止します。`listener` 引数には、削除するリスナーを指定します。
- `hasListener(listener)`
  - : `listener` がこのイベントに登録されているかどうかを確認します。監視中の場合は `true` を返し、それ以外の場合は `false` を返します。

## addListener の構文

### 引数

- `listener`
  - : このイベントが発生したときに呼び出される関数です。この関数には次の引数が渡されます。
    - `changes`
      - : `object`。変更を説明するオブジェクトです。変更されたキーごとに 1 つのプロパティを含みます。プロパティ名は変更されたキーの名前で、値はそのアイテムへの変更を説明する {{WebExtAPIRef('storage.StorageChange')}} オブジェクトです。

## 例

```js
/*
ローカルストレージで変更されたアイテムの、
変更前と変更後の値をログに出力します。
*/
function logStorageChange(changes) {
  const changedItems = Object.keys(changes);

  for (const item of changedItems) {
    console.log(`${item} has changed:`);
    console.log("Old value: ", changes[item].oldValue);
    console.log("New value: ", changes[item].newValue);
  }
}

browser.storage.local.onChanged.addListener(logStorageChange);
```

{{WebExtExamples}}

## ブラウザーの互換性

{{Compat}}

> [!NOTE]
> この API は Chromium の [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage#event-StorageArea-onChanged)<sup>(英語)</sup> API に基づいています。このドキュメントは、Chromium のコードにある [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) から派生したものです。

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
