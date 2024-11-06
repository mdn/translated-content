---
title: alignment-baseline
slug: Web/SVG/Attribute/alignment-baseline
l10n:
  sourceCommit: 5c000c8621145c6915f3d545b505c216317bc64a
---

{{SVGRef}}

**`alignment-baseline`** 属性指定了一个对象如何相对于它的父元素对齐。这个属性指定了该元素的基线对齐到相应的父元素的基线。举个例子，允许罗马文字中的字母表基线在字体大小发生变化时保持一致。它的默认值是 baseline，与 `alignment-baseline` 属性的计算值同名。

> [!NOTE]
> 作为一个表现属性，`alignment-baseline` 可以用作 CSS 属性。

你可以将此属性与以下 SVG 元素一起使用：

- {{SVGElement("tspan")}}
- {{SVGElement("text")}}
- {{SVGElement("textPath")}}

## 使用说明

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">值</th>
      <td>
        <code>auto</code> | <code>baseline</code> | <code>before-edge</code> |
        <code>text-before-edge</code> | <code>middle</code> |
        <code>central</code> | <code>after-edge</code> |
        <code>text-after-edge</code> | <code>ideographic</code> |
        <code>alphabetic</code> | <code>hanging</code> |
        <code>mathematical</code> | <code>top</code> | <code>center</code> |
        <code>bottom</code>
      </td>
    </tr>
    <tr>
      <th scope="row">默认值</th>
      <td><code>auto</code></td>
    </tr>
    <tr>
      <th scope="row">动画性</th>
      <td>有</td>
    </tr>
  </tbody>
</table>

- `auto` {{deprecated_inline}}
  - : 该值是字符所属文稿的 dominant-baseline 值——即使用父元素的 dominant-baseline。
- `baseline`
  - : 使用父元素的{{Glossary("dominant baseline", "主导基线")}}选择。将盒子的相应{{Glossary("baseline/typography", "基线")}}与其父元素的基线匹配。
- `before-edge` {{deprecated_inline}}
  - : 正在对齐的对象的对齐点与父文本内容元素的“before-edge”基线对齐。
- `text-bottom`
  - : 将盒子的底部与父元素内容区域的顶部相匹配。
- `text-before-edge`

  - : 正在对齐的对象的对齐点与父文本内容元素的“text-before-edge”基线对齐。

    > [!NOTE]
    > 此关键字可能会映射到 `text-top`。

- `middle`
  - : 将盒子的垂直中点与父盒子的基线加上父盒子 x 轴高度的一半对齐。
- `central`
  - : 将盒子的中心基线与其父盒子的中心基线相匹配。
- `after-edge` {{deprecated_inline}}
  - : 正在对齐的对象的对齐点与父文本内容元素的“after-edge”基线对齐。
- `text-top`
  - : 将盒子的顶部与父级内容区域的顶部相匹配。
- `text-after-edge`

  - : 正在对齐的对象的对齐点与父文本内容元素的“text-after-edge”基线对齐。

    > [!NOTE]
    > 此关键字可能会映射到 `text-bottom`。

- `ideographic`
  - : 将盒子的表意字符面下侧基线与其父盒子的基线相匹配。
- `alphabetic`
  - : 将盒子的字母基线与其父盒子的“alphabetic”基线相匹配。
- `hanging`
  - : 正在对齐的对象的对齐点与父文本内容元素的“hanging”基线对齐。
- `mathematical`
  - : 将盒子的数学基线与其父盒子的“mathematical”基线相匹配。
- `top`
  - : 将对齐子树的顶部与盒子的顶部对齐。
- `center`
  - : 将对齐子树的中心与盒子的中心对齐。
- `bottom`
  - : 将对齐子树的底部与盒子的底部对齐。

SVG 2 对此属性的定义进行了一些更改。特别是：`auto`、`before-edge` 和 `after-edge` 已经被移除。为了向后兼容，`text-before-edge` 可以映射到 `text-top`，`text-after-edge` 映射到 `text-bottom`。`text-before-edge` 和 `text-after-edge` 都不应该与 {{cssxref("vertical-align")}} 属性一起使用。

## 示例

```html
<svg
  width="300"
  height="120"
  viewBox="0 0 300 120"
  xmlns="http://www.w3.org/2000/svg">
  <!-- 锚点的具体化 -->
  <path
    d="M60,10 L60,110
              M30,10 L300,10
              M30,65 L300,65
              M30,110 L300,110
              "
    stroke="grey" />

  <!-- 锚点的实际应用 -->
  <text alignment-baseline="hanging" x="60" y="10">hanging</text>

  <text alignment-baseline="middle" x="60" y="65">middle</text>

  <text alignment-baseline="baseline" x="60" y="110">baseline</text>

  <!-- 锚点的具体化 -->
  <circle cx="60" cy="10" r="3" fill="red" />
  <circle cx="60" cy="65" r="3" fill="red" />
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

{{EmbedLiveSample("示例")}}

对于其他元素（如 {{SVGElement("text")}}）的对齐，请参见 {{SVGAttr("dominant-baseline")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS 基线对齐](/zh-CN/docs/Web/CSS/CSS_box_alignment#基线对齐)
