---
title: ツールバーボタン
slug: Mozilla/Add-ons/WebExtensions/user_interface/Browser_action
tags:
  - WebExtension
translation_of: Mozilla/Add-ons/WebExtensions/user_interface/Browser_action
---
<div>{{AddonSidebar}}</div>

<p>よく<a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/browserAction">ブラウザーアクション</a>として参照され、 このユーザーインターフェイスオプションはブラウザーのツールバーに追加されるボタンです。 ユーザーはボタンをクリックして拡張機能とやりとりします。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/15751/browser-action.png" style="display: block; height: 182px; margin-left: auto; margin-right: auto; width: 350px;"> ツールバーボタン (ブラウザーアクション) はアドレスバーボタン (ページアクション)とよく似ています。違いといつ使うかについてのガイダンスは、<a href="/ja/Add-ons/WebExtensions/user_interface/Page_actions#Page_actions_and_browser_actions">ページアクションとブラウザーアクション</a>を見てください。</p>

<h2 id="Specifying_the_browser_action" name="Specifying_the_browser_action">ブラウザーアクションを指定する</h2>

<p>ブラウザーアクションのプロパティは manifest.json の <code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action">browser_action</a></code> キーで定義します。</p>

<pre class="brush: json line-numbers  language-json"><code class="language-json"><span class="key token">"browser_action":</span> <span class="punctuation token">{</span>
  <span class="key token">"default_icon":</span> <span class="punctuation token">{</span>
    <span class="key token">"19":</span> <span class="string token">"button/geo-19.png"</span><span class="punctuation token">,</span>
    <span class="key token">"38":</span> <span class="string token">"button/geo-38.png"</span>
  <span class="punctuation token">}</span><span class="punctuation token">,</span>
  <span class="key token">"default_title":</span> <span class="string token">"Whereami?"</span>
<span class="punctuation token">}</span></code></pre>

<p>唯一不可欠なキーは <code>default_icon</code> です。</p>

<p>ブラウザーアクションの指定には 2 つの方法があります: <a href="/ja/Add-ons/WebExtensions/Popups">ポップアップ</a>がつくのとつかないのです。 ポップアップを指定しないと、ユーザーがボタンをクリックした時に、拡張機能にイベントがディスパッチされ、これを拡張機能が <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/BrowserAction/onClicked" title="Fired when a browser action icon is clicked. This event will not fire if the browser action has a popup."><code>browserAction.onClicked</code></a> を使ってリッスンします:</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js">browser<span class="punctuation token">.</span>browserAction<span class="punctuation token">.</span>onClicked<span class="punctuation token">.</span><span class="function token">addListener</span><span class="punctuation token">(</span>handleClick<span class="punctuation token">)</span><span class="punctuation token">;</span></code></pre>

<p>ポップアップを指定すると、クリックイベントはディスパッチされません: その代わりに、ユーザーがボタンをクリックした時にポップアップが表示されます。ユーザーはポップアップとやりとりできて、ユーザーが範囲外をクリックした時に自動的にポップアップが閉じます。ポップアップを作成、管理することの詳細は<a href="/ja/Add-ons/WebExtensions/Popups">ポップアップ</a>の記事を見てください。</p>

<p>拡張機能は 1 つだけのブラウザーアクションを持つ必要があります。</p>

<p>なお、上に示されている任意のプロパティは <code><a href="/ja/Add-ons/WebExtensions/API/browserAction">browserAction</a></code> API を使ったコードからも変更できます。</p>

<h2 id="Icons" name="Icons">アイコン</h2>

<p>ブラウザーアクションのアイコンを作る詳細は、<a class="grey-90 no-underline hover-no-underline" href="https://design.firefox.com/photon/index.html">Photon Design System</a> 文書の <a href="https://design.firefox.com/photon/visuals/iconography.html">Iconography</a> を見てください。</p>

<h2 id="Examples" name="Examples">例</h2>

<p>Github の <a href="https://github.com/mdn/webextensions-examples">webextensions-examples</a> リポジトリには、ブラウザーアクションを使う拡張機能の例がいくつかあります。</p>

<ul>
 <li><a href="https://github.com/mdn/webextensions-examples/blob/master/bookmark-it/">bookmark-it</a> はポップアップなしのブラウザーアクションを使います。</li>
 <li><a href="https://github.com/mdn/webextensions-examples/tree/master/beastify">beastify</a> はポップアップ付きのブラウザーアクションを使います。</li>
</ul>
