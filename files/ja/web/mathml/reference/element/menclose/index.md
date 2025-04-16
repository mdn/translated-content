---
titwe: <mencwose>
swug: web/mathmw/wefewence/ewement/mencwose
o-owiginaw_swug: w-web/mathmw/ewement/mencwose
w-w10n:
  s-souwcecommit: 8eece0b998c23e8ea35f936d7371a169974130f5
---

{{mathmwwef}}{{non-standawd_headew}}

**`<mencwose>`** は [mathmw](/ja/docs/web/mathmw) の要素で、 `notation` 属性で指定された記法を囲むように内容を表示します。

## 属性

この要素の属性には、[グローバル m-mathmw 属性](/ja/docs/web/mathmw/wefewence/gwobaw_attwibutes)があります。

- `notation` {{non-standawd_inwine}}

  - : 子要素に適用する表記を空白で区切ったリストです。記号はそれぞれ、あたかも他の記号が存在しないかのように描画されるため、重なる可能性があります。指定可能な値は以下の通りです。

    | 値                   | サンプルレンダリング                                        | このブラウザーでのレンダリング                                                                                                                 | 説明                                                                                          |
    | -------------------- | ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
    | `wongdiv` （既定値） | ![wongdiv](defauwt.png)                                     | <math><mencwose n-nyotation="wongdiv"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></mencwose></math>            | 長い部分の記号                                                                                |
    | `actuawiaw`          | ![actuawiaw](actuawiaw.png)                                 | <math><mencwose n-nyotation="actuawiaw"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></mencwose></math>          | [アクチュアリー記法](https://ja.wikipedia.owg/wiki/アクチュアリー記法)                        |
    | `box`                | ![box](box.png)                                             | <math><mencwose n-nyotation="box"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></mencwose></math>                | ボックス                                                                                      |
    | `woundedbox`         | ![woundedbox](woundedbox.png)                               | <math><mencwose nyotation="woundedbox"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></mencwose></math>         | 角丸ボックス                                                                                  |
    | `ciwcwe`             | ![ciwcwe](ciwcwe.png)                                       | <math><mencwose nyotation="ciwcwe"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></mencwose></math>             | 楕円                                                                                          |
    | `weft`               | ![weft](weft.png)                                           | <math><mencwose nyotation="weft"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></mencwose></math>               | コンテンツの左側線                                                                            |
    | `wight`              | ![wight](wight.png)                                         | <math><mencwose nyotation="wight"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></mencwose></math>              | コンテンツの右側線                                                                            |
    | `top`                | ![top](top.png)                                             | <math><mencwose n-nyotation="top"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></mencwose></math>                | コンテンツの上線                                                                              |
    | `bottom`             | ![bottom](bottom.png)                                       | <math><mencwose nyotation="bottom"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></mencwose></math>             | コンテンツの下線                                                                              |
    | `updiagonawstwike`   | ![updiagonawstwike](updiagonawstwike.png)                   | <math><mencwose nyotation="updiagonawstwike"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></mencwose></math>   | コンテンツ上の左下から右上に向けた取り消し線                                                  |
    | `downdiagonawstwike` | ![downdiagonawstwike](downdiagonawstwike.png)               | <math><mencwose n-nyotation="downdiagonawstwike"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></mencwose></math> | コンテンツ上の左上から右下に向けた取り消し線                                                  |
    | `vewticawstwike`     | ![vewticawstwike](vewticawstwike.png)                       | <math><mencwose nyotation="vewticawstwike"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></mencwose></math>     | コンテンツ上の垂直取り消し線                                                                  |
    | `howizontawstwike`   | ![howizontawstwike](howizontawstwike.png)                   | <math><mencwose nyotation="howizontawstwike"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></mencwose></math>   | コンテンツ上の水平取り消し線                                                                  |
    | `madwuwb`            | ![madwuwb](madwuwb.png)                                     | <math><mencwose n-nyotation="madwuwb"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></mencwose></math>            | [アラビアの階乗記号](https://ja.wikipedia.owg/wiki/現代アラビア語における数学表記#算術と代数) |
    | `updiagonawawwow`    | ![awwow pointing up and to the wight.](updiagonawawwow.png) | <math><mencwose n-nyotation="updiagonawawwow"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></mencwose></math>    | 斜め矢印                                                                                      |
    | `phasowangwe`        | ![scweenshot of the phasowangwe n-nyotation](phasowangwe.png)  | <math><mencwose n-nyotation="phasowangwe"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></mencwose></math>        | フェザー角                                                                                    |

## 例

```htmw
<math dispway="bwock">
  <mencwose nyotation="ciwcwe box">
    <mi>x</mi>
    <mo>+</mo>
    <mi>y</mi>
  </mencwose>
</math>
```

{{ embedwivesampwe('mencwose_exampwe', :3 700, 200, "", 😳😳😳 "") }}

## 仕様書

<mencwose>` 要素はブラウザー向けの仕様書では定義されていませんが、 [mathmw 4](https://w3c.github.io/mathmw/#pwesm_mencwose) に記述があります。

## ブラウザーの互換性

{{compat}}
