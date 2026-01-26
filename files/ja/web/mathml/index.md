---
title: MathML
slug: Web/MathML
l10n:
  sourceCommit: a92e10b293358bc796c43d5872a8981fd988a005
---

{{MathMLRef}}

**Mathematical Markup Language (MathML)** は、数学的表記を記述するための [XML](/ja/docs/Web/XML) マークアップ言語です。

[MathML](https://w3c.github.io/mathml/) は元々、ブラウザー、オフィススイート、[数式処理システム](https://ja.wikipedia.org/wiki/数式処理システム)、[EPUB](https://www.w3.org/publishing/epub33/) リーダー、[LaTeX](https://ja.wikipedia.org/wiki/LaTeX) ベースのジェネレーター向けの汎用仕様として設計されました。しかし、この手法はウェブにはあまり適していませんでした。[意味づけに重点を置いたサブセット](https://w3c.github.io/mathml/#contm)はブラウザーに実装されたことがなく、[数学レイアウトに重点を置いたサブセット](https://w3c.github.io/mathml/#presm)は不完全で実装上の不整合を招くものでした。

[MathML Core](https://w3c.github.io/mathml-core/) は、[LaTeX](https://ja.wikipedia.org/wiki/LaTeX) と [Open Font Format](https://learn.microsoft.com/ja-jp/typography/opentype/spec/math) のルールに基づく実装の詳細が強化されたサブセットです。 ブラウザー用に調整され、[HTML](/ja/docs/Web/HTML)、[CSS](/ja/docs/Web/CSS)、[DOM](/ja/docs/Web/API/Document_Object_Model)、[JavaScript](/ja/docs/Web/JavaScript) などの他のウェブ標準と特にうまく機能するように設計されています。

下記に、MathML に関するドキュメント、例えば、ツールへのリンクがあります。MDN では、[MathML Core](https://w3c.github.io/mathml-core/) を参照仕様として使用していますが、標準化の歴史が不安定であったため、古い MathML 機能が既存の実装やウェブコンテンツにまだ残っている場合があります。

> [!NOTE]
> 開発者や作成者は、MathML Core に切り替えることを強くお勧めします。おそらく、用途に応じた他のウェブ技術にも頼っているでしょう。Math WG は、その移行を促進するために、一連の [MathML ポリフィル](https://github.com/w3c/mathml-polyfills)を用意しています。

## 初心者向けチュートリアル

- [MathML を始めよう](/ja/docs/Web/MathML/Tutorials/For_beginners/Getting_started)
  - : この記事では、単純な HTML 文書を用意し、そこに MathML の数式を追加する方法を、いくつかの要素を紹介しながら見ていきます。
- [テキストコンテナー](/ja/docs/Web/MathML/Tutorials/For_beginners/Text_containers)
  - : NMathML の概要を理解したところで、 MathML 数式の構成要素として使用するテキストコンテナー（変数、数値、演算子、...）に移動します。
- [分数と根号](/ja/docs/Web/MathML/Tutorials/For_beginners/Fractions_and_roots)
  - : この記事では、テキストコンテナーにおいて分数や根号を入れ子にして、より複雑な MathML 式を構築する方法を記述しています。
- [添字](/ja/docs/Web/MathML/Tutorials/For_beginners/Scripts)
  - : 基本的な数学記法の復習を続け、添字を使った MathML 要素の構築に焦点を当てます。
- [表](/ja/docs/Web/MathML/Tutorials/For_beginners/Tables)
  - : 基本的な数学表記がすべてわかったら、あとは行列のような式や他にも高度な数学レイアウトを使用することができる表形式レイアウトを考えることができます。
- [3 つの有名な数式](/ja/docs/Web/MathML/Tutorials/For_beginners/Three_famous_mathematical_formulas) <sup>課題</sup>
  - : 前の記事で学んだことで、すでに比較的洗練された MathML 数式を書くことができるはずです。この評価試験ではそのための機会を提供します。

## ガイド

- [MathML の記述](/ja/docs/Web/MathML/Guides/Authoring)
  - : MathML の記述に関する提案やヒント、推奨する MathML エディター、およびその出力をウェブコンテンツに統合する方法が含まれます。
- [MathML のためのフォント](/ja/docs/Web/MathML/Guides/Fonts)
  - : ユーザーがブラウザーで MathML を正規に表示するために、このような数学フォントをインストールする方法です。

## MathML リファレンス

- [MathML 要素リファレンス](/ja/docs/Web/MathML/Reference/Element)
  - : 各 MathML 要素の詳細とデスクトップおよびモバイルのブラウザーの互換性情報。
- [MathML 属性リファレンス](/ja/docs/Web/MathML/Reference/Attribute)
  - : MathML 要素の見た目や振る舞いを変更する MathML 属性についての情報。
- [MathML 属性値](/ja/docs/Web/MathML/Reference/Attribute)
  - : MathML の属性値に関する詳細情報。
- [MathML の例](/ja/docs/Web/MathML/Guides)
  - : MathML の動作についての理解を深めるためのサンプルと例。

## コミュニティから助けを得る

- [W3C Math Home](https://www.w3.org/Math/)
- [Raise issues on GitHub w3c/mathml repository](https://github.com/w3c/mathml/issues)
- [www-math w3.org メールアーカイブ](https://lists.w3.org/Archives/Public/www-math/)

## ツール

- [W3C Validator](http://validator.w3.org)
- [W3C's wiki page](https://www.w3.org/wiki/Math_Tools)

## 関連トピック

- [CSS](/ja/docs/Web/CSS)
- [HTML](/ja/docs/Web/HTML)
- [SVG](/ja/docs/Web/SVG)

## ブラウザーの互換性

{{Compat}}
