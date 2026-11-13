---
title: storage
slug: Mozilla/Add-ons/WebExtensions/API/storage
---

{{AddonSidebar}}

拡張機能にデータの保存、取得と、保存項目の変更をリッスンできるようにします。

ストレージのシステムは [Web Storage API](/ja/docs/Web/API/Web_Storage_API) に基づいていますが、いくつか相違点があります。とりわけ、以下の違いがあります。

- 非同期です。
- 値は拡張機能のスコープで、特定ドメインのスコープではありません (つまりキー/値ペアーの同じ組み合わせが、すべてのバックグラウンドコンテキストとコンテンツスクリプトから利用できます)。
- 保存された値は JSON-ifiable な (JSON 化できる) 値で、単なる [`String`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String) ではありません。とりわけ、[`Array`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array) と [`Object`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object) も、コンテンツが JSON で表現できる時 (DOM ノードは入りません) を除いて不可です。値を保存する前に JSON `Strings` に変換する必要はなく、内部で JSON として表現されます、つまり JSON-ifiable である必要があります。
- 複数のキー/値ペアーが同じ API 呼び出しで設定、取得できます。

この API を利用するためには"storage" [permission](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) を [manifest.json](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json) に含める必要があります。

各々の拡張機能は独自のストレージ領域を持っています。またそれらは異なる型のストレージに分割することができます。

{{domxref("Window.localStorage")}}とこの API は似ていますが、拡張機能関連のデータを格納する際に拡張コード内で `Window.localStorage` を使わないことを推奨します。Firefox はプライバシー上の理由で、ブラウザー履歴やデータを消去などをする場合、localStorage API を利用して保存されたデータも消去します。しかし [`storage.local`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/storage/local) API を利用して保存されたデータはこれらの場合でも保持されます。

> [!NOTE]
> ストレージ領域内は暗号化されていないため、ユーザーの機密情報を保存すべきではありません。

## 型

- {{WebExtAPIRef("storage.StorageArea")}}
  - : ストレージ領域を表すオブジェクト
- {{WebExtAPIRef("storage.StorageChange")}}
  - : ストレージ領域の変更を表すオブジェクト

## プロパティ

`storage` は 3 つのプロパティを持ち、異なる型の利用可能なストレージ領域を表しています。

- {{WebExtAPIRef("storage.sync")}}
  - : `sync` ストレージ領域を表します。`sync` ストレージ内のアイテムはブラウザーによって同期され、異なるデバイス間でも、ログインしているユーザーのブラウザーのすべてのインスタンスを跨いで利用できるようになります。
- {{WebExtAPIRef("storage.local")}}
  - : `local` ストレージ領域を表します。`local` ストレージ内のアイテムは拡張機能がインストールされているマシン内のみで扱えます。
- {{WebExtAPIRef("storage.managed")}}
  - : `managed` ストレージ領域を表します。`managed` ストレージ内のアイテムはドメイン管理者によってセットされ、拡張機能は読取権限のみを持ちます。そのため、この名前空間を変更しようとするとエラーになります。

## イベント

- {{WebExtAPIRef("storage.onChanged")}}
  - : ストレージ領域内のアイテムを 1 つ以上変更した場合に発火します。

## ブラウザーの互換性

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> この API は Chromium の [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage) API に基づいています。また、このドキュメントは [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) における Chromium のコードに基づいています。

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
