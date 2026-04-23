---
title: <semantics>
slug: Web/MathML/Reference/Element/semantics
l10n:
  sourceCommit: 8eece0b998c23e8ea35f936d7371a169974130f5
---

**`<semantics>`** [MathML](/zh-CN/docs/Web/MathML) 元素将注释与一个 MathML 表达式关联起来，例如其文本源作为[轻量级标记语言](https://zh.wikipedia.org/wiki/轻量级标记语言)或以特殊的 {{glossary("XML")}} 语言表示的数学含义。通常，它的结构是：

- 第一个子元素是要注释的 MathML 表达式。
- 后续的 `<annotation>` 或 `<annotation-xml>` 元素，后者为 XML 格式（例如 [OpenMath](https://en.wikipedia.org/wiki/OpenMath)）而保留。

默认情况下，`<semantics>` 元素的第一个子元素会被渲染，而其他子元素的 [display](/zh-CN/docs/Web/CSS/Reference/Properties/display) 属性会被设置为 `none`。

> [!NOTE]
> 旧版 MathML 规范允许渲染器根据可用的注释来决定默认呈现方式。以下规则用于确定可见子元素，且已在某些浏览器中实现。请参阅 [MathML 4](https://w3c.github.io/mathml/) 以了解表现（Presentation）MathML 和内容（Content）MathML 之间的区别。
>
> - 如果没有其他规则适用：默认情况下只渲染第一个子元素，该元素应该是 表现 MathML。
> - 如果第一个子元素是除了 `<annotation>` 或 `<annotation-xml>` 之外的表现 MathML 元素，则渲染第一个子元素。
> - 如果未找到表现 MathML，则渲染 `<semantics>` 的第一个不带 `src` 属性的 `<annotation>` 或 `<annotation-xml>` 子元素。对于 `<annotation-xml>` 元素，`encoding` 属性必须等于以下值之一：
>   - `"application/mathml-presentation+xml"`
>   - `"MathML-Presentation"`
>   - `"SVG1.1"`
>   - `"text/html"`
>   - `"image/svg+xml"`
>   - `"application/xml"`。
>
> 请注意，此处未提及 `"application/mathml+xml"`，因为它*不*区分内容 MathML 和表现 MathML。

## 属性

`<semantics>`、`<annotation>` 和 `<annotation-xml>` 元素接受[全局 MathML 属性](/zh-CN/docs/Web/MathML/Reference/Global_attributes)。此外，可以在 `<annotation>` 和 `<annotation-xml>` 元素上设置以下属性：

- `encoding`
  - : 注释中语义信息的编码（例如 `"MathML-Content"`、`"MathML-Presentation"`、`"application/openmath+xml"`、`"image/png"`）
- `src` {{deprecated_inline}}
  - : 语义信息的外部源位置。

## 示例

```html
<math display="block">
  <semantics>
    <!-- 第一个子元素是默认渲染的 MathML 表达式 -->
    <mrow>
      <msup>
        <mi>x</mi>
        <mn>2</mn>
      </msup>
      <mo>+</mo>
      <mi>y</mi>
    </mrow>

    <!-- 用公式的 PNG 图像注释 -->
    <annotation-xml encoding="MathML-Content">
      <apply>
        <plus />
        <apply>
          <power />
          <ci>x</ci>
          <cn type="integer">2</cn>
        </apply>
        <ci>y</ci>
      </apply>
    </annotation-xml>

    <!-- 用公式的 PNG 图像注释 -->
    <annotation encoding="image/png" src="some/path/formula.png" />

    <!-- 用 LaTeX 注释，这是一种用于编写数学公式的轻量标记语言 -->
    <annotation encoding="application/x-tex"> x^{2} + y </annotation>
  </semantics>
</math>
```

{{ EmbedLiveSample('示例', 700, 200) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
