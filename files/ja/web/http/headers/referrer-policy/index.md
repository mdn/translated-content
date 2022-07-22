---
title: Referrer-Policy
slug: Web/HTTP/Headers/Referrer-Policy
tags:
  - HTTP
  - HTTP ヘッダー
  - Reference
  - Referrer-Policy
  - Response
  - referrer
  - プライバシー
  - レスポンスヘッダー
translation_of: Web/HTTP/Headers/Referrer-Policy
---
<div>{{HTTPSidebar}}</div>

<p><span class="seoSummary">HTTP の <strong><code>Referrer-Policy</code></strong> {{glossary("HTTP header", "ヘッダー")}}は、 ({{HTTPHeader("Referer")}} ヘッダーで送られる) <a href="/ja/docs/Web/Security/Referer_header:_privacy_and_security_concerns">リファラー情報</a>をリクエストにどれだけ含めるかを制御します。ヘッダーに加えて、<a href="#integration_with_html">HTMLでもこのポリシーを設定する</a>ことができます。</span></p>

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

<pre class="syntaxbox notranslate">Referrer-Policy: no-referrer
Referrer-Policy: no-referrer-when-downgrade
Referrer-Policy: origin
Referrer-Policy: origin-when-cross-origin
Referrer-Policy: same-origin
Referrer-Policy: strict-origin
Referrer-Policy: strict-origin-when-cross-origin
Referrer-Policy: unsafe-url
</pre>

<div class="blockIndicator note">
<p>元のヘッダー名である {{HTTPHeader("Referer")}} は "referrer" という語のスペルミスです。 <code>Referrer-Policy</code> ヘッダーはこのスペルミスをしていません。</p>
</div>

<h2 id="Directives" name="Directives">ディレクティブ</h2>

<dl>
 <dt><code>no-referrer</code></dt>
 <dd>{{HTTPHeader("Referer")}} ヘッダーが省略されます。送信されるリクエストにはリファラー情報が含まれません。</dd>
 <dt><code>no-referrer-when-downgrade</code></dt>
 <dd>プロトコルのセキュリティ水準が同一である、または向上する場合 (HTTP→HTTP, HTTP→HTTPS, HTTPS→HTTPS) は、{{glossary("origin", "オリジン")}}、パス、クエリー文字列が {{HTTPHeader("Referer")}} ヘッダーで送信されます。セキュリティ水準が低下するリクエスト (HTTPS→HTTP, HTTPS→file) では {{HTTPHeader("Referer")}} ヘッダーが送信されません。
 </dd>
 <dt><code>origin</code></dt>
 <dd>{{glossary("origin", "オリジン")}}のみが {{HTTPHeader("Referer")}} ヘッダーで送信されます。<br>
 たとえば、 <code>https://example.com/page.html</code> にある文書からは、 <code>https://example.com/</code> というリファラーが送信されます。</dd>
 <dt><code>origin-when-cross-origin</code></dt>
 <dd>同一のプロトコル水準 (HTTP→HTTP, HTTPS→HTTPS) で{{glossary("Same-origin_policy", "同一オリジン")}}のリクエストを行う場合は{{glossary("origin", "オリジン")}}、パス、クエリー文字列を送信します。オリジン間リクエストや安全性の低下する移動先 (HTTPS→HTTP) ではオリジンのみを送信します。</dd>
 <dt><code>same-origin</code></dt>
 <dd>{{glossary("Same-origin_policy", "同一オリジン")}}のリクエストでは{{glossary("origin", "オリジン")}}、パス、クエリー文字列を送信します。オリジン間リクエストでは {{HTTPHeader("Referer")}} ヘッダーを送信しません。</dd>
 <dt><code>strict-origin</code></dt>
 <dd>プロトコルのセキュリティ水準が同じである場合 (HTTPS→HTTPS) にのみオリジンを送信します。安全性の低下する移動先 (HTTPS→HTTP) には {{HTTPHeader("Referer")}} ヘッダーを送信しません。</dd>
 <dt><code>strict-origin-when-cross-origin</code> (既定値)</dt>
 <dd>同一オリジンのリクエストを行う際はオリジン、パス、クエリー文字列を送信します。オリジン間リクエストでは、プロトコルのセキュリティ水準が同じである場合 (HTTPS→HTTPS) にのみオリジンを送信します。安全性の低下する移動先 (HTTPS→HTTP) には {{HTTPHeader("Referer")}} ヘッダーを送信しません。</dd>
 <div class="note">これはポリシーが指定されていない場合や、与えられた値が無効であった場合の既定のポリシーです (仕様書改訂 <a href="https://github.com/whatwg/fetch/pull/1066">[November 2020]</a> を参照) 。以前の規定値は <code>no-referrer-when-downgrade</code> でした。</div>
 <dt>unsafe-url</dt>
 <dd>セキュリティに関係なく、どのリクエストを行った場合でも、オリジン、パス、クエリー文字列を送信します。
 <div class="blockIndicator warning">
 <p>このポリシーは、 HTTPS リソースの URL から安全ではないオリジンへプライベートである可能性がある情報を漏洩します。設定する場合は影響をよく検討してください。</p>
 </div>
 </dd>
</dl>

<h2 id="Integration_with_HTML" name="Integration_with_HTML">HTML との統合</h2>

<p>HTML 内でリファラーポリシーを設定することもできます。例えば、 {{HTMLElement("meta")}} 要素で <a href="/ja/docs/Web/HTML/Element/meta#attr-name">name</a> に <code>referrer</code> を設定することで、文書全体のリファラーポリシーを設定することができます。</p>

<pre class="brush: html notranslate">&lt;meta name="referrer" content="origin"&gt;</pre>

<p>{{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("img")}}, {{HTMLElement("iframe")}}, {{HTMLElement("script")}}, {{HTMLElement("link")}} の各要素に <code>referrerpolicy</code> 属性を指定し、個別のリクエストにリファラーポリシーを設定することもできます。</p>

<pre class="brush: html notranslate">&lt;a href="http://example.com" referrerpolicy="origin"&gt;</pre>

<p>他に、 <code>noreferrer</code> <a href="/ja/docs/Web/HTML/Link_types">link 関係</a>を <code>a</code>, <code>area</code>, <code>link</code> の各要素に設定することもできます。</p>

<pre class="brush: html notranslate">&lt;a href="http://example.com" rel="noreferrer"&gt;</pre>

<div class="blockIndicator warning">
 <p>上記のように、 <code>noreferrer</code> link 関係はダッシュ記号を用いずに記述されます。 {{HTMLElement("meta")}} 要素で文書全体のリファラーポリシーを指定するときはダッシュを<em>つけて</em>次のように記述します:  <code>&lt;meta name="referrer" content="no-referrer"&gt;</code></p>
</div>

<h2 id="Integration_with_CSS" name="Integration_with_CSS">CSS との統合</h2>

<p>CSS はスタイルシートから参照されるリソースにアクセスすることがあります。これらのリソースは同様にリファラーポリシーに従います。</p>

<ul>
 <li>外部の CSS スタイルシートでは、そのレスポンスの <code>Referrer-Policy</code> ヘッダーにより上書きされない限り、既定のポリシー (<code>strict-origin-when-cross-origin</code>) が使用されます。</li>
 <li>{{HTMLElement("style")}} 要素または <a href="/ja/docs/Web/API/HTMLElement/style"><code>style</code> 属性</a>については、所有者の文書のリファラーポリシーが使用されます。</li>
</ul>

<h2 id="Examples" name="Examples">例</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">ポリシー</th>
   <th scope="col">文書</th>
   <th scope="col">移動先</th>
   <th scope="col">リファラー</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <th><code>no-referrer</code></th>
   <td>https://example.com/page</td>
   <td><em>どこへでも</em></td>
   <td><em>(リファラーなし)</em></td>
  </tr>
  <tr>
   <th rowspan="3"><code>no-referrer-when-downgrade</code></th>
   <td rowspan="3">https://example.com/page</td>
   <td>https://example.com/otherpage</td>
   <td>https://example.com/page</td>
  </tr>
  <tr>
   <td>https://mozilla.org</td>
   <td>https://example.com/page</td>
  </tr>
  <tr>
   <td><strong>http</strong>://example.org</td>
   <td><em>(リファラーなし)</em></td>
  </tr>
  <tr>
   <th><code>origin</code></th>
   <td>https://example.com/page</td>
   <td><em>どこへでも</em></td>
   <td>https://example.com/</td>
  </tr>
  <tr>
   <th rowspan="3"><code>origin-when-cross-origin</code></th>
   <td rowspan="3">https://example.com/page</td>
   <td>https://example.com/otherpage</td>
   <td>https://example.com/page</td>
  </tr>
  <tr>
   <td>https://mozilla.org</td>
   <td>https://example.com/</td>
  </tr>
  <tr>
   <td><strong>http</strong>://example.com/page</td>
   <td>https://example.com/</td>
  </tr>
  <tr>
   <th rowspan="2"><code>same-origin</code></th>
   <td rowspan="2">https://example.com/page</td>
   <td>https://example.com/otherpage</td>
   <td>https://example.com/page</td>
  </tr>
  <tr>
   <td>https://mozilla.org</td>
   <td><em>(リファラーなし)</em></td>
  </tr>
  <tr>
   <th rowspan="3"><code>strict-origin</code></th>
   <td rowspan="2">https://example.com/page</td>
   <td>https://mozilla.org</td>
   <td>https://example.com/</td>
  </tr>
  <tr>
   <td><strong>http</strong>://example.org</td>
   <td><em>(リファラーなし)</em></td>
  </tr>
  <tr>
   <td><strong>http</strong>://example.com/page</td>
   <td><em>どこへでも</em></td>
   <td>http://example.com/</td>
  </tr>
  <tr>
   <th rowspan="3"><code>strict-origin-when-cross-origin</code></th>
   <td rowspan="3">https://example.com/page</td>
   <td>https://example.com/otherpage</td>
   <td>https://example.com/page</td>
  </tr>
  <tr>
   <td>https://mozilla.org</td>
   <td>https://example.com/</td>
  </tr>
  <tr>
   <td><strong>http</strong>://example.org</td>
   <td><em>(リファラーなし)</em></td>
  </tr>
  <tr>
   <th><code>unsafe-url</code></th>
   <td>https://example.com/page?q=123</td>
   <td><em>どこへでも</em></td>
   <td>https://example.com/page?q=123</td>
  </tr>
 </tbody>
</table>

<h3 id="Specifying_a_fallback_policy" name="Specifying_a_fallback_policy">代替ポリシーの指定</h3>

<p>必要なポリシーのブラウザーの対応状況が十分ではなく、代替ポリシーを設定したい場合は、カンマ区切りのリストを使用し、必要なポリシーを最後に指定してください。</p>

<pre class="notranslate">Referrer-Policy: no-referrer, strict-origin-when-cross-origin</pre>

<p>上記のシナリオでは、 <code>no-referrer</code> はブラウザーが <code>strict-origin-when-cross-origin</code> に対応していない場合のみ使用されます。</p>

<p class="note">複数の値を設定する方法は、 HTTP の <code>Referrer-Policy</code> ヘッダーのみが対応しており、 <code>referrerpolicy</code> 属性では対応していません。</p>

<h2 id="browser-specific_preferencessettings" name="browser-specific_preferencessettings">ブラウザー固有の設定</h2>

<h3 id="firefox_preferences" name="firefox_preferences">Firefox の設定</h3>

<div><p>Firefox のユーザー設定では<em>既定の</em>リファラーポリシーを構成できます。設定名はバージョンにより異なります:</p>
<ul>
  <li>Firefox バージョン 59以降: <code>network.http.referer.defaultPolicy</code> (プライベートネットワークでは <code>network.http.referer.defaultPolicy.pbmode</code>)</li>
  <li>Firefox バージョン 53 から 58: <code>network.http.referer.userControlPolicy</code></li>
</ul>
<p>どちらも同じ設定値をとります: <code>0 = no-referrer</code>, <code>1 = same-origin</code>, <code>2 = strict-origin-when-cross-origin</code>, <code>3 = no-referrer-when-downgrade</code></p></div>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><a href="https://w3c.github.io/webappsec-referrer-policy/#referrer-policy-header">Referrer Policy </a></td>
   <td>編集者草稿</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("http.headers.Referrer-Policy")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{interwiki("wikipedia", "HTTPリファラ", "Wikipedia の HTTP リファラ")}}</li>
 <li><a href="/ja/docs/Web/API/Fetch_API">Fetch</a> の使用時: {{domxref("Request.referrerPolicy")}}</li>
 <li>廃止された <span style="white-space: nowrap;">{{HTTPHeader("Content-Security-Policy")}}</span> {{HTTPHeader("Content-Security-Policy/referrer", "referrer")}} {{Obsolete_Inline}} ディレクティブ</li>
 <li><a href="/ja/docs/Web/Security/Same-origin_policy">同一オリジンポリシー</a></li>
 <li>
  <p><a href="https://blog.mozilla.org/security/2015/01/21/meta-referrer/">Tighter Control Over Your Referrers – Mozilla Security Blog</a></p>
 </li>
</ul>
