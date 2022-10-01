---
title: ID 选择器
slug: Web/CSS/ID_selectors
---

{{CSSRef}}

在一个 HTML 文档中，CSS ID 选择器会根据该元素的 ID 属性中的内容匹配元素，元素 ID 属性名必须与选择器中的 ID 属性名完全匹配，此条样式声明才会生效。

```css
/* The element with id="demo" */
#demo {
  border: red 2px solid;
}
```

## 语法

```plain
#id 属性值 {样式声明 }
```

它与下面的{{Cssxref("Attribute selectors", "属性选择器")}}语句等价：

```plain
[id=id 属性值] {样式声明 }
```

## 示例

### CSS

```css
span#identified {
  background-color: DodgerBlue;
}
```

### HTML

```html
  <span id="identified">Here's a span with some text.</span>
  <span>Here's another.</span>
```

### 结果

{{EmbedLiveSample("Example", '100%', 50)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
