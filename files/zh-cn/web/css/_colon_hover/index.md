---
title: ":hover"
slug: Web/CSS/:hover
---

{{CSSRef}}

**`:hover`** [CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)在用户使用指针设备与元素进行交互时匹配，但不一定激活它。通常情况下，用户将光标（鼠标指针）悬停在元素上时触发。

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-hover.html", "tabbed-shorter")}}

`:hover` 伪类定义的样式将被任何后续的链接相关伪类（{{ cssxref(":link") }}、{{ cssxref(":visited") }} 或 {{ cssxref(":active") }}）覆盖，这些伪类的特殊性至少相等。为了适当地为链接设置样式，应该在 `:link`和 `:visited` 规则之后，`:active` 规则之前放置 `:hover` 规则，即按照 _LVHA 定义的顺序_：`link` — `:visited` — `:hover` — `:active`。

> **备注：** 在触摸屏上，`:hover` 伪类可能存在问题。根据不同的浏览器，`:hover` 伪类可能永远不会匹配，只会在触摸一个元素后短暂匹配，或者即使用户停止触摸并且直到用户触摸另一个元素之前仍然匹配。Web 开发人员应确保内容可以在具有有限或不存在悬停功能的设备上访问。

## 语法

```css
:hover {
  /* ... */
}
```

## 示例

### 基础示例

#### HTML

```html
<a href="#">尝试将鼠标悬停到该元素上。</a>
```

#### CSS

```css
a {
  background-color: powderblue;
  transition: background-color 0.5s;
}

a:hover {
  background-color: gold;
}
```

#### 结果

{{EmbedLiveSample("基础示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Chromium bug #370155：在设置移动端视口的网站上，不要使 `:hover` 在触摸时保持悬停状态。](https://crbug.com/370155)
- [Chromium bug #306581：当页面无法滚动时，在触摸时立即显示 `:hover` 和 `:active` 状态。](https://crbug.com/306581)
