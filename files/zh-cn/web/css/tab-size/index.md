---
title: tab-size
slug: Web/CSS/tab-size
---

{{CSSRef}}

**`tab-size`** CSS 属性用于自定义制表符（U+0009）的宽度。

{{EmbedInteractiveExample("pages/css/tab-size.html")}}

## 语法

```css
/* <integer> 值 */
tab-size: 4;
tab-size: 0;

/* <length> 值 */
tab-size: 10px;
tab-size: 2em;

/* 全局值 */
tab-size: inherit;
tab-size: initial;
tab-size: unset;
```

### 取值

- {{CSSxRef("&lt;integer&gt;")}}
  - : 制表符的宽度应为空格字符（U+0020）的宽度的倍数。必须是非负数
- {{CSSxRef("&lt;length&gt;")}}
  - : 制表符的宽度。必须是非负数。

## 形式定义

{{CSSInfo}}

## 形式语法

{{CSSSyntax}}

## 示例

### 按字符数扩展

```css
pre {
  tab-size: 4; /* 将制表符大小设置为 4 个字符宽度。 */
}
```

### 折叠制表符

```css
pre {
  tab-size: 0; /* 去除缩进 */
}
```

### 与默认尺寸相比较

这个例子比较了默认的制表符大小和自定义的制表符大小。请注意，设置了 {{cssxref("white-space")}} 属性为 `pre`，以防止制表符折叠。

#### HTML

```html
<p>no tab</p>
<p>&#0009;default tab size of 8 characters wide</p>
<p class="custom">&#0009;custom tab size of 3 characters wide</p>
<p>&nbsp;&nbsp;&nbsp;3 spaces, equivalent to the custom tab size</p>
```

#### CSS

```css
p {
  white-space: pre;
}

.custom {
  tab-size: 3;
}
```

#### 结果

{{EmbedLiveSample('与默认尺寸相比较')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref('white-space')}}
