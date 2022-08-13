---
title: Error.prototype.columnNumber
slug: Web/JavaScript/Reference/Global_Objects/Error/columnNumber
tags:
  - Error
  - JavaScript
  - Property
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Error/columnNumber
---
<div>{{JSRef}} {{non-standard_header}}</div>

<p><code><strong>columnNumber</strong></code> プロパティは、このエラーを起こしたファイルの行内の列番号が入ります。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_columnNumber" name="Using_columnNumber">columnNumber の使用</h3>

<pre class="brush: js notranslate">var e = new Error('Could not parse input');
throw e;
console.log(e.columnNumber) // 0
</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<p>仕様の一部ではありません。</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.Error.columnNumber")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Error.prototype.stack")}}</li>
 <li>{{jsxref("Error.prototype.lineNumber")}}</li>
 <li>{{jsxref("Error.prototype.fileName")}}</li>
</ul>
