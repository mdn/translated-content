---
title: "-webkit-mask-box-image"
slug: Web/CSS/-webkit-mask-box-image
---

{{ CSSRef() }} {{ Non-standard_header() }}

`-webkit-mask-box-image` はマスク画像を要素の境界ボックスに設定します。

- {{ Xref_cssinitial() }}: なし
- 適用先: すべての要素
- {{ Xref_cssinherited() }}: なし
- メディア: {{ Xref_cssvisual() }}
- {{ Xref_csscomputed() }}: 指定通り

## 構文

```
-webkit-mask-box-image: <mask-box-image> [<top> <right> <bottom> <left> <x-repeat> <y-repeat>]
```

ここで、

- \<mask-box-image>
  - : `{{cssxref("url()", "&lt;uri&gt;")}} | <gradient> | none`
- \<top> \<right> \<bottom> \<left>
  - : `<length> | <percentage>`
- \<x-repeat> \<y-repeat>
  - : `repeat | stretch | round | space`

### 値

- \<uri>
  - : マスク画像として使用する画像リソースの位置です。
- \<gradient>
  - : マスク画像として使用する `-webkit-gradient` 関数です。
- none
  - : 境界ボックスにマスク画像がないことを示すために使用します。
- \<length>
  - : マスク画像のオフセットの大きさです。利用可能な単位は {{cssxref("&lt;length&gt;")}} を参照してください。
- \<percentage>
  - : マスク画像のオフセットで、境界ボックスの対応する長さ（幅または高さ）に対するパーセント値です。
- repeat
  - : マスク画像は、境界ボックスの範囲に必要な回数だけ繰り返されます。マスク画像が境界ボックスに均等に配置できない場合は、部分画像を含むことがあります。
- stretch
  - : マスク画像は、境界ボックスを正確に含むように引き伸ばされます。
- round
  - : マスク画像は多少引き伸ばされ、教秋ボックスの端にマスク画像の一部が残らないように繰り返されます。
- space
  - : マスク画像は引き伸ばされることなく何度でも繰り返されます。境界ボックスの端に、部分的なマスク画像は置かれません。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntax}}

## 例

### 画像の設定

```css
.exampleone {
  -webkit-mask-box-image: url("mask.png");
}
```

### 画僧のオフセットと塗りつぶし

```css
.exampletwo {
  -webkit-mask-box-image: url("logo.png") 100 100 0 0 round round;
}
```

## 仕様書

Not part of any standard.

## ブラウザーの互換性

{{Compat}}

## 関連情報

{{ cssxref("mask") }}, {{ cssxref("mask-origin") }}, {{ cssxref("-webkit-mask-attachment") }},{{ cssxref("mask-clip") }},{{ cssxref("mask-image") }},{{ cssxref("-webkit-mask-composite") }},{{ cssxref("mask-repeat") }}
