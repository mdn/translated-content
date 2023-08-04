---
title: user-select
slug: Web/CSS/user-select
---

{{CSSRef}}

**`user-select`** [CSS](/zh-CN/docs/Web/CSS) 属性用于控制用户是否可以选择文本。这不会对作为浏览器用户界面（即 {{Glossary("Chrome", "chrome")}}）的一部分的内容加载产生任何影响，除非是在文本框中。

{{EmbedInteractiveExample("pages/css/user-select.html")}}

## 语法

```css
/* 关键字值 */
user-select: none;
user-select: auto;
user-select: text;
user-select: contain;
user-select: all;

/* 全局值 */
user-select: inherit;
user-select: initial;
user-select: revert;
user-select: revert-layer;
user-select: unset;
```

> **备注：** `user-select` 不是继承属性，即使默认的属性值 `auto` 的表现基本上以继承为主，似乎是继承属性。甚至，WebKit/基于 Chromium 的浏览器在实现此属性时*将其作为继承属性*，但这和有关规范是相悖的，且会带来一些问题。目前，Chromium 暂时选择[修复将其作为继承属性所带来的问题](https://chromium.googlesource.com/chromium/src/+/b01af0b296ecb855aac95c4ed335d188e6eac2de)，使最终表现符合规范。

### 取值

- `none`

  - : 元素及其子元素的文本不可选中。请注意，{{domxref("Selection")}} 对象可以包含这些元素。

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

    > **备注：** CSS UI 4 将 `element` 值[重命名](https://github.com/w3c/csswg-drafts/commit/3f1d9db96fad8d9fc787d3ed66e2d5ad8cfadd05)为 `contain`。

## 形式定义

{{CSSInfo}}

## 形式语法

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
  -webkit-user-select: none; /* Safari */
  user-select: none;
}

.all {
  -webkit-user-select: all;
  user-select: all;
}
```

### 结果

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`user-select: contain` 的 polyfill](https://github.com/github/user-select-contain-polyfill)
- {{Cssxref("::selection")}} 伪类
- JavaScript 的 {{domxref("Selection")}} 对象。
