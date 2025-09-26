---
title: 拡張機能とは何か？
slug: Mozilla/Add-ons/WebExtensions/What_are_WebExtensions
---

{{AddonSidebar}}

拡張機能はウェブブラウザーに機能を追加します。標準化されているウェブ技術（JavaScript / HTML / CSS）に専用の JavaScript API をいくつか加えて書かれます。とりわけ、拡張機能はブラウザーに新しい機能を追加したり、特定のウェブサイトが持つ見た目やコンテンツを変更したりできます。

**ウェブサイト全体の改良**: アドオンを使ってブラウザー内の機能やウェブサイトからの情報を届けます。ユーザーが訪れたページの詳細を集めるようにできて、サービスを向上させることができます。

![](Amazon_add_on.png)

例: [Amazon Assistant for Firefox](https://addons.mozilla.org/en-US/firefox/addon/amazon-browser-bar/), [OneNote Web Clipper](https://addons.mozilla.org/en-US/firefox/addon/onenote-clipper/), [Grammarly for Firefox](https://addons.mozilla.org/en-US/firefox/addon/grammarly-1/)

**ユーザーの個性を見せる**: ブラウザー機能拡張はユーザーによってブラウズされるページコンテンツを操作できます。例えば、ユーザーのお気に入りのロゴや写真を、訪れるすべてのページの背景として追加できます。拡張機能は Firefox UI の見た目を更新する力を与えることもできます (スタンドアローンの [テーマアドオン](/ja/docs/Mozilla/Add-ons/Themes/Theme_concepts)を使っても同様に Firefox UI を更新できます)。

![](MyWeb_New_Tab_add_on.png)

例: [MyWeb New Tab](https://addons.mozilla.org/en-US/firefox/addon/myweb-new-tab/), [Tabliss](https://addons.mozilla.org/en-US/firefox/addon/tabliss/), [VivaldiFox](https://addons.mozilla.org/en-US/firefox/addon/vivaldifox/)

**ウェブページのコンテンツを追加/削除**: ウェブページで触れられた国や都市への旅行ガイドへのアクセスを提供してウェブページのしつこい広告をユーザーがブロックするのを補助したり、読む体験の一貫性を提供するためにページの再フォーマットをしたいかもしれません。ページの HTML と CSS にアクセスして更新する力を持って、拡張機能はユーザーが見たい方法でウェブを見るのを助けることができます。

![](ublock_origin_add_on.png)

例: [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/), [Reader](https://addons.mozilla.org/en-US/firefox/addon/reader/), [Toolbox for Google Play Store™](https://addons.mozilla.org/en-US/firefox/addon/toolbox-google-play-store/)

**ツールや新しいブラウズ機能を追加**: タスクボードに新しい機能を追加したり、URL やハイパーリンクやページのテキストから QR コード画像を生成したりします。[WebExtensions APIs](/ja/docs/Mozilla/Add-ons/WebExtensions) の柔軟な UI オプションや力を得て、ブラウザーに新機能を簡単に追加できます。そしてほぼあらゆるウェブサイトの機能を改良できて、それはあなたのウェブサイトだけとは限りません。

![](QR_Code_Image_Generator_add_on.png)

例: [Swimlanes for Trello](https://addons.mozilla.org/en-US/firefox/addon/swimlanes-for-trello/) and [Tomato Clock](https://addons.mozilla.org/en-US/firefox/addon/tomato-clock/)

**ゲーム**: オフラインで遊べるような伝統的なコンピューターゲームや、新しいゲームの可能性を探検できます。例えば、日々のブラウジングにゲームを取り込むなど。

![](Asteroids_in_Popup_add_on%20.png)

例: [Asteroids in Popup](https://addons.mozilla.org/en-US/firefox/addon/asteroids-in-popup/), [Solitaire Card Game New Tab](https://addons.mozilla.org/en-US/firefox/addon/solitaire-card-game-new-tab/), [2048 Prime](https://addons.mozilla.org/en-US/firefox/addon/2048-prime/).

**開発ツールを追加**: あなたのビジネスに沿った開発ツールを提供したり、共有しておきたい便利なテクニックやウェブ開発へのアプローチを提供できます。いずれの方法でも、開発者ツールバーに新規タブを追加することで、組み込みの Firefox 開発ツールを改良できます。![](aXe_Developer_Tools_add_on.png)

例: [Web Developer](https://addons.mozilla.org/en-US/firefox/addon/web-developer/), [Web React Developer Tools](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/), [aXe Developer Tools](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/)

Firefox 用の拡張機能は [WebExtensions APIs](/ja/docs/Mozilla/Add-ons/WebExtensions) を使って作成され、この API はクロスブラウザーで動作可能な拡張機能を開発するための技術です。この API の大半は、Google Chrome や Opera でサポートされている [extension API](https://developer.chrome.com/docs/extensions) と互換性があります。これらのブラウザー向けに書かれた拡張機能のほとんどは、少し[変更を加えるだけで](/ja/docs/Mozilla/Add-ons/WebExtensions/Porting_from_Google_Chrome) Firefox や Microsoft Edge でも動かせるようになります。この API は完全に[マルチプロセス Firefox](/ja/docs/Mozilla/Firefox/Multiprocess_Firefox) にも対応しています。

何かアイデアがあったり、レガシーアドオンを WebExtensions API に移植する手助けが必要な場合、ご連絡は [dev-addons メーリングリスト](https://mail.mozilla.org/listinfo/dev-addons) や [Add-ons room](https://chat.mozilla.org/#/room/#addons:mozilla.org) や [Matrix](https://wiki.mozilla.org/Matrix) までお願いします。英語のサポートです。

## 次のステップ

- シンプルな拡張機能を一通り作成するには、[初めての拡張機能](/ja/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension)を参照してください。
- 拡張機能の構成については [拡張機能の中身](/ja/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)を参照してください。
- [拡張機能サンプル](/ja/docs/Mozilla/Add-ons/WebExtensions/Examples)にある拡張機能のサンプルを動かしてみましょう。
