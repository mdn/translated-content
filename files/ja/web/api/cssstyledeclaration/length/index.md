---
title: CSSStyleDeclaration.length
slug: Web/API/CSSStyleDeclaration/length
tags:
- API
- CSSOM
- Property
- Reference
browser-compat: api.CSSStyleDeclaration.length
translation_of: Web/API/CSSStyleDeclaration/length
---
<p>{{ APIRef("CSSOM") }}</p>

<p><span class="seoSummary">読み取り専用のプロパティで、この CSS 宣言ブロックにあるスタイル宣言の数を整数で表します。</span></p>

<h2 id="Syntax">構文</h2>

<pre
	class="brush: js">var <em>num</em> = <em>styles</em>.length;</pre>

<h3 id="Value">値</h3>

<p>このインスタンスの親に明示的に設定されているスタイルの数を示す整数です。</p>

<h2 id="Example">例</h2>

<p>次の例は、以下の HTML 要素に明示的に設定されたスタイルの数を取得します。
</p>

<pre
	class="brush: html">&lt;div id="div1" style="margin: 0 10px; background-color: #CA1; font-family: monospace"&gt;&lt;/div&gt;</pre>

<p>JavaScript コード:</p>

<pre>var myDiv = document.getElementById('div1'); var divStyle = myDiv.style; var len = divStyle.length; // 6</pre>

<h2 id="Specifications">仕様書</h2>

{{Specifications}}

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat}}</p>
