---
title: String.prototype.fontsize()
slug: Web/JavaScript/Reference/Global_Objects/String/fontsize
tags:
- Deprecated
- HTML wrapper methods
- JavaScript
- Method
- Prototype
- Reference
- String
- Polyfill
browser-compat: javascript.builtins.String.fontsize
translation_of: Web/JavaScript/Reference/Global_Objects/String/fontsize
---
<div>{{JSRef}} {{deprecated_header}}</div>

<p><strong><code>fontsize()</code></strong> メソッドは、文字列を指定された大きさで表示させる HTML の {{HTMLElement("font")}} 要素を生成します。</p>

<div class="note">
<p><strong>注:</strong> &lt;font&gt; 要素は <a href="/ja/docs/Glossary/HTML5">HTML5</a> で廃止されており、今後使用するべきではありません。代わりにウェブ開発者は <a href="/ja/docs/Web/CSS">CSS</a> プロパティを使用してください。</p>
</div>

<h2 id="Syntax">構文</h2>

<pre class="brush: js">fontsize(size)</pre>

<h3 id="Parameters">引数</h3>

<dl>
  <dt><code><var>size</var></code></dt>
  <dd>1 ～ 7 の整数、 1 ～ 7 の符号付き整数を表す文字列です。</dd>
</dl>

<h3 id="Return_value">返値</h3>

<p>HTML の {{HTMLElement("font")}} 要素を含む文字列です。</p>

<h2 id="Description">解説</h2>

<p>大きさを整数で指定した場合は、 <code>str</code> のフォントの大きさを7つの定義済みの大きさで設定します。 <code>size</code> を "-2" のような文字列で指定すると、 <code>str</code> のフォントの大きさを {{HTMLElement("basefont")}} 要素からの相対的な大きさを設定します。</p>

<h2 id="Examples">例</h2>

<h3 id="Using_fontsize">fontsize() の使用</h3>

<p>以下の例では文字列のメソッドを使用して、文字列の大きさを変更しています。</p>

<pre class="brush: js">var worldString = 'Hello, world';

console.log(worldString.small());     // &lt;small&gt;Hello, world&lt;/small&gt;
console.log(worldString.big());       // &lt;big&gt;Hello, world&lt;/big&gt;
console.log(worldString.fontsize(7)); // &lt;font size="7"&gt;Hello, world&lt;/fontsize&gt;
</pre>

<p>{{domxref("HTMLElement/style", "element.style")}} オブジェクトを使用すると、要素の <code>style</code> 属性を使用して、次のようにもっと汎用的に操作することができます。</p>

<pre class="brush: js">document.getElementById('yourElemId').style.fontSize = '0.7em';
</pre>

<h2 id="Specifications">仕様書</h2>

{{Specifications}}

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
  <li><code>String.prototype.fontsize</code> のポリフィルは <a href="https://github.com/zloirock/core-js#ecmascript-string-and-regexp"><code>core-js</code></a> で利用できます</li>
  <li>{{jsxref("String.prototype.big()")}}</li>
  <li>{{jsxref("String.prototype.small()")}}</li>
</ul>
