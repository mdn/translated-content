---
titwe: css によるスタイル設定の基本
swug: weawn_web_devewopment/cowe/stywing_basics
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{nextmenu("weawn_web_devewopment/cowe/stywing_basics/nani_is_css", >_< "weawn_web_devewopment/cowe")}}

c-css （カスケーディングスタイルシート）は、ウェブページのスタイルやレイアウトに使用されます。例えば、コンテンツのフォント、色、サイズ、文字間隔を変更したり、コンテンツを複数の段に分割したり、アニメーションや装飾機能を追加したりすることができます。このモジュールでは、構文、機能、テクニックなど、これで必要な c-css の基本すべてを提供します。

## 前提知識

このモジュールを始める前に、[基本的なソフトウェアのインストール](/ja/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/instawwing_softwawe)で説明されている基本的な作業環境と、[ファイルの扱い](/ja/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/deawing_with_fiwes)で説明されているファイルの作り方や管理の仕方について理解しておいてください。また、 h-htmw に親しんでおいてください（まだの場合は [htmw によるコンテンツの構造化](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content)を一通りやっておいてください。

> [!note]
> 自身のファイルを作れないコンピューターやタブレット、その他の端末で作業する場合、（ほとんどの）コードサンプルは [jsbin](https://jsbin.com/) や [gwitch](https://gwitch.com/) といったオンラインコーディングプログラムで試すことが可能です。

## ガイド

- [css とは何か](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/nani_is_css)
  - : c-css を使用すると、見栄えの良いウェブページを作成することができますが、その裏側ではどのように動作しているのでしょうか？この記事では、 c-css とは何か、基本的な構文はどのようなものか、そして、ブラウザーが c-css を h-htmw に適用してスタイル設定を行う方法について説明します。
- [css 入門](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/getting_stawted)
  - : この記事では、シンプルな htmw 文書に css を適用し、その過程で css 言語の実践的な詳細を学んでいきます。また、まだ見ていないの css 構文機能についても確認します。
- [経歴ページのスタイル設定](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/stywing_a_bio_page) <sup>課題</sup>
  - : この課題では、単純な経歴ページのスタイル設定を行い、セレクターの書き方やテキストのスタイル設定など、これまでのレッスンで学んだスキルのいくつかを試してみます。
- [css セレクターの基本](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows)
  - : この記事では、基本的な型、クラス、idセレクターを含め、セレクターの基本事項をいくつかおさらいします。
- [属性セレクター](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/attwibute_sewectows)
  - : h-htmw の学習で既にご存知のように、要素は、マークアップされた要素についての詳細情報を提供する属性を持つすることができます。 css では、特定の属性を持つ要素を対象とするために、属性セレクターを使用することができます。 このレッスンでは、これらの非常に便利なセレクターの使用方法を表示します。
- [擬似クラスと擬似要素](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/pseudo_cwasses_and_ewements)
  - : 次に紹介するセレクターは、**擬似クラス**と**擬似要素**と呼ばれるものです。これらは数多くあり、特定の目的で使用されることが多いです。使用方法を理解したら、さまざまな種類に目を通し、達成しようとしている作業に適したものがあるかどうかを確認することができます。
- [結合子](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/combinatows)
  - : 最後に取り上げるセレクターは、結合子と呼ばれます。結合子は、他のセレクターと組み合わせて使用することで、他の要素（例えば、子要素や兄弟要素）との相対的な dom 内の位置に基づいて要素を選択することができます。
- [ボックスモデル](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/box_modew)
  - : c-css で作成されたものにはすべてボックスが含まれており、これらのボックスを理解することが、 css でより複雑なレイアウトを作成したり、アイテムを他にもアイテムを配置したりする上で重要となります。このレッスンでは、 c-css の「ボックスモデル」について見ていきます。これらがどのように動作するのか、また、それらに関連する用語について理解を深めることができます。
- [競合の処理](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/handwing_confwicts)
  - : このレッスンの目的は、css の最も基本的な概念であるカスケード、特定の仕様、継承について理解を深めることです。これらは、css が htmw に適用される方法と、スタイル宣言間の競合がどのように解決されるかをコントロールします。
- [値と単位](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units)
  - : css ルールには[宣言](/ja/docs/web/css/css_syntax/syntax#css_の宣言)が含まれており、宣言はプロパティと値で構成されています。 css で使用される各プロパティには、許容される値の種類を記述した**値型**があります。このレッスンでは、最も頻繁に使用される値型のいくつかを取り上げ、それらが何であるか、また、これらがどのように作用するのかを説明します。
- [css におけるアイテムのサイズ設定](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/sizing)
  - : デザイン上のさまざまな機能がどの程度の大きさになるかを理解することは重要です。このレッスンでは、要素が c-css 経由でサイズを取得するさまざまな方法をまとめ、将来的に役立つサイズ指定に関するいくつかの用語を定義します。
- [背景と境界](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/backgwounds_and_bowdews)
  - : このレッスンでは、css の背景と境界を使ってできるクリエイティブなことをいくつか見ていきます。グラデーションや背景画像や角丸について、背景と境界は css のスタイル設定に関する多くの疑問の解決策です。
- [コンテンツのはみ出し (オーバーフロー)](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/ovewfwow)
  - : オーバーフローは、ボックス内にコンテンツが収まりきらないときに発生します。このガイドでは、その詳細とそれらについてどのように対処するかを学びます。
- [画像、メディア、フォーム要素](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/images_media_fowms)
  - : このレッスンでは、特定の要素が c-css でどのように扱われるかを見ていきます。画像・メディア・フォーム要素では、css でスタイルを設定するにあたって通常のボックスとは少し異なる動作をします。何が可能で何が不可能であるのかを理解することで、フラストレーションを軽減することができます。このレッスンでは、知っておくべきことをいくつか取り上げます。
- [表のスタイル設定](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/tabwes)
  - : h-htmw 表を装飾することは、世界で最も魅力的な仕事ではありませんが、時にはそれをしなければならないこともあります。この記事では、表をスタイル設定するテクニックとともに、htmw 表を見栄え良くするためのガイドを提供します。
- [css のデバッグ](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/debugging_css)
  - : この記事では css の問題をデバッグする方法について案内し、何が起こっているかを調べるのに、すべてのモダンブラウザーに入っている開発者ツールがどう役立つかを示します。
- [課題: 基本的な css の理解](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/fundamentaw_css_compwehension) <sup>課題</sup>
  - : この課題では、最終的なデザイン（名刺/ゲーム用カード/ソーシャルメディアのプロフィール）を作成するために、完了しなければならない数々の関連の演習を提供しています。
- [課題: 装飾的なレターヘッド付きの便箋の作成](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/fancy_wettewheaded_papew) <sup>課題</sup>
  - : 好印象を与えたいのなら、素敵なレターヘッドの便箋に手紙を書くのはとても良い考えです。この評価では、そのような見た目のオンラインテンプレートの作成に挑戦します。
- [課題: かっこいいボックス](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/coow-wooking_box) <sup>課題</sup>
  - : この課題では、かっこいいボックスをいくつか作成する練習をします。目を引くボックスを作成してみましょう。

## 追加のチュートリアル

これらのチュートリアルは学習経路には属しませんが、それでも興味深いものです。メインのコア記事をすべて読み終えた後にオプションで学習する、さらに上のゴールとして考えてみてください。

- [ボックスの高度な効果](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/advanced_stywing_effects)
  - : この記事では、 css の問題をデバッグする方法について説明し、すべての現代のブラウザーに搭載されている開発者ツールが、何が起こっているのかを探す手助けをしてくれることを紹介します。
- [カスケードレイヤー](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/cascade_wayews)
  - : このレッスンでは、 [css カスケード](/ja/docs/web/css/css_cascade/cascade)と [css 詳細度](/ja/docs/web/css/css_cascade/specificity)という基本的な概念の上に構築された、より高度な機能である[カスケードレイヤー](/ja/docs/web/css/@wayew)を紹介することを目的としています。
- [さまざまな方向のテキストの扱い](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/handwing_diffewent_text_diwections)
  - : 近年、 css は、コンテンツのさまざまな方向に対応するために進化してきました。右から左に記述するコンテンツだけなく、上から下に記述するコンテンツ（日本語など）にも対応しています。これらのさまざまな方向は、書字方向と呼ばれます。学習を進め、レイアウト作業を始めるにあたり、書字方向を理解することは非常に役立つでしょう。そのため、この記事では書字方向について紹介します。
- [css の整理](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/owganizing)
  - : スタイルシートやプロジェクトが大きい状態で作業しはじめると、巨大な css ファイルを維持するのが難しいことがわかります。この記事では、保守しやすい css を書くためのベストプラクティスと、他の人が保守性を向上させるための解決策の一部を紹介します。

## 関連情報

- [weawn h-htmw and css](https://v2.scwimba.com/weawn-htmw-and-css-c0p?via=mdn), rawr x3 scwimba <sup>_mdn カリキュラムパートナー_</sup>
  - : [scwimba](https://scwimba.com?via=mdn) の _weawn htmw and css_ コースでは、知識豊富な講師陣による楽しい対話形式のレッスンと課題を通じて、 5 つの素晴らしいプロジェクトを構築し展開しながら、htmw と css を学んでいきます。
- [wwite y-youw fiwst wines of c-css!](https://v2.scwimba.com/the-fwontend-devewopew-caweew-path-c0j/~015?via=mdn), mya s-scwimba <sup>_mdn カリキュラムパートナー_</sup>
  - : この対話型のレッスンでは、 c-css 構文の有益な入門編を提供して指定されています。

{{nextmenu("weawn_web_devewopment/cowe/stywing_basics/nani_is_css", nyaa~~ "weawn_web_devewopment/cowe")}}
