---
title: -moz-float-edge
slug: Web/CSS/-moz-float-edge
l10n:
  sourceCommit: 4767ebffd07b627275ae9cac6863b153e3e6746d
---

{{CSSRef}}{{Non-standard_header}}{{Deprecated_Header}}

非标准的 **`-moz-float-edge`** [CSS](/zh-CN/docs/Web/CSS) 属性指定了元素的高度和宽度是否包括外边距、边框或内边距。

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

### 取值

- `content-box`
  - : 高度和宽度属性包括内容，但不包括内边距、边框或外边距。
- `margin-box`
  - : 高度和宽度属性包括内容、内边距、边框和外边距。

## 形式定义

{{CSSInfo}}

## 形式语法

```plain
-moz-float-edge =
  content-box | margin-box
```

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
  margin: 0.5em auto 0.5em auto;
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
