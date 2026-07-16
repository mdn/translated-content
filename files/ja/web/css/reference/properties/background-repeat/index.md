---
title: background-repeat
slug: Web/CSS/Reference/Properties/background-repeat
l10n:
  sourceCommit: 1b3165b1717bbd0bfc1c90ad68c80a84e0b4fc8c
---

**`background-repeat`** は [CSS](/ja/docs/Web/CSS) のプロパティで、背景画像をどのように反復するかを設定します。背景画像は水平軸方向と垂直軸方向に繰り返したり、まったく反復しないようにしたりすることができます。

{{InteractiveExample("CSS デモ: background-repeat")}}

```css interactive-example-choice
background-repeat: repeat-x;
```

```css interactive-example-choice
background-repeat: repeat;
```

```css interactive-example-choice
background-repeat: space;
```

```css interactive-example-choice
background-repeat: round;
```

```css interactive-example-choice
background-repeat: no-repeat;
```

```css interactive-example-choice
background-repeat: space repeat;
```

```html interactive-example
<section id="default-example">
  <div id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  background: #cccccc url("/shared-assets/images/examples/moon.jpg") center /
    120px;
  min-width: 100%;
  min-height: 100%;
}
```

## 構文

```css
/* キーワード値 */
background-repeat: repeat;
background-repeat: repeat-x;
background-repeat: repeat-y;
background-repeat: space;
background-repeat: round;
background-repeat: no-repeat;

/* 値 2 つの構文: 水平方向 | 垂直方向 */
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

## 値

このプロパティでは、最大 2 つの `<repeat-style>` キーワードまたは 2 つの値の一括指定としての単一のキーワードのリストを受け入れます。最初の値は水平方向の反復です。 2 つ目の値は垂直方向の動作です。 `repeat-x` または `repeat-y` 以外の値に 1 つの値だけを設定した場合、その値は両方の辺に適用されます。以下の値が指定できます。

- `repeat`
  - : デフォルト値です。画像は、背景画像の描画領域全体を覆うのに必要な回数だけ反復されます。描画領域の寸法が背景画像の寸法の倍数でない場合は、端の画像が切り取られます。

- `no-repeat`
  - : 画像は反復して描画されません（したがって背景画像描画領域が完全に埋め尽くされるとは限りません）。背景画像の位置は CSS の {{cssxref("background-position")}} プロパティで定義されます。

- `space`
  - : 画像は、切り取られることなく敷き詰められるだけ反復して表示されます。最初と最後の画像は領域の両端に配置され、余白が画像同士の間に均等に配分されます。{{cssxref("background-position")}} プロパティは、画像が 1 つだけ切り取られることなく表示できる場合を除き、無視されます。`space` を使用していて背景画像が切り取られるのは、領域幅を超える背景画像が指定された場合のみです。

- `round`
  - : 利用可能な空間が大きくなるにつれ、繰り返される画像は、もう 1 つ追加する余裕ができるまで（隙間なく）引き伸ばされます。これは、`<repeat-style>` 値の中で唯一、背景画像の歪みにつながる可能性がある値です。これは、背景画像の{{glossary("aspect ratio","アスペクト比")}}が背景描画領域のものと異なる場合に発生します。

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

```css
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
  background-image: url("star-solid.gif");
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
  background-image:
    url("star-solid.gif"), url("/shared-assets/images/examples/favicon32.png");
  background-repeat: repeat-x, repeat-y;
  height: 144px;
}
```

#### 結果

この例では、リストの各要素に `background-repeat` の様々な値が対応付けられています。

{{EmbedLiveSample('background-repeat の設定', 240, 560)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 他の {{cssxref("background")}} 一括指定の成分: {{cssxref("background-attachment")}}, {{cssxref("background-clip")}}, {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}, {{cssxref("background-position")}} ({{cssxref("background-position-x")}} および {{cssxref("background-position-y")}}), {{cssxref("background-size")}}
- [複数の背景画像の利用](/ja/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
- [CSS 背景と境界](/ja/docs/Web/CSS/Guides/Backgrounds_and_borders)モジュール
- [アスペクト比の理解](/ja/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
