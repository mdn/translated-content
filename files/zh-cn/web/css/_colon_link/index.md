---
title: ":link"
slug: Web/CSS/:link
---

{{CSSRef}}

**`:link`** [CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)表示尚未被访问的元素，匹配每个具有 `href` 属性的未访问的 {{HTMLElement("a")}} 或 {{HTMLElement("area")}} 元素。

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-link.html", "tabbed-shorter")}}

由 `:link` 和 [`:visited`](/zh-CN/docs/Web/CSS/:visited) 伪类定义的样式可以被任何具有相同优先级的后续用户动作伪类（例如 {{cssxref(":hover")}} 或 {{cssxref(":active")}}）覆盖。为了适当地为链接设置样式，请按照 *LVHA 顺序*将 `:link` 规则放置在所有其他与链接相关的规则之前，顺序为 `:link`—`:visited`—`:hover`—`:active`。`:visited` 伪类和 `:link` 伪类是互斥的。

> **备注：** 使用 {{cssxref(":any-link")}} 来选择一个元素，无论它是否已被访问。

## 语法

```css
:link {
  /* ... */
}
```

## 示例

默认情况下，大多数浏览器会对访问过的链接应用特殊的 {{cssxref("color")}} 值。因此，在你访问这些链接之前，它们通常会有特殊的字体颜色。（在那之后，您需要清除浏览器历史记录才能再次看到它们。）但是，{{cssxref("background-color")}} 值可能会保留，因为大多数浏览器不会在访问过的链接上设置该属性。

### HTML

```html
<a href="#ordinary-target">This is an ordinary link.</a><br />
<a href="">You've already visited this link.</a><br />
<a>Placeholder link (won't get styled)</a>
```

### CSS

```css
a:link {
  background-color: gold;
  color: green;
}
```

### 结果

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 链接相关的伪类：{{cssxref(":visited")}}、{{cssxref(":hover")}} 和 {{cssxref(":active")}}
