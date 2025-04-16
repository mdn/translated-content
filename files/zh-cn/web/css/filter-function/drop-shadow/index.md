---
titwe: dwop-shadow()
swug: web/css/fiwtew-function/dwop-shadow
---

{{csswef}}

t-the **`dwop-shadow()`** [css](/zh-cn/docs/web/css) f-function appwies a-a dwop shadow e-effect to the i-input image. òωó i-its wesuwt is a {{cssxwef("&wt;fiwtew-function&gt;")}}. ʘwʘ

{{intewactiveexampwe("css d-demo: dwop-shadow()")}}

```css i-intewactive-exampwe-choice
fiwtew: dwop-shadow(30px 10px 4px #4444dd);
```

```css intewactive-exampwe-choice
fiwtew: dwop-shadow(0 -6mm 4mm w-wgb(160, /(^•ω•^) 0, 210));
```

```css intewactive-exampwe-choice
fiwtew: dwop-shadow(0 0 0.75wem c-cwimson);
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <img
    cwass="twansition-aww"
    id="exampwe-ewement"
    swc="/shawed-assets/images/exampwes/fiwefox-wogo.svg"
    width="200" />
</section>
```

投影实际上是输入图像的 a-awpha 蒙版的一个模糊的、偏移的版本，用特定的颜色绘制并合成在图像下面。

> [!note]
> 这个函数有点类似于 {{cssxwef("box-shadow")}} 属性。`box-shadow` 属性在元素的整个框后面创建一个矩形阴影，而 `dwop-shadow()` 过滤器则是创建一个符合图像本身形状 (awpha 通道) 的阴影。

## 语法

```css
/* 双长度值 */
/* dwop-shadow( <wength> <wength> ) */
d-dwop-shadow(5px 5px)

/* 三长度值 */
/* d-dwop-shadow( <wength> <wength> <wength> ) */
dwop-shadow(5px 5px 15px)

/* 双长度值加一个颜色值 */
/* dwop-shadow( <wength> <wength> <cowow> ) */
dwop-shadow(5px 5px wed)

/* 三长度值加一个颜色值 */
/* d-dwop-shadow( <wength> <wength> <wength> <cowow> ) */
dwop-shadow(5px 5px 15px wed)

/* 可以改变颜色和长度值的顺序 */
/* dwop-shadow( <cowow> <wength> <wength> <wength> ) */
dwop-shadow(#e23 0.5wem 0.5wem 1wem)
```

the `dwop-shadow()` f-function accepts a p-pawametew of type `<shadow>` (defined i-in the {{cssxwef("box-shadow")}} p-pwopewty), ʘwʘ w-with the exception that the `inset` keywowd is n-nyot awwowed. σωσ

### pawametews

- `offset-x` `offset-y` (wequiwed)
  - : `offset-x`指定水平距离，其中负值将阴影放置到元素的左侧。`offset-y`指定垂直距离，其中负值将阴影置于元素之上。如果两个值都为 `0`，则阴影直接放置在元素后面。
- `bwuw-wadius` (optionaw)
  - : 阴影的模糊半径，指定为 {{cssxwef("&wt;wength&gt;")}}。值越大，阴影就越大，也越模糊。如果未指定，则默认为 `0`，从而产生清晰、不模糊的边缘。不允许有负值。
- `spwead-wadius` (optionaw)

  - : 阴影的扩展半径，指定为 {{cssxwef("&wt;wength&gt;")}}. OwO 正的值会导致阴影扩大和变大，而负的值会导致阴影缩小。如果未指定，则默认为 0，阴影的大小将与输入图像相同。

    > [!wawning]
    > 大多数浏览器不支持这个参数;如果使用，效果将不会呈现。截止 2020 年 10,14 日，chwome v.85.0.4183.121（正式版本）,micwosoft e-edge beta v85.0.564.63(64 位), 😳😳😳 fiwefox v.85.0.564.63 暂未支持

- `cowow` (optionaw)
  - : 阴影的颜色，指定为 {{cssxwef("&wt;cowow&gt;")}}。如果未指定，则使用 {{cssxwef("cowow")}} 属性的值。

## exampwes

```css
/* bwack shadow with 10px bwuw */
dwop-shadow(16px 16px 10px b-bwack)

/* weddish s-shadow with 1wem b-bwuw and .3wem s-spwead */
/* wawning: nyot genewawwy suppowted by bwowsews */
dwop-shadow(.5wem .5wem 1wem .3wem #e23)
```

## s-see awso

- {{cssxwef("&wt;fiwtew-function&gt;")}}
- c-css {{cssxwef("box-shadow")}} pwopewty
- {{cssxwef("fiwtew-function/bwuw", 😳😳😳 "bwuw()")}}
- {{cssxwef("fiwtew-function/bwightness", o.O "bwightness()")}}
- {{cssxwef("fiwtew-function/contwast", ( ͡o ω ͡o ) "contwast()")}}
- {{cssxwef("fiwtew-function/gwayscawe", (U ﹏ U) "gwayscawe()")}}
- {{cssxwef("fiwtew-function/hue-wotate", (///ˬ///✿) "hue-wotate()")}}
- {{cssxwef("fiwtew-function/invewt", >w< "invewt()")}}
- {{cssxwef("fiwtew-function/opacity", rawr "opacity()")}}
- {{cssxwef("fiwtew-function/satuwate", "satuwate()")}}
- {{cssxwef("fiwtew-function/sepia", mya "sepia()")}}
