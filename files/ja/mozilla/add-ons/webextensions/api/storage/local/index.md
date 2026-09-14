---
title: storage.local
slug: Mozilla/Add-ons/WebExtensions/API/storage/local
---

{{AddonSidebar}}

`local` ストレージ領域を指します。`local`ストレージ内のアイテムはその拡張機能がインストールされたマシン内で利用できます。

ブラウザーは拡張機能がローカルストレージエリアに保存できるデータ量を制限します。

- Chrome では、この API を使用して、["unlimitedStorage"](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#unlimited_storage)パーミッションを許可しない場合は 5MB まで保存できます。
- Firefox ではバージョン 56 以降で"unlimitedStorage"パーミッションを利用できます。保存できるデータ量は現在では制限していませんが、将来的には制限するため、もし大きなデータ量を保存するのであれば"unlimitedStorage"パーミッションを今から使用するとよいでしょう。

拡張機能をアンインストールすると、関連するローカルストレージは削除されます。

また Firefox では、"about:config"で"keepUuidOnUninstall"と"keepStorageOnUninstall"の設定を`true`にすることで、アンインストール時にデータが削除されることを防ぐことができます。 この機能は拡張機能開発のテストのために提供されています。拡張機能自身ではこれらの設定を変更できません。

この API は {{domxref("Window.localStorage")}}に似ていますが、拡張機能のコード内で`Window.localStorage`を使用することは推奨されません。これはユーザーがプライバシーのために履歴とデータを削除するなど、Firefox は localStorage API を用いて拡張機能が保存したデータを削除することがあるためです。

## 関数

`local`オブジェクトは{{WebExtAPIRef("storage.StorageArea")}} 型で定義された関数を実装しています。

- {{WebExtAPIRef("storage.StorageArea.get()")}}
  - : ストレージ領域から 1 つ以上のアイテムを取得します。
- {{WebExtAPIRef("storage.StorageArea.getBytesInUse()")}}
  - : 1 つ以上のストレージ領域内に格納されたアイテムが占めるストレージ空間をバイト単位で取得します。
- {{WebExtAPIRef("storage.StorageArea.set()")}}
  - : 1 つ以上のアイテムをストレージ領域に格納します。既にアイテムが存在していれば値は上書きされます。 値を格納したとき{{WebExtAPIRef("storage.onChanged")}}イベントが発火します。
- {{WebExtAPIRef("storage.StorageArea.remove()")}}
  - : ストレージ領域内の 1 つ以上のアイテムを削除します。
- {{WebExtAPIRef("storage.StorageArea.clear()")}}
  - : ストレージ領域内の全てのアイテムを削除します。

## ブラウザーの互換性

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> この API は Chromium の [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage#property-local) API に基づいています。また、このドキュメントは [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json)における Chromium のコードに基づいています。

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
