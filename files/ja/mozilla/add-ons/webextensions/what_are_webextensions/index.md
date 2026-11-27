---
title: 拡張機能とは何か？
slug: Mozilla/Add-ons/WebExtensions/What_are_WebExtensions
l10n:
  sourceCommit: 3116241f515352d336d2edb460cebfe99d43aea7
---

> [!NOTE]
> 拡張機能の基本概念についてすでに理解している場合は、この章をスキップして、[拡張機能ファイルの構成](/ja/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)を確認してください。その後、[リファレンスドキュメント](/ja/docs/Mozilla/Add-ons/WebExtensions#リファレンス)を参照して、拡張機能の作成を開始してください。Firefox 拡張機能の開発、テスト、公開に関するワークフローの詳細を学ぶには、[Firefox 拡張機能ワークショップ](https://extensionworkshop.com/?utm_source=developer.mozilla.org&utm_medium=documentation&utm_campaign=your-first-extension)をご覧ください。

拡張機能は、HTML、CSS、JavaScript といったおなじみのウェブベースの技術を使って作成します。拡張機能は、ウェブページ上の JavaScript と同じ Web API を使用することができますが、同時にさらに追加の JavaScript API 群にアクセスすることも可能です。

追加の JavaScript API 群である [WebExtensions API](/ja/docs/Mozilla/Add-ons/WebExtensions) は、Google Chrome、Apple Safari、Microsoft Edge、Opera といった主要なブラウザー間で広く互換性があります。Firefox 向けに作成された拡張機能は、ほとんどの場合、他のブラウザーでも、[変更](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/)をほとんど、あるいは全く加えることなく動作します。

WebExtensions API を使うと、ウェブページ内のコードだけで実現できる範囲をはるかに超えて、拡張機能でさまざまなことが可能になります。以下に、その一例をいくつか挙げます。

**ウェブサイトの機能強化や補完**: 拡張機能を使用して、ブラウザー上で利用可能な追加機能や、ウェブサイトからの情報を配信しましょう。ユーザーが閲覧したページから詳細情報を収集することができるようにすることで、提供するサービスの質を向上させることができます。

例：[Enhancer for YouTube](https://addons.mozilla.org/ja/firefox/addon/enhancer-for-youtube/) や [Twitter 用コントロールパネル](https://addons.mozilla.org/ja/firefox/addon/control-panel-for-twitter/) など。

![YouTube 動画ページで、動画プレーヤーの下に Enhancer for YouTube のコントロールバーが表示されています。ポインターがコントロールバーのボタンに重なり、「シネマモード」のツールチップが表示されています。](enhancer_for_youtube.png)

**ユーザーの個性を見せる**: ブラウザー機能拡張はユーザーによってブラウズされるページコンテンツを操作できます。例えば、ユーザーのお気に入りのロゴや写真を、訪れるすべてのページの背景として追加できます。拡張機能は Firefox UI の見た目を更新する力を与えることもできます（スタンドアローンの [テーマアドオン](https://extensionworkshop.com/documentation/themes/)を使っても同様に Firefox UI を更新できます）。

例: [Tabliss](https://addons.mozilla.org/ja/firefox/addon/tabliss/), [Stylus](https://addons.mozilla.org/ja/firefox/addon/styl-us/), [Emoji](https://addons.mozilla.org/ja/firefox/addon/emoji-sav/).

![Tabliss 拡張機能でスタイル設定された新しいタブには、写真、時刻、挨拶メッセージが表示されます。](tabliss_new_tab.png)

**ウェブページのコンテンツを追加/削除**: ウェブページで触れられた国や都市への旅行ガイドへのアクセスを提供してウェブページのしつこい広告をユーザーがブロックするのを補助したり、読む体験の一貫性を提供するためにページの再フォーマットをしたいかもしれません。ページの HTML と CSS にアクセスして更新する力を持って、拡張機能はユーザーが見たい方法でウェブを見るのを助けることができます。

例: [uBlock Origin](https://addons.mozilla.org/ja/firefox/addon/ublock-origin/), [Return YouTube Dislike](https://addons.mozilla.org/ja/firefox/addon/return-youtube-dislikes/), [LeechBlock NG](https://addons.mozilla.org/ja/firefox/addon/leechblock-ng/).

![uBlock Origin のポップアップは、ブロックされたトラッカーの統計情報を示します。](ublock_origin_add_on.png)

**ツールや新しいブラウズ機能を追加**: タスクボードに新しい機能を追加したり、URL やハイパーリンクやページのテキストから QR コード画像を生成したりします。[WebExtensions APIs](/ja/docs/Mozilla/Add-ons/WebExtensions) の柔軟な UI オプションや力を得て、ブラウザーに新機能を簡単に追加できます。そしてほぼあらゆるウェブサイトの機能を改良できて、それはあなたのウェブサイトだけとは限りません。

例: [Worldwide Radio](https://addons.mozilla.org/ja/firefox/addon/worldwide-radio/), [Flagfox](https://addons.mozilla.org/ja/firefox/addon/flagfox/), [Tomato Clock](https://addons.mozilla.org/ja/firefox/addon/tomato-clock/)

![「Worldwide Radio」拡張機能では、カナダのラジオ局の一覧が示されており、1 局が再生対象として選択されています。](worldwide_radio_extension.png)

**ゲーム**: オフラインで遊べるような伝統的なコンピューターゲームや、新しいゲームの可能性を探検できます。例えば、日々のブラウジングにゲームを取り込むなど。

例: [RPG Game - Dedalium by Loycom Games](https://addons.mozilla.org/ja/firefox/addon/rpg-game-online-dedalium/), [Solitaire Card Game](https://addons.mozilla.org/ja/firefox/addon/solitaire-spider-freecell/), [Boxel 3D](https://addons.mozilla.org/ja/firefox/addon/boxel-3d-game/).

![「デダリウム」のポップアップに「ネットワークガーディアンを作成」画面が表示され、装備の選択とキャラクターの作成を選べます。](dedalium_popup.png)

**開発ツールを追加**: あなたのビジネスに沿った開発ツールを提供したり、共有しておきたい便利なテクニックやウェブ開発へのアプローチを提供できます。いずれの方法でも、開発者ツールバーに新規タブを追加することで、組み込みの Firefox 開発ツールを改良できます。

例: [aXe Developer Tools](https://addons.mozilla.org/ja/firefox/addon/axe-devtools/), [Web Developer](https://addons.mozilla.org/ja/firefox/addon/web-developer/), [Web React Developer Tools](https://addons.mozilla.org/ja/firefox/addon/react-devtools/)

![Firefox 開発者ツール内の axe DevTools 拡張機能が、ページ内で見つかったアクセシビリティ上の問題の概要と、その下に問題一覧を表示しています。](axe_developer_tools_add_on.png)

アイデアや質問がある場合は、[Add-ons Discourse](https://discourse.mozilla.org/c/add-ons/35) または [Matrix](https://wiki.mozilla.org/Matrix) の [Add-ons ルーム](https://chat.mozilla.org/#/room/#addons:mozilla.org) までご連絡ください。

## 次のステップ

- シンプルな拡張機能を一通り作成するには、[初めての拡張機能](/ja/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension)を参照してください。
- 拡張機能の構成については [拡張機能の中身](/ja/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)を参照してください。
- [拡張機能サンプル](/ja/docs/Mozilla/Add-ons/WebExtensions/Examples)にある拡張機能のサンプルを動かしてみましょう。
