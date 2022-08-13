---
title: URL.origin
slug: Web/API/URL/origin
tags:
  - API
  - Property
  - Read-only
  - Reference
  - URL
  - URL API
  - origin
translation_of: Web/API/URL/origin
---
<div>{{APIRef("URL API")}}</div>

<p><span class="seoSummary">{{domxref("URL")}} インターフェイスの <strong><code>origin</code></strong> 読み取り専用プロパティは、表現された URL のオリジンの Unicode シリアル化を含む {{domxref("USVString")}} を返します。</span> 正確な構造は、次のように URL のタイプによって異なります。</p>

<ul>
 <li><code>http</code> または <code>https</code> の URL の場合、スキームの後に <code>'://'</code>、ドメイン、<code>':'</code>、ポートが順に続きます。 （ポート部分は、明示的に指定されていて、それがデフォルトポートでない場合に存在します。 それぞれのデフォルトポートは、<code>80</code> と <code>443</code> です。）</li>
 <li><code>file:</code> URL の場合、値はブラウザーに依存します。</li>
 <li><code>blob:</code> URL の場合、<code>blob:</code> に続く URL のオリジンが使用されます。 例えば、<code>"blob:https://mozilla.org"</code> は <code>"https://mozilla.org"</code> として返されます。</li>
</ul>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>string</em> = <em>URLObject</em>.origin;
</pre>

<h3 id="Value" name="Value">値</h3>

<p>{{domxref("USVString")}}。</p>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: js">var url = new URL("blob:https://mozilla.org:443/")
url.origin; // 'https://mozilla.org' を返します
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
   <td>{{SpecName('URL', '#dom-url-origin', 'URL.origin')}}</td>
   <td>{{Spec2('URL')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.URL.origin")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("URL")}} インターフェイスに属します。</li>
</ul>
