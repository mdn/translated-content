---
title: runtime.MessageSender
slug: Mozilla/Add-ons/WebExtensions/API/runtime/MessageSender
---

{{AddonSidebar}}

メッセージや接続要求の送信元に関する情報を持つオブジェクトです。このオブジェクトは、{{WebExtAPIRef("runtime.onMessage()")}} リスナーに渡されます。

また、このオブジェクトは {{WebExtAPIRef("runtime.Port")}} のプロパティでもありますが、{{WebExtAPIRef("runtime.onConnect()")}} または {{WebExtAPIRef("runtime.onConnectExternal()")}} リスナーに渡された `Port` インスタンスにしか存在しません。

## 型

この型はオブジェクトです。以下のプロパティを持ちます。

- `tab`{{optional_inline}}
  - : {{WebExtAPIRef('tabs.Tab')}} 型。接続を開いた {{WebExtAPIRef('tabs.Tab')}} です。このプロパティが存在するのは、タブ (コンテンツスクリプトを含む) から接続が開かれたときだけです。
- `frameId`{{optional_inline}}
  - : `integer` 型。接続を開いたフレームです。0 は最上位のフレームを、正の数値は子フレームを表します。このプロパティが存在するのは、`tab` が設定されるときだけです。
- `id`{{optional_inline}}
  - : `string` 型。メッセージが拡張機能から送信された場合は、その拡張機能の ID が設定されます。送信側の manifest.json で [applications](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) キーを使って明示的に ID が設定されている場合は、`id` にはその値が使われます。そうでない場合は、送信側の自動生成された ID が使われます。
    バージョン 54 より前の Firefox では、この値には拡張機能の内部 ID が使われることに注意してください (つまり、拡張機能の URL に含まれる [UUID](https://ja.wikipedia.org/wiki/UUID) です)。
- `url`{{optional_inline}}
  - : `string` 型。メッセージを送信したスクリプトを持つページやフレームの URL です。
    送信側が拡張機能のページ (例えば、[バックグラウンド ページ](/ja/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts)、[オプションページ](/ja/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#sidebars_popups_options_pages)、 [ブラウザーアクション](/ja/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#browser_actions_2) や [ページアクション](/ja/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#page_actions) のポップアップ) に含まれるスクリプトである場合、URL は `"moz-extension://<拡張機能の内部 ID>/path/to/page.html"` という形式が使われます。送信側がバックグラウンドスクリプトであって、バックグラウンド ページを使っていない場合、URL は `"moz-extension://<拡張機能の内部 ID>/_generated_background_page.html"` という形式が使われます。
    送信側がウェブページ内のスクリプト (ページに含まれる通常のスクリプトだけでなく、コンテンツスクリプトも含みます) である場合、`url` はそのウェブページの URL が使われます。スクリプトがフレーム内で動作している場合、`url` はそのフレームの URL です。
- `tlsChannelId`{{optional_inline}}
  - : `string` 型。接続を開いたページまたはフレームの TLS チャンネルの ID です。拡張機能によって要求され、可能である場合にのみ設定されます。

## ブラウザーの互換性

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> この API は Chromium の [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#type-MessageSender) API に基づいています。このドキュメントは [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) における Chromium のコードに基づいています。Microsoft Edge での実装状況は Microsoft Corporation から提供されたものであり、ここでは Creative Commons Attribution 3.0 United States License に従っています。

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
