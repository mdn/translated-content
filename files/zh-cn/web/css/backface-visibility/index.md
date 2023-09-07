---
title: backface-visibility
slug: Web/CSS/backface-visibility
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) 属性 **`backface-visibility`** 指定当元素背面朝向观察者时是否可见。

{{EmbedInteractiveExample("pages/css/backface-visibility.html")}}

元素的背面是其正面的镜像。虽然在 2D 中不可见，但是当变换导致元素在 3D 空间中旋转时，背面可以变得可见。 （此属性对 2D 变换没有影响，它没有透视。）

## 语法

```css
/* 关键字值 */
backface-visibility: visible;
backface-visibility: hidden;

/* 全局值 */
backface-visibility: inherit;
backface-visibility: initial;
backface-visibility: unset;
```

`backface-visibility` 属性可以指定为下面列出的值

### 值

- `visible`
  - : 背面朝向用户时可见。
- `hidden`
  - : 背面朝向用户时不可见。

### 形式定义

{{cssinfo}}

### 形式语法

{{csssyntax}}

## 示例

### 具有透明和不透明面的立方体

这个例子展示了一个透明面的立方体和一个不透明面的立方体。

#### HTML

```html
<table>
  <tr>
    <th><code>backface-visibility: visible;</code></th>
    <th><code>backface-visibility: hidden;</code></th>
  </tr>
  <tr>
    <td>
      <div class="container">
        <div class="cube showbf">
          <div class="face front">1</div>
          <div class="face back">2</div>
          <div class="face right">3</div>
          <div class="face left">4</div>
          <div class="face top">5</div>
          <div class="face bottom">6</div>
        </div>
      </div>
      <p>
        由于所有的面都是部分透明的，所以背面（2、4、5）可以透过前面（1、3、6）看到。
      </p>
    </td>
    <td>
      <div class="container">
        <div class="cube hidebf">
          <div class="face front">1</div>
          <div class="face back">2</div>
          <div class="face right">3</div>
          <div class="face left">4</div>
          <div class="face top">5</div>
          <div class="face bottom">6</div>
        </div>
      </div>
      <p>后面的三个面（2、4、5）被隐藏了。</p>
    </td>
  </tr>
</table>
```

#### CSS

```css
/* Classes that will show or hide the
   three back faces of the "cube" */
.showbf div {
  backface-visibility: visible;
}

.hidebf div {
  backface-visibility: hidden;
}

/* Define the container div, the cube div, and a generic face */
.container {
  width: 150px;
  height: 150px;
  margin: 75px 0 0 75px;
  border: none;
}

.cube {
  width: 100%;
  height: 100%;
  perspective: 550px;
  perspective-origin: 150% 150%;
  transform-style: preserve-3d;
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
}

.back {
  background: rgba(0, 255, 0, 1);
  color: black;
  transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgba(196, 0, 0, 0.7);
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgba(0, 0, 196, 0.7);
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgba(196, 196, 0, 0.7);
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgba(196, 0, 196, 0.7);
  transform: rotateX(-90deg) translateZ(50px);
}

/* Make the table a little nicer */
th,
p,
td {
  background-color: #eeeeee;
  margin: 0px;
  padding: 6px;
  font-family: sans-serif;
  text-align: left;
}
```

#### 结果

{{EmbedLiveSample('具有透明和不透明面的立方体', '100%', 360)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 CSS 变换](/zh-CN/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
