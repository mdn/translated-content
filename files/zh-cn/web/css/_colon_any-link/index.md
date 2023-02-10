---
title: ':any-link'
slug: Web/CSS/:any-link
---

{{CSSRef}} {{SeeCompatTable}}

**`:any-link`** [CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes) 选择器代表一个有链接锚点的元素，而不管它是否被访问过，也就是说，它会匹配每一个有 `href` 属性的 {{HTMLElement("a")}}、{{HTMLElement("area")}} 或 {{HTMLElement("link")}} 元素。因此，它会匹配到所有的 {{cssxref(":link")}} 或 {{cssxref(":visited")}}。

```css
/* 选中任意匹配 :link 和 :visited 元素*/
:any-link {
  color: green;
}
```

## 形式语法

{{csssyntax}}

## 示例

### HTML

```html
<a href="https://example.com">External link</a><br>
<a href="#">Internal target link</a><br>
<a>Placeholder link (won't get styled)</a>
```

### CSS

```css
a:any-link {
  border: 1px solid blue;
  color: orange;
}

/* WebKit browsers */
a:-webkit-any-link {
  border: 1px solid blue;
  color: orange;
}
```

{{EmbedLiveSample('示例')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
