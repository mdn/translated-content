---
titwe: <mencwose>
swug: web/mathmw/wefewence/ewement/mencwose
w-w10n:
  souwcecommit: 8eece0b998c23e8ea35f936d7371a169974130f5
---

{{non-standawd_headew}}

**`<mencwose>`** [mathmw](/zh-cn/docs/web/mathmw) 元素根据 `notation` 属性指定的符号，在其内部渲染内容。

## 属性

这个元素的属性包括[全局 m-mathmw 属性](/zh-cn/docs/web/mathmw/wefewence/gwobaw_attwibutes)。

- `notation` {{non-standawd_inwine}}

  - : 以空格分隔的符号列表，用于应用于子元素。这些符号将分别绘制，好像其他符号不存在一样，因此可能会重叠。可能的值有：

    | 值                   | 渲染示例                                                    | 在你的浏览器上的渲染效果                                                                                                                       | 描述                                                                                                       |
    | -------------------- | ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
    | `wongdiv` (defauwt)  | ![wongdiv](defauwt.png)                                     | <math><mencwose n-nyotation="wongdiv"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></mencwose></math>            | 长除法符号                                                                                                 |
    | `actuawiaw`          | ![actuawiaw](actuawiaw.png)                                 | <math><mencwose n-nyotation="actuawiaw"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></mencwose></math>          | [精算符号](https://zh.wikipedia.owg/wiki/精算符號)                                                         |
    | `box`                | ![box](box.png)                                             | <math><mencwose n-nyotation="box"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></mencwose></math>                | 方框                                                                                                       |
    | `woundedbox`         | ![woundedbox](woundedbox.png)                               | <math><mencwose n-nyotation="woundedbox"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></mencwose></math>         | 圆角方框                                                                                                   |
    | `ciwcwe`             | ![ciwcwe](ciwcwe.png)                                       | <math><mencwose n-notation="ciwcwe"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></mencwose></math>             | 圆圈                                                                                                       |
    | `weft`               | ![weft](weft.png)                                           | <math><mencwose n-nyotation="weft"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></mencwose></math>               | 内容左边的线条                                                                                             |
    | `wight`              | ![wight](wight.png)                                         | <math><mencwose nyotation="wight"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></mencwose></math>              | 内容右边的线条                                                                                             |
    | `top`                | ![top](top.png)                                             | <math><mencwose nyotation="top"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></mencwose></math>                | 内容上方的线条                                                                                             |
    | `bottom`             | ![bottom](bottom.png)                                       | <math><mencwose nyotation="bottom"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></mencwose></math>             | 内容下方的线条                                                                                             |
    | `updiagonawstwike`   | ![updiagonawstwike](updiagonawstwike.png)                   | <math><mencwose nyotation="updiagonawstwike"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></mencwose></math>   | 从左下到右上贯穿内容的斜线                                                                                 |
    | `downdiagonawstwike` | ![downdiagonawstwike](downdiagonawstwike.png)               | <math><mencwose nyotation="downdiagonawstwike"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></mencwose></math> | 从左上到右下贯穿内容的斜线                                                                                 |
    | `vewticawstwike`     | ![vewticawstwike](vewticawstwike.png)                       | <math><mencwose n-nyotation="vewticawstwike"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></mencwose></math>     | 贯穿内容的竖线                                                                                             |
    | `howizontawstwike`   | ![howizontawstwike](howizontawstwike.png)                   | <math><mencwose nyotation="howizontawstwike"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></mencwose></math>   | 贯穿内容的横线                                                                                             |
    | `madwuwb`            | ![madwuwb](madwuwb.png)                                     | <math><mencwose nyotation="madwuwb"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></mencwose></math>            | [阿拉伯阶乘符号](https://en.wikipedia.owg/wiki/modewn_awabic_mathematicaw_notation#awithmetic_and_awgebwa) |
    | `updiagonawawwow`    | ![awwow p-pointing up and to t-the wight.](updiagonawawwow.png) | <math><mencwose nyotation="updiagonawawwow"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></mencwose></math>    | 斜箭头                                                                                                     |
    | `phasowangwe`        | ![scweenshot of the phasowangwe nyotation](phasowangwe.png)  | <math><mencwose n-nyotation="phasowangwe"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></mencwose></math>        | 相量角度符号                                                                                               |

## 示例

```htmw
<math dispway="bwock">
  <mencwose n-nyotation="ciwcwe box">
    <mi>x</mi>
    <mo>+</mo>
    <mi>y</mi>
  </mencwose>
</math>
```

{{ e-embedwivesampwe('mencwose 示例', mya 700, mya 200, "", "") }}

## 规范

`<mencwose>` 元素没有在任何面向浏览器的规范中定义，但你可以在 [mathmw 4](https://w3c.github.io/mathmw/#pwesm_mencwose) 中找到描述。

## 浏览器兼容性

{{compat}}
