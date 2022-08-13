---
title: ReferenceError
slug: Web/JavaScript/Reference/Global_Objects/ReferenceError
tags:
  - Class
  - JavaScript
  - Object
  - Reference
  - ReferenceError
translation_of: Web/JavaScript/Reference/Global_Objects/ReferenceError
---
<div>{{JSRef}}</div>

<p><code><strong>ReferenceError</strong></code> オブジェクトは存在しない変数が参照された場合のエラーを表します。</p>

<h2 id="Constructor" name="Constructor">コンストラクター</h2>

<dl>
 <dt>{{jsxref("Global_Objects/ReferenceError/ReferenceError", "ReferenceError()")}}</dt>
 <dd>新しい <code>ReferenceError</code> オブジェクトを生成します。</dd>
</dl>

<h2 id="Instance_properties" name="Instance_properties">インスタンスプロパティ</h2>

<dl>
 <dt>{{jsxref("Error.prototype.message", "ReferenceError.prototype.message")}}</dt>
 <dd>エラーメッセージです。 ECMA-262 において {{jsxref("ReferenceError")}} は自身の <code>message</code> プロパティを提供するべきとされていますが、 <a href="/ja/docs/Mozilla/Projects/SpiderMonkey">SpiderMonkey</a> では {{jsxref("Error.prototype.message")}} を継承しています。</dd>
 <dt>{{jsxref("Error.prototype.name", "ReferenceError.prototype.name")}}</dt>
 <dd>エラー名です。 {{jsxref("Error")}} から継承しています。</dd>
 <dt>{{jsxref("Error.prototype.fileName", "ReferenceError.prototype.fileName")}}</dt>
 <dd>このエラーが発生したファイルのパスです。 {{jsxref("Error")}} から継承しています。</dd>
 <dt>{{jsxref("Error.prototype.lineNumber", "ReferenceError.prototype.lineNumber")}}</dt>
 <dd>このエラーが発生したファイル内の行番号です。 {{jsxref("Error")}} から継承しています。</dd>
 <dt>{{jsxref("Error.prototype.columnNumber", "ReferenceError.prototype.columnNumber")}}</dt>
 <dd>このエラーが発生した行内の桁番号です。 {{jsxref("Error")}} から継承しています。</dd>
 <dt>{{jsxref("Error.prototype.stack", "ReferenceError.prototype.stack")}}</dt>
 <dd>スタックトレースです。 {{jsxref("Error")}} から継承しています。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Catching_a_ReferenceError" name="Catching_a_ReferenceError">ReferenceError のキャッチ</h3>

<pre class="brush: js notranslate">try {
  let a = undefinedVariable
} catch (e) {
  console.log(e instanceof ReferenceError)  // true
  console.log(e.message)                    // "undefinedVariable is not defined"
  console.log(e.name)                       // "ReferenceError"
  console.log(e.fileName)                   // "Scratchpad/1"
  console.log(e.lineNumber)                 // 2
  console.log(e.columnNumber)               // 6
  console.log(e.stack)                      // "@Scratchpad/2:2:7\n"
}
</pre>

<h3 id="Creating_a_ReferenceError" name="Creating_a_ReferenceError">ReferenceError の生成</h3>

<pre class="brush: js notranslate">try {
  throw new ReferenceError('Hello', 'someFile.js', 10)
} catch (e) {
  console.log(e instanceof ReferenceError)  // true
  console.log(e.message)                    // "Hello"
  console.log(e.name)                       // "ReferenceError"
  console.log(e.fileName)                   // "someFile.js"
  console.log(e.lineNumber)                 // 10
  console.log(e.columnNumber)               // 0
  console.log(e.stack)                      // "@Scratchpad/2:2:9\n"
}
</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-native-error-types-used-in-this-standard-referenceerror', 'ReferenceError')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.ReferenceError")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Error")}}</li>
</ul>
