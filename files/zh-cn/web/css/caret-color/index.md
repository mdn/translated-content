---
title: caret-color
slug: Web/CSS/caret-color
---

{{CSSRef}}

**`caret-color`** 属性用来定义**插入光标**（caret）的颜色，这里说的插入光标，就是那个在网页的可编辑器区域内，用来指示用户的输入具体会插入到哪里的那个一闪一闪的形似竖杠 `|` 的东西。

{{EmbedInteractiveExample("pages/css/caret-color.html")}}

附注：上面说的“插入光标”（insertion caret）只是光标（caret）的其中一种。比如一些浏览器有一种光标叫做“导航光标“（navigation caret），它可以在不可编辑区域内来回移动。此外，当鼠标指针移动到一段 {{cssxref("cursor")}} 属性是 `auto` 的文本上方时，或移动到 {{cssxref("cursor")}} 属性是 `text`、 `vertical-text` 的內容上方時，虽然看起来有点像插入光标，但它不是插入光标（caret），而是鼠标指针光标（cursor）。

## 语法

```css
/* Keyword values */
caret-color: auto;
caret-color: transparent;
caret-color: currentColor;

/* <color> values */
caret-color: red;
caret-color: #5729e9;
caret-color: rgb(0, 200, 0);
caret-color: hsla(228, 4%, 24%, 0.8);
```

### 值

- `auto`

  - : 默认颜色，此时浏览器应该用 `currentcolor` 来作为插入光标的颜色，但浏览器可能还会根据当前的背景色、阴影色等来对该颜色进行适当的调整以确保该插入光标具有良好的可见性。

    > **备注：** **auto** 属性值在 CSS transitions/animations 中是不支持颜色插补（interpolated）的

- {{cssxref("&lt;color&gt;")}}
  - : 所指定的插入光标的颜色值。

### 正式语法

{{csssyntax}}

## 示例

### HTML

```html
<input />
```

### CSS

```css
input {
  caret-color: red;
}
```

### 示例演示

{{EmbedLiveSample("示例", 300, 40)}}

## 规范

{{Specifications}}

{{cssinfo}}

## 浏览器兼容性

{{Compat}}
