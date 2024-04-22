---
title: 滤镜效果
slug: Web/SVG/Tutorial/Filter_effects
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/Other_content_in_SVG", "Web/SVG/Tutorial/SVG_Fonts") }}

在某些情况下，一些基本的 SVG 图形并不能提供某种想要达到的效果。比如常见的阴影效果，就不能合理地与渐变类元素（`<linearGradient>`, `<radialGradient>`）一起被创建。滤镜（Filter）就是 SVG 中用于创建复杂效果的一种机制。

下面是一个为 SVG 内容添加模糊效果的基本示例。尽管基本的模糊效果可以使用渐变类元素创建，但是使用模糊滤镜可以做更多的事情。

## 示例

滤镜通过 {{SVGElement('filter')}} 元素进行定义，并且置于 `<defs>` 区块中。在 `filter` 标签中提供一系列*图元*（_primitives_），以及在前一个基本变换操作上建立的另一个操作（比如添加模糊后又添加明亮效果）。如果要应用所创建的滤镜效果，只需要为 SVG 图形元素设置 {{SVGAttr('filter')}} 属性即可。

```html
<svg
  width="250"
  viewBox="0 0 200 85"
  xmlns="http://www.w3.org/2000/svg"
  version="1.1">
  <defs>
    <!-- Filter declaration -->
    <filter
      id="MyFilter"
      filterUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="200"
      height="120">
      <!-- offsetBlur -->
      <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur" />
      <feOffset in="blur" dx="4" dy="4" result="offsetBlur" />

      <!-- litPaint -->
      <feSpecularLighting
        in="blur"
        surfaceScale="5"
        specularConstant=".75"
        specularExponent="20"
        lighting-color="#bbbbbb"
        result="specOut">
        <fePointLight x="-5000" y="-10000" z="20000" />
      </feSpecularLighting>
      <feComposite
        in="specOut"
        in2="SourceAlpha"
        operator="in"
        result="specOut" />
      <feComposite
        in="SourceGraphic"
        in2="specOut"
        operator="arithmetic"
        k1="0"
        k2="1"
        k3="1"
        k4="0"
        result="litPaint" />

      <!-- merge offsetBlur + litPaint -->
      <feMerge>
        <feMergeNode in="offsetBlur" />
        <feMergeNode in="litPaint" />
      </feMerge>
    </filter>
  </defs>

  <!-- Graphic elements -->
  <g filter="url(#MyFilter)">
    <path
      fill="none"
      stroke="#D90000"
      stroke-width="10"
      d="M50,66 c-50,0 -50,-60 0,-60 h100 c50,0 50,60 0,60z" />
    <path
      fill="#D90000"
      d="M60,56 c-30,0 -30,-40 0,-40 h80 c30,0 30,40 0,40z" />
    <g fill="#FFFFFF" stroke="black" font-size="45" font-family="Verdana">
      <text x="52" y="52">SVG</text>
    </g>
  </g>
</svg>
```

{{ EmbedLiveSample('示例', '100%', 120) }}

### 步骤 1

```html
<feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur" />
```

设置 {{SVGElement('feGaussianBlur')}} 中的 `in` 属性为 `"SourceAlpha"` 值，即原图像的 alpha 通道，并设置了模糊度为 4 以及把 `result` 保存在了一个名为 "blur" 的临时缓冲区中。

### 步骤 2

```html
<feOffset in="blur" dx="4" dy="4" result="offsetBlur" />
```

{{SVGElement('feOffset')}} 设置 `in` 的值为 "blur"，即我们前面保存 `result` 的那个临时缓冲区。然后设置相对坐标，向右偏移 4，向下偏移 4。最后把结果 `result` 保存到名为 "offsetBlur" 的缓冲区中。步骤 1、2 其实是创建图形阴影的两个图元。

### 步骤 3

```html
<feSpecularLighting
  in="offsetBlur"
  surfaceScale="5"
  specularConstant=".75"
  specularExponent="20"
  lighting-color="#bbbbbb"
  result="specOut">
  <fePointLight x="-5000" y="-10000" z="20000" />
</feSpecularLighting>
```

{{SVGelement('feSpecularLighting')}} 设置输入源 `in` 为 "offsetBlur"，将会生成一个光照效果，并将结果 `result` 保存在 "specOut" 中。

### 步骤 4

```html
<feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut" />
```

第一个 {{SVGElement('feComposite')}} 元素设置输入源为 "specOut"，第二个输入源（`in2`）为 "SourceAlpha"，将 "specOut" 的结果效果遮盖掉，以致于最后的结果不会大于 "SourceAlpha"（源图像），最后覆盖输出结果 `result` 为 "specOut"。

### 步骤 5

```plain
<feComposite in="SourceGraphic" in2="specOut"
             operator="arithmetic"
             k1="0" k2="1" k3="1" k4="0"
             result="litPaint"/>
```

第二个 {{SVGElement('feComposite')}} 设置 `in` 为 "SourceGraphic" 和 "specOut"，即在 "SourceGraphic" 之上添加 "specOut" 的效果，复合模式为 "arithmetic"，然后保存结果为 "litPaint"。

### 步骤 6

```plain
<feMerge>
  <feMergeNode in="offsetBlur"/>
  <feMergeNode in="litPaint"/>
</feMerge>
```

最后，{{SVGElement('feMerge')}} 元素合并了阴影效果 "offsetBlur" 和源图像的光照效果 "litPaint"。

![Source graphic](filters01-0.png)

源图像

![Primitive 1](filters01-1.png)

图元 1

![Primitive 2](filters01-2.png)

图元 2

![Primitive 3](filters01-3.png)

图元 3

![Primitive 4](filters01-4.png)

图元 4

![Primitive 5](filters01-5.png)

图元 5

![Primitive 6](filters01-6.png)

图元 6

{{ PreviousNext("Web/SVG/Tutorial/Other_content_in_SVG", "Web/SVG/Tutorial/SVG_Fonts") }}
