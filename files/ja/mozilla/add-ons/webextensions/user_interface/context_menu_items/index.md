---
title: コンテキストメニュー項目
slug: Mozilla/Add-ons/WebExtensions/user_interface/Context_menu_items
tags:
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/user_interface/Context_menu_items
---
<div>{{AddonSidebar}}</div>

<div>
<p>このユーザーインターフェイスオプションは、ブラウザーのコンテキストメニューに１つ以上の項目を追加します。これはユーザーがウェブページを右クリックした時に利用できるコンテキストメニューです。タブも <a href="/ja/Add-ons/WebExtensions/API/menus">browser.menus API</a> を通じてコンテキストメニューを持つことができます。</p>

<p><img alt="Example of content menu items added by a WebExtension, from the context-menu-demo example" src="https://mdn.mozillademos.org/files/15756/context_menu_example.png" style="display: block; height: 382px; margin-left: auto; margin-right: auto; width: 350px;"></p>

<p>このオプションを、特定のブラウザーやウェブページコンテンツに関連する機能をさらすのに使います。例えば、ユーザーが画像をクリックした時にグラフィックエディターを開いたり、ページの一部分が選択されている時にページコンテンツを保存したりする機能を表示できます。メニューにはプレーンなメニュー項目や、チェックボックスや、ラジオボタングループや、 セパレータを追加できます。コンテキストメニュー項目が {{WebExtAPIRef("contextMenus.create")}} を使って追加されたら、すべてのブラウザータブで表示されますが、{{WebExtAPIRef("contextMenus.remove")}} にて削除することで隠すこともできます。</p>

<h2 id="Specifying_context_menu_items" name="Specifying_context_menu_items">コンテキストメニュー項目を指定する</h2>

<p>コンテキストメニューを、{{WebExtAPIRef("contextMenus")}} API を使ってブログラム的に管理できます。しかし、このAPIの恩恵を受けるには、manifest.json にて <code>contextMenus</code> パーミッションを要求する必要があります。</p>

<pre class="brush: json">"permissions": ["contextMenus"]</pre>

<p>次に、拡張機能のバックグラウンドスクリプト内にコンテキストメニューを追加 (と更新、削除) することもできます。メニュー項目を作成するには id、タイトル、表示するコンテキストメニューを指定します。</p>

<pre class="brush: js">browser.contextMenus.create({
  id: "log-selection",
  title: browser.i18n.getMessage("contextMenuItemSelectionLogger"),
  contexts: ["selection"]
}, onCreated);</pre>

<p>拡張機能はメニュー項目のクリックをリッスンします。項目がクリックされたことや、どのコンテキストメニューでクリックされたかや、クリックが行われたタブの詳細などの情報が渡されて、適切に拡張機能の機能が実行されるのに使われます。</p>

<pre class="brush: js">browser.contextMenus.onClicked.addListener(function(info, tab) {
  switch (info.menuItemId) {
    case "log-selection":
      console.log(info.selectionText);
      break;
    ...
  }
})</pre>

<h2 id="アイコン">アイコン</h2>

<p>コンテキストメニューで使うアイコンの作り方の詳細は、<a class="grey-90 no-underline hover-no-underline" href="https://design.firefox.com/photon/index.html">Photon Design System</a>の文書内の <a href="https://design.firefox.com/photon/visuals/iconography.html">Iconography</a> を見てください。</p>

<h2 id="例">例</h2>

<p>GitHub の <a class="external external-icon" href="https://github.com/mdn/webextensions-examples">webextensions-examples</a> リポジトリには、コンテキストメニュー項目を実装した2つの拡張機能の実例があります:</p>

<ul>
 <li><a href="https://github.com/mdn/webextensions-examples/tree/master/menu-demo">menu-demo</a> ではブラウザーのコンテキストメニューにいくつかの項目を追加しています。</li>
 <li><a href="https://github.com/mdn/webextensions-examples/tree/master/context-menu-copy-link-with-types">context-menu-copy-link-with-types</a> では、リンクの URL を、プレーンテキストとリッチ HTML としてクリップボードにコピーするコンテキストメニュー項目を追加してます。</li>
</ul>
</div>
