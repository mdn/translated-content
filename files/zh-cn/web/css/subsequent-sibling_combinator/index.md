---
title: 后续兄弟选择器
slug: Web/CSS/Subsequent-sibling_combinator
---

{{CSSRef}}

**后续兄弟选择器**（`~`）将两个选择器分开，并匹配第二个选择器的*所有迭代元素*，位置无须紧邻于第一个元素，只须有相同的父级{{Glossary("element", "元素")}}。

```css
/* 在任意图像后的兄弟段落 */
img ~ p {
  color: red;
}
```

## 语法

```css
former_element ~ target_element { style properties }
```

## 示例

### CSS

```css
p ~ span {
  color: red;
}
```

### HTML

```html
<span>This is not red.</span>
<p>Here is a paragraph.</p>
<code>Here is some code.</code>
<span>And here is a red span!</span>
<span>And this is a red span!</span>
<code>More code…</code>
<div>How are you?</div>
<p>Whatever it may be, keep smiling.</p>
<h1>Dream big</h1>
<span>And yet again this is a red span!</span>
```

### 结果

{{EmbedLiveSample("示例", "auto", 300)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [接续兄弟选择器](/zh-CN/docs/Web/CSS/Next-sibling_combinator)
