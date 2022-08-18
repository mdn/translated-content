---
title: Symbol.split
slug: Web/JavaScript/Reference/Global_Objects/Symbol/split
tags:
  - ECMAScript 2015
  - JavaScript
  - Property
  - Symbol
translation_of: Web/JavaScript/Reference/Global_Objects/Symbol/split
---
<div>{{JSRef}}</div>

<p><strong><code>Symbol.split</code></strong> ウェルノウンシンボルは、正規表現に一致する位置で文字列を分割するメソッドを指定します。この関数は {{jsxref("String.prototype.split()")}} メソッドによって呼び出されます。</p>

<p>詳しくは、 {{jsxref("RegExp.@@split", "RegExp.prototype[@@split]()")}} と {{jsxref("String.prototype.split()")}} を参照してください。</p>

<div>{{EmbedInteractiveExample("pages/js/symbol-split.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<div>{{js_property_attributes(0,0,0)}}</div>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Custom_reverse_split" name="Custom_reverse_split">独自の逆方向の分割</h3>

<pre class="brush: js notranslate">class ReverseSplit {
  [Symbol.split](string) {
    const array = string.split(' ');
    return array.reverse();
  }
}

console.log('Another one bites the dust'.split(new ReverseSplit()));
// expected output: [ "dust", "the", "bites", "one", "Another" ]</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-symbol.split', 'Symbol.split')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Symbol.split")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Symbol.match")}}</li>
 <li>{{jsxref("Symbol.replace")}}</li>
 <li>{{jsxref("Symbol.search")}}</li>
 <li>{{jsxref("RegExp.@@split", "RegExp.prototype[@@split]()")}}</li>
</ul>
