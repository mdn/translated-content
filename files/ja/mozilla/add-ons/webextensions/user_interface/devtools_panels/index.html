---
title: 開発ツールパネル
slug: Mozilla/Add-ons/WebExtensions/user_interface/devtools_panels
tags:
  - Beginner
  - Guide
  - User Interface
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/user_interface/devtools_panels
---
<div>{{AddonSidebar}}</div>

<div class="note">
<p>この機能は Firefox 54 以降で利用できます。</p>
</div>

<p>拡張機能が開発者に使われるツールを提供するとき、ブラウザーの開発ツールに、新しいパネルとしてUIを追加できます。</p>

<p><img alt='Simple example showing the addition of "My panel" to the Developer Tools tabs.' src="https://mdn.mozillademos.org/files/15746/developer_panel_tab.png" style="display: block; height: 112px; margin-left: auto; margin-right: auto; width: 350px;"></p>

<h2 id="Specifying_a_developer_tools_panel" name="Specifying_a_developer_tools_panel">開発ツールパネルを指定する</h2>

<p>開発ツールパネルは <code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/devtools.panels">devtools.panels</a></code> API を使って追加され、特別な開発ツールページから順番に実行されます。</p>

<p>開発ツールのページを追加するには、拡張機能の <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json">manifest.json</a> に <code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page">devtools_page</a></code> キーを入れて、 拡張機能内のそのページの HTML ファイルの場所を与えます:</p>

<pre class="brush: json line-numbers  language-json"><code class="language-json"><span class="key token">"devtools_page":</span> <span class="string token">"devtools-page.html"</span></code></pre>

<p>開発ツールのページから、開発ツールパネルに追加するスクリプトを呼び出します:</p>

<pre class="brush: html">&lt;body&gt;
  &lt;script src="devtools.js"&gt;&lt;/script&gt;
&lt;/body&gt;</pre>

<p>スクリプトの中では、パネルのタイトル、アイコン、そのコンテンツを与えるHTMLファイルを指定して、開発ツールパネルを作成します:</p>

<pre class="brush: js">function handleShown() {
  console.log("panel is being shown");
}

function handleHidden() {
  console.log("panel is being hidden");
}

browser.devtools.panels.create(
  "My Panel",           // title
  "icons/star.png",           // icon
  "devtools/panel/panel.html"          // content
).then((newPanel) =&gt; {
  newPanel.onShown.addListener(handleShown);
  newPanel.onHidden.addListener(handleHidden);
});</pre>

<p>拡張機能はインスペクターウィンドウの中で <code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/devtools.inspectedWindow/eval"><code>devtools</code>.inspectedWindow.eval()</a></code> を使うか、バックグラウンドスクリプトからメッセージを渡してコンテンツスクリプトに挿入することで、コードを実行できます。この方法のより詳しくは <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools">Extending the developer tools</a> を見てください。</p>

<h2 id="Examples" name="Examples">開発パネルのデザイン</h2>

<p>開発パネルのウェブページを Firefox のスタイルにマッチさせる方法の詳細は <a class="grey-90 no-underline hover-no-underline" href="https://design.firefox.com/photon/index.html">Photon Design System</a> の文書を見てください。</p>

<h2 id="アイコン">アイコン</h2>

<p>開発ツールパネルに使うアイコン作成方法の詳細は <a class="grey-90 no-underline hover-no-underline" href="https://design.firefox.com/photon/index.html">Photon Design System</a> の文書の<a href="https://design.firefox.com/photon/visuals/iconography.html">Iconography</a> を見てください。</p>

<h2 id="例">例</h2>

<p>GitHub の <a href="https://github.com/mdn/webextensions-examples">webextensions-examples</a> リポジトリには開発ツールパネルを実装した <a href="https://github.com/mdn/webextensions-examples/blob/master/devtools-panels/">devtools-panels</a> の例があります。</p>
