---
title: tabs.executeScript()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/executeScript
---

{{AddonSidebar()}}

JavaScript のコードをページに挿入します。

コードを挿入できるページの URL は、[マッチパターン](/ja/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) により指定できます。 つまり、URL の scheme 部は、"http", "https", "file", "ftp" のいずれかでなければなりません。そして、その URL に対する明示的な [host パーミッション](/ja/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions)、または [activeTab パーミッション](/ja/Add-ons/WebExtensions/manifest.json/permissions#activeTab_permission)が必要です。

また、自らの拡張機能パッケージに含まれるページに対してであれば、次の方法でコードを挿入することも可能です。

```js
browser.tabs.create({ url: "/my-page.html" }).then(() => {
  browser.tabs.executeScript({
    code: `console.log('location:', window.location.href);`,
  });
});
```

この場合、特別なパーミッションは必要ありません。

ブラウザーの組込ページ、例えば about:debugging、about:addons、新規タブを開いた時のページなどには、コードを挿入することは*できません*。

挿入するスクリプトのことを、コンテンツスクリプトと呼びます。詳細は [コンテンツスクリプト](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) で学んでください。

これは、[`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) を返す非同期関数です。

## 構文

```js
var executing = browser.tabs.executeScript(
  tabId, // optional integer
  details, // object
);
```

### 引数

- `tabId` {{optional_inline}}
  - : `integer` 型。 スクリプトを実行するタブの ID。省略時のデフォルトは、現在のウィンドウでアクティブなタブ。
- `details`

  - : 実行するスクリプトに関するオブジェクト。次のプロパティを持ちます。

    - `allFrames` {{optional_inline}}
      - : `boolean` 型。`true` である場合は、現在のページが持つ全てのフレームにコードが挿入されます。`true` であり、かつ `frameId` が設定されている場合はエラーが発生するため、frameId と allFrames は互いに排他的です。`false` である場合は、最上位のフレームにのみコードが挿入されます。デフォルトは `false` です。
    - `code` {{optional_inline}}
      - : `string` 型。挿入されるコードを文字列として表現したもの。**注意:** このプロパティを使って信頼できないデータを JavaScript に挿入しないでください。セキュリティの問題につながります。
    - `file` {{optional_inline}}
      - : `string` 型。挿入されるコードを持つファイルへのパス。Firefox では、拡張機能のルートから始まらない相対 URL は、現在のページの URL からの相対位置として解決されます。Chrome では、そのような URL は拡張機能のベース URL からの相対位置として解決されます。複数のブラウザーで動作させるには、拡張機能のルートから始まる相対 URL として指定します。例えば、`"/path/to/script.js"` のようにします。
    - `frameId` {{optional_inline}}
      - : `integer` 型。コードが挿入されるフレーム。デフォルトは `0` (最上位のフレーム) です。
    - `matchAboutBlank` {{optional_inline}}
      - : `boolean` 型。`true` である場合、コードはその親ドキュメントへのアクセスをもつときに、組込の "about:blank" や "about:srcdoc" フレームにも挿入されます。コードをトップレベルの about: フレームに挿入することはできません。デフォルトは `false` です。
    - `runAt` {{optional_inline}}
      - : {{WebExtAPIRef('extensionTypes.RunAt')}} 型。コードがどの時点でタブに挿入されるかを指定します。デフォルトは "document_idle" です。

### 戻り値

オブジェクト配列を使って fulfilled 状態にされる [`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) です。それぞれのオブジェクトは、フレームに挿入されたスクリプトの結果を表します。

スクリプトの結果とは最後に評価された文のことです。これは、[Web コンソール](/ja/docs/Tools/Web_Console)で実行されたスクリプトの出力 (結果であって、`console.log()` の出力のことではありません) に似ています。例えば、次のようなスクリプトを挿入したとします。

```js
var foo = "my result";
foo;
```

この場合、結果配列には、文字列 "`my result`" が含まれます。結果は、[構造化複製](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)が可能でなければなりません。最後の文を [`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) にすることもできますが、[webextension-polyfill](https://github.com/mozilla/webextension-polyfill#tabsexecutescript) ライブラリではサポートされていません。

エラーが発生した場合、Promise はエラーメッセージを使って rejected 状態にされます。

## 使用例

次の例は、現在アクティブなタブで 1 行のコードスニペットを実行します。

```js
function onExecuted(result) {
  console.log(`グリーンにしました`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var makeItGreen = 'document.body.style.border = "5px solid green"';

var executing = browser.tabs.executeScript({
  code: makeItGreen,
});
executing.then(onExecuted, onError);
```

次の例は、ファイルからスクリプトを実行します。このファイルは拡張機能のパッケージに含まれており、"content-script.js" という名前です。そのスクリプトは、現在アクティブなタブで実行されますが、メインのドキュメントだけでなく、全てのサブフレームでも実行されます。

```js
function onExecuted(result) {
  console.log(`全てのサブフレームで実行しました`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var executing = browser.tabs.executeScript({
  file: "/content-script.js",
  allFrames: true,
});
executing.then(onExecuted, onError);
```

次の例は、ファイルからスクリプトを実行します。このファイルは拡張機能のパッケージに含まれており、"content-script.js" という名前です。そのスクリプトは、ID が 2 であるタブで実行されます。

```js
function onExecuted(result) {
  console.log(`タブ 2 で実行しました`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var executing = browser.tabs.executeScript(2, {
  file: "/content-script.js",
});
executing.then(onExecuted, onError);
```

{{WebExtExamples}}

## ブラウザーの互換性

{{Compat("webextensions.api.tabs.executeScript")}}

> **メモ:** この API は Chromium の [`chrome.tabs`](https://developer.chrome.com/extensions/tabs#method-executeScript) API に基づいています。このドキュメントは [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) における Chromium のコードに基づいています。

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
