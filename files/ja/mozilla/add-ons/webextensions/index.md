---
title: ブラウザー拡張機能
slug: Mozilla/Add-ons/WebExtensions
---

{{AddonSidebar}}

拡張機能はブラウザーの能力を拡張・修正するものです。Firefox の拡張機能は WebExtensions API を使ってビルドされ、この API は拡張機能をクロスブラウザーで開発するシステムです。このシステムの大半は Google Chrome と Opera と [W3C Draft Community Group](https://browserext.github.io/browserext/) でサポートされている [extension API](https://developer.chrome.com/extensions) と互換性があります。

これらのブラウザー用に書かれた拡張機能は大抵の場合、[ほんの少し変更を加えるだけで](/ja/docs/Mozilla/Add-ons/WebExtensions/Porting_from_Google_Chrome) Firefox や [Microsoft Edge](https://developer.microsoft.com/en-us/microsoft-edge/platform/documentation/extensions/) でも動かすことができます。この API は [マルチプロセス Firefox](/ja/Firefox/Multiprocess_Firefox) にも完全互換です。

お持ちのアイデアや質問があったり、レガシーアドオンを WebExtensions API を使うように移行するのに助けが要る場合、[dev-addons のメーリングリスト](https://mail.mozilla.org/listinfo/dev-addons) (英語) や [Add-ons room](https://chat.mozilla.org/#/room/#addons:mozilla.org) (英語) や [Matrix](irc://irc.mozilla.org/webextensions) (英語) にてご連絡ください。

日本語情報としては [Mozilla Japan コミュニティの Slack](https://bit.ly/mozilla-jp-slack) の #extdev チャンネルで情報交換が行われています。

## 始めましょう

- [拡張機能とは何か?](/ja/docs/Mozilla/Add-ons/WebExtensions/What_are_WebExtensions)
- [初めての拡張機能](/ja/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension)
- [2 つめの拡張機能](/ja/docs/Mozilla/Add-ons/WebExtensions/Walkthrough)
- [拡張機能の中身](/ja/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
- [拡張機能の例](/ja/docs/Mozilla/Add-ons/WebExtensions/Examples)

## 概念

- [コンテンツスクリプト](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)
- [マッチパターン](/ja/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)
- [ファイルの操作](/ja/docs/Mozilla/Add-ons/WebExtensions/Working_with_files)
- [国際化拡張](/ja/docs/Mozilla/Add-ons/WebExtensions/Internationalization)
- [セキュリティのベストプラクティス](/ja/docs/Mozilla/Add-ons/WebExtensions/Security_best_practices)
- [Content Security Policy](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [Native messaging](/ja/docs/Mozilla/Add-ons/WebExtensions/Native_messaging)
- [devtools APIs を使用する](/ja/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools)
- [ネイティブマニフェスト](/ja/docs/Mozilla/Add-ons/WebExtensions/Native_manifests)
- [manifests ファイル](/ja/docs/Mozilla/Add-ons/WebExtensions/Native_manifests)

## ユーザーインターフェイス

- [導入](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface)
- [ブラウザーツールバーボタン](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_action)
- [ポップアップ付きブラウザーツールバーボタン](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups)
- [アドレスバーボタン](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions)
- [ポップアップ付きアドレスバーボタン](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups)
- [コンテキストメニューの項目](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Context_menu_items)
- [サイドバー](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars)
- [オプションページ](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages)
- [Extension pages](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages)
- [通知](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Notifications)
- [アドレスバーの入力候補](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Omnibox)
- [開発ツールパネル](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/devtools_panels)
- [ブラウザースタイル](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles)

## 逆引きリファレンス

- [HTTP リクエストへの介入](/ja/docs/Mozilla/Add-ons/WebExtensions/Intercept_HTTP_requests)
- [web ページの変更](/ja/docs/Mozilla/Add-ons/WebExtensions/Modify_a_web_page)
- [ツールバーボタンの追加](/ja/docs/Mozilla/Add-ons/WebExtensions/Add_a_button_to_the_toolbar)
- [設定画面の実装](/ja/docs/Mozilla/Add-ons/WebExtensions/Implement_a_settings_page)
- [クリップボードとのやりとり](/ja/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard)
- [Tabs API を使用する](/ja/docs/Mozilla/Add-ons/WebExtensions/Working_with_the_Tabs_API)
- [Bookmarks API を使用する](/ja/docs/Mozilla/Add-ons/WebExtensions/Work_with_the_Bookmarks_API)
- [Cookies API を使用する](/ja/docs/Mozilla/Add-ons/WebExtensions/Work_with_the_Cookies_API)
- [Contextual Identity を使用する](/ja/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities)
- [userScripts を使用する](/ja/docs/Mozilla/Add-ons/WebExtensions/API/userScripts/Working_with_userScripts)
- [外部コンテンツの挿入](/ja/docs/Mozilla/Add-ons/WebExtensions/Safely_inserting_external_content_into_a_page)

## 移行

- [Google Chrome extension からの移行](/ja/docs/Mozilla/Add-ons/WebExtensions/Porting_from_Google_Chrome)
- [古い Firefox アドオンの移行](/ja/docs/Mozilla/Add-ons/WebExtensions/Porting_a_legacy_Firefox_add-on)
- [Android 向け Firefox 拡張機能の開発](/ja/docs/Mozilla/Add-ons/WebExtensions/Developing_WebExtensions_for_Firefox_for_Android)
- [Thunderbird における WebExtensions によるアドイン開発](</ja/docs/Mozilla/Add-ons/WebExtensions/Thunderbird における WebExtensions によるアドイン開発>)
- [Add-on SDK との比較](/ja/docs/Mozilla/Add-ons/WebExtensions/Comparison_with_the_Add-on_SDK)
- [XUL/XPCOM 拡張との比較](/ja/docs/Mozilla/Add-ons/WebExtensions/Comparison_with_XUL_XPCOM_extensions)
- [Chrome との非互換性](/ja/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities)
- [デスクトップ版と Android 版の拡張機能の違い](/ja/docs/Mozilla/Add-ons/WebExtensions/Differences_between_desktop_and_Android)

## Firefox でのワークフロー

- [ユーザー体験の成功事例](/ja/docs/Mozilla/Add-ons/WebExtensions/User_experience_best_practices)
- [Firefox への一時的なインストール](/ja/docs/Mozilla/Add-ons/WebExtensions/Temporary_Installation_in_Firefox)
- [デバッグ](/ja/docs/Mozilla/Add-ons/WebExtensions/デバッグ)
- [テストの持続と再起動機能](/ja/docs/Mozilla/Add-ons/WebExtensions/Testing_persistent_and_restart_features)
- [はじめての web-ext](/ja/docs/Mozilla/Add-ons/WebExtensions/Getting_started_with_web-ext)
- [web-ext コマンドリファレンス](/ja/docs/Mozilla/Add-ons/WebExtensions/web-ext_command_reference)
- [Extensions と Add-on ID](/ja/docs/Mozilla/Add-ons/WebExtensions/WebExtensions_and_the_Add-on_ID)
- [配布方法の選択肢](/ja/docs/Mozilla/Add-ons/WebExtensions/Distribution_options)
- [正しいパーミッションを要求する](/ja/docs/Mozilla/Add-ons/WebExtensions/Request_the_right_permissions)
- [オブジェクトを Web ページのスクリプトと共有する](/ja/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts)
- [拡張機能を引退させる](/ja/docs/Mozilla/Add-ons/WebExtensions/Retiring_your_extension)
- [Tips and Tricks](/ja/docs/Mozilla/Add-ons/WebExtensions/Tips)
- [ブラウザー拡張機能の開発ツール](/ja/docs/Mozilla/Add-ons/WebExtensions/Development_Tools)

## リファレンス

### JavaScript API 群

- [JavaScript API の概要](/ja/docs/Mozilla/Add-ons/WebExtensions/API)
- [JavaScript API 群のブラウザー互換性表](/ja/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs)

{{ ListSubpages ("/ja/docs/Mozilla/Add-ons/WebExtensions/API") }}

### Manifest keys

- [manifest.json の概要](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json)
- [manifest.json のブラウザー互換性](/ja/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json)

{{ ListSubpages ("/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json") }}
