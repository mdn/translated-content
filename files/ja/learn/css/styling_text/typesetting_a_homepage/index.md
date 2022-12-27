---
title: コミュニティスクールのホームページの組版
slug: Learn/CSS/Styling_text/Typesetting_a_homepage
---

{{LearnSidebar}}{{PreviousMenu("Learn/CSS/Styling_text/Web_fonts", "Learn/CSS/Styling_text")}}

この評価では、コミュニティスクールのホームページ用にテキストを装飾することで、このモジュール全体でカバーしてきたすべてのテキスト装飾テクニックについての理解をテストします。 途中で楽しい時間があるかもしれません。

| 前提知識: | この評価を試みる前に、このモジュールのすべての記事を読んでおくべきです。 |
| --------- | ------------------------------------------------------------------------ |
| 学習目標: | CSS テキスト装飾テクニックの理解をテストすること。                       |

## 出発点

この評価を開始するには、次のことが必要です。

- 練習用の [HTML](https://github.com/mdn/learning-area/blob/master/css/styling-text/typesetting-a-homepage-start/index.html) ファイルと [CSS](https://github.com/mdn/learning-area/blob/master/css/styling-text/typesetting-a-homepage-start/style.css) ファイルと、提供されている[外部リンクアイコン](https://github.com/mdn/learning-area/blob/master/css/styling-text/typesetting-a-homepage-start/external-link-52.png)を入手してください。
- ローカルコンピュータにそれらのコピーを作成します。

> **メモ:** あるいは、[JSBin](https://jsbin.com/) や [Thimble](https://thimble.mozilla.org/) などのサイトを使って評価することもできます。 HTML を貼り付けて CSS をこれらのオンラインエディタのいずれかに入力し、[この URL](http://mdn.github.io/learning-area/css/styling-text/typesetting-a-homepage-start/external-link-52.png) を使用して背景画像を指定することができます。 使用しているオンラインエディタに別の CSS パネルがない場合は、それをドキュメントの先頭の `<style>` 要素に自由に配置してください。

## プロジェクトの概要

架空のコミュニティカレッジのホームページ用の生の HTML と、ページを 2 列のレイアウトに装飾し、その他の基本的な装飾をする CSS が提供されています。 CSS ファイルの最後にあるコメントの下に CSS の追加部分を書いて、あなたが行った部分に簡単に印を付けることができるようにします。 一部のセレクタがくどくても心配しないで、この場合は見逃してください。

フォント

- まずはじめに、いくつかの自由に使えるフォントをダウンロードしてください。 これはカレッジですから、フォントはかなり真面目で、形式的で、信頼できる感じをページに与えるために選ばれるべきです — 一般的なテキスト本文のためのサイト全体の serif フォントに、見出しのための sans-serif または slab serif を組み合わせるといいかもしれません。
- 適切なサービスを使用して、これら 2 つのフォント用の bulletproof `@font-face` コードを生成してください。
- 本文フォントをページ全体に適用し、見出しフォントを見出しに適用します。

一般的なテキスト装飾

- サイト全体の `font-size` を `10px` にします。
- 見出しや他の要素タイプには、適切な相対単位を使用して定義された適切な `font-size` を与えます。
- 本文に適切な `line-height` を与えます。
- トップレベルの見出しをページの中央に配置します。
- 見出しをあまりにも押しつぶしすぎないようにし、文字が少し呼吸できるようにするために、見出しに少し `letter-spacing` を与えます。
- 必要に応じて、本文に `letter-spacing` と `word-spacing` を与えます。
- `<section>` の各見出しの後の最初の段落に、`20px` で、少し `text-indent` を与えます。

リンク

- ページの上部と下部にある水平バーの色に合わせて、リンクに訪問、フォーカス、ホバーの状態を設定します。
- デフォルトでリンクに下線が引かれますが、ホバーするかフォーカスを合わせると下線が消えるようにします。
- ページ上のすべてのリンクからデフォルトのフォーカスアウトラインを取り除きます。
- 目立つようにアクティブな状態に著しく異なるスタイルを与えますが、それでも全体的なページデザインに収まるようにします。
- 外部リンクの隣に外部リンクアイコンが挿入されるようにします。

リスト

- リストとリスト項目の間隔が、ページ全体のスタイルとうまく一致するようにしてください。 各リスト項目は段落行と同じ `line-height` を持ち、各リストの上下の段落の間隔は同じです。
- リスト項目に、ページのデザインにふさわしい素敵な行頭記号を付けてください。 カスタムの行頭記号画像を選択するか、それ以外のものを選択するかは、あなた次第です。

ナビゲーションメニュー

- ページのルックアンドフィールが適切になるようにナビゲーションメニューを装飾します。

## ヒントとコツ

- この演習では、HTML を編集する必要はまったくありません。
- ナビゲーションメニューを必ずしもボタンのように見せる必要はありませんが、ページの横に愚かに見えないように少し高くする必要があります。 また、これを垂直ナビゲーションメニューにする必要があることも忘れないでください。

## 例

次のスクリーンショットは、完成したデザインの外観の例です。

![](example2.png)

## 評価

組織的コースの一環としてこの評価に従っている場合は、採点のために作品を教師や指導者に渡すことができるはずです。 自己学習をしている場合は、[この演習についてのディスカッションスレッド](https://discourse.mozilla.org/t/typesetting-a-community-school-home-page-assessment/24683)や [Mozilla IRC](https://wiki.mozilla.org/IRC) の [#mdn](irc://irc.mozilla.org/mdn) IRC チャンネルで尋ねることで、かなり簡単に採点の手引きを得ることができます。 まず演習を試してみてください — 不正行為によって得られるものは何もありません！

{{PreviousMenu("Learn/CSS/Styling_text/Web_fonts", "Learn/CSS/Styling_text")}}

## このモジュール内の文書

- [基本的なテキストとフォントの装飾](/ja/docs/Learn/CSS/Styling_text/Fundamentals)
- [リストの装飾](/ja/docs/Learn/CSS/Styling_text/Styling_lists)
- [リンクの装飾](/ja/docs/Learn/CSS/Styling_text/Styling_links)
- [ウェブフォント](/ja/docs/Learn/CSS/Styling_text/Web_fonts)
- [コミュニティスクールのホームページの組版](/ja/Learn/CSS/Styling_text/Typesetting_a_homepage)
