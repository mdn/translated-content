---
title: pointer-events
slug: Web/SVG/Attribute/pointer-events
---

{{SVGRef}}

pointer-events 属性是一个展示属性，用于定义元素是否或何时可能是鼠标事件的目标元素。

**Note:** 作为一个展示属性， {{cssxref('pointer-events')}} 可以被当做 CSS 属性使用。

## 示例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 20 10" xmlns="http://www.w3.org/2000/svg">
  <!--
  Circle 元素将始终拦截鼠标事件。
  为了改变较底部的的 rect 元素的颜色，
  你需要点击 rect 元素在圆外的部分
  -->
  <rect x="0" y="0" height="10" width="10" fill="black" />
  <circle cx="5" cy="5" r="4" fill="white" pointer-events="visiblePoint" />

  <!--
  下面的 circle 元素将永远不会获取到鼠标事件，
  当你点击 circle 元素或者点击 rect 元素时，
  rect 元素都会改变颜色
  -->
  <rect x="10" y="0" height="10" width="10" fill="black" />
  <circle cx="15" cy="5" r="4" fill="white" pointer-events="none" />
</svg>
```

```js
window.addEventListener("mouseup", (e) => {
  // 在 #000000 和 #FFFFFF 之间随机选取一个颜色
  const color = Math.round(Math.random() * 0xffffff);

  // 将 color 变量的值按照 CSS 的要求进行格式化
  const fill = "#" + color.toString(16).padStart(6, "0");

  // 将 color 变量设置的颜色应用到实际点击的元素上
  e.target.style.fill = fill;
});
```

{{EmbedLiveSample('示例', '100%', 150)}}

作为一个展示属性，他可以被很多元素使用，但和它紧密相关的只有下面的 23 个元素：{{SVGElement('a')}}, {{SVGElement('circle')}}, {{SVGElement('clipPath')}}, {{SVGElement('defs')}}, {{SVGElement('ellipse')}}, {{SVGElement('foreignObject')}}, {{SVGElement('g')}}, {{SVGElement('image')}}, {{SVGElement('line')}}, {{SVGElement('marker')}}, {{SVGElement('mask')}}, {{SVGElement('path')}}, {{SVGElement('pattern')}}, {{SVGElement('polygon')}}, {{SVGElement('polyline')}}, {{SVGElement('rect')}}, {{SVGElement('svg')}}, {{SVGElement('switch')}}, {{SVGElement('symbol')}}, {{SVGElement('text')}}, {{SVGElement('textPath')}}, {{SVGElement('tspan')}}, {{SVGElement('use')}}

## 用法

| 值         | `bounding-box` \| `visiblePainted` \| `visibleFill` \| `visibleStroke` \| `visible` \| `painted` \| `fill` \| `stroke` \| `all` \| `none` |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| 默认值     | `visiblePainted`                                                                                                                          |
| 是否可动画 | Yes                                                                                                                                       |

_为了详细了解每个可能的值，请参考 CSS 文档 {{cssxref('pointer-events')}}._

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
