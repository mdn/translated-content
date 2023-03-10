---
title: ウェブサイトをどんな外見にするか
slug: Learn/Getting_started_with_the_web/What_will_your_website_look_like
l10n:
  sourceCommit: ca3bd6f9ad181ea03b5b66bd7ca294559e169d83
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Getting_started_with_the_web/Installing_basic_software", "Learn/Getting_started_with_the_web/Dealing_with_files", "Learn/Getting_started_with_the_web")}}

「_ウェブサイトをどんな外見にするか_」では、コードを書き始める前に、このウェブサイトについて計画したりデザインしたりすべき事柄について説明します。例えば「どんな情報をウェブサイトで提供するのか」「どのフォントや色を使いたいのか」「このウェブサイトは何をするのか」などです。

## まず最初に: 計画を立てる

始める前に、いくつか考えておかなければいけないことがあります。このウェブサイトは実際に何をすべきでしょうか？普通ウェブサイトは様々なことができます。しかし、はじめは単純なことにとどめておくべきでしょう。まずは、見出し一つ、画像一つ、そしていくつかの段落のある単純なウェブページを作ることから始めましょう。

まずはじめに、次の質問に答える必要があります。

1. **何についてのウェブサイトですか？** 犬、ニューヨーク、それともパックマン？
2. **主題についてどんな情報を表現しようとしていますか？** タイトルといくつかの段落、それからページに表示させたい画像を考えます。
3. **ウェブサイトをどんな外見にしますか？** 簡単で大まかな言葉で言うと？背景色は？適切なフォントはフォーマル？漫画？太字で派手？繊細？

> **メモ:** 複雑なプロジェクトでは、色、フォント、ページのアイテム間の余白、適切な文体など、詳細なガイドラインが必要です。これは、デザインガイド、デザインシステム、ブランドブックなどと呼ばれます。一例として、 [Firefox Photon Design System](https://design.firefox.com/photon/)があります。

## デザインをスケッチする

次に、ペンと紙を取って、あなたのサイトの見た目をどういう風にしたいのか、大まかに描き出します。はじめてのシンプルなウェブページでは、描き出すものもあまりないですが、ウェブサイトを作るうえでの習慣として身につけるべきです。ヴァン・ゴッホのようになる必要はありませんので！

![紙に描いたウェブサイトのラフ画とスケッチ](website-drawing-scan.png)

> **メモ:** 現実の複雑なウェブサイトの場合でも、デザインチームは普通、ラフスケッチを描くことから始めます。その後、グラフィックエディターや Web の技術を使って、デジタルのモックアップを作るのです。
>
> 多くの場合、ウェブの開発チームには、グラフィックデザイナーと{{Glossary("UX", "ユーザーエクスペリエンス")}} (UX) デザイナーがいます。グラフィックデザイナーは、ウェブサイトの見た目を作り上げます。 UX デザイナーは、もう少し抽象的な役割を持っていて、サイトを訪れるユーザーがウェブサイトでどういう経験をし、どのように操作するかということを考えます。

## 資産を選ぶ

この時点で、ウェブページについて、将来どう表現したいかをまとめ始めるとよいでしょう。

### テキスト

先ほど考えたちょっとした文章やタイトルは、まだそのまま残しておきます。手近なところに置いておきましょう。

### テーマカラー

色を選ぶときは、[色選択ツール](/ja/docs/Web/CSS/CSS_Colors/Color_picker_tool)へ行き、好みの色を見つけましょう。色をクリックすると、 `#660066` のような 6 桁の奇妙なコードが出てきます。これは*ヘキサコード*（16 進コード）と呼ばれ、選んだ色を表します。今はどこか安全なところにコピーしておきましょう。

![MDN Docs ウェブサイトのカラーピッカーツールで、RGB、HSL、HEX の色を利用できます](color-picker.png)

### 画像

画像を探すには、[Google 画像検索](https://www.google.com/imghp?gws_rd=ssl)にアクセスし、ぴったりなものを探しましょう。

1. 欲しい画像が見つかったら、クリックして拡大表示にします。
2. 画像を右クリック（Mac では Ctrl +クリック）し、\[名前を付けて画像を保存...] を選択して、画像を安全に保存する場所を選択します。または、後で使用するためにブラウザーのアドレスバーから画像のウェブアドレスをコピーします。

![Google 画像検索での検索語句の検索結果](updated-google-images.png)

なお、ウェブ上のほとんどの画像には、 Google 画像検索にあるものも含め、著作権があります。あなたが著作権を侵害してしまう可能性を減らすために、 Google のライセンスフィルターを使うと良いでしょう。 \[ツール] ボタンをクリックすると、 \[ライセンス] オプションが下に表示されます。「クリエイティブ・コモンズ ライセンス」などの選択肢を選択してください。

![Google 画像検索でクリエイティブ・コモンズ ライセンスの画像を取得するための検索結果のフィルタリング](updated-google-images-licensing.png)

### フォント

フォントを選ぶには次のようにします。

1. [Google Fonts](https://fonts.google.com/) へ行き、好きなフォントを探します。
2. Google が提供するコードの行をテキストエディターにコピーし、後で保存します。
3. Google Fonts を使用する際の詳細については、[このページ](https://developers.google.com/fonts/docs/getting_started)を参照してください。

{{PreviousMenuNext("Learn/Getting_started_with_the_web/Installing_basic_software", "Learn/Getting_started_with_the_web/Dealing_with_files", "Learn/Getting_started_with_the_web")}}

## このモジュール内の文書

- [基本的なソフトウェアのインストール](/ja/docs/Learn/Getting_started_with_the_web/Installing_basic_software)
- [ウェブサイトをどんな外見にするか](/ja/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like)
- [ファイルの扱い](/ja/docs/Learn/Getting_started_with_the_web/Dealing_with_files)
- [HTML の基本](/ja/docs/Learn/Getting_started_with_the_web/HTML_basics)
- [CSS の基本](/ja/docs/Learn/Getting_started_with_the_web/CSS_basics)
- [JavaScript の基本](/ja/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
- [ウェブサイトの公開](/ja/docs/Learn/Getting_started_with_the_web/Publishing_your_website)
- [ウェブのしくみ](/ja/docs/Learn/Getting_started_with_the_web/How_the_Web_works)
