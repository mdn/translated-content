---
title: runtime.onInstalled
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onInstalled
---

{{AddonSidebar()}}

拡張機能が最初にインストールされた時や、新しいバージョンへ更新された時、ブラウザーが新しいバージョンへ更新された時に発火します。

`runtime.onInstalled` は {{WebExtAPIRef("management.onInstalled")}} と同じではありません。`runtime.onInstalled` イベントはあなたの拡張機能でのみ発火されます。`browser.management.onInstalled` イベントは、どの拡張機能でも発火されます。

## 構文

```js-nolint
browser.runtime.onInstalled.addListener(listener)
browser.runtime.onInstalled.removeListener(listener)
browser.runtime.onInstalled.hasListener(listener)
```

イベントには 3 つの関数があります:

- `addListener(callback)`
  - : このイベントにリスナーを追加します。
- `removeListener(listener)`
  - : イベントリスナーを停止します。`listener` 引数は削除するリスナーです。
- `hasListener(listener)`
  - : `listener` がこのイベントに登録されているか確認します。登録されていば `true`、そうでない場合は `false` を返します。

## addListener の構文

### 引数

- `function`

  - : イベントが起こったときに呼び出されるコールバック関数です。この関数には以下の引数が渡されます:

    - `details`

      - : 以下のプロパティを持つオブジェクトです:

        - `id` {{optional_inline}}
          - : `string` 型。更新されたモジュール共有中の拡張機能の ID です。`reason` の値が `shared_module_update` の時のみ設定されます。
        - `previousVersion` {{optional_inline}}
          - : `string` 型。更新前の拡張機能のバージョンです。`reason` の値が `update` の時のみ設定されます。
        - `reason`
          - : {{WebExtAPIRef('runtime.OnInstalledReason')}} の値で、このイベントが発火した理由を表します。
        - `temporary`
          - : `boolean` 型。拡張機能が一時的にインストールされた場合は True です。例えば、 Firefox で "about:debugging" ページ を使ったり、 [web-ext run](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) を使った場合です。それ以外の場合は False です。

## ブラウザーの互換性

{{Compat}}

## 例

拡張機能がインストールされた時に、理由をログ出力し、 <https://example.com> を開きます:

```js
function handleInstalled(details) {
  console.log(details.reason);
  browser.tabs.create({
    url: "https://example.com",
  });
}

browser.runtime.onInstalled.addListener(handleInstalled);
```

{{WebExtExamples}}

> **メモ:** この API は Chromium の [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/runtime/#event-onInstalled) API に基づいています。また、このドキュメントは [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) における Chromium のコードに基づいています。

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
