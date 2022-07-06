---
title: 'CSP: frame-ancestors'
slug: Web/HTTP/Headers/Content-Security-Policy/frame-ancestors
tags:
  - Ancestors
  - CSP
  - Content-Security-Policy
  - Directive
  - Frame
  - HTTP
  - Security
  - frame-ancestors
translation_of: Web/HTTP/Headers/Content-Security-Policy/frame-ancestors
---
<div>{{HTTPSidebar}}</div>

<p>HTTP の {{HTTPHeader("Content-Security-Policy")}} (CSP) である <code><strong>frame-ancestors</strong></code> ディレクティブは {{HTMLElement("frame")}}、 {{HTMLElement("iframe")}}、 {{HTMLElement("object")}} 、 {{HTMLElement("embed")}}、 {{HTMLElement("applet")}} などを使ってページを埋め込むことのできる親を指定します。</p>

<p>このディレクティブを <code>'none'</code> にすることは、 {{HTTPHeader("X-Frame-Options")}}<code>: deny</code> (これは古いブラウザーも同様に対応しています) を設定するのに似ています。</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">CSP バージョン</th>
   <td>2</td>
  </tr>
  <tr>
   <th scope="row">ディレクティブ種別</th>
   <td>{{Glossary("Navigation directive", "ナビゲーションディレクティブ")}}</td>
  </tr>
  <tr>
   <th scope="row">{{CSP("default-src")}} による代替</th>
   <td>なし。設定しない場合はすべてを許可します。</td>
  </tr>
  <tr>
   <th colspan="2" scope="row">このディレクティブは {{HTMLElement("meta")}} 要素では対応していません。</th>
  </tr>
 </tbody>
</table>

<h2 id="Syntax" name="Syntax">構文</h2>

<p><code>frame-ancestors</code> ポリシーをこのように一つ以上セットできます。</p>

<pre class="syntaxbox notranslate">Content-Security-Policy: frame-ancestors &lt;source&gt;;
Content-Security-Policy: frame-ancestors &lt;source&gt; &lt;source&gt;;
</pre>

<h3 id="Sources" name="Sources">ソース</h3>

<p>&lt;source&gt; は以下のうちのいずれかです。</p>

<div class="note">
<p><code>frame-ancestors</code> ディレクティブの構文は他のソースリスト ({{CSP("default-src")}} など) のものと同様ですが、 <code>'unsafe-eval'</code> や <code>'unsafe-inline'</code> などは許可されていません。また、これは <code>default-src</code> の設定にフォールバックすることもありません。下記に示されたソースのみが許可されます。</p>
</div>

<dl>
 <dt>&lt;host-source&gt;</dt>
 <dd>スペースで区切られた、<a href="/ja/docs/URIs_and_URLs">URL scheme</a>やポート番号をふくむことができるIPアドレスや名前によるインターネットホスト名です。サイトのアドレスの前にワイルドカード (アスタリスク、 <code>'*'</code>)を含めることができ、さらにすべてのポートがソースとして有効であることを示すためにポート番号としてワイルドカード (<code>'*'</code>) を使うこともできます。ホスト名をシングルクオートで囲うことはできません。<br>
 例：
 <ul>
  <li><code>http://*.example.com</code>: <code>http:</code> のスキームを使用した、example.com のすべてのサブドメインからのすべての読み込みの試行に一致します。</li>
  <li><code>mail.example.com:443</code>: mail.example.com の 443番ポートへのアクセスの試行に一致します。</li>
  <li><code>https://store.example.com</code>: <code>https:</code> を使用した store.example.com へのアクセスの試行に一致します。</li>
 </ul>

 <div class="blockIndicator warning">
 <p><code>host-source</code> にURLスキームが指定されておらず、 iframe が <code>https</code> URLから読み込まれている場合、 iframe を読み込んでいるページの URL も <code>https</code> でなければなりません。 W3C 仕様書の <a href="https://w3c.github.io/webappsec-csp/2/#match-source-expression">matching source expressions</a> によるものです。</p>
 </div>
 </dd>
 <dt>&lt;scheme-source&gt;</dt>
 <dd><code>http:</code> または <code>https:</code> のようなスキームです。コロンは必要です。以下の他の値とは異なり、単一引用符は使用しないでください。data スキームも指定することができます (非推奨)。
 <ul>
  <li><code>data:</code> コンテンツのソースとして <a href="/ja/docs/Web/HTTP/Basics_of_HTTP/Data_URIs"><code>data:</code> の URI</a> を使うことができるようにします。<em>これは安全ではありません。攻撃者は任意の data: URI を挿入することもできます。使用は控え、スクリプトには絶対に使用しないでください。</em></li>
  <li><code>mediastream:</code> <a href="/ja/docs/Web/API/MediaStream_API"><code>mediastream:</code> の URI</a> をコンテンツのソースとして使用することができるようにします。</li>
  <li><code>blob:</code> <a href="/ja/docs/Web/API/Blob"><code>blob:</code> の URI</a> をコンテンツのソースとして使用することができるようにします。</li>
  <li><code>filesystem:</code> <a href="/ja/docs/Web/API/FileSystem"><code>filesystem:</code> の URI</a> をコンテンツのソースとして使用することができるようにします。</li>
 </ul>
 </dd>
 <dt><code>'self'</code></dt>
 <dd>保護された文書が提供されたオリジンを、同じ URL スキームおよびポート番号で参照します。単一引用符が必要です。ブラウザーによっては source ディレクティブから <code>blob</code> および <code>filesystem</code> を独自に除外していることがあります。これらのコンテンツ種別を許可する必要があるサイトは、Data 属性を使用して指定することができます。</dd>
 <dt><code>'none'</code></dt>
 <dd>空のセットを参照します。つまり、一致する URL はありません。単一引用符が必要です。</dd>
</dl>

<h2 id="例">例</h2>

<pre class="brush: bash notranslate">Content-Security-Policy: frame-ancestors 'none';

Content-Security-Policy: frame-ancestors 'self' https://www.example.org;</pre>

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
   <td>{{specName("CSP 3.0", "#directive-frame-ancestors", "frame-ancestors")}}</td>
   <td>{{Spec2('CSP 3.0')}}</td>
   <td>変更なし</td>
  </tr>
  <tr>
   <td>{{specName("CSP 1.1", "#directive-frame-ancestors", "frame-ancestors")}}</td>
   <td>{{Spec2('CSP 1.1')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("http.headers.csp.Content-Security-Policy.frame-ancestors")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTTPHeader("Content-Security-Policy")}}</li>
 <li>{{HTTPHeader("X-Frame-Options")}}</li>
</ul>
