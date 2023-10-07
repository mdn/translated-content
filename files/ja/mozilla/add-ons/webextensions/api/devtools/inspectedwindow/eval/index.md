---
title: devtools.inspectedWindow.eval()
slug: Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/eval
---

{{AddonSidebar()}}

devtools が接続されているウィンドウで JavaScript を実行します。

これは {{WebExtAPIRef("tabs.executeScript()")}} を使用してコンテンツスクリプトを添付することに似ていますが、主に 2 つの違いがあります。

第 1 に、JavaScript は[ブラウザが通常 devtools コンソール実装で提供する特別なコマンド](/ja/docs/Mozilla/Add-ons/WebExtensions/API/devtools.inspectedWindow/eval#ヘルパー)のセットを使用できます。たとえば、"$0" を使用してインスペクタで現在選択されている要素を参照します。

次に、実行する JavaScript はページが読み込んだスクリプトによってページに加えられた変更を確認できます。これは、[ページスクリプトが読み込まれなかった場合に存在するページを表示する](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#DOM_access)コンテンツスクリプトとは対照的です。ただし、コンテンツスクリプトによって提供される分離は意図的なセキュリティ機能であり、DOM 関数とプロパティを再定義することにより、悪意のあるまたは単に非協力的な Web ページが WebExtensions API を混乱または破壊することを困難にすることを目的としています。つまり `eval()` を使用してこの保護を放棄する場合は非常に注意する必要があり、`eval()` を使用する必要がない限りコンテンツスクリプトを使用する必要があります。

スクリプトは、ページのメインフレームでデフォルトで評価されます。スクリプトは、JSON として表現できる値に評価する必要があります (たとえば、関数または関数を含むオブジェクトには評価されない可能性があることを意味します)。デフォルトでは、スクリプトはページに添付されたコンテンツスクリプトを表示しません。

"about:addons" などの特権ブラウザウィンドウで `eval()` を呼び出すことはできません。

オプションで `options` パラメータを指定できます。`options` パラメータには、異なるフレームまたは添付コンテンツスクリプトのコンテキストでスクリプトを評価するオプションが含まれます。Firefox はまだ `options` パラメータをサポートしていないことに注意してください。

`eval()` 関数は、スクリプトの評価結果またはエラーを解決する [`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) を返します。

## ヘルパー

The script gets access to a number of objects that help the injected script interact with the developer tools. The following helpers are currently supported:

- `$0`
  - : Contains a reference to the element that's currently selected in the devtools Inspector.
- `inspect()`
  - : Given an object, if it is an DOM element in the page, selects it in the devtools Inspector, otherwise it creates an object preview in the webconsole.

[See some examples.](#Examples)

## 構文

```js
var evaluating = browser.devtools.inspectedWindow.eval(
  expression, // string
  options, // object
);
```

### Parameters

- `expression`
  - : `string`. The JavaScript expression to evaluate. The string must evaluate to a object that can be represented as JSON, or an exception will be thrown. For example, `expression` must not evaluate to a function.
- `options`{{optional_inline}}

  - : `object`. Options for the function (Note that Firefox does not yet support this options), as follows:

    - `frameURL`{{optional_inline}}
      - : `string`. The URL of the frame in which to evaluate the expression. If this is omitted, the expression is evaluated in the main frame of the window.
    - `useContentScriptContext`{{optional_inline}}
      - : `boolean`. If `true`, evaluate the expression in the context of any content scripts that this extension has attached to the page. If you set this option, then you must have actually attached some content scripts to the page, or a Devtools error will be thrown.
    - `contextSecurityOrigin` {{optional_inline}}
      - : `string`. Evaluate the expression in the context of a content script attached by a different extension, whose origin matches the value given here. This overrides `useContentScriptContext`.

### Return value

A [`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with an `array` containing two elements.

If no error occurred, element 0 will contain the result of evaluating the expression, and element 1 will be `undefined`.

If an error occurred, element 0 will be `undefined`, and element 1 will contain an object giving details about the error. Two different sorts of errors are distinguished:

- errors encountered evaluating the JavaScript (for example, syntax errors in the expression). In this case, element 1 will contain:

  - a boolean property `isException`, set to `true`
  - a string property `value`, giving more details.

- other errors (for example, an expression that evaluates to an object that can't be represented as JSON). In this case, element 1 will contain:

  - a boolean property `isError`, set to `true`
  - a string property `code` containing an error code.

## ブラウザの対応状況

{{Compat("webextensions.api.devtools.inspectedWindow.eval")}}

## 例

This tests whether jQuery is defined in the inspected window, and logs the result. Note that this wouldn't work in a content script, because even if jQuery were defined, the content script would not see it.

```js
function handleError(error) {
  if (error.isError) {
    console.log(`Devtools error: ${error.code}`);
  } else {
    console.log(`JavaScript error: ${error.value}`);
  }
}

function handleResult(result) {
  console.log(result);
  if (result[0] !== undefined) {
    console.log(`jQuery: ${result[0]}`);
  } else if (result[1]) {
    handleError(result[1]);
  }
}

const checkjQuery = "typeof jQuery != 'undefined'";

evalButton.addEventListener("click", () => {
  browser.devtools.inspectedWindow.eval(checkjQuery).then(handleResult);
});
```

### Helper examples

This uses the `$0` helper to set the background color of the element that's currently selected in the Inspector:

```js
const evalButton = document.querySelector("#reddinate");
const evalString = "$0.style.backgroundColor = 'red'";

function handleError(error) {
  if (error.isError) {
    console.log(`Devtools error: ${error.code}`);
  } else {
    console.log(`JavaScript error: ${error.value}`);
  }
}

function handleResult(result) {
  if (result[1]) {
    handleError(result[1]);
  }
}

evalButton.addEventListener("click", () => {
  browser.devtools.inspectedWindow.eval(evalString).then(handleResult);
});
```

This uses the `inspect()` helper to select the first \<h1> element in the page:

```js
const inspectButton = document.querySelector("#inspect");
const inspectString = "inspect(document.querySelector('h1'))";

function handleError(error) {
  if (error.isError) {
    console.log(`Devtools error: ${error.code}`);
  } else {
    console.log(`JavaScript error: ${error.value}`);
  }
}

function handleResult(result) {
  if (result[1]) {
    handleError(result[1]);
  }
}

inspectButton.addEventListener("click", () => {
  browser.devtools.inspectedWindow.eval(inspectString).then(handleResult);
});
```

{{WebExtExamples}}

> **メモ:** This API is based on Chromium's [`chrome.devtools`](https://developer.chrome.com/extensions/devtools) API.Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.

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
