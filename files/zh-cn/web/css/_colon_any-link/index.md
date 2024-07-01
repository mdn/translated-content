---
title: ":any-link"
slug: Web/CSS/:any-link
---

{{CSSRef}}

**`:any-link`** [CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)选择器表示作为超链接源锚点的元素，无论是否已被访问。换言之，它匹配每个具有 `href` 属性的 {{HTMLElement("a")}} 或 {{HTMLElement("area")}} 元素。因此，它匹配所有匹配 {{cssxref(":link")}} 或 {{cssxref(":visited")}} 的元素。

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-any-link.html", "tabbed-shorter")}}

## 语法

```css
:any-link {
  /* ... */
}
```

## 示例

### HTML

```html
<a href="https://example.com">外部链接</a><br />
<a href="#">内部目标链接</a><br />
<a>占位符链接（不会有样式）</a>
```

### CSS

```css
a:any-link {
  border: 1px solid blue;
  color: orange;
}

/* WebKit 浏览器 */
a:-webkit-any-link {
  border: 1px solid blue;
  color: orange;
}
```

### 结果

{{EmbedLiveSample('示例')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [创建超链接](/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks)
- 匹配 HTML 元素：具有 [`href`](/zh-CN/docs/Web/HTML/Element/a#href) 属性的 [`<a>`](/zh-CN/docs/Web/HTML/Element/a) 和 [`<area>`](/zh-CN/docs/Web/HTML/Element/area)
- 相关的 CSS 选择器：

  - [`:visited`](/zh-CN/docs/Web/CSS/:visited)
  - [`:link`](/zh-CN/docs/Web/CSS/:link)
