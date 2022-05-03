---
title: Extension pages
slug: Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages
tags:
  - Beginner
  - User Interface
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages
---
<div>{{AddonSidebar()}}</div>

<p><span class="seoSummary">拡張機能にはフォームやヘルプなど拡張機能が必要とするコンテンツを提供するためのHTMLを含めることができます。</span></p>

<p><img alt="Example of a simple bundled page displayed as a detached panel." src="https://mdn.mozillademos.org/files/15752/bundled_page_as_panel_small.png" style="display: block; height: 216px; margin-left: auto; margin-right: auto; width: 350px;"></p>

<p>拡張機能に含められた HTML ページは拡張機能がバックグラウンドで動作するのと同じ特権を持った JavaScript の API を利用できますが、これらのページはそれぞれのタブ、JavaScriptイベントキュー、グローバル変数を持ちます。</p>

<p>バックグラウンドのページは「隠れた拡張ページ」と考えてください。</p>

<h2 id="拡張ページを指定をする">拡張ページを指定をする</h2>

<p>HTMLファイルと関連づけられた CSS や JavaScript ファイルを拡張機能に含めることができます。これらのファイルはルートに置くこともできますし、サブディレクトリに分けることもできます。</p>

<pre class="notranslate">/my-extension
    /manifest.json
    /my-page.html
    /my-page.js</pre>

<h2 id="拡張ページを表示する">拡張ページを表示する</h2>

<p>拡張ページを表示する際に2つの選択肢があります。それは、 {{WebExtAPIRef("windows.create()")}} と {{WebExtAPIRef("tabs.create()")}} です。</p>

<p><code>windows.create()</code> を使うと、例えば、HTML ファイルを detached panel (アドレスバー、ブックマークバーなどといったブラウザ UI がないウィンドウ) 開くことができ、ダイアログのようなユーザーエクスペリエンスを実現できます:</p>

<pre class="brush: js notranslate">var createData = {
  type: "detached_panel",
  url: "panel.html",
  width: 250,
  height: 100
};
var creating = browser.windows.create(createData);</pre>

<p>ウィンドウが必要なくなったときは JavaScript で閉じることができます。例えば、以下の例では、ユーザーがボタンをクリックしたときに {{WebExtAPIRef("windows.remove()")}} にウィンドウ の ID を渡しています:</p>

<pre class="brush: js notranslate">document.getElementById("closeme").addEventListener("click", function(){
  var winId = browser.windows.WINDOW_ID_CURRENT;
  var removing = browser.windows.remove(winId);
}); </pre>

<h2 id="拡張ページと履歴">拡張ページと履歴</h2>

<p>デフォルトではこの方法で開かれたページは普通のウェブページを開いたときと同じように履歴に保存されます。履歴に保存したくない場合、 {{WebExtAPIRef("history.deleteUrl()")}} を使ってブラウザから履歴のレコードを削除することができます。</p>

<pre class="brush: js notranslate" id="ct-4">function onVisited(historyItem) {
  if (historyItem.url == browser.extension.getURL(myPage)) {
    browser.history.deleteUrl({url: historyItem.url});
  }
}

browser.history.onVisited.addListener(onVisited);</pre>

<p>History API を使には <code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json">manifest.json</a></code> で "history" <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions">パーミッション</a> をリクエストする必要があります。</p>

<h2 id="ウェブページのデザイン">ウェブページのデザイン</h2>

<p>Firefox のスタイルとマッチするようなデザインの方法の詳細は<a class="grey-90 no-underline hover-no-underline" href="https://design.firefox.com/photon/index.html">Photon Design System</a> と <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles">browser styles</a> をお読みください。</p>

<h2 id="例">例</h2>

<p>GitHubの <a class="external external-icon" href="https://github.com/mdn/webextensions-examples">webextensions-examples</a> リポジトリにはウィンドウの作成を実装する例である <a class="external external-icon" href="https://github.com/mdn/webextensions-examples/tree/master/window-manipulator">window-manipulator</a> が含まれています。</p>
