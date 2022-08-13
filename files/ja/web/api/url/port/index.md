---
title: URL.port
slug: Web/API/URL/port
tags:
  - API
  - Property
  - Reference
  - URL
  - port
translation_of: Web/API/URL/port
---
<div>{{ApiRef("URL API")}}</div>

<p><span class="seoSummary">{{domxref("URL")}} インターフェイスの <strong><code>port</code></strong> プロパティは、URL のポート番号を含む {{domxref("USVString")}} です。 URL に明示的なポート番号が含まれていない場合は、<code>''</code> に設定されます。</span></p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>string</em> = <em>object</em>.port;
<em>object</em>.port = <em>string</em>;
</pre>

<h3 id="Value" name="Value">値</h3>

<p>{{domxref("USVString")}}。</p>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: js">var url = new URL('<span class="message-body-wrapper"><span class="message-flex-body"><span class="devtools-monospace message-body"><span class="cm-string">https://mydomain.com:80/svn/Repos/</span></span></span></span>');
var result = url.port; // 戻り値: '80'
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
   <td>{{SpecName('URL', '#dom-url-port', 'URL.port')}}</td>
   <td>{{Spec2('URL')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.URL.port")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("URL")}} インターフェイスに属します。</li>
</ul>
