---
title: background-repeat-x
slug: Web/CSS/Reference/Properties/background-repeat-x
l10n:
  sourceCommit: 739c9994ad2e83809110f601d8941f61d6785f29
---

**`background-repeat-x`** は [CSS](/ja/docs/Web/CSS) のプロパティで、背景画像を水平軸方向にどのように反復表示するか、それとも反復しないかを設定します。

`background-repeat-x` および {{cssxref("background-repeat-y")}} プロパティは、 {{cssxref("background-repeat")}} または {{cssxref("background")}} 一括指定プロパティを使用して設定することもできます。

{{InteractiveExample("CSS デモ: background-repeat-x")}}

```css interactive-example-choice
background-repeat-x: repeat;
```

```css interactive-example-choice
background-repeat-x: space;
```

```css interactive-example-choice
background-repeat-x: round;
```

```css interactive-example-choice
background-repeat-x: no-repeat;
```

```html interactive-example
<section id="default-example">
  <div id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  background: #cccccc url("/shared-assets/images/examples/moon.jpg") no-repeat
    center / 120px;
  min-width: 100%;
  min-height: 100%;
}
```

## 構文

```css
/* キーワード値 */
background-repeat-x: repeat;
background-repeat-x: space;
background-repeat-x: round;
background-repeat-x: no-repeat;

/* グローバル値 */
background-repeat-x: inherit;
background-repeat-x: initial;
background-repeat-x: revert;
background-repeat-x: revert-layer;
background-repeat-x: unset;
```

`background-repeat-x` プロパティは、カンマで区切って複数の値を指定することができます。

## 値

- `repeat`
  - : デフォルト値です。画像は、背景画像の描画領域の幅全体を埋めるのに必要な回数だけ反復されます。複数の画像が背景の幅にぴったり収まらない場合、端の部分は切り取られます。

- `no-repeat`
  - : 画像は反復して描画されません。背景画像の位置は CSS の {{cssxref("background-position")}} プロパティで定義されます。

- `space`
  - : 画像は、切り取られることなく敷き詰められるだけ反復して表示されます。最初と最後の画像は要素の左右の端に配置され、余白が画像間に均等に配分されます。{{cssxref("background-position-x")}} プロパティは、1 つ以上の画像が切り取られることなく表示できる場合を除き、無視されます。画像が要素よりも幅が広い場合、表示させる余地がないため、画像は切り取られます。

- `round`
  - : 画像は水平方向に反復して表示されます。利用できる空間のサイズが大きくなると、反復表示される画像は（隙間がなくなるように）引き伸ばされ、さらに1枚追加できる余地があるまで続きます。複数の画像が背景にぴったり収まらない場合は、収まるようにサイズが調整されます。

## 解説

`background-repeat-x` プロパティは、カンマで区切った [`<repetition>`](#値) キーワードのリストを受け付け、背景画像をどのように水平方向に反復させるか、または全く反復させないかを定義します。

デフォルト値は `repeat` です。この値では、背景画像は水平方向に反復されて背景領域全体を埋め、端の画像は要素の幅に合わせて切り取られます。切り取られる端が左なのか、右なのか、両方なのかは、対応する {{cssxref("background-position")}} の値によって決まります。画像が反復される回数や、端の画像がどれだけ切り取られるかは、背景の描画領域のサイズと対応する {{cssxref("background-size")}} プロパティの幅の値によって決まります。

等しい間隔を空けて反復画像を配置することで、反復画像が水平方向に切り取られないようにすることもできます。`space` 値を使用した場合、背景描画領域の幅が画像の幅の倍数でないか、または幅方向において背景画像のサイズの倍数でない場合、背景画像で覆われない領域が生じます。

あるいは、反復される背景画像を切り取らずに、背景領域の幅全体を覆うように引き伸ばすこともできます。`round` を使用すると、反復画像をもう一枚追加できる余地が生まれるまで、利用可能な空間全体を埋めるように画像が引き伸ばされます。

例えば、`100px` x `100px` の背景画像があり、描画領域の幅が `1099px` である場合、画像は 109.9px の幅に引き伸ばされ、水平方向に 10 回反復されます。これにより画像の{{glossary("aspect ratio", "アスペクト比")}}が変化し、歪んでしまう可能性があります。描画領域の幅が `1px` 増加し `1100px` になると、11 枚目の画像が水平方向に収まり、各画像は幅 `100px` で描画されるため、水平方向に歪むことはなくなります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### background-repeat-x の設定

#### HTML

```html
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
    space
    <div class="three"></div>
  </li>
  <li>
    round
    <div class="four"></div>
  </li>
</ol>
```

#### CSS

```css
ol,
li {
  margin: 0;
  padding: 0;
}
li {
  margin-bottom: 12px;
}
div {
  background-image: url("star-solid.gif");
  width: 160px;
  height: 70px;
}

/* 背景の繰り返し */
.one {
  background-repeat-x: no-repeat;
}
.two {
  background-repeat-x: repeat;
}
.three {
  background-repeat-x: space;
}
.four {
  background-repeat-x: round;
}
```

```css hidden
@layer no-support {
  @supports not (background-repeat-x: repeat) {
    body::before {
      content: "このブラウザーは `background-repeat-x` プロパティに対応していません。";
      background-color: wheat;
      display: block;
      padding: 1em;
      text-align: center;
    }
  }
}
```

#### 結果

この例では、それぞれのリストアイテムが様々な `background-repeat-x` の値と照合されます。

{{EmbedLiveSample('Setting_background-repeat-x', 240, 460)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("background-repeat-y")}} および {{cssxref("background-repeat")}} 一括指定
- {{cssxref("background")}} 一括指定の成分: {{cssxref("background-attachment")}}, {{cssxref("background-clip")}}, {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}, {{cssxref("background-position")}} ({{cssxref("background-position-x")}} および {{cssxref("background-position-y")}}), {{cssxref("background-size")}}
- [複数の背景画像の利用](/ja/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
- [CSS 背景と境界](/ja/docs/Web/CSS/Guides/Backgrounds_and_borders)モジュール
- [アスペクト比の理解](/ja/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
