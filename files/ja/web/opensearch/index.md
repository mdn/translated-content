---
title: OpenSearch 記述形式
slug: Web/OpenSearch
tags:
  - Add-ons
  - Guide
  - OpenSearch
  - Search
  - Search plugins
  - Web
  - Web Standards
translation_of: Web/OpenSearch
original_slug: Creating_OpenSearch_plugins_for_Firefox
---
<p>{{AddonSidebar}}</p>

<p><span class="seoSummary"><strong><a href="https://github.com/dewitt/opensearch" rel="external">OpenSearch 記述形式</a></strong>は、ウェブサイトが自分自身のために検索エンジンを記述し、ブラウザーやその他のクライアントアプリケーションがその検索エンジンを使用できるようにするものです。 OpenSearch は、(少なくとも) Firefox、Edge、Internet Explorer、Safari、Chrome が対応しています。(他のブラウザーのドキュメントへのリンクは<a href="#reference_material">参考資料</a>をご覧ください。)</p>

<p>また、Firefox では、検索候補や <code>&lt;SearchForm&gt;</code> 要素など、OpenSearch 規格にない追加機能にも対応しています。この記事では、これらの Firefox の追加機能に対応した OpenSearch 互換の検索プラグインの作成に焦点を当てます。</p>

<p>OpenSearch 記述ファイルは、<a href="#autodiscovery_of_search_plugins">検索プラグインの自動検出</a>で説明されているように通知することができ、<a href="/ja/docs/Web/OpenSearch">ウェブページからの検索エンジンの追加</a>で説明されているようにプログラムでインストールすることができます。</p>

<h2 id="OpenSearch_description_file">OpenSearch 記述ファイル</h2>

<p>検索エンジンを記述する XML ファイルはとてもシンプルで、以下の基本的なテンプレートに従います。書いている検索エンジンに応じて、 <em>[角括弧]</em> で囲まれた部分をカスタマイズする必要があります。</p>

<pre class="brush: xml">&lt;OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/"
                       xmlns:moz="http://www.mozilla.org/2006/browser/search/"&gt;
  &lt;ShortName&gt;<mark><strong>[SNK]</strong></mark>&lt;/ShortName&gt;
  &lt;Description&gt;<mark><strong>[Search engine full name and summary]</strong></mark>&lt;/Description&gt;
  &lt;InputEncoding&gt;<mark><strong>[UTF-8]</strong></mark>&lt;/InputEncoding&gt;
  &lt;Image width="16" height="16" type="image/x-icon"&gt;<mark><strong>[https://example.com/favicon.ico]</strong></mark>&lt;/Image&gt;
  &lt;Url type="text/html" template="<mark><strong>[searchURL]</strong></mark>"&gt;
    &lt;Param name="<mark><strong>[key name]</strong></mark>" value="{searchTerms}"/&gt;
    &lt;!-- other Params if you need them… --&gt;
    &lt;Param name="<mark><strong>[other key name]</strong></mark>" value="<mark><strong>[parameter value]</strong></mark>"/&gt;
  &lt;/Url&gt;
  &lt;Url type="application/x-suggestions+json" template="<mark><strong>[suggestionURL]</strong></mark>"/&gt;
  &lt;moz:SearchForm&gt;<mark><strong>[https://example.com/search]</strong></mark>&lt;/moz:SearchForm&gt;
&lt;/OpenSearchDescription&gt;</pre>

<dl>
 <dt>ShortName</dt>
 <dd>検索エンジンの短い名前です。 HTML やその他のマークアップを使用しない、 <string>16 文字以下</string>のプレーンテキストでなければなりません。</dd>
 <dt>Description</dt>
 <dd>検索エンジンの簡単な説明です。 <strong>1024 文字以下</strong>のプレーンテキストで、 HTML やその他のマークアップは使用しないでください。</dd>
 <dt>InputEncoding</dt>
  <dd>検索エンジンへ送信する入力欄に使用する<a href="/ja/docs/Glossary/character_encoding">文字エンコーディング</a>です。</dd>
 <dt>Image</dt>
 <dd>
 <p>検索エンジンのアイコンの URI です。可能であれば、 16×16 の画像を <code>image/x-icon</code> 形式で (<code>/favicon.ico</code> など)、 および 64×64 の画像を <code>image/jpeg</code> または <code>image/png</code> 形式で含めてください。</p>

 <p>この URI には <a href="/ja/docs/Web/HTTP/Basics_of_HTTP/Data_URIs"><code>data:</code> URI スキーム</a>を使用することもできます。 (<code>data:</code> URI はアイコンファイルから <a class="external" href="http://software.hixie.ch/utilities/cgi/data/data">The <code>data:</code> URI kitchen</a> で生成することができます。)</p>

 <pre class="brush: xml">&lt;Image height="16" width="16" type="image/x-icon"&gt;https://example.com/favicon.ico&lt;/Image&gt;
  &lt;!-- or --&gt;
&lt;Image height="16" width="16"&gt;data:image/x-icon;base64,AAABAAEAEBAAA … DAAA=&lt;/Image&gt;
</pre>

 <p>Firefox はアイコンを <a href="https://ja.wikipedia.org/wiki/Base64">base64</a> <code>data:</code> URI としてキャッシュします (検索プラグインは<a href="/ja/docs/Mozilla/Profile_Manager">プロファイル</a>の <code>searchplugins/</code> フォルダーに格納されます)。これを行う際に、 <code>http:</code> および <code>https:</code> URL は <code>data:</code> URI に変換されます。</p>

 <div class="note"><strong>注:</strong> リモートからアイコンを読み込む際 (すなわち、  <code>data:</code> URI とは対照的に <code>https://</code> URI からの場合)、 Firefox は<strong>10 KB</strong>より大きなアイコンを拒否します。</div>

 <p><img alt="Firefox の検索ボックスに表示される Google の検索候補" class="internal" src="searchsuggestionsample.png"></p>
 </dd>
 <dt>Url</dt>
 <dd>検索に使う 1 つまたは複数の URL を記述します。 <code>template</code> 属性は検索クエリーのベース URL を指定します。</dd>
 <dd>Firefox は 3 種類の URL に対応しています。</dd>
 <ul>
  <li><code>type="text/html"</code> は実際の検索結果そのものの URL を指定します。</li>
  <li><code>type="application/x-suggestions+json"</code> は検索候補を読み取るための URL を指定します。 Firefox 63 以降では、 <code>type="application/json"</code> をこの別名として受け付けます。</li>
  <li><code>type="application/x-moz-keywordsearch"</code> はロケーションバーに入力されるキーワード検索の際に使用する URL を指定します。これは Firefox のみが対応しています。</li>
 </ul>

 <p>これらの種類の URL では、ユーザーが検索バーやロケーションバーに入力した検索語に置き換えらえる <code>{searchTerms}</code> を使うことができます。対応している他の動的な検索引数は <a class="external" href="http://www.opensearch.org/Specifications/OpenSearch/1.1/Draft_3#OpenSearch_1.1_parameters">OpenSearch 1.1 引数</a>に記述されています。</p>

 <p>検索候補については、 <code>application/x-suggestions+json</code> URL テンプレートを使用して候補リストを <a href="/ja/docs/Glossary/JSON">JSON</a> 形式で読み取ります。サーバー上で検索候補の対応を実装する方法の詳細は <a href="/ja/docs/Archive/Add-ons/Supporting_search_suggestions_in_search_plugins">検索プラグインでの検索候補の対応</a>を参照してください。</p>
 </dd>
 <dt>Param</dt>
 <dd>検索クエリと一緒に渡さなければならない引数を、キー／値のペアで指定します。値を指定する際に、 <code>{searchTerms}</code> を使用すると、ユーザーが検索バーに入力した検索語を挿入することができます。</dd>
 <dt>moz:SearchForm</dt>
<dd>プラグインのサイトの検索ページを開くための URL。これは Firefox にユーザーが直接ウェブサイトを訪れる方法を提供します。</dd>
 <dd>
 <div class="note"><strong>注意:</strong> この要素は Firefox 特有で OpenSearch 仕様の一部ではないため、この要素に対応していない他のユーザーエージェントが安全に無視できるようにするために、上の例では "<code>moz:</code>" XML 名前空間接頭辞を使っています。</div>
 </dd>
</dl>

<h2 id="Autodiscovery_of_search_plugins">検索プラグインの自動検出</h2>

<p>検索プラグインを提供しているウェブサイトは、 Firefox ユーザがプラグインを簡単にダウンロードしてインストールできるように通知することができます。</p>

<p>自動検出に対応するには、それぞれのプラグインの <code>&lt;link&gt;</code> 要素をウェブページの <code>&lt;head&gt;</code> セクションにします。</p>

<pre class="brush: html; highlight[3-4]">&lt;link rel="search"
      type="application/opensearchdescription+xml"
      title="<mark><strong>searchTitle</strong></mark>"
      href="<mark><strong>pluginURL</strong></mark>"&gt;
</pre>

<p>太字の項目を以下の説明のように置き換えてください。</p>

<dl>
 <dt>searchTitle</dt>
 <dd>"MDC を検索" や 'Yahoo! 検索" のような実行する検索の名前です。この値は、プラグインファイルの <code>&lt;ShortName&gt;</code> と一致させる必要があります。</dd>
 <dt>pluginURL</dt>
 <dd>ブラウザーがダウンロードできる XML 検索プラグインの URL です。</dd>
</dl>

<p>もしサイトが複数の検索プラグインを提供しているなら、すべてを自動検出させることができます。例を示します。</p>

<pre class="brush: html">&lt;link rel="search" type="application/opensearchdescription+xml"
      title="MySite: 著者" href="http://example.com/mysiteauthor.xml"&gt;

&lt;link rel="search" type="application/opensearchdescription+xml"
      title="MySite: タイトル" href="http://example.com/mysitetitle.xml"&gt;
</pre>

<p>この方法で、著者とタイトルによる検索を行うプラグインをサイトで提供することができます。</p>

<div class="note">
<p>Firefox では、検索プラグインで提供されたアイコンがある場合は、検索ボックスのアイコンが変化して示します。 (画像を参照。緑のプラスの記号です。) そのため、ユーザーのインターフェイスで検索ボックスが非表示になっている場合、これを示すことは<em>ありません</em>。<em>一般に、この動作はブラウザーによって異なります</em>。</p>
<img alt="Firefox での検索プラグインの見え方" src="new.png"></div>

<h2 id="Supporting_automatic_updates_for_OpenSearch_plugins">OpenSearch プラグインの自動更新の対応</h2>

<p>OpenSearch プラグインは自動的に更新することができます。 <code>Url</code> 拡張要素を <code>type="application/opensearchdescription+xml"</code> および <code>rel="self"</code> を付けて設置してください。 <code>template</code> 属性には、自動的に更新する OpenSearch 文書の URL を設定してください。</p>

<p>例:</p>

<pre class="brush: xml">&lt;Url type="application/opensearchdescription+xml"
     rel="self"
     template="https://example.com/mysearchdescription.xml" /&gt;
</pre>

<div class="note"><strong>注:</strong> 現時点で、 <a class="external" href="https://addons.mozilla.org">addons.mozilla.org</a> (AMO) は OpenSearch プラグインの自動更新に対応していません。自分の検索プラグインを AMO に登録したい場合は、送信前に自動更新機能を削除してください。</div>

<h2 id="Troubleshooting_Tips">トラブルシューティングのヒント</h2>

<p>検索プラグインの XML に問題があると、検出されたプラグインをに追加する際にエラーが発生します。エラーメッセージが参考にならない場合、以下のヒントが問題を探す手助けになる可能性があります。</p>

<ul>
 <li>サーバーは OpenSearch プラグインを、 <code>Content-Type: application/opensearchdescription+xml</code> を使用して提供するべきです。</li>
 <li>検索プラグインの XML が整形式であることを確認してください。ファイルを直接 Firefox に読み込むことでチェックすることができます。アンパーサンド (&amp;) を <code>template</code> の URL の中では <code>&amp;amp;</code> にエスケープしなければなりません。タグは最後にスラッシュをまたは対応する終了タグで閉じる必要があります。</li>
 <li><code>xmlns</code> 属性は重要です。 — これがないと、 "Firefox could not download the search plugin" というエラーメッセージが出る可能性があります。</li>
 <li><code>text/html</code> の URL を含める<strong>必要があります</strong>。 Atom または <a href="/ja/docs/Glossary/RSS">RSS</a> の URL 型のみを含む検索プラグインは (有効なものですが、 Firefox は対応していません)、 "could not download the search plugin" エラーを引き起こします。</li>
 <li>リモートで取得されるファビコンは 10KB 以上でなければなりません ({{ Bug(361923) }} を参照)。</li>
</ul>

<p>さらに、検索プラグインサービスはプラグイン開発者に役立つであろうログの仕組みを提供します。 <code>about:config</code> を使い '<code>browser.search.log</code>' を <code>true</code> に設定してください。検索プラグインが追加されるとログ情報が Firefox の<a href="/ja/docs/Archive/Mozilla/Error_console">エラーコンソール</a> (ツール ➤ エラーコンソール)に表示されます。</p>

<h2 id="Reference_Material">参考資料</h2>

<ul>
 <li><a href="https://github.com/dewitt/opensearch">OpenSearch ドキュメント</a></li>
 <li><a href="https://developer.apple.com/library/archive/releasenotes/General/WhatsNewInSafari/Articles/Safari_8_0.html">Safari 8.0 リリースノート: Quick Website Search</a></li>
 <li><a href="https://docs.microsoft.com/en-us/microsoft-edge/dev-guide/browser-features/search-provider-discovery">Microsoft Edge 開発ガイド: Search provider discovery</a></li>
 <li><a href="https://www.chromium.org/tab-to-search">The Chromium Projects: Tab to Search</a></li>
 <li>imdb.com には <a class="external" href="https://m.media-amazon.com/images/G/01/imdb/images/imdbsearch-3349468880._CB470047351_.xml">動作する <code>osd.xml</code></a> があります</li>
 <li><a class="external" href="http://www.7is7.com/software/firefox/opensearch.html">OpenSearch Plugin Generator</a></li>
 <li><a class="external" href="http://ready.to/search/jp/">Ready2Search</a> - OpenSearch プラグインの作成 (日本語可, GETメソッドのみ)。 <a class="external" href="http://ready.to/search/make/en_make_plugin.htm">Customized Search through Ready2Search</a></li>
</ul>
