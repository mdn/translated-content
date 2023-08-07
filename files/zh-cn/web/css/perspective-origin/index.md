---
title: perspective-origin
slug: Web/CSS/perspective-origin
---

{{CSSRef}}

[CSS](/zh-CN/docs/CSS) 属性 **`perspective-origin`** 指定了观察者的位置，用作 {{cssxref("perspective")}} 属性的消失点。

{{EmbedInteractiveExample("pages/css/perspective-origin.html")}}

## 语法

```css
/* One-value syntax */
perspective-origin: x-position;

/* Two-value syntax */
perspective-origin: x-position y-position;

/* When both x-position and y-position are keywords,
   the following is also valid */
perspective-origin: y-position x-position;

/* Global values */
perspective-origin: inherit;
perspective-origin: initial;
perspective-origin: unset;
```

### 值

- _x-position_

  - : 指定*消失点*的横坐标，其值有以下形式：

    - {{cssxref("&lt;length-percentage&gt;")}} 长度值或相对于元素宽度的百分比值，可为负值。
    - `left`, 关键字，0 值的简记。
    - `center`, 关键字，50% 的简记。
    - `right`, 关键字，100% 的简记。

- _y-position_

  - : 指定*消失点*的纵坐标，其值有以下形式：

    - {{cssxref("&lt;length-percentage&gt;")}} 长度值或相对于元素高度的百分比值，可为负值。
    - `top`, 关键字，0 值的简记。
    - `center`, 关键字，50% 的简记。
    - `bottom`, 关键字，100% 的简记。

### 形式语法

{{csssyntax}}

## 示例

### 修改 perspective origin

这个例子展示了带有常用 `perspective-origin` 值的立方体。

#### 结果

{{EmbedLiveSample('修改 perspective origin', '100%', 700)}}

#### HTML

```html
<table>
  <tbody>
    <tr>
      <th>
        <code>perspective-origin: top left;</code>
      </th>
      <th>
        <code>perspective-origin: top;</code>
      </th>
      <th>
        <code>perspective-origin: top right;</code>
      </th>
    </tr>
    <tr>
      <td>
        <div class="container">
          <div class="cube potl">
            <div class="face front">1</div>
            <div class="face back">2</div>
            <div class="face right">3</div>
            <div class="face left">4</div>
            <div class="face top">5</div>
            <div class="face bottom">6</div>
          </div>
        </div>
      </td>
      <td>
        <div class="container">
          <div class="cube potm">
            <div class="face front">1</div>
            <div class="face back">2</div>
            <div class="face right">3</div>
            <div class="face left">4</div>
            <div class="face top">5</div>
            <div class="face bottom">6</div>
          </div>
        </div>
      </td>
      <td>
        <div class="container">
          <div class="cube potr">
            <div class="face front">1</div>
            <div class="face back">2</div>
            <div class="face right">3</div>
            <div class="face left">4</div>
            <div class="face top">5</div>
            <div class="face bottom">6</div>
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <th>
        <code>perspective-origin: left;</code>
      </th>
      <th>
        <code>perspective-origin: 50% 50%;</code>
      </th>
      <th>
        <code>perspective-origin: right;</code>
      </th>
    </tr>
    <tr>
      <td>
        <div class="container">
          <div class="cube poml">
            <div class="face front">1</div>
            <div class="face back">2</div>
            <div class="face right">3</div>
            <div class="face left">4</div>
            <div class="face top">5</div>
            <div class="face bottom">6</div>
          </div>
        </div>
      </td>
      <td>
        <div class="container">
          <div class="cube pomm">
            <div class="face front">1</div>
            <div class="face back">2</div>
            <div class="face right">3</div>
            <div class="face left">4</div>
            <div class="face top">5</div>
            <div class="face bottom">6</div>
          </div>
        </div>
      </td>
      <td>
        <div class="container">
          <div class="cube pomr">
            <div class="face front">1</div>
            <div class="face back">2</div>
            <div class="face right">3</div>
            <div class="face left">4</div>
            <div class="face top">5</div>
            <div class="face bottom">6</div>
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <th>
        <code>perspective-origin: bottom left;</code>
      </th>
      <th>
        <code>perspective-origin: bottom;</code>
      </th>
      <th>
        <code>perspective-origin: bottom right;</code>
      </th>
    </tr>
    <tr>
      <td>
        <div class="container">
          <div class="cube pobl">
            <div class="face front">1</div>
            <div class="face back">2</div>
            <div class="face right">3</div>
            <div class="face left">4</div>
            <div class="face top">5</div>
            <div class="face bottom">6</div>
          </div>
        </div>
      </td>
      <td>
        <div class="container">
          <div class="cube pobm">
            <div class="face front">1</div>
            <div class="face back">2</div>
            <div class="face right">3</div>
            <div class="face left">4</div>
            <div class="face top">5</div>
            <div class="face bottom">6</div>
          </div>
        </div>
      </td>
      <td>
        <div class="container">
          <div class="cube pobr">
            <div class="face front">1</div>
            <div class="face back">2</div>
            <div class="face right">3</div>
            <div class="face left">4</div>
            <div class="face top">5</div>
            <div class="face bottom">6</div>
          </div>
        </div>
      </td>
    </tr>
  </tbody>
</table>
```

#### CSS

```css
/* Shorthand classes for perspective-origin values */
.potl {
  perspective-origin: top left;
  -webkit-perspective-origin: top left;
}

.potm {
  perspective-origin: top;
  -webkit-perspective-origin: top;
}

.potr {
  perspective-origin: top right;
  -webkit-perspective-origin: top right;
}

.poml {
  perspective-origin: left;
  -webkit-perspective-origin: left;
}

.pomm {
  perspective-origin: 50% 50%;
  -webkit-perspective-origin: 50% 50%;
}

.pomr {
  perspective-origin: right;
  -webkit-perspective-origin: right;
}

.pobl {
  perspective-origin: bottom left;
  -webkit-perspective-origin: bottom left;
}

.pobm {
  perspective-origin: bottom;
  -webkit-perspective-origin: bottom;
}

.pobr {
  perspective-origin: bottom right;
  -webkit-perspective-origin: bottom right;
}

/* Define the container div, the cube div, and a generic face */
.container {
  width: 100px;
  height: 100px;
  margin: 24px;
  border: none;
}

.cube {
  width: 100%;
  height: 100%;
  backface-visibility: visible;
  perspective: 300px;
  transform-style: preserve-3d;
  -webkit-backface-visibility: visible;
  -webkit-perspective: 300px;
  -webkit-transform-style: preserve-3d;
}

.face {
  display: block;
  position: absolute;
  width: 100px;
  height: 100px;
  border: none;
  line-height: 100px;
  font-family: sans-serif;
  font-size: 60px;
  color: white;
  text-align: center;
}

/* Define each face based on direction */
.front {
  background: rgba(0, 0, 0, 0.3);
  transform: translateZ(50px);
  -webkit-transform: translateZ(50px);
}

.back {
  background: rgba(0, 255, 0, 1);
  color: black;
  transform: rotateY(180deg) translateZ(50px);
  -webkit-transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgba(196, 0, 0, 0.7);
  transform: rotateY(90deg) translateZ(50px);
  -webkit-transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgba(0, 0, 196, 0.7);
  transform: rotateY(-90deg) translateZ(50px);
  -webkit-transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgba(196, 196, 0, 0.7);
  transform: rotateX(90deg) translateZ(50px);
  -webkit-transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgba(196, 0, 196, 0.7);
  transform: rotateX(-90deg) translateZ(50px);
  -webkit-transform: rotateX(-90deg) translateZ(50px);
}

/* Make the table a little nicer */
th,
p,
td {
  background-color: #eeeeee;
  padding: 10px;
  font-family: sans-serif;
  text-align: left;
}
```

## 规范

{{Specifications}}

{{cssinfo}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Using CSS Transforms](/zh-CN/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
