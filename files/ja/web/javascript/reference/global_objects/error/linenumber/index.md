---
title: Error.prototype.lineNumber
slug: Web/JavaScript/Reference/Global_Objects/Error/lineNumber
tags:
  - Error
  - JavaScript
  - Property
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Error/lineNumber
---
<div>{{JSRef}} {{non-standard_header}}</div>

<p><code><strong>lineNumber</strong></code> プロパティは、このエラーを起こしたファイル内の行番号が入ります。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_lineNumber" name="Using_lineNumber">lineNumber の使用</h3>

<pre class="brush: js notranslate">var e = new Error('Could not parse input');
throw e;
console.log(e.lineNumber) // 2
</pre>

<h3 id="Alternative_example_using_error_event" name="Alternative_example_using_error_event">error イベントを使用した他の例</h3>

<pre class="brush: js notranslate">window.addEventListener('error', function(e) {
  console.log(e.lineNumber); // 5
});
var e = new Error('入力を解釈できません');
throw e;
</pre>

<p>これは標準の機能ではなく、幅広く対応されていません。下記のブラウザーの互換性の表をご覧ください。</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<p>仕様の一部ではありません。</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.Error.lineNumber")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Error.prototype.stack")}}</li>
 <li>{{jsxref("Error.prototype.columnNumber")}}</li>
 <li>{{jsxref("Error.prototype.fileName")}}</li>
</ul>
