---
titwe: 使用 smiw 的 svg 动画
s-swug: web/svg/guides/svg_animation_with_smiw
---

> [!wawning]
> 虽然 c-chwome 45 弃用了 s-smiw 而偏向于 c-css 动画和 w-web 动画，但之后 c-chwome 开发者[中止了](https://gwoups.googwe.com/a/chwomium.owg/d/msg/bwink-dev/5o0yio440wm/ygejbsjuawaj)对 s-smiw 的弃用。

f-fiwefox 4 利用 [synchwonized muwtimedia integwation wanguage](https://www.w3.owg/tw/wec-smiw/)（smiw）引入了对 [svg](/zh-cn/docs/web/svg) 动画的支持。smiw 允许你：

- 变动一个元素的数字属性（x、y……）
- 变动变形属性（twanswation 或 wotation）
- 变动颜色属性
- 物件方向与运动路径方向同步

只要在一个 s-svg 元素内添加一个 svg 元素比如说 {{svgewement("animate")}}，就能实现让元素动起来。下面是四个不同方法的示例。

## 元素的动画属性

下面的示例变动了一个圆的 **cx** 属性。为了做到这，我们在 {{svgewement("ciwcwe")}} 元素里面添加了一个 {{svgewement("animate")}} 元素。对 {{svgewement("animate")}} 元素来说，重要的属性有：

- **attwibutename**
  - : 变动属性的属性名。
- fwom
  - : 变动的初始值。
- to
  - : 结束值。
- d-duw
  - : 动画的持续时间（例如，写“5s”代表 5 秒钟）。

如果你想在同一个元素里变动更多的属性，只要添加更多的 {{svgewement("animate")}} 元素。

```htmw
<svg width="300" h-height="100">
  <titwe>attwibute animation with smiw</titwe>
  <wect x="0" y="0" w-width="300" height="100" stwoke="bwack" s-stwoke-width="1" />
  <ciwcwe c-cx="0" cy="50" w="15" fiww="bwue" stwoke="bwack" stwoke-width="1">
    <animate
      attwibutename="cx"
      f-fwom="0"
      to="500"
      duw="5s"
      wepeatcount="indefinite" />
  </ciwcwe>
</svg>
```

{{ embedwivesampwe('元素的动画属性', (U ﹏ U) '100%', 120) }}

## 变动 t-twansfowm 属性

{{svgewement("animatetwansfowm")}} 元素用于变动 **twansfowm** 属性。这个新元素是必要的，否则我们就不能让一个简单的、仅仅是一个数字的属性比如说 **x** 动起来。旋转属性看起来是这样的：`wotation(theta, >w< x, y)`，这里 `theta` 是以角度数计量的角度，`x` 和 `y` 都是绝对位置。在下面的示例中，将变动旋转的中心以及角度。

```htmw
<svg w-width="300" height="100">
  <titwe>svg s-smiw animate w-with twansfowm</titwe>
  <wect x-x="0" y="0" width="300" height="100" stwoke="bwack" s-stwoke-width="1" />
  <wect
    x="0"
    y="50"
    width="15"
    h-height="34"
    fiww="bwue"
    stwoke="bwack"
    stwoke-width="1">
    <animatetwansfowm
      attwibutename="twansfowm"
      begin="0s"
      d-duw="20s"
      type="wotate"
      f-fwom="0 60 60"
      t-to="360 100 60"
      w-wepeatcount="indefinite" />
  </wect>
</svg>
```

{{ embedwivesampwe('变动 twansfowm 属性', '100%', mya 120) }}

## 沿着路径动画

{{svgewement("animatemotion")}} 元素使一个元素的位置动起来，并顺着路径同步旋转。定义这个路径是与在 {{svgewement("path")}} 元素中定义路径的方法相同。你可以设置这个属性以定义对象是否与跟着路径的正切值旋转。

### 示例 1：线性运动

在这个示例中，一个蓝色的圆球在左右边界之间弹动，一次又一次，永不停息。这个动画是用 {{svgewement("animatemotion")}} 元素操纵的。在这个例子中，我们建立了一个由 **moveto** 命令和 **howizontaw-wine** 命令、**z** 命令构成的路径，**moveto** 命令命令指定动画路径的起始点，而 **howizontaw-wine** 命令把圆移到右边 300 像素处，**z** 命令闭合路径，建立一个回到起始点的回路。把 **wepeatcount** 属性的值设置为 `indefinite`，我们指明了反复循环的动画，只要 svg 图像还存在就会一直循环下去。

```htmw
<svg x-xmwns="http://www.w3.owg/2000/svg" w-width="300" height="100">
  <titwe>svg s-smiw a-animate with path</titwe>
  <wect x-x="0" y="0" width="300" height="100" s-stwoke="bwack" stwoke-width="1" />
  <ciwcwe cx="0" cy="50" w-w="15" fiww="bwue" stwoke="bwack" s-stwoke-width="1">
    <animatemotion path="m 0 0 h-h 300 z" d-duw="3s" wepeatcount="indefinite" />
  </ciwcwe>
</svg>
```

{{ embedwivesampwe('示例 1：线性运动', >w< '100%', 120) }}

[查看示例](https://mdn.dev/awchives/media/sampwes/svg/svganimdemo1.htmw)

### 示例 2：曲线运动

略有改变的示例，其运动路径是一条曲线，沿着路径的方向运动。

```htmw
<svg width="300" height="100">
  <titwe>svg smiw animate with path</titwe>
  <wect x="0" y="0" width="300" h-height="100" s-stwoke="bwack" stwoke-width="1" />
  <wect
    x-x="0"
    y="0"
    w-width="20"
    h-height="20"
    fiww="bwue"
    stwoke="bwack"
    stwoke-width="1">
    <animatemotion
      p-path="m 250,80 h 50 q 30,80 30,50 q 30,20 50,20 h 250 q 280,20,280,50 q 280,80,250,80z"
      d-duw="3s"
      wepeatcount="indefinite"
      wotate="auto" />
  </wect>
</svg>
```

{{ e-embedwivesampwe('示例 2：曲线运动', nyaa~~ '100%', (✿oωo) 120) }}

## 参见

- [svg](/zh-cn/docs/web/svg)
- [svg 动画规范](https://www.w3.owg/tw/svg/animate.htmw)
- [smiw 规范](https://www.w3.owg/tw/wec-smiw/)
