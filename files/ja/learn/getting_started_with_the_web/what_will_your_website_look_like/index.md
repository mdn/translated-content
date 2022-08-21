---
title: Web サイトをどんな外見にするか
slug: Learn/Getting_started_with_the_web/What_will_your_website_look_like
tags:
  - Assets
  - Composing
  - Deprecated
  - Plan
  - l10n:priority
  - コンテンツ
  - デザイン
  - フォント
  - 初心者
  - 学習
translation_of: Learn/Getting_started_with_the_web/What_will_your_website_look_like
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/Getting_started_with_the_web/Installing_basic_software", "Learn/Getting_started_with_the_web/Dealing_with_files", "Learn/Getting_started_with_the_web")}}

「_Web サイトをどのような外見にするか_」では、「どんな情報を Web サイトで提供するか」、「どのフォントと色を使うのか」、「私の Web サイトは何をするのか」といった、コードを書き始める*前に*あなたの Web サイトについて計画したりデザインするべき事柄について説明します。

## まず最初に: 計画を立てる

始める前に、いくつか考えておかなければいけないことがあります。あなたの Web サイトは実際に何をすべきでしょうか？普通 Web サイトは様々なことができます。しかし、はじめは単純なことにとどめておくべきでしょう。まずは、一つの見出し、一つの画像、そして少しの文章をもつシンプルな Web ページを作ることから始めましょう。

まずはじめに、次の質問に答える必要があります。

1.  **何について書かれた Web サイトですか？** 犬、ニューヨーク、それともパックマン？
2.  **テーマについてどんなことを書きますか？** タイトルと少しの文章、それからページに表示させたい画像を考えます。
3.  **Web サイトをどんな見た目にしますか？** シンプルで高いレベルから考えます。背景の色は何色にする？サイトにピッタリのフォントの種類はどんなもの？フォーマルなフォント？漫画みたいなフォント？くっきりとした太字？それとも、繊細な細字のフォントでしょうか？

> **Note:** 複雑なプロジェクトでは、カラー、フォント、ページのアイテム間のスペース、適切な文章のスタイルなど、詳細なガイドラインが必要です。これは、デザインガイドやデザインシステムやブランドブックと呼ばれます。一例として、 [Firefox Photon Design System](https://design.firefox.com/photon/)があります。

## デザインを大まかに描き出す

次に、ペンと紙を取って、あなたのサイトの見た目をどういう風にしたいのか、大まかに描き出します。はじめてのシンプルな Web ページでは、描き出すものもあまりないですが、Web サイトを作るうえでの習慣として身につけるべきです。ヴァン・ゴッホのようになる必要はありませんので！

![](website-drawing-scan.png)

> **Note:** 現実の複雑な Web サイトの場合でも、デザインチームは普通、ラフスケッチを描くことから始めます。その後、グラフィックエディタや Web の技術を使って、デジタルのモックアップを作るのです。
>
> 多くの場合、Web の開発チームには、グラフィックデザイナーと{{Glossary("UX", "ユーザーエクスペリエンス")}} (UX) デザイナーがいます。グラフィックデザイナーは、名前の通り Web サイト上の目に見えるイメージなどを作り上げます。 UX デザイナーは、もう少し抽象的な役割を持っていて、サイトを訪れるユーザーが Web サイトでどういう経験をし、どのようにインタラクションするかということを考えます。

## アセットを選ぶ

この時点で、あなたの Web ページについて、将来どう表現したいかをまとめ始めるとよいでしょう。

### 文章・テキスト

あなたが先ほど考えたちょっとした文章やタイトルは、まだそのまま残しておきます。手近なところに置いておきましょう。

### テーマカラー

色を選ぶときは、[色選択ツール](/ja/docs/Web/CSS/CSS_Colors/Color_picker_tool) (カラーピッカー: Firefox のアドオンやアプリもあります) のサイトへ行き、自分の好みの色を見つけましょう。色をクリックすると、 `#660066` のような 6 文字の奇妙なコードが出てきます。これは*ヘキサコード* (16 進法コード) と呼ばれ、あなたの選んだ色を表しています。今はどこか安全なところにコピーしておきましょう。

![](Screenshot%20from%202014-11-03%2017:40:49.png)

### 画像・イメージ

画像を探すには、[Google 画像検索](https://www.google.com/imghp?gws_rd=ssl)にアクセスし、ぴったりなものを探しましょう。

1.  欲しい画像が見つかったら、クリックして拡大表示にします。
2.  画像を右クリック (Mac では Ctrl +クリック) し、\[名前を付けて画像を保存...] を選択して、画像を安全に保存する場所を選択します。または、後で使用するためにブラウザーのアドレスバーから画像の Web アドレスをコピーします。

![](updated-google-images.png)

なお、Web 上のほとんどの画像には、 Google 画像検索にあるものも含め、著作権があります。あなたが著作権を侵害してしまう可能性を減らすために、 Google のライセンスフィルターを使うと良いでしょう。 *ツール*ボタンをクリックすると、*ライセンス*オプションが下に表示されます。*再使用が許可された画像*などの選択肢を選択してください。

![](updated-google-images-licensing.png)

### フォント

次のような手順でフォントを選びます。

1.  [Google Fonts](http://www.google.com/fonts) に行き、ページをスクロールして気に入ったフォントを見つけます。右側のコントロールを使って、結果をフィルタすることもできます。
2.  使いたいフォントの上にある**プラス** (追加) アイコンをクリックします。
3.  ページ下部のパネルにある "\* Family Selected"\_ \_と書かれたボタンをクリックします ("\*" は選択したフォントの数によって変わります)。
4.  ポップアップボックスに、Google が用意してくれた数行のコードが表示されるので、あとでテキストエディタに入力する時のためにコピーしておきます。

![](font1.png)

![](font2.png)

{{PreviousMenuNext("Learn/Getting_started_with_the_web/Installing_basic_software", "Learn/Getting_started_with_the_web/Dealing_with_files", "Learn/Getting_started_with_the_web")}}

## このモジュール内の文書

- [基本的なソフトウェアのインストール](/ja/docs/Learn/Getting_started_with_the_web/Installing_basic_software)
- [Web サイトをどのような外見にするか](/ja/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like)
- [ファイルの扱い](/ja/docs/Learn/Getting_started_with_the_web/Dealing_with_files)
- [HTML の基本](/ja/docs/Learn/Getting_started_with_the_web/HTML_basics)
- [CSS の基本](/ja/docs/Learn/Getting_started_with_the_web/CSS_basics)
- [JavaScript の基本](/ja/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
- [Web サイトの公開](/ja/docs/Learn/Getting_started_with_the_web/Publishing_your_website)
- [Web のしくみ](/ja/docs/Learn/Getting_started_with_the_web/How_the_Web_works)
