---
title: tab-size
slug: Web/CSS/tab-size
---

{{CSSRef}}{{SeeCompatTable}}

CSS 属性** `tab-size`** 用于自定义制表符 (`U+0009`) 的宽度。

```css
/* <integer> values */
tab-size: 4;
tab-size: 0;

/* <length> values */
tab-size: 10px;
tab-size: 2em;

/* Global values */
tab-size: inherit;
tab-size: initial;
tab-size: unset;
```

{{CSSInfo}}

## 语法

### 值

- {{CSSxRef("&lt;integer&gt;")}}
  - : 制表符对应的空格数。必须为非负值。
- {{CSSxRef("&lt;length&gt;")}}
  - : 制表符的宽度。必须为非负值。

### 正式语法

{{CSSSyntax}}

## 示例

```css
pre {
  tab-size: 4; /* 将制表符宽度设为 4 个空格 */
}
```

```css
pre {
  tab-size: 0; /* 移除缩进效果 */
}
```

```css
pre {
  tab-size: 2; /* 将制表符宽度设为 2 个空格 */
}
```

### 在线演示

本示例比较了默认制表符宽度和自定义制表符宽度。注意 {{cssxref("white-space")}} 被设置为 `pre` 以防止制表符收起。

#### HTML

```html
<p>no tab</p>
<p>&#0009;default tab size of 8 spaces</p>
<p class="custom">&#0009;custom tab  size of 3 spaces</p>
<p>&nbsp;&nbsp;&nbsp;3 spaces, equivalent to the custom tab size</p>
```

#### CSS

```css
p {
  white-space: pre;
}

.custom {
  -moz-tab-size: 3;
  tab-size: 3;
}
```

#### 结果

{{EmbedLiveSample('Live_sample')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Controlling size of a tab character (U+0009)](https://lists.w3.org/Archives/Public/www-style/2008Dec/0009.html)，Anne van Kesteren 发送给 CSSWG 的一封电子邮件。
