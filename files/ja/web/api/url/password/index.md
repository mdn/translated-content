---
title: URL.password
slug: Web/API/URL/password
tags:
  - API
  - Property
  - Reference
  - URL
  - password
translation_of: Web/API/URL/password
---
<div>{{ApiRef("URL API")}}</div>

<p><span class="seoSummary">{{domxref("URL")}} インターフェイスの <strong><code>password</code></strong> プロパティは、ドメイン名の前に指定されたパスワードを含む {{domxref("USVString")}} です。</span></p>

<p>最初に <code><a href="/ja/docs/Web/API/URL/username">username</a></code> プロパティを設定せずに設定しようとすると、静かに失敗します。</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>string</em> = <em>object</em>.password;
<em>object</em>.password = <em>string</em>;
</pre>

<h3 id="Value" name="Value">値</h3>

<p>{{domxref("USVString")}}。</p>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: js">var url = new URL('https://anonymous:flabada@developer.mozilla.org/en-US/docs/Web/API/URL/password');
var result = url.password; // 戻り値: "flabada"
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
   <td>{{SpecName('URL', '#dom-url-password', 'URL.password')}}</td>
   <td>{{Spec2('URL')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.URL.password")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("URL")}} インターフェイスに属します。</li>
</ul>
