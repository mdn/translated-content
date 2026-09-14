---
title: CSS 書字方向
short-title: 書字方向
slug: Web/CSS/Guides/Writing_modes
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**CSS 書字方向** (CSS writing modes) モジュールは、様々な国際的な書字方向とその組み合わせに対する対応を定義します。例えば、テキスト順序の左書き、右書きや、横書き、縦書きの方向などが含まれます。

CSS における書字方向は、このモジュールで定義される {{cssxref("writing-mode")}}、{{cssxref("direction")}}、{{cssxref("text-orientation")}} の各プロパティによって決定される。主に、そのベースとなるインラインの方向とブロックフロー方向によって定義されます。

横書きの言語には、ラテン文字やインド系文字など左から右へ書くものがあります。一方、ヘブライ文字やアラビア文字など右から左へ書く横書き言語もあります。左書きと右書きの文字を混在させる場合など、テキストが双方向になる必要があることもあります。また、中国語、日本語、韓国語 (CJK) 文字など、縦書きで記述される言語もあります。

CSS 書字方向モジュールは、すべての書字方向に対応します。それ以外にも、[CSS ルビレイアウト](/ja/docs/Web/CSS)モジュールなど、表示テキスト注釈に関連するレンダリングモデルと書式設定制御を提供します。

## リファレンス

### プロパティ

- {{cssxref("direction")}}
- {{cssxref("glyph-orientation-vertical")}}
- {{cssxref("text-combine-upright")}}
- {{cssxref("text-orientation")}}
- {{cssxref("unicode-bidi")}}
- {{cssxref("writing-mode")}}

### 用語集と解説

- {{glossary("/Baseline/Typography", "ベースライン")}}
- {{Glossary("Internationalization", "国際化")}}
- {{glossary("Localization", "ローカライゼーション")}}
- {{glossary("Leading", "行送り")}}

## ガイド

- [垂直フォームコントロールの作成](/ja/docs/Web/CSS/Guides/Writing_modes/Vertical_controls)
  - : この記事では、CSS の {{cssxref("writing-mode")}} および {{cssxref("direction")}} プロパティを使用して縦書きのフォームコントロールを作成および構成する方法を説明しています。
- [書字方向の概要](/ja/docs/Web/CSS/Guides/Writing_modes/Writing_mode_systems)
  - : 書字方向システムとその方向性の概要です。

## 関連概念

[CSS テキスト](/ja/docs/Web/CSS/Guides/Text)モジュール

- {{cssxref("hanging-punctuation")}}
- {{cssxref("hyphens")}}
- {{cssxref("letter-spacing")}}
- {{cssxref("line-break")}}
- {{cssxref("overflow-wrap")}}
- {{cssxref("text-align")}}
- {{cssxref("text-align-last")}}
- {{cssxref("text-indent")}}
- {{cssxref("text-justify")}}
- {{cssxref("word-break")}}
- {{cssxref("word-spacing")}}

[CSS インラインレイアウト](/ja/docs/Web/CSS/Guides/Inline_layout)モジュール

- {{cssxref("alignment-baseline")}}
- {{cssxref("dominant-baseline")}}
- {{cssxref("line-height")}}
- {{cssxref("text-box-edge")}}
- {{cssxref("text-box-trim")}}
- {{cssxref("text-box")}} shorthand
- {{cssxref("text-edge")}}

[CSS 論理的プロパティと値](/ja/docs/Web/CSS/Guides/Logical_properties_and_values)モジュール

- {{glossary("Flow relative values")}}
- {{glossary("Inset properties")}}
- {{glossary("Logical properties")}}
- {{glossary("Physical properties")}}

[CSS 表示方法](/ja/docs/Web/CSS/Guides/Display)モジュール

- {{cssxref("display")}}

- {{CSSxRef("&lt;display-internal&gt;")}}
- [視覚整形モデル](/ja/docs/Web/CSS/Guides/Display/Visual_formatting_model)

[CSS 生成コンテンツ](/ja/docs/Web/CSS/Guides/Generated_content)

- {{CSSxRef("quotes")}}

[SVG](/ja/docs/Web/SVG)

- {{SVGAttr("glyph-orientation-horizontal")}} {{deprecated_inline}}
- {{SVGAttr("glyph-orientation-vertical")}} {{deprecated_inline}}
- {{SVGAttr("writing-mode")}}

[HTML](/ja/docs/Web/HTML)

- {{htmlelement("bdo")}}
- {{htmlelement("blockquote")}}
- {{htmlelement("q")}}
- {{htmlelement("ruby")}}
- {{htmlelement("sub")}}
- {{htmlelement("sup")}}
- [`dir`](/ja/docs/Web/HTML/Reference/Global_attributes/dir) 属性
- [`lang`](/ja/docs/Web/HTML/Reference/Global_attributes/lang) 属性

[JavaScript](/ja/docs/Web/JavaScript)

- [国際化ガイド](/ja/docs/Web/JavaScript/Guide/Internationalization)
- [`Intl`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl) オブジェクト

## 仕様書

{{Specifications}}

## 関連情報

- [CSS フォント](/ja/docs/Web/CSS/Guides/Fonts)モジュール
- [CSS ルビレイアウト](/ja/docs/Web/CSS/Guides/Ruby_layout)モジュール
- [CSS テキスト装飾](/ja/docs/Web/CSS/Guides/Text_decoration)モジュール
- [CSS カウンタースタイル](/ja/docs/Web/CSS/Guides/Counter_styles)モジュール
- [CSS リスト](/ja/docs/Web/CSS/Guides/Lists)モジュール
- [CSS コンテナー](/ja/docs/Web/CSS/Guides/Containment)モジュール: {{CSSxRef("contain-intrinsic-block-size")}} および {{CSSxRef("contain-intrinsic-inline-size")}}
- [CSS オーバーフロー](/ja/docs/Web/CSS/Guides/Overflow)モジュール: {{CSSxRef("overflow-block")}} および {{CSSxRef("overflow-inline")}}
- [CSS オーバースクロール動作](/ja/docs/Web/CSS/Guides/Overscroll_behavior)モジュール: {{CSSxRef("overscroll-behavior-block")}} および {{CSSxRef("overscroll-behavior-inline")}}
