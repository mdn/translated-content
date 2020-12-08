---
title: サイドバー
slug: Mozilla/Add-ons/WebExtensions/user_interface/Sidebars
tags:
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/user_interface/Sidebars
---
<div>{{AddonSidebar}}</div>

<div>
<p>サイドバーはブラウザーウィンドウの横側の、ウェブページの隣に表示されるペイン(枠)です。ブラウザーはユーザーに、 現在利用しているサイドバーを表示するUIと表示させるサイドバーを選ぶUIを提供します。例えば、Firefox には"表示 &gt; サイドバー" メニューがあります。サイドバーは同時に一つだけ表示できて、すべてのタブとすべてのブラウザーウィンドウに表示されます。</p>

<p>ブラウザーにはいくつかの組み込み済みのサイドバーがあります。例えば、Firefox にはブックマークと連携するサイドバーがあります:</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/15755/bookmarks-sidebar.png" style="display: block; height: 423px; margin-left: auto; margin-right: auto; width: 350px;"> <code>sidebar_action</code> というmanifest.json キーを使って、拡張機能はブラウザーに独自のサイドバーを追加できます。それは組み込みのサイドバーと一緒に一覧表示され、ユーザーが組み込みサイドバーと同じメカニズムで開くことができます。</p>

<p>"browser action"ポップアップと同様に、サイドバーのコンテンツを HTML 文書で指定できます。ユーザーがサイドバーを開く時、サイドバーの文書がブラウザーである各ウィンドウへと読み込まれます。各ウィンドウは独立した環境のインスタンスを保持します。新しいウィンドウが開いた時も同様に独自にサイドバー文書を保持します。</p>

<p>{{WebExtAPIRef("sidebarAction.setPanel()")}} 関数を使って特定のタブに文書をセットできます。サイドバーはどこのウィンドウに所属しているのかを、 {{WebExtAPIRef("windows.getCurrent()")}} APIを使ってできます。</p>

<pre class="brush: js">// sidebar.js
browser.windows.getCurrent({populate: true}).then((windowInfo) =&gt; {
  myWindowId = windowInfo.id;
});</pre>

<p>これは、windowごとに出しわけしたいときに有用な方法です。参考例としてこちらを参照してください。 <a href="https://github.com/mdn/webextensions-examples/tree/master/annotate-page">"annotate-page"</a>.</p>

<p>Sidebar documents は  backgroundや popupスクリプトと同じ特権のJavaScript APIs にアクセスできます。 background page に{{WebExtAPIRef("runtime.getBackgroundPage()")}}を使いアクセスできます(incognito mode windowでなければ(訳注：プライベートタブのことかと思います))。そして {{WebExtAPIRef("tabs.sendMessage()")}} や {{WebExtAPIRef("runtime.sendNativeMessage()")}}のように messeagin APIを使って、 content scripts や ネイティブアプリケーションと連携することが可能です。</p>

<p>Sidebar documents はウィンドウのクローズ時かユーザがサイドバーを閉じた時にunloadされます。このように backgroundと違って常に生きているわけではありませんがポップアップと違い、ユーザがWebページと連携している間読み込まれたままでいられます。</p>

<p>サイドバーは初回インストール時に自動で開きます。これは拡張機能にサイドバーがあることをユーザに理解させてくれます。ただしプログラム的にサイドバーを開くことはできません。ユーザのみが開くことができます（訳注：ちなみにブラウザのツールバーボタンを押したときにサイドバーを開くプログラムは動作する）。</p>

<h2 id="Specifying_sidebars" name="Specifying_sidebars">サイドバーを指定する</h2>

<p>サイドバーを使うには初期起動documentを <code><a href="/ja/Add-ons/WebExtensions/manifest.json/sidebar_action">sidebar_action</a></code> セクションとしてmanifest.json に a default title とiconとともに設定します。</p>

<pre class="brush: json">"sidebar_action": {
  "default_title": "My sidebar",
  "default_panel": "sidebar.html",
  "default_icon": "sidebar_icon.png"
}</pre>

<p>これら3つは同時に、{{WebExtAPIRef("sidebarAction")}} API を使ってプログラム的に変更可能です。</p>

<p>Title とicon は UIとしてブラウザがサイドバーのリストアップをするときユーザに示す内容です。例えば Firefoxの "表示&gt; サイドバー" メニューで見ることができます。</p>

<h2 id="Examples" name="Examples">サイドバーデザイン</h2>

<p>Firefox スタイルにサイドバーをマッチさせる方法の詳細は次の文書を参考にしてください。 <a class="grey-90 no-underline hover-no-underline" href="https://design.firefox.com/photon/index.html">Photon Design System</a>.</p>

<h2 id="例">例</h2>

<p>GitHub 上の<a href="https://github.com/mdn/webextensions-examples">webextensions-examples</a> repository に、サイドバーを実装した例として<a href="https://github.com/mdn/webextensions-examples/tree/master/annotate-page">annotate-page</a> があります(訳注：annotateは注釈を意味します。サンプルはざっと見たところサイドバー上のメモ機能のようです)。</p>
</div>
