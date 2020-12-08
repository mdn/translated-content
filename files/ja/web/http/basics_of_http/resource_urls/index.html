---
title: リソース URL
slug: Web/HTTP/Basics_of_HTTP/Resource_URLs
tags:
  - Guide
  - HTTP
  - Intermediate
  - Resource
translation_of: Web/HTTP/Basics_of_HTTP/Resource_URLs
---
<p>{{HTTPSidebar}}{{non-standard_header}}</p>

<p><code>resource:</code> というスキームのプレフィックスが付いたリソース URL は、Firefox と Firefox のブラウザ拡張機能によってリソースを内部的に読み込むために使用されますが、情報の一部はブラウザが接続するサイトでも利用できます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<p>リソースURLは、接頭辞 (<code>resource:</code>) とロードするリソースを指す URL の2つの部分で構成されます。</p>

<pre class="syntaxbox">resource://&lt;url&gt;</pre>

<p>例</p>

<pre>resource://gre/res/svg.css</pre>

<p>リソース URL ('-&gt;') に矢印がある場合は、最初のファイルが次のファイルにロードされたことを意味します。</p>

<pre>resource://&lt;File-loader&gt; -&gt; &lt;File-loaded&gt;</pre>

<p>より一般的な詳細については、<a href="/ja/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web">ウェブ上のリソースの識別</a>を参照してください。</p>

<p>この記事では、組み込みのリソースを指すために Firefox が内部的に使用するリソース URI に焦点を当てます。</p>

<h2 id="Threats" name="Threats">脅威</h2>

<p><code>resource:</code> URL によって共有される情報の一部はウェブサイトで利用できるため、ウェブページは内部スクリプトを実行し、デフォルトの設定を含む Firefox の内部リソースを調べることができます。</p>

<p>たとえば、<a href="https://www.browserleaks.com/firefox">Browserleaks のスクリプト</a>は、サイトで実行されている簡単なスクリプトでクエリが実行されたときに Firefox が表示する内容を強調表示します (コードは <a href="https://browserleaks.com/firefox#more">https://browserleaks.com/firefox#more</a> にあります)。</p>

<p>ファイル firefox.js は、プリファレンス名と値を pref() 関数に渡します。 例えば、</p>

<pre><a href="http://searchfox.org/mozilla-central/rev/48ea452803907f2575d81021e8678634e8067fc2/browser/app/profile/firefox.js#575">http://searchfox.org/mozilla-central/rev/48ea452803907f2575d81021e8678634e8067fc2/browser/app/profile/firefox.js#575</a></pre>

<p>ウェブサイトではこの <code>pref()</code> 関数をオーバーライドし、スクリプト<code>resource:///defaults/preferences/firefox.js</code> を使用して、 Firefox のデフォルト設定を簡単に収集できます。</p>

<p>さらに、プラットフォームやロケールなどのビルド構成によっては、ウェブサイトがこの情報を使用して個々のユーザーを識別できるという意味で、いくつかのデフォルト設定値が異なります。</p>

<h2 id="Solution" name="Solution">解決方法</h2>

<p>この問題を解決するために、 Mozilla は {{bug(863246)}} のリソースを読み込む動作を変更しました。これは <a href="/ja/docs/Mozilla/Firefox/Releases/57">Firefox 57 (Quantum)</a> で登場しました。</p>

<p>過去には、ウェブコンテンツは、 Firefox の内部リソースだけでなく、拡張機能の資産も含め、URIが必要とするあらゆるリソースにアクセスすることができました。 現在、この動作はデフォルトでは禁止されています。</p>

<p>しかし、特定の状況下で Firefox がウェブコンテンツにリソースを読み込む必要があります。 たとえば、ビュー・ソース・ページ (ビュー・ソースまたはビュー選択ソース) を開くと、 <code>resource:</code> URI を介して <code>viewsource.css</code> が必要です。ウェブコンテンツに公開する必要があるリソースは、 <code>resource://content-accessible/</code>という名前の新しい場所に移動されました。これは隔離されており、重要ではないリソースのみが含まれています。 このようにして、重要なリソースを公開し、ほとんどの脅威を排除できます。</p>

<div class="note">
<p><strong>メモ</strong>: ウェブと拡張機能の開発者がリソース URL をもう使用しようとしないことをお勧めします。彼らの使い方はうまくいきませんでした。そしてほとんどの使用法はこれ以上動作しません。</p>
</div>

<h2 id="Specifications" name="Specifications">仕様</h2>

<p>resource: はどの仕様書にも定義されていません。</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>resource: は Firefox のみ対応</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web">ウェブ上のリソースの識別</a></li>
 <li><a href="/ja/docs/Learn/Common_questions/What_is_a_URL">URL とは何か</a></li>
 <li><a href="https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml">IANA list of URI schemes</a> (<code>resource:</code> is <a href="https://www.iana.org/assignments/uri-schemes/prov/resource">covered here</a>)</li>
</ul>
