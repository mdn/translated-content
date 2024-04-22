---
title: flex-shrink
slug: Web/CSS/flex-shrink
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) **`flex-shrink`** 属性指定了 flex 元素的收缩规则。flex 元素仅在默认宽度之和大于容器的时候才会发生收缩，其收缩的大小是依据 flex-shrink 的值。

```css
flex-shrink: 2;
flex-shrink: 0.6;

/* Global values */
flex-shrink: inherit;
flex-shrink: initial;
flex-shrink: unset;
```

{{cssinfo}}

更多属性和定义请参见[使用 CSS 弹性盒子](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Using_CSS_flexible_boxes)

## 语法

`flex-shrink` 属性只能是一个 `<number>`。

### 取值

- `<number`>
  - : 负值是不被允许的。参考 {{cssxref("&lt;number&gt;")}}。

### Formal syntax

{{csssyntax}}

## 示例

### HTML

```html
<p>the width of content is 500px, flex-basic of flex item is 120px.</p>
<p>A, B, C are flex-shrink:1. D and E are flex-shrink:2</p>
<p>the width of D is not the same as A's</p>
<div id="content">
  <div class="box" style="background-color:red;">A</div>
  <div class="box" style="background-color:lightblue;">B</div>
  <div class="box" style="background-color:yellow;">C</div>
  <div class="box1" style="background-color:brown;">D</div>
  <div class="box1" style="background-color:lightgreen;">E</div>
</div>
```

### CSS

```css
#content {
  display: flex;
  width: 500px;
}

#content div {
  flex-basis: 120px;
  border: 3px solid rgba(0, 0, 0, 0.2);
}

.box {
  flex-shrink: 1;
}

.box1 {
  flex-shrink: 2;
}
```

### 结果

{{EmbedLiveSample('示例', '500px', '300px')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- [使用 CSS 弹性盒子](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Using_CSS_flexible_boxes)
