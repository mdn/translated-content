---
title: Bookmarks API を使う
slug: Mozilla/Add-ons/WebExtensions/Work_with_the_Bookmarks_API
tags:
  - Add-ons
  - Beginner
  - Bookmarks
  - Extensions
  - How-to
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/Work_with_the_Bookmarks_API
---
<p>{{AddonSidebar}}</p>

<p>ブックマークにより、ユーザーはウェブページのリストを集めたり編集したりできて、お気に入りに簡単に戻ることができます。Bookmarks API を使って、拡張機能はユーザーができるのとほぼ同じ方法でブックマークを操作できます。</p>

<h2 id="Permissions" name="Permissions">権限</h2>

<p>Bookmarks API を利用するには、拡張機能の manifest.json ファイルで <code>"bookmarks"</code> 権限を要求する必要があります:</p>

<pre class="brush: json">"permissions": [
  "bookmarks"
],</pre>

<h2 id="Features" name="Features">機能</h2>

<p>Bookmarks API は、拡張機能にとって、ユーザーがブックマークとその機能でできることを可能にします:</p>

<ul>
 <li>基本的なブックマーク項目の操作:
  <ul>
   <li>追加 ({{WebExtAPIRef("bookmarks.create")}}).</li>
   <li>取得 ({{WebExtAPIRef("bookmarks.get")}}).</li>
   <li>更新 ({{WebExtAPIRef("bookmarks.update")}}).</li>
   <li>移動 ({{WebExtAPIRef("bookmarks.move")}}).</li>
   <li>削除 ({{WebExtAPIRef("bookmarks.remove")}}).</li>
   <li>検索 ({{WebExtAPIRef("bookmarks.search")}}).</li>
  </ul>
 </li>
 <li>最近追加したブックマークの取得 ({{WebExtAPIRef("bookmarks.getRecent")}}).</li>
 <li>ブックマークのフォルダーツリー操作:
  <ul>
   <li>ツリー情報取得 ({{WebExtAPIRef("bookmarks.getTree")}}, {{WebExtAPIRef("bookmarks.getChildren")}}, {{WebExtAPIRef("bookmarks.getSubTree")}}).</li>
   <li>ブランチの追加 ({{WebExtAPIRef("bookmarks.create")}}).</li>
   <li>ノードの削除 ({{WebExtAPIRef("bookmarks.removeTree")}}).</li>
   <li>ノードの移動 ({{WebExtAPIRef("bookmarks.move")}}).</li>
  </ul>
 </li>
 <li>ブックマーク (やブックマークツリーフォルダー) のイベント監視:
  <ul>
   <li>追加 ({{WebExtAPIRef("bookmarks.onCreated")}}).</li>
   <li>変更 ({{WebExtAPIRef("bookmarks.onChanged")}}).</li>
   <li>移動 ({{WebExtAPIRef("bookmarks.onMoved")}}.</li>
   <li>並び替え ({{WebExtAPIRef("bookmarks.onChildrenReordered")}}).</li>
   <li>削除 ({{WebExtAPIRef("bookmarks.onRemoved")}}).</li>
  </ul>
 </li>
 <li>ブックマークインポートの監視、これは他のブックマーク処理をブックマークのインポートが進行する間サスペンドするのに使われます:
  <ul>
   <li>インポート開始 ({{WebExtAPIRef("bookmarks.onImportBegan")}}).</li>
   <li>インポート終了 ({{WebExtAPIRef("bookmarks.onImportEnded")}}).</li>
  </ul>
 </li>
</ul>

<h2 id="Example_walkthrough" name="Example_walkthrough">実例を一通り見る</h2>

<p>Bookmarks API の使い方を理解するため、<a href="https://github.com/mdn/webextensions-examples/tree/master/bookmark-it">bookmark-it</a> の例を見てみましょう。この例ではツールバーアイコン ({{WebExtAPIRef("browserAction")}}) を追加し、これがクリックされたときに、ブックマークから現在のページを追加や削除します。ページが他の方法でブックマークされている(または削除されている)場合、ページのブックマーク状態を表示するようにアイコンが更新されます。</p>

<p>この動画で拡張機能を表示します:</p>

<p>{{EmbedYouTube("hCDN0FotiFw")}}</p>

<h3 id="manifest.json" name="manifest.json">manifest.json</h3>

<p>拡張機能を記述する <a href="https://github.com/mdn/webextensions-examples/blob/master/bookmark-it/manifest.json">manifest.json</a>:</p>

<pre class="brush: json">{
  "manifest_version": 2,
  "name": "Bookmark it!",
  "version": "1.1",
  "description": "A simple bookmark button",
  "homepage_url": "https://github.com/mdn/webextensions-examples/tree/master/bookmark-it",</pre>

<p>アドオンマネージャーの代わりに、拡張機能を表すアイコンを定義します。</p>

<pre class="brush: json">  "icons": {
    "48": "icons/bookmark-it.png",
    "96": "icons/bookmark-it@2x.png"
  },</pre>

<p>権限のリクエスト。<code>"bookmarks"</code> は Bookmarks API を利用するのに要求されます。アクティブなタブの URL とタイトルを読み込んだり、ページのブックマークを作成/検索するのに、<code>"tabs"</code> が要求されます。こうした詳細にアクセスするのに Tabs API が必要なのは、Bookmark API を Tabs API なしに使うのが考えにくいということです。</p>

<pre class="brush: json">  "permissions": [
    "bookmarks",
    "tabs"
  ],</pre>

<p>基本的なツールバーボタンの詳細をセットします。ボタン機能の大半は、ページのブックマーク状態が分かった後に、コード内でセットされます。</p>

<pre class="brush: json">  "browser_action": {
    "default_icon": "icons/star-empty-38.png",
    "default_title": "Bookmark it!"
  },</pre>

<p>ページのブックマークを追加/削除してツールバーボタンの特色をセットするバックグラウンドスクリプトを定義します。</p>

<pre class="brush: json">  "background": {
    "scripts": ["background.js"]
  }

}</pre>

<h3 id="background.js" name="background.js">background.js</h3>

<p>他のバックグラウンドスクリプトと同様に、<a href="https://github.com/mdn/webextensions-examples/blob/master/bookmark-it/background.js">background.js</a> は拡張機能が開始してすぐに実行されます。最初にスクリプトは <code>updateActiveTab()</code> を呼び出し、ここでは {{WebExtAPIRef("tabs.query")}} を使って現在のタブの <code>Tabs</code> オブジェクトを取得して開始し、そのオブジェクトを <code>updatetab()</code> に渡します、コードは次の通り:</p>

<pre class="brush: js">  var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
  gettingActiveTab.then(updateTab);</pre>

<p><code>updatetab()</code> は 最初にアクティブなタブの URL を <code>isSupportedProtocol()</code> に渡します:</p>

<pre class="brush: js">  function updateTab(tabs) {
    if (tabs[0]) {
      currentTab = tabs[0];
      if (isSupportedProtocol(currentTab.url)) {</pre>

<p><code>isSupportedProtocol()</code> はアクティブタブに表示される URL がブックマークできるかを決めます。タブの URL からプロトコルを抽出するために、拡張機能は <a href="/ja/docs/Web/API/HTMLHyperlinkElementUtils">HTMLHyperlinkElementUtils</a> を利用して <code>&lt;a&gt;</code> 要素にタブの URL を追加してから、<code>protocol</code> プロパティを使ってプロトコルを取得します。</p>

<pre class="brush: js">  function isSupportedProtocol(urlString) {
    var supportedProtocols = ["https:", "http:", "ftp:", "file:"];
    var url = document.createElement('a');
    url.href = urlString;
    return supportedProtocols.indexOf(url.protocol) != -1;
  }</pre>

<p>ブックマークがプロトコルをサポートしている場合、拡張機能はタブの URL がブックマーク済みかどうかを決めて、その場合に <code>updateIcon()</code> を呼び出します:</p>

<pre class="brush: js">      var searching = browser.bookmarks.search({url: currentTab.url});
      searching.then((bookmarks) =&gt; {
        currentBookmark = bookmarks[0];
        updateIcon();</pre>

<p><code>updateIcon()</code> は、URL がブックマーク済みかどうかにより、ツールバーボタンのアイコンとタイトルをセットします。</p>

<pre class="brush: js">function updateIcon() {
  browser.browserAction.setIcon({
    path: currentBookmark ? {
      19: "icons/star-filled-19.png",
      38: "icons/star-filled-38.png"
    } : {
      19: "icons/star-empty-19.png",
      38: "icons/star-empty-38.png"
    },
    tabId: currentTab.id
  });
  browser.browserAction.setTitle({
    // Screen readers can see the title
    title: currentBookmark ? 'Unbookmark it!' : 'Bookmark it!',
    tabId: currentTab.id
  });
}</pre>

<p>ツールバーボタンが初期化されると、拡張機能はツールバーボタンのクリックを、<code>toggleBookmark()</code> を呼び出して、監視し始めます</p>

<pre class="brush: js">browser.browserAction.onClicked.addListener(toggleBookmark);</pre>

<p><code>toggleBookmark()</code> は、URL がブックマークにあるかどうか探す <code>updateTabs()</code> の検索結果を使い、現在の URL のブックマークを削除するか、追加するのかを決定します。</p>

<pre class="brush: js">function toggleBookmark() {
  if (currentBookmark) {
    browser.bookmarks.remove(currentBookmark.id);
  } else {
    browser.bookmarks.create({title: currentTab.title, url: currentTab.url});
  }
}</pre>

<p>ツールバーアイコンを更新するため、拡張機能はブックマークの作成/削除を監視します。この方法の利点は、拡張機能によるブックマーク更新と、拡張機能の外のユーザーの更新の両方を捕捉できることです。</p>

<pre class="brush: js">// listen for bookmarks being created
browser.bookmarks.onCreated.addListener(updateActiveTab);

// listen for bookmarks being removed
browser.bookmarks.onRemoved.addListener(updateActiveTab);</pre>

<p>最後に、拡張機能はアクティブなタブの URL変更や、ユーザーが他のタブやウィンドウに移動するのを監視します。これらの動作は閲覧 URL と、拡張機能のツールバーアイコンを変えることがあります。</p>

<pre class="brush: js">// listen to tab URL changes
browser.tabs.onUpdated.addListener(updateActiveTab);

// listen to tab switching
browser.tabs.onActivated.addListener(updateActiveTab);

// listen for window switching
browser.windows.onFocusChanged.addListener(updateActiveTab);</pre>

<h2 id="Learn_more" name="Learn_more">関連項目</h2>

<p>より詳しく学習するには、<a href="/ja/Add-ons/WebExtensions/API/bookmarks">Bookmarks API リファレンス</a>を見てみてください。</p>
