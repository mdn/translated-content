---
title: サブリソース完全性
slug: Web/Security/Subresource_Integrity
tags:
  - HTML
  - HTTP
  - Intro
  - Networking
  - セキュリティ
translation_of: Web/Security/Subresource_Integrity
---
<p><span class="seoSummary"><ruby><strong>サブリソース完全性</strong><rp> (</rp><rt>Subresource Integrity</rt><rp>)</rp></ruby> (SRI) は、 ({{Glossary("CDN")}} などから) 取得したリソースが意図せず改ざんされていないかをブラウザーが検証するセキュリティ機能です。 SRI を利用する際には、取得したリソースのハッシュ値と一致すべきハッシュ値を指定します。</span></p>

<div class="note">
<p><strong>メモ</strong>: サブリソース完全性の検証において、サブリソースが埋め込まれる文書のオリジン以外から提供されたリソースについては、ブラウザーは<a href="/ja/docs/Web/HTTP/CORS">オリジン間リソース共有 (CORS)</a> を使用してリソースに追加のチェックを行い、オリジンがリソースがリクエストしたオリジンに共有されることを許可しているかどうかを確認します。</p>
</div>

<h2 id="How_Subresource_Integrity_helps" name="How_Subresource_Integrity_helps">サブリソース完全性の必要性</h2>

<p>複数のサイトで使われるスクリプトやスタイルシートなどのファイルを{{Glossary("CDN", "コンテンツ配信ネットワーク (CDN)")}} にホストすることにより、読み込みに必要な時間や通信帯域を減らすことができます。しかし、 CDN はリスクにもなり得ます。仮に攻撃者が CDN を掌握できれば、攻撃者は CDN 上のファイルに悪意あるコンテンツを挿入することにより (あるいは完全に置き換えることにより)、その CDN からファイルを読み込む全てのサイトを攻撃対象とすることができます。</p>

<p>サブリソース完全性は、ウェブアプリケーションやウェブ文書が (CDN など任意の場所から) 取得したファイルについて、第三者によってファイルの中に別のものが挿入されていないか、そして、それらのファイルに対してその他の改ざんが行われていないかを検証することにより、先程のような攻撃のリスクを軽減します。</p>

<h2 id="Using_Subresource_Integrity" name="Using_Subresource_Integrity">サブリソース完全性の使い方</h2>

<p>サブリソース完全性の機能は、ブラウザーが取得するリソース (ファイル) のハッシュ値を base64 エンコードし、その値を {{HTMLElement("script")}} や {{HTMLElement("link")}} 要素の <code>integrity</code> 属性に指定することによって使用します。</p>

<p><code>integrity</code> 属性の値は、ハッシュアルゴリズムを示す接頭辞 (現在利用できる接頭辞は <code>sha256</code>, <code>sha384</code>, <code>sha512</code> です) と、 base64 でエンコードされたハッシュ値をダッシュで繋いだ文字列です。</p>

<div class="note">
<p><strong>メモ</strong>: <code>integrity</code> 属性値には、ホワイトスペースで区切って複数のハッシュ値を含めることができます。リソースはこれらのハッシュ値のいずれかに一致した場合に読み込まれます。</p>
</div>

<p>base64 でエンコードされた sha384 ハッシュを含む <code>integrity</code> 文字列の例</p>

<pre class="notranslate">sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC
</pre>

<p>従って、 <code>oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC</code> がハッシュ値の部分であり、接頭辞の <code>sha384</code> が sha384 ハッシュであることを示します。</p>

<div class="note">
<p><strong>メモ</strong>: 厳密に言うと、 <code>integrity</code> 属性値におけるハッシュ値の部分は、あるハッシュ関数にデータを入力 (スクリプトやスタイルシートファイル) して生成された<strong>暗号学的ダイジェスト値</strong>です。しかし、一般的には短く「ハッシュ」と言えば<em>暗号学的ダイジェスト値</em>を意味するので、本記事でもそのように呼んでいます。</p>
</div>

<h3 id="Tools_for_generating_SRI_hashes" name="Tools_for_generating_SRI_hashes">SRI ハッシュを生成するツール</h3>

<p>次の <strong>openssl</strong> コマンドにより SRI ハッシュを生成することができます。</p>

<pre class="brush: bash notranslate">cat <strong>FILENAME.js</strong> | openssl dgst -sha384 -binary | openssl base64 -A</pre>

<p>または、次のような <strong>shasum</strong> コマンドの呼び出しでも実現できます。</p>

<pre class="brush: bash notranslate">shasum -b -a 384 <strong>FILENAME.js</strong> | awk '{ print $1 }' | xxd -r -p | base64
</pre>

<div class="note">
<p><strong>メモ</strong>:</p>

<ul>
 <li>パイプで <code>xxd</code> を通る過程で、 <code>shasum</code> からの出力を取り、バイナリへ変換します。</li>
 <li>パイプで <code>awk</code> を通る過程は、 <code>shasum</code> がハッシュ化されたファイル名を <code>xxd</code> へ渡すために必要です。ファイル名が有効な16進数の文字を持っている場合に有害な影響を与える可能性があるからです。 <code>xxd</code> はそれを復号して、 <code>base64</code> に渡す可能性があるからです。</li>
</ul>
</div>

<p>また、<strong>SRI Hash Generator</strong> (<a href="https://www.srihash.org/">https://www.srihash.org/</a>) によりオンラインで SRI ハッシュを生成することもできます。</p>

<h3 id="Cross-Origin_Resource_Sharing_and_Subresource_Integrity" name="Cross-Origin_Resource_Sharing_and_Subresource_Integrity">オリジン間リソース共有とサブリソース完全性</h3>

<p>サブリソース完全性の検証において、サブリソースが埋め込まれる文書のオリジン以外から提供されたリソースについては、ブラウザーは<a href="/ja/docs/Web/HTTP/CORS">オリジン間リソース共有 (CORS)</a> を使用してリソースに追加のチェックを行い、オリジンがリソースがリクエストしたオリジンに共有されることを許可しているかどうかを確認します。従って、次の例のように、リソースが要求されたオリジンに共有できるよう {{httpheader("Access-Control-Allow-Origin")}} ヘッダーを付けて提供する必要があります。</p>

<pre class="notranslate">Access-Control-Allow-Origin: *</pre>

<h2 id="Examples" name="Examples">例</h2>

<p>以下の例では、 <code id="sriSnippet">oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC</code> が特定のスクリプト <code>example-framework.js</code> の期待される SHA-384 ハッシュ値としてすでに知られており、スクリプトのコピーが <code>https://example.com/example-framework.js</code> にホストされているものとします。</p>

<h3 id="Subresource_Integrity_with_the_&lt;script>_element" name="Subresource_Integrity_with_the_&lt;script>_element">&lt;script&gt; 要素のサブリソース完全性</h3>

<p>次の {{HTMLElement("script")}} 要素により、ブラウザーが <code>https://example.com/example-framework.js</code> を実行する前に、まず想定されるハッシュ値とスクリプトのハッシュ値が一致することをブラウザーに確認させることができます。</p>

<pre class="brush: html notranslate">&lt;script src="https://example.com/example-framework.js"
        integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
        crossorigin="anonymous"&gt;&lt;/script&gt;</pre>

<div class="note">
<p><strong>メモ</strong>: <strong>crossorigin</strong> 属性については <a href="/ja/docs/Web/HTML/CORS_settings_attributes">CORS 設定属性</a>を参照してください。</p>
</div>

<h2 id="How_browsers_handle_Subresource_Integrity" name="How_browsers_handle_Subresource_Integrity">サブリソース完全性のブラウザーでの扱い</h2>

<p>ブラウザは SRI を以下のように処理します。</p>

<p class="note"><strong>メモ</strong>: サブリソース完全性の検証において、サブリソースが埋め込まれる文書のオリジン以外から提供されたリソースについては、ブラウザーは<a href="/ja/docs/Web/HTTP/CORS">オリジン間リソース共有 (CORS)</a> を使用してリソースに追加のチェックを行い、オリジンがリソースがリクエストしたオリジンに共有されることを許可しているかどうかを確認します。</p>

<ol>
 <li>
  <p>ブラウザは <code>integrity</code> 属性を持った {{HTMLElement("script")}} または {{HTMLElement("link")}} 属性を見つけると、スクリプトや {{HTMLElement("link")}} 属性で指定された任意のスタイルシートを適用する前に、<code>integrity</code> 属性のハッシュ値とスクリプトやスタイルシートのハッシュ値を比較しなくてはなりません。</p>
 </li>
 <li>スクリプトやスタイルシートが対応する <code>integrity</code> 属性値と一致しない場合、ブラウザーはスクリプトを実行したりスタイルシートを適用してはいけません。その代わりに、スクリプトやスタイルシートの取得が失敗したというネットワークエラーを返さなくてはなりません。</li>
</ol>

<h2 id="Specifications" name="Specifications">仕様</h2>

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
   <td>{{SpecName('Subresource Integrity')}}</td>
   <td>{{Spec2('Subresource Integrity')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('Fetch')}}</td>
   <td>{{Spec2('Fetch')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザの互換性</h2>

<h3 id="&lt;script_integrity>">&lt;script integrity&gt;</h3>

<p>{{Compat("html.elements.script.integrity")}}</p>

<h3 id="CSP_require-sri-for">CSP: require-sri-for</h3>

<p>{{Compat("http.headers.csp.require-sri-for")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>Content Security Policy</li>
 <li>{{httpheader("Content-Security-Policy")}}</li>
 <li><a href="https://frederik-braun.com/using-subresource-integrity.html" id="page-title">A CDN that can not XSS you: Using Subresource Integrity</a></li>
 <li><a href="https://w3c-test.org/subresource-integrity/subresource-integrity.html" id="w3c-test">Subresource Integrity test from W3C</a></li>
 <li><a href="https://www.srihash.org/">SRI Hash Generator</a></li>
</ul>

<p>{{QuickLinksWithSubpages("/ja/docs/Web/Security")}}</p>
