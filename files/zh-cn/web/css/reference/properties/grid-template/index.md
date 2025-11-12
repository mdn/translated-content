---
title: grid-template
slug: Web/CSS/Reference/Properties/grid-template
---

**`grid-template`**，CSS 属性简写，用以定义网格中{{glossary("grid rows", "行")}}、{{glossary("grid column", "列")}}与{{glossary("grid areas", "分区")}}。

{{InteractiveExample("CSS Demo: grid-template")}}

```css interactive-example-choice
grid-template:
  "a a a" 40px
  "b c c" 40px
  "b c c" 40px / 1fr 1fr 1fr;
```

```css interactive-example-choice
grid-template:
  "b b a" auto
  "b b c" 2ch
  "b b c" 1em / 20% 20px 1fr;
```

```css interactive-example-choice
grid-template:
  "a a ." minmax(50px, auto)
  "a a ." 80px
  "b b c" auto / 2em 3em auto;
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

所简写属性：{{cssxref("grid-template-rows")}}、{{cssxref("grid-template-columns")}}与{{cssxref("grid-template-areas")}}。

## 语法

```css
/* 值为关键词 */
grid-template: none;

/* 为 grid-template-rows / grid-template-columns */
grid-template: 100px 1fr / 50px 1fr;
grid-template: auto 1fr / auto 1fr auto;
grid-template: [linename] 100px / [columnname1] 30% [columnname2] 70%;
grid-template: fit-content(100px) / fit-content(40%);

/* 为 grid-template-areas grid-template-rows / grid-template-column */
grid-template:
  "a a a"
  "b b b";
grid-template:
  "a a a" 20%
  "b b b" auto;
grid-template:
  [header-top] "a a a" [header-bottom]
  [main-top] "b b b" 1fr [main-bottom]
  / auto 1fr auto;

/* 为全局值 */
grid-template: inherit;
grid-template: initial;
grid-template: unset;
```

### 可设值

- `none`
  - : 关键词，设上文“所简写属性”为`none`，即恢复默认设置。行列隐式生成，{{cssxref("grid-auto-rows")}}与{{cssxref("grid-auto-columns")}}定其尺寸。
- `<'grid-template-rows'> / <'grid-template-columns'>`
  - : 指定{{cssxref("grid-template-rows")}}与{{cssxref("grid-template-columns")}}之值，并设{{cssxref("grid-template-areas")}}为`none`。
- `[ <line-names>? <string> <track-size>? <line-names>? ]+ [ / <explicit-track-list> ]?`
  - : 设{{cssxref("grid-template-areas")}}为列得`<string>`、{{cssxref("grid-template-columns")}}为\<explicit-track-list>（默认为`none`）、{{cssxref("grid-template-rows")}}为`<track-size>`（默认为`auto`）并拼接尺寸前后所定义之行。

    注：轨道被用以与“ASCII art”（即字符画，此处指`<string>`）中行列逐一视觉对齐，故`<explicit-track-list>`中不允许{{cssxref("repeat()")}}。

**注：**{{cssxref("grid")}}可如此用，但将重置隐式网格属性。Use `grid` (as opposed to `grid-template`) to prevent these values from cascading in seperately.

### 形式语法

{{csssyntax}}

## 示例

### CSS

```css
#page {
  display: grid;
  width: 100%;
  height: 200px;
  grid-template:
    [header-left] "head head" 30px [header-right]
    [main-left] "nav  main" 1fr [main-right]
    [footer-left] "nav  foot" 30px [footer-right]
    / 120px 1fr;
}

header {
  background-color: lime;
  grid-area: head;
}

nav {
  background-color: lightblue;
  grid-area: nav;
}

main {
  background-color: yellow;
  grid-area: main;
}

footer {
  background-color: red;
  grid-column: foot;
}
```

### HTML

```html
<section id="page">
  <header>Header</header>
  <nav>Navigation</nav>
  <main>Main area</main>
  <footer>Footer</footer>
</section>
```

### 结果

{{EmbedLiveSample("示例", "100%", "200px")}}

## 规范

{{Specifications}}

{{cssinfo}}

## 浏览器兼容性

{{Compat}}

## 参见

- 相关 CSS 属性：{{cssxref("grid-template-rows")}}、{{cssxref("grid-template-columns")}}、{{cssxref("grid-template-areas")}}
- 网格布局指导：
  - _[CSS 网格中基于线的定位](/zh-CN/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)_
  - _[网格定义的简写规则](/zh-CN/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas#网格定义的简写规则)_

- 视频教程：_ [Grid Template shorthand](https://gridbyexample.com/video/grid-template-shorthand/)_
