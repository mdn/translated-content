---
title: ブラウザー拡張機能
slug: Mozilla/Add-ons/WebExtensions
tags:
  - Add-ons
  - Extensions
  - Landing
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions
---
<p>{{AddonSidebar}}</p>

<p><span class="seoSummary">拡張機能はブラウザーの能力を拡張・修正するものです。Firefox の拡張機能は WebExtensions API を使ってビルドされ、この API は拡張機能をクロスブラウザーで開発するシステムです。</span>このシステムの大半は Google Chrome と Opera と <a href="https://browserext.github.io/browserext/">W3C Draft Community Group</a> でサポートされている <a class="external-icon external" href="https://developer.chrome.com/extensions">extension API</a> と互換性があります。</p>

<p>これらのブラウザー用に書かれた拡張機能は大抵の場合、<a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Porting_from_Google_Chrome">ほんの少し変更を加えるだけで</a> Firefox や <a href="https://developer.microsoft.com/en-us/microsoft-edge/platform/documentation/extensions/">Microsoft Edge</a> でも動かすことができます。この API は <a href="/ja/Firefox/Multiprocess_Firefox">マルチプロセス Firefox</a> にも完全互換です。</p>

<p>お持ちのアイデアや質問があったり、レガシーアドオンを WebExtensions API を使うように移行するのに助けが要る場合、<a href="https://mail.mozilla.org/listinfo/dev-addons">dev-addons のメーリングリスト</a> (英語) や <a href="https://chat.mozilla.org/#/room/#addons:mozilla.org">Add-ons room</a> (英語) や <a href="irc://irc.mozilla.org/webextensions">Matrix</a> (英語) にてご連絡ください。</p>

<p>日本語情報としては <a href="https://bit.ly/mozilla-jp-slack">Mozilla Japan コミュニティの Slack</a> の #extdev チャンネルで情報交換が行われています。</p>

<div class="row topicpage-table">
<div class="section">
<h2 id="Getting_started" name="Getting_started">始めましょう</h2>

<ul>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/What_are_WebExtensions">拡張機能とは何か?</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension">初めての拡張機能</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Walkthrough">2 つめの拡張機能</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension">拡張機能の中身</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Examples">拡張機能の例</a></li>
</ul>

<h2 id="Concepts" name="Concepts">概念</h2>

<ul>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Content_scripts">コンテンツスクリプト</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Match_patterns">マッチパターン</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Working_with_files">ファイルの操作</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Internationalization">多言語対応</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Security_best_practices">セキュリティのベストプラクティス</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy">Content Security Policy</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Native_messaging">Native messaging</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools">devtools APIs を使用する</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Native_manifests">ネイティブマニフェスト</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Native_manifests">manifests ファイル</a></li>
</ul>

<h2 id="User_interface" name="User_interface">ユーザーインターフェイス</h2>

<ul>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface">導入</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_action">ブラウザーツールバーボタン</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups">ポップアップ付きブラウザーツールバーボタン</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions">アドレスバーボタン</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups">ポップアップ付きアドレスバーボタン</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Context_menu_items">コンテキストメニューの項目</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars">サイドバー</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages">オプションページ</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages">Extension pages</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Notifications">通知</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Omnibox">アドレスバーの入力候補</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/devtools_panels">開発ツールパネル</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles">ブラウザースタイル</a></li>
</ul>

<h2 id="How_to" name="How_to">逆引きリファレンス</h2>

<ul>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Intercept_HTTP_requests">HTTP リクエストへの介入</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Modify_a_web_page">web ページの変更</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Add_a_button_to_the_toolbar">ツールバーボタンの追加</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Implement_a_settings_page">設定画面の実装</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard">クリップボードとのやりとり</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Working_with_the_Tabs_API">Tabs API を使用する</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Work_with_the_Bookmarks_API">Bookmarks API を使用する</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Work_with_the_Cookies_API">Cookies API を使用する</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities">Contextual Identity を使用する</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/userScripts/Working_with_userScripts">userScripts を使用する</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Safely_inserting_external_content_into_a_page">外部コンテンツの挿入</a></li>
</ul>

<h2 id="Porting" name="Porting">移行</h2>

<ul>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Porting_from_Google_Chrome">Google Chrome extension からの移行</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Porting_a_legacy_Firefox_add-on">古い Firefox アドオンの移行</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Developing_WebExtensions_for_Firefox_for_Android">Android 向け Firefox 拡張機能の開発</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Thunderbird における WebExtensions によるアドイン開発">Thunderbird における WebExtensions によるアドイン開発</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Comparison_with_the_Add-on_SDK">Add-on SDK との比較</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Comparison_with_XUL_XPCOM_extensions">XUL/XPCOM 拡張との比較</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities">Chrome との非互換性</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Differences_between_desktop_and_Android">デスクトップ版と Android 版の拡張機能の違い</a></li>
</ul>

<h2 id="Firefox_workflow" name="Firefox_workflow">Firefox でのワークフロー</h2>

<ul>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/User_experience_best_practices">ユーザー体験の成功事例</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Temporary_Installation_in_Firefox">Firefox への一時的なインストール</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/デバッグ">デバッグ</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Testing_persistent_and_restart_features">テストの持続と再起動機能</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Getting_started_with_web-ext">はじめての web-ext</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/web-ext_command_reference">web-ext コマンドリファレンス</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/WebExtensions_and_the_Add-on_ID">Extensions と Add-on ID</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Distribution_options">配布方法の選択肢</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Request_the_right_permissions">正しいパーミッションを要求する</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts">オブジェクトを Web ページのスクリプトと共有する</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Retiring_your_extension">拡張機能を引退させる</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Tips">Tips and Tricks</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Development_Tools">ブラウザー拡張機能の開発ツール</a></li>
</ul>
</div>

<div class="section">
<h2 id="Reference" name="Reference">リファレンス</h2>

<h3 id="JavaScript_APIs" name="JavaScript_APIs">JavaScript API 群</h3>

<ul>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/API">JavaScript API の概要</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs">JavaScript API 群のブラウザー互換性表</a></li>
</ul>

<div class="twocolumns">{{ ListSubpages ("/ja/docs/Mozilla/Add-ons/WebExtensions/API") }}</div>

<h3 id="Manifest_keys" name="Manifest_keys">Manifest keys</h3>

<ul>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json">manifest.json の概要</a></li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json">manifest.json のブラウザー互換性</a></li>
</ul>

<div class="twocolumns">{{ ListSubpages ("/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json") }}</div>
</div>
</div>

<div class="SnapLinksContainer" style="margin-left: 0px; margin-top: 0px; display: none;">
<div class="SL_SelectionRect">
<div class="SL_SelectionLabel"></div>
</div>
</div>
