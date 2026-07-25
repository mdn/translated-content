---
title: MathML
slug: Web/MathML
l10n:
  sourceCommit: 9036ccca6d55b90913ca424e6706b0c9ed1fa93b
---

**Mathematical Markup Language (MathML)** は、数学的表記を記述するための [XML](/ja/docs/Web/XML) マークアップ言語です。

[MathML](https://w3c.github.io/mathml/) は元々、ブラウザー、オフィススイート、[数式処理システム](https://ja.wikipedia.org/wiki/数式処理システム)、[EPUB](https://www.w3.org/publishing/epub33/) リーダー、[LaTeX](https://ja.wikipedia.org/wiki/LaTeX) ベースのジェネレーター向けの汎用仕様として設計されました。しかし、この手法はウェブにはあまり適していませんでした。[意味づけに重点を置いたサブセット](https://w3c.github.io/mathml/#contm)はブラウザーに実装されたことがなく、[数学レイアウトに重点を置いたサブセット](https://w3c.github.io/mathml/#presm)は不完全で実装上の不整合を招くものでした。

[MathML Core](https://w3c.github.io/mathml-core/) は、[LaTeX](https://ja.wikipedia.org/wiki/LaTeX) と [Open Font Format](https://learn.microsoft.com/ja-jp/typography/opentype/spec/math) のルールに基づく実装の詳細が強化されたサブセットです。 ブラウザー用に調整され、[HTML](/ja/docs/Web/HTML)、[CSS](/ja/docs/Web/CSS)、[DOM](/ja/docs/Web/API/Document_Object_Model)、[JavaScript](/ja/docs/Web/JavaScript) などの他のウェブ標準と特にうまく機能するように設計されています。

下記に、MathML に関するドキュメント、例えば、ツールへのリンクがあります。MDN では、[MathML Core](https://w3c.github.io/mathml-core/) を参照仕様として使用していますが、標準化の歴史が不安定であったため、古い MathML 機能が既存の実装やウェブコンテンツにまだ残っている場合があります。

> [!NOTE]
> 開発者や作成者は、MathML Core に切り替えることを強くお勧めします。おそらく、用途に応じた他のウェブ技術にも頼っているでしょう。Math WG は、その移行を促進するために、一連の [MathML ポリフィル](https://github.com/w3c/mathml-polyfills)を用意しています。

## チュートリアル

[MathML チュートリアル](/ja/docs/Web/MathML/Tutorials)は、事前知識がない方を想定し、基礎から始めてより高度なテクニックへと段階的に解説するよう構成されています。

- [初心者向けの MathML](/ja/docs/Web/MathML/Tutorials/For_beginners)
  - : このチュートリアルでは、構造化マークアップを使用して数式を生成する方法を解説します。まず、HTML 文書に MathML を追加する方法の概要を説明し、続いて、分数や根号、添字要素、テキストコンテナーといった主要な要素について詳しく掘り下げます。その後、行列の表形式レイアウトや高度な数式書式化について解説します。最後に、学んだ概念を用いて 3 つの有名な数式を再現する課題を通じて、理解度を確認します。

## ガイド

[MathML ガイド](/ja/docs/Web/MathML/Guides)は、ウェブページ上で MathML を作成する際に役立つリソースであり、記述方法、エディター、フォントなどに関するガイドが含まれています。

- [MathML の記述](/ja/docs/Web/MathML/Guides/Authoring)
  - : MathML の記述に関する提案やヒント、推奨する MathML エディター、およびその出力をウェブコンテンツに統合する方法が含まれます。
- [MathML のためのフォント](/ja/docs/Web/MathML/Guides/Fonts)
  - : ユーザーがブラウザーで MathML を正規に表示するために、このような数学フォントをインストールする方法です。

## リファレンス

[MathML リファレンス](/ja/docs/Web/MathML/Reference) は、MDN で文書化されている MathML の要素と属性の包括的な一覧です。

- [MathML 要素リファレンス](/ja/docs/Web/MathML/Reference/Element)
  - : それぞれの MathML 要素の詳細と、デスクトップおよびモバイルのブラウザーの互換性情報。
- [MathML グローバル属性リファレンス](/ja/docs/Web/MathML/Reference/Global_attributes)
  - : すべての要素に適用されるグローバルな MathML 属性に関する情報です。
- [MathML 属性リファレンス](/ja/docs/Web/MathML/Reference/Attribute)
  - : MathML 要素の見た目や振る舞いを変更する MathML 属性についての情報です。
- [MathML 属性値](/ja/docs/Web/MathML/Reference/Values)
  - : MathML の属性値に関する詳細情報です。

## 例

以下に、MathML の使い方を理解するための役立つ参考例をいくつか掲載しています。

### MathML 数式

以下のデモでは、ウェブコンテンツにおいて、次第に複雑さを増していく数学的概念を表示させています。

- [ピタゴラスの定理の証明](/ja/docs/Web/MathML/Guides/Proving_the_Pythagorean_theorem)
  - : ピタゴラスの定理の証明を示す簡単な例です。
- [二次方程式の解の公式を導く](/ja/docs/Web/MathML/Guides/Deriving_the_quadratic_formula)
  - : 二次方程式の解の公式の導出の概要を説明します。
- [Mozilla MathML test](https://fred-wang.github.io/MathFonts/mozilla_mathml_test/)
  - : Mozilla MathML プロジェクトによる独自のテストです。これには、[TeXbook](https://en.wikipedia.org/wiki/Computers_and_Typesetting) からの例が含まれており、TeX によって生成された画像参照が含まれています。

### 他のウェブ技術

以下のデモでは、MathMLを他のウェブ技術と混在させて、高度なコンテンツを作成しています。

- [`<la-tex>` カスタム要素](https://fred-wang.github.io/TeXZilla/examples/customElement.html)
  - : [LaTeX](https://ja.wikipedia.org/wiki/LaTeX) コンテンツを受け入れる[カスタム要素](/ja/docs/Web/API/Web_components/Using_custom_elements)です。
- [Magnetic field demo](https://fred-wang.github.io/TeXZilla/examples/toImageWebGL.html)
  - : [SVG](/ja/docs/Web/SVG) および [WebGL](/ja/docs/Web/API/WebGL_API) を使用した磁場の三次元表現。
- [Συνάρτηση ζήτα Ρήμαν (el)](https://fred-wang.github.io/MathFonts/%CE%A3%CF%85%CE%BD%CE%AC%CF%81%CF%84%CE%B7%CF%83%CE%B7_%CE%B6%CE%AE%CF%84%CE%B1_%CE%A1%CE%AE%CE%BC%CE%B1%CE%BD.html)
  - : リーマンゼータ関数に関するギリシャ語の記事。[ギリシャフォント協会](https://greekfontsociety-gfs.gr/)の[ウェブフォント](/ja/docs/Learn_web_development/Core/Text_styling/Web_fonts)付きです。
- [Pell's equation](https://people.igalia.com/fwang/pell-bigint-mathml/)
  - : [長整数](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt)を使用してペルの方程式を解く JavaScript プログラム。
- [Lovelace's program for Bernoulli numbers](https://people.igalia.com/fwang/lovelace-jsclass-mathml/)
  - : [Private elements](/ja/docs/Web/JavaScript/Reference/Classes/Private_elements) を使用した、ベルヌーイ数を計算するエイダ・ラブレスによるプログラムのエミュレーター。

## コミュニティから助けを得る

- [W3C Math Home](https://www.w3.org/Math/)
- [Raise issues on GitHub w3c/mathml repository](https://github.com/w3c/mathml/issues)
- [www-math w3.org メールアーカイブ](https://lists.w3.org/Archives/Public/www-math/)

## ツール

- [W3C Validator](https://validator.w3.org/)
- [W3C's wiki page](https://www.w3.org/wiki/Math_Tools)

## 関連トピック

- [CSS](/ja/docs/Web/CSS)
- [HTML](/ja/docs/Web/HTML)
- [SVG](/ja/docs/Web/SVG)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
