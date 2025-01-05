---
title: "課題: コミュニティスクールのホームページの組版"
slug: Learn_web_development/Core/Text_styling/Typesetting_a_homepage
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Web_fonts", "Learn_web_development/Core/CSS_layout", "Learn_web_development/Core/Text_styling")}}

この評価では、コミュニティスクールのホームページ用にテキストを装飾することで、このモジュール全体でカバーしてきたすべてのテキスト装飾テクニックについての理解をテストします。 その過程は楽しくなるかもしれません。

## 出発点

この評価を開始するには、次のことが必要です。

- 練習用の [HTML](https://github.com/mdn/learning-area/blob/main/css/styling-text/typesetting-a-homepage-start/index.html) ファイルと [CSS](https://github.com/mdn/learning-area/blob/main/css/styling-text/typesetting-a-homepage-start/style.css) ファイルと、提供されている[外部リンクアイコン](https://github.com/mdn/learning-area/blob/main/css/styling-text/typesetting-a-homepage-start/external-link-52.png)を入手してください。
- ローカルコンピューターにそれらのコピーを作成します。

あるいは、[CodePen](https://codepen.io/)、[JSFiddle](https://jsfiddle.net/)、[Glitch](https://glitch.com/) などのサイトを使って評価することもできます。 HTML を貼り付けて CSS をこれらのオンラインエディターのいずれかに入力し、[この URL](https://mdn.github.io/learning-area/css/styling-text/typesetting-a-homepage-start/external-link-52.png) を使用して背景画像を指定することができます。

> [!NOTE]
> 行き詰まった場合は、[コミュニケーションチャンネル](/ja/docs/MDN/Community/Communication_channels)のいずれかに連絡してください。

## プロジェクトの概要

架空のコミュニティカレッジのホームページ用の生の HTML と、ページを 2 列のレイアウトに装飾し、その他の基本的な装飾をする CSS が提供されています。 CSS ファイルの最後にあるコメントの下に CSS の追加部分を書いて、あなたが行った部分に簡単に印を付けることができるようにします。 一部のセレクターがくどくても心配しないで、この場合は見逃してください。

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

![課題デザインの完了画面のスクリーンショット。上部の見出しには 'St Huxley's Community College' と表示されています。バナーヘッダーとコンテンツの間には赤い線が引かれています。メインコンテンツは 3 段組みで、 2 つの段にはテキストが含まれ、 3 つ目の段には縦のナビゲーションバーがあります。](example2.png)

{{PreviousMenuNext("Learn_web_development/Core/Text_styling/Web_fonts", "Learn_web_development/Core/CSS_layout", "Learn_web_development/Core/Text_styling")}}
