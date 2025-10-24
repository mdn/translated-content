---
title: devtools
slug: Mozilla/Add-ons/WebExtensions/API/devtools
l10n:
  sourceCommit: 58c6fc54557942c16dc02c3aa3688bd246346969
---

{{AddonSidebar}}

拡張機能がブラウザーの{{Glossary("Developer Tools", "開発者ツール")}}と対話することを可能にします。この API を使用して、開発者ツールのページを作成したり、検査対象のウィンドウと対話したり、ページのネットワーク使用状況を検査したりすることができます。

この API を使用するには、 `"devtools"` [API 権限](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions)が [manifest.json](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json) ファイルで指定されている必要があります。この権限はオプションの権限ではありません。

## プロパティ

- {{WebExtAPIRef("devtools.inspectedWindow")}}
  - : 開発者ツールが接続されているウィンドウ（検査されるウィンドウ）と対話します。これには、検査されたページのタブ ID の取得、検査されたウィンドウのコンテキストでのコードの評価、ページの再読み込み、ページ内のリソース一覧の取得などが記載されています。
- {{WebExtAPIRef("devtools.network")}}
  - : 開発者ツールが接続されているウィンドウ（インスペクトウィンドウ）に関連するネットワークリクエストの情報を取得します。
- {{WebExtAPIRef("devtools.panels")}}
  - : ユーザーエージェント開発者ツール内に表示されるユーザーインターフェイスパネルを作成します。

## ブラウザーの互換性

{{Compat}}

> [!NOTE]
> この API は Chromium の [`chrome.devtools`](https://developer.chrome.com/docs/extensions/mv2/devtools/) API に基づいています。

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
