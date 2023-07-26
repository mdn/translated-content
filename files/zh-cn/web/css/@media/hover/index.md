---
title: hover
slug: Web/CSS/@media/hover
---

{{CSSRef}}

该 **`hover`** [CSS](/zh-CN/docs/Web/CSS) {{cssxref("@media")}} 可以根据用户的主要输入机制是否可以悬停在元素之上来应用样式。

## 语法

悬停功能指定为从下面列表中选择的关键字值。

- `none`
  - : 主要输入机制无法悬停或不方便悬停（例如，当用户执行不方便的长按操作时，许多移动设备模拟悬停），或者没有主指示输入机制。
- `hover`
  - : 主要输入机制可以方便地悬停在元素上。

## 示例

### HTML

```html
<a href="#">Try hovering over me!</a>
```

### CSS

```css
@media (hover: hover) {
  a:hover {
    background: yellow;
  }
}
```

### 结果

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [the `any-hover` media feature](/zh-CN/docs/Web/CSS/@media/any-hover)
