---
title: CSS によるスタイル設定の基本
slug: Learn_web_development/Core/Styling_basics
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core")}}

CSS （カスケーディングスタイルシート）は、ウェブページのスタイルやレイアウトに使用されます。例えば、コンテンツのフォント、色、サイズ、文字間隔を変更したり、コンテンツを複数の段に分割したり、アニメーションや装飾機能を追加したりすることができます。このモジュールでは、構文、機能、テクニックなど、これで必要な CSS の基本すべてを提供します。

## 前提知識

このモジュールを始める前に、[基本的なソフトウェアのインストール](/ja/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software)で説明されている基本的な作業環境と、[ファイルの扱い](/ja/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files)で説明されているファイルの作り方や管理の仕方について理解しておいてください。また、 HTML に親しんでおいてください（まだの場合は [HTML によるコンテンツの構造化](/ja/docs/Learn_web_development/Core/Structuring_content)を一通りやっておいてください。

> [!NOTE]
> 自身のファイルを作れないコンピューターやタブレット、その他の端末で作業する場合、（ほとんどの）コードサンプルは [JSBin](https://jsbin.com/) や [Glitch](https://glitch.com/) といったオンラインコーディングプログラムで試すことが可能です。

## ガイド

- [CSS とは何か](/ja/docs/Learn_web_development/Core/Styling_basics/What_is_CSS)
  - : CSS を使用すると、見栄えの良いウェブページを作成することができますが、その裏側ではどのように動作しているのでしょうか？この記事では、 CSS とは何か、基本的な構文はどのようなものか、そして、ブラウザーが CSS を HTML に適用してスタイル設定を行う方法について説明します。
- [CSS 入門](/ja/docs/Learn_web_development/Core/Styling_basics/Getting_started)
  - : この記事では、シンプルな HTML 文書に CSS を適用し、その過程で CSS 言語の実践的な詳細を学んでいきます。また、まだ見ていないの CSS 構文機能についても確認します。
- [経歴ページのスタイル設定](/ja/docs/Learn_web_development/Core/Styling_basics/Styling_a_bio_page) <sup>課題</sup>
  - : この課題では、単純な経歴ページのスタイル設定を行い、セレクターの書き方やテキストのスタイル設定など、これまでのレッスンで学んだスキルのいくつかを試してみます。
- [CSS セレクターの基本](/ja/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
  - : この記事では、基本的な型、クラス、IDセレクターを含め、セレクターの基本事項をいくつかおさらいします。
- [属性セレクター](/ja/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors)
  - : HTML の学習で既にご存知のように、要素は、マークアップされた要素についての詳細情報を提供する属性を持つすることができます。 CSS では、特定の属性を持つ要素を対象とするために、属性セレクターを使用することができます。 このレッスンでは、これらの非常に便利なセレクターの使用方法を表示します。
- [擬似クラスと擬似要素](/ja/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
  - : 次に紹介するセレクターは、**擬似クラス**と**擬似要素**と呼ばれるものです。これらは数多くあり、特定の目的で使用されることが多いです。使用方法を理解したら、さまざまな種類に目を通し、達成しようとしている作業に適したものがあるかどうかを確認することができます。
- [結合子](/ja/docs/Learn_web_development/Core/Styling_basics/Combinators)
  - : 最後に取り上げるセレクターは、結合子と呼ばれます。結合子は、他のセレクターと組み合わせて使用することで、他の要素（例えば、子要素や兄弟要素）との相対的な DOM 内の位置に基づいて要素を選択することができます。
- [ボックスモデル](/ja/docs/Learn_web_development/Core/Styling_basics/Box_model)
  - : CSS で作成されたものにはすべてボックスが含まれており、これらのボックスを理解することが、 CSS でより複雑なレイアウトを作成したり、アイテムを他にもアイテムを配置したりする上で重要となります。このレッスンでは、 CSS の「ボックスモデル」について見ていきます。これらがどのように動作するのか、また、それらに関連する用語について理解を深めることができます。
- [競合の処理](/ja/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
  - : このレッスンの目的は、CSS の最も基本的な概念であるカスケード、特定の仕様、継承について理解を深めることです。これらは、CSS が HTML に適用される方法と、スタイル宣言間の競合がどのように解決されるかをコントロールします。
- [値と単位](/ja/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
  - : CSS ルールには[宣言](/ja/docs/Web/CSS/Guides/Syntax/Introduction#css_の宣言)が含まれており、宣言はプロパティと値で構成されています。 CSS で使用される各プロパティには、許容される値の種類を記述した**値型**があります。このレッスンでは、最も頻繁に使用される値型のいくつかを取り上げ、それらが何であるか、また、これらがどのように作用するのかを説明します。
- [CSS におけるアイテムのサイズ設定](/ja/docs/Learn_web_development/Core/Styling_basics/Sizing)
  - : デザイン上のさまざまな機能がどの程度の大きさになるかを理解することは重要です。このレッスンでは、要素が CSS 経由でサイズを取得するさまざまな方法をまとめ、将来的に役立つサイズ指定に関するいくつかの用語を定義します。
- [背景と境界](/ja/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
  - : このレッスンでは、CSS の背景と境界を使ってできるクリエイティブなことをいくつか見ていきます。グラデーションや背景画像や角丸について、背景と境界は CSS のスタイル設定に関する多くの疑問の解決策です。
- [コンテンツのはみ出し (オーバーフロー)](/ja/docs/Learn_web_development/Core/Styling_basics/Overflow)
  - : オーバーフローは、ボックス内にコンテンツが収まりきらないときに発生します。このガイドでは、その詳細とそれらについてどのように対処するかを学びます。
- [画像、メディア、フォーム要素](/ja/docs/Learn_web_development/Core/Styling_basics/Images_media_forms)
  - : このレッスンでは、特定の要素が CSS でどのように扱われるかを見ていきます。画像・メディア・フォーム要素では、CSS でスタイルを設定するにあたって通常のボックスとは少し異なる動作をします。何が可能で何が不可能であるのかを理解することで、フラストレーションを軽減することができます。このレッスンでは、知っておくべきことをいくつか取り上げます。
- [表のスタイル設定](/ja/docs/Learn_web_development/Core/Styling_basics/Tables)
  - : HTML 表を装飾することは、世界で最も魅力的な仕事ではありませんが、時にはそれをしなければならないこともあります。この記事では、表をスタイル設定するテクニックとともに、HTML 表を見栄え良くするためのガイドを提供します。
- [CSS のデバッグ](/ja/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS)
  - : この記事では CSS の問題をデバッグする方法について案内し、何が起こっているかを調べるのに、すべてのモダンブラウザーに入っている開発者ツールがどう役立つかを示します。
- [課題: 基本的な CSS の理解](/ja/docs/Learn_web_development/Core/Styling_basics) <sup>課題</sup>
  - : この課題では、最終的なデザイン（名刺/ゲーム用カード/ソーシャルメディアのプロフィール）を作成するために、完了しなければならない数々の関連の演習を提供しています。
- [課題: 装飾的なレターヘッド付きの便箋の作成](/ja/docs/Learn_web_development/Core/Styling_basics) <sup>課題</sup>
  - : 好印象を与えたいのなら、素敵なレターヘッドの便箋に手紙を書くのはとても良い考えです。この評価では、そのような見た目のオンラインテンプレートの作成に挑戦します。
- [課題: かっこいいボックス](/ja/docs/conflicting/Learn_web_development/Core/Styling_basics) <sup>課題</sup>
  - : この課題では、かっこいいボックスをいくつか作成する練習をします。目を引くボックスを作成してみましょう。

## 追加のチュートリアル

これらのチュートリアルは学習経路には属しませんが、それでも興味深いものです。メインのコア記事をすべて読み終えた後にオプションで学習する、さらに上のゴールとして考えてみてください。

- [ボックスの高度な効果](/ja/docs/Learn_web_development/Core/Styling_basics/Advanced_styling_effects)
  - : この記事では、 CSS の問題をデバッグする方法について説明し、すべての現代のブラウザーに搭載されている開発者ツールが、何が起こっているのかを探す手助けをしてくれることを紹介します。
- [カスケードレイヤー](/ja/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
  - : このレッスンでは、 [CSS カスケード](/ja/docs/Web/CSS/Guides/Cascade/Introduction)と [CSS 詳細度](/ja/docs/Web/CSS/Guides/Cascade/Specificity)という基本的な概念の上に構築された、より高度な機能である[カスケードレイヤー](/ja/docs/Web/CSS/Reference/At-rules/@layer)を紹介することを目的としています。
- [さまざまな方向のテキストの扱い](/ja/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
  - : 近年、 CSS は、コンテンツのさまざまな方向に対応するために進化してきました。右から左に記述するコンテンツだけなく、上から下に記述するコンテンツ（日本語など）にも対応しています。これらのさまざまな方向は、書字方向と呼ばれます。学習を進め、レイアウト作業を始めるにあたり、書字方向を理解することは非常に役立つでしょう。そのため、この記事では書字方向について紹介します。
- [CSS の整理](/ja/docs/Learn_web_development/Core/Styling_basics/Organizing)
  - : スタイルシートやプロジェクトが大きい状態で作業しはじめると、巨大な CSS ファイルを維持するのが難しいことがわかります。この記事では、保守しやすい CSS を書くためのベストプラクティスと、他の人が保守性を向上させるための解決策の一部を紹介します。

## 関連情報

- [Learn HTML and CSS](https://v2.scrimba.com/learn-html-and-css-c0p?via=mdn), Scrimba <sup>_MDN カリキュラムパートナー_</sup>
  - : [Scrimba](https://scrimba.com?via=mdn) の _Learn HTML and CSS_ コースでは、知識豊富な講師陣による楽しい対話形式のレッスンと課題を通じて、 5 つの素晴らしいプロジェクトを構築し展開しながら、HTML と CSS を学んでいきます。
- [Write your first lines of CSS!](https://v2.scrimba.com/the-frontend-developer-career-path-c0j/~015?via=mdn), Scrimba <sup>_MDN カリキュラムパートナー_</sup>
  - : この対話型のレッスンでは、 CSS 構文の有益な入門編を提供して指定されています。

{{NextMenu("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core")}}
