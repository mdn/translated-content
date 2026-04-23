---
title: scroll-snap-stop
slug: Web/CSS/Reference/Properties/scroll-snap-stop
---

[CSS](/zh-CN/docs/Web/CSS) 属性 **`scroll-snap-stop`** 定义了滚动容器是否可“越过”吸附位置。

{{InteractiveExample("CSS Demo: scroll-snap-stop")}}

```css interactive-example-choice
scroll-snap-stop: normal;
```

```css interactive-example-choice
scroll-snap-stop: always;
```

```html interactive-example
<section class="default-example" id="default-example">
  <p class="explanation">
    The effect of this property can be noticed on devices with a touchpad. Try
    to scroll through all items with a single swing. Value
    <b class="keyword">'normal'</b> should pass through all pages, while
    <b class="keyword">'always'</b> will stop at the second page.
  </p>
  <div class="snap-container">
    <div>1</div>
    <div id="example-element">2</div>
    <div>3</div>
  </div>
  <div class="info">Scroll »</div>
</section>
```

```css interactive-example
.default-example {
  flex-direction: column;
}

.explanation {
  margin-top: 0;
}

.keyword {
  color: darkorange;
}

.default-example .info {
  width: 100%;
  padding: 0.5em 0;
  font-size: 90%;
}

.snap-container {
  text-align: left;
  width: 250px;
  height: 250px;
  overflow-x: scroll;
  display: flex;
  box-sizing: border-box;
  border: 1px solid black;
  scroll-snap-type: x mandatory;
}

.snap-container > div {
  flex: 0 0 250px;
  width: 250px;
  background-color: rebeccapurple;
  color: #fff;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
}

.snap-container > div:nth-child(even) {
  background-color: #fff;
  color: rebeccapurple;
}
```

## 语法

```css
/* 关键字值 */
scroll-snap-stop: normal;
scroll-snap-stop: always;

/* 全局值 */
scroll-snap-stop: inherit;
scroll-snap-stop: initial;
scroll-snap-stop: revert;
scroll-snap-stop: revert-layer;
scroll-snap-stop: unset;
```

### 取值

- `normal`
  - : 在滚动此元素的滚动容器的可见{{Glossary("viewport", "视口")}}时，滚动容器可“越过”吸附位置。
- `always`
  - : 滚动容器不得“越过”吸附位置，必须吸附至此元素的第一个吸附位置。

## 形式定义

{{CSSInfo}}

## 形式语法

{{CSSSyntax}}

## 示例

### 设置不同的吸附定格

下列示例演示了 `scroll-snap-stop` 的值 `always` 和 `normal` 之间的对比。当 `scroll-snap-type` 属性被设置为 `mandatory` 时——即此示例所使用的设置——`scroll-snap-stop` 的两值之间的区别更为明显。

#### HTML

```html
<p>scroll-snap-stop: always（x 轴强制）</p>
<div class="x mandatory-scroll-snapping always-stop">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<p>在奇数位子元素上 scroll-snap-stop: always（x 轴强制）</p>
<div class="x mandatory-scroll-snapping always-stop-odd">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<p>在偶数位子元素上 scroll-snap-stop: always（x 轴强制）</p>
<div class="x mandatory-scroll-snapping always-stop-even">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<p>scroll-snap-stop: normal（x 轴强制）</p>
<div class="x mandatory-scroll-snapping normal-stop">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<p>scroll-snap-stop: always（y 轴强制）</p>
<div class="y mandatory-scroll-snapping always-stop">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<p>scroll-snap-stop: normal（y 轴强制）</p>
<div class="y mandatory-scroll-snapping normal-stop">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>
```

#### CSS

```css hidden
/* 设定 */
body {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: column nowrap;
  font-family: monospace;
  text-align: center;
}

div[class] {
  font-size: 3rem;
  0.
  display: flex;
  overflow: auto;
  flex: none;
}

.x {
  width: 50%;
  min-width: 15rem;
  height: 6rem;
  flex-flow: row nowrap;
}

.y {
  width: 30%;
  min-width: 12rem;
  height: 12rem;
  flex-flow: column nowrap;
}

div > div {
  flex: none;
  outline: 1px solid #333;
}

.x > div {
  width: 90%;
  height: 100%;
}

.y > div {
  width: 100%;
  height: 80%;
}

/* 上色 */
div > div:nth-child(even) {
  background-color: #87ea87;
}

div > div:nth-child(odd) {
  background-color: #87ccea;
}
```

```css
/* 在父元素上设定强制滚动吸附 */
.x.mandatory-scroll-snapping {
  scroll-snap-type: x mandatory;
}

.y.mandatory-scroll-snapping {
  scroll-snap-type: y mandatory;
}

/* 在子元素上定义滚动吸附对齐方式 */
div > div {
  scroll-snap-align: center;
}

/* 在子元素上定义滚动吸附定格 */
.always-stop > div {
  scroll-snap-stop: always;
}

.always-stop-odd > div:nth-of-type(odd) {
  scroll-snap-stop: always;
}

.always-stop-even > div:nth-of-type(even) {
  scroll-snap-stop: always;
}

.normal-stop > div {
  scroll-snap-stop: normal;
}
```

#### 结果

在下方的 x 轴盒和 y 轴盒中分别从左往右和从上往下滚动。在 `scroll-snap-stop` 属性被设置为 `always` 的 x 轴盒和 y 轴盒中，即使快速滚动，滚动也将被强制止于吸附点。然而在 `scroll-snap-stop` 属性被设置为 `normal` 的盒子中，吸附点在快速滚动时被跳过。

若有要求，则可在滚动容器中选择总是（`always`）止于哪些元素。下列示例通过将奇数位和偶数为的元素设为目标对此进行了演示，可根据要求选择不同的策略。在下列示例中的第二和第三个盒子中，滚动分别不会“越过”奇数位和偶数位的元素。

{{EmbedLiveSample("设置不同的吸附定格", "100%", 1080)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS 滚动吸附](/zh-CN/docs/Web/CSS/Guides/Scroll_snap)
- [用 CSS 滚动吸附明确控制滚动](https://web.developers.google.cn/articles/css-scroll-snap)
