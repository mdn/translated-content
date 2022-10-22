---
title: alignment-baseline
slug: Web/SVG/Attribute/alignment-baseline
---

« [SVG 属性参考主页](/zh-CN/SVG/Attribute)

`alignment-baseline`属性指定了一个对象如何相对于它的父元素对齐。这个属性指定了该元素的基线对齐到相应的父元素的基线。举个例子，允许罗马文字中的字母表基线在字体大小发生变化时保持一致。它的默认值是 baseline，与该`alignment-baseline`属性的计算值同名。

作为一个外观属性，它还可以直接作为 CSS 样式表内部的属性使用。请阅读{{ cssxref("alignment-baseline","CSS alignment-baseline") }}以了解更多信息。

## 用法

| 类别     | 外观属性                                                                                                                                                                         |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 值       | **auto** \| baseline \| before-edge \| text-before-edge \| middle \| central \| after-edge \| text-after-edge \| ideographic \| alphabetic \| hanging \| mathematical \| inherit |
| 可变性   | Yes                                                                                                                                                                              |
| 规范文档 | [SVG 1.1 (2nd Edition)](http://www.w3.org/TR/SVG11/text.html#AlignmentBaselineProperty)                                                                                          |

## 示例

```plain
<?xml version="1.0"?>
<svg width="300" height="120" viewBox="0 0 300 120"
     xmlns="http://www.w3.org/2000/svg" version="1.1">

    <!-- Materialisation of anchors -->
    <path d="M60,10 L60,110
             M30,10 L300,10
             M30,65 L300,65
             M30,110 L300,110
             " stroke="grey" />

    <!-- Anchors in action -->
    <text alignment-baseline="hanging"
          x="60" y="10">A hanging</text>

    <text alignment-baseline="middle"
          x="60" y="65">A middle</text>

    <text alignment-baseline="baseline"
          x="60" y="110">A baseline</text>

    <!-- Materialisation of anchors -->
    <circle cx="60" cy="10" r="3" fill="red" />
    <circle cx="60" cy="65" r="3" fill="red" />
    <circle cx="60" cy="110" r="3" fill="red" />

<style><![CDATA[
text{
    font: bold 36px Verdana, Helvetica, Arial, sans-serif;
}
]]></style>
</svg>
```

## 元素

下列元素使用`alignment-baseline 属性：`

- {{ SVGElement("tspan") }}
- {{ SVGElement("tref") }}
- {{ SVGElement("altGlyph") }}
- {{ SVGElement("textPath") }}

如果对象要在别的元素中对齐（比如在{{ SVGElement("text") }}元素中），请阅读{{ SVGAttr("dominant-baseline") }}。

## 规范

{{Specifications}}

## 参见

- {{ cssxref("alignment-baseline","CSS alignment-baseline") }}
