---
title: CSS フォント
slug: Web/CSS/Guides/Fonts
original_slug: Web/CSS/CSS_fonts
l10n:
  sourceCommit: a7d55b06a92d339bfdf109eef85c20a262ca9032
---

**CSS フォント**モジュールは、フォント関連のプロパティと、フォントリソースを読み込む方法を定義します。フォントファミリ、サイズ、太さなどのフォントのスタイル設定や、単一の文字に複数の字体が利用できる場合に使用する字体バリエーションを定義することができます。

フォントは、文字の視覚的表現を格納したリソースファイルであり、文字コードをある書体の文字、数字、句読点、さらには絵文字を表す字体に割り当てられるものです。フォントファミリは、共通のデザインスタイルとフォントプロパティを共有するフォントのグループであり、グループの各メンバーは、ストロークの太さ、傾き、相対的な幅、他にも様々な属性によって異なる字体の表示方法を提供します。フォントは一般的に、単一のスタイル設定を表します。例えば太字かつイタリックの Helvetica などです。フォントファミリは完全な一連のスタイルです。このようなフォントを文書やデザイン内に含めるには、フォントリソースごとに別個の `@font-face` 宣言を定義します。

CSS フォントモジュールのプロパティ、アットルール、記述子によって、フォントの複数のバリエーションをダウンロードすることができます。また、特定のフォント特性に対して使用するフォントファイルを定義し、リソースの読み込みに失敗した場合の代替フォント指示も定義します。 CSS フォントの選択メカニズムは、指定された一連の CSS フォントプロパティを単一のフォントフェイスと照合するプロセスを記述します。

CSS フォントモジュールは可変フォントにも対応しています。各スタイルが別個のフォントファイルとして実装される通常のフォントとは異なり、可変フォントはすべてのスタイルを単一のファイルに格納することができます。単一の `@font-face` 宣言を使用することで、すべてのスタイル設定を含む可変フォントをインポートすることができます。フォントによっては、多数のフォント変化形を含めることができます。可変フォントは OpenType フォント仕様の一部です。

## リファレンス

### プロパティ

- {{cssxref("font")}} 一括指定
- {{cssxref("font-family")}}
- {{cssxref("font-feature-settings")}}
- {{cssxref("font-kerning")}}
- {{cssxref("font-language-override")}}
- {{cssxref("font-optical-sizing")}}
- {{cssxref("font-palette")}}
- {{cssxref("font-size")}}
- {{cssxref("font-size-adjust")}}
- {{cssxref("font-stretch")}}
- {{cssxref("font-style")}}
- {{cssxref("font-weight")}}

- {{cssxref("font-synthesis")}} 一括指定
- {{cssxref("font-synthesis-small-caps")}}
- {{cssxref("font-synthesis-style")}}
- {{cssxref("font-synthesis-weight")}}

- {{cssxref("font-variant")}} 一括指定
- {{cssxref("font-variant-alternates")}}
- {{cssxref("font-variant-caps")}}
- {{cssxref("font-variant-east-asian")}}
- {{cssxref("font-variant-emoji")}}
- {{cssxref("font-variant-ligatures")}}
- {{cssxref("font-variant-numeric")}}
- {{cssxref("font-variant-position")}}
- {{cssxref("font-variation-settings")}}

### アットルール

- アットルール: {{cssxref("@font-face")}}
  - : 記述子:
    - {{cssxref("@font-face/ascent-override", "ascent-override")}}
    - {{cssxref("@font-face/descent-override", "descent-override")}}
    - {{cssxref("@font-face/font-display", "font-display")}}
    - {{cssxref("@font-face/font-family", "font-family")}}
    - {{cssxref("@font-face/font-feature-settings", "font-feature-settings")}}
    - {{cssxref("@font-face/font-stretch", "font-stretch")}}
    - {{cssxref("@font-face/font-style", "font-style")}}
    - {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
    - {{cssxref("@font-face/font-weight", "font-weight")}}
    - {{cssxref("@font-face/line-gap-override", "line-gap-override")}}
    - {{cssxref("@font-face/size-adjust", "size-adjust")}}
    - {{cssxref("@font-face/src", "src")}}
    - {{cssxref("@font-face/unicode-range", "unicode-range")}}

- アットルール: {{cssxref("@font-feature-values")}}
  - : 記述子:
    - {{cssxref("@font-feature-values/font-display", "font-display")}}

- アットルール: {{cssxref("@font-palette-values")}}
  - : 記述子:
    - {{cssxref("@font-palette-values/base-palette", "base-palette")}}
    - {{cssxref("@font-palette-values/font-family", "font-family")}}
    - {{cssxref("@font-palette-values/override-colors", "override-colors")}}

### データ型

`font-size` 型:

- {{cssxref("absolute-size")}}
- {{cssxref("relative-size")}}

`font-family` 型:

- {{cssxref("generic-family")}}

`font-feature-settings` 型:

- [`<feature-tag-value>`](/ja/docs/Web/CSS/Reference/Properties/font-feature-settings#values)

`font-format` 型:

- [`<font-format>`](/ja/docs/Web/CSS/Reference/At-rules/@supports#font-format)

`font-stretch` 型:

- [`<font-stretch-css3>`](/ja/docs/Web/CSS/Reference/Properties/font-stretch#values)

`font-tech` 型:

- [`<color-font-tech>`](/ja/docs/Web/CSS/Reference/At-rules/@supports#font-tech)
- [`<font-features-tech>`](/ja/docs/Web/CSS/Reference/At-rules/@supports#font-tech)
- [`<font-tech>`](/ja/docs/Web/CSS/Reference/At-rules/@supports#font-tech)

`font-variant` 型:

- [`<font-variant-css2>`](/ja/docs/Web/CSS/Reference/Properties/font-variant)
- [`<east-asian-variant-values>`](/ja/docs/Web/CSS/Reference/Properties/font-variant#values)
- [`<east-asian-width-values>`](/ja/docs/Web/CSS/Reference/Properties/font-variant#values)

`font-variant-ligatures` 型:

- [`<common-lig-values>`](/ja/docs/Web/CSS/Reference/Properties/font-variant-ligatures#values)
- [`<contextual-alt-values>`](/ja/docs/Web/CSS/Reference/Properties/font-variant-ligatures#values)
- [`<discretionary-lig-values>`](/ja/docs/Web/CSS/Reference/Properties/font-variant-ligatures#values)
- [`<historical-lig-values>`](/ja/docs/Web/CSS/Reference/Properties/font-variant-ligatures#values)

`font-variant-numeric` 型:

- [`<numeric-figure-values>`](/ja/docs/Web/CSS/Reference/Properties/font-variant-numeric#values)
- [`<numeric-fraction-values>`](/ja/docs/Web/CSS/Reference/Properties/font-variant-numeric#values)
- [`<numeric-spacing-values>`](/ja/docs/Web/CSS/Reference/Properties/font-variant-numeric#values)

`font-weight` 型:

- [`<font-weight-absolute>`](/ja/docs/Web/CSS/Reference/Properties/font-weight#values)

### インターフェイス

- {{domxref("CSSFontFaceRule")}}
- {{domxref("CSSFontFeatureValuesRule")}}
- {{domxref("CSSFontPaletteValuesRule")}}

## ガイド

- [テキストとフォントのスタイル設定の基礎](/ja/docs/Learn_web_development/Core/Text_styling/Fundamentals)
  - : この初心者向けの学習記事では、テキストとフォントのスタイル設定の基本に応じた内容を扱っています。 {{cssxref("font")}} 一括指定を使ってフォントの太さ、ファミリ、スタイルを設定する方法や、テキストの配置、行間や字間を管理する方法などに応じた内容となっています。

- [学習: ウェブフォント](/ja/docs/Learn_web_development/Core/Text_styling/Web_fonts)
  - : この初心者向け学習記事では、ウェブページでカスタムフォントを使用して、より多様で独自のテキストスタイル設定を実現する方法を説明します。

- [OpenType フォント特性ガイド](/ja/docs/Web/CSS/Guides/Fonts/OpenType_fonts)
  - : フォント特性または変化形は、 OpenType フォントに含まれている様々な字形や文字スタイルを参照します。これらには合字 ('fi' や 'ffl' のような特殊な形の文字の組み合わせ)、カーニング (特定の字形の組み合わせにおける間隔の調整)、分数、数字のスタイル、他にもたくさんあります。これらはすべて OpenType の特性として参照され、特定のプロパティや低水準の制御プロパティ — {{cssxref("font-feature-settings")}} を通してウェブ上で使用することができます。この記事は、 CSS で OpenType フォント特性を使用することについて知る必要があるすべてのことを紹介します。

- [可変フォントガイド](/ja/docs/Web/CSS/Guides/Fonts/Variable_fonts)
  - : この記事は可変フォントを使用し始めるのに役立つでしょう。

- [フォントのパフォーマンスの改善](/ja/docs/Learn_web_development/Extensions/Performance/CSS#improving_font_performance)
  - : CSS パフォーマンスガイドの一部であるこの記事では、フォントの読み込み、要求されるグリフのみの読み込み、 `font-display` 記述子によるフォント表示の動作を定義することについて説明しています。

## 関連概念

- {{cssxref("letter-spacing")}} プロパティ
- {{cssxref("line-height")}} プロパティ
- {{cssxref("text-transform")}} プロパティ

## 仕様書

{{Specifications}}

## 関連情報

- [CSS フォント読み込み](/ja/docs/Web/CSS/Guides/Font_loading)モジュール
- [CSS フォント読み込み API](/ja/docs/Web/API/CSS_Font_Loading_API)
- [CSS テキスト](/ja/docs/Web/CSS/Guides/Text)モジュール
- [CSS 書字方向](/ja/docs/Web/CSS/Guides/Writing_modes)モジュール
