---
title: <menclose>
slug: Web/MathML/Reference/Element/menclose
original_slug: Web/MathML/Element/menclose
l10n:
  sourceCommit: 8eece0b998c23e8ea35f936d7371a169974130f5
---

{{MathMLRef}}{{Non-standard_header}}

**`<menclose>`** は [MathML](/ja/docs/Web/MathML) の要素で、 `notation` 属性で指定された記法を囲むように内容を表示します。

## 属性

この要素の属性には、[グローバル MathML 属性](/ja/docs/Web/MathML/Reference/Global_attributes)があります。

- `notation` {{Non-standard_Inline}}
  - : 子要素に適用する表記を空白で区切ったリストです。記号はそれぞれ、あたかも他の記号が存在しないかのように描画されるため、重なる可能性があります。指定可能な値は以下の通りです。

    | 値                   | サンプルレンダリング                                        | このブラウザーでのレンダリング                                                                                                                 | 説明                                                                                          |
    | -------------------- | ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
    | `longdiv` （既定値） | ![longdiv](default.png)                                     | <math><menclose notation="longdiv"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>            | 長い部分の記号                                                                                |
    | `actuarial`          | ![actuarial](actuarial.png)                                 | <math><menclose notation="actuarial"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>          | [アクチュアリー記法](https://ja.wikipedia.org/wiki/アクチュアリー記法)                        |
    | `box`                | ![box](box.png)                                             | <math><menclose notation="box"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>                | ボックス                                                                                      |
    | `roundedbox`         | ![roundedbox](roundedbox.png)                               | <math><menclose notation="roundedbox"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>         | 角丸ボックス                                                                                  |
    | `circle`             | ![circle](circle.png)                                       | <math><menclose notation="circle"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>             | 楕円                                                                                          |
    | `left`               | ![left](left.png)                                           | <math><menclose notation="left"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>               | コンテンツの左側線                                                                            |
    | `right`              | ![right](right.png)                                         | <math><menclose notation="right"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>              | コンテンツの右側線                                                                            |
    | `top`                | ![top](top.png)                                             | <math><menclose notation="top"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>                | コンテンツの上線                                                                              |
    | `bottom`             | ![bottom](bottom.png)                                       | <math><menclose notation="bottom"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>             | コンテンツの下線                                                                              |
    | `updiagonalstrike`   | ![updiagonalstrike](updiagonalstrike.png)                   | <math><menclose notation="updiagonalstrike"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>   | コンテンツ上の左下から右上に向けた取り消し線                                                  |
    | `downdiagonalstrike` | ![downdiagonalstrike](downdiagonalstrike.png)               | <math><menclose notation="downdiagonalstrike"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math> | コンテンツ上の左上から右下に向けた取り消し線                                                  |
    | `verticalstrike`     | ![verticalstrike](verticalstrike.png)                       | <math><menclose notation="verticalstrike"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>     | コンテンツ上の垂直取り消し線                                                                  |
    | `horizontalstrike`   | ![horizontalstrike](horizontalstrike.png)                   | <math><menclose notation="horizontalstrike"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>   | コンテンツ上の水平取り消し線                                                                  |
    | `madruwb`            | ![madruwb](madruwb.png)                                     | <math><menclose notation="madruwb"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>            | [アラビアの階乗記号](https://ja.wikipedia.org/wiki/現代アラビア語における数学表記#算術と代数) |
    | `updiagonalarrow`    | ![Arrow pointing up and to the right.](updiagonalarrow.png) | <math><menclose notation="updiagonalarrow"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>    | 斜め矢印                                                                                      |
    | `phasorangle`        | ![Screenshot of the phasorangle notation](phasorangle.png)  | <math><menclose notation="phasorangle"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>        | フェザー角                                                                                    |

## 例

```html
<math display="block">
  <menclose notation="circle box">
    <mi>x</mi>
    <mo>+</mo>
    <mi>y</mi>
  </menclose>
</math>
```

{{ EmbedLiveSample('menclose_example', 700, 200, "", "") }}

## 仕様書

<menclose>` 要素はブラウザー向けの仕様書では定義されていませんが、 [MathML 4](https://w3c.github.io/mathml/#presm_menclose) に記述があります。

## ブラウザーの互換性

{{Compat}}
