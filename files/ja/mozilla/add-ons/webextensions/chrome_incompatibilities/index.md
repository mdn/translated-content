---
title: Chrome との非互換性
slug: Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities
tags:
  - WebExtensions
  - 初心者向け
translation_of: Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities
---
<div>{{AddonSidebar}}</div>

<p>Webextension を用いた拡張機能は Chrome や Opera の拡張機能と互換性があるように設計されています。可能な限り、それぞれのブラウザー向けに書かれた拡張機能は最低限の変更で Firefox で実行できるように設計されています。</p>

<p>しかしながら、<span id="result_box" lang="ja"><span>Firefox は現在、Chrome と Opera でサポートされている機能と API の限られたセットのみをサポートしています。</span></span><span id="result_box" lang="ja"><span>もっと多く機能を追加しようと努めていますが、まだサポートされていない機能もたくさんあり、まったくサポートしないものもいくつかあります。</span></span></p>

<h2 id="JavaScript_APIs" name="JavaScript_APIs">JavaScript APIs</h2>

<h3 id="Callbacks_and_the_chrome.*_namespace" name="Callbacks_and_the_chrome.*_namespace">コールバックと chrome.* ネームスペース</h3>

<p>Chrome では、拡張機能は <code>chrome</code> ネームスペースを使って特権 JavaScript API にアクセスします:</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="punctuation token">chrome.</span>browserAction<span class="punctuation token">.</span><span class="function token">setIcon</span><span class="punctuation token">(</span><span class="punctuation token">{</span>path<span class="punctuation token">:</span> <span class="string token">"path/to/icon.png"</span><span class="punctuation token">}</span><span class="punctuation token">)</span><span class="punctuation token">;</span></code></pre>

<p>WebExtensions は同等の API に <code>browser</code> ネームスペースを使ってアクセスします:</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js">browser<span class="punctuation token">.</span>browserAction<span class="punctuation token">.</span><span class="function token">setIcon</span><span class="punctuation token">(</span><span class="punctuation token">{</span>path<span class="punctuation token">:</span> <span class="string token">"path/to/icon.png"</span><span class="punctuation token">}</span><span class="punctuation token">)</span><span class="punctuation token">;</span></code></pre>

<p><span id="result_box" lang="ja"><span>多くの API は非同期です。</span> <span>Chrome では、非同期 API はコールバックを使用して値を返し、</span></span>{{WebExtAPIRef("runtime.lastError")}}<span lang="ja"><span>がエラーを通知します:</span></span></p>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">function</span> <span class="function token">logCookie</span><span class="punctuation token">(</span>c<span class="punctuation token">)</span> <span class="punctuation token">{</span>
  <span class="keyword token">if</span> <span class="punctuation token">(</span>chrome<span class="punctuation token">.</span>extension<span class="punctuation token">.</span>lastError<span class="punctuation token">)</span> <span class="punctuation token">{</span>
    console<span class="punctuation token">.</span><span class="function token">error</span><span class="punctuation token">(</span>chrome<span class="punctuation token">.</span>extension<span class="punctuation token">.</span>lastError<span class="punctuation token">)</span><span class="punctuation token">;</span>
  <span class="punctuation token">}</span> <span class="keyword token">else</span> <span class="punctuation token">{</span>
    console<span class="punctuation token">.</span><span class="function token">log</span><span class="punctuation token">(</span>c<span class="punctuation token">)</span><span class="punctuation token">;</span>
  <span class="punctuation token">}</span>
<span class="punctuation token">}</span>

chrome<span class="punctuation token">.</span>cookies<span class="punctuation token">.</span><span class="keyword token">set</span><span class="punctuation token">(</span>
  <span class="punctuation token">{</span>url<span class="punctuation token">:</span> <span class="string token">"https://developer.mozilla.org/"</span><span class="punctuation token">}</span><span class="punctuation token">,</span>
  logCookie
<span class="punctuation token">)</span><span class="punctuation token">;</span></code></pre>

<p>同様の WebExtensions API では<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise"> promises</a> を利用します:</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">function</span> <span class="function token">logCookie</span><span class="punctuation token">(</span>c<span class="punctuation token">)</span> <span class="punctuation token">{</span>
  console<span class="punctuation token">.</span><span class="function token">log</span><span class="punctuation token">(</span>c<span class="punctuation token">)</span><span class="punctuation token">;</span>
<span class="punctuation token">}</span>

<span class="keyword token">function</span> <span class="function token">logError</span><span class="punctuation token">(</span>e<span class="punctuation token">)</span> <span class="punctuation token">{</span>
  console<span class="punctuation token">.</span><span class="function token">error</span><span class="punctuation token">(</span>e<span class="punctuation token">)</span><span class="punctuation token">;</span>
<span class="punctuation token">}</span>

<span class="keyword token">var</span> setCookie <span class="operator token">=</span> browser<span class="punctuation token">.</span>cookies<span class="punctuation token">.</span><span class="keyword token">set</span><span class="punctuation token">(</span>
  <span class="punctuation token">{</span>url<span class="punctuation token">:</span> <span class="string token">"https://developer.mozilla.org/"</span><span class="punctuation token">}</span>
<span class="punctuation token">)</span><span class="punctuation token">;</span>
setCookie<span class="punctuation token">.</span><span class="function token">then</span><span class="punctuation token">(</span>logCookie<span class="punctuation token">,</span> logError<span class="punctuation token">)</span><span class="punctuation token">;</span></code></pre>

<h3 id="Firefox_supports_both_chrome_and_browser_namespaces" name="Firefox_supports_both_chrome_and_browser_namespaces">Firefox は<code>chrome</code>と<code>browser</code>の両方のネームスペースをサポート</h3>

<p><span id="result_box" lang="ja"><span>移植の助けとして、WebExtensions の Firefox 実装は、コールバックを使用した<code>chrome</code>を</span></span><span lang="ja"><span>、promise を使用した<code>browser</code>と同様にサポートします。</span><span>これは、多くの Chrome 拡張機能が Firefox でそのまま動作することを意味します。</span><span>ただし、これは WebExtensions 標準の一部ではなく、準拠するすべてのブラウザーでサポートされているとは限りません。</span></span></p>

<p><span id="result_box" lang="ja"><span><code>browser</code> と promise を使って拡張機能を書いている場合、Chrome でも動かせるようにする polyfill を開発しました</span></span>: <a href="https://github.com/mozilla/webextension-polyfill">https://github.com/mozilla/webextension-polyfill</a>.</p>

<h3 id="Partially_supported_APIs" name="Partially_supported_APIs"><span class="short_text" id="result_box" lang="ja"><span>部分的にサポートされている API</span></span></h3>

<p><span id="result_box" lang="ja"><span><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs">ブラウザーの JavaScript API サポート</a>のページには、Firefox でサポートされているすべての API の互換性テーブルが含まれています。</span><span>特定の API アイテムのサポートに関する警告がある場合は、これらのテーブルにアスタリスク "*" が表示され、API アイテムのリファレンスページにその警告が説明されています。</span></span></p>

<p><span class="short_text" id="result_box" lang="ja"><span>このテーブルは、<a href="https://github.com/mdn/browser-compat-data">GitHub で JSON ファイル</a>として保存された互換性データから生成されます。</span></span></p>

<p><span class="short_text" id="result_box" lang="ja"><span>このセクションの残りの部分では、テーブルにまだ取り込まれていない互換性の問題について説明します。</span></span></p>

<h4 id="notifications" name="notifications"><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/notifications">notifications</a></h4>

<ul>
 <li><code>notifications.create()</code>の <code>"basic"</code> <code><a href="/ja/Add-ons/WebExtensions/API/notifications/TemplateType">type</a></code>を指定した場合の、 <code>iconUrl</code> は Firefox では任意です。Chrome では必須です。</li>
 <li>通知<span class="short_text" id="result_box" lang="ja"><span>はユーザーがクリックするとすぐに消去されます。</span></span> <span class="short_text" id="result_box" lang="ja"><span>これは Chrome では当てはまりません。</span></span></li>
 <li><code>notifications.create()</code><span id="result_box" lang="ja"><span> を複数回連続して呼び出すと、Firefox が通知を一切表示しなくなることがあります。</span></span> <code>chrome.notifications.create() </code><span lang="ja"><span><code>のコールバック</code>関数内に入るまでの時間は、後続のスクリプトが実行されるまで待つほど十分な時間ではありません。</span></span></li>
</ul>

<h4 id="proxy" name="proxy"><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/proxy">proxy</a></h4>

<ul>
 <li><span class="short_text" id="result_box" lang="ja"><span>この API は Chrome API の設計とはまったく異なります。</span></span> <span id="result_box" lang="ja"><span>Chrome の API を使用すると、</span></span>拡張機能<span lang="ja"><span>で PAC ファイルを登録できますが、明示的なプロキシルールを定義することもできます。</span></span><span id="result_box" lang="ja"><span>これは拡張 PAC ファイルを使用しても可能であるため、この API は PAC ファイルのアプローチのみをサポートしています。</span></span> <span id="result_box" lang="ja"><span>この API は Chrome の <code>proxy</code> API と互換性がないため、この API は <code>browser</code> の名前空間でのみ使用できます。</span></span></li>
</ul>

<h4 id="tabs" name="tabs"><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/tabs">tabs</a></h4>

<ul>
 <li>
  <p><span id="result_box" lang="ja"><span>Firefox では、</span></span><code>tabs.executeScript()</code><span lang="ja"><span> または </span></span><code>tabs.insertCSS()</code><span lang="ja"><span> に渡される相対URL は、現在のページ URL を基準として解決されます。</span></span> <span id="result_box" lang="ja"><span>Chrome では、これらの URL は</span></span>拡張機能<span lang="ja"><span>のベース URL を基準として解決されます。</span></span> <span class="short_text" id="result_box" lang="ja"><span>クロスブラウザーで動作するようにするには、拡張機能のルートから絶対URL として</span></span><span class="short_text" lang="ja"><span>次のように指定します</span></span>:</p>

  <pre class="line-numbers  language-html"><code class="language-html">/path/to/script.js</code></pre>
 </li>
</ul>

<ul>
 <li><span id="result_box" lang="ja"><span>Firefox では、</span></span><code>tabs.query()</code><span lang="ja"><span> を使用して URL でタブにクエリを行うには、</span></span><code>"tabs"</code><span lang="ja"><span>権限が必要です。</span></span> <span id="result_box" lang="ja"><span>Chrome では、</span></span><code>"tabs"</code><span lang="ja"><span>権限がなくても可能ですが、URL がホスト権限と一致するタブに制限されます。</span></span></li>
 <li><span id="result_box" lang="ja"><span>Firefox では、</span></span><code>beforeunload</code><span lang="ja"><span> イベントの後に </span></span><code>tabs.remove()</code><span lang="ja"><span> の promise が実行されますが、Chrome では コールバック が </span></span><code>beforeunload</code><span lang="ja"><span> を待ちません。</span></span></li>
</ul>

<h4 id="webRequest" name="webRequest"><a href="/ja/Add-ons/WebExtensions/API/webRequest">webRequest</a></h4>

<ul>
 <li><span id="result_box" lang="ja"><span>Firefox では、元の URL が<code>http:</code>または<code>https:</code>を使用する場合にのみ、リクエストを</span></span><span lang="ja"><span>リダイレクトできます。</span></span></li>
 <li><span id="result_box" lang="ja"><span>Firefox では、システム要求（</span></span>拡張機能<span lang="ja"><span>のアップグレードや検索バーの提案など）でイベントが発生しません。</span></span> <span id="result_box" lang="ja"><span>Firefox 57以降では、Firefox はプロキシ認証のために</span></span>{{WebExtAPIRef("webRequest.onAuthRequired")}}<span lang="ja"><span>を遮断する必要がある拡張機能の例外を生成します。</span></span>{{WebExtAPIRef("webRequest.onAuthRequired")}}のドキュメントをご覧ください。</li>
 <li>Firefox では、拡張機能が外部URL (例 HTTPS) から<a href="/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages">拡張機能ページ</a>にリダイレクトする場合、拡張機能の manifest.json ファイルは、その拡張機能ページの URL を一覧にした <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources">web_accessible_resources</a> キーを含むことが必須です。 その URL にあらゆるウェブサイトからリンクやリダイレクトされる可能性があり、拡張機能は、入力データ(例えば POST データ) を、ただ通常のウェブページがそうするように、アントラステッドなソースからとして取り扱うべきであるのに注意します。</li>
</ul>

<h4 id="windows" name="windows"><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/windows">windows</a></h4>

<ul>
 <li><span id="result_box" lang="ja"><span>Firefox では、</span></span><code>onFocusChanged</code><span lang="ja"><span> はフォーカス変更に対して複数回トリガされます。</span></span></li>
</ul>

<h3 id="Miscellaneous_incompatibilities" name="Miscellaneous_incompatibilities"><span class="short_text" id="result_box" lang="ja"><span>その他の非互換性</span></span></h3>

<h4 id="URLs_in_CSS" name="URLs_in_CSS">CSS内の URL</h4>

<p><span id="result_box" lang="ja"><span>Firefox は、挿入されたページからではなく、CSS ファイル自体からの相対パスで、挿入された CSS ファイルの URL を解決します。</span></span></p>

<h4 id="Additional_incompatibilities" name="Additional_incompatibilities"><span class="short_text" id="result_box" lang="ja"><span>付加的な非互換性</span></span></h4>

<p>Firefox は、バックグラウンドページからの<code><a href="/ja/docs/Web/API/Window/alert">alert()</a></code>, <code><a href="/ja/docs/Web/API/Window/confirm">confirm()</a></code> または <code><a href="/ja/docs/Web/API/Window/prompt">prompt()</a></code>の使用をサポートしていません。</p>

<h4 id="web_accessible_resources" name="web_accessible_resources">web_accessible_resources</h4>

<p><span id="result_box" lang="ja"><span>chrome では、リソースが web_accessible_resources にリストされている場合、</span></span><code>chrome-extension://&lt;your-extension-id&gt;/&lt;path/to/resource&gt;</code><span lang="ja"><span>としてアクセスできます。この場合 extension ID</span></span><span id="result_box" lang="ja"><span>は、指定された拡張機能に対して固定されています。</span></span></p>

<p><span id="result_box" lang="ja"><span>Firefox ではそうではなく</span></span><span lang="ja"><span>、Firefox のすべてのインスタンスごとに異なるランダムな UUID を使用してアクセスできるように実装されています:</span></span><code>moz-extension://&lt;random-UUID&gt;/&lt;path/to/resource&gt;</code> <span id="result_box" lang="ja"><span>このランダム性により、特定の拡張機能</span></span><span lang="ja"><span>の URL を別のドメインの CSP ポリシーに追加するなど、いくつかのことをできなくなります。</span></span></p>

<h4 id="Manifest_key_property" name="Manifest_key_property">マニフェストの"key"プロパティ</h4>

<p><span id="result_box" lang="ja"><span>パッケージされていない</span></span>拡張機能<span lang="ja"><span>を使用する場合、Chrome はマニフェストに<a href="https://developer.chrome.com/extensions/manifest/key">"key"プロパティ</a>を追加して、異なるマシン間で </span></span>extension <span lang="ja"><span>ID を固定することができます。</span></span> <span class="short_text" id="result_box" lang="ja"><span>これは主に web_accessible_resources で作業する場合に便利です。</span></span> <span id="result_box" lang="ja"><span>Firefox は web_accessible_resources にランダムな UUID を使用するため、このプロパティはサポートされていません。</span></span></p>

<h4 id="Content_script_requests_happen_in_the_context_of_extension_not_content_page" name="Content_script_requests_happen_in_the_context_of_extension_not_content_page"><span class="short_text" id="result_box" lang="ja"><span>コンテンツスクリプトのリクエストは、コンテンツページではなく、拡張機能のコンテキストで発生する</span></span></h4>

<p><span id="result_box" lang="ja"><span>chrome では、コンテンツスクリプトから<code>/api</code>のような相対URL にリクエストが呼び出されたとき（たとえば、</span></span><code><a href="/ja/docs/Web/API/Fetch_API/Using_Fetch">fetch()</a></code><span lang="ja"><span>を使用して）、<code>https://example.com/api</code>に送信されます。</span></span><span id="result_box" lang="ja"><span>Firefox では、絶対URL を指定する必要があります。</span></span></p>

<h2 id="manifest.json_keys" name="manifest.json_keys">manifest.json のキー</h2>

<p><span id="result_box" lang="ja"><span>メインの</span></span><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json"> manifest.json</a><span lang="ja"><span> ページには、manifest.json のキーのブラウザーサポートを説明する表が含まれています。</span></span> <span id="result_box" lang="ja"><span>特定のキーのサポートに関する警告がある場合、表にアスタリスク "*"付きで示され、キーのリファレンスページには注意事項が説明されています。</span></span></p>

<p><span class="short_text" id="result_box" lang="ja"><span>これらの表は、</span></span> <a href="https://github.com/mdn/browser-compat-data">GitHub で JSON ファイル</a><span class="short_text" lang="ja"><span>として保存された互換性データから生成されます。</span></span></p>

<h2 id="Native_messaging" name="Native_messaging">ネイティブメッセージング</h2>

<h3 id="Command-line_arguments" name="Command-line_arguments">コマンドライン引数</h3>

<p><span id="result_box" lang="ja"><span>Linux と Mac では、Chrome は </span></span><code>chrome-extension://[extensionID]</code><span lang="ja"><span> の形式で、起動した拡張機能のオリジンとなる1つの引数をネイティブアプリに渡します。</span></span> <span id="result_box" lang="ja"><span>これにより、アプリは</span></span>拡張機能<span lang="ja"><span>を識別できます。</span></span></p>

<p><span id="result_box" lang="ja"><span>Windows では、Chrome は2つの引数を受け取ります。1つ目は拡張機能のオリジンで、2つ目はアプリを起動した </span></span><span lang="ja"><span>Chrome ネイティブウィンドウへのハンドルです。</span></span></p>

<h3 id="allowed_extensions" name="allowed_extensions">allowed_extensions</h3>

<p><span id="result_box" lang="ja"><span>Chrome では、アプリマニフェストの </span></span><code>allowed_extensions</code><span lang="ja"><span> キーは、代わりに</span></span><code>allowed_origins</code><span lang="ja"><span> と呼ばれています。</span></span></p>

<h3 id="App_manifest_location" name="App_manifest_location"><span id="result_box" lang="ja"><span>アプリマニフェストの位置</span></span></h3>

<p><span id="result_box" lang="ja"><span>Chrome は、別の場所でアプリのマニフェストを見つけることを期待しています。</span></span> <span id="result_box" lang="ja"><span>Chrome ドキュメントの<a href="https://developer.chrome.com/extensions/nativeMessaging#native-messaging-host-location">「ネイティブメッセージングホストの場所」</a>をご覧ください。</span></span></p>
