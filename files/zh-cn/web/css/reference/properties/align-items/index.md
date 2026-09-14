---
title: align-items
slug: Web/CSS/Reference/Properties/align-items
---

[CSS](/zh-CN/docs/Web/CSS) **`align-items`** 属性设置了所有直接子元素的 {{cssxref("align-self")}} 值作为一个组。在 Flexbox 中，它控制子元素在{{glossary("Cross Axis", "交叉轴")}}上的对齐。在 Grid 布局中，它控制了子元素在其{{glossary("Grid Areas", "网格区域")}}内的块向轴上的对齐。

下面的交互示例演示了使用网格布局的 `align-items` 的一些值。

{{InteractiveExample("CSS Demo: align-items")}}

```css interactive-example-choice
align-items: stretch;
```

```css interactive-example-choice
align-items: center;
```

```css interactive-example-choice
align-items: start;
```

```css interactive-example-choice
align-items: end;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  display: grid;
  width: 200px;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 80px;
  grid-gap: 10px;
}

#example-element > div {
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
}
```

## 语法

```css
/* 基本关键字 */
align-items: normal;
align-items: stretch;

/* 定位对齐 */
/* align-items 不能设置为 left 和 right */
align-items: center;
align-items: start;
align-items: end;
align-items: flex-start;
align-items: flex-end;
align-items: self-start;
align-items: self-end;

/* 基线对齐 */
align-items: baseline;
align-items: first baseline;
align-items: last baseline; /* 溢出对齐（仅用于位置对齐） */
align-items: safe center;
align-items: unsafe center;

/* 全局值 */
align-items: inherit;
align-items: initial;
align-items: revert;
align-items: revert-layer;
align-items: unset;
```

### 取值

- `normal`
  - : 这个关键字的效果取决于我们处在什么布局模式中：
    - 在绝对定位的布局中，对于*被替代*的绝对定位盒子，行为与 `start` 类似；对于*其他所有*绝对定位的盒子，行为与 `stretch` 类似。
    - 在绝对定位布局的静态位置上，行为与 `stretch` 类似。
    - 对于那些 flex 元素而言，行为与 `stretch` 类似。
    - 对于那些 grid 元素而言，行为与 `stretch` 类似，但对于具有长宽比或固有尺寸的盒子，其行为与 `start` 类似。
    - 这个属性不适用于块级盒子和表格。

- `flex-start`
  - : 只在 flex 布局中使用，将元素与 flex 容器的主轴起点或交叉轴起点对齐。
- `flex-end`
  - : 只在 flex 布局中使用，将元素与 flex 容器的主轴末端或交叉轴末端对齐。
- `center`
  - : flex 元素的外边距框在交叉轴上居中对齐。如果元素的交叉轴尺寸大于 flex 容器，它将在两个方向上等距溢出。
- `start`
  - : 将元素与容器的主轴起点或交叉轴起点对齐。
- `end`
  - : 将元素与容器的主轴末端或交叉轴末端对齐。
- `self-start`
  - : 将元素与容器的主轴起点或交叉轴起点对齐，轴起点的方向对应于元素的起始方向。
- `self-end`
  - : 将元素与容器的主轴末端或交叉轴末端对齐，轴末端的方向对应于元素的结尾方向。
- `baseline`、`first baseline`、`last baseline`
  - : 所有 flex 元素都对齐，以使它们的 [flex 容器基线](https://drafts.csswg.org/css-flexbox-1/#flex-baselines) 对齐。距离其交叉轴起点和基线之间最远的元素与行的交叉轴起点对齐。
- `stretch`
  - : 如果（多个）元素的组合大小小于容器的大小，其中自动调整大小的元素将等量增大，以填满容器，同时这些元素仍然保持其宽高比例的约束。
- `safe`
  - : 与其它对齐值一起使用。如果所选对齐值导致元素溢出容器，则将元素按 `start` 方式对齐。
- `unsafe`
  - : 与其它对齐值一起使用。不管元素和容器的相对尺寸以及是否会发生溢出，都会采用给定的对齐值。

## 形式定义

{{CSSInfo}}

## 形式语法

{{csssyntax}}

## 示例

### CSS

```css
#container {
  height: 200px;
  width: 240px;
  align-items: center; /* 可以在运行实例中更改 */
  background-color: #8c8c8c;
}

.flex {
  display: flex;
  flex-wrap: wrap;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 50px);
}

div > div {
  box-sizing: border-box;
  border: 2px solid #8c8c8c;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#item1 {
  background-color: #8cffa0;
  min-height: 30px;
}

#item2 {
  background-color: #a0c8ff;
  min-height: 50px;
}

#item3 {
  background-color: #ffa08c;
  min-height: 40px;
}

#item4 {
  background-color: #ffff8c;
  min-height: 60px;
}

#item5 {
  background-color: #ff8cff;
  min-height: 70px;
}

#item6 {
  background-color: #8cffff;
  min-height: 50px;
  font-size: 30px;
}

select {
  font-size: 16px;
}

.row {
  margin-top: 10px;
}
```

### HTML

```html
<div id="container" class="flex">
  <div id="item1">1</div>
  <div id="item2">2</div>
  <div id="item3">3</div>
  <div id="item4">4</div>
  <div id="item5">5</div>
  <div id="item6">6</div>
</div>

<div class="row">
  <label for="display">display: </label>
  <select id="display">
    <option value="flex">flex</option>
    <option value="grid">grid</option>
  </select>
</div>

<div class="row">
  <label for="values">align-items: </label>
  <select id="values">
    <option value="normal">normal</option>
    <option value="flex-start">flex-start</option>
    <option value="flex-end">flex-end</option>
    <option value="center" selected>center</option>
    <option value="baseline">baseline</option>
    <option value="stretch">stretch</option>

    <option value="start">start</option>
    <option value="end">end</option>
    <option value="self-start">self-start</option>
    <option value="self-end">self-end</option>

    <option value="first baseline">first baseline</option>
    <option value="last baseline">last baseline</option>

    <option value="safe center">safe center</option>
    <option value="unsafe center">unsafe center</option>
    <option value="safe right">safe right</option>
    <option value="unsafe right">unsafe right</option>
    <option value="safe end">safe end</option>
    <option value="unsafe end">unsafe end</option>
    <option value="safe self-end">safe self-end</option>
    <option value="unsafe self-end">unsafe self-end</option>
    <option value="safe flex-end">safe flex-end</option>
    <option value="unsafe flex-end">unsafe flex-end</option>
  </select>
</div>
```

```js hidden
const values = document.getElementById("values");
const display = document.getElementById("display");
const container = document.getElementById("container");

values.addEventListener("change", (evt) => {
  container.style.alignItems = evt.target.value;
});

display.addEventListener("change", (evt) => {
  container.className = evt.target.value;
});
```

### 结果

{{EmbedLiveSample("示例", "260px", "290px")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- CSS Flexbox 指南：_[flex 布局的基本概念](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)_
- CSS Flexbox 指南：_[对齐弹性容器中的弹性项目](/zh-CN/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)_
- CSS Grid 指南：_[网格布局中的盒模型对齐](/zh-CN/docs/Web/CSS/Guides/Grid_layout/Box_alignment)_
- [CSS 盒子对齐](/zh-CN/docs/Web/CSS/Guides/Box_alignment)
- {{cssxref("align-self")}} 属性
