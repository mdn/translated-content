---
title: :visited
slug: Web/CSS/:visited
---

{{CSSRef}}

**`:visited`** [CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)会在用户访问链接后生效，出于隐私保护的原因，使用该选择器可以修改的样式非常有限。`:visited` 伪类仅适用于带有 `href` 属性的 {{htmlelement("a")}} 和 {{htmlelement("area")}} 元素。

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-visited.html", "tabbed-shorter")}}

由 `:visited` 和未访问的 [`:link`](/zh-CN/docs/Web/CSS/:link) 伪类定义的样式可以被任何后续的用户动作伪类（{{cssxref(":hover")}} 或 {{cssxref(":active")}}）覆盖，只要它们的特殊性至少相等。为了适当地样式化链接，将 `:visited` 规则放置在 `:link` 规则之后但在 `:hover` 和 `:active` 规则之前，按照 _LVHA 顺序定义_：`link` — `:visited` — `:hover` — `:active`。`:visited` 伪类和 `:link` 伪类是互斥的。

## 隐私限制

出于隐私原因，浏览器严格限制你可以让此伪类应用的样式，以及使用它们的方式：

- 允许使用的 CSS 属性有 {{ cssxref("color") }}、{{ cssxref("background-color") }}、{{ cssxref("border-color") }}、{{ cssxref("border-bottom-color") }}、{{ cssxref("border-left-color")}}、{{ cssxref("border-right-color") }}、{{ cssxref("border-top-color") }}、{{ cssxref("column-rule-color") }}、{{ cssxref("outline-color")}}、{{ cssxref("text-decoration-color") }} 和 {{ cssxref("text-emphasis-color") }}。
- 允许使用的 SVG 属性有 {{SVGAttr("fill")}} 和 {{SVGAttr("stroke")}}。
- 允许使用的样式的 alpha 分量（透明度）将被忽略。设置在 `:visited` 中的样式将使用元素的非 `:visited` 访问状态的 alpha 分量。在 Firefox 中，当 alpha 分量为 `0` 时，`:visited` 中设置的样式将被完全忽略。
- 虽然这些样式可以改变用户最终的颜色外观，但 {{domxref("window.getComputedStyle")}} 方法将存在并且始终返回非访问颜色的值。
- [`<link>`](/zh-CN/docs/Web/HTML/Element/link) 元素永远不会被 `:visited` 匹配。

> [!NOTE]
> 有关这些限制及其背后原因的更多信息，请参阅[隐私和 :visited 选择器](/zh-CN/docs/Web/CSS/Privacy_and_the_:visited_selector)。

## 语法

```css
:visited {
  /* ... */
}
```

## 示例

未设置颜色或透明的属性不能使用 `:visited`。在可以使用此伪类设置的属性中，浏览器可能只有 `color` 和 `column-rule-color` 两个默认值。因此，对于其他属性，在使用 `:visited` 选择器前，应该先为这些属性设置基础样式。

### HTML

```html
<a href="#test-visited-link">你是否访问过此链接？</a>
<a href="">你已经访问过此链接。</a>
```

### CSS

```css
a {
  /* 为某些属性指定非透明的默认值，使它们可以与 :visited 状态一起使用样式。 */
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

- [隐私和 :visited 选择器](/zh-CN/docs/Web/CSS/Privacy_and_the_:visited_selector)
- 链接相关伪类：{{cssxref(":link")}}、{{cssxref(":active")}} 和 {{cssxref(":hover")}}
