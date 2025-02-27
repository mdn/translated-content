---
title: background-repeat
slug: Web/CSS/background-repeat
l10n:
  sourceCommit: 50c8e290f11b061bbf2267e1a3279f28180a5fcb
---

{{CSSRef}}

**`background-repeat`** は [CSS](/ja/docs/Web/CSS) のプロパティで、背景画像をどのように繰り返すかを設定します。背景画像は水平軸方向と垂直軸方向に繰り返したり、まったく繰り返さないようにしたりすることができます。

{{EmbedInteractiveExample("pages/css/background-repeat.html")}}

## 構文

```css
/* キーワード値 */
background-repeat: repeat;
background-repeat: repeat-x;
background-repeat: repeat-y;
background-repeat: space;
background-repeat: round;
background-repeat: no-repeat;

/* 値2つの構文: 水平方向 | 垂直方向 */
background-repeat: repeat space;
background-repeat: repeat repeat;
background-repeat: round space;
background-repeat: no-repeat round;

/* グローバル値 */
background-repeat: inherit;
background-repeat: initial;
background-repeat: revert;
background-repeat: revert-layer;
background-repeat: unset;
```

## 解説

このプロパティは、 2 つの [`<repeat-style>`](#値) キーワード、または 1 つのキーワードを 2 つの値の短縮形として受け入れます。 2 つの値が指定された場合、最初の値は水平方向の繰り返し動作を定義し、 2 番目の値は垂直方向の動作を定義します。
プロパティ値は、水平方向のみ、垂直方向のみ、または全く繰り返さないように使用することができます。

既定値は `repeat repeat` です。この値では、背景画像は内在的な{{glossary("aspect ratio","アスペクト比")}}を維持したまま、水平および垂直方向に繰り返されて背景領域全体を覆い、端の画像は要素のサイズに合わせて切り取られます。どの端が切り取られるかは、 {{cssxref("background-position")}} の値によって異なります。繰り返される回数と端の画像が切り取られる量は、背景領域のサイズと {{cssxref("background-size")}} の値によって異なります。

繰り返される画像は等間隔に配置され、繰り返される画像が切り取られることなく、アスペクト比を確実に保持します。 `space` 値を使用した場合には、背景描画領域のアスペクト比が画像と異なる場合、またはいずれかの方向が背景画像のサイズの倍数でない場合、背景画像に覆われない領域ができます。

あるいは、繰り返される背景画像は、切り取りを行わずに、領域全体に応じたサイズに引き伸ばすこともできます。 `round` では、背景画像のアスペクト比が描画領域のものと異なる場合、利用できる空間すべてに繰り返される画像が引き伸ばされ、追加の繰り返される画像を追加する空間が生まれるまで、その状態が続きます。例えば、指定された背景画像が 100px × 100px で、背景描画領域が 1099px × 750px の場合、画像は水平方向に 10 回、垂直方向に 7 回繰り返され、合計 70 回繰り返されます。それぞれの画像は、 109.9px × 105px になるよう、両方向に引き伸ばされます。描画領域の幅が 1px 増えて 1100px 幅になると、 11 番目の画像が水平方向に収まり、合計 77 枚の画像が繰り返され、各画像は幅 100px、高さ 105px で、垂直方向にのみ引き伸ばされて描画されます。

### 値

このプロパティでは、最大 2 つの `<repeat-style>` キーワードを受け入れます。最初の値は水平方向の反復です。 2 つ目の値は垂直方向の動作です。 `repeat-x` または `repeat-y` 以外の値に 1 つの値だけを設定した場合、その値は両方の辺に適用されます。以下の値が指定できます。

- `repeat`

  - : 既定値です。画像は背景画像が描画領域全体を覆うのに必要な回数だけ繰り返され、描画領域の寸法が背景画像の寸法の倍数でない場合は、端の画像が切り取られます。

- `no-repeat`

  - : 画像は繰り返し描画されません (したがって背景画像描画領域が完全に埋め尽くされるとは限りません)。背景画像の位置は CSS の　{{cssxref("background-position")}} プロパティで定義されます。

- `space`

  - : 画像は指定された方向に切り抜きなしで敷き詰められる回数だけ繰り返されます。最初の画像と最後の画像は領域の両端にそれぞれ接触するように描画され、余白が画像同士の間に均一に分配されます。 {{cssxref("background-position")}} プロパティは、画像を 1 つしか切り抜きなしで敷き詰められない場合を除き、無視されます。`space` を使用していて背景画像が切り抜かれるのは、領域幅を超える背景画像が指定された場合のみです。

- `round`

  - : 利用可能な空間が大きくなるにつれ、繰り返される画像は、もう1つ追加する余裕ができるまで（隙間なく）引き伸ばされます。これは、`<repeat-style>`値の中で唯一、背景画像の歪みにつながる可能性がある値です。これは、背景画像の{{glossary("aspect ratio","アスペクト比")}}が背景描画領域のものと異なる場合に発生します。

- `repeat-x`

  - : `repeat no-repeat` の短縮形で、背景画像は水平方向にのみ繰り返され、描画領域の幅が背景画像の幅の倍数でない場合は、端の画像が切り取られます。

- `repeat-y`

  - : `no-repeat repeat` の短縮形で、背景画像は垂直方向にのみ繰り返され、描画領域の高さが背景画像の高さの倍数でない場合は、端の画像が切り取られます。

`<repeat-style>` キーワードが 1 つだけ指定された場合、その値は次の 2 値構文の短縮形となります。

| 単一の値    | 同等の 2 つの値       |
| ----------- | --------------------- |
| `repeat-x`  | `repeat no-repeat`    |
| `repeat-y`  | `no-repeat repeat`    |
| `repeat`    | `repeat repeat`       |
| `space`     | `space space`         |
| `round`     | `round round`         |
| `no-repeat` | `no-repeat no-repeat` |

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### background-repeat の設定

#### HTML

```html live-sample___setting_background-repeat
<ol>
  <li>
    no-repeat
    <div class="one"></div>
  </li>
  <li>
    repeat
    <div class="two"></div>
  </li>
  <li>
    repeat-x
    <div class="three"></div>
  </li>
  <li>
    repeat-y
    <div class="four"></div>
  </li>
  <li>
    space
    <div class="five"></div>
  </li>
  <li>
    round
    <div class="six"></div>
  </li>
  <li>
    repeat-x, repeat-y (複数の画像)
    <div class="seven"></div>
  </li>
</ol>
```

#### CSS

```css live-sample___setting_background-repeat
/* 例のすべての div で共通 */
ol,
li {
  margin: 0;
  padding: 0;
}
li {
  margin-bottom: 12px;
}
div {
  background-image: url(star-solid.gif);
  width: 160px;
  height: 70px;
}

/* 背景の繰り返し */
.one {
  background-repeat: no-repeat;
}
.two {
  background-repeat: repeat;
}
.three {
  background-repeat: repeat-x;
}
.four {
  background-repeat: repeat-y;
}
.five {
  background-repeat: space;
}
.six {
  background-repeat: round;
}

/* 複数の画像 */
.seven {
  background-image: url(star-solid.gif), url(favicon32.png);
  background-repeat: repeat-x, repeat-y;
  height: 144px;
}
```

#### 結果

この例では、リストの各要素に `background-repeat` の様々な値が対応付けられています。

{{EmbedLiveSample('Setting_background-repeat', 240, 560)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 他の {{cssxref("background")}} 一括指定の成分: {{cssxref("background-attachment")}}, {{cssxref("background-clip")}}, {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}, {{cssxref("background-position")}} ({{cssxref("background-position-x")}} と {{cssxref("background-position-y")}}), {{cssxref("background-size")}}
- [複数の背景画像の利用](/ja/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
- [CSS 背景と境界](/ja/docs/Web/CSS/CSS_backgrounds_and_borders)モジュール
- [アスペクト比の理解](/ja/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
