---
title: text-rendering
slug: Web/CSS/text-rendering
tags:
  - CSS
  - CSS プロパティ
  - Legibility
  - Ligatures
  - Precision
  - リファレンス
  - SVG
  - テキスト
  - テキスト特性
  - テキスト描画
  - recipe:css-property
browser-compat: css.properties.text-rendering
translation_of: Web/CSS/text-rendering
---
{{CSSRef}}

**`text-rendering`** は CSS のプロパティで、テキストを描画するときの最適化方法に関する情報をレンダリングエンジンに提供します。

ブラウザーは速さ、読みやすさ、位置の正確さをトレードオフにします。

```css
/* キーワード値 */
text-rendering: auto;
text-rendering: optimizeSpeed;
text-rendering: optimizeLegibility;
text-rendering: geometricPrecision;

/* グローバル値 */
text-rendering: inherit;
text-rendering: initial;
text-rendering: revert;
text-rendering: unset;
```

> **Note:** `text-rendering` プロパティは SVG のプロパティであり、 CSS 標準では定義されていません。しかし、 Windows, MacOS, Linux の Gecko や WebKit のブラウザーでは、このプロパティを HTML や XML のコンテンツに適用することができます。

とても目に見えやすい効果は `optimizeLegibility` で、一部のフォント (例えば、 Microsoft の _Calibri_, _Candara_, _Constantia_, _Corbel_、または _DejaVu_ フォントファミリー) において 20px より小さい文字に合字 (ff, fi, fl, など) を適用します。

## 構文

### 値

- `auto`
  - : ブラウザーはテキストを描画する際に、速さ、読みやすさ、位置の正確さの最適化について経験的な推測を行います。この値のブラウザーによる解釈の違いについては、ブラウザーの対応をご覧ください。
- `optimizeSpeed`
  - : ブラウザーは文字を描画する際に、読みやすさや位置の正確さよりも、速さを強調します。カーニングや合字を無効にします。
- `optimizeLegibility`
  - : ブラウザーは速さや位置の正確さよりも、読みやすさを強調します。カーニングを有効にし、合字は任意です。
- `geometricPrecision`

  - : ブラウザーは速さや読みやすさよりも、位置の正確さを強調します。フォントの一部の側面 — カーニングなど — は、倍率に比例しません。そのため、この値はこれらのフォントを使ったテキストを美しくすることができます。

    SVG では、テキストが拡大または縮小されるとき、ブラウザーはテキストの最終的な寸法 (特定のフォントの大きさと適用される倍率によって決まる) を計算し、プラットフォームのフォントシステムに計算値のフォントを要求します。しかし、大きさ 9 で倍率 140% のフォントを要求すると、フォントの大きさの結果は 12.6 となり、フォントシステムに存在するものではなくなるので、ブラウザーはフォントの大きさを 12 に丸めます。結果的に、テキストは段階的な倍率になります。

    しかし、 `geometricPrecision` は — レンダリングエンジンが完全に対応していれば — なめらかにテキストを拡縮することができます。倍率が大きい場合、文字列の描画があまり美しくならないかもしれませんが、寸法は Windows や Linux が対応しているフォントの大きさに切り上げられたり切り捨てられたりせず、期待通りになります。

    > **Note:** WebKit は指定された値を厳密に適用しますが、 Gecko は値を `optimizeLegibility` と同様に扱います。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### optimizeLegibility の自動的な適用

`font-size` が `20px` 未満の場合にブラウザーが自動的に `optimizeLegibility` を使用する方法を紹介します。

#### HTML

```html
<p class="small">LYoWAT - ff fi fl ffl</p>
<p class="big">LYoWAT - ff fi fl ffl</p>
```

#### CSS

```css
.small { font: 19.9px "Constantia", "Times New Roman", "Georgia", "Palatino", serif; }
.big   { font: 20px "Constantia", "Times New Roman", "Georgia", "Palatino", serif; }
```

#### 結果

{{ EmbedLiveSample('Automatic_application_of_optimizeLegibility') }}

### optimizeSpeed と optimizeLegibility

この例は、 `optimizeSpeed` と `optimizeLegibility` の (このブラウザーでの) 表示方法の違いを紹介します (ブラウザーによって違います)。

#### HTML

```html
<p class="speed">LYoWAT - ff fi fl ffl</p>
<p class="legibility">LYoWAT - ff fi fl ffl</p>
```

#### CSS

```css
p { font: 1.5em "Constantia", "Times New Roman", "Georgia", "Palatino", serif }

.speed       { text-rendering: optimizeSpeed; }
.legibility  { text-rendering: optimizeLegibility; }
```

#### 結果

{{ EmbedLiveSample('optimizeSpeed_vs_optimizeLegibility') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`<canvas>` に文字を描く](/ja/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
- [CSS テキスト装飾](/ja/docs/Web/CSS/CSS_Text_Decoration) モジュール
- 関連する CSS プロパティ

  - [`text-decoration`](/ja/docs/Web/CSS/text-decoration) (および [`text-decoration-line`](/ja/docs/Web/CSS/text-decoration-line), [`text-decoration-style`](/ja/docs/Web/CSS/text-decoration-style), [`text-decoration-thickness`](/ja/docs/Web/CSS/text-decoration-thickness) などの個別指定プロパティ)
  - [`text-emphasis`](/ja/docs/Web/CSS/text-emphasis) (および [`text-emphasis-color`](/ja/docs/Web/CSS/text-emphasis-color), [`text-emphasis-position`](/ja/docs/Web/CSS/text-emphasis-position), and [`text-emphasis-style`](/ja/docs/Web/CSS/text-emphasis-style) などの個別指定プロパティ)
  - [`text-shadow`](/ja/docs/Web/CSS/text-shadow)
  - [`text-transform`](/ja/docs/Web/CSS/text-transform)

- [SVG](/ja/docs/Web/SVG) の {{SVGAttr("text-rendering")}} 属性
- [SVG と CSS](/ja/docs/Web/SVG/Tutorial/SVG_and_CSS)
