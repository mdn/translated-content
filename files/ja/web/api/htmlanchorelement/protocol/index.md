---
title: HTMLHyperlinkElementUtils.protocol
slug: Web/API/HTMLAnchorElement/protocol
tags:
  - API
  - Experimental
  - HTMLHyperlinkElementUtils
  - Property
  - URL API
translation_of: Web/API/HTMLHyperlinkElementUtils/protocol
original_slug: Web/API/HTMLHyperlinkElementUtils/protocol
---
<p>{{ApiRef("URL API")}}</p>

<p><span class="seoSummary"><code><strong>HTMLHyperlinkElementUtils</strong></code><strong><code>.protocol</code></strong> プロパティは、最後の <code>':'</code> を含む URL のプロトコルスキームを表す {{domxref("USVString")}} です。</span></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>string</em> = <em>object</em>.protocol;
<em>object</em>.protocol = <em>string</em>;
</pre>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: js">// &lt;a id="myAnchor" href="https://developer.mozilla.org/en-US/HTMLHyperlinkElementUtils.protocol"&gt; 要素がドキュメントにあるとします
var anchor = document.getElementById("myAnchor");
var result = anchor.protocol; // 戻り値: 'https:'
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
   <td>{{SpecName('HTML WHATWG', '#dom-hyperlink-protocol', 'HTMLHyperlinkElementUtils.protocol')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.HTMLHyperlinkElementUtils.protocol")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("HTMLHyperlinkElementUtils")}} ミックスインに属します。</li>
</ul>
