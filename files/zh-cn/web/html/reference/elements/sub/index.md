---
title: <sub>：下标元素
slug: Web/HTML/Reference/Elements/sub
l10n:
  sourceCommit: fdd3ac5598c3ddceb71e59949b003936ae99f647
---

[HTML](/zh-CN/docs/Web/HTML) **`<sub>`** 元素用于指定应显示为下标的行内文本，这完全是出于排版的原因。下标通常使用较小的文本以较低的基线显示。

{{InteractiveExample("HTML Demo: &lt;sub&gt;", "tabbed-shorter")}}

```html interactive-example
<p>
  Almost every developer's favorite molecule is
  C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>, also known as
  "caffeine."
</p>
```

```css interactive-example
p {
  font:
    1rem "Fira Sans",
    sans-serif;
}
```

## 属性

这个元素仅仅包含[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)。

## 使用说明

`<sub>` 元素只能用于排版原因，即改变文本的位置以符合排版惯例或标准，而不能仅用于呈现或外观目的。

例如，如果一家公司的 [wordmark](https://en.wikipedia.org/wiki/Wordmark) 中使用了改变的基线，那么使用 `<sub>` 对公司名称进行样式调整就不合适；相反，应该使用 CSS。例如，可以使用 {{cssxref("vertical-align")}} 属性，并声明 `vertical-align: sub`；或使用 `vertical-align: -25%`，以更精确地控制基线移动。

`<sub>` 的适当用例包括（但不限于）：

- 标记脚注编号。参见[脚注编号](#脚注编号)以了解示例。
- 标注数学变量编号中的下标（当然，也可以考虑使用 [MathML](/zh-CN/docs/Web/MathML) 公式来标注）。参见[变量下标](#变量下标)。
- 表示化学式中某一元素的原子数（如每个开发者最好的朋友，C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>，也称为“咖啡因”）。参见[化学式](#化学式)。

## 示例

### 脚注编号

传统上，脚注使用渲染为下标的数字标注。这是 `<sub>` 的一种常见用例：

```html
<p>
  根据 Nakamura、Johnson 和 Mason 的计算<sub>1</sub>，这将导致两个粒子完全湮灭。
</p>
```

#### 结果

{{EmbedLiveSample("脚注编号", 650, 80)}}

### 变量下标

在数学中，与同一概念（如沿同一坐标轴的距离）相关的变量族使用相同的变量名和后面的下标来表示。例如：

```html-nolint
<p>
  沿 X 轴的水平坐标的位置表示为 <var>x<sub>1</sub></var> … <var>x<sub>n</sub></var>。
</p>
```

#### 结果

{{EmbedLiveSample("变量下标", 650, 80)}}

### 化学式

在书写化学式（如 H<sub>2</sub>0）时，所述分子中特定元素的原子数用下标数字表示；就水而言，下标“2”表示分子中有两个氢原子。

另外一个示例：

```html
<p>
  几乎每个开发人员最喜欢的分子都是
  C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>，它通常被称为“咖啡因”。
</p>
```

#### 结果

{{EmbedLiveSample("化学式", 650, 120)}}

## 技术概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories"
          >内容分类</a
        >
      </th>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#流式内容"
          >流式内容</a
        >、<a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#短语内容"
          >短语内容</a
        >、可感知内容。
      </td>
    </tr>
    <tr>
      <th scope="row">允许的内容</th>
      <td>
        <a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#短语内容"
          >短语内容</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">标签省略</th>
      <td>不允许，开始标签和结束标签都是必需的。</td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>
        任何接受<a href="/zh-CN/docs/Web/HTML/Guides/Content_categories#短语内容"
          >短语内容</a
        >的元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隐式 ARIA 角色</th>
      <td>
        <code
          ><a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles#有_html_等价形式的结构角色">subscript</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允许的 ARIA 角色</th>
      <td>任何</td>
    </tr>
    <tr>
      <th scope="row">DOM 接口</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTMLElement("sup")}} HTML 元素，用于生成上标。请注意，不能同时使用 `sup` 和 `sub`：需要使用 [MathML](/zh-CN/docs/Web/MathML)，在元素化学符号旁边的下标上方生成上标，代表元素的原子序数和核序数。
- [`<msub>`](/zh-CN/docs/Web/MathML/Reference/Element/msub)、[`<msup>`](/zh-CN/docs/Web/MathML/Reference/Element/msup) 和 [`<msubsup>`](/zh-CN/docs/Web/MathML/Reference/Element/msubsup) MathML 元素。
- CSS {{cssxref("vertical-align")}} 属性
