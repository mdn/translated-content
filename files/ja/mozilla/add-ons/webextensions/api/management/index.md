---
title: management
slug: Mozilla/Add-ons/WebExtensions/API/management
---

{{AddonSidebar}}

インストール済みのアドオンの管理情報を取得します。

`management` API で次のことができます

- インストール済みのアドオンの管理情報の取得
- アドオンの有効化・無効化
- アドオンのアンインストール
- 特定のアドオンやマニフェストのパーミッション警告を調べる
- アドオンのインストール・有効・無効の状態に関する通知の取得

操作のほとんどは "management" [API パーミッション](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)を要求します。他のアドオンへのアクセスを提供しない操作はこのパーミッションを要求しません。

## 型

- {{WebExtAPIRef("management.ExtensionInfo")}}
  - : インストール済みアドオンの管理情報を持つオブジェクト

## 関数

- {{WebExtAPIRef("management.getAll()")}}
  - : すべてのインストール済みアドオンの管理情報を返します。
- {{WebExtAPIRef("management.get()")}}
  - : 指定した ID のアドオンの管理情報を返します。
- {{WebExtAPIRef("management.getSelf()")}}
  - : この関数を呼び出したアドオン自身の管理情報を返します。
- {{WebExtAPIRef("management.install()")}}
  - : [addons.mozilla.org](https://addons.mozilla.org) で与えられた URL にある、特定のテーマをインストールします。
- {{WebExtAPIRef("management.uninstall()")}}
  - : 指定した ID のアドオンをアンインストールします。
- {{WebExtAPIRef("management.uninstallSelf()")}}
  - : この関数を呼び出したアドオン自身をアンインストールします。
- {{WebExtAPIRef("management.getPermissionWarningsById()")}}
  - : 指定した ID のアドオンのパーミッション警告一覧を取得します。
- {{WebExtAPIRef("management.getPermissionWarningsByManifest()")}}
  - : 指定したマニフェストストリングに対して表示されるパーミッション警告一覧を取得します。
- {{WebExtAPIRef("management.setEnabled()")}}
  - : 指定した ID のアドオンを有効化・無効化します。

## イベント

- {{WebExtAPIRef("management.onInstalled")}}
  - : アドオンがインストールされた時に発火します。
- {{WebExtAPIRef("management.onUninstalled")}}
  - : アドオンがアンインストールされた時に発火します。
- {{WebExtAPIRef("management.onEnabled")}}
  - : アドオンが有効化された時に発火します。
- {{WebExtAPIRef("management.onDisabled")}}
  - : アドオンが無効化された時に発火します。

## ブラウザーの互換性

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> この API は Chromium の [`chrome.management`](https://developer.chrome.com/docs/extensions/reference/api/management) API に基づいています。この文書は Chromium code の [`management.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/management.json) から派生しています。Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.

<pre class="hidden">// Copyright 2012 The Chromium Authors. All rights reserved.
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
</pre>
