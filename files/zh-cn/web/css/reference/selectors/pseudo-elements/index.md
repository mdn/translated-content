---
title: 伪元素
slug: Web/CSS/Reference/Selectors/Pseudo-elements
---

伪元素是一个附加至选择器末的关键词，允许你对被选择元素的特定部分修改样式。下例中的 {{CSSxRef("::first-line")}} 伪元素可改变段落首行文字的样式。

```css
/* 每一个 <p> 元素的第一行。 */
p::first-line {
  color: blue;
  text-transform: uppercase;
}
```

> [!NOTE]
> 与伪元素比较，{{cssxref("pseudo-classes")}} 能够根据*状态*改变元素样式。

## 语法

```css
selector::pseudo-element {
  property: value;
}
```

一个选择器中只能使用一个伪元素。伪元素必须紧跟在语句中的简单选择器/基础选择器之后。

> [!NOTE]
> 按照规范，应该使用双冒号（`::`）而不是单个冒号（`:`），以便区分伪类和伪元素。但是，由于旧版本的 W3C 规范并未对此进行特别区分，因此目前绝大多数的浏览器都同时支持使用这两种方式来表示伪元素。

## 字母索引

一组 CSS 规范定义的伪元素包括以下内容：

A

- {{CSSxRef("::after")}}

B

- {{CSSxRef("::backdrop")}}
- {{CSSxRef("::before")}}

C

- {{CSSxRef("::cue")}}
- {{CSSxRef("::cue-region")}}

F

- {{CSSxRef("::first-letter")}}
- {{CSSxRef("::first-line")}}
- {{CSSxRef("::file-selector-button")}}

G

- {{CSSxRef("::grammar-error")}} {{Experimental_Inline}}

M

- {{CSSxRef("::marker")}}

P

- {{CSSxRef("::part", "::part()")}}
- {{CSSxRef("::placeholder")}}

S

- {{CSSxRef("::selection")}}
- {{CSSxRef("::slotted", "::slotted()")}}
- {{CSSxRef("::spelling-error")}} {{Experimental_Inline}}

T

- {{CSSxRef("::target-text")}} {{Experimental_Inline}}

## 规范

{{Specifications}}

## 浏览器兼容性

<table class="standard-table">
  <tbody>
    <tr>
      <th>浏览器</th>
      <th>最低版本</th>
      <th>支持的伪元素</th>
    </tr>
    <tr>
      <td rowspan="2">Internet Explorer</td>
      <td>8.0</td>
      <td><code>:pseudo-element</code></td>
    </tr>
    <tr>
      <td>9.0</td>
      <td><code>:pseudo-element ::pseudo-element</code></td>
    </tr>
    <tr>
      <td rowspan="2">Firefox (Gecko)</td>
      <td>1.0 (1.0)</td>
      <td><code>:pseudo-element</code></td>
    </tr>
    <tr>
      <td>1.0 (1.5)</td>
      <td><code>:pseudo-element ::pseudo-element</code></td>
    </tr>
    <tr>
      <td rowspan="2">Opera</td>
      <td>4.0</td>
      <td><code>:pseudo-element</code></td>
    </tr>
    <tr>
      <td>7.0</td>
      <td><code>:pseudo-element ::pseudo-element</code></td>
    </tr>
    <tr>
      <td>Safari (WebKit)</td>
      <td>1.0 (85)</td>
      <td><code>:pseudo-element ::pseudo-element</code></td>
    </tr>
  </tbody>
</table>

## 参见

- [伪类](/zh-CN/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
