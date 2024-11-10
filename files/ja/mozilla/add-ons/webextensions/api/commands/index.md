---
title: commands
slug: Mozilla/Add-ons/WebExtensions/API/commands
---

{{AddonSidebar}}

[`commands` manifest.json キー](/ja/Add-ons/WebExtensions/manifest.json/commands)を使って、登録したコマンドをユーザーが実行するのをリッスンします。

## 型

- {{WebExtAPIRef("commands.Command")}}
  - : コマンドを表す型。これは [manifest.json の `commands` キー](/ja/Add-ons/WebExtensions/manifest.json/commands)のコマンドで指定された情報が入っています。

## 関数

- {{WebExtAPIRef("commands.getAll")}}
  - : 拡張機能用のすべての登録済みコマンドを取得します。

## イベント

- {{WebExtAPIRef("commands.onCommand")}}
  - : 関連付けされたキーボードショートカットを使ってコマンドが実行された時に発火します。

## ブラウザーの互換性

{{Compat}} {{WebExtExamples("h2")}}

> [!NOTE]
> この API は Chromium の [`chrome.commands`](https://developer.chrome.com/docs/extensions/reference/api/commands) API に基づいています。Microsoft Edge での実装状況は Microsoft Corporation から提供されたものであり、ここでは Creative Commons Attribution 3.0 United States License に従っています。

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
