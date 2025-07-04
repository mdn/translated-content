---
title: cookies
slug: Mozilla/Add-ons/WebExtensions/API/cookies
---

{{AddonSidebar}}

拡張機能に cookie の取得と設定と、変更された時の通知を可能にします。

この API を使用するには、[manifest.json](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json) ファイルで "cookies" の [API パーミッション](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) があることと、同様にアクセスする cookie を持つ [host パーミッション](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) も必要になります。[cookie パーミッション](/ja/docs/Mozilla/Add-ons/WebExtensions/API/cookies#permissions)を見てください。

## 型

- {{WebExtAPIRef("cookies.Cookie")}}
  - : HTTP cookie の情報を表す。
- {{WebExtAPIRef("cookies.CookieStore")}}
  - : ブラウザーの cookie store を表す。
- {{WebExtAPIRef("cookies.OnChangedCause")}}
  - : cookie の変更理由を表す。

## メソッド

- {{WebExtAPIRef("cookies.get()")}}
  - : 1 つの cookie の情報を取得する。
- {{WebExtAPIRef("cookies.getAll()")}}
  - : 与えられたフィルターにマッチするすべての cookies を取得する。
- {{WebExtAPIRef("cookies.set()")}}
  - : 与えられた cookie データ を cookie に設定する; おなじ cookies が存在すれば上書きする。
- {{WebExtAPIRef("cookies.remove()")}}
  - : 指定した名前の cookie を削除する。
- {{WebExtAPIRef("cookies.getAllCookieStores()")}}
  - : すべての cookie stores を一覧する。

## イベントハンドラー

- {{WebExtAPIRef("cookies.onChanged")}}
  - : cookie が設定、削除された時に発火する。

## パーミッション

この API を使うには、アドオンは manifest で "cookies" の [API パーミッション](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) を指定せねばならず、同様に cookie がアクセスするあらゆるサイトの [host パーミッション](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions)も要ります。アドオンは host パーミッションにマッチする URL から読み書きされる cookie を読み書きできます。例えば:

- `http://*.example.com/`
  - : この host パーミッションを持つアドオンは下記ができます:
    - `www.example.com` のあらゆるパスの、非セキュア型 cookie を読む
    - セキュア/非セキュア問わず、`www.example.com` のあらゆるパスの cookie に書き込む

    _下記はできません_:
    - `www.example.com` のセキュア型 cookie を読む

- `http://www.example.com/`
  - : この host パーミッションを持つアドオンは下記ができます:
    - `www.example.com` のあらゆるパスの、非セキュア型 cookie を読む
    - `.example.com`のあらゆるパスの、非セキュア型 cookie を読む
    - セキュア/非セキュア問わず、`www.example.com`のあらゆるパスの cookie に書き込む
    - セキュア/非セキュア問わず、`.example.com`のあらゆるパスの cookie に書き込む

    _下記はできません_:
    - `foo.example.com` の cookie の読み書き
    - `foo.www.example.com` の cookie の読み書き

- `*://*.example.com/`
  - : この host パーミッションを持つアドオンは下記ができます:
    - セキュア/非セキュア問わず、`www.example.com` のあらゆるパスの cookie の読み書き

## ブラウザーの互換性

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> この API は Chromium の [`chrome.cookies`](https://developer.chrome.com/docs/extensions/reference/api/cookies) API に基づいています。また、このドキュメントは [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) における Chromium のコードに基づいています。

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
