---
title: "`-webkit-mask-box-image` プロパティ (CSS)"
short-title: -webkit-mask-box-image
slug: Web/CSS/Reference/Properties/-webkit-mask-box-image
l10n:
  sourceCommit: 5381238460a48ff323a93e652d15cb62598f0262
---

{{ Non-standard_header() }}

標準外で接頭辞付きの **`-webkit-mask-box-image`** は [CSS](/ja/docs/Web/CSS) の[一括指定](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)プロパティで、要素の境界ボックスのマスク画像を設定します。

> [!NOTE]
> このプロパティは標準外であり、標準化路線にありません。代わりに {{CSSXref("mask-border")}} プロパティを使用することを検討してください。

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- {{cssxref("mask-border-source", "-webkit-mask-border-source")}}
- {{cssxref("mask-border-outset", "-webkit-mask-border-outset")}}
- {{cssxref("mask-border-repeat", "-webkit-mask-border-repeat")}}

この値には、マスクの境界線として使用される `<image>` が記載されており、オプションで 4 つの境界線の外側へのオフセット値と、最大 2 つの境界線の繰り返しスタイルを指定できます。

## 構文

```css
/* デフォルト */
-webkit-mask-box-image: none;

/* image */
-webkit-mask-box-image: url("image.png");

/* image edge-offset */
-webkit-mask-box-image: url("image.png") 10 20 20 10;
-webkit-mask-box-image: url("image.png") 10px 20px 20px 10px;

/* image repeat-style */
-webkit-mask-box-image: url("image.png") space repeat;

/* image edge-offset repeat-style */
-webkit-mask-box-image: url("image.png") 10px 20px 20px 10px space repeat;

/* グローバル値 */
-webkit-mask-box-image: inherit;
-webkit-mask-box-image: initial;
-webkit-mask-box-image: revert;
-webkit-mask-box-image: revert-layer;
-webkit-mask-box-image: unset;
```

### 値

- {{cssxref("image")}}
  - : マスク画像として使用する画像リソースの場所、{{cssxref("gradient")}}、またはその他の {{cssxref("image")}} の値。
- `none`
  - : 境界ボックスにマスク画像がないことを示すために使用します。
- {{cssxref("length")}}
  - : マスク画像のオフセットの大きさです。利用可能な単位は {{cssxref("&lt;length&gt;")}} を参照してください。
- {{cssxref("percentage")}}
  - : マスク画像のオフセットで、境界ボックスの対応する長さ（幅または高さ）に対するパーセント値です。
- {{cssxref("number")}}
  - : マスク画像のオフセットのピクセル単位でのサイズ。
- `repeat`
  - : マスク画像は、境界ボックスの範囲に必要な回数だけ繰り返されます。マスク画像が境界ボックスに均等に配置できない場合は、部分画像を含むことがあります。
- `stretch`
  - : マスク画像は、境界ボックスを正確に含むように引き伸ばされます。
- `round`
  - : マスク画像は多少引き伸ばされ、境界ボックスの端にマスク画像の一部が残らないように繰り返されます。
- `space`
  - : マスク画像は引き伸ばされることなく何度でも繰り返されます。境界ボックスの端に、部分的なマスク画像は置かれません。

アウトセット値（エッジオフセット）は、画像の上辺、右辺、下辺、左辺からの距離を、その順序で定義します。値は {{cssxref("length")}}、{{cssxref("number")}}、または {{cssxref("percentage")}} の形式で設定でき、数値はピクセル単位の長さとして解釈されます。

境界繰り返しスタイルが含む場合、それらは `<repeat-x> <repeat-y>` の順序で解釈されます。値が 1 つしか宣言されていない場合、その値は両方の軸で同じになります。{{cssxref("background-repeat")}} と似ていますが、`cover` および `contain` の値は対応していません。

## 公式定義

- [初期値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#初期値): `none`
- 適用対象: すべての要素
- [継承](/ja/docs/Web/CSS/Guides/Cascade/Inheritance): いいえ
- [計算値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#計算値): 指定どおり

## 形式文法

{{CSSSyntaxRaw(`-webkit-mask-box-image = <mask-image-source> [ <mask-image-offset>{4} <mask-border-repeat>{1,2} ]`)}}

## 例

### 画像の設定

```css
.example-one {
  -webkit-mask-box-image: url("mask.png");
}
```

### 画僧のオフセットと塗りつぶし

```css
.example-two {
  -webkit-mask-box-image: url("logo.png") 100px 100px 0px 0px round round;
}
```

## 仕様書

Not part of any standard.

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS {{ cssxref("mask-border") }} プロパティ
- CSS {{ cssxref("border-image") }} プロパティ
- [Safari CSS reference: `-webkit-mask-box-image`](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-SW14)
