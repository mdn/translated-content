---
title: list-style
slug: Web/CSS/Reference/Properties/list-style
---

**`list-style`** CSS 属性是一个简写对属性集合，包括{{cssxref("list-style-type")}}, {{cssxref("list-style-image")}}, 和 {{cssxref("list-style-position")}}。

CSS list-style 属性是设置{{cssxref("list-style-type")}}, {{cssxref("list-style-image")}} 和 {{cssxref("list-style-position")}} 的简写属性。

{{cssinfo}}

## 语法

```plain
Formal syntax: {{csssyntax("list-style")}}
```

### 值

以任何顺序接受一个，二个或者三个关键词

- `<'list-style-type'>`
  - : 参看 {{cssxref("list-style-type")}}
- `<'list-style-image'>`
  - : 参看 {{cssxref("list-style-image")}}
- `<'list-style-position'>`
  - : 参看 {{cssxref("list-style-position")}}

## 示例

### HTML

```html
List 1
<ul class="one">
  <li>List Item1</li>
  <li>List Item2</li>
  <li>List Item3</li>
</ul>
List 2
<ul class="two">
  <li>List Item A</li>
  <li>List Item B</li>
  <li>List Item C</li>
</ul>
```

### CSS

```css
.one {
  list-style: circle;
}

.two {
  list-style: square inside;
}
```

### Result

{{EmbedLiveSample('示例')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另参见

- {{Cssxref("list-style-type")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
