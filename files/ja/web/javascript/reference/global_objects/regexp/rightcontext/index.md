---
title: RegExp.rightContext ($')
slug: Web/JavaScript/Reference/Global_Objects/RegExp/rightContext
tags:
  - JavaScript
  - Non-standard
  - Property
  - Read-only
  - Reference
  - RegExp
  - Regular Expressions
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/rightContext
---
<div>{{JSRef}} {{non-standard_header}}</div>

<p>標準外の <strong>rightContext</strong> プロパティは静的かつ読み取り専用の正規表現のプロパティで、最新の一致に続く部分文字列が入ります。 <code>RegExp.$`</code> はこのプロパティのエイリアスです。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code>rightContext</code> プロパティは静的プロパティです。個々の正規表現オブジェクトのプロパティではありません。常に、 <code>RegExp.rightContext</code> または <code>RegExp["$'"]</code> として使用してください。</p>

<p><code>rightContext</code> プロパティの値は読み取り専用で、一致に成功するたびに変更されます。</p>

<p>ドットプロパティアクセサー (<code>RegExp.$'</code>) で短縮エイリアスを使用することはできません。その場合、パーサーは文字列の開始をを期待して {{jsxref("SyntaxError")}} が発生します。<a href="/ja/docs/Web/JavaScript/Reference/Operators/Property_Accessors">プロパティへのアクセスにはブラケット表記法</a>を使用してください。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_rightContext_and" name="Using_rightContext_and">rightContext と $' の使用</h3>

<pre class="brush: js notranslate">var re = /hello/g;
re.test('hello world!');
RegExp.rightContext; // " world!"
RegExp["$'"];       // " world!"
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
   <td>{{SpecName('Legacy RegExp features')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.RegExp.rightContext")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("RegExp.input", "RegExp.input ($_)")}}</li>
 <li>{{jsxref("RegExp.lastMatch", "RegExp.lastMatch ($&amp;)")}}</li>
 <li>{{jsxref("RegExp.lastParen", "RegExp.lastParen ($+)")}}</li>
 <li>{{jsxref("RegExp.leftContext", "RegExp.leftContext ($`)")}}</li>
 <li>{{jsxref("RegExp.n", "RegExp.$1-$9")}}</li>
</ul>
