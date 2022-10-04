---
title: CSS の構成要素
slug: Learn/CSS/Building_blocks
---

{{LearnSidebar}}

このモジュールは [CSS の第一歩](/ja/docs/Learn/CSS/First_steps)から派生しています。CSS の言語や文法に慣れてきて、それを使う上での基本的な経験を得てきたという前提で、もう少し掘り下げてみましょう。カスケードと継承・セレクターの全種類・単位・サイズ設定・背景と枠線・デバッグなどを見ていきます。

ここでの目的は、[テキストの装飾](/ja/docs/Learn/CSS/Styling_text)や [CSS レイアウト](/ja/docs/Learn/CSS/CSS_layout)などのより具体的な分野に進む前に、適切な CSS を書くための手法を知り、すべての重要な理論を理解できるようになることです。

> **注目:** #### フロントエンドのウェブ開発者を目指している方へゴールに向かって頑張るために必要な情報をまとめたコースをご用意しました。[**始めましょう**](/ja/docs/Learn/Front-end_web_developer)

## 前提知識

このモジュールを始める前に、次のものを身につけておいてください。

1. コンピューターの使い方と (ウェブを見たりコンテンツを消費したりといった) ウェブの受動的な使い方に関する基本的な知識に慣れ親しんでいること。
2. [基本的なソフトウェアのインストール](/ja/docs/Learn/Getting_started_with_the_web/Installing_basic_software)で説明されている基本的な作業環境と、[ファイルの扱い方](/ja/docs/Learn/Getting_started_with_the_web/Dealing_with_files)で説明されているファイルの作り方や管理の仕方について理解していること。
3. [HTML 入門](/ja/docs/Learn/HTML/Introduction_to_HTML)で説明されている HTML についての基礎知識に慣れ親しんでいること。
4. [CSS の第一歩](/ja/docs/Learn/CSS/First_steps)で説明されている CSS の基本について理解していること。

> **メモ:** 自分自身でファイルを作れない環境 (タブレットやその他の端末) で作業する場合、(ほとんどの) コードサンプルは [JSBin](https://jsbin.com/) や [Glitch](https://glitch.com/) といったオンラインコーディングプログラムで試すことが可能です

## ガイド

このモジュールは、 CSS 言語のもっとも重要な部分をカバーする以下の記事で構成されています。各記事には理解度を試す練習問題も含まれています。

- [カスケードと継承](/ja/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
  - : このレッスンでの目的は、CSS を HTML に適用する方法と競合した場合の解決方法について、もっとも基本的な概念 (カスケード・詳細度・継承) の理解を深めていくことです。
- [CSS セレクター](/ja/docs/Learn/CSS/Building_blocks/Selectors)

  - : CSS セレクターにはさまざまな種類があり、スタイルを設定する要素を厳密に指定することができます。この記事と以下のサブ記事では、それらがどのように機能するかを詳しく見ていきます。サブ記事は以下の通りです。

    - [要素・クラス・ID によるセレクター](/ja/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors)
    - [属性によるセレクター](/ja/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors)
    - [擬似クラスおよび疑似要素](/ja/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
    - [結合子](/ja/docs/Learn/CSS/Building_blocks/Selectors/Combinators)

- [ボックスモデル](/ja/docs/Learn/CSS/Building_blocks/The_box_model)
  - : CSS のすべてにはボックスの概念があり、これを理解することは CSS でレイアウトを作成したりアイテム同士を揃えたりするためのコツとなります。このレッスンでは CSS ボックスモデルを詳しく解説し、その仕組みと関連する用語を理解することで、より複雑なレイアウトに進んでいけるようにします。
- [背景と枠線](/ja/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
  - : このレッスンでは、CSS の背景と枠線を使ってできるクリエイティブなことをいくつか見ていきます。グラデーションや背景画像や角丸について、背景と枠線は CSS のスタイリングに関する多くの疑問の解決策です。
- [テキスト方向の操作](/ja/docs/Learn/CSS/Building_blocks/Handling_different_text_directions)
  - : 近年では、右から左へだけでなく上から下へのコンテンツ（日本語など）を含むコンテンツのさまざまな向きをより適切にサポートするために CSS サポートが進化しています。これらのさまざまな向きの考え方については "**writing modes"** と呼ばれます。レイアウトの学習を進めて進めていくと "writing modes" の理解がとても役に立っていきますので、この記事ではそれらを紹介していきます。
- [コンテンツのはみ出し (オーバーフロー)](/ja/docs/Learn/CSS/Building_blocks/Overflowing_content)
  - : このレッスンでは、CSS のもう 1 つの重要な概念である **オーバーフロー** (**overflow**) を見ていきます。オーバーフローは、ボックス内にコンテンツが収まりきらないときに発生します。このガイドでは、その詳細とそれらについてどのように対処するかを学びます。
- [CSS の値と単位](/ja/docs/Learn/CSS/Building_blocks/Values_and_units)
  - : CSS で使用されるすべてのプロパティには、特定の値または値の組み合わせのみが許可されます。このレッスンでは、もっともよく使用される値と単位について見ていきます。
- [CSS によるサイズ設定](/ja/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS)
  - : これまでのさまざまなレッスンで、CSS を使用してウェブページ上の項目のサイズを調整するいくつかの方法に出会いました。デザイン作業をしていくうえで、それぞれの手法がどれほど大きく異なっているのかを理解することが重要です。このレッスンでは、CSS によって要素のサイズを設定する方法をまとめ、サイジングに役立ついくつかの用語を定義します。
- [画像・メディア・フォーム要素](/ja/docs/Learn/CSS/Building_blocks/Images_media_form_elements)
  - : このレッスンでは、特定の要素が CSS でどのように扱われるかを見ていきます。画像・メディア・フォーム要素では、CSS でスタイルを設定するにあたって通常のボックスとは少し異なる動作をします。何が可能で何が不可能であるのかを理解することで、フラストレーションを軽減することができます。このレッスンでは、知っておくべきことをいくつか取り上げます。
- [表のスタイリング](/ja/docs/Learn/CSS/Building_blocks/Styling_tables)
  - : HTML 表を装飾することは、世界で最も魅力的な仕事ではありませんが、時にはそれをしなければならないこともあります。この記事では、表をスタイリングするテクニックとともに、HTML 表を見栄え良くするためのガイドを提供します。
- [CSS のデバッグ](/ja/docs/Learn/CSS/Building_blocks/Debugging_CSS)
  - : CSS を書くとき、期待どおりに動作していないように見える問題が発生する場合があります。この記事では CSS の問題をデバッグする方法について案内し、何が起こっているかを調べるのに、すべてのモダンブラウザーに入っている開発者ツールがどう役立つかを示します。
- [CSS の整理](/ja/docs/Learn/CSS/Building_blocks/Organizing)
  - : スタイルシートやプロジェクトが大きい状態で作業しはじめると、巨大な CSS ファイルを維持するのが難しいことがわかります。この記事では、保守しやすい CSS を書くためのベストプラクティスと、他の人が保守性を向上させるための解決策の一部を紹介します。

## 評価テスト

CSS スキルをテストしたいですか？以下の各評価では上記のガイドで説明されている CSS の理解度をテストできます。

- [基本的な CSS の理解](/ja/docs/Learn/CSS/Building_blocks/Fundamental_CSS_comprehension)
  - : この評価では基本的な構文・セレクター・詳細度・ボックスモデル・その他の理解度をテストします。
- [装飾的なレターヘッド付きの便箋の作成](/ja/docs/Learn/CSS/Building_blocks/Creating_fancy_letterheaded_paper)
  - : 好印象を与えたいのなら、素敵なレターヘッドの便箋に手紙を書くのはとても良い考えです。この評価では、そのような見た目のオンラインテンプレートの作成に挑戦します。
- [かっこいいボックス](/ja/docs/Learn/CSS/Building_blocks/A_cool_looking_box)
  - : ここでは背景と枠線のスタイリングを使った人目を引くボックスの作り方を実践します。

## 関連情報

- [ボックスの高度な効果](/ja/docs/Learn/CSS/Building_blocks/Advanced_styling_effects)
  - : この記事はトリックの箱として機能し、ボックスの影・ブレンドモード・フィルターのような、ボックスの装飾に使用できる高度な機能のいくつかを紹介します。
