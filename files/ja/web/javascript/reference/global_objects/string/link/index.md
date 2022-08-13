---
title: String.prototype.link()
slug: Web/JavaScript/Reference/Global_Objects/String/link
tags:
  - Deprecated
  - HTML wrapper methods
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/link
---
<div>{{JSRef}} {{deprecated_header}}</div>

<p><strong><code>link()</code></strong> メソッドは、他の URL へのハイパーテキストリンクとして使用される HTML の {{HTMLElement("a")}} 要素を生成します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>str</var>.link(<var>url</var>)</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>url</var></code></dt>
 <dd><code>&lt;a&gt;</code> 要素の <code>href</code> 属性を指定する任意の文字列です。これは妥当な (相対または絶対) URL を、すべての <code>&amp;</code> の文字を <code>&amp;amp;</code> でエスケープし、すべての <code>"</code> の文字を <code>&amp;quot;</code> でエスケープしたものにしてください。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>HTML の {{HTMLElement("a")}} 要素を含む文字列です。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code>link()</code> メソッドを使用すると、ハイパーリンクを表す HTML スニペットを生成することができます。返値の文字列はその後、 {{domxref("document.write()")}} または {{domxref("element.innerHTML")}} を通して文書に追加することができます。</p>

<p><code>link()</code> メソッドで生成したリンクは、 <code>document</code> オブジェクトの <code>links</code> 配列の要素になります。 {{domxref("document.links")}} を参照してください。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="small_の使用">small() の使用</h3>

<p>以下の例では文字列のメソッドを使用して、文字列の大きさを変更しています。</p>

<pre class="brush: js notranslate">var hotText = 'MDN';
var URL = 'https://developer.mozilla.org/';

console.log('Click to return to ' + hotText.link(URL));
// Click to return to &lt;a href="https://developer.mozilla.org/"&gt;MDN&lt;/a&gt;
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
   <td>{{SpecName('ESDraft', '#sec-string.prototype.link', 'String.prototype.link')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.String.link")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("String.prototype.anchor()")}}</li>
</ul>
