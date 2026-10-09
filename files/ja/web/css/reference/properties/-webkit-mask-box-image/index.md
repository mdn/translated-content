---
title: -webkit-mask-box-image
slug: Web/CSS/Reference/Properties/-webkit-mask-box-image
original_slug: Web/CSS/-webkit-mask-box-image
---

{{ CSSRef() }} {{ Non-standard_header() }}

`-webkit-mask-box-image` は、マスク画像を要素の境界ボックスに設定します。

- 初期値: なし
- 適用対象: すべての要素
- 継承: しない
- メディア: {{cssxref("Media/Visual", "visual")}}
- 計算値: 指定通り

## 構文

```css
-webkit-mask-box-image: <mask-box-image> [<top> <right> <bottom> <left> <x-repeat> <y-repeat>];
```

ここで:

- `<mask-box-image>`
  - : `{{cssxref("url()", "&lt;uri&gt;")}} | <gradient> | none`
- `<top> <right> <bottom> <left>`
  - : `<length> | <percentage>`
- `<x-repeat> <y-repeat>`
  - : `repeat | stretch | round | space`

## 値

- `<uri>`
  - : マスク画像として使用する画像リソースの位置です。
- `<gradient>`
  - : マスク画像として使用する `-webkit-gradient` 関数です。
- `none`
  - : 境界ボックスにマスク画像がないことを示します。
- `<length>`
  - : マスク画像のオフセットの大きさです。利用可能な単位は {{cssxref("&lt;length&gt;")}} を参照してください。
- `<percentage>`
  - : 境界ボックスの対応する長さ（幅または高さ）に対する割合です。
- `repeat`
  - : マスク画像は、境界ボックスの範囲に必要な回数だけ繰り返されます。
- `stretch`
  - : マスク画像は、境界ボックスに合うように引き伸ばされます。
- `round`
  - : マスク画像は調整され、端に切れた画像が出ないように繰り返されます。
- `space`
  - : マスク画像は引き伸ばされずに繰り返され、端に部分画像は表示されません。

## 公式定義

- 初期値: `none`
- 適用対象: すべての要素
- 継承: しない
- 計算値: 指定通り
- アニメーションの種類: 離散

## 形式文法

{{CSSSyntaxRaw(`-webkit-mask-box-image = <mask-image-source> [ <mask-image-offset>{4} <mask-border-repeat>{1,2} ]`)}}

## 例

### 画像の設定

```css
.exampleone {
  -webkit-mask-box-image: url("mask.png");
}
```

### 画像のオフセットと繰り返し

```css
.exampletwo {
  -webkit-mask-box-image: url("logo.png") 100 100 0 0 round round;
}
```

## 仕様書

標準仕様の一部ではありません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

{{cssxref("mask")}},
{{cssxref("mask-origin")}},
{{cssxref("-webkit-mask-attachment")}},
{{cssxref("mask-clip")}},
{{cssxref("mask-image")}},
{{cssxref("-webkit-mask-composite")}},
{{cssxref("mask-repeat")}}
