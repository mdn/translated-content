---
title: -moz-float-edge
slug: Web/CSS/Reference/Properties/-moz-float-edge
l10n:
  sourceCommit: 886f2641ae90a70858c5e7d0d20959c70ee44d9d
---

{{Non-standard_header}}{{Deprecated_Header}}

[CSS](/zh-CN/docs/Web/CSS) 非标准属性 **`-moz-float-edge`** 指定了元素的高度和宽度是否包括外边距、边框或内边距。

## 语法

```css
/* 关键字值 */
-moz-float-edge: content-box;
-moz-float-edge: margin-box;

/* 全局值 */
-moz-float-edge: inherit;
-moz-float-edge: initial;
-moz-float-edge: unset;
```

### 值

- `content-box`
  - : 高度和宽度属性包括内容，但不包括内边距、边框或外边距。
- `margin-box`
  - : 高度和宽度属性包括内容、内边距、边框和外边距。

## 形式定义

{{CSSInfo}}

## 形式语法

{{CSSSyntaxRaw(`-moz-float-edge = content-box | margin-box`)}}

## 示例

### HTML

```html
<div class="box">
  <p>这是一段文字，这是一段文字，这是一段文字，这是一段文字。</p>
</div>
```

### CSS

```css
.box {
  display: block;
  height: 5px;
  margin: 0.5em auto;
  color: gray;
  -moz-float-edge: margin-box;
  box-sizing: border-box;
}
```

### 结果

{{ EmbedLiveSample('示例') }}

## 规范

不属于任何规范。

## 浏览器兼容性

{{Compat}}

## 参见

- [Firefox bug 432891](https://bugzil.la/432891)
