---
title: データ URL
slug: Web/HTTP/Basics_of_HTTP/Data_URLs
tags:
  - Base64
  - Guide
  - HTTP
  - Intermediate
  - URL
translation_of: Web/HTTP/Basics_of_HTTP/Data_URIs
original_slug: Web/HTTP/Basics_of_HTTP/Data_URIs
---
<div>{{HTTPSidebar}}</div>

<p><strong>データ URL</strong> は <code>data:</code> スキームが先頭についた URL で、小さなファイルをインラインで文書に埋め込むことができます。以前、 WHATWG で取り下げられるまでは "data URIs" と呼ばれていました。</p>

<div class="note">
<p><strong>注</strong>: 最近のブラウザーでは、データ URL はナビゲーションを担当する設定オブジェクトの起源を継承するのではなく、一意の不透明な起点として扱われます。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<p>データ URL は接頭辞 (<code>data:</code>)、データの種類を示す <a href="/ja/docs/Web/HTTP/Basics_of_HTTP/MIME_types">MIME タイプ</a>、テキストではないデータである場合のオプションである <code>base64</code> トークン、データ自体の 4 つの部品で構成されます。</p>

<pre class="syntaxbox notranslate">data:[&lt;mediatype&gt;][;base64],&lt;data&gt;
</pre>

<p><code>mediatype</code> は <a href="/ja/docs/Web/HTTP/Basics_of_HTTP/MIME_types">MIME タイプ</a>で, 例えば <code>'image/jpeg'</code> で JPEG 画像を表します。省略時の既定値は <code>text/plain;charset=US-ASCII</code> です。</p>

<p>データが文字ならば、そのまま埋め込めます (埋め込む文書タイプに応じて、適切な実体参照やエスケープを行なってください)。それ以外では <code>base64</code> を指定し、 base64 エンコードしたバイナリデータを埋め込みます。 MIME タイプについての詳しい情報は<a href="/ja/docs/Web/HTTP/Basics_of_HTTP/MIME_types">こちら</a>や<a href="/ja/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types">こちら</a>にあります。</p>

<p>例:</p>

<dl>
 <dt><code>data:,Hello%2C%20World!</code></dt>
 <dd>平易な text/plain データです。引用符や空白には<a href="/ja/docs/Glossary/percent-encoding">パーセントエンコーディング</a> (URL エンコーディング) を使用します。また、 CSV データ (MIME タイプは "text/csv") もスプレッドシートの行を区切るための改行文字を保存するためにパーセントエンコーディングが必要です。</dd>
 <dt><code>data:text/plain;base64,SGVsbG8sIFdvcmxkIQ==</code></dt>
 <dd>同じ内容の base64 エンコード版</dd>
 <dt><code>data:text/html,%3Ch1%3EHello%2C%20World!%3C%2Fh1%3E</code></dt>
 <dd><code>&lt;h1&gt;Hello, World!&lt;/h1&gt;</code> という HTML 文書</dd>
 <dt><code>data:text/html,&lt;script&gt;alert('hi');&lt;/script&gt;</code></dt>
 <dd>JavaScript のアラートを実行する HTML 文書。終了タグが必要ですので注意してください。</dd>
</dl>

<h2 id="Encoding_data_into_base64_format" name="Encoding_data_into_base64_format">データの base64 形式へのエンコード</h2>

<p>Base64 はバイナリからテキストへのエンコード方法の集まりで、バイナリデータを64進数表現に変換することで ASCII 文字列形式にするものです。 ASCII 文字のみから成るため、 Base64 の文字列は一般に URL でも安全ですので、データ URL のデータのエンコードに利用することができます。</p>

<h3 id="Encoding_in_Javascript" name="Encoding_in_Javascript">Javascript でのエンコード</h3>

<p>Web API には、 Base64 をエンコードまたはデコードするためのネイティブメソッド、 <a href="/ja/docs/Web/API/WindowBase64/Base64_encoding_and_decoding">Base64 encoding and decoding</a> があります。</p>

<h3 id="Encoding_on_a_Unix_system" name="Encoding_on_a_Unix_system">Unix システムでのエンコード</h3>

<p>Linux や Mac OS X システムでのファイルまたは文字列の Base64 エンコードは、コマンドラインの <code>base64</code> (または、他にも <code>uuencode</code> ユーティリティの <code>-m</code> オプションつき) を使用して実現できます。</p>

<pre class="brush: bash notranslate">echo -n hello|base64
# コンソールへの出力: aGVsbG8=

echo -n hello&gt;a.txt
base64 a.txt
# コンソールへの出力: aGVsbG8=

base64 a.txt&gt;b.txt
# b.txt ファイルへの出力: aGVsbG8=
</pre>

<h3 id="Encoding_on_Microsoft_Windows" name="Encoding_on_Microsoft_Windows">Microsoft Windows でのエンコード</h3>

<p>Windows では、 <a href="https://docs.microsoft.com/ja-jp/dotnet/api/system.convert.tobase64string?view=net-5.0">Convert.ToBase64String</a> を PowerShell で使用することで Base64 エンコードを行うことができます。</p>

<pre class="syntaxbox notranslate">[convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes("hello"))
# outputs to console: aGVsbG8=
</pre>

<p>他にも、 GNU/Linux シェル (<a href="https://ja.wikipedia.org/wiki/Windows_Subsystem_for_Linux">WSL</a> など) が <code>base64</code> ユーティリティを提供しています。</p>

<pre class="syntaxbox notranslate">bash$ echo -n hello | base64
# outputs to console: aGVsbG8=
</pre>

<h2 id="Common_problems" name="Common_problems">よくある問題</h2>

<p>この章では <code>data</code> の URL を作ったり使ったりするときに、よく起こる問題について述べます。</p>

<pre class="notranslate">data:text/html,lots of text...&lt;p&gt;&lt;a name%3D"bottom"&gt;bottom&lt;/a&gt;?arg=val
</pre>

<p>これは次の内容の HTML リソースを表します。</p>

<pre class="notranslate">lots of text...&lt;p&gt;&lt;a name="bottom"&gt;bottom&lt;/a&gt;?arg=val
</pre>

<dl>
 <dt>構文</dt>
 <dd><code>data</code> URL の書式は非常に単純ですが、"データ" 部分の前にカンマを置くのを忘れがちです。忘れるとデータが正しく base64 形式にエンコードされません。</dd>
 <dt>HTML におけるフォーマット</dt>
 <dd><code>data</code> はファイル内でファイルを提供しますが、外側の文書に比べて幅がとても広くなる可能性があります。 URL としては、 <code>data</code> はホワイトスペース (改行、タブ、空白) で体裁を整えることができるはずですが、 <a class="external" href="http://bugzilla.mozilla.org/show_bug.cgi?id=73026#c12">base64 エンコードをすると起こる問題</a> があります。</dd>
 <dt>長さの制限</dt>
 <dd>Firefox は基本的に長さ制限のない <code>data</code> URL に対応していますが、ブラウザーは特定の最大長のデータに対応する必要はありません。たとえば、 Opera 11 ブラウザーでは URL が65535文字に制限されており、 <code>data</code> URL は65529文字に制限されています (65529文字は、 MIME タイプを指定せずにプレーンの <code>data:</code> を使用した場合、ソースではなくエンコードされたデータの長さです)。</dd>
 <dt>エラー処理の欠如</dt>
 <dd>メディア内の不正な引数や、 <code>'base64'</code> の定義内の打ち間違いは無視され、何もエラーは出ません。</dd>
 <dt>クエリ文字列のサポートの欠如、など</dt>
 <dd>
 <p>データ URL のデータ部分は不透明 (opaque) なので、データ URL と一緒にクエリ文字列 (<code>&lt;url&gt;?parameter-data</code> という構文で表されるページ固有のパラメータ) を使うと、データ URL が表現するデータに単にクエリ文字列が含まれたものになります。</p>
 </dd>
 <dt>セキュリティの課題</dt>
 <dd>多数のセキュリティ問題 (フィッシングなど) がデータ URL に関連付けられており、ブラウザーの最上位でそれらに移動しています。このような問題を軽減するために、Firefox 59+ (リリース版、Nightly/Beta は58以降) では <code>data://</code> URL へのトップレベルのナビゲーションがブロックされており、他のブラウザがすぐに対応することを期待しています。詳細については、<a href="https://blog.mozilla.org/security/2017/11/27/blocking-top-level-navigations-data-urls-firefox-58/">Firefox 58 におけるデータ URL へのトップレベルナビゲーションのブロック</a>を参照してください。</dd>
</dl>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">題名</th>
  </tr>
  <tr>
   <td>{{RFC("2397")}}</td>
   <td>The "data" URL scheme</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{compat("http.data-url")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/WindowBase64/Base64_encoding_and_decoding">Base64 のエンコードとデコード</a></li>
 <li><a href="/ja/docs/Glossary/percent-encoding">パーセントエンコーディング</a></li>
 <li>{{domxref("WindowBase64.atob","atob()")}}</li>
 <li>{{domxref("WindowBase64.btoa","btoa()")}}</li>
 <li><a href="/ja/docs/Web/CSS/uri">CSS <code>url()</code></a></li>
 <li><a href="/ja/docs/Glossary/URI">URI</a></li>
</ul>
