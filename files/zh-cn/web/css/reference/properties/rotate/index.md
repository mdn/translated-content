---
title: rotate
slug: Web/CSS/Reference/Properties/rotate
---

**`rotate`** 属性允许你单独设置 **`transform`** 的旋转属性。这种映射方式可以让我们更方便的设置我们想要的效果，并且避免了简写形式需要记忆属性顺序的不方便之处。

## 语法

```css
/* Keyword values */
scale: none;

/* Angle value */
rotate: 90deg;
rotate: 0.25turn;
rotate: 1.57rad;

/* x, y, or z axis name plus angle */
rotate: x 90deg;
rotate: y 0.25turn;
rotate: z 1.57rad;

/* Vector plus angle value */
rotate: 1 1 1 90deg;
```

### 值

- 角度值
  - : An {{cssxref("&lt;angle&gt;")}} specifying the angle to rotate the affected element through, around the Z axis. Equivalent to a `rotate()` (2D rotation) function.
- x, y 或者 z 轴名称加上角度值
  - : The name of the axis you want to rotate the affected element around (`"x"`, "`y`", or "`z"`), plus an {{cssxref("&lt;angle&gt;")}} specifying the angle to rotate the element through. Equivalent to a `rotateX()`/`rotateY()`/`rotateZ()` (3D rotation) function.
- 向量加上角度值
  - : Three {{cssxref("&lt;number&gt;")}}s representing an origin-centered vector that defines a line around which you want to rotate the element, plus an {{cssxref("&lt;angle&gt;")}} specifying the angle to rotate the element through. Equivalent to a `rotate3d()` (3D rotation) function.
- `none`
  - : 指定不应用旋转

### 形式语法

{{csssyntax}}

## 示例

### HTML

```html
<div>
  <p class="rotate">Rotation</p>
</div>
```

### CSS

```css
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

div {
  width: 150px;
  margin: 0 auto;
}

p {
  padding: 10px 5px;
  border: 3px solid black;
  border-radius: 20px;
  width: 150px;
  font-size: 1.2rem;
  text-align: center;
}

.rotate {
  transition: rotate 1s;
}

div:hover .rotate {
  rotate: 1 -0.5 1 180deg;
}
```

### 结果

{{EmbedLiveSample('示例')}}

## 规范

{{Specifications}}

{{cssinfo}}

## 浏览器兼容性

{{Compat}}
