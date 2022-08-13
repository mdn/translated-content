---
title: Timing-Allow-Origin
slug: Web/HTTP/Headers/Timing-Allow-Origin
tags:
  - CORS
  - HTTP
  - Reference
  - Timing-Allow-Origin
  - header
translation_of: Web/HTTP/Headers/Timing-Allow-Origin
---
<div>{{HTTPSidebar}}</div>

<p><strong><code>Timing-Allow-Origin</code></strong> レスポンスヘッダーは、 <a href="/ja/docs/Web/API/Resource_Timing_API">Resource Timing API</a> の機能を介して取得された属性の値の表示を許可されているオリジンを指定します。そうでない場合、クロスオリジンの制限によりゼロとして報告されます。</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">ヘッダー種別</th>
   <td>{{Glossary("Response header", "レスポンスヘッダー")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name", "禁止ヘッダー名")}}</th>
   <td>いいえ</td>
  </tr>
 </tbody>
</table>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">Timing-Allow-Origin: *
Timing-Allow-Origin: &lt;origin&gt;[, &lt;origin&gt;]*
</pre>

<h2 id="Directives" name="Directives">ディレクティブ</h2>

<dl>
 <dt><code>*</code></dt>
 <dd>サーバーはワイルドカードとして "*" を指定することができ、それによって全てのオリジンがタイミングリソースを見ることができます。</dd>
 <dt><code>&lt;origin&gt;</code></dt>
 <dd>タイミングリソースを表示できる URI を指定します。 複数のオリジンをカンマ区切りで指定できます。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<p>リソースがタイミングリソースを表示できるようにする場合。</p>

<pre class="notranslate">Timing-Allow-Origin: *</pre>

<p><code>https://developer.mozilla.org</code> がタイミングリソースを表示できるようにするには、次のように指定できます。</p>

<pre class="notranslate">Timing-Allow-Origin: https://developer.mozilla.org</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('Resource Timing 3', '#sec-timing-allow-origin', 'Timing-Allow-Origin')}}</td>
   <td>{{Spec2("Resource Timing 3")}}</td>
   <td>Initial definition.</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("http.headers.Timing-Allow-Origin")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Resource_Timing_API">Resource Timing API</a></li>
 <li><a href="/ja/docs/Web/API/Resource_Timing_API/Using_the_Resource_Timing_API">Resource Timing API の使用</a></li>
 <li>{{HTTPHeader("Vary")}}</li>
</ul>
