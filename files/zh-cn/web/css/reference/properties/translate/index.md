---
title: translate
slug: Web/CSS/Reference/Properties/translate
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

[CSS](/zh-CN/docs/Web/CSS) 属性 **`translate`** 允许你单独地指定平移变换，而不必依赖 {{CSSxRef("transform")}} 属性。这种方式更符合典型的用户界面使用场景，并且避免了在 `transform` 值中必须记住各个变换函数的精确顺序。

{{InteractiveExample("CSS 演示：translate")}}

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
  background: rgb(90 90 90 / 0.7);
  transform: translateZ(50px);
}

.back {
  background: rgb(0 210 0 / 0.7);
  transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgb(210 0 0 / 0.7);
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgb(0 0 210 / 0.7);
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgb(210 210 0 / 0.7);
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgb(210 0 210 / 0.7);
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
  - : 一个 {{cssxref("&lt;length&gt;")}} 或 {{cssxref("&lt;percentage&gt;")}} 值，用于指定沿 X 轴的平移。等价于只指定单个值的 `translate()`（2D 平移）函数。
- 两个 {{cssxref("&lt;length-percentage&gt;")}} 值
  - : 两个 {{cssxref("&lt;length&gt;")}} 或 {{cssxref("&lt;percentage&gt;")}} 值，分别用于指定 2D 平移的 X 轴和 Y 轴平移值（分别对应 X、Y 轴）。等价于带有两个值的 `translate()` （2D 平移）函数。
- 三个值
  - : 两个 {{cssxref("&lt;length-percentage&gt;")}} 值和单个 {{cssxref("&lt;length&gt;")}} 值，分别指定 3D 平移的 X、Y 和 Z 轴平移值（分别对应 X、Y、Z 轴）。等价于 `translate3d()`（3D 平移）函数。
- `none`
  - : 表示不应用任何平移。

## 形式定义

{{CSSInfo}}

## 形式语法

{{CSSSyntax}}

## 示例

### 悬停时平移元素

此示例展示了如何使用 `translate` 属性在三个轴上移动元素。第一个方块沿 X 轴 移动，第二个方块沿 X 轴和 Y 轴 移动。第三个方块沿 X、Y 和 Z 轴 移动，并且由于在父元素上添加了 {{cssxref('perspective')}}，它看起来像是朝向观察者移动。

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
  width: 7em;
  line-height: 7em;
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

注意：skew 不是一个独立的变换值。
