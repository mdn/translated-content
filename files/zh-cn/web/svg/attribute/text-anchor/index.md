---
title: text-anchor
slug: Web/SVG/Attribute/text-anchor
---

{{SVGRef}}

文本锚点属性被用来描述该文本与所给点的对齐方式（开头、中间、末尾对齐）。

文本锚点属性被运用到每个 {{ SVGElement("text") }} 元素的独立文本块上。每个文本块有一个初始的当前文本位置，一个来源于 {{ SVGElement("text") }} 元素的 {{ SVGAttr("x") }} 和 {{ SVGAttr("y") }} 属性在当前上下文的用户坐标系中所对应的点，任何一个 {{ SVGElement("tspan") }}、{{SVGElement("tref") }} 元素的 {{ SVGAttr("x") }} 或者 {{ SVGAttr("y") }} 属性值都明确指向了文本块里第一个被呈现的字符，或者是决定了 {{ SVGElement("textPath") }} 元素的当前文本位置的初始值。

作为一个描述性的属性，它也可以直接用作 CSS 样式的性质（style 属性的值）。

## 使用方法

| 类别     | 呈现属性                              |
| -------- | ------------------------------------- |
| 值       | start \| middle \| end \| **inherit** |
| 可动画化 | 是                                    |

- start
  - : 所呈现的字符对齐方式为：文本字符串的开始位置即当前文本的初始位置。对于拉丁文在其通常文本排列方向，这就相当于左对齐。对于脚本像希伯来语和阿拉伯语这类自右向左排列的文字来说，这相当于右对齐。对于亚洲某些垂直走向的文本来说，这相当于向上对齐。
- middle
  - : 所呈现的字符对齐方式为：文本字符串的中间位置即当前文本的初始位置。(对于按路径排列的文本，会从概念上首先将其文本排列在一条直线上，确定该串中点位置后，然再将该文本映射到路径上，并且将之前确定的中点放置在当前文本的位置上 )
- end
  - : 所呈现的字符对齐方式为：文本字符串的末尾即当前文本的初始位置。对于拉丁语通常的文字走向来说，这就相当于右对齐。对于像希伯来语和阿拉伯语这类将文字自右向左排列的脚本来说，这相当于左对齐。

## 示例

```html
<?xml version="1.0"?>
<svg
  width="120"
  height="120"
  viewBox="0 0 120 120"
  xmlns="http://www.w3.org/2000/svg"
  version="1.1">
  <!-- Materialisation of anchors -->
  <path
    d="M60,15 L60,110 M30,40 L90,40 M30,75 L90,75 M30,110 L90,110"
    stroke="grey" />

  <!-- Anchors in action -->
  <text text-anchor="start" x="60" y="40">A</text>

  <text text-anchor="middle" x="60" y="75">A</text>

  <text text-anchor="end" x="60" y="110">A</text>

  <!-- Materialisation of anchors -->
  <circle cx="60" cy="40" r="3" fill="red" />
  <circle cx="60" cy="75" r="3" fill="red" />
  <circle cx="60" cy="110" r="3" fill="red" />

  <style>
    <![CDATA[
    text{
        font: bold 36px Verdana, Helvetica, Arial, sans-serif;
    }
    ]]>
  </style>
</svg>
```

**Live sample**

{{ EmbedLiveSample('示例','120','120') }}

## 元素

以下元素可以运用文本锚点属性：

- [Text content elements](/zh-CN/SVG/Element#Text_content_elements) »

## 规范

{{Specifications}}
