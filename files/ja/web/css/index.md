---
title: "CSS: カスケーディングスタイルシート"
short-title: CSS
slug: Web/CSS
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**カスケーディングスタイルシート** (Cascading Style Sheets、**CSS**) は[スタイルシート](/ja/docs/Web/API/StyleSheet)言語であり、[HTML](/ja/docs/Web/HTML) や [XML](/ja/docs/Web/XML/Guides/XML_introduction)（派生言語である [SVG](/ja/docs/Web/SVG)、[MathML](/ja/docs/Web/MathML)、{{Glossary("XHTML")}} などを含む）で記述された文書の体裁や見栄えを表現するために用いられます。CSS は、要素が画面上で (あるいは紙や音声といった別のメディア上で) どのように表現されるのかを定義します。

CSS は**オープンウェブ**の核となる言語に含まれており、[W3C 標準仕様](https://www.w3.org/Style/CSS/#specs)によってウェブブラウザー間で標準化されています。以前は CSS 仕様書の様々な部分が同時に開発されており、最新勧告の版数付けができていました。皆さんも CSS1、CSS2.1、また CSS3 についても聞いたことがあるでしょう。CSS3 や CSS4 にはなりません。すべて単なる "CSS" と、バージョン番号を持つ個々の CSS モジュールとなりました。

CSS 2.1 以降、仕様の範囲が大幅に拡大し、CSS モジュールごとに進捗状況が大きく異なるようになったため、[モジュールごとに勧告を開発して公開する](https://www.w3.org/Style/CSS/current-work)ことがより効果的になりました。W3C では、CSS 仕様のバージョン管理の代わりに、[最新の CSS 仕様の安定した状態](https://www.w3.org/TR/css/)のスナップショットと独立したモジュールの進捗を定期的に取得するようになりました。CSS のモジュールは、[CSS Color Module Level 5](https://drafts.csswg.org/css-color-5/) のように、バージョン番号またはレベルを持つようになりました。

## 初心者向けチュートリアル

当社の[ウェブ開発のコア学習モジュール](/ja/docs/Learn_web_development/Core)には、CSS の基礎を網羅した最新かつ現代的なチュートリアルが含まれています。

- [初めてのウェブサイト: コンテンツのスタイル設定](/ja/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content)
  - : この記事では、 CSS とは何か、またどのように使用されているかについて、ウェブ開発に完全に新しい人々を対象に、簡単な紹介を提供しています。
- [CSS によるスタイル設定の基本](/ja/docs/Learn_web_development/Core/Styling_basics)
  - : このモジュールでは、効果的に技術を学び始めるために必要な CSS の基礎をすべて提供します。これには構文、機能、テクニックが含まれます。
- [CSS テキスト装飾](/ja/docs/Learn_web_development/Core/Text_styling)
  - : ここでは、フォント設定、太字、斜体、行間・文字間隔、ドロップシャドウなど、CSS テキストの基本要素について解説します。ページにカスタムフォントを適用し、リストとリンクを装飾するところを見るところまでで、このモジュールを締めくくります。
- [CSS レイアウト](/ja/docs/Learn_web_development/Core/CSS_layout)
  - : このモジュールでは、浮動ボックス、位置指定、他にも最新のレイアウトツール、さまざまな端末、画面サイズ、解像度に適応するレスポンシブデザインの構築について検討します。

## ガイド

CSS ガイドはモジュールごとに分類されており、CSS を使用することでどのようなことが実現できるかを学ぶのに役立ちます。[CSS ガイド](/ja/docs/Web/CSS/Guides)で全リストをご覧いただけます。次のようなトピックが含まれています。

- [CSS 構文](/ja/docs/Web/CSS/Guides/Syntax/Introduction)（宣言やルールセットを含む）
- [詳細度](/ja/docs/Web/CSS/Guides/Cascade/Specificity)、[継承](/ja/docs/Web/CSS/Guides/Cascade/Inheritance)、[カスケード](/ja/docs/Web/CSS/Guides/Cascade/Introduction)
- [入れ子](/ja/docs/Web/CSS/Guides/Nesting)、[スコープ](/ja/docs/Web/CSS/Guides/Scoping)、[シャドウパーツ](/ja/docs/Web/CSS/Guides/Shadow_parts)
- [メディア](/ja/docs/Web/CSS/Guides/Media_queries)と[コンテナー](/ja/docs/Web/CSS/Guides/Containment)クエリー
- [数値データ型](/ja/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types)と[テキストデータ型](/ja/docs/Web/CSS/Guides/Values_and_units/Textual_data_types)
- [ボックスモデル](/ja/docs/Web/CSS/Guides/Box_model/Introduction)と[マージンの相殺](/ja/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
- [包含ブロック](/ja/docs/Web/CSS/Guides/Display/Containing_block)
- [重ね合わせコンテキスト](/ja/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)と[ブロック整形コンテキスト](/ja/docs/Web/CSS/Guides/Display/Block_formatting_context)
- [プロパティ値の処理](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing)
- [一括指定プロパティ](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)
- [フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout)、[段組み](/ja/docs/Web/CSS/Guides/Multicol_layout)、[グリッド](/ja/docs/Web/CSS/Guides/Grid_layout)レイアウト
- [アニメーション](/ja/docs/Web/CSS/Guides/Animations/Using)、[トランジション](/ja/docs/Web/CSS/Guides/Transitions/Using)、[座標変換](/ja/docs/Web/CSS/Guides/Transforms/Using)

## 手引き

- [CSS レイアウト料理帳](/ja/docs/Web/CSS/How_to/Layout_cookbook)
  - : サイトの実装で必要になることがある、一般的なレイアウトパターンのレシピです。プロジェクトの出発点として使うことができるコードを提供することに加えて、これらのレシピは様々な方法のレイアウト仕様書を使用することができることに光を当て、開発者として選択ができるようにします。

## ツール

- [境界画像作成ツール](/ja/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-image_generator)
  - : CSS の {{cssxref("border-image")}} の値を生成します。
- [境界角丸作成ツール](/ja/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-radius_generator)
  - : CSS の {{cssxref("border-radius")}} 効果を生成します。
- [ボックスの影作成ツール](/ja/docs/Web/CSS/Guides/Backgrounds_and_borders/Box-shadow_generator)
  - : CSS のオブジェクトに {{cssxref("box-shadow")}} 効果を追加します。
- [色形式コンバーター](/ja/docs/Web/CSS/Guides/Colors/Color_format_converter)
  - : 色を入力または選択し、任意の CSS の[色形式](/ja/docs/Web/CSS/Reference/Values/color_value)でその色に対応する値をコピーします。
- [カラーミキサー](/ja/docs/Web/CSS/Guides/Colors/Color_mixer)
  - : {{cssxref("color_value/color-mix", "color-mix()")}} 関数を使用して、任意の色空間で 2 つの色を混在させ、その結果得られた色を任意の CSS カラー書式でコピーします。
- [シェイプジェネレーター](/ja/docs/Web/CSS/Guides/Shapes/Shape_generator)
  - : {{cssxref("basic-shape")}} の機能について、座標と構文を定義します。

同時に、以下のリソースも使用することができます。

- [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) は CSS が正しく書かれているかを判定するために利用できます。デバッグのために重宝するツールです。
- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html) は[インスペクター](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html)と[スタイルエディター](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html)ツールを通じて、ページの CSS をライブでの閲覧や編集を可能にします。
- Firefox の[ウェブ開発者拡張機能](https://addons.mozilla.org/ja/firefox/addon/web-developer/)では、表示しているサイトをその場で追跡したり編集したりすることができます。

## リファレンス

完全な [CSS リファレンス](/ja/docs/Web/CSS/Reference)のドキュメントをご覧ください。

- [CSS プロパティ](/ja/docs/Web/CSS/Reference/Properties)
  - : すべての CSS プロパティのリファレンスです。
- [CSS セレクター](/ja/docs/Web/CSS/Reference/Selectors)
  - : CSS セレクター、[結合子](/ja/docs/Web/CSS/Reference/Selectors/Combinators)、[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)、[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)のリファレンスです。
- [CSS アットルール](/ja/docs/Web/CSS/Reference/At-rules)
  - : メディアクエリーを含む CSS アットルールのリファレンスです。
- [CSS 値](/ja/docs/Web/CSS/Reference/Values)
  - : CSS キーワード、[データ型](/ja/docs/Web/CSS/Reference/Values/Data_types)、[関数](/ja/docs/Web/CSS/Reference/Values/Functions)に関するリファレンス。

## 関連情報

- CSS がよく適用されるウェブ言語。[HTML](/ja/docs/Web/HTML)、[SVG](/ja/docs/Web/SVG)、[MathML](/ja/docs/Web/MathML)、{{Glossary("XHTML")}}、[XML](/ja/docs/Web/XML/Guides/XML_introduction)
- [CSS に関する Stack Overflow の質問](https://stackoverflow.com/questions/tagged/css)
