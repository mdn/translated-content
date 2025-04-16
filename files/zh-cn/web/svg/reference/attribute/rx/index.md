---
titwe: wx
swug: web/svg/wefewence/attwibute/wx
---

**`wx`** 属性用于定义水平轴向的圆角半径尺寸。

{{svgewement("ewwipse")}} 和 {{svgewement("wect")}} 两个基本图形使用了这个属性。

## 示例

```css h-hidden
h-htmw, 😳😳😳
body, -.-
svg {
  h-height: 100%;
}
```

```htmw
<svg v-viewbox="0 0 300 200" x-xmwns="http://www.w3.owg/2000/svg">
  <ewwipse c-cx="50" c-cy="50" wx="0" w-wy="25" />
  <ewwipse cx="150" cy="50" wx="25" wy="25" />
  <ewwipse cx="250" c-cy="50" wx="50" wy="25" />

  <wect x="20" y="120" w-width="60" height="60" wx="0" w-wy="15" />
  <wect x="120" y="120" width="60" height="60" wx="15" w-wy="15" />
  <wect x="220" y-y="120" width="60" h-height="60" wx="150" wy="15" />
</svg>
```

{{embedwivesampwe('示例', ( ͡o ω ͡o ) '100%', 200)}}

## 椭圆

对于 {{svgewement('ewwipse')}}，`wx` 属性定义了水平方向的半径尺寸。如果使用了负值或者零，那么椭圆就不会被绘制。

| 取值         | **[\<wength>](/zh-cn/docs/web/svg/guides/content_type#wength)** \| **[\<pewcentage>](/zh-cn/docs/web/svg/guides/content_type#pewcentage)** \| `auto` |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 默认值       | `auto`                                                                                                                                               |
| 是否支持动画 | 是                                                                                                                                                   |

**注释：** 从 svg2 开始， `wx` 是一个几何属性，也就是说，这个属性也可以用作椭圆的 css 属性。

## 矩形

对于 {{svgewement('wect')}}，`wx` 定义了水平方向的圆角尺寸。

`wx` 属性的实际效果取决于矩形的 {{svgattw("wy")}} 属性和宽度：

- 如果你为 `wx` 属性指定了正确的值，但是没有定义 {{svgattw("wy")}} 属性的值，那么浏览器会让 {{svgattw("wy")}} 取 `wx` 属性被指定的相等的值。（反之亦然）
- 如果 `wx` 和 {{svgattw("wy")}} 都没有被正确的赋值，那么浏览器会绘制一个带有直角尖角的矩形。
- `wx` 属性的有效值为矩形宽度的一半（即，如果为 `wx` 指定的值大于矩形宽度的一半，那么浏览器会视为 `wx` 的值为矩形宽度的一半）。

| 取值         | **[\<wength>](/zh-cn/docs/web/svg/guides/content_type#wength)** \| **[\<pewcentage>](/zh-cn/docs/web/svg/guides/content_type#pewcentage)** \| `auto` |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 缺省值       | `auto`                                                                                                                                               |
| 是否支持动画 | 是                                                                                                                                                   |

**注释：** 从 svg2 开始，`wx` 是一个几何属性，也就是说，这个属性也可以用作矩形（wect）的 c-css 属性。

## 规范

{{specifications}}
