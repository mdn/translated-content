---
title: flex-direction
slug: Web/CSS/flex-direction
---

{{CSSRef("CSS Flexible Boxes")}}

[CSS](/zh-CN/docs/CSS) **`flex-direction`** 属性指定了内部元素是如何在 flex 容器中布局的，定义了主轴的方向 (正方向或反方向)。

```
/* The direction text is laid out in a line */
flex-direction: row;

/* Like <row>, but reversed */
flex-direction: row-reverse;

/* The direction in which lines of text are stacked */
flex-direction: column;

/* Like <column>, but reversed */
flex-direction: column-reverse;

/* Global values */
flex-direction: inherit;
flex-direction: initial;
flex-direction: unset;
```

请注意，值 `row` 和 `row-reverse` 受 flex 容器的方向性的影响。如果它的 dir 属性是 ltr，row 表示从左到右定向的水平轴，而 row-reverse 表示从右到左; 如果 dir 属性是 rtl，row 表示从右到左定向的轴，而 row-reverse 表示从左到右。

{{cssinfo}}

查看 [使用 CSS 弹性盒子](/zh-CN/docs/Web/Guide/CSS/Flexible_boxes) 以了解更多的属性和信息。

## 语法

### 取值

接受以下取值：

- `row`
  - : flex 容器的主轴被定义为与文本方向相同。主轴起点和主轴终点与内容方向相同。
- `row-reverse`
  - : 表现和 row 相同，但是置换了主轴起点和主轴终点
- `column`
  - : flex 容器的主轴和块轴相同。主轴起点与主轴终点和书写模式的前后点相同
- `column-reverse`
  - : 表现和`column`相同，但是置换了主轴起点和主轴终点

### 语法格式

{{csssyntax("flex-direction")}}

## 示例

### HTML

```html
<h4>This is a Column-Reverse</h4>
<div id="content">
  <div id="box" style="background-color:red;">A</div>
  <div id="box" style="background-color:lightblue;">B</div>
  <div id="box" style="background-color:yellow;">C</div>
</div>
<h4>This is a Row-Reverse</h4>
<div id="content1">
  <div id="box1" style="background-color:red;">A</div>
  <div id="box1" style="background-color:lightblue;">B</div>
  <div id="box1" style="background-color:yellow;">C</div>
</div>
```

### CSS

```css
#content {
  width: 200px;
  height: 200px;
  border: 1px solid #c3c3c3;
  display: -webkit-flex;
  -webkit-flex-direction: column-reverse;
  display: flex;
  flex-direction: column-reverse;
}

#box {
  width: 50px;
  height: 50px;
}

#content1 {
  width: 200px;
  height: 200px;
  border: 1px solid #c3c3c3;
  display: -webkit-flex;
  -webkit-flex-direction: row-reverse;
  display: flex;
  flex-direction: row-reverse;
}

#box1 {
  width: 50px;
  height: 50px;
}
```

### 结果

{{ EmbedLiveSample('示例', '', '300') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- [使用 CSS 弹性盒子](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Using_CSS_flexible_boxes)
