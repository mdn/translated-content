---
title: grid-template-areas
slug: Web/CSS/Reference/Properties/grid-template-areas
---

**`grid-template-areas`** CSS 属性是网格区域 {{glossary("grid areas")}} 在 CSS 中的特定命名。

{{InteractiveExample("CSS Demo: grid-template-areas")}}

```css interactive-example-choice
grid-template-areas:
  "a a a"
  "b c c"
  "b c c";
```

```css interactive-example-choice
grid-template-areas:
  "b b a"
  "b b c"
  "b b c";
```

```css interactive-example-choice
grid-template-areas:
  "a a ."
  "a a ."
  ". b c";
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">
      <div>One (a)</div>
      <div>Two (b)</div>
      <div>Three (c)</div>
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(3, minmax(40px, auto));
  grid-gap: 10px;
  width: 200px;
}

#example-element :nth-child(1) {
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
  grid-area: a;
}

#example-element :nth-child(2) {
  background-color: rgba(255, 0, 200, 0.2);
  border: 3px solid rebeccapurple;
  grid-area: b;
}

#example-element :nth-child(3) {
  background-color: rgba(94, 255, 0, 0.2);
  border: 3px solid green;
  grid-area: c;
}
```

网格区块 (grid areas) 和网格项 (grid item) 沒有关联，但是它们可以和一些网格定位属性 (grid-placement properties) 关联起来，比如{{cssxref("grid-row-start")}}， {{cssxref("grid-row-end")}}， {{cssxref("grid-column-start")}}和{{cssxref("grid-column-end")}}；也可以和一些速记 (shorthands) 属性关联起来，比如{{cssxref("grid-row")}}，{{cssxref("grid-column")}} 和 {{cssxref("grid-area")}}。

## 语法

```css
/* Keyword value */
grid-template-areas: none;

/* <string> values */
grid-template-areas: "a b"; /* 一行 两列 */
grid-template-areas:
  "a b b"
  "a c d"; /* 两行 三列 */

/* Global values */
grid-template-areas: inherit; /* 继承 */
grid-template-areas: initial; /* 默认值 */
grid-template-areas: unset; /* 未设置 */
```

### 值

- `none`
  - : 网格容器没有定义任何的网格区块 (grid areas)。
- `{{cssxref("&lt;string&gt;")}}+`
  - : 每一个给定的字符串会生成一行，一个字符串中用空格分隔的每一个单元 (cell) 会生成一列。多个同名的，跨越相邻行或列的单元称为网格区块 (grid area)。非矩形的网格区块是无效的。

### 形式语法

{{csssyntax}}

## 示例

### HTML

```html
<section id="page">
  <header>Header</header>
  <nav>Navigation</nav>
  <main>Main area</main>
  <footer>Footer</footer>
</section>
```

### CSS

```css
#page {
  display: grid; /* 1.设置 display 为 grid */
  width: 100%;
  height: 250px;
  grid-template-areas:
    "head head"
    "nav  main"
    "nav  foot"; /* 2.区域划分 当前为 三行 两列 */
  grid-template-rows: 50px 1fr 30px; /* 3.各区域 宽高设置 */
  grid-template-columns: 150px 1fr;
}

#page > header {
  grid-area: head; /* 4. 指定当前元素所在的区域位置，从 grid-template-areas 选取值 */
  background-color: #8ca0ff;
}

#page > nav {
  grid-area: nav;
  background-color: #ffa08c;
}

#page > main {
  grid-area: main;
  background-color: #ffff64;
}

#page > footer {
  grid-area: foot;
  background-color: #8cffa0;
}
```

### 结果

{{ EmbedLiveSample('示例', '100%', '250px') }}

## 规范

{{Specifications}}

{{cssinfo}}

## 浏览器兼容性

{{Compat}}

## 参见

- 相关 CSS 属性：{{cssxref("grid-template-rows")}}、{{cssxref("grid-template-columns")}}、{{cssxref("grid-template")}}
- Grid Layout 指南：_[Grid template areas](/zh-CN/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas)_
- 视频教程：_[Grid Template Areas](https://gridbyexample.com/video/grid-template-areas/)_
