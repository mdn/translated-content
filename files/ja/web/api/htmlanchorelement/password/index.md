---
title: HTMLHyperlinkElementUtils.password
slug: Web/API/HTMLAnchorElement/password
tags:
  - API
  - Experimental
  - HTMLHyperlinkElementUtils
  - Property
  - URL API
translation_of: Web/API/HTMLHyperlinkElementUtils/password
original_slug: Web/API/HTMLHyperlinkElementUtils/password
---
<p>{{ApiRef("URL API")}}</p>

<p><span class="seoSummary"><code>HTMLHyperlinkElementUtils.password</code> プロパティは、ドメイン名の前に指定されたパスワードを含む {{domxref("USVString")}} です。</span></p>

<p>最初に <code><a href="/ja/docs/Web/API/HTMLHyperlinkElementUtils/username">username</a></code> プロパティを設定せずに設定しようとすると、静かに失敗します。</p>

<h2 id="Examples" name="Examples">構文</h2>

<pre class="syntaxbox"><em>string</em> = <em>object</em>.password;
<em>object</em>.password = <em>string</em>;
</pre>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: js">// &lt;a id="myAnchor" href="https://anonymous:flabada@developer.mozilla.org/en-US/docs/HTMLHyperlinkElementUtils.username"&gt; 要素がドキュメントにあるとします
var anchor = document.getElementByID("myAnchor");
var result = anchor.password; // 戻り値: 'flabada'
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
   <td>{{SpecName('HTML WHATWG', '#dom-hyperlink-password', 'HTMLHyperlinkElementUtils.password')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.HTMLHyperlinkElementUtils.password")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("HTMLHyperlinkElementUtils")}} ミックスインに属します。</li>
</ul>
