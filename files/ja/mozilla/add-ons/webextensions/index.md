---
title: ブラウザー拡張機能
slug: Mozilla/Add-ons/WebExtensions
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

拡張機能（アドオン）は、ブラウザーの機能を変更したり、強化したりすることができます。Firefox の拡張機能は、WebExtensions API というブラウザー横断型技術を使用して作成されています。

Firefox の拡張機能に関する技術は、Chromium ベースのブラウザー（Google Chrome、Microsoft Edge、Opera、Vivaldi など）で対応している[拡張機能 API](https://developer.chrome.com/docs/extensions/reference/) と、大部分において互換性があります。ほとんどの場合、Chromium ベースのブラウザー向けに作成された拡張機能は、[いくつか変更を加えるだけで](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/) Firefox でも実行できます。

## 主なリソース

- ガイド
  - : 初心者の方でも、より高度なアドバイスを探している方でも、豊富な[チュートリアルやガイド](/ja/docs/Mozilla/Add-ons/WebExtensions/What_are_WebExtensions)を通じて、拡張機能の仕組みや WebExtensions API の使用方法について学ぶことができます
- リファレンス
  - : [WebExtensions API](/ja/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) のメソッド、プロパティ、型、イベントに関する詳細情報や、[マニフェストキー](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json)に関する詳細情報を得ましょう。
- Firefox ワークフロー
  - : Firefox 用拡張機能の作成と公開方法をご紹介します。開発者ツール、公開と配布、および移植に関する詳細については、[Extension Workshop](https://extensionworkshop.com/) で得てください。

> [!NOTE]
> アイディアや質問があったり、助けが必要であったりした場合は、[コミュニティフォーラム](https://discourse.mozilla.org/c/add-ons/35)<sup>（英語）</sup>または [Matrix](https://wiki.mozilla.org/Matrix) の [Add-ons Room](https://matrix.to/#/#addons:mozilla.org)<sup>（英語）</sup> 内でご連絡ください。
>
> 日本語情報としては [Mozilla Japan コミュニティの Slack](https://mozillajp.slack.com/) の #extdev チャンネルで情報交換が行われています。

## 始めましょう

[拡張機能で何ができるか](/ja/docs/Mozilla/Add-ons/WebExtensions/What_are_WebExtensions)を確認してから、[初めての拡張機能](/ja/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension)を作成し、[2 つ目の拡張機能](/ja/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension)を作成する前に。[拡張機能の構造](/ja/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)について学び、[Firefox スタイルの拡張機能開発および公開ワークフロー](https://extensionworkshop.com/documentation/develop/firefox-workflow-overview/)の概要を取得しましょう。Firefox 上で直接実行可能な[拡張機能のサンプル](/ja/docs/Mozilla/Add-ons/WebExtensions/Examples)の充実した選択を、さらに詳しく探ってみましょう。学習を続けるには、[参考になるリソースの一覧](/ja/docs/Mozilla/Add-ons/WebExtensions/What_next)をご覧ください。

## 概念

拡張機能の基礎となる概念について、詳細な情報を得ましょう。

- [JavaScript API の概要](/ja/docs/Mozilla/Add-ons/WebExtensions/API)
- [コンテンツスクリプト](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)
- [バックグラウンドスクリプト](/ja/docs/Mozilla/Add-ons/WebExtensions/Background_scripts)
- [マッチパターン](/ja/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)
- [ファイルの操作](/ja/docs/Mozilla/Add-ons/WebExtensions/Working_with_files)
- [国際化](/ja/docs/Mozilla/Add-ons/WebExtensions/Internationalization)
- [コンテンツセキュリティポリシー](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [ネイティブメッセージング](/ja/docs/Mozilla/Add-ons/WebExtensions/Native_messaging)
- [ネイティブマニフェスト](/ja/docs/Mozilla/Add-ons/WebExtensions/Native_manifests)
- [ユーザーアクション](/ja/docs/Mozilla/Add-ons/WebExtensions/User_actions)
- [API 実装間の違い](/ja/docs/Mozilla/Add-ons/WebExtensions/Differences_between_API_implementations)
- [Chrome との非互換性](/ja/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities)

## ユーザーインターフェイス

拡張機能で使用できるすべての[ユーザーインターフェース](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface)要素を、サンプルコードやヒントとともにご紹介します。

## 手引き

拡張機能の開発における特定の側面について、基礎から学べる範囲のチュートリアルです。

- [HTTP リクエストへの介入](/ja/docs/Mozilla/Add-ons/WebExtensions/Intercept_HTTP_requests)
- [ウェブページの変更](/ja/docs/Mozilla/Add-ons/WebExtensions/Modify_a_web_page)
- [外部コンテンツの挿入](/ja/docs/Mozilla/Add-ons/WebExtensions/Safely_inserting_external_content_into_a_page)
- [Share objects with page scripts](/ja/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts)
- [ツールバーボタンの追加](/ja/docs/Mozilla/Add-ons/WebExtensions/Add_a_button_to_the_toolbar)
- [設定画面の実装](/ja/docs/Mozilla/Add-ons/WebExtensions/Implement_a_settings_page)
- [Tabs API を使用する](/ja/docs/Mozilla/Add-ons/WebExtensions/Working_with_the_Tabs_API)
- [Bookmarks API を使用する](/ja/docs/Mozilla/Add-ons/WebExtensions/Work_with_the_Bookmarks_API)
- [Cookies API を使用する](/ja/docs/Mozilla/Add-ons/WebExtensions/Work_with_the_Cookies_API)
- [Contextual Identity を使用する](/ja/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities)
- [クリップボードとのやりとり](/ja/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard)
- [開発者ツールの拡張](/ja/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools)
- [クロスブラウザー拡張機能の構築](/ja/docs/Mozilla/Add-ons/WebExtensions/Build_a_cross_browser_extension)

## Firefox でのワークフロー

Firefox 用の拡張機能を作成したり、Chrome の拡張機能を移植したりする準備が整ったら、[Extension Workshop](https://extensionworkshop.com/) にアクセスしてください。ここでは、以下の詳細が掲載されています。（訳注：リンク先はすべて英語です。）

- Firefoxのワークフロー、例えば[開発中の拡張機能の一時的なインストール](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)、[デバッグ](https://extensionworkshop.com/documentation/develop/debugging/)、[適切な権限のリクエスト](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/)など。
- [web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) 開発者ツール。
- [Google Chrome 拡張機能の移植](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/)、[デスクトップ版と Android 版の違い](https://extensionworkshop.com/documentation/develop/differences-between-desktop-and-android-extensions/)など。
- [公開と配布の概要](https://extensionworkshop.com/documentation/publish/)、[拡張機能の周知](https://extensionworkshop.com/documentation/publish/promoting-your-extension/)、[拡張機能のライフサイクルに関する最善の手法](https://extensionworkshop.com/documentation/manage/)など。

## リファレンス

### JavaScript API 群

すべての [JavaScript API](/ja/docs/Mozilla/Add-ons/WebExtensions/API) に関するメソッド、プロパティ、タイプ、イベントの包括的な詳細を確認できます。また、それぞれのAPIと主要なブラウザーとの互換性に関する詳細情報も記載されています。ほとんどのAPIリファレンスページには、サンプルコードや、そのAPIを使用している拡張機能のサンプルリンクも記載されています。

### マニフェストキー

[マニフェストキー](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json)に関するすべての詳細、およびそのプロパティや設定について参照することができます。
