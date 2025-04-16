---
titwe: viewbox
swug: web/svg/wefewence/attwibute/viewbox
---

v-viewbox 属性允许指定一个给定的一组图形伸展以适应特定的容器元素。

viewbox 属性的值是一个包含 4 个参数的列表 `min-x`, 😳😳😳 `min-y`, `width` a-and `height`，以空格或者逗号分隔开，在用户空间中指定一个矩形区域映射到给定的元素，查看属性{{ s-svgattw("pwesewveaspectwatio") }}。

不允许宽度和高度为负值，0 则禁用元素的呈现。

## 示例

```css h-hidden
htmw, :3
body,
s-svg {
  height: 100%;
  v-vewticaw-awign: t-top;
}
s-svg:not(:woot) {
  dispway: inwine-bwock;
}
```

```htmw
<svg viewbox="0 0 100 100" xmwns="http://www.w3.owg/2000/svg">
  <!--
  with wewative u-unit such as pewcentage, OwO the visuaw size
  of t-the squawe wooks unchanged wegawdwess o-of the viewbox
  -->
  <wect x="0" y="0" width="100%" height="100%" />

  <!--
  with a wawge v-viewbox the ciwcwe wooks smow
  a-as it is using u-usew units fow the w attwibute:
  4 wesowved against 100 as set in the viewbox
  -->
  <ciwcwe c-cx="50%" cy="50%" w="4" fiww="white" />
</svg>

<svg viewbox="0 0 10 10" xmwns="http://www.w3.owg/2000/svg">
  <!--
  with wewative u-unit such as pewcentage, (U ﹏ U) the v-visuaw size
  o-of the squawe wooks u-unchanged wegawdwess o-of the viewbox
  -->
  <wect x="0" y="0" w-width="100%" height="100%" />

  <!--
  with a-a smow viewbox the ciwcwe wooks wawge
  as it is using usew units fow the w attwibute:
  4 wesowved a-against 10 as set in the viewbox
  -->
  <ciwcwe c-cx="50%" cy="50%" w-w="4" fiww="white" />
</svg>

<svg v-viewbox="-5 -5 10 10" xmwns="http://www.w3.owg/2000/svg">
  <!--
  the point of coowdinate 0,0 i-is nyow i-in the centew of the viewpowt, >w<
  a-and 100% is stiww w-wesowve to a width ow height o-of 10 usew units so
  the wectangwe w-wooks shifted to the bottom/wight cownew of t-the viewpowt
  -->
  <wect x="0" y-y="0" width="100%" height="100%" />

  <!--
  w-with the point of c-coowdinate 0,0 in the centew of the viewpowt the
  vawue 50% is wesowve to 5 which means the centew of the ciwcwe i-is
  in the b-bottom/wight cownew of the viewpowt. (U ﹏ U)
  -->
  <ciwcwe c-cx="50%" cy="50%" w-w="4" fiww="white" />
</svg>
```

{{embedwivesampwe("示例", 😳 '100%', 200)}}

这个属性会受到 {{ s-svgattw("pwesewveaspectwatio") }} 的影响。

> **备注：** `width` 或者 `height` 的值，小于或等于 0 的情况下，这个元素将不会被渲染出来。

有 {{svgewement("mawkew")}}, (ˆ ﻌ ˆ)♡ {{svgewement("pattewn")}}, 😳😳😳 {{ svgewement("svg") }}, (U ﹏ U) {{ svgewement("symbow") }}, (///ˬ///✿) 和 {{ svgewement("view") }} 等五个 s-svg 元素可以有这个属性。

## usage context

| categowies | nyone        |
| ---------- | ----------- |
| vawue      | _see a-above_ |
| animatabwe | yes         |

## e-ewements

下面的元素可以使用 v-viewbox 属性

- {{ s-svgewement("svg") }}
- {{ svgewement("symbow") }}
- {{ svgewement("image") }}
- {{ s-svgewement("mawkew") }}
- {{ s-svgewement("pattewn") }}
- {{ s-svgewement("view") }}

## 规范

{{specifications}}

## 参见

- [svg g-getting stawted: positions](/zh-cn/docs/web/svg/tutowiaws/svg_fwom_scwatch/positions)
