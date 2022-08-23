---
title: devtools.inspectedWindow.eval()
slug: Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/eval
translation_of: Mozilla/Add-ons/WebExtensions/API/devtools.inspectedWindow/eval
original_slug: Mozilla/Add-ons/WebExtensions/API/devtools.inspectedWindow/eval
---
<div>{{AddonSidebar()}}</div>

<p>devtools が接続されているウィンドウで JavaScript を実行します。</p>

<p>これは {{WebExtAPIRef("tabs.executeScript()")}} を使用してコンテンツスクリプトを添付することに似ていますが、主に2つの違いがあります。</p>

<p>第1に、JavaScript は<a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/devtools.inspectedWindow/eval#ヘルパー" id="Helper">ブラウザが通常 devtools コンソール実装で提供する特別なコマンド</a>のセットを使用できます。たとえば、"$0" を使用してインスペクタで現在選択されている要素を参照します。</p>

<p>次に、実行する JavaScript はページが読み込んだスクリプトによってページに加えられた変更を確認できます。これは、<a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#DOM_access">ページスクリプトが読み込まれなかった場合に存在するページを表示する</a>コンテンツスクリプトとは対照的です。ただし、コンテンツスクリプトによって提供される分離は意図的なセキュリティ機能であり、DOM 関数とプロパティを再定義することにより、悪意のあるまたは単に非協力的な Web ページがWebExtensions API を混乱または破壊することを困難にすることを目的としています。つまり <code>eval()</code> を使用してこの保護を放棄する場合は非常に注意する必要があり、<code>eval()</code> を使用する必要がない限りコンテンツスクリプトを使用する必要があります。</p>

<p>スクリプトは、ページのメインフレームでデフォルトで評価されます。スクリプトは、JSON として表現できる値に評価する必要があります (たとえば、関数または関数を含むオブジェクトには評価されない可能性があることを意味します)。デフォルトでは、スクリプトはページに添付されたコンテンツスクリプトを表示しません。</p>

<p>"about:addons" などの特権ブラウザウィンドウで <code>eval()</code> を呼び出すことはできません。</p>

<p>オプションで <code>options</code> パラメータを指定できます。<code>options</code> パラメータには、異なるフレームまたは添付コンテンツスクリプトのコンテキストでスクリプトを評価するオプションが含まれます。Firefox はまだ <code>options</code> パラメータをサポートしていないことに注意してください。</p>

<p><code>eval()</code> 関数は、スクリプトの評価結果またはエラーを解決する <code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a></code> を返します。</p>

<h2 id="ヘルパー">ヘルパー</h2>

<p>The script gets access to a number of objects that help the injected script interact with the developer tools. The following helpers are currently supported:</p>

<dl>
 <dt><code>$0</code></dt>
 <dd>Contains a reference to the element that's currently selected in the devtools Inspector.</dd>
 <dt><code>inspect()</code></dt>
 <dd>Given an object, if it is an DOM element in the page, selects it in the devtools Inspector, otherwise it creates an object preview in the webconsole.</dd>
</dl>

<p><a href="#Examples">See some examples.</a></p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox brush:js">var evaluating = browser.devtools.inspectedWindow.eval(
  expression,       // string
  options           // object
)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code>expression</code></dt>
 <dd><code>string</code>. The JavaScript expression to evaluate. The string must evaluate to a object that can be represented as JSON, or an exception will be thrown. For example, <code>expression</code> must not evaluate to a function.</dd>
 <dt><code>options</code>{{optional_inline}}</dt>
 <dd><code>object</code>. Options for the function (Note that Firefox does not yet support this options), as follows:</dd>
 <dd>
 <dl class="reference-values">
  <dt><code>frameURL</code>{{optional_inline}}</dt>
  <dd><code>string</code>. The URL of the frame in which to evaluate the expression. If this is omitted, the expression is evaluated in the main frame of the window.</dd>
  <dt><code>useContentScriptContext</code>{{optional_inline}}</dt>
  <dd><code>boolean</code>. If <code>true</code>, evaluate the expression in the context of any content scripts that this extension has attached to the page. If you set this option, then you must have actually attached some content scripts to the page, or a Devtools error will be thrown.</dd>
  <dt><code>contextSecurityOrigin</code> {{optional_inline}}</dt>
  <dd><code>string</code>. Evaluate the expression in the context of a content script attached by a different extension, whose origin matches the value given here. This overrides <code>useContentScriptContext</code>.</dd>
 </dl>
 </dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A <code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a></code> that will be fulfilled with an <code>array</code> containing two elements.</p>

<p>If no error occurred, element 0 will contain the result of evaluating the expression, and element 1 will be <code>undefined</code>.</p>

<p>If an error occurred, element 0 will be <code>undefined</code>, and element 1 will contain an object giving details about the error. Two different sorts of errors are distinguished:</p>

<ul>
 <li>errors encountered evaluating the JavaScript (for example, syntax errors in the expression). In this case, element 1 will contain:
  <ul>
   <li>a boolean property <code>isException</code>, set to <code>true</code></li>
   <li>a string property <code>value</code>, giving more details.</li>
  </ul>
 </li>
 <li>other errors (for example, an expression that evaluates to an object that can't be represented as JSON). In this case, element 1 will contain:
  <ul>
   <li>a boolean property <code>isError</code>, set to <code>true</code></li>
   <li>a string property <code>code</code> containing an error code.</li>
  </ul>
 </li>
</ul>

<h2 id="ブラウザの対応状況">ブラウザの対応状況</h2>

<p>{{Compat("webextensions.api.devtools.inspectedWindow.eval")}}</p>

<h2 id="例">例</h2>

<p>This tests whether jQuery is defined in the inspected window, and logs the result. Note that this wouldn't work in a content script, because even if jQuery were defined, the content script would not see it.</p>

<pre class="brush: js">function handleError(error) {
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

evalButton.addEventListener("click", () =&gt; {
  browser.devtools.inspectedWindow.eval(checkjQuery)
    .then(handleResult);
});</pre>

<h3 id="Helper_examples">Helper examples</h3>

<p>This uses the <code>$0</code> helper to set the background color of the element that's currently selected in the Inspector:</p>

<pre class="brush: js">const evalButton = document.querySelector("#reddinate");
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

evalButton.addEventListener("click", () =&gt; {
  browser.devtools.inspectedWindow.eval(evalString)
    .then(handleResult);
});
</pre>

<p>This uses the <code>inspect()</code> helper to select the first &lt;h1&gt; element in the page:</p>

<pre class="brush: js">const inspectButton = document.querySelector("#inspect");
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

inspectButton.addEventListener("click", () =&gt; {
  browser.devtools.inspectedWindow.eval(inspectString)
    .then(handleResult);
});
</pre>

<p>{{WebExtExamples}}</p>

<div class="note"><strong>Acknowledgements</strong>

<p>This API is based on Chromium's <a href="https://developer.chrome.com/extensions/devtools"><code>chrome.devtools</code></a> API.</p>

<p>Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.</p>
</div>

<div class="hidden">
<pre>// Copyright 2015 The Chromium Authors. All rights reserved.
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
</div>
