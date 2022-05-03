---
title: アドレスバーボタン
slug: Mozilla/Add-ons/WebExtensions/user_interface/Page_actions
tags:
  - User Interface
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/user_interface/Page_actions
---
<div>{{AddonSidebar}}</div>

<p>よく<a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/pageAction">ページアクション</a>として参照され、このユーザーインターフェイスオプションはブラウザーのアドレスバーに追加されるボタンです。ユーザーはボタンをクリックして拡張機能とやりとりします。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/12960/page-action.png" style="display: block; height: 262px; margin-left: auto; margin-right: auto; width: 850px;"></p>

<p>ウェブページに関係する機能のある時だけにこのボタンを使ってください。既定ではアドレスバーのボタンはすべてのタブにて隠されていて、<a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/PageAction/show" title="Shows the page action for a given tab. The page action is shown whenever the given tab is the active tab."><code>pageAction.show()</code></a> と <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/PageAction/hide" title="Hides the page action for a given tab."><code>pageAction.hide()</code></a> を呼び出すことで、特定のタブ上での表示・非表示を制御します。</p>

<p><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Browser_action">ツールバーボタン</a>と比較して、似た振る舞いをしますが、そちらは拡張機能の機能が大抵のウェブページに適用できる状況で使われます。</p>

<h2 id="Specifying_the_page_action" name="Specifying_the_page_action">ページアクションを指定する</h2>

<p>ページアクションのプロパティは manifest.json の <code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action">page_action</a></code> キーで定義します。</p>

<pre class="brush: json line-numbers  language-json"><code class="language-json"><span class="key token">"page_action":</span> <span class="punctuation token">{</span>
  <span class="key token">"browser_style":</span> <span class="keyword token">true</span><span class="punctuation token">,</span>
  <span class="key token">"default_icon":</span> <span class="punctuation token">{</span>
    <span class="key token">"19":</span> <span class="string token">"button/geo-19.png"</span><span class="punctuation token">,</span>
    <span class="key token">"38":</span> <span class="string token">"button/geo-38.png"</span>
  <span class="punctuation token">}</span><span class="punctuation token">,</span>
  <span class="key token">"default_title":</span> <span class="string token">"Whereami?"</span>
<span class="punctuation token">}</span></code></pre>

<p>唯一不可欠なキーは <code>default_icon</code> です。</p>

<p>ページアクションの指定には2つの方法があります: <a href="/ja/Add-ons/WebExtensions/Popups">ポップアップ</a>がつくのとつかないのです。 ポップアップを指定しないと、ユーザーがボタンをクリックした時に、拡張機能にイベントがディスパッチされ、これを拡張機能が <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/onClicked" title="Fired when a browser action icon is clicked. This event will not fire if the browser action has a popup."><code>pageAction.onClicked</code></a>を使ってリッスンします:</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js">browser<span class="punctuation token">.</span>pageAction<span class="punctuation token">.</span>onClicked<span class="punctuation token">.</span><span class="function token">addListener</span><span class="punctuation token">(</span>handleClick<span class="punctuation token">)</span><span class="punctuation token">;</span></code></pre>

<p>ポップアップを指定すると、クリックイベントはディスパッチされません: その代わりに、ユーザーがボタンをクリックした時にポップアップが表示されます。ユーザーはポップアップとやりとりできて、ユーザーが範囲外をクリックした時に自動的にポップアップが閉じます。ポップアップを作成、管理することの詳細は<a href="/ja/Add-ons/WebExtensions/Popups">ポップアップ</a>の記事を見てください。</p>

<p>拡張機能は1つだけのページアクションを持つ必要があります。</p>

<p>なお、上に示されている任意のプロパティは<code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/pageAction">pageAction</a></code> API を使ったコードからも変更できます。</p>

<h2 id="Examples" name="Examples">例</h2>

<p>GitHub の <a href="https://github.com/mdn/webextensions-examples">webextensions-examples</a> リポジトリには、ページアクションを使う拡張機能の例がいくつかあります:</p>

<ul>
 <li><a href="https://github.com/mdn/webextensions-examples/tree/master/chill-out">chill-out</a> はポップアップなしのページアクションを使います。</li>
</ul>
