---
title: ID 选择器
slug: Web/CSS/Reference/Selectors/ID_selectors
---

CSS **ID 选择器**会根据该元素的 [`id`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/id) 属性中的内容匹配元素。为了使该元素被选中，它的 `id` 属性必须与选择器中给出的值完全匹配。

```css
/* id 为“demo”的元素会被选中 */
#demo {
  border: red 2px solid;
}
```

## 语法

```css
#id_value {
  /* … */
}
```

它与下面的[属性选择器](/zh-CN/docs/Web/CSS/Reference/Selectors/Attribute_selectors)语句语法上等价（但优先级并不等价）：

```css
[id="id_value"] {
  /* … */
}
```

## 示例

### CSS

```css
#identified {
  background-color: skyblue;
}
```

### HTML

```html
<div id="identified">这个 div 有一个特别的 ID 属性！</div>
<div>这只是一个普通的 div。</div>
```

### 结果

{{EmbedLiveSample("示例", '100%', 50)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS 选择器](/zh-CN/docs/Web/CSS/Guides/Selectors)
- [学习 CSS 选择器](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
