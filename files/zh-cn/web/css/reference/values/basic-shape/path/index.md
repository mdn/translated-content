---
title: path()
slug: Web/CSS/Reference/Values/basic-shape/path
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

`path()` [CSS](/zh-CN/docs/Web/CSS) [函数](/zh-CN/docs/Web/CSS/Reference/Values/Functions)接受 [SVG 路径](/zh-CN/docs/Web/SVG/Reference/Element/path)字符串作为参数，用于 [CSS 形状](/zh-CN/docs/Web/CSS/Guides/Shapes)和[运动路径](/zh-CN/docs/Web/CSS/Guides/Motion_path)模块中绘制形状。`path()` 函数是 {{cssxref("&lt;basic-shape&gt;")}} 数据类型的值。它可以用于 CSS 的 [`offset-path`](/zh-CN/docs/Web/CSS/Reference/Properties/offset-path) 和 [`clip-path`](/zh-CN/docs/Web/CSS/Reference/Properties/clip-path) 属性，以及 SVG 的 [`d`](/zh-CN/docs/Web/SVG/Reference/Attribute/d) 属性。

使用 `path()` 函数有一些限制。路径必须定义为单个字符串，因此不能使用变量（[`var()`](/zh-CN/docs/Web/CSS/Reference/Values/var) 函数）创建自定义路径。此外，路径中的所有长度都隐式定义为[像素](/zh-CN/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#绝对长度单位)（`px`）单位；不能使用其他单位。与 `path()` 函数相比，[`shape()`](/zh-CN/docs/Web/CSS/Reference/Values/basic-shape/shape) 函数提供了更大的灵活性。

{{InteractiveExample("CSS 演示：path()")}}

```css interactive-example-choice
clip-path: path(
  "M  20  240 \
 L  20  80 L 160  80 \
 L 160  20 L 280 100 \
 L 160 180 L 160 120 \
 L  60 120 L  60 240 Z"
);
```

```css interactive-example-choice
clip-path: path(
  "M 20 240 \
 C 20 0 300 0 300 240 Z"
);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element"></div>
</section>
```

```css interactive-example
#default-example {
  background: #fe9;
}

#example-element {
  background: linear-gradient(to bottom right, #f52, #05f);
  width: 100%;
  height: 100%;
}
```

## 语法

```css
path("M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80")

/* 当仅用于 clip-path 时 */
path(evenodd,"M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80")
```

### 参数

- [`<fill-rule>`](/zh-CN/docs/Web/SVG/Reference/Attribute/fill-rule) {{optional_inline}}
  - : 定义路径的哪些部分位于形状内部。可能的值包括：
    - `nonzero`：如果从点绘制的射线从左至右穿过的路径段多于从右至左穿过的路径段，从而导致计数不为零，则该点被视为在形状内部。当省略 `<fill-rule>`时，这是默认值。
    - `evenodd`：如果从某点绘制的射线穿过的路径段数目为奇数，则该点被视为在形状内部。这意味着射线每次进入形状内部时，退出的次数并不相等，表明进入的次数为奇数，而退出的次数为偶数。

    > [!WARNING]
    > {{cssxref("offset-path")}} 不支持 `<fill-rule>` 值，使用它会使属性失效。

- {{cssxref("string")}}
  - : 用于定义 [SVG 路径](/zh-CN/docs/Web/SVG/Reference/Element/path)的[数据字符串](/zh-CN/docs/Web/SVG/Reference/Attribute/d)。该 `<string>` 的内容语法与 SVG 相同。SVG 路径数据字符串包含隐式使用像素单位的[路径命令](/zh-CN/docs/Web/SVG/Reference/Attribute/d#路径命令)。空路径被视为无效。

### 返回值

返回一个 {{cssxref("basic-shape")}} 值。

## 形式语法

{{csssyntax}}

## 示例

### 使用 `path()` 函数作为 `offset-path` 值

在下面的示例中，`path()` 函数作为 {{cssxref("offset-path")}} 值提供，用于为小球创建一条椭圆形移动路径。

```html
<div id="path">
  <div id="ball"></div>
</div>
<button>动起来！</button>
```

```css
#path {
  margin: 40px;
  width: 400px;
  height: 200px;

  /* 画出灰色斜坡 */
  background: radial-gradient(at 50% 0%, transparent 70%, grey 70%, grey 100%);
}

#ball {
  width: 30px;
  height: 30px;
  background-color: red;
  border-radius: 50%;

  /* 标出椭圆形路径 */
  offset-path: path("M 15 15 A 6 5.5 10 0 0 385 15");
}
```

```js
const btn = document.querySelector("button");
const ball = document.getElementById("ball");

btn.addEventListener("click", () => {
  btn.setAttribute("disabled", true);
  setTimeout(() => btn.removeAttribute("disabled"), 6000);

  ball.animate(
    // 将偏移路径动画化
    { offsetDistance: [0, "100%"] },
    {
      duration: 1500,
      iterations: 4,
      easing: "cubic-bezier(.667,0.01,.333,.99)",
      direction: "alternate",
    },
  );
});
```

{{EmbedLiveSample("使用 path 函数作为 offset-path 值", "100%", 350)}}

### 修改 SVG 路径 d 属性的值

`path()` 可以用于修改 SVG 的 [`d` 属性](/zh-CN/docs/Web/SVG/Reference/Attribute/d)的值，该属性也可以在 CSS 中设置为 `none`。

如果支持将 `d` 作为 CSS 属性，当你将鼠标悬停在“V”符号上面时，它会垂直翻转。

#### CSS

```css
html,
body,
svg {
  height: 100%;
}

/* 当悬停时显示此路径 */
#svg_css_ex1:hover path {
  d: path("M20,80 L50,20 L80,80");
}
```

#### HTML

```html
<svg id="svg_css_ex1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path fill="none" stroke="red" d="M20,20 L50,80 L80,20" />
</svg>
```

#### 结果

{{EmbedLiveSample('修改 SVG 路径 d 属性的值', '100%', 200)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("&lt;shape-outside&gt;")}}
- [CSS 形状](/zh-CN/docs/Web/CSS/Guides/Shapes)
- [CSS 形状概述](/zh-CN/docs/Web/CSS/Guides/Shapes/Overview)
- [SVG 路径语法图解指南](https://css-tricks.com/svg-path-syntax-illustrated-guide/)
