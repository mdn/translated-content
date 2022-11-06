---
title: ':visited'
slug: Web/CSS/:visited
---

{{CSSRef}}

## 概述

**`:visited`** CSS[伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)表示用户已访问过的链接。出于隐私原因，可以使用此选择器修改的样式非常有限。

```css
/* 所有被访问过的 <a> 变绿 */
a:visited {
  color: green;
}
```

这个样式可能会被后声明的其他链接相关的伪类覆盖，这些伪类包括 ({{cssxref(":link")}}, {{cssxref(":hover")}},和{{cssxref(":active")}})。要适当地设置链接样式，请将`:visited` 规则放在`:link` 规则之后，但在`:hover` 和`:active` 规则之前，参照 LVHA _顺序_:`:link` — `:visited` — `:hover` — `:active`。

## 限制

出于隐私原因，浏览器严格限制您可以让此伪类应用的样式，以及使用它们的方式：

- 允许使用的 CSS 属性为{{ cssxref("color") }}, {{ cssxref("background-color") }}, {{ cssxref("border-color") }}, {{ cssxref("border-bottom-color") }}, {{ cssxref("border-left-color") }}, {{ cssxref("border-right-color") }}, {{ cssxref("border-top-color") }}, {{ cssxref("column-rule-color") }}, 和{{ cssxref("outline-color") }}。
- 允许使用的 SVG 属性为{{SVGAttr("fill")}} 和 {{SVGAttr("stroke")}}。
- 允许使用的样式的 αlpha 分量 (透明度) 将被忽略。设置在`:visited`中的样式将使用元素的非`:visited` 访问状态的 αlpha 分量，如果该分量为 0，这个样式将被完全忽略。
- 虽然这些样式可以改变用户最终的颜色外观，但 {{domxref("window.getComputedStyle")}} 方法将存在并且始终返回非访问颜色的值。

> **备注：** 有关这些限制及其背后原因的更多信息，请参阅 [Privacy and the :visited selector](/zh-CN/docs/Web/CSS/Privacy_and_the_:visited_selector)。

## 示例

未设置颜色或透明的属性不能使用`:visited`。在可以使用此伪类设置的属性中，浏览器可能只有`color`和`column-rule-color`两个默认值。因此，对于其他属性，在使用`:visited`选择器前，应该先为这些属性设置基础样式。

### HTML

```html
<a href="#test-visited-link">你是否访问过此链接？</a>
<a href="">你已经访问过此链接。</a>
```

### CSS

```css
a {
  /* 指定某些属性的默认值，允许他们使用：visited 状态进行样式设置 */
  background-color: white;
  border: 1px solid white;
}

a:visited {
  background-color: yellow;
  border-color: hotpink;
  color: hotpink;
}
```

### 结果

{{ EmbedLiveSample('示例') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Privacy and the :visited selector](/zh-CN/docs/Web/CSS/Privacy_and_the_:visited_selector)
- 链接相关伪类:{{cssxref(":link")}}，{{cssxref(":active")}}，和{{cssxref(":hover")}}。
