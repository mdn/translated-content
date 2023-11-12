---
title: SVG 和 CSS
slug: Web/SVG/Tutorial/SVG_and_CSS
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/Tools_for_SVG") }}

本节将演示如何将 CSS 应用到 [SVG](/zh-CN/docs/Web/SVG) 中。

你将创建一个简单的演示代码并在支持 SVG 的浏览器中运行。

## 示例

建立一个 SVG 文件 `doc8.svg`。复制下面所有内容：

```html
<svg
  width="600px"
  height="600px"
  viewBox="-300 -300 600 600"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <link rel="stylesheet" href="style8.css" type="text/css" />

  <title>SVG demonstration</title>
  <desc>Mozilla CSS Getting Started - SVG demonstration</desc>

  <defs>
    <radialGradient
      id="fade"
      cx="0"
      cy="0"
      r="200"
      gradientUnits="userSpaceOnUse">
      <stop id="fade-stop-1" offset="33%" />
      <stop id="fade-stop-2" offset="95%" />
    </radialGradient>
  </defs>

  <text id="heading" x="-280" y="-270">SVG demonstration</text>
  <text id="caption" x="-280" y="-250">
    Move your mouse pointer over the flower.
  </text>

  <g id="flower">
    <circle
      id="overlay"
      cx="0"
      cy="0"
      r="200"
      stroke="none"
      fill="url(#fade)" />

    <g id="outer-petals">
      <g class="quadrant">
        <g class="segment">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(18)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(36)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(54)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(72)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
      </g>

      <g class="quadrant">
        <g class="segment" transform="rotate(90)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(108)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(126)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(144)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(162)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
      </g>

      <g class="quadrant">
        <g class="segment" transform="rotate(180)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(198)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(216)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(234)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(252)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
      </g>

      <g class="quadrant">
        <g class="segment" transform="rotate(270)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(288)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(306)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(324)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(342)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
      </g>
    </g>

    <g id="inner-petals" transform="rotate(9) scale(0.33)">
      <g class="quadrant">
        <g class="segment">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(18)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(36)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(54)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(72)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
      </g>

      <g class="quadrant">
        <g class="segment" transform="rotate(90)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(108)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(126)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(144)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(162)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
      </g>

      <g class="quadrant">
        <g class="segment" transform="rotate(180)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(198)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(216)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(234)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(252)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
      </g>

      <g class="quadrant">
        <g class="segment" transform="rotate(270)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(288)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(306)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(324)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
        <g class="segment" transform="rotate(342)">
          <path class="segment-fill" d="M0,0 v-200 a40,40 0 0,0 -62,10 z" />
          <path class="segment-edge" d="M0,-200 a40,40 0 0,0 -62,10" />
        </g>
      </g>
    </g>
  </g>
</svg>
```

创建一个 CSS 文件，`style8.css`。复制下面所有内容：

```css
/*** SVG demonstration ***/

/* page */
svg {
  background-color: beige;
}

#heading {
  font-size: 24px;
  font-weight: bold;
}

#caption {
  font-size: 12px;
}

/* flower */
#flower:hover {
  cursor: crosshair;
}

/* gradient */
#fade-stop-1 {
  stop-color: blue;
}

#fade-stop-2 {
  stop-color: white;
}

/* petals */
.segment-fill {
  fill: var(--segment-fill-fill);
  stroke: var(--segment-fill-stroke);
  stroke-width: var(--segment-fill-stroke-width);
}

.segment-fill:hover {
  fill: var(--segment-fill-fill-hover);
  stroke: var(--segment-fill-stroke-hover);
}

.segment-edge {
  fill: var(--segment-edge-fill);
  stroke: var(--segment-edge-stroke);
  stroke-width: var(--segment-edge-stroke-width);
}

.segment-edge:hover {
  stroke: var(--segment-edge-stroke-hover);
}

/* outer petals */
#outer-petals {
  opacity: 0.75;
  --segment-fill-fill: azure;
  --segment-fill-stroke: lightsteelblue;
  --segment-fill-stroke-width: 1;
  --segment-edge-fill: none;
  --segment-edge-stroke: deepskyblue;
  --segment-edge-stroke-width: 3;
  --segment-fill-fill-hover: plum;
  --segment-fill-stroke-hover: none;
  --segment-edge-stroke-hover: slateblue;
}

/*
 Non-standard way of styling elements referenced via <use> elements,
 supported by some older browsers
*/
#outer-petals .segment-fill {
  fill: azure;
  stroke: lightsteelblue;
  stroke-width: 1;
}

#outer-petals .segment-edge {
  fill: none;
  stroke: deepskyblue;
  stroke-width: 3;
}

#outer-petals .segment:hover > .segment-fill {
  fill: plum;
  stroke: none;
}

#outer-petals .segment:hover > .segment-edge {
  stroke: slateblue;
}

/* inner petals */
#inner-petals {
  --segment-fill-fill: yellow;
  --segment-fill-stroke: yellow;
  --segment-fill-stroke-width: 1;
  --segment-edge-fill: none;
  --segment-edge-stroke: yellowgreen;
  --segment-edge-stroke-width: 9;
  --segment-fill-fill-hover: darkseagreen;
  --segment-fill-stroke-hover: none;
  --segment-edge-stroke-hover: green;
}

/*
 Non-standard way of styling elements referenced via <use> elements,
 supported by some older browsers
*/
#inner-petals .segment-fill {
  fill: yellow;
  stroke: yellow;
  stroke-width: 1;
}

#inner-petals .segment-edge {
  fill: none;
  stroke: yellowgreen;
  stroke-width: 9;
}

#inner-petals .segment:hover > .segment-fill {
  fill: darkseagreen;
  stroke: none;
}

#inner-petals .segment:hover > .segment-edge {
  stroke: green;
}
```

在支持 SVG 的浏览器中打开上面的文档。将鼠标移到图上。

### 结果

{{EmbedLiveSample("示例", "660", "660")}}

解释：

- 这个 SVG 文档使用常见连接方法引入样式表。
- SVG 有自己一套 CSS 属性和对应的值。其中一些和 HTML 使用的 CSS 属性相似。

| 修改样式表使得当鼠标指针移到任何一个内层花瓣上时所有内层花瓣都变为粉色，但不改变外层花瓣的效果。 |
| ------------------------------------------------------------------------------------------------ |

{{ PreviousNext("Web/SVG/Tutorial/Tools_for_SVG") }}

## 接下来？

在这个演示中，你的支持 SVG 的浏览器已经知道如何显示 SVG 元素。样式表只是在某些方面修改了显示方式。这对 HTML 文档来说也是如此。但是你可以将 CSS 用于通用的 XML 文档，在这些文档中，没有预定义的方式来显示元素。下一页演示了这一点：[XML 介绍](/zh-CN/docs/Web/XML/XML_introduction)
