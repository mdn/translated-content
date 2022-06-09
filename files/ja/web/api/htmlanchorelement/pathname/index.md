---
title: HTMLHyperlinkElementUtils.pathname
slug: Web/API/HTMLAnchorElement/pathname
tags:
  - API
  - Experimental
  - HTMLHyperlinkElementUtils
  - Property
  - Reference
  - URL API
translation_of: Web/API/HTMLHyperlinkElementUtils/pathname
original_slug: Web/API/HTMLHyperlinkElementUtils/pathname
---
<p>{{ApiRef("URL API")}}</p>

<p><span class="seoSummary"><strong><code>HTMLHyperlinkElementUtils.pathname</code></strong> プロパティは、最初の <code>'/'</code> とその後に続く URL のパス（または、パスがない場合は空の文字列）を含む {{domxref("USVString")}} です。</span></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>string</em> = <em>object</em>.pathname;
<em>object</em>.pathname = <em>string</em>;
</pre>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: js">// &lt;a id="myAnchor" href="https://developer.mozilla.org/en-US/docs/HTMLHyperlinkElementUtils.pathname"&gt; 要素がドキュメントにあるとします
var anchor = document.getElementById("myAnchor");
var result = anchor.pathname; // 戻り値: '/en-US/docs/HTMLHyperlinkElementUtils.pathname'
</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', '#dom-hyperlink-pathname', 'HTMLHyperlinkElementUtils.pathname')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.HTMLHyperlinkElementUtils.pathname")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("HTMLHyperlinkElementUtils")}} ミックスインに属します。</li>
</ul>
