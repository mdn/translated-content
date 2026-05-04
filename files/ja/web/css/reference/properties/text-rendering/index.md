---
title: CSS `text-rendering` プロパティ
short-title: text-rendering
slug: Web/CSS/Reference/Properties/text-rendering
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

**`text-rendering`** は [CSS](/ja/docs/Web/CSS) のプロパティで、テキストを描画するときの最適化方法に関する情報をレンダリングエンジンに提供します。

ブラウザーは速さ、読みやすさ、位置の正確さをトレードオフにします。

> [!NOTE]
> `text-rendering` プロパティは SVG のプロパティであり、CSS 標準では定義されていません。しかし、 Windows, macOS, Linux の Gecko や WebKit のブラウザーでは、このプロパティを HTML や XML のコンテンツに適用することができます。

とても目に見えやすい効果は `optimizeLegibility` で、一部のフォント（例えば、 Microsoft の _Calibri_, _Candara_, _Constantia_, _Corbel_、_DejaVu_ フォントファミリー）において 20px より小さい文字に合字 (ff, fi, fl, など) を適用します。

## 構文

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
text-rendering: revert-layer;
text-rendering: unset;
```

### 値

- `auto`
  - : ブラウザーはテキストを描画する際に、速さ、読みやすさ、位置の正確さの最適化について経験的な推測を行います。この値のブラウザーによる解釈の違いについては、ブラウザーの対応をご覧ください。

    `auto` の値は、品質とパフォーマンスのバランスをとる上で適切なデフォルト設定であり、特に長文のプレーンテキストにおいて有効です。

- `optimizeSpeed`
  - : ブラウザーは文字を描画する際に、読みやすさや位置の正確さよりも、速さを強調します。カーニングや合字を無効にします。

    `optimizeSpeed` 値は、プロセッサーの処理速度が遅い場合やバッテリー残量が少ない場合など、リソースに制約されるレンダリング環境において、推奨されます。

- `optimizeLegibility`
  - : ブラウザーは速さや位置の正確さよりも、読みやすさを強調します。カーニングを有効にし、合字は任意です。

    `optimizeLegibility` の値は、見出しやバナーなど、文字サイズは大きいが内容が短いテキストの可読性を高めるために推奨されます。また、出版された記事などの高品質でプロフェッショナルな組版にも使用できます。パフォーマンスに影響を与える可能性があるため、一般的な記事には推奨されません。

- `geometricPrecision`
  - : ブラウザーは速さや読みやすさよりも、位置の正確さを強調します。フォントの一部の側面 — カーニングなど — は、倍率に比例しません。そのため、この値はこれらのフォントを使ったテキストを美しくすることができます。

    SVG では、テキストが拡大または縮小されるとき、ブラウザーはテキストの最終的な寸法 (特定のフォントの大きさと適用される倍率によって決まる) を計算し、プラットフォームのフォントシステムに計算値のフォントを要求します。しかし、大きさ 9 で倍率 140% のフォントを要求すると、フォントの大きさの結果は 12.6 となり、フォントシステムに存在するものではなくなるので、ブラウザーはフォントの大きさを 12 に丸めます。結果的に、テキストは段階的な倍率になります。

    しかし、 `geometricPrecision` は — レンダリングエンジンが完全に対応していれば — なめらかにテキストを拡縮することができます。倍率が大きい場合、文字列の描画があまり美しくならないかもしれませんが、寸法は Windows や Linux が対応しているフォントの大きさに切り上げられたり切り捨てられたりせず、期待通りになります。

    `geometricPrecision` の値は、読みやすさやパフォーマンスを最適化しません。通常、テキストのサイズを歪めることなくグラフィックを忠実に変倍したい場合、SVG においてこの設定に意味があります。

    > [!NOTE]
    > WebKit は指定された値を厳密に適用しますが、 Gecko は値を `optimizeLegibility` と同様に扱います。

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
.small {
  font:
    19.9px "Constantia",
    "Times New Roman",
    "Georgia",
    "Palatino",
    serif;
}
.big {
  font:
    20px "Constantia",
    "Times New Roman",
    "Georgia",
    "Palatino",
    serif;
}
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
p {
  font:
    1.5em "Constantia",
    "Times New Roman",
    "Georgia",
    "Palatino",
    serif;
}

.speed {
  text-rendering: optimizeSpeed;
}
.legibility {
  text-rendering: optimizeLegibility;
}
```

#### 結果

{{ EmbedLiveSample('optimizeSpeed_vs_optimizeLegibility') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`<canvas>` でのテキストの描画](/ja/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
- [CSS テキスト装飾](/ja/docs/Web/CSS/Guides/Text_decoration) モジュール
- 関連する CSS プロパティ
  - {{cssxref("text-decoration")}}（および個別指定プロパティの {{cssxref("text-decoration-line")}}、{{cssxref("text-decoration-style")}}、{{cssxref("text-decoration-thickness")}} など）
  - {{cssxref("text-emphasis")}}（および個別指定プロパティの {{cssxref("text-emphasis-color")}}、{{cssxref("text-emphasis-position")}}、{{cssxref("text-emphasis-style")}} など）
  - {{cssxref("text-shadow")}}
  - {{cssxref("text-transform")}}

- [SVG](/ja/docs/Web/SVG) の {{SVGAttr("text-rendering")}} 属性
- [SVG と CSS](/ja/docs/Web/SVG/Tutorials/SVG_from_scratch/SVG_and_CSS)
