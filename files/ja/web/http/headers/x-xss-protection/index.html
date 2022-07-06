---
title: X-XSS-Protection
slug: Web/HTTP/Headers/X-XSS-Protection
tags:
  - HTTP
  - Reference
  - XSS
  - セキュリティ
  - ヘッダー
translation_of: Web/HTTP/Headers/X-XSS-Protection
---
<div>{{HTTPSidebar}}</div>

<p>HTTP の <strong><code>X-XSS-Protection</code></strong> レスポンスヘッダーは Internet Explorer, Chrome, Safari の機能で、反射型クロスサイトスクリプティング ({{Glossary("XSS")}}) 攻撃を検出したときに、ページの読み込みを停止するためのものです。強い {{HTTPHeader("Content-Security-Policy")}} をサイトが実装して、インライン JavaScript の使用を無効にしていれば (<code>'unsafe-inline'</code>)、現在のブラウザーではこれらの防御は大枠で不要なものですが、まだ {{Glossary("CSP")}} に対応していない古いウェブブラウザーを使用しているユーザーには防御になります。</p>

<div class="note">
<ul>
 <li>Chrome は <a href="https://www.chromestatus.com/feature/5021976655560704">XSS Auditor を削除</a>しました</li>
 <li>Firefox は対応しておらず、 <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=528661"><code>X-XSS-Protection</code> を今後も実装しません</a></li>
 <li>Edge は <a href="https://blogs.windows.com/windowsexperience/2018/07/25/announcing-windows-10-insider-preview-build-17723-and-build-18204/">XSS filter を廃止しました</a></li>
</ul>

<p>つまり、レガシーブラウザをサポートする必要がない場合は、代わりに <code><a href="/ja/docs/Web/HTTP/Headers/Content-Security-Policy">Content-Security-Policy</a></code> を使用し <code>unsafe-inline</code> を許可しないことをお勧めします。</p>
</div>

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

<pre class="syntaxbox notranslate">X-XSS-Protection: 0
X-XSS-Protection: 1
X-XSS-Protection: 1; mode=block
X-XSS-Protection: 1; report=&lt;reporting-uri&gt;
</pre>

<dl>
 <dt>0</dt>
 <dd>XSS フィルタリングを無効化します。</dd>
 <dt>1</dt>
 <dd>XSS フィルタリングを有効化します (通常はブラウザーの既定値です)。クロスサイトスクリプティング攻撃を検知すると、ブラウザーはページをサニタイズします (安全でない部分を取り除きます)。</dd>
 <dt>1; mode=block</dt>
 <dd>XSS フィルタリングを有効化します。攻撃を検知すると、ページをサニタイジングするよりも、ページのレンダリングを停止します。</dd>
 <dt>1; report=&lt;reporting-URI&gt; (Chromium only)</dt>
 <dd>XSS フィルタリングを有効化します。クロスサイトスクリプティング攻撃を検知すると、ブラウザーはページをサニタイズし、攻撃レポートを作成します。レポートを送信するために、 CSP {{CSP("report-uri")}} ディレクティブ機能を利用します。</dd>
</dl>

<h2 id="Example" name="Example">例</h2>

<p>XSS 攻撃が反映されたページを見つけたらその読み込みをブロックする場合。</p>

<pre class="brush: bash notranslate">X-XSS-Protection: 1; mode=block</pre>

<p>PHP</p>

<pre class="brush: php notranslate">header("X-XSS-Protection: 1; mode=block");</pre>

<p>Apache (.htaccess)</p>

<pre class="brush: bash notranslate">&lt;IfModule mod_headers.c&gt;
  Header set X-XSS-Protection "1; mode=block"
&lt;/IfModule&gt;</pre>

<p>Nginx</p>

<pre class="brush: bash notranslate">add_header "X-XSS-Protection" "1; mode=block";</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<p>仕様書や草案で定義されたものではありません。</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("http.headers.X-XSS-Protection")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTTPHeader("Content-Security-Policy")}}</li>
 <li><a href="https://blogs.msdn.microsoft.com/ieinternals/2011/01/31/controlling-the-xss-filter/">Controlling the XSS Filter – Microsoft</a></li>
 <li><a href="https://www.virtuesecurity.com/blog/understanding-xss-auditor/">Understanding XSS Auditor – Virtue Security</a></li>
 <li>
  <p><a href="https://blog.innerht.ml/the-misunderstood-x-xss-protection/">The misunderstood X-XSS-Protection – blog.innerht.ml</a></p>
 </li>
</ul>
