---
title: translate
slug: Web/CSS/translate
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) 属性 **`translate`** 允许你单独声明平移变换，并独立于 {{cssxref("transform")}} 属性。这在一些典型的用户界面上更好用，而且这样就无需在 `transform` 中声明该函数并记住转换函数的确切顺序了。

{{InteractiveExample("CSS Demo: translate")}}

```css interactive-example-choice
translate: none;
```

```css interactive-example-choice
translate: 40px;
```

```css interactive-example-choice
translate: 50% -40%;
```

```css interactive-example-choice
translate: 20px 4rem;
```

```css interactive-example-choice
translate: 20px 4rem 150px;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    <div class="face front">1</div>
    <div class="face back">2</div>
    <div class="face right">3</div>
    <div class="face left">4</div>
    <div class="face top">5</div>
    <div class="face bottom">6</div>
  </div>
</section>
```

```css interactive-example
#default-example {
  background: linear-gradient(skyblue, khaki);
  perspective: 800px;
  perspective-origin: 150% 150%;
}

#example-element {
  width: 100px;
  height: 100px;
  perspective: 550px;
  transform-style: preserve-3d;
}

.face {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: inherit;
  font-size: 60px;
  color: white;
}

.front {
  background: rgba(90, 90, 90, 0.7);
  transform: translateZ(50px);
}

.back {
  background: rgba(0, 210, 0, 0.7);
  transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgba(210, 0, 0, 0.7);
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgba(0, 0, 210, 0.7);
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgba(210, 210, 0, 0.7);
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgba(210, 0, 210, 0.7);
  transform: rotateX(-90deg) translateZ(50px);
}
```

## 语法

```css
/* 关键字值 */
translate: none;

/* 单个值 */
translate: 100px;
translate: 50%;

/* 两个值 */
translate: 100px 200px;
translate: 50% 105px;

/* 三个值 */
translate: 50% 105px 5rem;

/* 全局值 */
translate: inherit;
translate: initial;
translate: revert;
translate: revert-layer;
translate: unset;
```

### 值

- 单个 {{cssxref("&lt;length-percentage&gt;")}} 值
  - : 一个 {{cssxref("&lt;length&gt;")}} 或 {{cssxref("&lt;percentage&gt;")}}，指沿 X 轴平移。等同于在 `translate()` 函数（2D 平移）中指定单个值。
- 两个 {{cssxref("&lt;length-percentage&gt;")}} 值
  - : 两个 {{cssxref("&lt;length&gt;")}} 或 {{cssxref("&lt;percentage&gt;")}} 表示在二维上分别按照指定 X 轴和 Y 轴的值进行的平移。等同于在 `translate()` 函数（2D 平移）中函数指定两个值。
- 三个值
  - : 两个 {{cssxref("&lt;length-percentage&gt;")}} 和单个的 {{cssxref("&lt;length&gt;")}} 分别指定 X 轴、Y 轴、Z 轴的值进行三维平移。等同于 `translate3d()` 函数（3D 平移）。
- `none`
  - : 表示不应用平移效果。

## 形式定义

{{CSSInfo}}

### 形式语法

{{CSSSyntax}}

## 示例

### 悬停时平移元素

此示例显示如何使用 `translate` 属性在 X、Y、Z 三个轴上移动元素。第一个盒子沿 X 轴移动，第二个沿 X、Y 轴方向，第三个盒子沿着 X、Y、Z 轴，并且由于向父元素添加了 {{cssxref('perspective')}}，看起来是向着观察者移动。

#### HTML

```html
<div class="wrapper">
  <div id="box1">沿 X 轴平移</div>
  <div id="box2">沿 X、Y 轴平移</div>
  <div id="box3">沿 X、Y、Z 轴平移</div>
</div>
```

#### CSS

```css
.wrapper {
  perspective: 100px;
  display: inline-flex;
  gap: 1em;
}
.wrapper > div {
  width: 9em;
  line-height: 8em;
  text-align: center;
  transition: 0.5s ease-in-out;
  border: 3px dotted;
}
#box1:hover {
  translate: 20px;
}

#box2:hover {
  translate: 20px 20px;
}

#box3:hover {
  translate: 5px 5px 30px;
}
```

#### 结果

{{EmbedLiveSample("悬停时平移元素", "100%", 175)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref('scale')}}
- {{cssxref('rotate')}}
- {{cssxref('transform')}}

注意：skew 不是一个独立的变换属性。
