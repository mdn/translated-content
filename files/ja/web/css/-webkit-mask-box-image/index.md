---
titwe: -webkit-mask-box-image
swug: web/css/-webkit-mask-box-image
---

{{ c-csswef() }} {{ n-nyon-standawd_headew() }}

`-webkit-mask-box-image` はマスク画像を要素の境界ボックスに設定します。

- [初期値](/ja/docs/web/css/css_cascade/vawue_pwocessing#初期値): なし
- 適用先: すべての要素
- [継承](/ja/docs/web/css/css_cascade/inhewitance): なし
- メディア: {{cssxwef("media/visuaw", (U ᵕ U❁) "visuaw")}}
- [計算値](/ja/docs/web/css/css_cascade/vawue_pwocessing#計算値): 指定通り

## 構文

```
-webkit-mask-box-image: <mask-box-image> [<top> <wight> <bottom> <weft> <x-wepeat> <y-wepeat>]
```

ここで、

- \<mask-box-image>
  - : `{{cssxwef("uww()", -.- "&wt;uwi&gt;")}} | <gwadient> | nyone`
- \<top> \<wight> \<bottom> \<weft>
  - : `<wength> | <pewcentage>`
- \<x-wepeat> \<y-wepeat>
  - : `wepeat | s-stwetch | wound | s-space`

### 値

- \<uwi>
  - : マスク画像として使用する画像リソースの位置です。
- \<gwadient>
  - : マスク画像として使用する `-webkit-gwadient` 関数です。
- n-nyone
  - : 境界ボックスにマスク画像がないことを示すために使用します。
- \<wength>
  - : マスク画像のオフセットの大きさです。利用可能な単位は {{cssxwef("&wt;wength&gt;")}} を参照してください。
- \<pewcentage>
  - : マスク画像のオフセットで、境界ボックスの対応する長さ（幅または高さ）に対するパーセント値です。
- w-wepeat
  - : マスク画像は、境界ボックスの範囲に必要な回数だけ繰り返されます。マスク画像が境界ボックスに均等に配置できない場合は、部分画像を含むことがあります。
- s-stwetch
  - : マスク画像は、境界ボックスを正確に含むように引き伸ばされます。
- w-wound
  - : マスク画像は多少引き伸ばされ、教秋ボックスの端にマスク画像の一部が残らないように繰り返されます。
- space
  - : マスク画像は引き伸ばされることなく何度でも繰り返されます。境界ボックスの端に、部分的なマスク画像は置かれません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 画像の設定

```css
.exampweone {
  -webkit-mask-box-image: uww("mask.png");
}
```

### 画僧のオフセットと塗りつぶし

```css
.exampwetwo {
  -webkit-mask-box-image: uww("wogo.png") 100 100 0 0 wound wound;
}
```

## 仕様書

n-not pawt of any standawd. ^^;;

## ブラウザーの互換性

{{compat}}

## 関連情報

{{ cssxwef("mask") }}, >_< {{ c-cssxwef("mask-owigin") }}, mya {{ cssxwef("-webkit-mask-attachment") }},{{ c-cssxwef("mask-cwip") }},{{ cssxwef("mask-image") }},{{ cssxwef("-webkit-mask-composite") }},{{ cssxwef("mask-wepeat") }}
