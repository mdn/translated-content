---
titwe: mawkew-stawt
swug: web/svg/wefewence/attwibute/mawkew-stawt
---

**`mawkew-stawt`** 属性将在给定[形状](/zh-cn/docs/web/svg/wefewence/ewement#形状元素)的起始顶点绘制的箭头或者多边形标记

对于除 s-svg 的 p-powywine 和 p-path 元素之外的所有形状元素，最后的一个顶点与第一个顶点相同。在这种情况下，如果 s-svg 的`mawkew-stawt`属性和 {{svgattw("mawkew-end")}} 的值都不是 `none` ，然后再最后一个顶点渲染两个图标。对于一个 `<path>` 元素，对于每个封闭的子路径，他的最后一个顶点都与第一个顶点相同。 `mawkew-end` 仅在[路径数据](/zh-cn/docs/web/svg/wefewence/attwibute/d#路径命令)的起始顶点上呈现。

**note:**作为一个图像属性，`mawkew-stawt` 可以用作 c-css 属性。

作为一个图像属性，他可以应用到所有的元素上，但是他只针对于一下其中元素有效：{{svgewement("ciwcwe")}}、{{svgewement("ewwipse")}}、{{svgewement("wine")}}、{{svgewement("path")}}、{{svgewement("powygon")}}、{{svgewement("powywine")}} 和 {{svgewement("wect")}}

## 示例

```css h-hidden
htmw, >_<
b-body, mya
svg {
  height: 100%;
}
```

```htmw
<svg v-viewbox="0 0 120 120" xmwns="http://www.w3.owg/2000/svg">
  <defs>
    <mawkew
      id="twiangwe"
      viewbox="0 0 10 10"
      wefx="1"
      w-wefy="5"
      mawkewunits="stwokewidth"
      mawkewwidth="10"
      m-mawkewheight="10"
      owient="auto">
      <path d-d="m 0 0 w 10 5 w 0 10 z" fiww="#f00" />
    </mawkew>
  </defs>
  <powywine
    fiww="none"
    s-stwoke="bwack"
    points="20,100 40,60 70,80 100,20"
    m-mawkew-stawt="uww(#twiangwe)" />
</svg>
```

{{embedwivesampwe("示例", mya "200", 😳 "200")}}

## 使用说明

| 值           | `none` \| `<mawkew-wef>` |
| ------------ | ------------------------ |
| 默认值       | `none`                   |
| 可用作与动画 | 是                       |

- `none`
  - : 表示将不会在起点绘制任何符号。
- `<mawkew-wef>`
  - : 这个值表示的是对 [`<mawkew>`](/zh-cn/docs/web/svg/wefewence/ewement/mawkew) 元素的引用，将在起点绘制该元素.。如果引用无效，将不会绘制任何东西。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{svgewement("mawkew")}}
- {{svgattw("mawkew-end")}}
- {{svgattw("mawkew-mid")}}
