---
title: <menclose>
slug: Web/MathML/Reference/Element/menclose
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{Non-standard_header}}

**`<menclose>`** は [MathML](/ja/docs/Web/MathML) の要素で、 `notation` 属性で指定された記法を囲むように内容を表示します。

## 属性

この要素の属性には、[グローバル MathML 属性](/ja/docs/Web/MathML/Reference/Global_attributes)があります。

- `notation` {{Non-standard_Inline}}
  - : 子要素に適用する表記法のリスト（空白区切り）。各記号は他の記号が存在しないかのように描画されるため、重なる場合があります。指定可能な値は以下の通りです。

    | 値                   | サンプルレンダリング                                               | このブラウザーでのレンダリング                                                                                                               | 説明                                                                                          |
    | -------------------- | ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
    | `longdiv` (既定値)   | ![Longdiv サンプルレンダリング](longdiv.svg)                       | <math><menclose notation="longdiv"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>            | 長い部分の記号                                                                                |
    | `actuarial`          | ![Actuarial サンプルレンダリング](actuarial.svg)                   | <math><menclose notation="actuarial"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>          | [アクチュアリー記法](https://ja.wikipedia.org/wiki/アクチュアリー記法)                        |
    | `box`                | ![Box サンプルレンダリング](box.svg)                               | <math><menclose notation="box"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>                | ボックス                                                                                      |
    | `roundedbox`         | ![Roundedbox サンプルレンダリング](roundedbox.svg)                 | <math><menclose notation="roundedbox"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>         | 角丸ボックス                                                                                  |
    | `circle`             | ![Circle サンプルレンダリング](circle.svg)                         | <math><menclose notation="circle"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>             | 楕円                                                                                          |
    | `left`               | ![Left サンプルレンダリング](left.svg)                             | <math><menclose notation="left"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>               | コンテンツの左側線                                                                            |
    | `right`              | ![Right サンプルレンダリング](right.svg)                           | <math><menclose notation="right"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>              | コンテンツの右側線                                                                            |
    | `top`                | ![Top サンプルレンダリング](top.svg)                               | <math><menclose notation="top"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>                | コンテンツの上線                                                                              |
    | `bottom`             | ![Bottom サンプルレンダリング](bottom.svg)                         | <math><menclose notation="bottom"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>             | コンテンツの下線                                                                              |
    | `updiagonalstrike`   | ![Updiagonalstrike サンプルレンダリング](updiagonalstrike.svg)     | <math><menclose notation="updiagonalstrike"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>   | コンテンツ上の左下から右上に向けた取り消し線                                                  |
    | `downdiagonalstrike` | ![Downdiagonalstrike サンプルレンダリング](downdiagonalstrike.svg) | <math><menclose notation="downdiagonalstrike"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math> | コンテンツ上の左上から右下に向けた取り消し線                                                  |
    | `verticalstrike`     | ![Verticalstrike サンプルレンダリング](verticalstrike.svg)         | <math><menclose notation="verticalstrike"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>     | コンテンツ上の垂直取り消し線                                                                  |
    | `horizontalstrike`   | ![Horizontalstrike サンプルレンダリング](horizontalstrike.svg)     | <math><menclose notation="horizontalstrike"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>   | コンテンツ上の水平取り消し線                                                                  |
    | `madruwb`            | ![Madruwb サンプルレンダリング](madruwb.svg)                       | <math><menclose notation="madruwb"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>            | [アラビアの階乗記号](https://ja.wikipedia.org/wiki/現代アラビア語における数学表記#算術と代数) |
    | `updiagonalarrow`    | ![Madruwb サンプルレンダリング](updiagonalarrow.svg)               | <math><menclose notation="updiagonalarrow"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>    | 斜め矢印                                                                                      |
    | `phasorangle`        | ![Phasorangle サンプルレンダリング](phasorangle.svg)               | <math><menclose notation="phasorangle"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>        | フェザー角                                                                                    |

## 例

```css hidden
html,
body {
  height: 100%;
}

body {
  display: grid;
  place-items: center;
  font-size: 2rem;
}
```

```html
<math display="block">
  <menclose notation="circle box">
    <mi>x</mi>
    <mo>+</mo>
    <mi>y</mi>
  </menclose>
</math>
```

レンダリング例:

![円と四角形の値が同時に適用されます。](circle-box.svg)

ブラウザーでの表示例：

{{ EmbedLiveSample('menclose_example', 700, 200, "", "") }}

## 技術的概要

<table class="properties">
  <tr>
    <th scope="row">
      <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles">暗黙の ARIA ロール</a>
    </th>
    <td>
      なし
    </td>
  </tr>
</table>

## 仕様書

`<menclose>` 要素はブラウザー向けの仕様書では定義されていませんが、 [MathML 4](https://w3c.github.io/mathml/#presm_menclose) に記述があります。

## ブラウザーの互換性

{{Compat}}
