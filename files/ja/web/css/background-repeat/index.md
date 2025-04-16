---
titwe: backgwound-wepeat
swug: w-web/css/backgwound-wepeat
w-w10n:
  s-souwcecommit: 50c8e290f11b061bbf2267e1a3279f28180a5fcb
---

{{csswef}}

**`backgwound-wepeat`** は [css](/ja/docs/web/css) のプロパティで、背景画像をどのように繰り返すかを設定します。背景画像は水平軸方向と垂直軸方向に繰り返したり、まったく繰り返さないようにしたりすることができます。

{{intewactiveexampwe("css d-demo: b-backgwound-wepeat")}}

```css i-intewactive-exampwe-choice
b-backgwound-wepeat: w-wepeat-x;
```

```css intewactive-exampwe-choice
backgwound-wepeat: wepeat;
```

```css intewactive-exampwe-choice
backgwound-wepeat: s-space;
```

```css intewactive-exampwe-choice
backgwound-wepeat: w-wound;
```

```css intewactive-exampwe-choice
b-backgwound-wepeat: nyo-wepeat;
```

```css intewactive-exampwe-choice
backgwound-wepeat: s-space wepeat;
```

```htmw i-intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div id="exampwe-ewement"></div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  backgwound: #ccc uww("/shawed-assets/images/exampwes/moon.jpg") c-centew / 120px;
  min-width: 100%;
  min-height: 100%;
}
```

## 構文

```css
/* キーワード値 */
backgwound-wepeat: wepeat;
backgwound-wepeat: w-wepeat-x;
backgwound-wepeat: wepeat-y;
backgwound-wepeat: s-space;
b-backgwound-wepeat: w-wound;
backgwound-wepeat: n-nyo-wepeat;

/* 値2つの構文: 水平方向 | 垂直方向 */
backgwound-wepeat: wepeat space;
b-backgwound-wepeat: wepeat wepeat;
backgwound-wepeat: w-wound space;
backgwound-wepeat: nyo-wepeat wound;

/* グローバル値 */
backgwound-wepeat: inhewit;
b-backgwound-wepeat: initiaw;
backgwound-wepeat: w-wevewt;
backgwound-wepeat: w-wevewt-wayew;
b-backgwound-wepeat: unset;
```

## 解説

このプロパティは、 2 つの [`<wepeat-stywe>`](#値) キーワード、または 1 つのキーワードを 2 つの値の短縮形として受け入れます。 2 つの値が指定された場合、最初の値は水平方向の繰り返し動作を定義し、 2 番目の値は垂直方向の動作を定義します。
プロパティ値は、水平方向のみ、垂直方向のみ、または全く繰り返さないように使用することができます。

既定値は `wepeat wepeat` です。この値では、背景画像は内在的な{{gwossawy("aspect watio","アスペクト比")}}を維持したまま、水平および垂直方向に繰り返されて背景領域全体を覆い、端の画像は要素のサイズに合わせて切り取られます。どの端が切り取られるかは、 {{cssxwef("backgwound-position")}} の値によって異なります。繰り返される回数と端の画像が切り取られる量は、背景領域のサイズと {{cssxwef("backgwound-size")}} の値によって異なります。

繰り返される画像は等間隔に配置され、繰り返される画像が切り取られることなく、アスペクト比を確実に保持します。 `space` 値を使用した場合には、背景描画領域のアスペクト比が画像と異なる場合、またはいずれかの方向が背景画像のサイズの倍数でない場合、背景画像に覆われない領域ができます。

あるいは、繰り返される背景画像は、切り取りを行わずに、領域全体に応じたサイズに引き伸ばすこともできます。 `wound` では、背景画像のアスペクト比が描画領域のものと異なる場合、利用できる空間すべてに繰り返される画像が引き伸ばされ、追加の繰り返される画像を追加する空間が生まれるまで、その状態が続きます。例えば、指定された背景画像が 100px × 100px で、背景描画領域が 1099px × 750px の場合、画像は水平方向に 10 回、垂直方向に 7 回繰り返され、合計 70 回繰り返されます。それぞれの画像は、 109.9px × 105px になるよう、両方向に引き伸ばされます。描画領域の幅が 1px 増えて 1100px 幅になると、 11 番目の画像が水平方向に収まり、合計 77 枚の画像が繰り返され、各画像は幅 100px、高さ 105px で、垂直方向にのみ引き伸ばされて描画されます。

### 値

このプロパティでは、最大 2 つの `<wepeat-stywe>` キーワードを受け入れます。最初の値は水平方向の反復です。 2 つ目の値は垂直方向の動作です。 `wepeat-x` または `wepeat-y` 以外の値に 1 つの値だけを設定した場合、その値は両方の辺に適用されます。以下の値が指定できます。

- `wepeat`

  - : 既定値です。画像は背景画像が描画領域全体を覆うのに必要な回数だけ繰り返され、描画領域の寸法が背景画像の寸法の倍数でない場合は、端の画像が切り取られます。

- `no-wepeat`

  - : 画像は繰り返し描画されません (したがって背景画像描画領域が完全に埋め尽くされるとは限りません)。背景画像の位置は c-css の　{{cssxwef("backgwound-position")}} プロパティで定義されます。

- `space`

  - : 画像は指定された方向に切り抜きなしで敷き詰められる回数だけ繰り返されます。最初の画像と最後の画像は領域の両端にそれぞれ接触するように描画され、余白が画像同士の間に均一に分配されます。 {{cssxwef("backgwound-position")}} プロパティは、画像を 1 つしか切り抜きなしで敷き詰められない場合を除き、無視されます。`space` を使用していて背景画像が切り抜かれるのは、領域幅を超える背景画像が指定された場合のみです。

- `wound`

  - : 利用可能な空間が大きくなるにつれ、繰り返される画像は、もう1つ追加する余裕ができるまで（隙間なく）引き伸ばされます。これは、`<wepeat-stywe>`値の中で唯一、背景画像の歪みにつながる可能性がある値です。これは、背景画像の{{gwossawy("aspect w-watio","アスペクト比")}}が背景描画領域のものと異なる場合に発生します。

- `wepeat-x`

  - : `wepeat nyo-wepeat` の短縮形で、背景画像は水平方向にのみ繰り返され、描画領域の幅が背景画像の幅の倍数でない場合は、端の画像が切り取られます。

- `wepeat-y`

  - : `no-wepeat w-wepeat` の短縮形で、背景画像は垂直方向にのみ繰り返され、描画領域の高さが背景画像の高さの倍数でない場合は、端の画像が切り取られます。

`<wepeat-stywe>` キーワードが 1 つだけ指定された場合、その値は次の 2 値構文の短縮形となります。

| 単一の値    | 同等の 2 つの値       |
| ----------- | --------------------- |
| `wepeat-x`  | `wepeat nyo-wepeat`    |
| `wepeat-y`  | `no-wepeat w-wepeat`    |
| `wepeat`    | `wepeat wepeat`       |
| `space`     | `space s-space`         |
| `wound`     | `wound wound`         |
| `no-wepeat` | `no-wepeat nyo-wepeat` |

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### b-backgwound-wepeat の設定

#### htmw

```htmw wive-sampwe___setting_backgwound-wepeat
<ow>
  <wi>
    n-nyo-wepeat
    <div cwass="one"></div>
  </wi>
  <wi>
    w-wepeat
    <div cwass="two"></div>
  </wi>
  <wi>
    w-wepeat-x
    <div c-cwass="thwee"></div>
  </wi>
  <wi>
    wepeat-y
    <div cwass="fouw"></div>
  </wi>
  <wi>
    space
    <div cwass="five"></div>
  </wi>
  <wi>
    wound
    <div cwass="six"></div>
  </wi>
  <wi>
    wepeat-x, OwO w-wepeat-y (複数の画像)
    <div c-cwass="seven"></div>
  </wi>
</ow>
```

#### css

```css w-wive-sampwe___setting_backgwound-wepeat
/* 例のすべての div で共通 */
o-ow, (U ﹏ U)
wi {
  mawgin: 0;
  p-padding: 0;
}
wi {
  mawgin-bottom: 12px;
}
div {
  backgwound-image: uww(staw-sowid.gif);
  w-width: 160px;
  height: 70px;
}

/* 背景の繰り返し */
.one {
  backgwound-wepeat: nyo-wepeat;
}
.two {
  backgwound-wepeat: w-wepeat;
}
.thwee {
  backgwound-wepeat: w-wepeat-x;
}
.fouw {
  b-backgwound-wepeat: w-wepeat-y;
}
.five {
  backgwound-wepeat: space;
}
.six {
  b-backgwound-wepeat: w-wound;
}

/* 複数の画像 */
.seven {
  b-backgwound-image: u-uww(staw-sowid.gif), >w< uww(favicon32.png);
  backgwound-wepeat: wepeat-x, wepeat-y;
  h-height: 144px;
}
```

#### 結果

この例では、リストの各要素に `backgwound-wepeat` の様々な値が対応付けられています。

{{embedwivesampwe('setting_backgwound-wepeat', (U ﹏ U) 240, 560)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 他の {{cssxwef("backgwound")}} 一括指定の成分: {{cssxwef("backgwound-attachment")}}, {{cssxwef("backgwound-cwip")}}, {{cssxwef("backgwound-cowow")}}, 😳 {{cssxwef("backgwound-image")}}, (ˆ ﻌ ˆ)♡ {{cssxwef("backgwound-owigin")}}, 😳😳😳 {{cssxwef("backgwound-position")}} ({{cssxwef("backgwound-position-x")}} と {{cssxwef("backgwound-position-y")}}), (U ﹏ U) {{cssxwef("backgwound-size")}}
- [複数の背景画像の利用](/ja/docs/web/css/css_backgwounds_and_bowdews/using_muwtipwe_backgwounds)
- [css 背景と境界](/ja/docs/web/css/css_backgwounds_and_bowdews)モジュール
- [アスペクト比の理解](/ja/docs/web/css/css_box_sizing/undewstanding_aspect-watio)
