---
title: <sup>：上标元素
slug: Web/HTML/Reference/Elements/sup
l10n:
  sourceCommit: 77a67438592286ded44a82bfe6b8a64e8cdf44a9
---

[HTML](/zh-CN/docs/Web/HTML) **`<sup>` 元素**定义仅出于排版目的而显示为上标的行内文本。上标通常以较小的文本在高出基线的位置呈现。

{{InteractiveExample("HTML Demo: &lt;sup&gt;", "tabbed-shorter")}}

```html interactive-example
<p>
  The <em>Pythagorean theorem</em> is often expressed as the following equation:
</p>

<p>
  <var>a<sup>2</sup></var> + <var>b<sup>2</sup></var> = <var>c<sup>2</sup></var>
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

该元素仅包含[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)。

## 使用说明

`<sup>` 元素应该只用于排版目的，也就是改变文本的位置以符合印刷习惯或标准，而不能仅用于呈现或外观的目的。

例如，要为企业或产品的[字体商标](https://en.wikipedia.org/wiki/Wordmark)添加抬高基线的样式，应该使用 CSS（很可能是 {{cssxref("vertical-align")}}）而不是 `<sup>`。可以使用 `vertical-align: super` 或者 `vertical-align: 50%` 来将基线上移 50%。

适当的 `<sup>` 用例包括（但不限于）：

- 显示指数，例如“x<sup>3</sup>”。对于这种情况，尤其是在更复杂的情况下，考虑使用 [MathML](/zh-CN/docs/Web/MathML)。请参阅下面的[示例](#示例)中的[指数](#指数)。
- 显示[上标字母](https://en.wikipedia.org/wiki/Superior_letter)，在某些语言中用于呈现某些缩写词。例如，在法语中，单词“mademoiselle”可以缩写为“M<sup>lle</sup>”；这是可接受的用例。请参阅示例[上标字母](#上标字母)。
- 表示序数，例如用“4<sup>th</sup>”来代替“fourth”。请参阅示例[序数](#序数)。

## 示例

### 指数

指数，或者说是数字的幂，是上标文本最常见的用法之一。例如：

```html
<p>
  物理学中最常见的方程之一：<var>E</var>=<var>m</var><var>c</var><sup>2</sup>。
</p>
```

#### 结果

{{EmbedLiveSample("指数", 650, 80)}}

### 上标字母

从技术上讲，上标字母与上标不是同一回事。但是，在 HTML 中使用 `<sup>` 来呈现上标字母是很常见的。一种最常见的上标字母用法是在法语中呈现某些缩写词：

```html
<p>Robert a présenté son rapport à M<sup>lle</sup> Bernard.</p>
```

#### 结果

{{EmbedLiveSample("上标字母", 650, 80)}}

### 序数

序数，例如英语中的“fourth”或西班牙语中的“quinto”，可以使用数字和以上标形式呈现的特定于语言的文本缩写来表示：

```html
<p>序数词“fifth”在不同语言中的缩写如下：</p>
<ul>
  <li>英语：5<sup>th</sup></li>
  <li>法语：5<sup>ème</sup></li>
</ul>
```

#### 结果

{{EmbedLiveSample("序数", 650, 160)}}

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
        >、<a
          href="/zh-CN/docs/Web/HTML/Guides/Content_categories#短语内容"
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
      <td>不允许，开始标签和结束标签都不能省略。</td>
    </tr>
    <tr>
      <th scope="row">允许的父元素</th>
      <td>
        任何接受<a
          href="/zh-CN/docs/Web/HTML/Guides/Content_categories#短语内容"
          >短语内容</a
        >的元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隐式 ARIA 角色</th>
      <td>
        <code
          ><a href="/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles#具有_html_等效元素的结构角色">superscript</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允许的 ARIA 角色</th>
      <td>任意</td>
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

- HTML {{HTMLElement("sub")}} 元素会产生下标。注意，你不能同时使用它们，你需要使用 [MathML](/zh-CN/docs/Web/MathML) 来同时产生化学符号旁边的下标和上标，代表它的序号和核子数。
- MathML 元素：[`<msub>`](/zh-CN/docs/Web/MathML/Reference/Element/msub)、[`<msup>`](/zh-CN/docs/Web/MathML/Reference/Element/msup) 和 [`<msubsup>`](/zh-CN/docs/Web/MathML/Reference/Element/msubsup)。
- CSS {{cssxref("vertical-align")}} 属性。
