---
title: z-index
slug: Web/CSS/Reference/Properties/z-index
---

CSS **`z-index`** 属性设置定位元素及其后代元素或 flex 项目的 Z 轴顺序。z-index 较大的重叠元素会覆盖较小的元素。

{{InteractiveExample("CSS Demo: z-index")}}

```css interactive-example-choice
z-index: auto;
```

```css interactive-example-choice
z-index: 1;
```

```css interactive-example-choice
z-index: 3;
```

```css interactive-example-choice
z-index: 5;
```

```css interactive-example-choice
z-index: 7;
```

```html interactive-example
<section class="default-example container" id="default-example">
  <div id="example-element">Change my z-index</div>
  <div class="block blue position1">z-index: 6</div>
  <div class="block blue position2">z-index: 4</div>
  <div class="block blue position3">z-index: 2</div>
  <div class="block red position4">z-index: auto</div>
  <div class="block red position5">z-index: auto</div>
  <div class="block red position6">z-index: auto</div>
</section>
```

```css interactive-example
#example-element {
  top: 15px;
  left: 15px;
  width: 180px;
  height: 230px;
  position: absolute;
  /* center the text so it is visible even when z-index is set to auto */
  line-height: 215px;
  font-family: monospace;
  background-color: #fcfbe5;
  border: solid 5px #e3e0a1;
  z-index: auto;
  color: black;
}

.container {
  display: inline-block;
  width: 250px;
  position: relative;
}

.block {
  width: 150px;
  height: 50px;
  position: absolute;
  font-family: monospace;
  color: black;
}

.blue {
  background-color: #e5e8fc;
  border: solid 5px #112382;
  /* move text to the bottom of the box */
  line-height: 55px;
}

.red {
  background-color: #fce5e7;
  border: solid 5px #e3a1a7;
}

.position1 {
  top: 0;
  left: 0;
  z-index: 6;
}

.position2 {
  top: 30px;
  left: 30px;
  z-index: 4;
}

.position3 {
  top: 60px;
  left: 60px;
  z-index: 2;
}

.position4 {
  top: 150px;
  left: 0;
  z-index: auto;
}

.position5 {
  top: 180px;
  left: 30px;
  z-index: auto;
}

.position6 {
  top: 210px;
  left: 60px;
  z-index: auto;
}
```

对于定位盒子（即 `position` 属性值非 `static` 的盒子），`z-index` 属性会指定：

1. 盒子在当前[层叠上下文](/zh-CN/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)中的层叠等级。
2. 盒子是否会创建局部层叠上下文。

## 语法

```css
/* 关键字值 */
z-index: auto;

/* 整数值 */
z-index: 0;
z-index: 3;
z-index: 289;
z-index: -1; /* 使用负值降低优先级 */

/* 全局值 */
z-index: inherit;
z-index: initial;
z-index: unset;
```

`z-index` 属性可以被设置为关键字 `auto` 或 `<integer>`。

### 取值

- `auto`
  - : 盒子不会创建一个新的局部层叠上下文。盒子在当前层叠上下文的层叠等级是 `0`。
- `<integer>`
  - : 盒子在当前层叠上下文的层叠等级就是 {{cssxref("&lt;integer&gt;")}} 的值。盒子还会创建一个局部层叠上下文。这意味着该元素的后代元素不会和该元素的外部元素比较 `z-index`。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 视觉上的分层元素

#### HTML

```html
<div class="wrapper">
  <div class="dashed-box">Dashed box</div>
  <div class="gold-box">Gold box</div>
  <div class="green-box">Green box</div>
</div>
```

#### CSS

```css
.wrapper {
  position: relative;
}

.dashed-box {
  position: relative;
  z-index: 1;
  border: dashed;
  height: 8em;
  margin-bottom: 1em;
  margin-top: 2em;
}
.gold-box {
  position: absolute;
  z-index: 3; /* put .gold-box above .green-box and .dashed-box */
  background: gold;
  width: 80%;
  left: 60px;
  top: 3em;
}
.green-box {
  position: absolute;
  z-index: 2; /* put .green-box above .dashed-box */
  background: lightgreen;
  width: 20%;
  left: 65%;
  top: -25px;
  height: 7em;
  opacity: 0.9;
}
```

#### 结果

{{ EmbedLiveSample('视觉上的分层元素', '550', '200') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参阅

- CSS {{Cssxref("position")}} 属性
- [理解 CSS z-index](/zh-CN/docs/Web/CSS/Guides/Positioned_layout/Understanding_z-index)
