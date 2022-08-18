---
title: decodeURI()
slug: Web/JavaScript/Reference/Global_Objects/decodeURI
tags:
  - Decode
  - JavaScript
  - Method
  - String
  - Text
  - URI
  - URL
  - decodeURI
  - decoding
translation_of: Web/JavaScript/Reference/Global_Objects/decodeURI
---
<div>{{jsSidebar("Objects")}}</div>

<p><span class="seoSummary"><code><strong>decodeURI()</strong></code> 関数は、{{jsxref("encodeURI", "encodeURI()")}} 関数あるいは同様のルーチンによって事前に作成された URI (Uniform Resource Identifier; 統一資源識別子) をデコードします。</span></p>

<div>{{EmbedInteractiveExample("pages/js/globalprops-decodeuri.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力していただける場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><code>decodeURI(<var>encodedURI</var>)</code></pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>encodedURI</var></code></dt>
 <dd>完全にエンコードされた URI。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>与えられたエンコードされた統一資源識別子 (URI) のエンコードされていないバージョンを表す新しい文字列。</p>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<p><code><var>encodedURI</var></code> が無効な文字の並びを含む場合、{{jsxref("URIError")}} ("malformed URI sequence") 例外が発生します。</p>

<h2 id="Description" name="Description">解説</h2>

<p>エンコードされた URI のエスケープシーケンスを、それぞれが表す文字に置き換えます。ただし、{{jsxref("encodeURI")}} によって生成されないエスケープシーケンスはデコードしません。また、"<code>#</code>" の文字はエスケープシーケンスからデコードされません。</p>

<h2 id="Examples" name="Examples">使用例</h2>

<h3 id="Decoding_a_Cyrillic_URL" name="Decoding_a_Cyrillic_URL">キリル文字の URL をデコード</h3>

<pre class="brush: js notranslate">decodeURI('https://developer.mozilla.org/ru/docs/JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B');
// "https://developer.mozilla.org/ru/docs/JavaScript_шеллы"
</pre>

<h3 id="Catching_errors" name="Catching_errors">エラーの捕捉</h3>

<pre class="notranslate">try {
  var a = decodeURI('%E0%A4%A');
} catch(e) {
  console.error(e);
}

// URIError: malformed URI sequence</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-decodeuri-encodeduri', 'decodeURI')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.decodeURI")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("decodeURIComponent", "decodeURIComponent()")}}</li>
 <li>{{jsxref("encodeURI", "encodeURI()")}}</li>
 <li>{{jsxref("encodeURIComponent", "encodeURIComponent()")}}</li>
</ul>
