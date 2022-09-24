---
title: user-select
slug: Web/CSS/user-select
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) 属性 **`user-select`** 控制用户能否选中文本。除了文本框内，它对被载入为 {{Glossary("Chrome", "chrome")}} 的内容没有影响。

```css
/* Keyword values */
user-select: none;
user-select: auto;
user-select: text;
user-select: contain;
user-select: all;

/* Global values */
user-select: inherit;
user-select: initial;
user-select: unset;

/* Mozilla-specific values */
-moz-user-select: none;
-moz-user-select: text;
-moz-user-select: all;

/* WebKit-specific values */
-webkit-user-select: none;
-webkit-user-select: text;
-webkit-user-select: all; /* Doesn't work in Safari; use only
                             "none" or "text", or else it will
                             allow typing in the <html> container */

/* Microsoft-specific values */
-ms-user-select: none;
-ms-user-select: text;
-ms-user-select: element;
```

{{cssinfo}}

> **备注：** `user-select` 不是继承属性，即使默认的属性值 `auto` 的表现基本上以继承为主，似乎是继承属性。甚至，WebKit/基于 Chromium 的浏览器在实现此属性时*将其作为继承属性*，但这和有关规范是相悖的，且会带来一些问题。目前，Chromium 暂时选择[修复将其作为继承属性所带来的问题](https://chromium.googlesource.com/chromium/src/+/b01af0b296ecb855aac95c4ed335d188e6eac2de)，使最终表现符合规范。

## 语法

- `none`
  - : 元素及其子元素的文本不可选中。请注意这个{{domxref("Selection")}} 对象可以包含这些元素。从 Firefox 21 开始， `none` 表现的像 `-moz-none`，因此可以使用 `-moz-user-select: text` 在子元素上重新启用选择。

- `auto`

  - : `auto` 的具体取值取决于一系列条件，具体如下：

    - 在 `::before` 和 `::after` 伪元素上，采用的属性值是 `none`
    - 如果元素是可编辑元素，则采用的属性值是 `contain`
    - 否则，如果此元素的父元素的 `user-select` 采用的属性值为 `all`，则该元素采用的属性值也为 `all`
    - 否则，如果此元素的父元素的 `user-select` 采用的属性值为 `none`，则该元素采用的属性值也为 `none`
    - 否则，采用的属性值为 `text`

- `text`
  - : 用户可以选择文本。
- `all`
  - : 在一个 HTML 编辑器中，当双击子元素或者上下文时，那么包含该子元素的最顶层元素也会被选中。
- `contain`
  - : 允许在元素内选择；但是，选区将被限制在该元素的边界之内。
- `element`{{non-standard_inline}}（IE 专有别名）
  - : 与 `contain` 相同，但仅在 Internet Explorer 中受支持。

> **备注：** CSS UI 4 已[将 `user-select` 的 `element` 属性值重命名为 `contain`](https://github.com/w3c/csswg-drafts/commit/3f1d9db96fad8d9fc787d3ed66e2d5ad8cfadd05)。

### 形式化语法

{{csssyntax}}

## 示例

### HTML

```html
<p>你应该可以选中这段文本。</p>
<p class="unselectable">嘿嘿，你不能选中这段文本！</p>
<p class="all">点击一次就会选中这段文本。</p>
```

### CSS

```css
.unselectable {
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.all {
  -moz-user-select: all;
  -webkit-user-select: all;
  -ms-user-select: all;
  user-select: all;
}
```

### Result

{{EmbedLiveSample("Examples")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{Cssxref("::selection")}}
- JavaScript 的 {{domxref("Selection")}} 对象。
- [CSS Basic User Interface Module Level 4](http://www.w3.org/TR/css-ui-4/) 中的 [user-select](http://www.w3.org/TR/css-ui-4/#propdef-user-select) 章节。
