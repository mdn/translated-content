---
title: -moz-orient
slug: Web/CSS/Reference/Properties/-moz-orient
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_header}}

[CSS](/zh-CN/docs/Web/CSS) 属性 **`-moz-orient`** 用于指定应用该属性的元素的方向。

## 语法

```css
-moz-orient: inline;

/* 全局值 */
-moz-orient: inherit;
-moz-orient: initial;
-moz-orient: revert;
-moz-orient: revert-layer;
-moz-orient: unset;
```

### 值

- `inline`
  - : 元素按照文本轴的方向进行渲染：在水平书写模式下为水平渲染，在垂直书写模式下为垂直渲染。
- `block`
  - : 元素按照与文本轴垂直的方向进行渲染：在水平书写模式下为垂直渲染，在垂直书写模式下为水平渲染。
- `horizontal`
  - : 元素以水平方向渲染。
- `vertical`
  - : 元素以垂直方向渲染。

## 形式定义

{{CSSInfo}}

## 形式语法

{{CSSSyntaxRaw(`-moz-orient = inline | block | horizontal | vertical`)}}

## 示例

### HTML

```html
<p>下面的进度条是水平的（默认）：</p>
<progress max="100" value="75"></progress>

<p>下面的进度条是垂直的：</p>
<progress class="vert" max="100" value="75"></progress>
```

### CSS

```css
.vert {
  -moz-orient: vertical;
  width: 16px;
  height: 150px;
}
```

### 结果

{{EmbedLiveSample("示例","200","360")}}

## 规范

不属于任何标准。尽管该属性已[提交](https://lists.w3.org/Archives/Public/www-style/2014Jun/0396.html)给 W3C，并且最初获得了积极的反馈，但它尚未被纳入任何规范；目前，它是 Mozilla 特有的扩展（即 `-moz-orient`）。

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("box-orient")}}
