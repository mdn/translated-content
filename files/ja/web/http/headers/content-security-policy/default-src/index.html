---
title: 'CSP: default-src'
slug: Web/HTTP/Headers/Content-Security-Policy/default-src
tags:
  - CSP
  - Content-Security-Policy
  - Directive
  - HTTP
  - Reference
  - Security
  - default
  - default-src
  - source
  - コンテンツセキュリティポリシー
translation_of: Web/HTTP/Headers/Content-Security-Policy/default-src
---
<div>{{HTTPSidebar}}</div>

<p><span class="seoSummary">HTTP の {{HTTPHeader("Content-Security-Policy")}} (CSP) <strong><code>default-src</code></strong> ディレクティブは、他の CSP {{Glossary("fetch directive", "フェッチディレクティブ")}}のフォールバックとして提供します。</span>以下のディレクティブがいずれかが存在しないと、ユーザーエージェントは <code>default-src</code> ディレクティブを探して、この値を使用します。</p>

<ul>
 <li>{{CSP("child-src")}}</li>
 <li>{{CSP("connect-src")}}</li>
 <li>{{CSP("font-src")}}</li>
 <li>{{CSP("frame-src")}}</li>
 <li>{{CSP("img-src")}}</li>
 <li>{{CSP("manifest-src")}}</li>
 <li>{{CSP("media-src")}}</li>
 <li>{{CSP("object-src")}}</li>
 <li>{{CSP("prefetch-src")}}</li>
 <li>{{CSP("script-src")}}</li>
 <li>{{CSP("script-src-elem")}}</li>
 <li>{{CSP("script-src-attr")}}</li>
 <li>{{CSP("style-src")}}</li>
 <li>{{CSP("style-src-elem")}}</li>
 <li>{{CSP("style-src-attr")}}</li>
 <li>{{CSP("worker-src")}}</li>
</ul>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">CSP バージョン</th>
   <td>1</td>
  </tr>
  <tr>
   <th scope="row">ディレクティブ種別</th>
   <td>{{Glossary("Fetch directive", "フェッチディレクティブ")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Syntax" name="Syntax">構文</h2>

<p><code>default-src</code> ポリシーには、１つまたは複数のソースが許可されています。</p>

<pre class="syntaxbox notranslate">Content-Security-Policy: default-src &lt;source&gt;;
Content-Security-Policy: default-src &lt;source&gt; &lt;source&gt;;
</pre>

<h3 id="Sources" name="Sources">ソース</h3>

<div id="common_sources">
<p>&lt;source&gt; は以下のうちの一つを取ることができます。</p>

<dl>
 <dt>&lt;host-source&gt;</dt>
 <dd>ホスト名または IP アドレスによるインターネットホストで、任意で <a href="/ja/docs/URIs_and_URLs">URL スキーム</a>やポート番号を付けることができます。サイトのアドレスはワイルドカード (アスタリスク文字、<code>'*'</code>) で始めることができ、更にポート番号にワイルドカード (<code>'*'</code>) を使ってすべての有効なポート番号をソースとして示すことができます。<br>
 例:
 <ul>
  <li><code>http://*.example.com</code>: <code>http:</code> のスキームを使用した、example.com のすべてのサブドメインからのすべての読み込みの試行に一致します。</li>
  <li><code>mail.example.com:443</code>: mail.example.com の 443番ポートへのアクセスの試行に一致します。</li>
  <li><code>https://store.example.com</code>: <code>https:</code> を使用した store.example.com へのアクセスの試行に一致します。</li>
  <li><code>*.example.com</code>: 現在のプロトコルを使用した example.com のすべてのサブドメインからの読み込みのすべての試行に一致します。</li>
 </ul>
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
 <dt><code>'unsafe-eval'</code></dt>
 <dd>文字列からコードを生成する <code>eval()</code> および同様のメソッドの利用を許可します。単一引用符が必要です。</dd>
 <dt id="unsafe-hashes"><code>'unsafe-hashes'</code></dt>
 <dd>特定のインラインの<a href="/ja/docs/Web/Guide/Events/Event_handlers">イベントハンドラー</a>を許可します。インラインイベントハンドラーを許可したいが、インラインの {{HTMLElement("script")}} 要素や <code>javascript:</code> URL は不要な場合、これは <code>unsafe-inline</code> を使うよりも安全なメソッドです。</dd>
 <dt><code>'unsafe-inline'</code></dt>
 <dd>インラインの {{HTMLElement("script")}} 要素、<code>javascript:</code> の URL、インラインイベントハンドラー、インライン {{HTMLElement("style")}} 要素のような、インラインリソースの使用を許可します。単一引用符が必要です。</dd>
 <dt><code>'none'</code></dt>
 <dd>空のセットを参照します。つまり、一致する URL はありません。単一引用符が必要です。</dd>
 <dt>'nonce-&lt;base64-value&gt;'</dt>
 <dd>暗号化ノンス (一度だけ使われる数値) を使用する特定のインラインスクリプトのための許可リストです。サーバーはポリシーを転送するたびに固有のノンスを生成する必要があります。リソースのポリシーを回避することを難しくするため、推測できないノンスを提供することが重要です。例えば<a href="/ja/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#Unsafe_inline_script">安全でないインラインスクリプト</a>を参照してください。ノンスを指定すると、最近のブラウザーは、ノンスの対応がない古いブラウザーのために設定されている可能性がある <code>'unsafe-inline'</code> を無視するようになります。</dd>
 <dt>'&lt;hash-algorithm&gt;-&lt;base64-value&gt;'</dt>
 <dd>スクリプトまたはスタイルの sha256, sha384, sha512 の何れかのハッシュです。このソースは、ハッシュを生成するために使用する暗号化アルゴリズムと、スクリプトまたはスタイルのハッシュを base64 でエンコードしたものの二つの部分をダッシュで区切ったもので構成されます。ハッシュを生成するときは、&lt;script&gt; または &lt;style&gt; タグを含めないようにし、大文字・小文字の区別と、ホワイトスペースの扱い (先頭や末尾のホワイトスペースを含む) に注意してください。例えば<a href="/ja/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#Unsafe_inline_script">安全でないインラインスクリプト</a>を参照してください。 CSP 2.0 では、これはインラインスクリプトにのみ適用されます。 CSP 3.0 では <code>script-src</code> で外部スクリプトが指定された場合にも利用できます。</dd>
</dl>
</div>

<div id="strict-dynamic">
<dl>
 <dt>'strict-dynamic'</dt>
 <dd><code>strict-dynamic</code> ソース表現は、ノンスやハッシュを付加して、それらがルートスクリプトに読み込まれるすべてのスクリプトに伝搬することで、マークアップ内のスクリプトに明示的な信用を指定します。それと同時に、<code>'self'</code> や <code>'unsafe-inline'</code> といった、あらゆる許可リストやソース表現が無視されます。<a href="/ja/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#strict-dynamic">script-src</a> の例を見てください。</dd>
</dl>
</div>

<div id="report-sample">
<dl>
 <dt>'report-sample'</dt>
 <dd>違反レポートに入れる違反コードのサンプルを要求します。</dd>
</dl>
</div>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="No_inheritance_with_default-src" name="No_inheritance_with_default-src">default-src で継承されない</h3>

<p>他のディレクティブが指定されている場合、<code>default-src</code> は影響しません。</p>

<pre class="brush: bash notranslate">Content-Security-Policy: default-src 'self'; script-src https://example.com</pre>

<p>は、下記のものと同じです。</p>

<pre class="brush: bash notranslate">Content-Security-Policy: connect-src 'self';
                         font-src 'self';
                         frame-src 'self';
                         img-src 'self';
                         manifest-src 'self';
                         media-src 'self';
                         object-src 'self';
                         script-src https://example.com;
                         style-src 'self';
                         worker-src 'self'</pre>

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
   <td>{{specName("CSP 3.0", "#directive-default-src", "default-src")}}</td>
   <td>{{Spec2('CSP 3.0')}}</td>
   <td>既定として <code>frame-src</code>, <code>manifest-src</code>, <code>worker-src</code> を追加。</td>
  </tr>
  <tr>
   <td>{{specName("CSP 1.1", "#directive-default-src", "default-src")}}</td>
   <td>{{Spec2('CSP 1.1')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("http.headers.csp.Content-Security-Policy.default-src")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTTPHeader("Content-Security-Policy")}}</li>
 <li>CSP directives (<a href="https://www.w3.org/TR/CSP/#csp-directives">https://www.w3.org/TR/CSP/#csp-directives</a>):
  <ul>
   <li>{{Glossary("Fetch directive")}}</li>
   <li>{{Glossary("Document directive")}}</li>
   <li>{{Glossary("Navigation directive")}}</li>
   <li>{{Glossary("Reporting directive")}}</li>
   <li><code><a href="/ja/docs/Web/HTTP/Headers/Content-Security-Policy/upgrade-insecure-requests">upgrade-insecure-requests</a></code></li>
   <li><code><a href="/ja/docs/Web/HTTP/Headers/Content-Security-Policy/block-all-mixed-content">block-all-mixed-content</a></code></li>
   <li><code><a href="/ja/docs/Web/HTTP/Headers/Content-Security-Policy/require-sri-for">require-sri-for</a></code> {{experimental_inline}}</li>
  </ul>
 </li>
</ul>
