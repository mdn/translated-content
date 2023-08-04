---
title: <display-outside>
slug: Web/CSS/display-outside
---

{{CSSRef}}

`<display-outside>` 关键字指定了元素的外侧显示（{{CSSXref("display")}}）类型，即元素在流式布局中的角色。这些关键字用作 `display` 属性的值，且有作为单个关键字的旧式用法，或按第 3 级规范的定义与 {{CSSXref("&lt;display-inside&gt;")}} 关键字中的值一同使用。

## 语法

有效的 `<display-outside>` 值：

- `block`
  - : 元素生成块级元素盒，且在正常流中时，在元素前后均生成断行。
- `inline`
  - : 元素生成至少一个行级元素盒，这些盒子不在自身前后生成断行。在正常流中，若有空格则下一元素将在同一行上。

> **备注：** 支持二值语法的浏览器在仅找到外侧值时（如指定 `display: block` 或 `display: inline` 时）会将内侧值设置为 `flow`，由此产生预期行为。例如若将元素指定为 block，你会期望此元素的子元素会参与块向和行向的正常流布局。

## 示例

在下列示例中，片段元素（通常显示为行级元素）设置为 `display: block`，故元素断入新行且在行向上扩张填充其容器。

### HTML

```html
<span>片段 1</span> <span>片段 2</span>
```

### CSS

```css
span {
  display: block;
  border: 1px solid rebeccapurple;
}
```

### 结果

{{EmbedLiveSample("示例", 300, 60)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSxRef("display")}}

  - {{CSSxRef("&lt;display-inside&gt;")}}
  - {{CSSxRef("&lt;display-listitem&gt;")}}
  - {{CSSxRef("&lt;display-internal&gt;")}}
  - {{CSSxRef("&lt;display-box&gt;")}}
  - {{CSSxRef("&lt;display-legacy&gt;")}}

- [正常流中的块向与行向布局](/zh-CN/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow)
- [格式化上下文介绍](/zh-CN/docs/Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts)
