---
title: CSS フォント
slug: Web/CSS/CSS_fonts
---

{{CSSRef}}

**CSS フォント** (CSS Fonts) は CSS のモジュールの一つで、フォントに関するプロパティを定義し、どのようにフォントリソースを読み取るのかを定義します。これによって、単一の文字に利用できる複数のフォントがある場合、使用するフォントのスタイルを、例えばフォントファミリー、寸法、太さ、行の高さ、字体の種類を定義することができます。

<h2 id="Basic_example">基本的な例</h2>

以下の例は、テキストの段落をスタイル付けする基本的なフォントプロパティの使い方を示します。

```css
p {
  width: 600px;
  margin: 0 auto;
  font-family: "Helvetica Neue", "Arial", sans-serif;
  font-style: italic;
  font-weight: 100;
  font-variant-ligatures: normal;
  font-size: 2rem;
  letter-spacing: 1px;
}
```

```html
<p>
  Three hundred years ago<br />
  I thought I might get some sleep<br />
  I stretched myself out onna antique bed<br />
  An' my spirit did a midnite creep
</p>
```

結果は以下のようになります。

{{EmbedLiveSample('Basic_example', '100%', '200')}}

## 可変フォントの例

たくさんの可変フォントの例を [v-fonts.com](https://v-fonts.com/) および [axis-praxis.org](https://www.axis-praxis.org/) で見ることができます。詳しい情報と使い方の情報は、[可変フォントガイド](/ja/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide)も参照してください。

## リファレンス

### プロパティ

- {{cssxref("font")}}
- {{cssxref("font-family")}}
- {{cssxref("font-feature-settings")}}
- {{cssxref("font-kerning")}}
- {{cssxref("font-language-override")}}
- {{cssxref("font-optical-sizing")}}
- {{cssxref("font-size")}}
- {{cssxref("font-size-adjust")}}
- {{cssxref("font-stretch")}}
- {{cssxref("font-style")}}
- {{cssxref("font-synthesis")}}
- {{cssxref("font-variant")}}
- {{cssxref("font-variant-alternates")}}
- {{cssxref("font-variant-caps")}}
- {{cssxref("font-variant-east-asian")}}
- {{cssxref("font-variant-ligatures")}}
- {{cssxref("font-variant-numeric")}}
- {{cssxref("font-variant-position")}}
- {{cssxref("font-variation-settings")}}
- {{cssxref("font-weight")}}
- {{cssxref("line-height")}}

### アットルール

- {{cssxref("@font-face")}}
- {{cssxref("@font-feature-values")}}

## ガイド

- [テキストとフォントのスタイル付けの基礎](/ja/docs/Learn/CSS/Styling_text/Fundamentals)
  - : この初心者向けの学習記事では、テキスト/フォントのスタイル付けの基本的な部分をすべて詳しく説明しています。フォントの太さ、ファミリー、スタイルの設定、フォントの一括指定、テキスト配置などの効果、行と文字の間隔の設定などです。
- [OpenType フォント特性ガイド](/ja/docs/Web/CSS/CSS_Fonts/OpenType_fonts_guide)
  - : フォント特性またはバリアントは、 OpenType フォントに含まれている様々な字形や文字スタイルを参照します。これらには合字 ('fi' や 'ffl' のような特殊な形の文字の組み合わせ)、カーニング (特定の字形の組み合わせにおける間隔の調整)、分数、数字のスタイル、他にもたくさんあります。これらはすべて OpenType の特性として参照され、特定のプロパティや低水準の制御プロパティ — {{cssxref("font-feature-settings")}} を通してウェブ上で使用することができます。この記事は、 CSS で OpenType フォント特性を使用することについて知る必要があるすべてのことを紹介します。
- [可変フォントガイド](/ja/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide)
  - : **可変フォント**は OpenType フォント仕様が進化したもので、幅、太さ、スタイルごとに別々のフォントファイルを用意するのではなく、さまざまな種類のフォントを単一のファイルに組み込むことができます。この記事では、可変フォントを使い始めるために必要なことをすべて紹介します。

## 仕様書

{{Specifications}}
