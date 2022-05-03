---
title: ポップアップ
slug: Mozilla/Add-ons/WebExtensions/user_interface/Popups
tags:
  - UI
  - User Interface
  - WebExtensions
  - popup
translation_of: Mozilla/Add-ons/WebExtensions/user_interface/Popups
---
<div>{{AddonSidebar}}</div>

<div>
<p>ポップアップは<a href="/ja/Add-ons/WebExtensions/Browser_action">ツールバーボタン</a>や<a href="/ja/Add-ons/WebExtensions/Page_actions">アドレスバーボタン</a>に関連したダイアログです。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/15747/page_action_popup.png" style="display: block; height: 282px; margin-left: auto; margin-right: auto; width: 350px;"></p>

<p>ユーザーがボタンをクリックした時、ポップアップが表示されます。ポップアップの外をクリックすると、ポップアップは閉じます。ポップアップは、そこで実行しているスクリプトから <code><a href="/ja/docs/Web/API/Window/close">window.close()</a></code> を呼ぶとプログラム的に閉じられます。しかし、拡張機能の JavaScript からプログラム的に開くことはできません。つまりユーザー操作への反応としてだけ開きます。</p>

<p><code>"_execute_browser_action"</code> と <code>"_execute_page_action"</code> ショートカットを使って、ポップアップを開くキーボードショートカットを定義できます。manifest.json の <code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands">commands</a></code><span class="hidden"> </span> キーの文書を見てください。</p>

<h2 id="Specifying_a_popup" name="Specifying_a_popup">ポップアップを指定する</h2>

<p>通常の Web ページと同じく、ポップアップは HTML ファイルで定義されます（ここに CSS や JavaScript も含めることが可能です）。 ただし、拡張機能が持つ<a href="/ja/Add-ons/WebExtensions/manifest.json/permissions">パーミッション</a>の範囲で JavaScript から <a href="/ja/Add-ons/WebExtensions/API">WebExtension API</a> にアクセスできる点で通常のものとは異なります。</p>

<p>ポップアップの文書はポップアップが表示されるたびに読み込まれて、ポップアップが閉じるたびに開放されます。</p>

<p>HTML ファイルを拡張機能に入れるには、manifest.json内の <code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action">browser_action</a></code> か <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action">page_action</a> キーの <code>"default_popup"</code> にて指定します:</p>

<pre class="brush: json">  "browser_action": {
    "default_icon": "icons/beasts-32.png",
    "default_title": "Beastify",
    "default_popup": "popup/choose_beast.html"
  }</pre>

<p>ブラウザーの UI と統一感を持たせるスタイルシートをポップアップに組み込めるようになりました。これを利用するためには、<code><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action">browser_action</a></code> か <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action">page_action</a> キーで <code>"browser_style": true</code> を指定してください。</p>

<p>ポップアップにおけるリソースの読み込み元や、<code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/eval">eval()</a></code> のように安全でない処理は Content Security Policy によって制限されます。詳細は <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy">Content Security Policy</a> を参照してください。</p>

<h2 id="Debugging_popups" name="Debugging_popups">ポップアップのデバッグ</h2>

<p>ポップアップのマークアップと JavaScript をアドオンデバッガーを使ってデバッグできます。しかしポップアップの自動非表示を不可として、ポップアップの外をクリックした時に隠れてしまうのを防ぐ必要があります。<a href="/ja/Add-ons/WebExtensions/Debugging#Debugging_popups">ポップアップのデバッグを読んでください</a>。</p>

<h2 id="Popup_resizing" name="Popup_resizing">ポップアップのリサイズ</h2>

<p>ポップアップはその中身に合わせて自動的にリサイズされます。ブラウザーごとにこのアルゴリズムは違う場合があります。</p>

<p>Firefox では、サイズはポップアップが表示される直前に計算されて、最大で毎秒10回のDOM変形があります。strict モードの文書では、サイズは <code><a href="/ja/docs/Web/HTML/Element/body">&lt;body&gt;</a></code> 要素のレイアウトサイズに基いて計算されます。quirks モードでは、これは <code><a href="/ja/docs/Web/HTML/Element/html">&lt;html&gt;</a></code> 要素です。Firefox はその要素の好ましい幅を計算して、その幅にリフローして、縦のスクロールがないようにリサイズします。最大で <strong><a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1434177">800</a></strong><strong>x600 ピクセル</strong> の範囲でユーザーの画面にフィットさせます。（Firefox 60以前では680ピクセルまでとなります。）ユーザーが<a href="https://support.mozilla.org/en-US/kb/customize-firefox-controls-buttons-and-toolbars#w_customize-the-menu-or-the-toolbar">拡張機能のボタンをメニューに動かした</a>り、ツールバーからオーバーフローした場合、ポップアップはメニューのパネル内に出てきて、固定の幅となります。</p>

<p>Firefox Android 57 では、ポップアップは新規タブの通常ページとして表示されます。</p>

<h2 id="Popup_design" name="Popup_design">ポップアップのデザイン</h2>

<p>Firefox のスタイルにマッチするポップアップのウェブページをデザインする方法は、<a class="grey-90 no-underline hover-no-underline" href="https://design.firefox.com/photon/index.html">Photon Design System</a> の文書を見てください。</p>

<h2 id="Examples" name="Examples">例</h2>

<p>GitHub の <a href="https://github.com/mdn/webextensions-examples">webextensions-examples</a> リポジトリには、ポップアップ付きブラウザーアクションを使う拡張機能の <a href="https://github.com/mdn/webextensions-examples/tree/master/beastify">beastify</a> の例があります。</p>
</div>
