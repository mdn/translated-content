---
title: HTML crossorigin 属性
slug: Web/HTML/Attributes/crossorigin
tags:
  - Advanced
  - CORS
  - HTML
  - Reference
  - Security
  - セキュリティ
  - 上級者
translation_of: Web/HTML/Attributes/crossorigin
---
<div>{{draft}}</div>

<p class="seoSummary"><strong><code>crossorigin</code></strong> 属性は、 {{ HTMLElement("audio") }}, {{ HTMLElement("img") }}, {{ HTMLElement("link") }}, {{ HTMLElement("script") }}, {{ HTMLElement("video") }} の各要素で有効であり、 <a href="/ja/docs/Web/HTTP/CORS">CORS</a> への対応を提供し、したがって要素が読み取るデータのために CORS リクエストの構成を有効にします。要素によっては、属性は CORS 設定属性になります。</p>

<p>メディア要素の <code>crossorigin</code> コンテンツ属性は CORS 設定属性です。</p>

<p>これらの属性は列挙型で、以下の値を取ることができます。</p>

<table class="standard-table">
 <tbody>
  <tr>
   <td class="header">キーワード</td>
   <td class="header">説明</td>
  </tr>
  <tr>
   <td><code>anonymous</code></td>
   <td>この要素のための CORS リクエストで資格情報フラグを 'same-origin' に設定する。</td>
  </tr>
  <tr>
   <td><code>use-credentials</code></td>
   <td>この要素のための CORS リクエストで資格情報フラグを 'include' に設定する。</td>
  </tr>
  <tr>
   <td><code>""</code></td>
   <td><code>crossorigin</code> または <code>crossorigin=""</code> のように属性に空の値を設定すると、 <code>anonymous</code> と同じになります。</td>
  </tr>
 </tbody>
</table>

<p>既定では (つまり、属性が指定されていない場合)、 CORS は使用されません。 "anonymous" キーワードが指定された場合は、同じオリジンでない限り、リクエストにはクッキーやクライアント側の SSL 証明書、 HTTP 認証などの <a class="external" href="http://www.w3.org/TR/cors/#user-credentials">CORS 仕様書の用語の節</a>で記述されている<ruby><strong>ユーザー資格情報</strong><rp> (</rp><rt>user credentials</rt><rp>) </rp></ruby>は使用されません。</p>

<p>不正なキーワードや空文字列は、 <code>anonymous</code> が指定されたものと同じように扱われます。</p>

<h3 id="Example_crossorigin_with_the_script_element" name="Example_crossorigin_with_the_script_element">例: script 要素の crossorigin</h3>

<p>以下の {{HTMLElement("script")}} 要素を使用すると、ユーザー資格情報を送信せずに <code>https://example.com/example-framework.js</code> スクリプトを実行します。</p>

<pre class="brush: html">&lt;script src="https://example.com/example-framework.js" crossorigin="anonymous"&gt;&lt;/script&gt;</pre>

<h3 id="Example_Webmanifest_with_credentials" name="Example_Webmanifest_with_credentials">例: 資格情報付きの Webmanifest</h3>

<p>資格情報を必要とするマニフェストを読み取るときは、同じオリジンからのファイル読み取りであっても <code>use-credentials</code> の値を使用する必要があります。</p>

<pre class="brush: html">&lt;link rel="manifest" href="/app.webmanifest" crossorigin="use-credentials"&gt;</pre>

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
   <td>{{SpecName('HTML WHATWG', 'infrastructure.html#cors-settings-attributes', 'CORS settings attributes')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', 'embedded-content.html#attr-img-crossorigin', 'crossorigin')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<h3 id="&lt;script_crossorigin>">&lt;script crossorigin&gt;</h3>

<p>{{Compat("html.elements.script.crossorigin")}}</p>

<h3 id="&lt;video_crossorigin>">&lt;video crossorigin&gt;</h3>

<p>{{Compat("html.elements.video.crossorigin")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/HTTP/CORS">Cross-Origin Resource Sharing (CORS)</a></li>
 <li><a href="/ja/docs/Web/HTML/Attributes/rel">HTML の <code>rel</code> 属性</a></li>
</ul>

<div>{{QuickLinksWithSubpages("/ja/docs/Web/HTML/")}}</div>
